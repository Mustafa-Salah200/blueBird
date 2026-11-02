import { Mark } from "../components/Logo.jsx";
import { useSite } from "../site.js";

const cards = (n) => Array.from({ length: n }, (_, i) => <i key={i}></i>);
const none = { flex: "none" };
const flush = { paddingTop: 0 };

const T = {
  home: {
    h: "Technology for a Brighter Tomorrow.",
    p: "/",
    b: (
      <>
        <div className="t-body g3">{cards(6)}</div>
        <div className="t-body g2" style={none}>
          <i className="d" style={{ minHeight: 26 }}></i>
          <i></i>
        </div>
      </>
    ),
  },
  about: {
    h: "Rooted in Sudan. Built for the Future.",
    p: "/about",
    b: (
      <>
        <div className="t-body g2 tall">
          <i className="d"></i>
          <i></i>
        </div>
        <div className="t-body g4" style={none}>
          {cards(8)}
        </div>
      </>
    ),
  },
  sol: {
    h: "Integrated Solutions for a Smarter Sudan.",
    p: "/solutions",
    b: <div className="t-body g3 tall">{cards(9)}</div>,
  },
  prod: {
    h: "Engineered for Performance.",
    p: "/products",
    b: <div className="t-body g2 tall">{cards(8)}</div>,
  },
  proj: {
    h: "Real Solutions. Real Impact.",
    p: "/projects",
    b: (
      <>
        <div className="t-body">
          <div className="chips">
            <i className="e"></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className="t-body g2 tall" style={flush}>
          {cards(6)}
        </div>
      </>
    ),
  },
  car: {
    h: "Build Your Future With Us.",
    p: "/careers",
    b: (
      <>
        <div className="t-body g3">{cards(6)}</div>
        <div className="t-body" style={flush}>
          {Array.from({ length: 6 }, (_, i) => (
            <i key={i} style={{ minHeight: 18 }}></i>
          ))}
        </div>
      </>
    ),
  },
  blog: {
    h: "Insights & Updates.",
    p: "/blog",
    b: (
      <>
        <div className="t-body">
          <i className="d" style={{ minHeight: 70 }}></i>
        </div>
        <div className="t-body g3 tall" style={flush}>
          {cards(6)}
        </div>
      </>
    ),
  },
  con: {
    h: "Let’s Build Something Great.",
    p: "/contact",
    b: (
      <>
        <div className="t-body g2 tall">
          <i></i>
          <i className="d"></i>
        </div>
        <div className="t-body" style={flush}>
          <i style={{ minHeight: 60 }}></i>
        </div>
      </>
    ),
  },
};

const GO = {
  home: "home",
  about: "about",
  sol: "solutions",
  prod: "products",
  proj: "projects",
};

const CHILDREN = [
  ["about", "About"],
  ["sol", "Solutions"],
  ["prod", "Products"],
  ["proj", "Projects"],
  ["car", "Careers"],
  ["blog", "Blog"],
  ["con", "Contact"],
];

function HeroThumb() {
  return (
    <div className="t-hero">
      <b></b>
      <b></b>
      <u></u>
    </div>
  );
}

function Thumb({ k, alt }) {
  if (alt)
    return (
      <div className="thumb alt">
        <div className="rail"></div>
        <div className="main">
          <HeroThumb />
          <div className="t-body g2 tall">{cards(4)}</div>
        </div>
      </div>
    );
  return (
    <div className="thumb">
      <div className="t-nav">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <HeroThumb />
      {T[k].b}
    </div>
  );
}

function Pg({ k, name, path, hero, alt }) {
  const { go } = useSite();
  const to = !alt && GO[k];
  const link = to && {
    "data-go": to,
    tabIndex: 0,
    role: "link",
    onClick: () => go(to),
    onKeyDown: (e) => {
      if (e.key === "Enter") go(to);
    },
  };
  return (
    <div className="pg" {...link}>
      <Thumb k={k} alt={alt} />
      <h4>{name}</h4>
      <p>
        {path}
        <br />
        {hero}
      </p>
    </div>
  );
}

export default function Sitemap() {
  return (
    <div className="sm">
      <div className="wrap">
        <div className="sm-top">
          <a className="logo" href="#">
            <Mark />
          </a>
          <h2>BLUE BIRD FOR INDUSTRY</h2>
          <p>FLY BEYOND LIMITS</p>
        </div>
        <div className="roots" id="roots">
          <Pg k="home" name="Homepage" path="/" hero={T.home.h} />
          <Pg
            k="home"
            name="Alternative homepage"
            path="/alt"
            hero="Engineering Real Change. Side navigation."
            alt
          />
        </div>
        <div className="tree">
          <div className="kids" id="kids">
            {CHILDREN.map(([k, name]) => (
              <Pg key={k} k={k} name={name} path={T[k].p} hero={T[k].h} />
            ))}
          </div>
        </div>
        <div className="bp">
          <span>Desktop 1920 / 1440</span>
          <span>Tablet 1024 / 768</span>
          <span>Mobile 390 / 375</span>
          <span>One design system</span>
        </div>
      </div>
    </div>
  );
}
