"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";
import { dental } from "@/lib/dental";
import { ArrowIcon, WhatsappIcon, CheckIcon } from "@/components/Icons";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent/30 to-blush/30 blur-2xl animate-floaty" />
    </div>
  ),
});

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div style={{ y: textY }} className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent-deep px-3 py-1 text-xs font-semibold tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {dental.role}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.98] tracking-tight mt-5"
            >
              Smiles we're <span className="text-shimmer">careful</span> with.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 text-lg text-ink-soft max-w-md"
            >
              {dental.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-white font-medium shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                Book a visit <ArrowIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${dental.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full glass px-6 py-3 font-medium transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <WhatsappIcon className="w-4 h-4 text-accent" /> WhatsApp us
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft"
            >
              {["Pain-managed", "No upsell, ever", "Kids welcome"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-accent" /> {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            style={{ y: canvasY }}
            className="relative flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full ink-border overflow-hidden bg-gradient-to-br from-accent-soft/30 to-ice/50">
              <Scene3D />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-foreground text-white text-xs font-semibold px-4 py-2 shadow-lg whitespace-nowrap">
              Free first consult
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="h-px bg-line" />
      </div>
    </section>
  );
}
