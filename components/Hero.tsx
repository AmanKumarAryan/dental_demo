"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";
import { dental } from "@/lib/dental";
import { ArrowIcon, WhatsappIcon } from "@/components/Icons";

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
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
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
              A calmer kind of <span className="text-shimmer">dentist</span>.
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
          </motion.div>

          <motion.div
            style={{ y: canvasY }}
            className="relative h-[340px] sm:h-[420px] md:h-[520px]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/10 to-blush/10 ink-border" />
            <Scene3D />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="h-px bg-line" />
      </div>
    </section>
  );
}
