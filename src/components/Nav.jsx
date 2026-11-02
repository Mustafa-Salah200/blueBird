import { NAV, useSite } from "../site.js";
import Go from "./Go.jsx";
import { LogoText, Mark } from "./Logo.jsx";

export default function Nav({ cur }) {
  const { openMenu } = useSite();
  const logo = (
    <>
      <Mark />
      <LogoText />
    </>
  );
  return (
    <div className="nav">
      <div className="wrap">
        {cur === "home" ? (
          <a className="logo" href="#top" aria-label="Blue Bird for Industry">
            {logo}
          </a>
        ) : (
          <Go className="logo" to="home" aria-label="Blue Bird for Industry">
            {logo}
          </Go>
        )}
        <nav className="menu" aria-label="Main">
          {NAV.map(([k, t]) => (
            <Go key={k} to={k} className={k === cur ? "cur" : undefined}>
              {t}
            </Go>
          ))}
        </nav>
        <div className="nav-r">
          <button className="icon-btn" aria-label="Search">
            <svg width="22" height="22">
              <use href="#i-search" />
            </svg>
          </button>
          <Go className="btn btn-primary" to="contact">
            Get in touch
          </Go>
          <button
            className="icon-btn burger"
            aria-label="Open menu"
            onClick={openMenu}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
