// Illustrated scenes for image slots. These are static SVG strings.
const sceneBase =
  '<rect width="400" height="200" fill="url(#gSky)"/><circle cx="290" cy="132" r="46" fill="url(#gGlow)"/><circle cx="290" cy="132" r="15" fill="#f4cd97"/><path d="M0 132L60 120L130 130L210 118L300 132L400 122V200H0z" fill="#0A1B3D"/>';
const ground =
  '<path d="M0 160C100 150 250 150 400 162V200H0z" fill="#050B18"/>';
const lit = (x, y, n, m) => {
  let o = "";
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      o +=
        '<rect x="' +
        (x + i * 12) +
        '" y="' +
        (y + j * 12) +
        '" width="6" height="7" fill="' +
        ((i + j) % 3 === 0 ? "#5CC8E8" : "#2a4a7a") +
        '"/>';
  return o;
};
const panels = (x0, y0, cols, rows, w) => {
  let o = "";
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const x = x0 + c * (w + 6) + r * 6,
        y = y0 + r * 14;
      o +=
        '<path d="M' +
        x +
        " " +
        y +
        "l" +
        w +
        " -4l4 11l-" +
        w +
        ' 4z" fill="#123A80" stroke="#2F7BFF" stroke-width=".6"/>';
    }
  return o;
};
const palm = (x) =>
  '<g stroke="#050B18" stroke-width="3" fill="none" stroke-linecap="round"><path d="M' +
  x +
  " 162c2-22 1-36-2-50M" +
  (x - 2) +
  " 112c-10-5-18-3-24 3M" +
  (x - 2) +
  " 112c9-6 17-5 22 1M" +
  (x - 2) +
  ' 112c-3-9 1-15 6-18"/></g>';
