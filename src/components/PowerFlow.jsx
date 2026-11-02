import { useState } from "react";

const PATHS = [
  "M220 82C270 82 270 200 310 200",
  "M220 338C270 338 270 224 310 224",
  "M400 252V316",
  "M490 190C540 190 540 82 580 82",
  "M490 210H580",
  "M490 230C540 230 540 338 580 338",
];

const NODES = [
  ["solar", "energy", "Solar array", 40, 40],
  ["grid", "infra", "Grid", 40, 296],
  ["ctrl", "auto", "Smart controller", 310, 168],
  ["bess", "bess", "Battery storage", 310, 316],
  ["hosp", "health", "Hospital", 580, 40],
  ["ind", "auto", "Industry", 580, 168],
  ["comm", "infra", "Community", 580, 296],
];

const BUTTONS = [
  ["day", "Sunny day", "Solar feeds the site and charges the battery."],
  ["night", "Night", "Battery and grid share the load."],
  ["outage", "Grid outage", "Critical loads stay on. Non-essential load pauses."],
];

const SCEN = {
  day: {
    on: [1, 1, 1, 1, 1, 1],
    rev: 0,
    off: [],
    v: {
      solar: "4.2 MW",
      grid: "Import 0.4 MW",
      ctrl: "Coordinating",
      bess: "Charging 1.4 MW",
      hosp: "0.9 MW",
      ind: "1.8 MW",
      comm: "0.5 MW",
    },
    r: ["All loads", "Charging, 64%", "Import 0.4 MW"],
  },
  night: {
    on: [0, 1, 1, 1, 1, 1],
    rev: 1,
    off: ["solar"],
    v: {
      solar: "0 MW",
      grid: "Import 2.2 MW",
      ctrl: "Coordinating",
      bess: "Discharging 1.0 MW",
      hosp: "0.9 MW",
      ind: "1.8 MW",
      comm: "0.5 MW",
    },
    r: ["All loads", "Discharging, 81%", "Import 2.2 MW"],
  },
  outage: {
    on: [1, 0, 1, 1, 0, 1],
    rev: 1,
    off: ["grid", "ind"],
    v: {
      solar: "0.8 MW",
      grid: "Outage",
      ctrl: "Coordinating",
      bess: "Discharging 0.6 MW",
      hosp: "0.9 MW",
      ind: "Paused",
      comm: "0.5 MW",
    },
    r: ["Hospital and community first", "Discharging, 58%", "Down"],
  },
};

export default function PowerFlow() {
  const [scen, setScen] = useState("day");
  const d = SCEN[scen];

  return (
    <div className="flow">
      <div>
        <div className="scen" id="scen">
          {BUTTONS.map(([k, title, text]) => (
            <button
              key={k}
              className={k === scen ? "on" : undefined}
              onClick={() => setScen(k)}
            >
              <b>{title}</b>
              <small>{text}</small>
            </button>
          ))}
        </div>
        <div className="reads">
          <div>
            <span>Loads served</span>
            <b>{d.r[0]}</b>
          </div>
          <div>
            <span>Battery</span>
            <b>{d.r[1]}</b>
          </div>
          <div>
            <span>Grid</span>
            <b>{d.r[2]}</b>
          </div>
        </div>
      </div>
      <div>
        <div className="dgw">
          <svg
            id="dg"
            viewBox="0 0 800 420"
            role="img"
            aria-label="Power flow between solar, grid, battery, smart controller and loads"
          >
            {PATHS.map((path, i) => {
              let cls = "fl";
              if (d.on[i]) cls += " on";
              if (i === 2 && d.rev) cls += " rev";
              return <path key={path} className={cls} d={path} />;
            })}
            {NODES.map(([k, icon, label, x, y]) => {
              let cls = "node";
              if (k === "ctrl") cls += " core";
              if (d.off.includes(k)) cls += " off";
              return (
                <g key={k} className={cls} transform={`translate(${x} ${y})`}>
                  <rect width="180" height="84" rx="10" />
                  <use
                    href={`#i-${icon}`}
                    x="14"
                    y="18"
                    width="28"
                    height="28"
                    style={{ color: "#5cc8e8" }}
                  />
                  <text className="nl" x="54" y="34">
                    {label}
                  </text>
                  <text className="nv" x="54" y="64">
                    {d.v[k]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <p className="dnote">Demo values for illustration. Not measured data.</p>
      </div>
    </div>
  );
}
