/* ==========================================================================
   CONTACT SCENE — dotted globe + drifting particles
   --------------------------------------------------------------------------
   Loads after script.js (reuses $, REDUCED, DESKTOP). No dependency added:
   the site has no Three.js/WebGL anywhere, so this is a plain Canvas 2D
   point-cloud sphere (Fibonacci sphere distribution, rotated around the Y
   axis) plus a small drifting-particle field, both on one canvas and one
   rAF loop. Pauses entirely off-screen and under prefers-reduced-motion
   (a single static frame is drawn instead — still atmospheric, no motion).

   01  Sphere point generation
   02  Particle generation
   03  Render loop
   04  Init — sizing, visibility gating, resize
   ========================================================================== */
const ContactScene = {
  init() {
    const canvas = $('#contactScene');
    const section = $('#contact');
    if (!canvas || !section || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const mobile = !DESKTOP();
    const DPR = Math.min(devicePixelRatio || 1, 2);

    const N_SPHERE = mobile ? 380 : 950;
    const N_DUST = mobile ? 22 : 65;

    let w = 0, h = 0;
    let sphere = [];
    let dust = [];
    let angle = 0;
    let raf = null;
    let visible = false;
    let last = 0;

    /* ── 01. SPHERE — Fibonacci/golden-angle distribution: N points spread
       near-uniformly over a unit sphere, cheap and dependency-free. ── */
    function buildSphere() {
      sphere = [];
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < N_SPHERE; i++) {
        const yy = 1 - (i / (N_SPHERE - 1)) * 2;
        const rad = Math.sqrt(Math.max(0, 1 - yy * yy));
        const theta = golden * i;
        sphere.push({
          x: Math.cos(theta) * rad,
          y: yy,
          z: Math.sin(theta) * rad,
          size: 0.6 + Math.random() * 0.9,
          tint: Math.random()
        });
      }
    }

    /* ── 02. DUST — a small field drifting bottom -> top, well behind the
       globe (layer order: dust painted first, globe painted over it). ── */
    function buildDust() {
      dust = [];
      for (let i = 0; i < N_DUST; i++) {
        dust.push(makeDustParticle(Math.random() * h));
      }
    }
    function makeDustParticle(startY) {
      const depth = Math.random();                       // 0 distant .. 1 close
      return {
        x: Math.random() * w,
        y: startY,
        depth,
        r: 0.6 + depth * 1.6,
        speed: (6 + depth * 16) / 1000,                   // px/ms, slow
        drift: (Math.random() - 0.5) * 0.012,
        baseAlpha: 0.12 + depth * 0.4,
        twinkle: Math.random() * Math.PI * 2
      };
    }

    /* ── 03. RENDER ── */
    const PALETTE = [
      [245, 243, 255],   // --text, off-white
      [192, 132, 252],   // --acc-3, lavender
      [139, 92, 246]     // --acc, violet
    ];
    function colorFor(t, alpha) {
      const c = PALETTE[t < 0.55 ? 0 : t < 0.85 ? 1 : 2];
      return `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(3)})`;
    }

    function draw(dt) {
      ctx.clearRect(0, 0, w, h);
      if (!w || !h) return;

      /* Globe geometry, computed first so the backdrop glow below can
         line up with where the dots will actually sit */
      const R = Math.min(w * (mobile ? 0.68 : 0.58), h * 1.15);
      const cx = w / 2;
      const cy = h + R * (mobile ? 0.4 : 0.22);

      /* A soft glow seated exactly behind the globe's visible cap — this
         is what makes the dot cluster below read as "a sphere" rather
         than blending into the general dust field around it */
      const glowY = cy - R * 0.55;
      const grad = ctx.createRadialGradient(cx, glowY, 0, cx, glowY, R * 0.95);
      grad.addColorStop(0, 'rgba(139,92,246,.20)');
      grad.addColorStop(0.55, 'rgba(99,102,241,.08)');
      grad.addColorStop(1, 'rgba(99,102,241,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, Math.max(0, glowY - R), w, h - Math.max(0, glowY - R));

      /* Dust — simple screen-space drift, no 3D math needed */
      dust.forEach((p) => {
        p.y -= p.speed * dt;
        p.x += p.drift;
        p.twinkle += dt * 0.0012;
        if (p.y < -10) Object.assign(p, makeDustParticle(h + 10));
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        const a = p.baseAlpha * (0.75 + 0.25 * Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.fillStyle = `rgba(224,214,255,${a.toFixed(3)})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      const cosA = Math.cos(angle), sinA = Math.sin(angle);
      for (let i = 0; i < sphere.length; i++) {
        const p = sphere[i];
        const rx = p.x * cosA - p.z * sinA;
        const rz = p.x * sinA + p.z * cosA;
        if (rz < -0.35) continue;                          // skip the far hemisphere
        const sx = cx + rx * R;
        const sy = cy - p.y * R;
        if (sy > h + 20 || sy < -20) continue;              // nothing above the section to draw
        const depth = (rz + 1) / 2;                          // 0 back .. 1 front
        const alpha = (0.34 + depth * 0.56) * (0.72 + 0.28 * ((h - sy) / h));
        const size = p.size * (0.95 + depth * 1.35) * (mobile ? 0.85 : 1);
        ctx.beginPath();
        ctx.fillStyle = colorFor(p.tint, Math.max(0, Math.min(1, alpha)));
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /* ── 04. LOOP + INIT ── */
    function frame(t) {
      if (!visible) { raf = null; return; }
      const dt = last ? Math.min(48, t - last) : 16;
      last = t;
      angle += dt * 0.00003;                                 // a full turn in several minutes
      draw(dt);
      raf = requestAnimationFrame(frame);
    }
    function kick() {
      if (!raf && visible && !REDUCED) { last = 0; raf = requestAnimationFrame(frame); }
    }

    function resize() {
      const r = section.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      canvas.width = Math.round(w * DPR);
      canvas.height = Math.round(h * DPR);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildSphere();
      buildDust();
      draw(16);                                              // repaint immediately, even if paused
    }

    let rTO = null;
    addEventListener('resize', () => {
      clearTimeout(rTO);
      rTO = setTimeout(resize, 180);
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) kick();
      }, { rootMargin: '80px 0px' });
      io.observe(section);
    } else {
      visible = true;
    }

    resize();
    if (REDUCED) { visible = true; draw(16); }                 // one static, atmospheric frame
    else kick();
  }
};

ContactScene.init();
