import { GoogleAnalytics } from '@next/third-parties/google'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acudimos",
  description: "Servicios de cuidado y acompañamiento para personas mayores y con necesidades especiales en Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
    </html>
  );
}
