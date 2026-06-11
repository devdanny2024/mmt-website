import type { Metadata } from 'next';
import { Reveal } from '@/components/reveal';
import { LeadForm } from '@/components/lead-form';
import { brand } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Join Our Network',
  description:
    'Join Makruten’s vetted network. Get matched to real, qualified opportunities we broker for our clients — without chasing leads. Tell us about your company.',
};

const benefits = [
  {
    title: 'Real, qualified demand',
    body: 'We bring you opportunities we are actively brokering for clients — not cold leads you have to warm up yourself.',
  },
  {
    title: 'Matched to your strengths',
    body: 'We only put you forward for work that fits what your company actually does well.',
  },
  {
    title: 'A trusted name behind you',
    body: 'Being in our vetted network signals to clients that you have been checked and are accountable.',
  },
];

export default function JoinPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-mask absolute inset-0" />
        <div className="glow-radial absolute inset-0" />
        <div className="container-x relative py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow mb-4">Become a partner</p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Join our network.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              If your company offers a product, service or capability, joining the {brand.name} network puts you in
              front of the demand we broker for our clients. We bring qualified opportunities straight to vetted
              partners — so you spend less time chasing work and more time delivering it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* What joining means */}
          <Reveal>
            <p className="eyebrow mb-4">What joining means for you</p>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">A simpler way to win work.</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              When a client brings us a problem, we look to our network for the right partner to solve it. Members get
              matched to opportunities that fit their capability — no cold outreach, no lead-chasing.
            </p>
            <div className="mt-8 space-y-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-accent" />
                  <div>
                    <p className="font-display font-semibold">{b.title}</p>
                    <p className="text-sm leading-7 text-muted-foreground">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div>
              <p className="eyebrow mb-4">Apply to join</p>
              <LeadForm variant="join" submitLabel="Apply to join the network" />
              <p className="mt-4 text-xs text-muted-foreground">
                We review every application. If your company is a fit, our team will reach out to you directly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
