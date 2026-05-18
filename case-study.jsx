/* global React, PortfolioCore */
const { Placeholder: _PH } = window.PortfolioCore;

/* Tiny inline icons */
const I = {
  empathize: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="6.5" r="2.4"/><path d="M15 14.2c.6-.2 1.3-.3 2-.3 2.8 0 5 2 5 4.6"/></svg>,
  define:    (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"/></svg>,
  ideate:    (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2L9.5 17h5l.1-1.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z"/><path d="M12 8v4M10.5 10h3"/></svg>,
  design:    (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/><path d="M3 14l3-3"/><path d="M10 21l3-3"/></svg>,
  test:      (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9z" fill="currentColor" stroke="none" opacity=".18"/><path d="M9 4h6v3H9z"/><path d="M9 13l2 2 4-4"/></svg>,
  warning:   (p) => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18.5v.1"/></svg>,
  pencil:    (p) => <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 4l6 6-11 11H3v-6z"/></svg>,
  bulb:      (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 18h6M10 22h4"/><path d="M12 2a6 6 0 00-4 10c1 1 1.5 2 1.5 3h5c0-1 .5-2 1.5-3a6 6 0 00-4-10z"/></svg>,
  play:      (p) => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M8 5v14l11-7z"/></svg>,
};

/* Mock screens */
function MockShuttleHome() {
  return (
    <>
      <div className="mock-status"><span>9:41</span><span>●●●</span></div>
      <div className="mock-header">
        <div className="h1">Shuttles</div>
        <div className="badge">Live</div>
      </div>
      <div className="mock-search">⌕  Search route or stop</div>
      <div className="mock-routes">
        <div className="mock-route"><div className="rt-tag">M</div><div className="rt-info"><div className="name">Mercado · Tempe ↔ DT</div><div className="meta">Stop: Hayden Ferry</div></div><div className="eta"><div className="min">3 min</div><div className="conf">±1</div></div></div>
        <div className="mock-route gold"><div className="rt-tag">G</div><div className="rt-info"><div className="name">Gold · Tempe ↔ West</div><div className="meta">Stop: Tyler Mall</div></div><div className="eta"><div className="min">8 min</div><div className="conf">±2</div></div></div>
        <div className="mock-route"><div className="rt-tag">P</div><div className="rt-info"><div className="name">Polytechnic Express</div><div className="meta">Stop: PE Loop</div></div><div className="eta"><div className="min">14 min</div><div className="conf">±3</div></div></div>
      </div>
      <div className="mock-map">
        <div className="pin pin-1"></div>
        <div className="pin pin-2"></div>
        <div className="pin pin-3"></div>
      </div>
    </>
  );
}

function MockShuttleBefore() {
  return (
    <>
      <div className="mock-status"><span>9:41</span><span>●●●</span></div>
      <div className="mock-before-header">
        <div className="mock-before-title">ASU Shuttles</div>
        <div className="mock-before-divider"/>
        <div className="mock-before-text">Tempe → Downtown</div>
        <div className="mock-before-text">ETA: 6:00 PM</div>
      </div>
      <div className="mock-before-map">
        <div className="mock-dot"/>
        <div className="mock-dot"/>
        <div className="mock-dot"/>
      </div>
    </>
  );
}

/* SUS Section */
function SUSSection() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <div className="fst-eyebrow" style={{marginTop:"56px"}}>Usability testing · Method 03</div>
      <div className="sus-title-row">
        <h3 className="fst-heading" style={{margin:0}}>System Usability Scale</h3>
        <button type="button" className="sus-info-btn" onClick={() => setOpen(true)} aria-label="How was SUS calculated?">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7"/><circle cx="12" cy="17" r=".6" fill="currentColor"/></svg>
          <span className="sus-info-tip">How was this calculated?</span>
        </button>
      </div>
      <p className="case-body" style={{marginBottom:"32px"}}>Each participant rated the redesign on the standard 10-item SUS questionnaire after completing their tasks.</p>

      <div className="sus-cards">
        {[{n:"Participant 1", score:"85", alt:false},{n:"Participant 2", score:"82.5", alt:true}].map(({n,score,alt})=>(
          <div key={n} className={`sus-p-card${alt?" alt":""}`}>
            <div className="sus-p-tag">{n}</div>
            <div className="sus-p-score">{score}<span className="sus-of">/100</span></div>
            <div className="sus-p-rating">Excellent</div>
          </div>
        ))}
      </div>

      <div className="sus-summary">
        <div className="sus-sum-block avg">
          <div className="sus-sum-label">Average score</div>
          <div className="sus-sum-value">83.75</div>
          <div className="sus-sum-sub">Grade A · Excellent</div>
        </div>
        <div className="sus-sum-vs">vs</div>
        <div className="sus-sum-block bench">
          <div className="sus-sum-label">Industry benchmark</div>
          <div className="sus-sum-value">68</div>
          <div className="sus-sum-sub">Average system</div>
        </div>
        <div className="sus-scale">
          <div className="sus-scale-track">
            <div className="sus-scale-fill"></div>
            <div className="sus-scale-marker" style={{left:"68%"}}></div>
            <div className="sus-scale-dot" style={{left:"83.75%"}}></div>
          </div>
          <div className="sus-scale-ends"><span>0</span><span>100</span></div>
        </div>
      </div>

      {open && (
        <div className="sus-modal-overlay" onClick={(e)=>{ if(e.target===e.currentTarget) setOpen(false); }}>
          <div className="sus-modal">
            <button className="sus-modal-close" onClick={()=>setOpen(false)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
            <div className="sus-modal-body">
              <div className="sus-modal-eyebrow">Method note</div>
              <h2>How SUS was calculated</h2>
              <div className="sus-modal-section">
                <h3>10 questions · 5-point Likert scale</h3>
                <div className="sus-likert">
                  {[["1","Strongly Disagree"],["2","Disagree"],["3","Neutral"],["4","Agree"],["5","Strongly Agree"]].map(([n,l])=>(
                    <div key={n} className="sus-likert-item"><div className="sus-likert-num">{n}</div><div className="sus-likert-label">{l}</div></div>
                  ))}
                </div>
              </div>
              <div className="sus-modal-section">
                <h3>Scoring formula</h3>
                <div className="sus-formula">
                  <div className="sus-formula-row"><span className="sus-formula-tag">X</span><div className="sus-formula-body"><span className="sus-fl">Positive items (1,3,5,7,9):</span><code>Score = Response − 1</code></div></div>
                  <div className="sus-formula-row"><span className="sus-formula-tag">Y</span><div className="sus-formula-body"><span className="sus-fl">Negative items (2,4,6,8,10):</span><code>Score = 25 − Response</code></div></div>
                  <div className="sus-formula-row total"><span className="sus-formula-tag tot">Σ</span><div className="sus-formula-body"><span className="sus-fl">Total score:</span><code>(X + Y) × 2.5</code> → range 0–100</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Reused section header */
function CaseH2({ icon, label }) {
  const Ic = I[icon] || I.bulb;
  return (
    <div className="case-h2">
      <span className="icon"><Ic/></span>
      <h2>{label}</h2>
      <span className="rule"></span>
    </div>
  );
}

/* MAIN */
function ShuttleCaseStudy({ setRoute }) {
  return (
    <main className="page case" data-screen-label="Project · ASU Shuttle Tracker">

      {/* COVER */}
      <section className="case-cover">
        <h1>ASU Shuttle Tracking Website Redesign</h1>
      </section>

      {/* OVERVIEW */}
      <section className="container case-section case-section--first">
        <div className="case-overview">
          <div>
            <h3>Overview</h3>
            <p>
              ASU's intercampus shuttles move thousands of students between four campuses every day. For cross-campus commuters, even small delays or unclear info can mean missed classes, late arrivals, and a lot of unnecessary stress.
            </p>
            <p>This redesign focuses on three goals:</p>
            <ul>
              <li>Solving user pain points in <span className="em">time-sensitive moments</span></li>
              <li>Optimizing <span className="em">map interactions</span> on mobile</li>
              <li>Surfacing <span className="em">real-time information</span> clearly</li>
            </ul>
          </div>
          <div className="overview-img">
            <img src="assets/asu-bus.jpeg" alt="ASU Gold intercampus shuttle bus" />
          </div>
        </div>


        {/* Design Flow */}
        <div className="df-wrap">
          <h3 className="df-heading">Design Flow</h3>
          <div className="df-flow">
            {[
              { id:"sec-empathize", num:"01", label:"Empathize", items:["Heuristic markup","User interviews","Usability survey"],
                svg:<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="6.5" r="2.4"/><path d="M15 14.2c.6-.2 1.3-.3 2-.3 2.8 0 5 2 5 4.6"/></svg> },
              { id:"sec-define",    num:"02", label:"Define",    items:["Personas","User journey map"],
                svg:<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"/></svg> },
              { id:"sec-ideate",   num:"03", label:"Ideate",    items:["Design approach"],
                svg:<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2L9.5 17h5l.1-1.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z"/><path d="M12 8v4M10.5 10h3"/></svg> },
              { id:"sec-design",   num:"04", label:"Design",    items:["IA restructure","Hi-Fi prototype"],
                svg:<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/><path d="M3 14l3-3"/><path d="M10 21l3-3"/></svg> },
              { id:"sec-test",     num:"05", label:"Test",      items:["5-sec test","Usability test","SUS · Time on task"],
                svg:<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9z" fill="currentColor" stroke="none" opacity=".18"/><path d="M9 4h6v3H9z"/><path d="M9 13l2 2 4-4"/></svg> },
            ].map((s) => (
              <div key={s.id} className="df-step" role="button" tabIndex={0}
                onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior:"smooth", block:"start" })}
                onKeyDown={(e) => e.key==="Enter" && document.getElementById(s.id)?.scrollIntoView({ behavior:"smooth", block:"start" })}>
                <div className="df-icon" aria-hidden="true">{s.svg}</div>
                <div className="df-title"><span className="df-prefix">{s.num}.</span>{s.label}</div>
                <ul className="df-list">{s.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="df-phases">
            <div className="df-phase-tag">Discover</div>
            <div className="df-phase-tag">Frame</div>
            <div className="df-phase-tag">Explore</div>
            <div className="df-phase-tag">Build</div>
            <div className="df-phase-tag">Validate</div>
          </div>
        </div>
      </section>

      {/* EMPATHIZE */}
      <section id="sec-empathize" className="container case-section">
        <CaseH2 icon="empathize" label="Empathize"/>
        <p className="case-body">
          As a shuttle commuter myself, I've felt the frustration of staring at a cluttered map while running late to class. I started with a heuristic markup based on Nielsen's 10 heuristics, which surfaced four core violations: visibility of system status, user control and freedom, match between system and real world, and aesthetic and minimalist design.
        </p>
        <img src="assets/heuristic-markup.png" alt="Heuristic markup of ASU Shuttle app" className="case-full-img" />

        <div className="case-intro">
          <h3 className="case-h3">User Interview & Survey</h3>
          <p className="case-body">
            To go beyond what the interface told me, I ran in-person, recorded interviews with fellow student commuters who used the Rider Portal regularly, along with a usability survey to understand broader usage patterns.<br/><br/>Three insights stood out:
          </p>
        </div>

        <div className="insight-card-grid">
          <article className="insight-card v-1">
            <div className="ic-head">
              <div className="ic-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                </svg>
              </div>
              <span className="ic-num">Insight 01</span>
            </div>
            <div className="ic-body">
              <h4>Real-time anxiety</h4>
              <p>Static schedules aren't enough. Riders need live tracking they can trust so they can leave at the right moment instead of guessing — and worrying.</p>
            </div>
            <div className="ic-divider"/>
            <div className="ic-quote">
              <div className="ic-quote-mark">"</div>
              <p className="ic-quote-text">The map doesn't exactly track the bus movement.</p>
              <div className="ic-quote-attr">Survey respondent</div>
            </div>
          </article>

          <article className="insight-card v-2">
            <div className="ic-head">
              <div className="ic-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>
                </svg>
              </div>
              <span className="ic-num">Insight 02</span>
            </div>
            <div className="ic-body">
              <h4>Wayfinding struggles</h4>
              <p>The map shows where the bus is, but doesn't help users find the right stop. Riders want the system to recommend the nearest stop from their current location.</p>
            </div>
            <div className="ic-divider"/>
            <div className="ic-quote">
              <div className="ic-quote-mark">"</div>
              <p className="ic-quote-text">I couldn't find the nearest bus stop. I wish it could just recommend one based on where I am.</p>
              <div className="ic-quote-attr">Interview participant</div>
            </div>
          </article>

          <article className="insight-card v-3">
            <div className="ic-head">
              <div className="ic-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>
                </svg>
              </div>
              <span className="ic-num">Insight 03</span>
            </div>
            <div className="ic-body">
              <h4>Access efficiency</h4>
              <p>Reloading a website every trip is frustrating for frequent riders. They want one-tap access — a destination that opens fast and remembers their context.</p>
            </div>
            <div className="ic-divider"/>
            <div className="ic-quote">
              <div className="ic-quote-mark">"</div>
              <p className="ic-quote-text">I prefer mobile app — I can open it intuitively without reloading the website.</p>
              <div className="ic-quote-attr">Survey respondent</div>
            </div>
          </article>
        </div>
      </section>

      {/* DEFINE */}
      <section id="sec-define" className="container case-section">
        <CaseH2 icon="define" label="Define"/>

        <p className="case-body" style={{marginBottom:"32px"}}>Interview findings became two personas: Sammy, a Polytechnic undergrad who lives in Tempe and commutes twice a week, and Foster, a Tempe grad student new to other campuses.</p>

        <div className="persona-eyebrow">
          <span className="persona-dot"></span>
          Research · Persona 01
        </div>

        <div className="persona-card">
          <div className="persona-grid">

            <div className="persona-identity">
              <div className="persona-avatar"><img src="assets/persona-sammy.png" alt="Sammy"/></div>
              <div>
                <div className="persona-name">Sammy</div>
                <div className="persona-meta">
                  <span>23</span><span className="persona-sep"></span><span>Tempe</span>
                </div>
              </div>
            </div>

            <div className="persona-content">
              <div>
                <div className="persona-section-label">In her words <span className="persona-line"></span></div>
                <blockquote className="persona-quote">
                  If I don't keep refresh the time, I feel anxious while I am waiting for the shuttle.
                </blockquote>
              </div>
              <div>
                <div className="persona-section-label">Pain &amp; expectation <span className="persona-line"></span></div>
                <div className="persona-insights">
                  <div className="persona-insight pain">
                    <div className="persona-insight-icon">
                      <svg viewBox="0 0 20.825 20" fill="currentColor" width="22" height="22">
                        <path d="M 0 8.1 C 0.433 5.767 1.563 3.833 3.388 2.3 C 5.213 0.767 7.358 0 9.825 0 C 11.058 0 12.221 0.2 13.313 0.6 C 14.404 1 15.383 1.567 16.25 2.3 C 16.017 2.733 15.829 3.104 15.688 3.413 C 15.546 3.721 15.45 4.008 15.4 4.275 C 14.667 3.575 13.825 3.021 12.875 2.612 C 11.925 2.204 10.908 2 9.825 2 C 8.142 2 6.633 2.471 5.3 3.413 C 3.967 4.354 3 5.558 2.4 7.025 C 1.95 7.008 1.513 7.092 1.087 7.275 C 0.662 7.458 0.3 7.733 0 8.1 Z M 9.825 20 C 7.358 20 5.213 19.233 3.388 17.7 C 1.563 16.167 0.433 14.233 0 11.9 C 0.283 12.267 0.637 12.546 1.063 12.738 C 1.487 12.929 1.933 13.017 2.4 13 C 3 14.467 3.967 15.667 5.3 16.6 C 6.633 17.533 8.142 18 9.825 18 C 12.042 18 13.929 17.221 15.488 15.663 C 17.046 14.104 17.825 12.217 17.825 10 C 17.825 9.717 17.813 9.433 17.788 9.15 C 17.763 8.867 17.717 8.583 17.65 8.3 C 17.833 8.367 18.021 8.417 18.212 8.45 C 18.404 8.483 18.608 8.5 18.825 8.5 C 18.975 8.5 19.125 8.492 19.275 8.475 C 19.425 8.458 19.567 8.433 19.7 8.4 C 19.733 8.667 19.763 8.929 19.788 9.188 C 19.813 9.446 19.825 9.717 19.825 10 C 19.825 11.383 19.563 12.683 19.038 13.9 C 18.513 15.117 17.8 16.175 16.9 17.075 C 16 17.975 14.942 18.688 13.725 19.212 C 12.508 19.737 11.208 20 9.825 20 Z M 6.225 9.6 L 8.325 7.5 L 6.2 5.375 L 5.15 6.425 L 6.225 7.475 L 5.15 8.55 L 6.225 9.6 Z M 17.413 6.412 C 17.021 6.021 16.825 5.55 16.825 5 C 16.825 4.55 16.95 4.071 17.2 3.563 C 17.45 3.054 17.992 2.2 18.825 1 C 19.658 2.2 20.2 3.054 20.45 3.563 C 20.7 4.071 20.825 4.55 20.825 5 C 20.825 5.55 20.629 6.021 20.238 6.412 C 19.846 6.804 19.375 7 18.825 7 C 18.275 7 17.804 6.804 17.413 6.412 Z M 13.45 9.625 L 14.525 8.55 L 13.45 7.475 L 14.5 6.425 L 13.45 5.375 L 11.325 7.5 L 13.45 9.625 Z M 9.825 11.5 C 9.392 11.5 8.971 11.55 8.563 11.65 C 8.154 11.75 7.767 11.892 7.4 12.075 L 3.825 10 C 3.825 9.733 3.758 9.483 3.625 9.25 C 3.492 9.017 3.308 8.833 3.075 8.7 C 2.708 8.5 2.329 8.454 1.938 8.563 C 1.546 8.671 1.242 8.9 1.025 9.25 C 0.825 9.617 0.779 9.996 0.887 10.387 C 0.996 10.779 1.225 11.083 1.575 11.3 C 1.808 11.433 2.058 11.5 2.325 11.5 C 2.592 11.5 2.842 11.433 3.075 11.3 L 6.05 13.025 C 5.767 13.308 5.512 13.613 5.287 13.938 C 5.063 14.262 4.875 14.617 4.725 15 L 6.375 15 C 6.725 14.4 7.2 13.917 7.8 13.55 C 8.4 13.183 9.075 13 9.825 13 C 10.575 13 11.25 13.183 11.85 13.55 C 12.45 13.917 12.925 14.4 13.275 15 L 14.925 15 C 14.525 13.967 13.871 13.125 12.963 12.475 C 12.054 11.825 11.008 11.5 9.825 11.5 Z"/>
                      </svg>
                    </div>
                    <div className="persona-insight-body">
                      <div className="persona-insight-kind">Pain point</div>
                      <div className="persona-insight-text">I can't intuitively scroll the map to check the bus.</div>
                    </div>
                  </div>
                  <div className="persona-insight want">
                    <div className="persona-insight-icon">
                      <svg viewBox="0 0 20 20.5" fill="currentColor" width="22" height="22">
                        <path d="M 13.5 14.5 L 13.5 11.775 L 12.375 9.75 C 12.258 9.833 12.167 9.942 12.1 10.075 C 12.033 10.208 12 10.35 12 10.5 L 12 16.225 L 14.575 20.5 L 12.25 20.5 L 10 16.8 L 10 10.5 C 10 9.983 10.125 9.508 10.375 9.075 C 10.625 8.642 10.967 8.283 11.4 8 L 10 5.525 C 9.667 4.892 9.521 4.221 9.563 3.513 C 9.604 2.804 9.875 2.2 10.375 1.7 L 12.075 0 L 18.975 8.1 L 20 20.5 L 18 20.5 L 17.025 8.9 L 11.95 2.95 L 11.8 3.1 C 11.633 3.267 11.537 3.458 11.512 3.675 C 11.488 3.892 11.525 4.1 11.625 4.3 L 15.5 11.25 L 15.5 14.5 L 13.5 14.5 Z M 4.5 14.5 L 4.5 11.25 L 8.375 4.3 C 8.475 4.1 8.512 3.892 8.488 3.675 C 8.463 3.458 8.367 3.267 8.2 3.1 L 8.05 2.95 L 2.975 8.9 L 2 20.5 L 0 20.5 L 1.025 8.1 L 7.925 0 L 9.625 1.7 C 10.125 2.2 10.396 2.804 10.438 3.513 C 10.479 4.221 10.333 4.892 10 5.525 L 8.6 8 C 9.033 8.283 9.375 8.642 9.625 9.075 C 9.875 9.508 10 9.983 10 10.5 L 10 16.8 L 7.75 20.5 L 5.425 20.5 L 8 16.225 L 8 10.5 C 8 10.35 7.967 10.208 7.9 10.075 C 7.833 9.942 7.742 9.833 7.625 9.75 L 6.5 11.775 L 6.5 14.5 L 4.5 14.5 Z"/>
                      </svg>
                    </div>
                    <div className="persona-insight-body">
                      <div className="persona-insight-kind">Expectation</div>
                      <div className="persona-insight-text">Knowing when the shuttle arrives helps me plan which light rail to catch.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="persona-eyebrow" style={{marginTop:"32px"}}>
          <span className="persona-dot"></span>
          Research · Persona 02
        </div>

        <div className="persona-card">
          <div className="persona-grid">

            <div className="persona-identity">
              <div className="persona-avatar"><img src="assets/persona-foster.png" alt="Foster"/></div>
              <div>
                <div className="persona-name">Foster</div>
                <div className="persona-meta">
                  <span>27</span><span className="persona-sep"></span><span>Tempe</span><span className="persona-sep"></span><span>Grad</span>
                </div>
              </div>
            </div>

            <div className="persona-content">
              <div>
                <div className="persona-section-label">In his words <span className="persona-line"></span></div>
                <blockquote className="persona-quote">
                  I'm not familiar with the campus — I always can't find how to get to the shuttle stop.
                </blockquote>
              </div>
              <div>
                <div className="persona-section-label">Pain &amp; expectation <span className="persona-line"></span></div>
                <div className="persona-insights">
                  <div className="persona-insight pain">
                    <div className="persona-insight-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm-1.41 9L8 8.41 9.41 7 12 9.59 14.59 7 16 8.41 13.41 11 16 13.59 14.59 15 12 12.41 9.41 15 8 13.59 10.59 11z"/>
                      </svg>
                    </div>
                    <div className="persona-insight-body">
                      <div className="persona-insight-kind">Pain point</div>
                      <div className="persona-insight-text">Can't find the shuttle stop location.</div>
                    </div>
                  </div>
                  <div className="persona-insight want">
                    <div className="persona-insight-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                      </svg>
                    </div>
                    <div className="persona-insight-body">
                      <div className="persona-insight-kind">Expectation</div>
                      <div className="persona-insight-text">Display my location on the map.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <p className="case-body" style={{marginTop:"32px"}}>I mapped Sammy's journey across five phases — from preparing to leave, to opening the portal, to walking to the stop — and identified a clear emotional dip during the "deciding when to leave" stage, where obstructed arrival times made it hard to act.</p>

        <div className="ujm-scroll">
          <div className="ujm-map">
            <div className="ujm-stages">
              {[["01","Preparing to Leave for Class"],["02","Opening the Shuttle Rider Portal"],["03","Checking Shuttle Location"],["04","Deciding When to Leave for the Stop"],["05","Walking to the Stop & Waiting"]].map(([n,t])=>(
                <div key={n} className="ujm-stage">
                  <div className="ujm-stage-num">{n}</div>
                  <div className="ujm-stage-title">{t}</div>
                </div>
              ))}
            </div>
            <div className="ujm-curve-area">
              <div className="ujm-emo-grid">
                <div className="ujm-ec ujm-neutral"/><div className="ujm-ec ujm-happy"/><div className="ujm-ec ujm-sad"/><div className="ujm-ec ujm-angry"/><div className="ujm-ec ujm-sad"/>
              </div>
              <svg className="ujm-curve-svg" viewBox="0 0 1000 260" preserveAspectRatio="none">
                <path d="M 100 140 C 180 100,240 60,300 70 C 380 90,420 150,500 160 C 580 170,620 220,700 220 C 780 220,820 180,900 170" fill="none" stroke="#8C1D40" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <div className="ujm-emo ujm-neutral" style={{left:"10%",top:"54%"}}>😐</div>
              <div className="ujm-emo ujm-happy"   style={{left:"30%",top:"27%"}}>🙂</div>
              <div className="ujm-emo ujm-sad"     style={{left:"50%",top:"62%"}}>☹️</div>
              <div className="ujm-emo ujm-angry"   style={{left:"70%",top:"85%"}}>😡</div>
              <div className="ujm-emo ujm-sad"     style={{left:"90%",top:"65%"}}>☹️</div>
            </div>
            <div className="ujm-captions">
              {["Needs a quick overview to know if it's time to go.","Real-time map view delivers a satisfying first impression.","Map gestures fail; icons block the stops.","Arrival times obstructed — can't tell when to leave.","No guidance from her location to the stop."].map((c,i)=>(
                <div key={i} className="ujm-caption">{c}</div>
              ))}
            </div>
            <div className="ujm-callout-wrap">
              <div className="ujm-callout">
                <span className="ujm-callout-label">↑ Critical emotional dip</span>
                <em>Arrival times obstructed, she can't decide when to leave.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDEATE */}
      <section id="sec-ideate" className="container case-section">
        <CaseH2 icon="ideate" label="Ideate"/>

        <h3 className="case-h3--mb18">Design Approach</h3>
        <p className="case-body" style={{marginBottom:"32px"}}>Based on the research, I grouped solutions into four strategies that directly address the core pain points:</p>
        <div className="approach-grid">
          <div className="approach-item">
            <div className="approach-num">1</div>
            <div>
              <h4 className="approach-title">Declutter the Map</h4>
              <ul className="approach-list">
                <li>Removed default-open Map Features panel</li>
                <li>Replaced directional buttons with native drag &amp; zoom</li>
                <li>Decluttered overlapping icons</li>
              </ul>
            </div>
          </div>
          <div className="approach-item">
            <div className="approach-num">2</div>
            <div>
              <h4 className="approach-title">Surface Real-Time Info</h4>
              <ul className="approach-list">
                <li>Prominent countdown timers</li>
                <li>Color-coded route cards by campus</li>
                <li>Nearest stop highlighted on the home screen</li>
                <li>Stop Detail bottom sheet for quick access</li>
              </ul>
            </div>
          </div>
          <div className="approach-item">
            <div className="approach-num">3</div>
            <div>
              <h4 className="approach-title">Solve Wayfinding</h4>
              <ul className="approach-list">
                <li>"My Location → Stop" navigation</li>
                <li>Stops dropdown with auto-focusing pins</li>
                <li>Campus markers on the map, color-coded to match route cards</li>
              </ul>
            </div>
          </div>
          <div className="approach-item">
            <div className="approach-num">4</div>
            <div>
              <h4 className="approach-title">Separate Intent</h4>
              <ul className="approach-list">
                <li>Route tab — linear list for quick checks</li>
                <li>Map tab — spatial view for unfamiliar users</li>
                <li>Side menu for secondary features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section id="sec-design" className="container case-section">
        <CaseH2 icon="design" label="Design"/>

        <h3 className="case-h3--mb18">Information Architecture</h3>
        <div className="ia-scroll">
          <div className="ia-wrap">
            <ul className="ia-tree">
              <li>
                <div className="ia-node-root">
                  <div className="ia-root-mark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 11h16M7 17v2M17 17v2"/></svg>
                  </div>
                  <div className="ia-root-name">Shuttle Tracker</div>
                </div>
                <ul>
                  {[
                    {num:"01", name:"Home",       leaves:["Service alert banner","Nearest stop hero","Quick actions","Saved routes"]},
                    {num:"02", name:"Live Map",   leaves:["Map canvas","Stop pins","Map controls","Stop detail sheet"]},
                    {num:"03", name:"All Routes", leaves:["Search","Campus filter","Route list"], detail:"Route Detail"},
                    {num:"04", name:"Schedule",   leaves:["Stop selector","Schedule grid"]},
                    {num:"05", name:"Alerts",     leaves:["Active alerts","Recent (resolved)"]},
                  ].map(({num, name, leaves, detail}) => (
                    <li key={num}>
                      <div className="ia-node-page">
                        <div className="ia-node-page-num">{num}</div>
                        <div className="ia-node-page-name">{name}</div>
                      </div>
                      <ul>
                        {leaves.map(l => <li key={l}><div className="ia-node-leaf">{l}</div></li>)}
                        {detail && <li><div className="ia-node-leaf ia-detail">{detail}</div></li>}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="case-h3--mb18">Prototype</h3>
        <div className="proto-frame">
          <a href="https://peichunisdesigning.github.io/Shuttle-Tracking-Website-Redesign/" target="_blank" rel="noopener noreferrer" className="proto-link-btn">View Interactive Prototype →</a>
        </div>
      </section>

      {/* TEST */}
      <section id="sec-test" className="container case-section">
        <CaseH2 icon="test" label="Test"/>
        <p className="case-body">To validate the redesign, I combined qualitative and quantitative research — running two complementary tests with two supporting metrics. The Five-Second Test captured first impressions, the Usability Test evaluated real interactions, while Time on Task and SUS provided performance and attitudinal benchmarks.</p>

        <div className="fst-eyebrow">Usability testing · Method 01</div>
        <h3 className="fst-heading">Five-Second Test</h3>

        <div className="fst-table">
          <div className="fst-col-head">What I Tested</div>
          <div className="fst-col-head fst-spacer"></div>
          <div className="fst-col-head">Findings</div>

          <div className="fst-tested">
            <div className="fst-label">First-impression clarity</div>
            <div className="fst-phone-wrap">
              <div className="fst-phone-frame">
                <div className="fst-timer-pill">00:05</div>
                <div className="fst-phone-screen">
                  <img src="assets/home-screen.png" alt="Redesigned shuttle tracker home screen" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}}/>
                </div>
              </div>
            </div>
            <div className="fst-questions">
              <div className="fst-questions-label">Questions asked</div>
              {["What did you notice first?","What would you do next?","What do you think this interface is for?"].map((q, i) => (
                <div key={i} className="fst-q-item">
                  <span className="fst-q-num">{i + 1}</span>
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className="fst-arrow">→</div>

          <div className="fst-findings">
            {["Users recognized the purpose","Visual hierarchy worked","Users knew what to do next","Perceived as cleaner"].map(f => (
              <div key={f} className="fst-finding">
                <span className="fst-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12 10 18 20 6"/></svg>
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="fst-eyebrow" style={{marginTop:"56px"}}>Usability testing · Method 02</div>
        <h3 className="fst-heading">Usability Test</h3>

        <div className="ut-table">
          <div className="fst-col-head">What I Tested</div>
          <div className="fst-col-head fst-spacer"></div>
          <div className="fst-col-head">Findings</div>

          <div className="ut-tested">
            <div className="fst-label">Time on task</div>
            <div className="ut-tot-block">
              <div className="ut-tot-title">Time on Task</div>
              {[
                {name:"Task 1 · Check arrival time",   time:"0 – 5s",   fill:"10%",  speed:"fast",   tag:"Instant",         tagIcon:<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>},
                {name:"Task 2 · Find Lot 37 on map",   time:"8 – 15s",  fill:"30%",  speed:"medium", tag:"Fast",            tagIcon:<polyline points="4 12 10 18 20 6"/>},
                {name:"Task 3 · Navigate to light rail",time:"6 – 20s", fill:"40%",  speed:"slow",   tag:"Some hesitation", tagIcon:<><path d="M12 2 2 21h20z"/><path d="M12 10v5M12 18h.01"/></>},
              ].map(({name, time, fill, speed, tag, tagIcon}) => (
                <div key={name} className="ut-tot-row">
                  <div className="ut-tot-task">
                    <div className="ut-tot-name">{name}</div>
                    <div className="ut-tot-time">{time}</div>
                  </div>
                  <div className="ut-tot-bar-wrap">
                    <div className="ut-tot-bar"><div className={`ut-tot-fill ${speed}`} style={{width:fill}}></div></div>
                    <span className={`ut-tot-tag ${speed}`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill={speed==="fast"?"currentColor":"none"} stroke={speed==="fast"?"none":"currentColor"} strokeWidth={speed==="slow"?"2.6":"3.5"} strokeLinecap="round" strokeLinejoin="round">{tagIcon}</svg>
                      {tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fst-arrow">→</div>

          <div className="fst-findings">
            {[
              {type:"ok",   text:"100% task completion"},
              {type:"ok",   text:"Arrival times identified instantly"},
              {type:"ok",   text:"Map + Stops dropdown was highly intuitive"},
              {type:"warn", text:"Icon-only buttons caused brief hesitation"},
            ].map(({type, text}) => (
              <div key={text} className="fst-finding">
                <span className={`ut-mark ${type}`}>
                  {type === "ok"
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12 10 18 20 6"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 21h20z"/><path d="M12 10v5M12 18h.01"/></svg>
                  }
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        <SUSSection/>
      </section>

      {/* TAKEAWAYS */}
      <section className="container case-section">
        <CaseH2 icon="bulb" label="What I Learned"/>
        <p className="tk-intro">What the redesign taught us about user intent, real-time information, and the limits of minimalism — distilled into principles for the next iteration.</p>
        <div className="takeaway-grid">
          <article className="takeaway-card v-1">
            <div className="card-head">
              <div className="icon-bubble" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
              </div>
              <span className="card-num">Takeaway 01</span>
            </div>
            <div className="card-body">
              <h2>Separate intent, not just content</h2>
              <p>Route and Map tabs gave each user type their own space, instead of forcing one view to serve everyone.</p>
            </div>
            <div className="card-tag">Information architecture</div>
          </article>

          <article className="takeaway-card v-2">
            <div className="card-head">
              <div className="icon-bubble" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <span className="card-num">Takeaway 02</span>
            </div>
            <div className="card-body">
              <h2>Real-time info must lead</h2>
              <p>The data was already there; the redesign just stopped burying it under icons and panels.</p>
            </div>
            <div className="card-tag">Visual hierarchy</div>
          </article>

          <article className="takeaway-card v-3">
            <div className="card-head">
              <div className="icon-bubble" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5z"/></svg>
              </div>
              <span className="card-num">Takeaway 03</span>
            </div>
            <div className="card-body">
              <h2>Tracking ≠ guiding</h2>
              <p>Showing where the bus is only solved half the problem. Users also needed a path from themselves to the stop.</p>
            </div>
            <div className="card-tag">Wayfinding</div>
          </article>

          <article className="takeaway-card v-4">
            <div className="card-head">
              <div className="icon-bubble" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M11 10.5V4a1.5 1.5 0 0 1 3 0v7"/><path d="M14 10V5.5a1.5 1.5 0 0 1 3 0V13"/><path d="M17 9.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-2a6 6 0 0 1-5.5-3.6L5 13a1.5 1.5 0 0 1 2.7-1.3L8 13"/></svg>
              </div>
              <span className="card-num">Takeaway 04</span>
            </div>
            <div className="card-body">
              <h2>Match the mental model</h2>
              <p>Replacing directional buttons with drag and zoom removed friction without adding anything new.</p>
            </div>
            <div className="card-tag">Interaction design</div>
          </article>

          <article className="takeaway-card v-5">
            <div className="card-head">
              <div className="icon-bubble" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="8" cy="8" r="1.6" fill="currentColor"/></svg>
              </div>
              <span className="card-num">Takeaway 05</span>
            </div>
            <div className="card-body">
              <h2>Minimalism has a clarity cost</h2>
              <p>Clean icons looked great, but without labels users hesitated. Comprehension beats aesthetics.</p>
            </div>
            <div className="card-tag">Labels &amp; affordance</div>
          </article>
        </div>

        <div className="case-back-footer">
          <button className="btn solid" onClick={() => setRoute && setRoute("home")}>← Back to portfolio</button>
        </div>
      </section>
    </main>
  );
}

window.ShuttleCaseStudy = ShuttleCaseStudy;
