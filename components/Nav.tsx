"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { dental } from "@/lib/dental";
import { MenuIcon, CloseIcon, ArrowIcon } from "@/components/Icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#smiles", label: "Smiles" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid place-items-center w-8 h-8 rounded-full bg-accent/12 text-accent">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3.5c-1.6-1.4-4-1.4-5.5-.3C4.6 4.3 4 6.4 4.4 9.2c.2 1.5.3 2.6.7 4 .6 2 1 3.8 1.7 5.3.5 1 .9 1.7 2 1.7 1 0 1.2-.7 1.5-1.9.3-1.2.5-2.6 1.7-2.6s1.4 1.4 1.7 2.6c.3 1.2.5 1.9 1.5 1.9 1.1 0 1.5-.7 2-1.7.7-1.5 1.1-3.3 1.7-5.3.4-1.4.5-2.5.7-4 .4-2.8-.2-4.9-2.1-6C16 2.1 13.6 2.1 12 3.5Z" />
            </svg>
          </span>
          Pearl
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-2 text-foreground/80 hover:text-foreground"
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-white shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            Book a visit <ArrowIcon className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-full glass"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-end p-4">
              <button
                className="grid place-items-center w-10 h-10 rounded-full glass"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6 text-lg font-medium">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-6 rounded-full hover:bg-accent/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-white"
              >
                Book a visit <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
