// Shared SVG gradients and symbols, referenced with <use href="#...">
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#050B18" />
          <stop offset=".5" stopColor="#0B2350" />
          <stop offset=".78" stopColor="#1D4278" />
          <stop offset=".95" stopColor="#8a6a5a" />
          <stop offset="1" stopColor="#d9a066" />
        </linearGradient>
        <linearGradient id="gRiv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a5a86" />
          <stop offset="1" stopColor="#0A1B3D" />
        </linearGradient>
        <radialGradient id="gGlow">
          <stop offset="0" stopColor="#f2c48a" stopOpacity=".55" />
          <stop offset="1" stopColor="#f2c48a" stopOpacity="0" />
        </radialGradient>
        <symbol id="mark" viewBox="0 0 48 48">
          <path
            d="M3 27C9 11 24 5 43 8c-9 3-14 8-16 14 8-4 15-4 20-2-10 2-17 8-19 17C25 30 15 27 3 27z"
            fill="#2F7BFF"
          />
          <path
            d="M27 22c-3 1-8 4-10 9 4-3 8-5 14-5-2-2-3-3-4-4z"
            fill="#5CC8E8"
          />
        </symbol>
        <symbol
          id="i-energy"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
          />
        </symbol>
        <symbol
          id="i-bess"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="7" width="16" height="10" rx="2" />
          <path d="M21 10v4M11 9l-2 3h4l-2 3" />
        </symbol>
        <symbol
          id="i-infra"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01"
          />
        </symbol>
        <symbol
          id="i-auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
          />
        </symbol>
        <symbol
          id="i-health"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M12 8v8M8 12h8" />
        </symbol>
        <symbol
          id="i-ai"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path
            d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 12h4"
          />
        </symbol>
        <symbol
          id="i-env"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 20c0-9 6-15 16-16 0 10-6 16-16 16zM4 20c3-5 6-8 10-10" />
        </symbol>
        <symbol
          id="i-search"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l4.5 4.5" />
        </symbol>
      </defs>
    </svg>
  );
}
