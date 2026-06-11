import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { brand } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['600', '700', '800'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — Solutions Brokerage`,
    template: `%s — ${brand.name}`,
  },
  description:
    'Makruten is a solutions brokerage. We take the stress of sourcing the right partners off your plate — tapping a vetted network to solve your problems and procure what you need, at the best value. No upfront cost.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
