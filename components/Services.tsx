"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
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

const canHover =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function ServiceCard({
  title,
  desc,
  icon,
  delay,
}: {
  title: string;
  desc: string;
  icon: string;
  delay: number;
}) {
  const Icon = iconMap[icon] ?? ToothIcon;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Reveal delay={delay}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={canHover ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
        className="group h-full rounded-3xl bg-paper p-7 ink-border soft-shadow transition-transform duration-300 ease-out"
      >
        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-accent/10 text-accent">
          <Icon className="w-6 h-6" />
        </span>
        <h3 className="font-display text-xl font-semibold mt-5">{title}</h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed">{desc}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-deep opacity-0 -translate-x-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          Learn more <ArrowIcon className="w-4 h-4" />
        </span>
      </motion.div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative clinic-glow mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
          What we do
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          Complete care, one calm studio
        </h2>
        <p className="mt-4 text-ink-soft text-lg">
          From a child's first check-up to a full smile rebuild — every treatment
          is handled in-house, with the same gentle standard.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dental.services.map((s, i) => (
          <ServiceCard key={s.title} {...s} delay={(i % 3) * 0.08} />
        ))}
      </div>
    </section>
  );
}
