"use client";

import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";
import {
  ScanIcon,
  DesignIcon,
  LaserIcon,
  ShieldIcon,
  CheckIcon,
} from "@/components/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  scan: ScanIcon,
  design: DesignIcon,
  laser: LaserIcon,
  shield: ShieldIcon,
};

export function Tech() {
  return (
    <section id="technology" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
          The studio
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          Quiet tech, louder peace of mind
        </h2>
        <p className="mt-4 text-ink-soft text-lg">
          We invested in tools that make visits quicker, calmer and more
          predictable — so you spend less time in the chair and more trusting it.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {dental.tech.map((t, i) => {
          const Icon = iconMap[t.icon] ?? ScanIcon;
          return (
            <Reveal key={t.title} delay={(i % 2) * 0.08}>
              <div className="h-full flex gap-5 rounded-3xl bg-paper p-7 ink-border">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-accent/10 text-accent">
                  <Icon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1} className="mt-8">
        <div className="rounded-3xl bg-accent-deep text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <p className="font-display text-2xl md:text-3xl font-semibold max-w-xl">
            "Tell me what you're doing and why — before you do it."
          </p>
          <ul className="space-y-2 text-sm text-white/90">
            {["Clear pricing up front", "No upsell, ever", "You decide the pace"].map(
              (c) => (
                <li key={c} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-accent-soft" /> {c}
                </li>
              )
            )}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
