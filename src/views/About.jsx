import Footer from "../components/Footer.jsx";
import Go from "../components/Go.jsx";
import Icon from "../components/Icon.jsx";
import Nav from "../components/Nav.jsx";
import Slot from "../components/Slot.jsx";

const VALUES = [
  ["energy", "Innovation", "Practical research that ends in working systems."],
  ["infra", "Integrity", "Honest specifications, honest timelines."],
  ["env", "Sustainability", "Solar, storage and efficiency by default."],
  ["auto", "Excellence", "Engineering reviewed, tested and documented."],
  ["health", "Safety", "For our teams, our clients and the public."],
  ["bess", "Impact", "Measured by what communities can do with reliable power."],
  ["ai", "People", "Sudanese engineers trained and given room to lead."],
];

const TIMELINE = [
  ["Concept", "Frame the problem with the people who live with it."],
  ["Design", "Engineer for local heat, dust, grid and supply conditions."],
  ["Pilot", "Prove the system on a real site with real data."],
  ["Deployment", "Install, commission and train local teams."],
  ["Scale", "Repeat across regions and emerging markets."],
];

export default function About() {
  return (
    <>
      <header className="page-hero split">
        <Nav cur="about" />
        <div className="wrap">
          <div>
            <span className="label">About Blue Bird</span>
            <h1>Rooted in Sudan. Built for the Future.</h1>
            <p className="lead">
              Sudanese engineers building practical, intelligent and sustainable
              systems for Sudan and emerging markets.
            </p>
          </div>
          <Slot
            role="img"
            aria-label="Image slot"
            label="Image slot: Sudanese engineers on site, Nile in the background"
          />
        </div>
      </header>
      <section className="s">
        <div className="wrap two-col">
          <div>
            <span className="label">Our story</span>
            <h2 style={{ marginTop: 14 }}>
              Solving real problems with engineering.
            </h2>
          </div>
          <div className="muted">
            <p>
              Blue Bird for Industry combines engineering, technology and
              innovation to solve problems that Sudanese industries, hospitals
              and communities face every day: unreliable power, ageing
              infrastructure and limited monitoring.
            </p>
            <p>
              We start on site, with the people who use the system, and design
              for local conditions. The result is equipment that is understood,
              maintained and improved by the teams that run it.
            </p>
            <p className="ph">
              Draft copy. Replace with the company's own founding story.
            </p>
          </div>
        </div>
      </section>
      <section className="s light">
        <div className="wrap">
          <div className="vm">
            <div className="a">
              <span className="label">Our vision</span>
              <h3>Smarter, safer and more sustainable infrastructure.</h3>
              <p>
                Infrastructure that keeps clinics lit, plants running and
                communities connected.
              </p>
            </div>
            <div className="b">
              <span className="label">Our mission</span>
              <h3>Practical engineering with measurable value.</h3>
              <p>
                Deliver solutions that create clear, verifiable benefit for
                industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="s">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="label">Our values</span>
              <h2 style={{ marginTop: 14 }}>How we work.</h2>
            </div>
            <p>
              Seven commitments that shape every design review, site visit and
              hire.
            </p>
          </div>
          <div className="values">
            {VALUES.map(([icon, title, text]) => (
              <div className="val" key={title}>
                <Icon name={icon} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
            <div className="val tile">
              Built in Sudan. Engineered for the future.
            </div>
          </div>
        </div>
      </section>
      <section className="s light">
        <div className="wrap">
          <span className="label">Growth in Sudan</span>
          <h2 style={{ margin: "14px 0 8px" }}>From idea to regional scale.</h2>
          <p className="muted" style={{ maxWidth: "56ch" }}>
            How every Blue Bird system develops. Add real company milestones as
            they are confirmed.
          </p>
          <div className="tl">
            {TIMELINE.map(([title, text]) => (
              <div key={title}>
                <b>{title}</b>
                <p>{text}</p>
                <small>Dates to be added</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="band">
        <div className="wrap">
          <h2>
            Build with <em>Blue Bird.</em>
          </h2>
          <Go className="btn btn-primary" to="contact">
            Get in touch
          </Go>
        </div>
      </div>
      <Footer />
    </>
  );
}
