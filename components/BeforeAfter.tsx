"use client";

import { useRef, useState } from "react";
import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="smiles" className="relative clinic-glow mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
          Real results
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          Drag to see the difference
        </h2>
        <p className="mt-4 text-ink-soft text-lg">
          One of our smile-makeover cases. Move the handle to compare the
          before and after.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div
          ref={ref}
          className="relative select-none aspect-[16/10] md:aspect-[16/8] rounded-3xl overflow-hidden ink-border bg-gradient-to-br from-accent/10 to-blush/10 cursor-ew-resize touch-none"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            update(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && update(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerLeave={() => (dragging.current = false)}
          role="slider"
          aria-label="Before and after comparison"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
          }}
        >
          {/* after (bottom) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dental.beforeAfter.after}
            alt="After treatment"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* before (top, clipped with clip-path so it stays full-width) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dental.beforeAfter.before}
            alt="Before treatment"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />

          {/* handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center w-10 h-10 rounded-full bg-white text-accent-deep shadow-lg">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 7-4 5 4 5M15 7l4 5-4 5" />
              </svg>
            </div>
          </div>

          <span className="absolute top-4 left-4 rounded-full bg-black/55 text-white text-xs font-semibold px-3 py-1">
            {dental.beforeAfter.beforeLabel}
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-black/55 text-white text-xs font-semibold px-3 py-1">
            {dental.beforeAfter.afterLabel}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
