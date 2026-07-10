"use client";

import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";

export function Doctors() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
          The people
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          Specialists who actually remember your name
        </h2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {dental.doctors.map((d, i) => (
          <Reveal key={d.name} delay={(i % 4) * 0.07} className="group">
            <div className="rounded-3xl bg-paper ink-border overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-accent/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                <p className="text-sm text-accent-deep mt-0.5">{d.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
