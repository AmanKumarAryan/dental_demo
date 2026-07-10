"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { dental } from "@/lib/dental";
import { Reveal } from "@/components/Reveal";
import {
  WhatsappIcon,
  PhoneIcon,
  PinIcon,
  MailIcon,
  CheckIcon,
} from "@/components/Icons";

export function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="visit" className="relative clinic-glow mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* visit info */}
        <Reveal className="lg:order-2">
          <span className="text-sm font-semibold tracking-wide uppercase text-accent-deep">
            Come say hi
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
            Find us in Bandra
          </h2>
          <p className="mt-4 text-ink-soft text-lg">
            Walk-ins are welcome, but a booked slot means zero waiting. Reach us
            any way that's easy for you.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`https://wa.me/${dental.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-paper p-4 ink-border hover:bg-accent/5 transition-colors duration-200"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent">
                <WhatsappIcon className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-soft">WhatsApp</span>
                <span className="font-medium">{dental.phone}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-paper p-4 ink-border">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-soft">Call</span>
                <a href={`tel:${dental.phone}`} className="font-medium">
                  {dental.phone}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-paper p-4 ink-border">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent">
                <MailIcon className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-soft">Email</span>
                <a href={`mailto:${dental.email}`} className="font-medium">
                  {dental.email}
                </a>
              </span>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-paper p-4 ink-border">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent">
                <PinIcon className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-soft">Studio</span>
                <span className="font-medium">{dental.address}</span>
                <div className="mt-3 space-y-1 text-sm text-ink-soft">
                  {dental.hours.map((h) => (
                    <div key={h.day} className="flex gap-3">
                      <span className="w-24 shrink-0">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </Reveal>

        {/* booking form */}
        <Reveal delay={0.1} className="lg:order-1">
          <div
            id="booking"
            className="rounded-3xl bg-paper p-7 md:p-9 ink-border soft-shadow scroll-mt-24"
          >
            <h3 className="font-display text-2xl font-semibold">
              Book a visit
            </h3>
            <p className="text-sm text-ink-soft mt-1">
              We'll confirm by WhatsApp within a few hours.
            </p>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="mt-6 flex flex-col items-center text-center gap-3 py-8"
                >
                  <span className="grid place-items-center w-14 h-14 rounded-full bg-accent/12 text-accent">
                    <CheckIcon className="w-7 h-7" />
                  </span>
                  <p className="font-display text-xl font-semibold">
                    You're on the list!
                  </p>
                  <p className="text-sm text-ink-soft max-w-xs">
                    Thanks — we'll message you on WhatsApp to lock in a time
                    that suits you.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name">
                      <input
                        required
                        name="name"
                        placeholder="Aryan"
                        className="input"
                      />
                    </Field>
                    <Field label="Phone / WhatsApp">
                      <input
                        required
                        name="phone"
                        placeholder="+91 ..."
                        className="input"
                      />
                    </Field>
                  </div>
                  <Field label="Treatment">
                    <select name="treatment" className="input" defaultValue="">
                      <option value="" disabled>
                        Choose one…
                      </option>
                      {dental.services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred date">
                    <input type="date" name="date" className="input" />
                  </Field>
                  <Field label="Anything we should know? (optional)">
                    <textarea
                      name="message"
                      rows={3}
                      className="input resize-none"
                      placeholder="Nervous about dentists, need evening slot…"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-white font-medium shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5"
                  >
                    Request appointment
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink-soft mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
