/* global React, PROJECTS, PortfolioCore */
const { Placeholder } = window.PortfolioCore;
const { useEffect: _ue, useState: _us, useRef: _ur } = React;

/* ============ HOME ============ */
function HomePage({ setRoute, setProject, tweaks }) {
  const t = tweaks || {};
  const featured = window.PROJECTS.slice(0, 3);
  const heroVariant = t.heroVariant || "split";
  const projectsVariant = t.projectsVariant || "alt";
  const showCollage = t.collage !== false;
  return (
    <main className="page" data-screen-label="01 Home">
      {/* Hero */}
      <section className="hero" data-variant={heroVariant}>
        <div className="hero-card">
          <div className="hero-grid">
            <div>
              <h1 className="hero-name">Kimberly designs and researches experiences. <br/>A soft spot for small moments. The second someone hesitates. The click they almost made.</h1>
              <p className="hero-bio">
                Trained as a librarian, working as a designer, paying attention to small things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {t.showTicker !== false && <Ticker />}

      {/* Featured projects */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title"><em>Selected</em> projects</h2>
            <span className="section-tag">{featured.length} of {window.PROJECTS.length} · 2023—2025</span>
          </div>

          <div className="projects-list" data-variant={projectsVariant}>
            {featured.map((p, i) => (
              <article key={p.id} className={`project ${i % 2 === 1 ? "reverse" : ""}`}>
                {projectsVariant === "indexed" && (
                  <div className="project-num"><span>{p.num}</span></div>
                )}
                <div className="project-text">
                  {projectsVariant !== "indexed" && (
                    <div className="project-num"><span>{p.num}</span><span>{p.year}</span></div>
                  )}
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((tg) => <span key={tg} className="tag">{tg}</span>)}
                  </div>
                  <button className="btn" data-cursor="open" onClick={() => { setProject(p.id); setRoute(p.detail ? "case" : "projects"); }}>
                    See detail <span className="arrow">→</span>
                  </button>
                </div>
                <div className={`project-cover swatch-${p.swatch}`} data-cursor="view" onClick={() => { setProject(p.id); setRoute(p.detail ? "case" : "projects"); }}>
                  <Placeholder label={p.cover || `${p.title} · cover`} swatch={p.swatch} />
                </div>
              </article>
            ))}
          </div>

          <div className="projects-cta">
            <button className="btn ghost" data-cursor="all projects" onClick={() => setRoute("projects")}>
              View the full index <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Ticker shortcut */
function Ticker() {
  return window.PortfolioCore.Ticker();
}

/* ============ PROJECTS index ============ */
function ProjectsPage({ setRoute }) {
  const [hover, setHover] = _us(null);
  const [pos, setPos] = _us({ x: 0, y: 0 });
  const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

  return (
    <main className="page" data-screen-label="02 Projects" onMouseMove={onMove}>
      <section className="section">
        <div className="container">
          <div className="projects-page-header">
            <p className="hero-eyebrow">Index</p>
            <h1 className="hero-name projects-page-title">
              <em>Projects,</em><br/>2022 — 2026.
            </h1>
            <p className="projects-intro">
              A working list. Some are public, some live behind NDAs and need a conversation. Hover a row for a peek; click for the case study.
            </p>
          </div>

          <div className="index-list">
            {window.PROJECTS.map((p) => (
              <div
                key={p.id}
                className="index-row"
                onMouseEnter={() => setHover(p)}
                onMouseLeave={() => setHover(null)}
                onClick={() => p.detail && (window.__setCase && window.__setCase(p.id))}
                style={{cursor: p.detail ? "pointer" : "default"}}
              >
                <span className="num">{p.num}</span>
                <span className="name"><em>{p.titleEm}</em>{p.title !== p.titleEm ? p.title.replace(p.titleEm, "") : ""}</span>
                <span className="meta">{p.role} · {p.tags[0]}</span>
                <span className="year">{p.year}</span>
                <span className="arr">→</span>
              </div>
            ))}
          </div>

          {hover && (
            <div className="index-preview show" style={{ left: pos.x + 200, top: pos.y }}>
              <Placeholder label={`${hover.title}`} swatch={hover.swatch} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* ============ ABOUT ============ */
function AboutPage() {
  return (
    <main className="page" data-screen-label="03 About">
      <section className="section">
        <div className="container">
          <div className="section-head section-head--lg">
            <h1 className="section-title"><em>About</em> me</h1>
            <span className="section-tag">A short version</span>
          </div>

          <div className="about-grid">
            <div className="about-photo">
              <Placeholder label="Studio photo · 3:4" swatch="warm" />
            </div>

            <div className="about-prose">
              <p>
                I'm Kimberly — a UX/Product designer who <em>codes the front-end too.</em> Half of my week is in Figma, half is in a code editor, and the part I love most is when the two collapse into the same conversation.
              </p>
              <p>
                I work best on small teams that take <em>craft seriously.</em> Lately I think a lot about quiet software — products that don't compete for your attention, that read well, that age well.
              </p>

              <p className="small">
                Outside work, I keep too many houseplants, scribble in a hand-bound dot-grid notebook, and am slowly translating an out-of-print Taiwanese cookbook with my mother.
              </p>

              <div className="about-block">
                <h4>Currently</h4>
                <ul>
                  <li>Independent design practice <span>2025—</span></li>
                  <li>Advisor, two early-stage teams <span>2024—</span></li>
                  <li>Speaking, Config Asia <span>Oct 2026</span></li>
                </ul>
              </div>

              <div className="about-block">
                <h4>Recognition</h4>
                <ul>
                  <li>Apple Design Award nominee <span>2024</span></li>
                  <li>FWA of the Day, North & Co. <span>2023</span></li>
                  <li>Print Magazine, New Visual Artists <span>2022</span></li>
                </ul>
              </div>

              <div className="about-block">
                <h4>Elsewhere</h4>
                <ul>
                  <li>Read <span>Notes ↗</span></li>
                  <li>LinkedIn <span>↗</span></li>
                  <li>Are.na <span>↗</span></li>
                  <li>Email <span>hello@kimberly.studio</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============ RESUME ============ */
function ResumePage() {
  return (
    <main className="page" data-screen-label="04 Resume">
      <section className="section">
        <div className="container">
          <div className="section-head section-head--sm">
            <h1 className="section-title"><em>Resume</em></h1>
            <span className="section-tag">CV · last updated May 2026</span>
          </div>

          <div className="resume-pdf">
            <object data="assets/Kimberly_Chen_Resume_EN.pdf#view=FitH&toolbar=0" type="application/pdf" width="100%" height="100%">
              <iframe src="assets/Kimberly_Chen_Resume_EN.pdf#view=FitH&toolbar=0" width="100%" height="100%" title="Kimberly Chen Resume"></iframe>
            </object>
          </div>

          <div className="resume">
            <aside className="resume-side">
              <dl className="resume-meta">
                <div><dt>Name</dt><dd>Kimberly (Pei-Chun) Chen</dd></div>
                <div><dt>Role</dt><dd>UX Designer · Product Designer · UX Researcher</dd></div>
                <div><dt>Location</dt><dd>Tempe, AZ</dd></div>
                <div><dt>Phone</dt><dd>602-341-7456</dd></div>
                <div><dt>Email</dt><dd>kimberlychen122489@gmail.com</dd></div>
              </dl>
              <button className="btn solid" onClick={() => window.open('assets/Kimberly_Chen_Resume_EN.pdf', '_blank')}>Download PDF <span className="arrow">↓</span></button>
            </aside>

            <div className="resume-body">
              <section>
                <h3>Summary</h3>
                <p className="resume-summary">
                  UX designer combining a Master's in User Experience with a foundation in Library and Information Science. Specialized in information architecture, user research, and usability testing, translating user observations into measurable interface improvements across healthcare and consumer mobile products. Working knowledge of HTML, CSS, and JavaScript supports close collaboration with engineering teams. Seeking full-time UX, Product Design, or UX Research roles in the U.S.
                </p>
              </section>

              <section>
                <h3>Experience</h3>
                <div className="resume-entry">
                  <span className="when">Jul 2024 — Dec 2024</span>
                  <div>
                    <h4><em>Librarian</em> (UX-focused)</h4>
                    <p className="who">Taipei Veterans General Hospital · Taipei, Taiwan</p>
                    <ul>
                      <li>Redesigned the hospital database SSO login interface used daily by 50+ medical staff, partnering with internal IT teams to translate user needs into system improvements that reduced friction in time-sensitive clinical workflows.</li>
                      <li>Restructured the medical library website's information architecture and developed structured taxonomies, improving discoverability of digital journals and clinical resources.</li>
                      <li>Conducted ongoing contextual user observation at the circulation desk to identify pain points across search, access, and resource borrowing workflows.</li>
                    </ul>
                  </div>
                </div>
                <div className="resume-entry">
                  <span className="when">Jan 2023 — Mar 2024</span>
                  <div>
                    <h4><em>Manual QA Engineer</em> (UX-driven Testing)</h4>
                    <p className="who">WRCD · Taipei, Taiwan</p>
                    <ul>
                      <li>Conducted user-oriented manual testing for a consumer mobile app spanning pet food subscription, health tracking, and e-commerce, identifying usability issues across UI, app logic, and animation flows.</li>
                      <li>Authored test scenarios covering real user paths and edge cases, surfacing usability issues that may have been missed by purely functional testing.</li>
                      <li>Collaborated with PMs and engineers to communicate findings and prioritize fixes, contributing to a measurable reduction in bugs and user flow errors across releases.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3>Selected Projects</h3>
                <div className="resume-entry">
                  <span className="when">Sep 2025</span>
                  <div>
                    <h4><em>ASU Shuttle Tracking</em> Website Redesign</h4>
                    <p className="who">Course Project · Solo Designer & Researcher</p>
                    <ul>
                      <li>Led an end-to-end redesign serving thousands of students and faculty: conducted mixed-methods research (interviews, surveys, contextual inquiry), then translated insights into user flows, wireframes, and a high-fidelity Figma prototype.</li>
                      <li>Validated the redesign through usability testing with UX metrics including the System Usability Scale (SUS) and Time on Task, and documented the full process in a case study.</li>
                    </ul>
                  </div>
                </div>
                <div className="resume-entry">
                  <span className="when">2025</span>
                  <div>
                    <h4><em>Music Festival</em> App + Staff Admin Platform</h4>
                    <p className="who">Course Project · Solo Designer</p>
                    <ul>
                      <li>Designed a dual-platform experience: an attendee-facing mobile app and a staff-facing admin dashboard for festival operations, covering core flows for both end users and internal operators.</li>
                      <li>Built a cohesive design system spanning both platforms (typography, color, components, interaction patterns) to ensure consistency at scale, and delivered a complete high-fidelity Figma prototype.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3>Education</h3>
                <div className="resume-entry">
                  <span className="when">Jan 2025 — May 2026</span>
                  <div>
                    <h4><em>M.S.</em>, User Experience</h4>
                    <p className="who">Arizona State University · GPA 4.0</p>
                    <p>Relevant coursework: User Research, Usability Testing, UX Strategy, Interaction Design, Prototyping, IA.</p>
                  </div>
                </div>
                <div className="resume-entry">
                  <span className="when">Sep 2019 — May 2023</span>
                  <div>
                    <h4><em>B.L.A.</em>, Library and Information Science</h4>
                    <p className="who">Tamkang University, Taiwan · GPA 3.77</p>
                  </div>
                </div>
              </section>

              <section>
                <h3>Skills</h3>
                <div className="skill-grid">
                  <div className="skill">
                    <h5>Methods</h5>
                    <ul>
                      <li>User Research</li>
                      <li>Interviews · Surveys</li>
                      <li>Usability Testing (SUS, Time on Task)</li>
                      <li>Information Architecture</li>
                      <li>User Flows · Heuristic Evaluation</li>
                      <li>UX Strategy</li>
                    </ul>
                  </div>
                  <div className="skill">
                    <h5>Tools</h5>
                    <ul>
                      <li>Figma · FigJam</li>
                      <li>Prototyping</li>
                      <li>Affinity Mapping</li>
                      <li>Notion</li>
                    </ul>
                  </div>
                  <div className="skill">
                    <h5>Front-end (Familiar)</h5>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                  <div className="skill">
                    <h5>Languages</h5>
                    <ul>
                      <li>English</li>
                      <li>Mandarin (Native)</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Pages = { HomePage, ProjectsPage, AboutPage, ResumePage };
