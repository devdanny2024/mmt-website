'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { nav } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Makruten home">
          <Image src="/makruten-logo.png" alt="Makruten" width={220} height={48} className="h-8 w-auto" priority />
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-foreground ${
                isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/join" className="btn-primary">
            Join Our Network
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="text-xl leading-none" aria-hidden="true">
            {open ? '✕' : '☰'}
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm transition ${
                  isActive(item.href) ? 'bg-surface text-foreground' : 'text-muted-foreground hover:bg-surface'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/join" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Join Our Network
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
