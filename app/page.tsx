const navLinks = [
  'About',
  'Service',
  'Process',
  'Contact',
];

const outcomes = [
  {
    title: 'Focused Pipeline Execution',
    text: 'Structured outreach and follow-up rhythms that move opportunities from interest to close.',
  },
  {
    title: 'Market Signal Clarity',
    text: 'Field-level feedback from real conversations to help sharpen your sales decisions quickly.',
  },
  {
    title: 'Operator-Level Reporting',
    text: 'Transparent activity and outcome reporting so you can see what is working and what to improve.',
  },
];

const processSteps = [
  {
    title: '01 — Sales Brief',
    text: 'We align on your offer, target profile, and commercial goals to define a practical sales motion.',
  },
  {
    title: '02 — Execution Sprint',
    text: 'Our team runs outreach, qualification, and follow-up with clear accountability from day one.',
  },
  {
    title: '03 — Review & Improve',
    text: 'We review conversion points, refine messaging, and tighten execution every cycle.',
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="aurora aurora-left" aria-hidden />
      <div className="aurora aurora-right" aria-hidden />

      <header className="top-nav">
        <div className="brand">
          <span className="brand-dot" />
          <span>MMT</span>
        </div>

        <nav aria-label="Main Navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="nav-cta">
          Book a Call
        </a>
      </header>

      <section className="hero-panel" id="about">
        <p className="eyebrow">MMT - MAKRUTEN MARKET TUNNELS</p>
        <h1>Let's get you a grip on your industry's market.</h1>
        <p className="lead">
          We run disciplined sales execution for teams that need consistent movement in their pipeline.
          We are not a marketing agency.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Start Sales Outsourcing
          </a>
          <a href="#service" className="btn btn-ghost">
            Explore Service
          </a>
        </div>
      </section>

      <section className="story-grid">
        <article className="glass-card story" id="story">
          <h2>Our Story</h2>
          <p>
            MMT exists to help companies run better sales with less guesswork. We built this around honest
            communication, practical execution, and measurable outcomes. We focus on the work itself: understanding
            your market, speaking with real prospects, and improving conversion through consistent action.
          </p>
        </article>

        <article className="glass-card service" id="service">
          <h2>Our Service</h2>
          <ul>
            <li>
              <span>Sales Outsourcing</span>
              <p>Dedicated sales execution support tailored to your target market and revenue goals.</p>
            </li>
          </ul>
        </article>
      </section>

      <section className="outcomes" id="process">
        {outcomes.map((item) => (
          <article key={item.title} className="glass-card outcome-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="process-grid">
        {processSteps.map((step) => (
          <article key={step.title} className="glass-card process-card">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="cta-panel" id="contact">
        <p className="eyebrow">READY TO EXECUTE</p>
        <h2>Need a reliable sales execution partner?</h2>
        <p>Tell us your goals, and we will design a focused Sales Outsourcing plan around them.</p>
        <a href="mailto:hello@mmt.company" className="btn btn-primary">
          hello@mmt.company
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>MMT</strong>
          <p>Sales Outsourcing for teams that need structured, measurable sales momentum.</p>
        </div>
        <small>© {new Date().getFullYear()} MMT - Makruten Market Tunnels. All rights reserved.</small>
      </footer>
    </main>
  );
}
