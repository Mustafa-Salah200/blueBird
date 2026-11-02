export default function HeroScene() {
  return (
    <svg
      className="scene"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMaxYMax slice"
      role="img"
      aria-label="Illustrated scene: the Nile at dusk with the Khartoum skyline, a river bridge, felucca sailboats, a solar array and a blue bird in flight. Placeholder for photography."
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#03070f" />
          <stop offset=".4" stopColor="#0B2350" />
          <stop offset=".7" stopColor="#1D4278" />
          <stop offset=".9" stopColor="#7d6a66" />
          <stop offset="1" stopColor="#d9a066" />
        </linearGradient>
        <linearGradient id="river" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a5a86" />
          <stop offset=".5" stopColor="#14305f" />
          <stop offset="1" stopColor="#0A1B3D" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#f2c48a" stopOpacity=".55" />
          <stop offset="1" stopColor="#f2c48a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="760" fill="url(#sky)" />
      <g fill="#fff" opacity=".5">
        <circle cx="120" cy="60" r="1.4" />
        <circle cx="260" cy="120" r="1" />
        <circle cx="430" cy="50" r="1.2" />
        <circle cx="560" cy="140" r="1" />
        <circle cx="700" cy="70" r="1.5" />
        <circle cx="820" cy="30" r="1" />
        <circle cx="900" cy="110" r="1.2" />
        <circle cx="1100" cy="60" r="1.4" />
        <circle cx="1240" cy="120" r="1" />
        <circle cx="1360" cy="40" r="1.3" />
        <circle cx="1300" cy="190" r="1" />
        <circle cx="60" cy="200" r="1.1" />
        <circle cx="340" cy="220" r="1" />
      </g>
      <circle cx="1010" cy="490" r="280" fill="url(#glow)" />
      <circle cx="1010" cy="490" r="66" fill="#f4cd97" />
      {/* Omdurman skyline (far left bank) */}
      <g fill="#0A1B3D" opacity=".85">
        <rect x="260" y="474" width="380" height="20" />
        <rect x="300" y="452" width="40" height="24" />
        <rect x="352" y="440" width="70" height="36" />
        <path d="M372 440a18 18 0 0 1 32 0z" />
        <rect x="438" y="410" width="5" height="66" />
        <rect x="437" y="404" width="7" height="8" />
        <rect x="470" y="420" width="5" height="56" />
        <rect x="469" y="414" width="7" height="8" />
        <rect x="500" y="456" width="60" height="20" />
        <rect x="580" y="448" width="34" height="28" />
      </g>
      {/* Khartoum skyline */}
      <g fill="#0A1B3D">
        <rect x="640" y="470" width="800" height="30" />
        <rect x="690" y="440" width="34" height="34" />
        <rect x="730" y="425" width="28" height="50" />
        <rect x="765" y="450" width="44" height="26" />
        <rect x="860" y="432" width="30" height="44" />
        <rect x="895" y="410" width="24" height="66" />
        <rect x="925" y="444" width="40" height="32" />
        <path d="M1128 476v-118c0-32 15-56 24-56s24 24 24 56v118z" />
        <rect x="1150" y="278" width="2" height="26" />
        <rect x="1196" y="428" width="36" height="48" />
        <rect x="1238" y="446" width="30" height="30" />
        <rect x="1275" y="418" width="26" height="58" />
        <rect x="1315" y="440" width="44" height="36" />
        <rect x="1380" y="430" width="60" height="46" />
        <rect x="1004" y="420" width="6" height="56" />
        <path d="M1001 420a6 6 0 0 1 12 0z" />
      </g>
      <g fill="#5CC8E8" opacity=".75">
        <rect x="1140" y="380" width="3" height="4" />
        <rect x="1150" y="380" width="3" height="4" />
        <rect x="1140" y="404" width="3" height="4" />
        <rect x="1160" y="420" width="3" height="4" />
        <rect x="1205" y="440" width="3" height="4" />
        <rect x="1215" y="440" width="3" height="4" />
        <rect x="1284" y="436" width="3" height="4" />
        <rect x="1284" y="452" width="3" height="4" />
        <rect x="900" y="426" width="3" height="4" />
        <rect x="900" y="446" width="3" height="4" />
        <rect x="738" y="440" width="3" height="4" />
      </g>
      <circle cx="1152" cy="274" r="3" fill="#ff6b5a" />
      {/* river bridge */}
      <g fill="none" stroke="#0A1B3D" strokeWidth="5">
        <path d="M540 492H1140" />
        <path
          d="M560 492q30-30 60 0M620 492q30-30 60 0M680 492q30-30 60 0M740 492q30-30 60 0"
          strokeWidth="4"
        />
      </g>
      <g fill="#0A1B3D">
        <rect x="558" y="492" width="5" height="18" />
        <rect x="618" y="492" width="5" height="18" />
        <rect x="678" y="492" width="5" height="18" />
        <rect x="738" y="492" width="5" height="18" />
        <rect x="798" y="492" width="5" height="18" />
      </g>
      {/* Tuti island */}
      <path d="M380 500q60-30 130 0z" fill="#0d2440" />
      <g stroke="#0d2440" strokeWidth="3" fill="none">
        <path
          d="M420 496l-2-26M418 470l-14 8M418 470l14 8M470 496l2-30M472 466l-14 8M472 466l14 8"
        />
      </g>
      {/* river */}
      <rect y="492" width="1440" height="170" fill="url(#river)" />
      <g stroke="#f4cd97" strokeLinecap="round" opacity=".5">
        <path
          d="M985 506h50M970 522h80M958 540h104M950 560h120"
          strokeWidth="3"
        />
      </g>
      <g stroke="#7ea0d0" strokeWidth="1" opacity=".25">
        <path
          d="M100 540h240M400 585h300M760 600h360M1150 560h260M60 620h200"
        />
      </g>
      <g transform="translate(790 545)">
        <path d="M-52 22h104l-14 12h-76z" fill="#050B18" />
        <path d="M0 18V-70l52 78z" fill="#E9EEF8" opacity=".92" />
        <path d="M-4 18V-40l-32 52z" fill="#C4D0E6" opacity=".8" />
      </g>
      <g transform="translate(1180 520) scale(.6)">
        <path d="M-52 22h104l-14 12h-76z" fill="#050B18" />
        <path d="M0 18V-70l52 78z" fill="#E9EEF8" opacity=".85" />
        <path d="M-4 18V-40l-32 52z" fill="#C4D0E6" opacity=".7" />
      </g>
      {/* near bank */}
      <path
        d="M0 640c260-14 520-6 760 6s470 20 680 4V760H0z"
        fill="#050B18"
      />
      <g fill="#050B18">
        <path
          d="M520 650c0-30 4-46 8-62-14 2-30-6-40-16 14-8 34-8 46-2 4-10 18-18 34-16-4 8-12 14-20 16 14-2 32 4 40 16-16 4-30 4-42 0 0 20 0 44 6 64z"
        />
      </g>
      <g fill="#123A80" stroke="#2F7BFF" strokeWidth="1">
        <path d="M640 664l78-6 6 16-80 6z" />
        <path d="M730 658l78-5 6 15-80 7z" />
        <path d="M820 653l78-3 6 15-80 6z" />
        <path d="M910 650l78-2 5 14-78 6z" />
        <path d="M624 692l86-6 6 18-88 7z" />
        <path d="M722 686l86-5 6 17-88 7z" />
        <path d="M820 681l86-3 6 16-88 7z" />
        <path d="M918 678l86-2 5 16-86 7z" />
        <path d="M604 724l96-6 7 20-98 8z" />
        <path d="M712 718l96-5 7 19-98 8z" />
        <path d="M820 713l96-3 6 18-96 8z" />
        <path d="M928 710l96-2 6 17-96 8z" />
      </g>
      <g
        stroke="#050B18"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      >
        <path
          d="M1190 662l30-200 30 200M1206 560h28M1198 610h44M1195 470h50M1160 496h120"
        />
        <path d="M1206 560l28 50M1234 560l-28 50" />
      </g>
      <g stroke="#0f2a5c" strokeWidth="1.5" fill="none">
        <path d="M1160 496q-190 40-300 130M1280 496q90 50 200 130" />
      </g>
      <g
        fill="none"
        stroke="#050B18"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path d="M1370 700c8-60 6-110-6-160" />
        <path
          d="M1364 540c-30-14-52-8-70 10M1364 540c26-18 50-14 66 2M1364 540c-8-28 4-46 20-56M1364 540c-20-30-40-38-62-32"
        />
      </g>
      <g className="bird">
        <g transform="scale(1.5)">
          <g className="wing"><use href="#mark" width="48" height="48" /></g>
        </g>
      </g>
    </svg>
  );
}
