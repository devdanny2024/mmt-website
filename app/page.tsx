import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { CtaBand } from '@/components/cta-band';
import { brand, stats } from '@/lib/site';

const pillars = [
  {
    title: 'Solutions Brokerage',
    body: 'Tell us the problem. We find the right solution inside our vetted network and manage it end to end — so you do not have to chase suppliers, vet strangers, or carry the risk.',
  },
  {
    title: 'Procurement & Logistics',
    body: 'Equipment, maintenance teams, logistics — sourced, vetted, negotiated and coordinated on your behalf, so you are ready to deliver on contracts of any size.',
  },
  {
    title: 'No Upfront Cost',
    body: 'You pay nothing to start. We earn a percentage of the value we create — the money we save you and the deals we help you win. Our incentive is your outcome.',
  },
];

const steps = [
  { step: '01', title: 'Tell us the problem', body: 'Share the challenge, the contract you are preparing for, or what you need procured.' },
  { step: '02', title: 'We match the solution', body: 'We tap our vetted network of 100+ companies and shortlist the best-fit partners for you.' },
  { step: '03', title: 'We secure the best value', body: 'Pricing, terms, equipment, maintenance and logistics — negotiated and handled on your behalf.' },
  { step: '04', title: 'You pay on value delivered', body: 'A percentage of what we save or earn you. Nothing upfront, ever.' },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-mask absolute inset-0" />
        <div className="glow-radial absolute inset-0" />
        <div className="container-x relative py-20 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow mb-5">Solutions Brokerage · Procurement</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Finding solutions to </span>
              <span className="text-accent">every problem.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              {brand.name} takes the stress of outsourcing your problems off your plate. We tap a vetted network of
              companies to find the right solution, procure what you need, and secure the best value — with{' '}
              <span className="text-foreground">no upfront cost</span>.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/join" className="btn-primary">
                Join Our Network
              </Link>
              <Link href="/solutions" className="btn-ghost">
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-10 text-center">
              <p className="font-display text-3xl font-bold text-accent sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            One partner between you and every solution you need.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Outsourcing problems to other companies is stressful and risky. We sit in the middle — a single,
            accountable partner who finds the right company for the job and makes sure you get the best value for your
            money.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="card h-full">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-display font-bold text-accent">
                  {i + 1}
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold">{p.title}</h3>
                <p className="leading-7 text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-4 text-center">How it works</p>
            <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold sm:text-4xl">
              From problem to delivered outcome.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <article className="card h-full bg-background">
                  <p className="mb-3 font-display text-3xl font-bold text-accent/80">{item.step}</p>
                  <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case highlight */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Proof, not promises</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              We helped finalize a contract worth over ₦100 billion.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              When one of our clients landed the biggest contract of their life — over ₦100 billion — they were not yet
              ready to deliver. {brand.name} stepped in: we helped finalize the contract, sourced the right equipment,
              assembled a maintenance team, and handled the logistics end to end.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              In our first year of operation, we have drawn billions of naira worth of interest for the companies we
              work with. That is what solutions brokerage looks like.
            </p>
            <Link href="/about" className="btn-ghost mt-8">
              Read our story
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { k: 'Contract finalized', v: '₦100B+' },
                { k: 'Companies in network', v: '100+' },
                { k: 'Upfront cost', v: '₦0' },
                { k: 'Handled end to end', v: 'Equipment · Team · Logistics' },
              ].map((b) => (
                <div key={b.k} className="card">
                  <p className="font-display text-2xl font-bold text-accent">{b.v}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.k}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
