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
    { id: "about", label: "About Me" },
    { id: "resume", label: "Resume" },
  ];
  return (
    <>
      <div className="site-id" onClick={() => setRoute("home")} data-cursor="home">
        Kimberly<em>.</em>
      </div>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-links">
            {items.map((it) => (
              <button
                key={it.id}
                className={`nav-link ${route === it.id ? "is-active" : ""} ${it.id === "resume" ? "is-resume" : ""}`}
                onClick={() => setRoute(it.id)}
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
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
            Have a project<br/>in mind? <em>Let's chat.</em>
          </h2>
          <div>
            <p className="foot-text">
              I'm taking on a small number of engagements for late 2026. The best way to reach me is email — I usually reply within a day.
            </p>
            <div className="foot-actions">
              <a href="#" className="btn solid" onClick={(e) => { e.preventDefault(); setRoute("resume"); }}>Resume <span className="arrow">↗</span></a>
              <a href="#" className="btn ghost" onClick={(e) => { e.preventDefault(); setRoute("about"); }}>About me</a>
              <a href="#" className="btn ghost" onClick={(e) => e.preventDefault()}>LinkedIn</a>
              <a href="mailto:hello@kimberly.studio" className="btn ghost">Email me</a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Kimberly Chen</span>
          <span>Last updated · May 2026</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Tweaks ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#387495",
  "fontPair": "anca-switzer",
  "dark": false,
  "showTicker": true,
  "heroVariant": "split",
  "projectsVariant": "alt",
  "collage": true,
  "cursor": true
}/*EDITMODE-END*/;

function TweaksUI() {
  const { TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio, TweakToggle } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = t.dark ? "dark" : "light";
    // accent: convert to oklch-ish via CSS var override directly
    root.style.setProperty("--accent", t.accent);
    const pairs = {
      "anca-switzer": {
        serif: '"anca", Georgia, serif',
        sans: '"Switzer", -apple-system, sans-serif',
      },
      "instrument-geist": {
        serif: '"Fraunces", "Instrument Serif", Georgia, serif',
        sans: '"Geist", -apple-system, sans-serif',
      },
      "newsreader-dmsans": {
        serif: '"Newsreader", Georgia, serif',
        sans: '"DM Sans", -apple-system, sans-serif',
      },
      "playfair-manrope": {
        serif: '"Playfair Display", Georgia, serif',
        sans: '"Manrope", -apple-system, sans-serif',
      },
    };
    const p = pairs[t.fontPair] || pairs["anca-switzer"];
    root.style.setProperty("--serif", p.serif);
    root.style.setProperty("--sans", p.sans);
  }, [t]);

  // Pass tweak state out via custom event
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("__tweaks", { detail: t }));
  }, [t.showTicker, t.heroVariant, t.projectsVariant, t.collage, t.cursor]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Color">
        <TweakColor
          label="Accent (waiting on your palette)"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={["#387495", "#abc1f7", "#1f2b3a", "#c0563b", "#3b6b5f"]}
        />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)} />
      </TweakSection>
      <TweakSection label="Type">
        <TweakRadio
          label="Font pair"
          value={t.fontPair}
          onChange={(v) => setTweak("fontPair", v)}
          options={["instrument-geist", "newsreader-dmsans", "playfair-manrope"]}
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
