import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miami Med Spa Revenue Leak Calculator",
  description: "Avalora helps Miami med spas capture after-hours, overflow, and ad-driven booking opportunities with a bilingual AI call layer.",
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
