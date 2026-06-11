import type { Metadata } from 'next';
import { Reveal } from '@/components/reveal';
import { CtaBand } from '@/components/cta-band';
import { brand, stats } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Makruten is a solutions brokerage helping companies solve problems through a vetted network — including finalizing a contract worth over ₦100 billion.',
};

const values = [
  {
    title: 'Outcome over activity',
    body: 'We are paid on the value we create, not the hours we bill. If you do not win, we do not earn.',
  },
  {
    title: 'A vetted network',
    body: 'Every company we connect you to is checked, trusted, and accountable. You inherit our standards, not a stranger’s risk.',
  },
  {
    title: 'Best value, always',
    body: 'We negotiate hard on your behalf — on price, terms, equipment and logistics — so your money goes further.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-mask absolute inset-0" />
        <div className="container-x relative py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow mb-4">Our story</p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              We solve the problems other companies find too hard to handle.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {brand.name} ({brand.legalName}) is a solutions brokerage. Companies come to us with a problem — a
              contract to win, equipment to source, a capability they do not have — and we find, vet and manage the
              right solution from our network. {brand.motto}
            </p>
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

      {/* Big story */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              The ₦100 billion contract.
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-muted-foreground">
              <p>
                One of our clients was on the edge of the biggest opportunity of their existence — a contract worth more
                than ₦100 billion. The opportunity was real, but they were not ready to deliver on it. Equipment,
                maintenance capacity, logistics — the operational backbone simply was not in place.
              </p>
              <p>
                {brand.name} stepped in as their solutions partner. We helped finalize the contract, then went to work
                across our network: sourcing the appropriate equipment, assembling a maintenance team, and coordinating
                the logistics required to perform. They did not have to manage a dozen vendors or carry the risk of
                getting it wrong — we did that for them.
              </p>
              <p>
                In our first year of operation, we have drawn billions of naira worth of interest for the companies we
                serve. We did it the same way every time: by sitting between our clients and the solutions they need,
                and being accountable for the outcome.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full">
              <p className="eyebrow mb-5">What we handled</p>
              <ul className="space-y-4 text-muted-foreground">
                {['Contract finalization support', 'Appropriate equipment sourcing', 'Maintenance team assembly', 'End-to-end logistics'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-surface/40 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-4">What we stand for</p>
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">How we work, every time.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <article className="card h-full bg-background">
                  <h3 className="mb-3 font-display text-xl font-semibold">{v.title}</h3>
                  <p className="leading-7 text-muted-foreground">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
