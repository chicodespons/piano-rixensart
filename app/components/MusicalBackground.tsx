'use client';

import { useEffect, useRef } from 'react';

interface Note {
  x: number; y: number; size: number; color: string;
  type: 'whole' | 'quarter' | 'eighth';
  vx: number; vy: number; rot: number; rs: number; op: number;
}

export default function MusicalBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#f4d03f', '#2e7d32', '#ec407a', '#42a5f5', '#ff9800'];
    const types: Note['type'][] = ['whole', 'quarter', 'eighth'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const notes: Note[] = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 70 + Math.random() * 80,
      color: colors[i % colors.length],
      type: types[i % types.length],
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      rot: Math.random() * Math.PI * 2,
      rs: (Math.random() - 0.5) * 0.018,
      op: 0.12 + Math.random() * 0.1,
    }));

    const draw = (n: Note) => {
      ctx.fillStyle = n.color;
      ctx.globalAlpha = n.op;
      ctx.save();
      ctx.translate(n.x, n.y);
      ctx.rotate(n.rot);

      if (n.type === 'whole') {
        ctx.beginPath();
        ctx.ellipse(0, 0, n.size * 0.25, n.size * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.ellipse(0, 0, n.size * 0.13, n.size * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      } else if (n.type === 'quarter') {
        ctx.beginPath();
        ctx.ellipse(0, n.size * 0.5, n.size * 0.22, n.size * 0.15, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(n.size * 0.18, n.size * 0.05, n.size * 0.07, n.size * 0.5);
      } else {
        ctx.beginPath();
        ctx.ellipse(0, n.size * 0.5, n.size * 0.22, n.size * 0.15, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(n.size * 0.18, -n.size * 0.2, n.size * 0.07, n.size * 0.7);
        ctx.beginPath();
        ctx.moveTo(n.size * 0.25, -n.size * 0.2);
        ctx.lineTo(n.size * 0.45, -n.size * 0.1);
        ctx.lineTo(n.size * 0.38, -n.size * 0.05);
        ctx.lineTo(n.size * 0.18, -n.size * 0.15);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    let animId: number;
    let last = 0;

    const loop = (t: number) => {
      const dt = Math.min(0.033, (t - last) / 1000 || 0);
      last = t;
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < notes.length; i++) {
        const n = notes[i];
        let nx = n.x + n.vx * dt * 60;
        let ny = n.y + n.vy * dt * 60;
        let vx = n.vx, vy = n.vy;
        if (nx < 0 || nx > canvas.width) { vx *= -1; nx = Math.max(0, Math.min(canvas.width, nx)); }
        if (ny < 0 || ny > canvas.height) { vy *= -1; ny = Math.max(0, Math.min(canvas.height, ny)); }
        notes[i] = { ...n, x: nx, y: ny, vx, vy, rot: n.rot + n.rs * dt * 60 };
        draw(notes[i]);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}
    />
  );
}
