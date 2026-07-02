import type { Metadata } from "next";
import { Geist, Instrument_Serif, Merriweather, VT323 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: ["400"],
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#F8F9FA",
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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F8F9FA' rx='16'/><text y='.9em' font-size='56' x='50%' text-anchor='middle' dominant-baseline='middle' fill='%23DE7356' font-family='Georgia'>Y</text></svg>",
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
      className={`${geistSans.variable} ${instrumentSerif.variable} ${merriweather.variable} ${vt323.variable}`}
    >
      <body>
        {children}
        <Script src="/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
