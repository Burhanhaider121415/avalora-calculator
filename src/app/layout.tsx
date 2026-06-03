import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miami Med Spa Booking Leak Check | Avalora",
  description:
    "Estimate how much appointment opportunity may be slipping through missed calls, slow callbacks, after-hours inquiries, and unfinished booking requests at your Miami med spa.",
  alternates: {
    canonical: "https://theavalora.com/leak-check",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-text-main`}>
        {children}
      </body>
    </html>
  );
}
