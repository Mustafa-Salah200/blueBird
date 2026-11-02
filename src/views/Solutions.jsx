import Footer from "../components/Footer.jsx";
import Go from "../components/Go.jsx";
import Nav from "../components/Nav.jsx";
import SolutionCard from "../components/SolutionCard.jsx";

const SOLUTIONS = [
  {
    icon: "energy",
    slot: "Image slot: solar array",
    title: "Smart Energy Systems",
    text: "Renewable energy, energy management and intelligent power systems.",
  },
  {
    icon: "bess",
    slot: "Image slot: battery containers",
    title: "BESS & Power Management",
    text: "Battery energy storage, backup power, energy optimisation and intelligent switching.",
  },
  {
    icon: "infra",
    slot: "Image slot: Khartoum building",
    title: "Smart Infrastructure",
    text: "Intelligent buildings, resilient infrastructure and environmental systems.",
  },
  {
    icon: "auto",
    slot: "Image slot: plant control room",
    title: "Industrial Automation & Control",
    text: "PLC, SCADA, control systems, monitoring and real-time automation.",
  },
  {
    icon: "health",
    slot: "Image slot: hospital ward",
    title: "Healthcare Engineering",
    text: "Smart clinics, hospitals, power resilience, monitoring and infrastructure.",
  },
  {
    icon: "ai",
    slot: "Image slot: engineer with laptop",
    title: "AI & Intelligent Systems",
    text: "AI-assisted decision systems, intelligent monitoring and advanced engineering applications.",
  },
  {
    icon: "env",
    slot: "Image slot: Nile landscape",
    title: "Environmental Solutions",
    text: "Sustainable infrastructure, environmental monitoring and resource optimisation.",
  },
];

export default function Solutions() {
  return (
    <>
      <header className="page-hero">
        <Nav cur="solutions" />
        <div className="wrap">
          <div>
            <span className="label">Solutions</span>
            <h1>Integrated Solutions for a Smarter Sudan.</h1>
            <p className="lead">
              Seven disciplines that work together, from the power source to the
              building and the people it serves.
            </p>
          </div>
        </div>
      </header>
      <section className="s">
        <div className="wrap">
          <div className="grid6">
            {SOLUTIONS.map((s) => (
              <SolutionCard key={s.title} {...s} />
            ))}
            <div
              className="card"
              style={{
                background: "var(--ink)",
                color: "#fff",
                border: 0,
                justifyContent: "flex-end",
              }}
            >
              <div className="body">
                <h3 style={{ fontSize: 28 }}>Not sure where to start?</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.72)" }}>
                  Tell us about your site and we will recommend a scope.
                </p>
                <Go
                  className="btn btn-primary"
                  to="contact"
                  style={{ alignSelf: "flex-start", marginTop: 8 }}
                >
                  Talk to an engineer
                </Go>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
