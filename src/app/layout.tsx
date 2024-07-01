import { Suspense } from "react";

import { Metadata } from "next";
import { Inter } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import FathomAnalytics from "@/components/Common/FathomAnalytics";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vernon Wee Hong KOH",
  description:
    "Vernon Wee Hong KOH is a proficient full-stack software engineer specializing in building web applications with React, Spring Boot, and .NET Core. Explore his expertise.",
  robots: "index, follow",
  metadataBase: new URL("https://weehong.me"),
  openGraph: {
    title: "Vernon Wee Hong KOH",
    description:
      "Vernon Wee Hong KOH is a proficient full-stack software engineer specializing in building web applications with React, Spring Boot, and .NET Core. Explore his expertise.",
    url: `https://weehong.me`,
    images: [
      {
        url: "/images/profile.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vernon Wee Hong KOH",
    description:
      "Vernon Wee Hong KOH is a proficient full-stack software engineer specializing in building web applications with React, Spring Boot, and .NET Core. Explore his expertise.",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
        <Suspense fallback={null}>
          <FathomAnalytics />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
