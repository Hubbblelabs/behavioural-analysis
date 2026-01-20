import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Behavioural Analysis",
  description: "Next.js with Tailwind CSS and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
