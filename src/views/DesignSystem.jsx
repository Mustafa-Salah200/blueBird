import Icon from "../components/Icon.jsx";
import { LogoText, Mark } from "../components/Logo.jsx";
import SolutionCard from "../components/SolutionCard.jsx";

const SWATCHES = [
  ["#050b18", "Ink", "#050B18 · hero, footer"],
  ["#0a1b3d", "Navy", "#0A1B3D · dark sections"],
  ["#123a80", "Deep blue", "#123A80 · gradients, numbers"],
  ["#2f7bff", "Electric", "#2F7BFF · buttons, links"],
  ["#5cc8e8", "Cyan", "#5CC8E8 · highlights only"],
  ["#eef2f8", "Mist", "#EEF2F8 · content sections"],
];

const ICONS = [
  ["energy", "Energy"],
  ["bess", "Storage"],
  ["infra", "Infrastructure"],
  ["auto", "Automation"],
  ["health", "Healthcare"],
  ["ai", "AI"],
];

export default function DesignSystem() {
  return (
    <>
      <div className="ds-hero">
        <div className="wrap">
          <a className="logo" href="#">
            <Mark />
            <LogoText />
          </a>
          <h1 className="display" style={{ marginTop: 56, maxWidth: "12ch" }}>
            Design system
          </h1>
          <p className="lead" style={{ marginTop: 20 }}>
            One set of tokens for every page: dark navy for cinematic moments,
            white and mist for working content, electric blue only where action
            happens.
          </p>
        </div>
      </div>

      <div className="ds-block">
        <div className="wrap">
          <span className="label">Colour</span>
          <h2>Navy first. Blue for action.</h2>
          <div className="swatches">
            {SWATCHES.map(([color, name, text]) => (
              <div className="sw" key={name}>
                <i style={{ background: color }}></i>
                <div>
                  <b>{name}</b>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 20, maxWidth: "64ch" }}>
            A warm dusk tone (#D9A066) appears only inside photography and
            illustration of the Sudanese horizon. It is never used for interface
            elements.
          </p>
        </div>
      </div>

      <div className="ds-block">
        <div className="wrap">
          <span className="label">Typography</span>
          <h2>One sans-serif family, tightly set.</h2>
          <p className="muted" style={{ marginBottom: 12 }}>
            Stack: Avenir Next, Segoe UI, Inter, Helvetica Neue. Swap in a
            licensed face (for example Söhne or Neue Haas Grotesk) for
            production.
          </p>
          <div className="type-row">
            <small>Display · 96 / 600</small>
            <div className="display" style={{ fontSize: 72 }}>
              Fly Beyond Limits
            </div>
          </div>
          <div className="type-row">
            <small>Heading 2 · 56 / 600</small>
            <h2>Integrated solutions</h2>
          </div>
          <div className="type-row">
            <small>Heading 3 · 22 / 600</small>
            <h3>Smart Energy Systems</h3>
          </div>
          <div className="type-row">
            <small>Body · 17 / 1.55</small>
            <p style={{ maxWidth: "60ch" }}>
              Highly readable body text with line lengths under 80 characters,
              set in slate on light backgrounds.
            </p>
          </div>
          <div className="type-row">
            <small>Label · 12 / 600 / +14%</small>
            <span className="label">Section category</span>
          </div>
          <div className="type-row">
            <small>Statistic · 64 / 600</small>
            <b
              style={{
                fontSize: 64,
                letterSpacing: "-0.04em",
                color: "var(--deep)",
              }}
            >
              50+
            </b>
          </div>
        </div>
      </div>

      <div className="ds-block">
        <div className="wrap">
          <span className="label">Components</span>
          <h2>Buttons, cards, icons.</h2>
          <div className="demo-dark">
            <a className="btn btn-primary" href="#">
              Explore our solutions
            </a>
            <a className="btn btn-ghost" href="#">
              Discover Blue Bird
            </a>
          </div>
          <div className="demo-light">
            <a className="btn btn-primary" href="#">
              Send message
            </a>
            <a className="btn btn-line" href="#">
              View project
            </a>
          </div>
          <div className="two" style={{ marginTop: 32 }}>
            <SolutionCard
              icon="bess"
              slot="Image slot"
              title="Card title"
              text="Photo slot on top, one heading, one sentence, one link."
            />
            <div className="rules" style={{ gridTemplateColumns: "1fr" }}>
              <ul>
                <li>
                  <b>Radius</b> 6 px controls, 10 px cards, 16 px feature images
                </li>
                <li>
                  <b>Borders</b> 1 px, 14% navy on light, 14% white on dark
                </li>
                <li>
                  <b>Shadow</b> only on hover, blue-tinted
                </li>
                <li>
                  <b>Focus</b> 2 px cyan ring on every interactive element
                </li>
                <li>
                  <b>Touch target</b> 44 px minimum
                </li>
              </ul>
            </div>
          </div>
          <div className="icons" style={{ marginTop: 32 }}>
            {ICONS.map(([icon, label]) => (
              <div key={icon}>
                <Icon name={icon} />
                {label}
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 16 }}>
            Icons: 24 px grid, 1.5 px stroke, round caps, single colour.
          </p>
        </div>
      </div>

      <div className="ds-block">
        <div className="wrap">
          <span className="label">Imagery and motion</span>
          <h2>Photography carries Sudan.</h2>
          <div className="rules">
            <ul>
              <h3>Do</h3>
              <li>
                Real Sudanese engineers, technicians, doctors and students at
                work
              </li>
              <li>Nile, Khartoum, Port Sudan, Red Sea and Sahel settings</li>
              <li>Solar, storage, hospitals and plants photographed on site</li>
              <li>Grade all photos toward navy shadows for consistency</li>
            </ul>
            <ul>
              <h3>Avoid</h3>
              <li>Generic international stock scenes</li>
              <li>Costume or exaggerated cultural styling</li>
              <li>Sci-fi renders of products</li>
              <li>Neon, heavy glass effects, cartoon illustration</li>
            </ul>
          </div>
          <p className="muted" style={{ marginTop: 24, maxWidth: "70ch" }}>
            Motion: one cinematic moment per page (on the homepage, the bird
            crosses the Nile once on load). Everything else responds to the
            visitor: hover states, filters, counters when statistics scroll into
            view. Reduced-motion settings are respected.
          </p>
          <div className="radii" style={{ marginTop: 28 }}>
            <div style={{ borderRadius: 6 }}>6 px</div>
            <div style={{ borderRadius: 10 }}>10 px</div>
            <div style={{ borderRadius: 16 }}>16 px</div>
          </div>
        </div>
      </div>
    </>
  );
}
