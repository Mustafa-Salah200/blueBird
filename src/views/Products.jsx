import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";
import Slot from "../components/Slot.jsx";

const PRODUCTS = [
  {
    name: "BESS Unit",
    text: "Containerised battery storage for backup and peak shaving.",
    caps: ["Scalable capacity", "Hot-climate thermal design", "Remote monitoring"],
  },
  {
    name: "Smart Energy Controller",
    text: "Coordinates solar, storage, grid and generator sources.",
    caps: ["Automatic source switching", "Load prioritisation", "Local data logging"],
  },
  {
    name: "Smart Building System",
    text: "Monitoring and control for energy, air and access in buildings.",
    caps: ["Energy dashboards", "Environmental sensors", "Alarm management"],
  },
  {
    name: "Industrial Controller",
    text: "Rugged PLC-based control for plants and pumping stations.",
    caps: ["Modbus and OPC support", "Wide temperature range", "SCADA ready"],
  },
  {
    name: "BlueCare Clinic System",
    text: "Power resilience and monitoring package for clinics.",
    caps: ["Protected critical loads", "Cold-chain alerts", "Usage reporting"],
  },
  {
    name: "SEMIS",
    text: "Integrated smart infrastructure platform. Full name and specification to be confirmed.",
    caps: ["Capability to be added", "Capability to be added", "Capability to be added"],
  },
  {
    name: "AI Vision Module",
    text: "Camera-based inspection and monitoring at the edge.",
    caps: ["On-device inference", "Defect and safety alerts", "Works offline"],
  },
  {
    name: "Intelligent Control Platform",
    text: "AI-assisted assistant for operators and engineers.",
    caps: ["Natural-language queries", "Fault diagnosis support", "Ties into SCADA data"],
  },
];

export default function Products() {
  return (
    <>
      <header className="page-hero">
        <Nav cur="products" />
        <div className="wrap">
          <div>
            <span className="label">Our products</span>
            <h1>Engineered for Performance. Built for the Future.</h1>
            <p className="lead">
              Equipment designed, tested and supported by Blue Bird engineers
              for Sudanese conditions.
            </p>
          </div>
        </div>
      </header>
      <section className="s light">
        <div className="wrap">
          <div className="pgrid">
            {PRODUCTS.map((p) => (
              <div className="card pcard" key={p.name}>
                <Slot label={`Product photo: ${p.name}`} />
                <div className="body">
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <ul className="caps">
                    {p.caps.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                  <a className="btn btn-line" href="#">
                    View product
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="ph" style={{ marginTop: 28 }}>
            Capabilities are draft copy. Use real product photography and
            verified specifications.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
