import Image from 'next/image';

const kpis = [
  { value: 'Focused', label: 'Pipeline Execution' },
  { value: 'Weekly', label: 'Sales Reporting' },
  { value: 'Live', label: 'Market Feedback Loop' },
];

const process = [
  {
    title: 'Discovery & Sales Brief',
    description: 'We align on your offer, decision-makers, and realistic commercial targets.',
  },
  {
    title: 'Sales Outsourcing Rollout',
    description: 'Makruten handles outreach, qualification, and pipeline follow-up as an extension of your team.',
  },
  {
    title: 'Review & Optimization',
    description: 'We continuously sharpen messaging, targeting, and conversion points from real call outcomes.',
  },
  {
    title: 'Scale Deliberately',
    description: 'Once repeatable wins appear, we scale execution while maintaining quality control.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Image src="/makruten-logo.png" alt="Makruten" width={220} height={48} className="h-8 w-auto" priority />
          </div>
          <a href="#contact" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            Book a Strategy Call
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1658317705991-cb398ae81043?auto=format&fit=crop&w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">MAKRUTEN MARKET TUNNELS</p>
          <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            &quot;Let&apos;s get you a grip on your industry&apos;s market.&quot;
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-muted-foreground">
            We provide Sales Outsourcing for teams that need disciplined execution and measurable pipeline progress. We are not a marketing agency.
          </p>
          <a href="#service" className="rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white hover:opacity-90">Explore Sales Outsourcing</a>
        </div>
      </section>

      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          {kpis.map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-background/40 p-8">
              <div className="mb-2 text-3xl font-bold text-accent">{item.value}</div>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="service" className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground leading-8">
            Makruten exists to help businesses run sales execution with more clarity and less guesswork. We built our approach around honest communication,
            accountable execution, and consistent improvement from real market conversations.
          </p>
        </article>
        <article className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-4 text-3xl font-bold">Service Offering</h2>
          <h3 className="mb-3 text-xl font-semibold text-accent">Sales Outsourcing</h3>
          <p className="text-muted-foreground leading-8">
            We become your outsourced sales execution arm: outreach, qualification, follow-up, and pipeline movement aligned to your market and revenue goals.
          </p>
        </article>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-4xl font-bold">How We Work</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <article key={step.title} className="rounded-xl border border-border bg-background/40 p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Step {i + 1}</p>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-card/50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-xl border border-border bg-background/40 p-8">
            <h2 className="mb-3 text-4xl font-bold">Contact Us</h2>
            <p className="mb-8 text-muted-foreground">
              Tell us your market and sales goals. We&apos;ll map a practical Sales Outsourcing execution plan with clear weekly actions.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><span className="font-semibold text-foreground">Email:</span> hello@makruten.com</p>
              <p><span className="font-semibold text-foreground">Focus:</span> Sales Outsourcing only</p>
              <p><span className="font-semibold text-foreground">Positioning:</span> We are not a marketing agency.</p>
            </div>
          </article>

          <form className="rounded-xl border border-border bg-background/40 p-8">
            <div className="grid gap-4">
              <input className="rounded-md border border-border bg-background px-4 py-3" placeholder="Full name" />
              <input className="rounded-md border border-border bg-background px-4 py-3" placeholder="Work email" />
              <input className="rounded-md border border-border bg-background px-4 py-3" placeholder="Company" />
              <textarea className="min-h-32 rounded-md border border-border bg-background px-4 py-3" placeholder="Tell us your current sales challenge" />
              <button type="button" className="rounded-md bg-accent px-6 py-3 font-semibold text-white hover:opacity-90">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
