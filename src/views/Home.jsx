import Counter from "../components/Counter.jsx";
import Footer from "../components/Footer.jsx";
import Go from "../components/Go.jsx";
import HeroScene from "../components/HeroScene.jsx";
import Nav from "../components/Nav.jsx";
import PowerFlow from "../components/PowerFlow.jsx";
import Slot from "../components/Slot.jsx";
import SolutionCard from "../components/SolutionCard.jsx";

const HUD = [
  ["Solar array", "4.2 MW"],
  ["Battery storage", "92%"],
  ["Hospital supply", "Protected"],
];

const SOLUTIONS = [
  {
    icon: "energy",
    slot: "Image slot: rural solar microgrid",
    title: "Smart Energy Systems",
    text: "Renewable generation, energy management and intelligent power systems.",
  },
  {
    icon: "bess",
    slot: "Image slot: battery container on site",
    title: "BESS & Power Management",
    text: "Battery storage, backup power, optimisation and intelligent switching.",
  },
  {
    icon: "infra",
    slot: "Image slot: modern Sudanese building",
    title: "Smart Infrastructure",
    text: "Intelligent buildings and resilient infrastructure built for local climate.",
  },
  {
    icon: "auto",
    slot: "Image slot: control room technicians",
    title: "Industrial Automation & Control",
    text: "PLC, SCADA, monitoring and real-time control for industrial plants.",
  },
  {
    icon: "health",
    slot: "Image slot: clinic with reliable power",
    title: "Healthcare Engineering",
    text: "Smart clinics and hospitals with power resilience and monitoring.",
  },
  {
    icon: "ai",
    slot: "Image slot: engineer reviewing data",
    title: "AI & Intelligent Systems",
    text: "Decision support and intelligent monitoring for engineering applications.",
  },
];

const FACETS = [
  ["Sudanese identity", "Designed around local climate, grid conditions and supply realities."],
  ["Innovation", "Practical research that ends in working, maintainable systems."],
  ["Sustainability", "Solar, storage and efficiency at the centre of every design."],
  ["People", "Training and jobs for the next generation of Sudanese engineers."],
];

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <HeroScene />
        <div className="grid-ov"></div>
        <div className="hud" aria-label="Demo readings">
          {HUD.map(([label, value]) => (
            <div className="chip" key={label}>
              <span>
                <small>{label}</small>
                <b>{value}</b>
              </span>
              <i></i>
            </div>
          ))}
        </div>
        <Nav cur="home" />
        <div className="wrap">
          <span className="label">Sudanese engineering and technology</span>
          <h1 className="display">Technology for a Brighter Tomorrow.</h1>
          <p className="lead">
            Blue Bird for Industry delivers advanced engineering and technology
            solutions that strengthen energy, infrastructure, healthcare and
            industry across Sudan and beyond.
          </p>
          <div className="btns">
            <a className="btn btn-primary" href="#solutions">
              Explore our solutions
            </a>
            <Go className="btn btn-ghost" to="about">
              Discover Blue Bird
            </Go>
          </div>
        </div>
        <div className="slot-note">
          Illustrated scene and demo readings. Swap in Nile and Khartoum
          photography.
        </div>
      </header>

      <section className="s" id="solutions">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="label">Solutions</span>
              <h2 style={{ marginTop: 14 }}>
                Six disciplines, one engineering team.
              </h2>
            </div>
            <p>
              From the power source to the building it runs, we design,
              integrate and support the systems Sudan depends on.
            </p>
          </div>
          <div className="grid6">
            {SOLUTIONS.map((s) => (
              <SolutionCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="s dark" id="system">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="label">How it works</span>
              <h2 style={{ marginTop: 14 }}>
                One system that keeps critical services running.
              </h2>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Choose a situation and see how a Blue Bird system routes power
              between the sun, the battery and the grid.
            </p>
          </div>
          <PowerFlow />
        </div>
      </section>

      <section className="s light" id="about">
        <div className="wrap about">
          <Slot
            role="img"
            aria-label="Image slot"
            label="Image slot: Sudanese engineers on site, Nile in the background"
          />
          <div>
            <span className="label">About Blue Bird</span>
            <h2>More Than a Company. A Vision.</h2>
            <p className="muted">
              Blue Bird for Industry brings engineering, technology and
              innovation together to solve practical problems where they matter
              most. We build in Sudan, with Sudanese engineers, for communities
              and industries that need dependable systems.
            </p>
            <dl className="facets">
              {FACETS.map(([term, text]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
            <div className="stats">
              <div className="stat">
                <Counter n={6} s="+" />
                <span>Core solutions</span>
              </div>
              <div className="stat">
                <Counter n={50} s="+" />
                <span>Projects</span>
              </div>
              <div className="stat">
                <Counter n={100} s="%" />
                <span>Commitment to impact</span>
              </div>
            </div>
            <p className="ph">
              Project count is a placeholder. Replace with verified figures
              before launch.
            </p>
          </div>
        </div>
      </section>

      <div className="band">
        <div className="wrap">
          <h2>
            Built in Sudan. <em>Engineered for the future.</em>
          </h2>
          <a className="btn btn-primary" href="#">
            Start a project
          </a>
        </div>
      </div>

      <Footer home />
    </>
  );
}
