import React from "react";

type IconProps = { className?: string };

const Stroke = ({
  className = "h-6 w-6",
  children,
}: IconProps & { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden
  >
    {children}
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="7" width="18" height="13" rx="1" />
    <path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 13h18" />
  </Stroke>
);

export const GlobeIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </Stroke>
);

export const ChatIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
  </Stroke>
);

export const MailIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </Stroke>
);

export const CalendarIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="16" rx="1" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </Stroke>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Stroke>
);

export const CheckIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m5 12 5 5 9-10" />
  </Stroke>
);

export const GitHubIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`shrink-0 ${className}`}
    aria-hidden
  >
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const LinkedInIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`shrink-0 ${className}`}
    aria-hidden
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4V9.75Z" />
  </svg>
);
