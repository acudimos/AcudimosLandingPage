import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
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
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function (url, target) {
              var callback = function () {
                if (typeof url !== "undefined") {
                  if (target === "_blank") {
                    window.open(url, "_blank", "noopener,noreferrer");
                  } else {
                    window.location = url;
                  }
                }
              };
              if (typeof window.gtag === "function") {
                window.gtag("event", "conversion", {
                  send_to: "AW-17948383754/v07hCKjaj_cbEIq0uu5C",
                  value: 1.0,
                  currency: "COP",
                  event_callback: callback,
                });
              } else {
                callback();
              }
              return false;
            };

            window.addEventListener("click", function (event) {
              var target = event.target;
              if (!target) return;
              var link = target.closest && target.closest('a[data-gtag-conversion="whatsapp"]');
              if (!link) return;
              event.preventDefault();
              window.gtag_report_conversion(link.getAttribute("href"), link.getAttribute("target"));
            });
          `}
        </Script>
      </body>
      <GoogleAnalytics  gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
    </html>
  );
}
