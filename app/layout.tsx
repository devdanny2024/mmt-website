import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MMT - Makruten Market Tunnels',
  description: "Let's get you a grip on your industry's market.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
