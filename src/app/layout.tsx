import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cuidado domiciliario para adultos mayores en Colombia | Acudimos",
    template: "%s | Acudimos",
  },
  description:
    "Cuidado domiciliario profesional para adultos mayores en Colombia. En Acudimos brindamos acompañamiento humano, atención personalizada y bienestar para tu familia.",
  keywords: [
    "cuidado domiciliario",
    "adultos mayores",
    "acompañamiento en casa",
    "servicios de cuidado en Colombia",
    "cuidador domiciliario",
    "Acudimos",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cuidado domiciliario para adultos mayores en Colombia | Acudimos",
    description:
      "Cuidado domiciliario profesional para adultos mayores en Colombia con atención personalizada y acompañamiento humano.",
    url: "/",
    siteName: "Acudimos",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo/logo-refactor.png",
        alt: "Acudimos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuidado domiciliario para adultos mayores en Colombia | Acudimos",
    description:
      "Cuidado domiciliario profesional para adultos mayores en Colombia con atención personalizada y acompañamiento humano.",
    images: ["/logo/logo-refactor.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M9DPM3L9');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9DPM3L9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
