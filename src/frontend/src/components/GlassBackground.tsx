import { useEffect, useRef } from "react";

export function GlassBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const blobs = [
      {
        x: width * 0.2,
        y: height * 0.3,
        r: 350,
        vx: 0.15,
        vy: 0.08,
        color: "rgba(112,180,255,0.06)",
      },
      {
        x: width * 0.75,
        y: height * 0.5,
        r: 300,
        vx: -0.12,
        vy: 0.1,
        color: "rgba(191,57,204,0.05)",
      },
      {
        x: width * 0.5,
        y: height * 0.8,
        r: 280,
        vx: 0.1,
        vy: -0.07,
        color: "rgba(155,100,255,0.05)",
      },
      {
        x: width * 0.85,
        y: height * 0.15,
        r: 200,
        vx: -0.09,
        vy: 0.12,
        color: "rgba(112,200,255,0.04)",
      },
    ];

    let animId: number;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Deep dark gradient base
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "rgb(4,4,18)");
      bg.addColorStop(0.4, "rgb(6,5,22)");
      bg.addColorStop(0.8, "rgb(5,4,20)");
      bg.addColorStop(1, "rgb(8,4,18)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Subtle star field
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      for (let i = 0; i < 60; i++) {
        const sx = (i * 137.508 * width) % width;
        const sy = (i * 97.233 * height) % height;
        ctx.beginPath();
        ctx.arc(sx, sy, 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Animated blobs
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r || b.x > width + b.r) b.vx *= -1;
        if (b.y < -b.r || b.y > height + b.r) b.vy *= -1;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      blobs[0].x = width * 0.2;
      blobs[1].x = width * 0.75;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}
