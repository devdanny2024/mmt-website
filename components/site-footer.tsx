import Image from 'next/image';
import Link from 'next/link';
import { brand, nav } from '@/lib/site';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-x grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
        <div>
          <Image src="/makruten-logo.png" alt="Makruten" width={220} height={48} className="mb-4 h-8 w-auto" />
          <p className="max-w-xs text-sm leading-7 text-muted-foreground">
            {brand.motto} Makruten is a solutions brokerage — we connect you to a vetted network and deliver the
            outcome, with no upfront cost.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground transition hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <span className="text-foreground">Email:</span>{' '}
              <a href={`mailto:${brand.email}`} className="transition hover:text-foreground">
                {brand.email}
              </a>
            </li>
            <li>
              <Link href="/join" className="text-accent transition hover:text-accent-strong">
                Join our network →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {brand.legalName} ({brand.name}). All rights reserved.
          </p>
          <p>{brand.motto}</p>
        </div>
      </div>
    </footer>
  );
}
