import type { Metadata } from "next";

import "@/styles/globals.css";
import "@/styles/main.scss";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Vernon Wee Hong KOH | Software Engineer",
  description:
    "Vernon Wee Hong KOH is a seasoned frontend and backend software engineer. He thrives on hands-on learning, refining skills through practical application, and sharing insights via engaging articles.",
  keywords: [
    "weehong",
    "wee hong",
    "wee hong koh",
    "vernon",
    "vernon koh",
    "vernon wee hong",
    "vernon wee hong koh",
    "software",
    "software engineer",
    "frontend",
    "backend",
    "developer",
    "engineer",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://weehong.me"),
  openGraph: {
    title: "Vernon Wee Hong KOH | Software Engineer",
    description:
      "Vernon Wee Hong KOH is a seasoned frontend and backend software engineer. He thrives on hands-on learning, refining skills through practical application, and sharing insights via engaging articles.",
    url: `https://weehong.me`,
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vernon Wee Hong KOH | Software Engineer",
    description:
      "Vernon Wee Hong KOH is a seasoned frontend and backend software engineer. He thrives on hands-on learning, refining skills through practical application, and sharing insights via engaging articles.",
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
