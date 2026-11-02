import { useState } from "react";
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";
import Slot from "../components/Slot.jsx";

const FILTERS = [
  ["all", "All"],
  ["energy", "Energy"],
  ["healthcare", "Healthcare"],
  ["infrastructure", "Infrastructure"],
  ["industrial", "Industrial"],
  ["automation", "Automation"],
];

const PROJECTS = [
  {
    name: "Rural Solar Microgrid",
    cats: ["energy"],
    place: "River Nile State",
    tag: "Energy",
    text: "Solar array and battery storage powering a village, its clinic and school.",
    tech: "Solar PV, BESS, smart controller",
    impact: "24-hour power for essential services, replacing diesel-only supply.",
  },
  {
    name: "Hospital Power System",
    cats: ["healthcare", "energy"],
    place: "Khartoum",
    tag: "Healthcare",
    text: "Resilient power for critical hospital loads.",
    tech: "BESS, automatic transfer, monitoring",
    impact: "No interruption to theatres, ICU and cold storage.",
  },
  {
    name: "Smart Clinic Network",
    cats: ["healthcare"],
    place: "Gezira State",
    tag: "Healthcare",
    text: "A network of clinics with shared remote monitoring.",
    tech: "BlueCare System, IoT sensors",
    impact: "Central visibility of power and cold-chain status.",
  },
  {
    name: "BESS Pilot Project",
    cats: ["energy"],
    place: "Red Sea State, Port Sudan",
    tag: "Energy",
    text: "Pilot battery installation to test storage economics on a live site.",
    tech: "BESS unit, energy controller",
    impact: "Measured savings and reliability data for scale-up.",
  },
  {
    name: "Industrial Automation Facility",
    cats: ["industrial", "automation"],
    place: "Khartoum North",
    tag: "Industrial",
    text: "Control and monitoring upgrade for a production line.",
    tech: "PLC, SCADA, HMI",
    impact: "Less downtime and real-time production data.",
  },
  {
    name: "Environmental Monitoring System",
    cats: ["infrastructure"],
    place: "Blue Nile State",
    tag: "Infrastructure",
    text: "Sensor network tracking water, air and soil conditions.",
    tech: "IoT sensors, edge AI, dashboard",
    impact: "Early warnings for environmental change.",
  },
  {
    name: "Smart Building Project",
    cats: ["infrastructure", "automation"],
    place: "Khartoum",
    tag: "Infrastructure",
    text: "Energy and environmental control in a modern office building.",
    tech: "Smart Building System, sensors",
    impact: "Lower energy use and better comfort.",
  },
  {
    name: "Healthcare Infrastructure Project",
    cats: ["healthcare", "infrastructure"],
    place: "Kassala",
    tag: "Healthcare",
    text: "Integrated power, HVAC and control for a new hospital.",
    tech: "SEMIS, BESS, solar, control",
    impact: "A hospital designed to keep running through outages.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <header className="page-hero">
        <Nav cur="projects" />
        <div className="wrap">
          <div>
            <span className="label">Our projects</span>
            <h1>Real Solutions. Real Impact.</h1>
            <p className="lead">
              Energy, healthcare, infrastructure and industry, delivered on real
              sites across Sudan.
            </p>
          </div>
        </div>
      </header>
      <section className="s">
        <div className="wrap">
          <div
            className="filters"
            id="filters"
            role="group"
            aria-label="Filter projects"
          >
            {FILTERS.map(([k, t]) => (
              <button
                key={k}
                className={k === filter ? "on" : undefined}
                onClick={() => setFilter(k)}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="note">
            Sample projects with placeholder locations and outcomes. Replace
            with real case studies.
          </p>
          <div className="pgrid" id="pj">
            {PROJECTS.map((p) => (
              <div
                className="card"
                key={p.name}
                hidden={!(filter === "all" || p.cats.includes(filter))}
              >
                <Slot label={`Image slot: ${p.name}`} />
                <div className="body">
                  <div className="meta">
                    <span>{p.place}</span>
                    <i>{p.tag}</i>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <p className="tech">
                    <b>Technology:</b>
                    {` ${p.tech}`}
                  </p>
                  <p className="impact">{`Target outcome: ${p.impact}`}</p>
                  <a className="btn btn-line" href="#">
                    View project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
