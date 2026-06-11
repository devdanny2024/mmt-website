import Link from 'next/link';

export function CtaBand({
  title = 'Tell us the problem. We will find the solution.',
  subtitle = 'No upfront cost. You only pay a percentage of the value we create for you.',
  primary = { href: '/join', label: 'Join Our Network' },
  secondary = { href: '/contact', label: 'Talk to us' },
}: {
  title?: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div className="glow-radial absolute inset-0" />
      <div className="container-x relative py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={primary.href} className="btn-primary">
            {primary.label}
          </Link>
          <Link href={secondary.href} className="btn-ghost">
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