const SC = {
  solar:
    panels(30, 146, 5, 3, 46) +
    '<g stroke="#050B18" stroke-width="2" fill="none"><path d="M360 160l8-70 8 70M352 108h32"/></g>',
  bess:
    panels(20, 128, 4, 1, 36) +
    '<g fill="#0F2A5C" stroke="#2F7BFF" stroke-width=".8"><rect x="50" y="128" width="96" height="34" rx="2"/><rect x="156" y="128" width="96" height="34" rx="2"/><rect x="262" y="132" width="96" height="30" rx="2"/></g><g stroke="#2F7BFF" stroke-width=".6" opacity=".7"><path d="M74 128v34M98 128v34M122 128v34M180 128v34M204 128v34M228 128v34"/></g><circle cx="60" cy="136" r="2" fill="#5CC8E8"/><circle cx="166" cy="136" r="2" fill="#5CC8E8"/>',
  building:
    '<rect x="140" y="64" width="86" height="98" fill="#0F2A5C" stroke="#2F7BFF" stroke-width=".8"/><rect x="226" y="98" width="66" height="64" fill="#0A1B3D" stroke="#2F7BFF" stroke-width=".8"/>' +
    lit(150, 74, 6, 7) +
    lit(236, 108, 4, 4) +
    '<path d="M140 64h86l-6-8h-74z" fill="#123A80"/>' +
    palm(330) +
    palm(100),
  plant:
    '<path d="M50 162v-46l30 16v-16l30 16v-16l30 16v-16l30 16v46z" fill="#0F2A5C" stroke="#2F7BFF" stroke-width=".8"/><rect x="216" y="62" width="14" height="100" fill="#0A1B3D" stroke="#2F7BFF" stroke-width=".8"/><circle cx="223" cy="58" r="3" fill="#ff6b5a"/><rect x="250" y="102" width="46" height="60" rx="8" fill="#0F2A5C" stroke="#2F7BFF" stroke-width=".8"/><path d="M296 130h50v32" stroke="#5CC8E8" stroke-width="2" fill="none"/>' +
    lit(62, 138, 10, 1) +
    '<g fill="#fff" opacity=".35"><circle cx="224" cy="46" r="8"/><circle cx="236" cy="36" r="10"/></g>',
  hospital:
    '<rect x="112" y="84" width="158" height="78" fill="#0F2A5C" stroke="#2F7BFF" stroke-width=".8"/><path d="M104 84l96-18 78 18z" fill="#123A80"/><path d="M118 80l70-12" stroke="#2F7BFF" stroke-width="5" opacity=".9"/><rect x="180" y="96" width="22" height="22" rx="2" fill="#EEF2F8"/><path d="M191 99v16M183 107h16" stroke="#123A80" stroke-width="4"/>' +
    lit(122, 128, 3, 2) +
    lit(220, 128, 3, 2) +
    '<rect x="184" y="136" width="18" height="26" fill="#050B18"/>' +
    palm(320),
  chip: '<rect width="400" height="200" fill="#050B18"/><rect width="400" height="200" fill="url(#gSky)" opacity=".55"/><g stroke="#2F7BFF" stroke-width="1" fill="none" opacity=".85"><path d="M0 60h150M0 90h130l20 20M0 120h150M0 150h120M400 60H250M400 90H270l-20 20M400 130H250M400 160H280M180 0v70M220 0v70M200 200v-70M170 200v-60M230 200v-60"/></g><rect x="150" y="70" width="100" height="70" rx="8" fill="#0F2A5C" stroke="#5CC8E8" stroke-width="1.2"/><rect x="170" y="86" width="60" height="38" rx="4" fill="none" stroke="#5CC8E8" stroke-width=".8"/><g fill="#5CC8E8"><circle cx="150" cy="60" r="3"/><circle cx="130" cy="90" r="3"/><circle cx="250" cy="60" r="3"/><circle cx="270" cy="90" r="3"/><circle cx="180" cy="70" r="2.5"/><circle cx="230" cy="140" r="2.5"/></g>',
  nile:
    '<path d="M0 132H400V200H0z" fill="url(#gRiv)"/><g stroke="#f4cd97" stroke-width="2" opacity=".5" stroke-linecap="round"><path d="M270 142h40M260 152h60M254 164h72"/></g><g transform="translate(120 148)"><path d="M-26 10h52l-7 6h-38z" fill="#050B18"/><path d="M0 8V-36l26 44z" fill="#E9EEF8" opacity=".9"/><path d="M-2 8V-20l-16 28z" fill="#C4D0E6" opacity=".8"/></g><path d="M0 138l20-6l40 4l30-6l30 6V140H0z" fill="#0A1B3D"/>' +
    palm(350) +
    palm(30),
  people:
    panels(200, 140, 4, 2, 40) +
    '<g><circle cx="120" cy="74" r="14" fill="#050B18"/><path d="M104 70a16 14 0 0 1 32 0z" fill="#EEF2F8"/><rect x="100" y="90" width="40" height="72" rx="10" fill="#0F2A5C"/><rect x="100" y="112" width="40" height="8" fill="#2F7BFF"/><circle cx="184" cy="82" r="13" fill="#050B18"/><path d="M169 78a15 13 0 0 1 30 0z" fill="#5CC8E8"/><rect x="166" y="96" width="36" height="66" rx="10" fill="#0A1B3D" stroke="#2F7BFF" stroke-width=".8"/><rect x="146" y="112" width="26" height="18" rx="2" fill="#123A80" stroke="#5CC8E8" stroke-width=".8" transform="rotate(-8 159 121)"/></g>',
};
function kindOf(t) {
  t = t.toLowerCase();
  if (/engineers on site/.test(t)) return "people";
  if (/hospital|clinic|ward|healthcare|bluecare/.test(t))
    return "hospital";
  if (/industrial|plant|control room|automation|scada|facility/.test(t))
    return "plant";
  if (/solar|microgrid|array|smart energy/.test(t)) return "solar";
  if (/battery|bess|container|energy controller/.test(t)) return "bess";
  if (/building|semis|khartoum/.test(t)) return "building";
  if (/environment|monitoring|nile|landscape/.test(t)) return "nile";
  if (/\bai\b|vision|intelligent|reviewing data|laptop|engineer/.test(t))
    return "chip";
  return "nile";
}

export function sceneMarkup(label) {
  const k = kindOf(label);
  return k === "chip"
    ? SC.chip
    : sceneBase + SC[k] + (k === "nile" ? "" : ground);
}
