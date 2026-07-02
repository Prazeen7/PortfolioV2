import { useEffect, useRef } from "react";

export default function AnimatedBackground({ opacity = 0.35 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    const gridLines = [];
    const backgroundStars = [];
    const NUM_BG_STARS = 20;
    const BASE_COLOR = "#e86f51";
    const GRID_COLS = 6;
    const GRID_ROWS = 5;

    // ---- Background star (bright, simple) ----
    const createBgStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0.8 + Math.random() * 1.8,
      twinkleSpeed: 0.008 + Math.random() * 0.02,
      phase: Math.random() * Math.PI * 2,
      baseAlpha: 0.6 + Math.random() * 0.4,
    });

    // ---- Grid line emitter (optimized) ----
    const createGridLine = (col, row) => {
      const x = (col / (GRID_COLS - 1)) * width;
      const y = (row / (GRID_ROWS - 1)) * height;
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3.5;
      const trailLength = 60 + Math.floor(Math.random() * 40);
      return {
        x,
        y,
        angle,
        speed,
        trail: [],
        trailLength,
        maxOpacity: 0.8 + Math.random() * 0.2,
      };
    };

    // ---- Resize ----
    const resize = () => {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // ---- Init ----
    const init = () => {
      backgroundStars.length = 0;
      for (let i = 0; i < NUM_BG_STARS; i++) {
        backgroundStars.push(createBgStar());
      }
      gridLines.length = 0;
      for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS; col++) {
          gridLines.push(createGridLine(col, row));
        }
      }
    };

    // ---- Animation loop (optimized) ----
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = opacity;

      backgroundStars.forEach((star) => {
        star.phase += star.twinkleSpeed;
        const alpha = star.baseAlpha * (0.7 + 0.3 * Math.sin(star.phase));
        ctx.globalAlpha = opacity * alpha;
        ctx.fillStyle = BASE_COLOR;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      gridLines.forEach((line) => {
        // Move head
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        // Update trail
        line.trail.push({ x: line.x, y: line.y });
        if (line.trail.length > line.trailLength) {
          line.trail.shift();
        }

        // Reset if off-screen
        const margin = 100;
        const offScreen = line.x > width + margin ||
          line.x < -margin ||
          line.y > height + margin ||
          line.y < -margin;
        if (offScreen) {
          const newLine = createGridLine(
            Math.floor(Math.random() * GRID_COLS),
            Math.floor(Math.random() * GRID_ROWS)
          );
          Object.assign(line, newLine);
          line.trail = [];
          return;
        }
        const trailLen = line.trail.length;
        if (trailLen > 2) {
          for (let i = 0; i < trailLen - 1; i++) {
            const t = i / trailLen; 
            const alpha = t * line.maxOpacity;
            const width = (1 - t) * 3 + 1;
            ctx.globalAlpha = opacity * alpha;
            ctx.strokeStyle = `hsla(14, 100%, ${70 + 20 * (1 - t)}%, ${alpha})`;
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(line.trail[i].x, line.trail[i].y);
            ctx.lineTo(line.trail[i + 1].x, line.trail[i + 1].y);
            ctx.stroke();
          }
        }

        if (trailLen > 0) {
          const head = line.trail[trailLen - 1];
          ctx.globalAlpha = opacity * line.maxOpacity;

          ctx.fillStyle = `hsla(14, 100%, 95%, 1)`;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
          ctx.fill();
          
          const gradient = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 30);
          gradient.addColorStop(0, `rgba(232, 111, 81, ${0.5 * line.maxOpacity})`);
          gradient.addColorStop(0.5, `rgba(232, 111, 81, ${0.2 * line.maxOpacity})`);
          gradient.addColorStop(1, `rgba(232, 111, 81, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 30, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    // ---- Setup ----
    resize();
    init();
    animate();

    window.addEventListener("resize", () => {
      resize();
      init();
    });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [opacity]);

  return (
    <>
      <style>{`
        .animated-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .bg-canvas-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .bg-canvas {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: screen;
          transition: opacity 0.3s ease;
        }

        body.light-mode .bg-canvas {
          mix-blend-mode: multiply;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .bg-canvas {
            opacity: 0.9;
          }
        }

        @media (max-width: 480px) {
          .bg-canvas {
            opacity: 0.85;
          }
        }
      `}</style>

      <div className="animated-bg-container">
        <div className="bg-canvas-wrapper">
          <canvas ref={canvasRef} className="bg-canvas" />
        </div>
      </div>
    </>
  );
}