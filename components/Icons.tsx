import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ToothIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5c-1.6-1.4-4-1.4-5.5-.3C4.6 4.3 4 6.4 4.4 9.2c.2 1.5.3 2.6.7 4 .6 2 1 3.8 1.7 5.3.5 1 .9 1.7 2 1.7 1 0 1.2-.7 1.5-1.9.3-1.2.5-2.6 1.7-2.6s1.4 1.4 1.7 2.6c.3 1.2.5 1.9 1.5 1.9 1.1 0 1.5-.7 2-1.7.7-1.5 1.1-3.3 1.7-5.3.4-1.4.5-2.5.7-4 .4-2.8-.2-4.9-2.1-6C16 2.1 13.6 2.1 12 3.5Z" />
    </svg>
  );
}

export function SparkleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5 13.8 9 19 10.8 13.8 12.6 12 18l-1.8-5.4L5 10.8 10.2 9 12 3.5Z" />
      <path d="M18.5 4.5v3M17 6h3" />
    </svg>
  );
}

export function AlignIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h2v16H5zM17 4h2v16h-2z" />
      <path d="M9.5 8h5M9.5 12h5M9.5 16h5" />
    </svg>
  );
}

export function ImplantIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 3.5h6v3.5a3 3 0 0 1-6 0V3.5Z" />
      <path d="M10 11h4l-.6 3.2a4 4 0 0 1-2.8 0L10 11Z" />
      <path d="M10.4 17.2 12 21l1.6-3.8" />
    </svg>
  );
}

export function ChildIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="7" r="3" />
      <path d="M7 20c0-3 2.2-5 5-5s5 2 5 5" />
    </svg>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5 19 6v5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ScanIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <path d="M4 12h16" />
    </svg>
  );
}

export function DesignIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9h17M8 4.5v15" />
    </svg>
  );
}

export function LaserIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  );
}

export function MenuIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function WhatsappIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 19.5 6.2 18c.5-.4.5-1.1.1-1.6C5.3 15.4 5 13.7 5.4 12c1.6-4.5 6.4-7 10.8-5.4 4.5 1.6 7 6.4 5.4 10.8-1.6 4.5-6.4 7-10.8 5.4-1.5-.5-2.9-1.3-4-2.4-.4-.4-1.1-.4-1.5.1L4 19.5Z" />
      <path d="M9.5 8.5c0 3 2.5 5.5 5.5 5.5.6 0 1.2-.1 1.7-.3" />
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
