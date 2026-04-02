import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  hue: number;
  swayOffset: number;
  swaySpeed: number;
}

export function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const petalsRef = useRef<Petal[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createPetal = (startY?: number): Petal => ({
      x: Math.random() * window.innerWidth,
      y: startY ?? -20,
      vx: (Math.random() - 0.5) * 1.2,
      vy: 1.5 + Math.random() * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.05,
      size: 6 + Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.5,
      hue: 350 + Math.random() * 20,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: 0.02 + Math.random() * 0.02,
    });

    // Initialize petals spread across screen
    petalsRef.current = Array.from({ length: 28 }, () =>
      createPetal(Math.random() * window.innerHeight),
    );

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of petalsRef.current) {
        // Update position
        p.y += p.vy;
        p.x += p.vx + Math.sin(time * p.swaySpeed + p.swayOffset) * 0.8;
        p.rotation += p.rotationSpeed;

        // Respawn
        if (p.y > canvas.height + 30) {
          Object.assign(p, createPetal());
        }

        // Draw petal as ellipse
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        // Petal gradient fill
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
        grad.addColorStop(0, `hsl(${p.hue}, 70%, 88%)`);
        grad.addColorStop(1, `hsl(${p.hue}, 60%, 78%)`);

        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.55, p.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="petal-canvas"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
