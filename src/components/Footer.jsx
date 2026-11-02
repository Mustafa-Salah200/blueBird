import Go from "./Go.jsx";
import { LogoText, Mark } from "./Logo.jsx";

const COLUMNS = [
  [
    "Company",
    [
      ["About", "about"],
      ["Projects", "projects"],
      ["Careers", "careers"],
      ["Contact", "contact"],
    ],
  ],
  [
    "Solutions",
    [
      ["Energy", "solutions"],
      ["Infrastructure", "solutions"],
      ["Automation", "solutions"],
      ["Healthcare", "solutions"],
      ["AI", "solutions"],
    ],
  ],
  [
    "Resources",
    [
      ["Blog", "blog"],
      ["News", "blog"],
      ["Case studies", "projects"],
    ],
  ],
];

// The homepage footer's links are plain anchors and it adds a social link.
// The inner pages' footer links navigate.
export default function Footer({ home }) {
  const logo = (
    <>
      <Mark />
      <LogoText />
    </>
  );
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            {home ? (
              <a className="logo" href="#top">
                {logo}
              </a>
            ) : (
              <Go className="logo" to="home">
                {logo}
              </Go>
            )}
            <p>Fly Beyond Limits.</p>
          </div>
          {COLUMNS.map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map(([t, to]) => (
                  <li key={t}>
                    {home ? <a href="#">{t}</a> : <Go to={to}>{t}</Go>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Contact</h4>
            <ul>
              <li>email@placeholder</li>
              <li>+249 xx xxx xxxx</li>
              <li>Location to be confirmed</li>
              {home && (
                <li>
                  <a href="#">Social media</a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="f-legal">
          <span>© 2026 Blue Bird for Industry. All rights reserved.</span>
          <nav>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
