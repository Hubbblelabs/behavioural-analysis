import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "DISC Personality Assessment | Discover Your Career Direction",
  description: "Take our comprehensive 30-question DISC personality assessment to discover your behavioral style, unlock your strengths, and find career paths that align with your natural tendencies.",
  keywords: ["DISC", "personality test", "career assessment", "behavioral analysis", "career guidance", "student assessment"],
  authors: [{ name: "DISC Assessment Platform" }],
  openGraph: {
    title: "DISC Personality Assessment",
    description: "Discover your DISC personality type and find your ideal career path",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DISC Assessment',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans text-smooth">
        {children}
      </body>
    </html>
  );
}
