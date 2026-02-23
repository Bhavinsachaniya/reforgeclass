import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-bebas-neue',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "REFORGETECH | Premium Construction",
  description: "Building the future of industrial and commercial infrastructure with uncompromising precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${bebasNeue.variable} font-sans bg-background text-foreground antialiased selection:bg-brand selection:text-white`}>
        {/* Cinematic Grain Overlay */}
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
