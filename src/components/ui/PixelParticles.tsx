import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

const COLORS = [
  "rgba(59, 130, 246, ",  // Brand blue
  "rgba(99, 102, 241, ",  // Indigo
  "rgba(139, 92, 246, ",  // Purple
  "rgba(6, 182, 212, ",   // Cyan
];

export const PixelParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const mouse = { x: -1000, y: -1000, radius: 130 };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initialize 90-130 particles for bold visibility
    const particleCount = Math.min(Math.floor((width * height) / 8000), 130);
    const particles: Particle[] = Array.from({ length: Math.max(particleCount, 85) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -Math.random() * 0.6 - 0.2, // Upward drift
      size: Math.random() < 0.5 ? 4 : Math.random() < 0.85 ? 5.5 : 7,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.3 + 0.7, // 70% - 100% opacity
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse Repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += Math.cos(angle) * force * 5;
          p.y += Math.sin(angle) * force * 5;
        }

        // Edge fade – fade out near left/right edges
        const edgeMargin = 150; // px from edge to start fading
        let edgeFade = 1;
        if (p.x < edgeMargin) edgeFade = p.x / edgeMargin;
        if (p.x > width - edgeMargin) edgeFade = (width - p.x) / edgeMargin;
        edgeFade = Math.max(0, Math.min(1, edgeFade));

        const drawAlpha = p.alpha * edgeFade;

        // Draw Square Pixel with shadow glow
        ctx.shadowBlur = 6 * edgeFade;
        ctx.shadowColor = `${p.color}${0.8 * edgeFade})`;
        ctx.fillStyle = `${p.color}${drawAlpha})`;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
        ctx.shadowBlur = 0; // Reset shadow blur for lines

        // Draw Connecting Lines to Neighboring Particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < 140) {
            const lineAlpha = (1 - ldist / 140) * 0.5;
            ctx.beginPath();
            ctx.moveTo(Math.round(p.x), Math.round(p.y));
            ctx.lineTo(Math.round(p2.x), Math.round(p2.y));
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 1.4;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
};
