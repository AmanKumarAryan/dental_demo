"use client";

import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";
import {
  ToothIcon,
  SparkleIcon,
  AlignIcon,
  ImplantIcon,
  ChildIcon,
  ShieldIcon,
  ArrowIcon,
} from "@/components/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  tooth: ToothIcon,
  sparkle: SparkleIcon,
  align: AlignIcon,
  implant: ImplantIcon,
  child: ChildIcon,
  shield: ShieldIcon,
};

export function Services() {
  return (
    <section id="services" className="relative clinic-glow mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
          What we do
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          One studio, whole-mouth care
        </h2>
        <p className="mt-4 text-ink-soft text-lg">
          From a child's first check-up to a full smile rebuild — every
          treatment is handled in-house, with the same gentle standard.
        </p>
      </Reveal>

      <div className="mt-12 border-y border-line divide-y divide-line">
        {dental.services.map((s, i) => {
          const Icon = iconMap[s.icon] ?? ToothIcon;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.05}>
              <div className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_auto] gap-4 md:gap-8 items-center py-7">
                <span className="font-display text-2xl md:text-3xl font-semibold text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-4 md:gap-5">
                  <span className="shrink-0 grid place-items-center w-11 h-11 rounded-2xl bg-accent/10 text-accent">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base text-ink-soft leading-relaxed max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <ArrowIcon className="w-5 h-5 text-ink-soft opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
