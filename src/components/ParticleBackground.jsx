import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    // --- Ripple Pool ---
    const ripples = [];

    // --- Floating Orbs ---
    const orbs = [];
    const ORB_COUNT = 5;

    // --- Grid ---
    const SPACING = 38;
    let cols, rows;
    let dots = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cols = Math.ceil(W / SPACING) + 2;
      rows = Math.ceil(H / SPACING) + 2;

      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            bx: c * SPACING - SPACING,
            by: r * SPACING - SPACING,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const initOrbs = () => {
      orbs.length = 0;
      for (let i = 0; i < ORB_COUNT; i++) {
        orbs.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 80 + Math.random() * 120,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          hue: [180, 220, 270, 200, 260][i], // cyan, blue, purple range
          alpha: 0.07 + Math.random() * 0.09,
        });
      }
    };

    // Add ripple at (x, y)
    const spawnRipple = (x, y) => {
      ripples.push({ x, y, r: 0, maxR: 320, strength: 22, alpha: 1 });
      // keep max 8 ripples
      if (ripples.length > 8) ripples.shift();
    };

    // Pointer tracking
    const onMove = (x, y) => {
      // throttle ripple spawn to every 80px movement
      const last = ripples[ripples.length - 1];
      if (!last || Math.hypot(x - last.x, y - last.y) > 80) {
        spawnRipple(x, y);
      }
    };

    const onMouseMove = (e) => onMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      e.preventDefault();
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onClick = (e) => spawnRipple(e.clientX, e.clientY);
    const onTouchStart = (e) => spawnRipple(e.touches[0].clientX, e.touches[0].clientY);

    let t = 0;

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, W, H);

      // ── 1. Draw floating aurora orbs ──
      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = W + o.r;
        if (o.x > W + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = H + o.r;
        if (o.y > H + o.r) o.y = -o.r;

        const grd = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grd.addColorStop(0, `hsla(${o.hue}, 100%, 65%, ${o.alpha})`);
        grd.addColorStop(1, `hsla(${o.hue}, 100%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      // ── 2. Advance ripples ──
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].r += 4.5;
        ripples[i].alpha = 1 - ripples[i].r / ripples[i].maxR;
        if (ripples[i].r > ripples[i].maxR) ripples.splice(i, 1);
      }

      // ── 3. Draw wave-dot grid ──
      dots.forEach((d) => {
        let dy = Math.sin(t * 1.2 + d.bx * 0.04 + d.phase) * 6;
        let dx = Math.cos(t * 0.9 + d.by * 0.04 + d.phase) * 4;

        // ripple displacement
        let ripplePush = 0;
        for (const rp of ripples) {
          const distToRipple = Math.hypot(d.bx - rp.x, d.by - rp.y);
          const diff = distToRipple - rp.r;
          if (Math.abs(diff) < 28) {
            const wave = Math.sin((diff / 28) * Math.PI);
            const fade = rp.alpha;
            const angle = Math.atan2(d.by - rp.y, d.bx - rp.x);
            dx += Math.cos(angle) * wave * rp.strength * fade;
            dy += Math.sin(angle) * wave * rp.strength * fade;
            ripplePush = Math.max(ripplePush, Math.abs(wave) * fade);
          }
        }

        const px = d.bx + dx;
        const py = d.by + dy;

        // Color: base cyan-blue, boosted on ripple
        const baseHue = 185 + Math.sin(t * 0.4 + d.bx * 0.01) * 60; // sweeps cyan→purple
        const sat = 90;
        const lit = 55 + ripplePush * 30;
        const alpha = 0.18 + ripplePush * 0.55;
        const size = 1.4 + ripplePush * 3.5;

        // glow on ripple hit
        if (ripplePush > 0.15) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(${baseHue}, 100%, 70%, 0.8)`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${baseHue}, ${sat}%, ${lit}%, ${alpha})`;
        ctx.fill();
      });

      ctx.shadowBlur = 0;

      // ── 4. Draw ripple ring visuals ──
      ripples.forEach((rp) => {
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${rp.alpha * 0.25})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // inner ring
        if (rp.r > 30) {
          ctx.beginPath();
          ctx.arc(rp.x, rp.y, rp.r * 0.55, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(168, 85, 247, ${rp.alpha * 0.15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    initOrbs();
    draw();

    window.addEventListener("resize", () => { resize(); initOrbs(); });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
