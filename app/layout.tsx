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
  title: "Bhavin Sachaniya | Software Engineer",
  description: "Software Engineer specializing in full-stack development and UI/UX design. Building web applications with React, Node.js, and MongoDB. Based in Gujarat, India.",
  keywords: "Bhavin Sachaniya, Software Engineer, Full Stack Developer, Web Developer, React Developer, Node.js, UI/UX Designer, Gujarat, India",
  authors: [{ name: "Bhavin Sachaniya" }],
  robots: "index, follow",
  appleWebApp: {
    capable: true,
  },
  verification: {
    other: {
      "msvalidate.01": "55809AA4D54C1B4552B23940E8989A5D",
    },
  },
  openGraph: {
    type: "website",
    url: "https://bhavinsachaniya.in/",
    title: "Bhavin Sachaniya | Software Engineer",
    description: "Software Engineer specializing in full-stack development and UI/UX design. Building web applications with React, Node.js, and MongoDB.",
    siteName: "Bhavin Sachaniya",
    locale: "en_US",
    images: [{
      url: "https://res.cloudinary.com/dpfh2wf86/image/upload/v1771863224/Frame_9aasdfada_hmsdm5.png",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavin Sachaniya | Software Engineer",
    description: "Software Engineer specializing in full-stack development and UI/UX design. Building web applications with React, Node.js, and MongoDB.",
    images: ["https://res.cloudinary.com/dpfh2wf86/image/upload/v1771863224/Frame_9aasdfada_hmsdm5.png"],
  },
  alternates: {
    canonical: "https://bhavinsachaniya.in/",
  },
  icons: {
    icon: "https://res.cloudinary.com/dpfh2wf86/image/upload/v1763490664/favicon_jyhyx4.svg",
    apple: "https://res.cloudinary.com/dpfh2wf86/image/upload/v1763490664/favicon_jyhyx4.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://esm.sh https://static.cloudflareinsights.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.tailwindcss.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: https: blob:;
          media-src 'self' https://res.cloudinary.com https://*.cloudinary.com blob:;
          connect-src 'self' https://res.cloudinary.com https://*.cloudinary.com https://esm.sh https://static.cloudflareinsights.com https://portfoliodatabackend-tvrk.vercel.app;
          frame-src 'self';
        " />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${bebasNeue.variable} font-sans bg-background text-foreground antialiased selection:bg-brand selection:text-white`}>
        {/* Cinematic Grain Overlay */}
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
