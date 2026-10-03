import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });
const playfair = Playfair_Display({ variable: '--font-editorial', subsets: ['latin'], display: 'swap' });
const title = 'Avalora Leak Check | Booking Recovery Estimate for Miami Med Spas';
const description = 'Use a few clinic numbers to estimate booking opportunity exposed to unanswered calls and delayed communication.';
export const metadata: Metadata = {
  metadataBase: new URL('https://leakcheck.theavalora.com'), title, description,
  alternates: { canonical: 'https://leakcheck.theavalora.com' },
  openGraph: { title, description, url: 'https://leakcheck.theavalora.com', siteName: 'Avalora', type: 'website', images: [{ url: '/images/avalora-logo.jpeg', alt: 'Avalora', width: 2048, height: 2048 }] },
  twitter: { card: 'summary', title, description, images: ['/images/avalora-logo.jpeg'] },
  icons: { icon: '/images/avalora-logo.jpeg' }, robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${playfair.variable} antialiased`}><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
