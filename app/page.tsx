import Image from 'next/image';

const metrics = [
  { value: 'Focused', label: 'Pipeline Execution' },
  { value: 'Weekly', label: 'Sales Reporting' },
  { value: 'Live', label: 'Market Feedback Loop' },
];

const process = [
  {
    step: 'Step 1',
    title: 'Discovery & Sales Brief',
    description: 'We align on your offer, decision-makers, and realistic commercial targets.',
  },
  {
    step: 'Step 2',
    title: 'Sales Outsourcing Rollout',
    description: 'Makruten handles outreach, qualification, and pipeline follow-up as an extension of your team.',
  },
  {
    step: 'Step 3',
    title: 'Review & Optimization',
    description: 'We continuously sharpen messaging, targeting, and conversion points from real call outcomes.',
  },
  {
    step: 'Step 4',
    title: 'Scale Deliberately',
    description: 'Once repeatable wins appear, we scale execution while maintaining quality control.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/makruten-logo.png" alt="Makruten" width={220} height={48} className="h-8 w-auto" priority />
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#service" className="transition-colors hover:text-foreground">Service</a>
            <a href="#process" className="transition-colors hover:text-foreground">How We Work</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <a href="#contact" className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
            Book a Strategy Call
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1658317705991-cb398ae81043?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background to-background" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 text-center sm:px-6 lg:px-8 lg:py-32">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-muted-foreground sm:text-sm">Makruten</p>
          <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Let&apos;s get you a grip on your industry&apos;s market.
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            We provide Sales Outsourcing for teams that need disciplined execution and measurable pipeline progress.
            We are not a marketing agency.
          </p>
          <a href="#service" className="inline-block rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white hover:opacity-90">
            Explore Sales Outsourcing
          </a>
        </div>
      </section>

      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-xl border border-border bg-background/40 p-8">
              <p className="mb-2 text-3xl font-bold text-accent">{metric.value}</p>
              <p className="text-muted-foreground">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="service" className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
          <p className="leading-8 text-muted-foreground">
            Makruten exists to help businesses run sales execution with more clarity and less guesswork. We built our
            approach around honest communication, accountable execution, and consistent improvement from real market conversations.
          </p>
        </article>

        <article className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-4 text-3xl font-bold">Service Offering</h2>
          <h3 className="mb-3 text-xl font-semibold text-accent">Sales Outsourcing</h3>
          <p className="leading-8 text-muted-foreground">
            We become your outsourced sales execution arm: outreach, qualification, follow-up, and pipeline movement aligned
            to your market and revenue goals.
          </p>
        </article>
      </section>

      <section id="process" className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-4xl font-bold sm:text-5xl">How We Work</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-background/40 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.step}</p>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-card/60 py-20">
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
              <input className="rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-accent" placeholder="Full name" />
              <input className="rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-accent" placeholder="Work email" />
              <input className="rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-accent" placeholder="Company" />
              <textarea className="min-h-32 rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-accent" placeholder="Tell us your current sales challenge" />
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
