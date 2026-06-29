/* global React, PROJECTS */
const { useState, useEffect, useRef } = React;

/* ---------- Placeholder swatches ---------- */
function Placeholder({ label, swatch = "warm" }) {
  const colors = {
    warm:  ["oklch(0.92 0.04 50)", "oklch(0.78 0.09 45)"],
    cool:  ["oklch(0.90 0.04 230)", "oklch(0.72 0.08 235)"],
    blush: ["oklch(0.92 0.04 20)", "oklch(0.78 0.08 15)"],
    sage:  ["oklch(0.90 0.04 150)", "oklch(0.72 0.07 155)"],
    ink:   ["oklch(0.32 0.012 70)", "oklch(0.45 0.014 70)"],
  };
  const [c1, c2] = colors[swatch] || colors.warm;
  return (
    <div className="placeholder" style={{
      background: `repeating-linear-gradient(135deg, transparent 0 14px, ${c2}33 14px 15px), linear-gradient(135deg, ${c1}, ${c2}55)`
    }}>
      <span>{label}</span>
    </div>
  );
}

/* ---------- Cursor follower ---------- */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const cur = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => { target.current = { x: e.clientX, y: e.clientY }; };
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      const ring = ringRef.current; const label = labelRef.current;
      if (!ring) return;
      if (t) {
        ring.classList.add("is-hover");
        const txt = t.getAttribute("data-cursor");
        if (label && txt) { label.textContent = txt; label.classList.add("show"); }
      } else {
        ring.classList.remove("is-hover");
        if (label) { label.classList.remove("show"); }
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    let raf;
    const tick = () => {
      cur.current.x += (target.current.x - cur.current.x) * 0.18;
      cur.current.y += (target.current.y - cur.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${target.current.x}px, ${target.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cur.current.x}px, ${cur.current.y}px) translate(-50%, -50%)`;
      }
      if (labelRef.current && labelRef.current.classList.contains("show")) {
        labelRef.current.style.transform = `translate(${cur.current.x}px, ${cur.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseover", onOver); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={ringRef} className="cursor-ring"></div>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={labelRef} className="cursor-label"></div>
    </>
  );
}

/* ---------- Nav ---------- */
function Nav({ route, setRoute }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "projects", label: "My Works" },
    { id: "resume", label: "Resume" },
    { id: "about", label: "About Me" },
  ];
  return (
    <header className="nav-bar">
      <div className="site-id" onClick={() => setRoute("home")} data-cursor="home">
        Kimberly<em>.</em>
      </div>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-links">
            {items.map((it) => (
              <button
                key={it.id}
                className={`nav-link ${(route === it.id || (route === "case" && it.id === "projects")) ? "is-active" : ""} ${it.id === "resume" ? "is-resume" : ""}`}
                onClick={() => setRoute(it.id)}
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

/* ---------- To-top button ---------- */
function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={`to-top ${show ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12V2M7 2L2 7M7 2l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
}

/* ---------- Marquee ticker ---------- */
function Ticker() {
  const items = ["Product Design", "Brand Systems", "Type & Editorial", "0→1 Products", "Design Leadership"];
  const row = (
    <span className="ticker-row">
      {items.map((t, i) => (
        <span key={i} className="ticker-item">
          <em>{t}</em>
          <span className="star">✺</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="ticker">
      <div className="ticker-track">
        {row}{row}
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer({ setRoute }) {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <h2 className="foot-cta">
            Here is where library science<br/>meets <em>user experience.</em>
          </h2>
          <div>
            <p className="foot-text">
              Sorting through what comes next.<br/>
              Graduating May 2026. Open to full-time UX, Product Design, or UX Research roles in the U.S.
            </p>
            <div className="foot-actions">
              <a href="assets/Kimberly_Chen_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn solid">Resume <span className="arrow">↗</span></a>
              <a href="#" className="btn ghost" onClick={(e) => { e.preventDefault(); setRoute("about"); }}>About me</a>
              <a href="https://www.linkedin.com/in/peichunchen" target="_blank" rel="noopener noreferrer" className="btn ghost">LinkedIn</a>
              <a href="mailto:kimberlychen122489@gmail.com" className="btn ghost">Email me</a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Kimberly Chen<br/>Made with latte (and a lot of revisions)</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Tweaks ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "reverse",
  "accent": "#387495",
  "fontPair": "patrick-quicksand",
  "dark": false,
  "showTicker": true,
  "heroVariant": "split",
  "projectsVariant": "alt",
  "collage": true,
  "cursor": true
}/*EDITMODE-END*/;

/* Palette presets — bg + accent + nav chrome swap together */
const PALETTES = {
  peach: {
    label: "Peach (current)",
    "--bg": "#f6e1d4",
    "--bg-elev": "#fbf5e8",
    "--ink": "#1f2b3a",
    "--ink-2": "#3f4d5e",
    "--ink-3": "#8a8273",
    "--line": "#e6d6bf",
    "--line-2": "#efe1cc",
    "--accent": "#387495",
    "--accent-soft": "#f6e1d4",
    "--blob-1": "#abc1f7",
    "--blob-2": "#f6e1d4",
    "--blob-3": "#387495",
    "--dot": "rgba(56,116,149,0.16)",
    "--nav-bg-top": "#ecd9c7",
    "--nav-bg-bot": "#e2cdb9",
    "--nav-binding": "#c45a3a",
    "--nav-tab-top": "#dac6b2",
    "--nav-tab-bot": "#cbb39a",
    "--nav-tab-ink": "#6b6258",
  },
  refined: {
    label: "Refined cream",
    "--bg": "#f4ebe0",
    "--bg-elev": "#fbf7ee",
    "--ink": "#1a2330",
    "--ink-2": "#3a4555",
    "--ink-3": "#827a6c",
    "--line": "#e6dccb",
    "--line-2": "#efe7d6",
    "--accent": "#2e5d7a",
    "--accent-soft": "#e7ecf0",
    "--blob-1": "#c8d4e8",
    "--blob-2": "#f4ebe0",
    "--blob-3": "#2e5d7a",
    "--dot": "rgba(46,93,122,0.14)",
    "--nav-bg-top": "#eadfcd",
    "--nav-bg-bot": "#dccfb8",
    "--nav-binding": "#8a3f2b",
    "--nav-tab-top": "#d8c9b3",
    "--nav-tab-bot": "#c4b39a",
    "--nav-tab-ink": "#5d544a",
  },
  reverse: {
    label: "Cream reverse",
    "--bg": "#fbf5e8",
    "--bg-elev": "#f6e1d4",
    "--ink": "#1f2b3a",
    "--ink-2": "#3f4d5e",
    "--ink-3": "#8a8273",
    "--line": "#ece1cc",
    "--line-2": "#f3ead8",
    "--accent": "#387495",
    "--accent-soft": "#f6e1d4",
    "--blob-1": "#abc1f7",
    "--blob-2": "#f6e1d4",
    "--blob-3": "#387495",
    "--dot": "rgba(56,116,149,0.12)",
    "--nav-bg-top": "#f1e3cf",
    "--nav-bg-bot": "#e8d6bd",
    "--nav-binding": "#c45a3a",
    "--nav-tab-top": "#e0cdb4",
    "--nav-tab-bot": "#d1ba9d",
    "--nav-tab-ink": "#6b6258",
  },
  sage: {
    label: "Sage scholar",
    "--bg": "#eef0e6",
    "--bg-elev": "#f7f6ec",
    "--ink": "#222a23",
    "--ink-2": "#404a3e",
    "--ink-3": "#7b8275",
    "--line": "#dee2d2",
    "--line-2": "#e7ead9",
    "--accent": "#3d6b54",
    "--accent-soft": "#e3ebe1",
    "--blob-1": "#c7d3bf",
    "--blob-2": "#eef0e6",
    "--blob-3": "#3d6b54",
    "--dot": "rgba(61,107,84,0.14)",
    "--nav-bg-top": "#e2e4d3",
    "--nav-bg-bot": "#d2d6bf",
    "--nav-binding": "#6b4a2b",
    "--nav-tab-top": "#d4d7c0",
    "--nav-tab-bot": "#bec3a8",
    "--nav-tab-ink": "#56594a",
  },
};

function TweaksUI() {
  const { TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio, TweakToggle, TweakSelect } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = t.dark ? "dark" : "light";

    // Apply palette — overwrites all relevant CSS vars
    const pal = PALETTES[t.palette] || PALETTES.peach;
    Object.entries(pal).forEach(([k, v]) => {
      if (k.startsWith("--")) root.style.setProperty(k, v);
    });

    // Accent override (if user picked a custom one different from palette default)
    if (t.accent && t.accent !== pal["--accent"]) {
      root.style.setProperty("--accent", t.accent);
    }
    const pairs = {
      "patrick-quicksand": {
        serif: '"Patrick Hand", "Segoe Print", "Bradley Hand", cursive',
        sans: '"Quicksand", "Avenir Next", "Segoe UI", -apple-system, sans-serif',
        dataFont: "patrick-hand",
      },
      "fraunces-wonk": {
        serif: '"Fraunces", "anca", Georgia, serif',
        sans: '"Switzer", -apple-system, sans-serif',
        dataFont: "fraunces",
      },
      "anca-switzer": {
        serif: '"anca", Georgia, serif',
        sans: '"Switzer", -apple-system, sans-serif',
        dataFont: "anca",
      },
      "instrument-geist": {
        serif: '"Instrument Serif", Georgia, serif',
        sans: '"Geist", -apple-system, sans-serif',
        dataFont: "instrument",
      },
      "newsreader-dmsans": {
        serif: '"Newsreader", Georgia, serif',
        sans: '"DM Sans", -apple-system, sans-serif',
        dataFont: "newsreader",
      },
      "playfair-manrope": {
        serif: '"Playfair Display", Georgia, serif',
        sans: '"Manrope", -apple-system, sans-serif',
        dataFont: "playfair",
      },
    };
    const p = pairs[t.fontPair] || pairs["patrick-quicksand"];
    root.style.setProperty("--serif", p.serif);
    root.style.setProperty("--sans", p.sans);
    root.dataset.font = p.dataFont;
  }, [t]);

  // Pass tweak state out via custom event
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("__tweaks", { detail: t }));
  }, [t.showTicker, t.heroVariant, t.projectsVariant, t.collage, t.cursor]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette">
        <TweakRadio
          label="Direction"
          value={t.palette}
          onChange={(v) => { setTweak("palette", v); setTweak("accent", PALETTES[v]["--accent"]); }}
          options={["peach", "refined", "reverse", "sage"]}
        />
      </TweakSection>
      <TweakSection label="Color">
        <TweakColor
          label="Accent (overrides palette)"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={["#387495", "#2e5d7a", "#3d6b54", "#1f2b3a", "#c0563b"]}
        />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)} />
      </TweakSection>
      <TweakSection label="Type">
        <TweakRadio
          label="Font pair"
          value={t.fontPair}
          onChange={(v) => setTweak("fontPair", v)}
          options={["patrick-quicksand", "fraunces-wonk", "anca-switzer", "instrument-geist", "newsreader-dmsans"]}
        />
      </TweakSection>
      <TweakSection label="Hero">
        <TweakRadio
          label="Layout"
          value={t.heroVariant}
          onChange={(v) => setTweak("heroVariant", v)}
          options={["split", "centered", "splash"]}
        />
        <TweakToggle label="Collage scraps" value={t.collage} onChange={(v) => setTweak("collage", v)} />
      </TweakSection>
      <TweakSection label="Projects">
        <TweakRadio
          label="Layout"
          value={t.projectsVariant}
          onChange={(v) => setTweak("projectsVariant", v)}
          options={["alt", "bigimg", "indexed"]}
        />
      </TweakSection>
      <TweakSection label="Extras">
        <TweakToggle label="Cursor follower" value={t.cursor} onChange={(v) => setTweak("cursor", v)} />
        <TweakToggle label="Marquee ticker" value={t.showTicker} onChange={(v) => setTweak("showTicker", v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

window.PortfolioCore = { Placeholder, Nav, ToTop, Ticker, Footer, TweaksUI, Cursor };
