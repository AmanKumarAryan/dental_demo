"use client";

import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";

export function VisitSteps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
          Your first visit
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          From hello to healthy, in four calm steps
        </h2>
      </Reveal>

      <div className="relative mt-14">
        {/* connecting line (desktop) */}
        <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-line" />
        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {dental.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="relative">
              <div className="relative z-10 grid place-items-center w-14 h-14 rounded-full bg-paper ink-border font-display text-lg font-semibold text-accent-deep">
                {s.n}
              </div>
              <h3 className="font-display text-xl font-semibold mt-5">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
