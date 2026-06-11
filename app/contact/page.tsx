import type { Metadata } from 'next';
import { Reveal } from '@/components/reveal';
import { LeadForm } from '@/components/lead-form';
import { brand } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell Makruten the problem you need solved or the contract you are preparing for. No upfront cost — we find the solution and you pay only on value delivered.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-mask absolute inset-0" />
        <div className="container-x relative py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Tell us the problem.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Share the challenge you are facing or the contract you are preparing for. We will tell you how we can
              help — and remember, there is no upfront cost.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-4">Why reach out</p>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">One partner for every solution.</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              Whether you need equipment sourced, a maintenance team assembled, logistics handled, or help getting ready
              for a major contract, {brand.name} finds the right company in our vetted network and manages it end to
              end.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="card">
                <p className="label">Email</p>
                <a href={`mailto:${brand.email}`} className="text-foreground transition hover:text-accent">
                  {brand.email}
                </a>
                <p className="mt-1 text-xs text-muted-foreground">A dedicated corporate inbox is being set up.</p>
              </div>
              <div className="card">
                <p className="label">Pricing</p>
                <p className="text-foreground">No upfront cost — a percentage of the value we create.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="eyebrow mb-4">Send an enquiry</p>
              <LeadForm variant="contact" submitLabel="Send enquiry" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
