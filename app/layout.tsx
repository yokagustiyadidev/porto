import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Playfair_Display, VT323, Space_Grotesk, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const coolvetica = localFont({
  src: "../public/fonts/Coolvetica-Rg.otf",
  variable: "--font-coolvetica",
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: ["400"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-taste-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-neo-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-neo-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#fafaf9",
};

export const metadata: Metadata = {
  title: "Yoka Gustiyadi — Portfolio",
  description:
    "Portfolio Yoka Gustiyadi — Admin Staff, General Affairs & IT Support. Specialist in AI-Integrated CBT, WhatsApp Customer Service 24/7, and Web Development.",
  authors: [{ name: "Yoka Gustiyadi" }],
  openGraph: {
    title: "Yoka Gustiyadi — Portfolio",
    description:
      "Admin Staff, General Affairs & IT Support. Specialist in AI-Integrated CBT, WhatsApp Customer Service 24/7, and Web Development.",
    url: "https://yokagustiyadi.vercel.app",
    siteName: "Yoka Gustiyadi — Portfolio",
    images: [
      {
        url: "https://yokagustiyadi.vercel.app/og-image.jpg",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoka Gustiyadi — Portfolio",
    description:
      "Admin Staff, General Affairs & IT Support. Specialist in AI-Integrated CBT, WhatsApp Customer Service 24/7, and Web Development.",
    images: ["https://yokagustiyadi.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.92em' font-size='72' x='50%' text-anchor='middle' dominant-baseline='middle' fill='%231c1917' font-family='Georgia'>Y</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${coolvetica.variable} ${vt323.variable} ${geistMono.variable} ${manrope.variable} ${playfair.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}
        <Script src="/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
