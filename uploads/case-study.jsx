/* global React, PortfolioCore */
const { Placeholder: _PH } = window.PortfolioCore;

/* Tiny inline icons */
const I = {
  empathize: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 19c0-2 2-3 4-3s4 1 4 3"/></svg>,
  define:    (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 4h18l-7 9v6l-4 2v-8z"/></svg>,
  ideate:    (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M16 8l-7 7-3-3"/></svg>,
  design:    (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M16 7l3 3M14 9l-2 2"/></svg>,
  test:      (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>,
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
        <div className="pin" style={{top:"22%", left:"30%"}}></div>
        <div className="pin" style={{top:"58%", left:"55%"}}></div>
        <div className="pin" style={{top:"40%", left:"72%"}}></div>
      </div>
    </>
  );
}

function MockShuttleBefore() {
  return (
    <>
      <div className="mock-status"><span>9:41</span><span>●●●</span></div>
      <div style={{padding:"40px 18px 12px"}}>
        <div style={{fontSize:13, fontWeight:700, marginBottom:10}}>ASU Shuttles</div>
        <div style={{height:1, background:"#ddd", marginBottom:10}}/>
        <div style={{fontSize:11, color:"#666"}}>Tempe → Downtown</div>
        <div style={{fontSize:11, color:"#666", marginTop:4}}>ETA: 6:00 PM</div>
      </div>
      <div style={{flex:1, margin:"8px 18px 18px", background:"#e8e8e8", borderRadius:6, position:"relative"}}>
        <div style={{position:"absolute", top:"30%", left:"40%", width:8, height:8, borderRadius:"50%", background:"#900"}}/>
        <div style={{position:"absolute", top:"31%", left:"42%", width:8, height:8, borderRadius:"50%", background:"#900"}}/>
        <div style={{position:"absolute", top:"32%", left:"43%", width:8, height:8, borderRadius:"50%", background:"#900"}}/>
      </div>
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
        <div className="case-cover-inner">
          <button className="case-back" onClick={() => setRoute && setRoute("home")}>← Back to portfolio</button>
          <h1>ASU Shuttle Tracking<br/>Website Redesign</h1>
          <div className="phones">
            <div className="phone"></div>
            <div className="phone"></div>
            <div className="phone" style={{background:"#fff"}}></div>
            <div className="phone"></div>
            <div className="phone"></div>
          </div>
          <div className="meta-strip">
            <span>Timeline<b>Sep — Dec 2025</b></span>
            <span>Type<b>Course Project · End-to-end</b></span>
            <span>Role<b>Solo Designer & Researcher</b></span>
            <span>Tools<b>Figma · FigJam · Notion · Maze</b></span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container case-section" style={{paddingTop: 24}}>
        <div className="case-overview">
          <div>
            <h3>Overview</h3>
            <p>
              As a frequent ASU shuttle rider, I noticed a recurring gap: <span className="em">unreliable ETAs and a dense map view</span> caused students to miss buses, lose trust in the schedule, and choose to walk instead.
            </p>
            <p>
              Despite serving thousands of students and faculty across four campuses, the existing tracker failed to communicate location confidence or surface delays.
            </p>
            <p>This redesign is a <span className="em">research-led</span> effort to:</p>
            <ul>
              <li><span className="em">improve real-time accuracy and trust</span></li>
              <li>declutter the map for one-handed, outdoor reading</li>
              <li>create a more accessible mobile-first first-time experience</li>
            </ul>
            <div className="role-tool">
              <div className="item">
                <div className="lbl"><I.play/> Role</div>
                <div className="val">Solo UX/UI Designer & Researcher</div>
              </div>
              <div className="item">
                <div className="lbl"><I.play/> Tools</div>
                <div className="val">Figma, FigJam, Notion, Maze</div>
              </div>
            </div>
          </div>
          <div className="phone-stand">
            <div className="phone-large">
              <div className="screen">
                <MockShuttleHome/>
              </div>
            </div>
          </div>
        </div>

        {/* Problem + Goal */}
        <div className="problem-goal">
          <div className="pg-card center">
            <div className="ico"><I.warning/></div>
            <h4>Problem Statement</h4>
            <ul>
              <li>ETAs feel <span className="em">unreliable and stale</span></li>
              <li>Map is <span className="em">visually dense</span> with no hierarchy</li>
              <li>No alerts for delays or cancellations</li>
              <li>Riders <span className="em">drop off</span> the app and walk instead</li>
            </ul>
          </div>
          <div className="pg-card center">
            <div className="ico"><I.pencil/></div>
            <h4>Design Goal</h4>
            <ul>
              <li><span className="em">Clarify ETA confidence</span> — not false precision</li>
              <li><span className="em">Reduce cognitive load</span> on the map view</li>
              <li>Surface delays proactively, without anxiety</li>
              <li><span className="em">Build trust</span> across daily commute moments</li>
              <li>Lead riders to a quick first success</li>
            </ul>
          </div>
        </div>

        {/* Design Thinking timeline */}
        <div className="dt-timeline">
          <h3>Design Thinking</h3>
          <div className="dt-stages">
            <div className="dt-stage">
              <div className="icon-w"><I.empathize/></div>
              <div className="dot"></div>
              <div className="name"><span className="num">01.</span>Empathize</div>
              <ul><li>Literature review</li><li>User interviews</li><li>Survey · 52 riders</li></ul>
            </div>
            <div className="dt-stage">
              <div className="icon-w"><I.define/></div>
              <div className="dot"></div>
              <div className="name"><span className="num">02.</span>Define</div>
              <ul><li>Competitive analysis</li><li>Journey map</li><li>Problem statement</li></ul>
            </div>
            <div className="dt-stage">
              <div className="icon-w"><I.ideate/></div>
              <div className="dot"></div>
              <div className="name"><span className="num">03.</span>Ideate</div>
              <ul><li>Solution strategies</li><li>Sketching</li></ul>
            </div>
            <div className="dt-stage">
              <div className="icon-w"><I.design/></div>
              <div className="dot"></div>
              <div className="name"><span className="num">04.</span>Design</div>
              <ul><li>Wireframes</li><li>→ Hi-Fi</li><li>→ Prototype</li></ul>
            </div>
            <div className="dt-stage">
              <div className="icon-w"><I.test/></div>
              <div className="dot"></div>
              <div className="name"><span className="num">05.</span>Test</div>
              <ul><li>Usability testing</li><li>SUS · Time on Task</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* EMPATHIZE */}
      <section className="container case-section">
        <CaseH2 icon="empathize" label="Empathize"/>
        <div style={{maxWidth: 760, marginBottom: 32}}>
          <h3 style={{margin:"0 0 10px", fontSize:22}}>User Interview & Survey</h3>
          <p style={{color:"var(--ink-c2)", fontSize: 15, lineHeight: 1.65}}>
            I interviewed <span style={{color:"var(--maroon)", fontWeight:500}}>5 frequent riders</span> (3 students, 2 faculty) and ran a <span style={{color:"var(--maroon)", fontWeight:500}}>52-response survey</span> across all four campuses to understand <span style={{color:"var(--maroon)", fontWeight:500}}>why riders distrust the schedule</span>, focusing on pain points and what kind of confidence they need before boarding.
          </p>
        </div>

        <div className="survey">
          <div className="survey-row"><span className="score">3.1<span style={{color:"var(--ink-c3)", fontSize:13}}>/5</span></span><span className="bar"><i style={{width:"62%"}}></i></span><span className="q">How acceptable is the <b>ETA accuracy</b> right now?</span></div>
          <div className="survey-row"><span className="score">2.8<span style={{color:"var(--ink-c3)", fontSize:13}}>/5</span></span><span className="bar"><i style={{width:"56%"}}></i></span><span className="q">How <b>clear and easy to scan</b> is the live map?</span></div>
          <div className="survey-row"><span className="score">2.4<span style={{color:"var(--ink-c3)", fontSize:13}}>/5</span></span><span className="bar"><i style={{width:"48%"}}></i></span><span className="q">How much do you <b>trust</b> the published schedule?</span></div>
          <div className="survey-row"><span className="score">5.2<span style={{color:"var(--ink-c3)", fontSize:13}}>/10</span></span><span className="bar"><i style={{width:"52%"}}></i></span><span className="q">Overall, how <b>satisfied</b> are you with the current tracker?</span></div>
        </div>

        <div className="insight-tag">Participants quote</div>

        <div className="quote-bubble left">
          <p>"The map shows three buses on top of each other and none of them are moving. I'd <span className="em">rather just walk</span> than risk waiting twenty minutes for a shuttle that never shows."</p>
          <div className="who"><div><div className="who-name">Maya R.</div><div className="who-tag">Undergraduate · Tempe ↔ DT rider</div></div><div className="av">M</div></div>
        </div>
        <div className="quote-bubble right">
          <p>"I check the app, then I look outside, then I check the app again. I want to know <span className="em">how confident the ETA is</span>, not just a number that's wrong half the time."</p>
          <div className="who"><div><div className="who-name">Daniel K.</div><div className="who-tag">PhD student · Polytechnic commuter</div></div><div className="av">D</div></div>
        </div>

        <div className="insight-tag" style={{marginTop:48}}>Key Insight</div>
        <div className="insight-box">
          <ul>
            <li>The flow felt <span className="em">unreliable and untrustworthy</span>, especially during peak hours when GPS pings staled.</li>
            <li>Riders finished a lookup without knowing <span className="em">whether to wait or walk</span>, and bailed before the bus actually arrived.</li>
            <li><span className="em">Confidence intervals</span> on ETAs were more motivating than tighter "exact" numbers that turned out to be wrong.</li>
          </ul>
        </div>
      </section>

      {/* DEFINE */}
      <section className="container case-section">
        <CaseH2 icon="define" label="Define"/>
        <div className="sw">
          <div className="sw-col">
            <h4>Strengths to keep</h4>
            <div className="sw-row"><span className="chip"><span className="n">1</span>Brand fit</span><p>The maroon & gold identity already signals "ASU shuttle" at a glance.</p></div>
            <div className="sw-row"><span className="chip"><span className="n">2</span>Schedule depth</span><p>Riders rely on the published timetable for early-morning and late-night runs.</p></div>
            <div className="sw-row"><span className="chip"><span className="n">3</span>Stop coverage</span><p>All four campuses and the off-campus lot are included today.</p></div>
          </div>
          <div className="sw-col weak">
            <h4>Weaknesses to fix</h4>
            <div className="sw-row"><span className="chip"><span className="n">1</span>Stale ETAs</span><p>GPS pings update too slowly during peak hours; numbers feel made up.</p></div>
            <div className="sw-row"><span className="chip"><span className="n">2</span>Dense map</span><p>Bus pins overlap and there is no zoom-level clustering at busy stops.</p></div>
            <div className="sw-row"><span className="chip"><span className="n">3</span>No alerts</span><p>Cancellations and detours are buried in a static announcements page.</p></div>
            <div className="sw-row"><span className="chip"><span className="n">4</span>Desktop-first</span><p>Tap targets and type sizing assume a mouse, not a sunlit phone screen.</p></div>
          </div>
        </div>
      </section>

      {/* IDEATE */}
      <section className="container case-section">
        <div className="kc">
          <h4>Key Challenges</h4>
          <ul>
            <li>How do we show <em>real-time confidence</em> without false certainty?</li>
            <li>How do we <em>declutter the map</em> at high-density stops?</li>
            <li>How do we surface <em>alerts</em> without creating anxiety?</li>
            <li>How do we support both <em>quick-glance</em> and <em>deep planning</em> use?</li>
          </ul>
        </div>

        <div style={{marginTop: 48}}>
          <CaseH2 icon="ideate" label="Ideate"/>
        </div>

        <h3 style={{margin:"0 0 18px", fontSize:22}}>Solution Strategy</h3>
        <div className="strategy">
          <div className="strat-col">
            <h4>Trust-first ETAs</h4>
            <div className="strat-row"><span className="num">1</span><p>Replace single-minute ETA with a <strong>confidence interval</strong> ("3 min, ±1") that updates with GPS staleness.</p></div>
            <div className="strat-row"><span className="num">2</span><p>Color-code freshness: <strong>live · drifting · stale</strong>, so riders know to recheck before walking.</p></div>
            <h4 style={{marginTop:24}}>Smart map clustering</h4>
            <div className="strat-row"><span className="num">3</span><p>Group nearby buses into <strong>cluster tags</strong> at low zoom; expand on tap or pinch.</p></div>
            <div className="strat-row"><span className="num">4</span><p>Hide schedule overlay until requested — surface live pins by default.</p></div>
          </div>
          <div className="strat-col right">
            <h4>Calm alerts</h4>
            <div className="strat-row"><span className="num">5</span><p>Render delays as a <strong>subtle banner</strong>, not a modal — let riders scan and decide.</p></div>
            <div className="strat-row"><span className="num">6</span><p>Push notifications only for the rider's <strong>saved routes</strong>, opt-in by default.</p></div>
            <h4 style={{marginTop:24}}>Quick first success</h4>
            <div className="strat-row"><span className="num">7</span><p>One-tap save for <strong>"my route"</strong> from the home screen — no account required.</p></div>
            <div className="strat-row"><span className="num">8</span><p>Mobile-first type scale & 44pt tap targets for outdoor, sunlit, one-handed use.</p></div>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="container case-section">
        <CaseH2 icon="design" label="Design"/>
        <div className="design-frame">
          <div className="corner"></div>
          <div className="design-phone">
            <div className="notch"></div>
            <div className="screen">
              <MockShuttleHome/>
            </div>
          </div>
        </div>
        <p style={{marginTop:24, color:"var(--ink-c2)", fontSize:14, textAlign:"center", fontStyle:"italic"}}>
          High-fidelity prototype, home screen — confidence-based ETAs surfaced before the map.
        </p>
      </section>

      {/* TEST */}
      <section className="container case-section">
        <CaseH2 icon="test" label="Test"/>
        <div style={{display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:48, alignItems:"start"}} className="test-grid">
          <div>
            <p style={{color:"var(--ink-c2)", fontSize:15, lineHeight:1.65}}>
              To validate the redesign, I conducted <span style={{color:"var(--maroon)", fontWeight:500}}>two rounds of usability testing</span> with four riders each. Each round combined <strong>think-aloud</strong> observation, qualitative interviews, and quantitative measures (<strong>SUS</strong> and <strong>Time on Task</strong>).
            </p>
          </div>
          <div className="what-tested">
            <h4>What I Tested</h4>
            <ul>
              <li>ETA confidence comprehension</li>
              <li>Map clarity at busy stops</li>
              <li>Time on Task — route lookup</li>
              <li>Alert noticeability</li>
              <li>Trust moments</li>
            </ul>
          </div>
        </div>

        <h3 style={{margin:"48px 0 16px", fontSize:22}}>Round 1 — Key Findings</h3>
        <div className="findings">
          <div className="finding"><div className="ico"><I.bulb/></div><h5>Map cluster icons unclear</h5><p>Riders read the cluster as "the bus is here" rather than "multiple buses nearby"; needed a tighter visual mark.</p></div>
          <div className="finding"><div className="ico"><I.bulb/></div><h5>Alert banner missed</h5><p>The subtle banner above the map was scrolled past; weather-day delays didn't register.</p></div>
          <div className="finding"><div className="ico"><I.bulb/></div><h5>Saved-route labels needed</h5><p>"My route" pinned to the top wasn't enough — riders wanted a clear name & color tag.</p></div>
          <div className="finding"><div className="ico"><I.bulb/></div><h5>Confidence range well-received</h5><p>Every rider noticed and explicitly trusted the ±1 / ±2 / ±3 freshness range.</p></div>
        </div>

        <h3 style={{margin:"48px 0 16px", fontSize:22}}>Implement Feedback</h3>
        <div className="ba-pair">
          <div className="phase">
            <div className="label">Before</div>
            <div className="ba-phone"><div className="screen"><MockShuttleBefore/></div></div>
          </div>
          <div className="arrow-box">→</div>
          <div className="phase">
            <div className="label">After</div>
            <div className="ba-phone"><div className="screen"><MockShuttleHome/></div></div>
          </div>
        </div>

        <div className="outcome">
          <h4>Round 2 — Outcome</h4>
          <div className="metrics">
            <div className="metric"><div className="big">+42%</div><div className="lbl">Trust in ETA accuracy ↑</div></div>
            <div className="metric solid"><div className="big">+30%</div><div className="lbl">Map clarity ↑</div></div>
            <div className="metric solid"><div className="big">−58%</div><div className="lbl">Time on Task — route lookup ↓</div></div>
            <div className="metric"><div className="big">−100%</div><div className="lbl">Map cluster confusion ↓</div></div>
            <div className="metric solid"><div className="big">65 → 84</div><div className="lbl">SUS Score (good → excellent) ↑</div></div>
            <div className="metric"><div className="big">5.2 → 8.6</div><div className="lbl">Overall satisfaction (/10) ↑</div></div>
          </div>
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="container case-section">
        <CaseH2 icon="bulb" label="Takeaways"/>
        <div className="takeaways">
          <div className="tk">
            <h5><span className="check">✓</span>Confidence intervals build trust faster than precision.</h5>
            <p>Showing <span className="em">±1 / ±2 / ±3</span> next to each ETA reframed accuracy as honesty — riders trusted a range more than a single, often-wrong minute.</p>
          </div>
          <div className="tk">
            <h5><span className="check">✓</span>Information density is not information.</h5>
            <p>The original map crammed every bus on screen at all zooms. Cluster-then-expand made the same data <span className="em">readable in a glance</span>.</p>
          </div>
          <div className="tk">
            <h5><span className="check">✓</span>Calm alerts get acted on; loud alerts get dismissed.</h5>
            <p>A subtle banner with a clear delay reason performed better than a modal — riders read it, decided, and kept going.</p>
          </div>
          <div className="tk">
            <h5><span className="check">✓</span>Saved routes are the most-used surface.</h5>
            <p>Once "my route" was a one-tap save, every Round-2 participant pinned at least one — turning the home screen into <span className="em">their</span> shuttle, not a transit directory.</p>
          </div>
          <div className="tk">
            <h5><span className="check">✓</span>Outdoor, one-handed, sunlit constraints shape every choice.</h5>
            <p>Bigger type, darker contrast, and 44pt tap targets weren't accessibility extras — they were the <span className="em">primary use case</span>.</p>
          </div>
          <div className="tk">
            <h5><span className="check">✓</span>Research timing matters.</h5>
            <p>Two rounds of usability testing with documented SUS scores forced the cuts and reframings the design needed; one round would have shipped the unclear cluster icons.</p>
          </div>
        </div>

        <div style={{textAlign:"center", marginTop:48}}>
          <button className="btn solid" onClick={() => setRoute && setRoute("home")}>← Back to portfolio</button>
        </div>
      </section>
    </main>
  );
}

window.ShuttleCaseStudy = ShuttleCaseStudy;
