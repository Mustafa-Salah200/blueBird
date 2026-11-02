import { useCallback, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { BUILT, NAV, SiteContext } from "./site.js";
import Go from "./components/Go.jsx";
import { LogoText } from "./components/Logo.jsx";
import SvgDefs from "./components/SvgDefs.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Solutions from "./views/Solutions.jsx";
import Products from "./views/Products.jsx";
import Projects from "./views/Projects.jsx";
import DesignSystem from "./views/DesignSystem.jsx";
import Sitemap from "./views/Sitemap.jsx";

const TABS = [
  ["site", "Website"],
  ["system", "Design system"],
  ["map", "Sitemap"],
];

export default function App() {
  const [tab, setTab] = useState("site");
  const [site, setSite] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState({ text: "", on: false });
  const toastT = useRef();

  const go = useCallback((k) => {
    setMenuOpen(false);
    if (!BUILT.includes(k)) {
      const text = NAV.find((n) => n[0] === k)[1] + " page is not built yet";
      setToast({ text, on: true });
      clearTimeout(toastT.current);
      toastT.current = setTimeout(
        () => setToast((t) => ({ ...t, on: false })),
        2200,
      );
      return;
    }
    flushSync(() => {
      setSite(k);
      setTab("site");
    });
    window.scrollTo(0, 0);
  }, []);

  const switchTab = (v) => {
    flushSync(() => setTab(v));
    window.scrollTo(0, 0);
  };

  const ctx = useMemo(
    () => ({ go, openMenu: () => setMenuOpen(true) }),
    [go],
  );

  // Every view stays mounted and is toggled with .on, so CSS animations
  // replay on show and filters and scenarios keep their state.
  const current = tab === "site" ? site : tab;
  const view = (k) => (k === current ? "view on" : "view");

  return (
    <SiteContext.Provider value={ctx}>
      <SvgDefs />

      <div className={view("home")} id="v-home">
        <Home />
      </div>
      <div className={view("about")} id="v-about">
        <About />
      </div>
      <div className={view("solutions")} id="v-solutions">
        <Solutions />
      </div>
      <div className={view("products")} id="v-products">
        <Products />
      </div>
      <div className={view("projects")} id="v-projects">
        <Projects />
      </div>
      <div className={view("system")} id="v-system">
        <DesignSystem />
      </div>
      <div className={view("map")} id="v-map">
        <Sitemap />
      </div>

      <div className={menuOpen ? "mobile-menu on" : "mobile-menu"} id="mm">
        <div className="top">
          <a className="logo" href="#">
            <svg width="38" height="38">
              <use href="#mark" />
            </svg>
            <LogoText />
          </a>
          <button
            className="icon-btn"
            id="close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
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
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        <div id="mmlinks">
          {NAV.map(([k, t]) => (
            <Go key={k} to={k}>
              {t}
            </Go>
          ))}
        </div>
      </div>

      <div className={toast.on ? "toast on" : "toast"} id="toast" role="status">
        {toast.text}
      </div>
      <div className="switch" role="tablist" aria-label="Design board views">
        {TABS.map(([k, t]) => (
          <button
            key={k}
            className={k === tab ? "on" : undefined}
            onClick={() => switchTab(k)}
          >
            {t}
          </button>
        ))}
      </div>
    </SiteContext.Provider>
  );
}
