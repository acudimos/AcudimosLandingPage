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
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17948383754"
          strategy="afterInteractive"
        />
        <Script id="gtag-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17948383754');

            ${gaMeasurementId.startsWith("G-") ? `gtag('config', '${gaMeasurementId}');` : ""}
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function (url, target) {
              if (typeof url === "undefined") {
                return false;
              }

              var isBlank = target === "_blank";
              if (isBlank) {
                window.open(url, "_blank", "noopener,noreferrer");
              }

              var callback = function () {
                if (!isBlank) {
                  window.location = url;
                }
              };

              if (typeof window.gtag === "function") {
                var payload = {
                  send_to: "AW-17948383754/v07hCKjaj_cbEIq0uu5C",
                  value: 1.0,
                  currency: "COP",
                };
                if (!isBlank) {
                  payload.event_callback = callback;
                }
                window.gtag("event", "conversion", payload);
              } else if (!isBlank) {
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      
      </body>
    </html>
  );
}
