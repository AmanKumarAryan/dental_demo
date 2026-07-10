"use client";

import { useEffect, useRef, useState } from "react";
import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done) return;
        setDone(true);
        const isFloat = !Number.isInteger(value);
        const start = performance.now();
        const dur = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          const v = value * eased;
          el.textContent = (isFloat ? v.toFixed(1) : Math.round(v).toString()) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix, done]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden ink-border bg-line">
        {dental.stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="bg-paper p-7 text-center"
          >
            <div className="font-display text-4xl md:text-5xl font-semibold text-accent-deep">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
