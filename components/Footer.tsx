import { dental } from "@/lib/dental";
import {
  WhatsappIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
} from "@/components/Icons";

const groups = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "#services" },
      { label: "Technology", href: "#technology" },
      { label: "Smile gallery", href: "#smiles" },
      { label: "Book a visit", href: "#booking" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "General & cosmetic", href: "#services" },
      { label: "Implants", href: "#services" },
      { label: "Kids", href: "#services" },
      { label: "Surgery", href: "#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2 max-w-sm">
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-accent/12 text-accent">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3.5c-1.6-1.4-4-1.4-5.5-.3C4.6 4.3 4 6.4 4.4 9.2c.2 1.5.3 2.6.7 4 .6 2 1 3.8 1.7 5.3.5 1 .9 1.7 2 1.7 1 0 1.2-.7 1.5-1.9.3-1.2.5-2.6 1.7-2.6s1.4 1.4 1.7 2.6c.3 1.2.5 1.9 1.5 1.9 1.1 0 1.5-.7 2-1.7.7-1.5 1.1-3.3 1.7-5.3.4-1.4.5-2.5.7-4 .4-2.8-.2-4.9-2.1-6C16 2.1 13.6 2.1 12 3.5Z" />
                </svg>
              </span>
              Pearl
            </div>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">
              {dental.tagline} {dental.role.toLowerCase()} in {dental.location}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/${dental.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-2 text-sm"
              >
                <WhatsappIcon className="w-4 h-4 text-accent" /> WhatsApp
              </a>
              <a href={`tel:${dental.phone}`} className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-2 text-sm">
                <PhoneIcon className="w-4 h-4 text-accent" /> Call
              </a>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-display text-base font-semibold">{g.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-accent-deep transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row gap-3 justify-between text-sm text-ink-soft">
          <span>© {new Date().getFullYear()} {dental.brand}. Demo site.</span>
          <span className="flex items-center gap-4">
            <a href={`mailto:${dental.email}`} className="inline-flex items-center gap-1.5 hover:text-accent-deep">
              <MailIcon className="w-4 h-4" /> {dental.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="w-4 h-4" /> {dental.location}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
