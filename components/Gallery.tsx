"use client";

import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
          Inside the studio
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          A space designed to lower your shoulders
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {dental.gallery.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 3) * 0.07}
            className="group overflow-hidden rounded-3xl ink-border bg-accent/10 aspect-[4/3]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Pearl Dental Studio interior"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
