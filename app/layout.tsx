import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Onchain Pulse - Real-time blockchain insights, simplified',
  description: 'An on-chain analysis app providing fast, seconds-level insights for wallets, transactions, smart contracts, and tokens across multiple blockchains.',
  openGraph: {
    title: 'Onchain Pulse',
    description: 'Real-time blockchain insights, simplified.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
