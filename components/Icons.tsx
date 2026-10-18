import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: P) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="i"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconSearch = (p: P) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l5 5" />
  </Base>
);

export const IconChat = (p: P) => (
  <Base {...p}>
    <path d="M4 5h16v11H9l-5 4V5z" />
    <circle cx="9" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
  </Base>
);

export const IconBolt = (p: P) => (
  <Base {...p}>
    <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />
  </Base>
);

export const IconPin = (p: P) => (
  <Base {...p}>
    <path d="M12 21s-6-5.6-6-10.2a6 6 0 0 1 12 0C18 15.4 12 21 12 21z" />
    <circle cx="12" cy="10.5" r="2.2" />
  </Base>
);

export const IconThumb = (p: P) => (
  <Base {...p}>
    <path d="M7 11v9H4v-9h3z" />
    <path d="M7 11l3.5-7c1.5 0 2.5 1 2.2 2.6L12 10h6a2 2 0 0 1 2 2.4l-1.2 6A2 2 0 0 1 16.8 20H7" />
  </Base>
);

export const IconRocket = (p: P) => (
  <Base {...p}>
    <path d="M12 3c3 2 5 5.5 5 9l-2 3H9l-2-3c0-3.5 2-7 5-9z" />
    <circle cx="12" cy="10" r="1.6" />
    <path d="M9 18l-1 3M15 18l1 3M12 18v3" />
  </Base>
);

export const IconCheck = (p: P) => (
  <Base {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Base>
);