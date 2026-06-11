import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { CtaBand } from '@/components/cta-band';
import { brand } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Solutions brokerage and procurement from Makruten: we find the right company for your problem, secure the best value, and you pay only a percentage of the value delivered — nothing upfront.',
};

const steps = [
  { step: '01', title: 'Tell us the problem', body: 'Share the challenge, the contract you are chasing, or what you need procured. No commitment to start.' },
  { step: '02', title: 'We match the solution', body: 'We search our vetted network of 100+ companies and shortlist the best-fit partners for the job.' },
  { step: '03', title: 'We secure the best value', body: 'We negotiate price, terms, equipment, maintenance and logistics so your money goes as far as possible.' },
  { step: '04', title: 'You pay on value delivered', body: 'Our fee is a percentage of the value we create — the savings and the wins. There is never an upfront cost.' },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-mask absolute inset-0" />
        <div className="container-x relative py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow mb-4">What we offer</p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Solutions brokerage, end to end.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We are the single, accountable partner between you and every company you need. You bring the problem; we
              find, vet, negotiate and manage the solution — and you only pay on the value we deliver.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two core offerings */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card h-full">
              <p className="eyebrow mb-4">Core service</p>
              <h2 className="mb-3 font-display text-2xl font-bold">Solutions Brokerage &amp; Procurement</h2>
              <p className="leading-7 text-muted-foreground">
                Outsourcing your problems to other companies is stressful, slow and risky. We take that off your plate.
                Whatever you need — equipment, a maintenance team, logistics, a specialist capability — we find the
                right company in our vetted network, secure the best value, and manage the delivery so you do not have
                to.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {['Vetted network of 100+ companies', 'Best-value negotiation on your behalf', 'Equipment, maintenance & logistics handled', 'One accountable partner, not a dozen vendors'].map(
                  (i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                      <span>{i}</span>
                    </li>
                  ),
                )}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="card h-full">
              <p className="eyebrow mb-4">For providers</p>
              <h2 className="mb-3 font-display text-2xl font-bold">Join Our Network</h2>
              <p className="leading-7 text-muted-foreground">
                If your company provides a product, service or capability, joining our network puts you in front of real
                demand — the problems we are brokering for our clients — without chasing leads yourself. We bring
                qualified opportunities to vetted partners.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {['Access to brokered, qualified opportunities', 'No cold outreach or lead-chasing', 'Be matched to work that fits your capability', 'Grow alongside a trusted brokerage'].map(
                  (i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                      <span>{i}</span>
                    </li>
                  ),
                )}
              </ul>
              <Link href="/join" className="btn-primary mt-7">
                Apply to join
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Pricing model */}
      <section className="border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Our pricing</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              No upfront cost. We earn only when you do.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              You never pay to get started. {brand.name} is paid a percentage of the value we create for you — the money
              we save you and the deals we help you win. It keeps our incentive perfectly aligned with your outcome: if
              you do not gain, we do not get paid.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { v: '₦0', k: 'To get started' },
                { v: 'Value-based', k: 'You pay a % of the value created' },
                { v: '100%', k: 'Aligned with your outcome' },
              ].map((b) => (
                <div key={b.k} className="card text-center">
                  <p className="font-display text-3xl font-bold text-accent">{b.v}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{b.k}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <p className="eyebrow mb-4 text-center">The process</p>
          <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold sm:text-4xl">
            From problem to delivered outcome.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <article className="card h-full">
                <p className="mb-3 font-display text-3xl font-bold text-accent/80">{item.step}</p>
                <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
