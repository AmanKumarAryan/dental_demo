import type { SVGProps } from "react";

const toothPath =
  "M12 3.5c-1.6-1.4-4-1.4-5.5-.3C4.6 4.3 4 6.4 4.4 9.2c.2 1.5.3 2.6.7 4 .6 2 1 3.8 1.7 5.3.5 1 .9 1.7 2 1.7 1 0 1.2-.7 1.5-1.9.3-1.2.5-2.6 1.7-2.6s1.4 1.4 1.7 2.6c.3 1.2.5 1.9 1.5 1.9 1.1 0 1.5-.7 2-1.7.7-1.5 1.1-3.3 1.7-5.3.4-1.4.5-2.5.7-4 .4-2.8-.2-4.9-2.1-6C16 2.1 13.6 2.1 12 3.5Z";

export function ToothSticker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <defs>
        <linearGradient id="toothFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dbe9f6" />
        </linearGradient>
        <filter id="stickerShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0f1e2b" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#stickerShadow)">
        {/* die-cut white border */}
        <path
          d={toothPath}
          fill="#ffffff"
          transform="translate(12 10) scale(1.14) translate(-12 -10)"
        />
        {/* enamel body */}
        <path d={toothPath} fill="url(#toothFill)" />
        {/* coral shine */}
        <ellipse cx="9" cy="8" rx="1.5" ry="2.6" fill="#ffd2da" opacity="0.9" transform="rotate(-18 9 8)" />
        <ellipse cx="15.5" cy="11" rx="1" ry="1.8" fill="#ffffff" opacity="0.8" transform="rotate(-18 15.5 11)" />
      </g>

      {/* little sparkle sticker */}
      <g filter="url(#stickerShadow)">
        <path
          d="M20.5 1.5 l1 2.4 2.4 1 -2.4 1 -1 2.4 -1 -2.4 -2.4 -1 2.4 -1 Z"
          fill="#ff5d73"
          transform="translate(0 1) scale(1.05)"
        />
      </g>
    </svg>
  );
}
