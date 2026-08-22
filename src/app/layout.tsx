import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main_components/Navbar";
import Footer from "@/components/main_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.nrkcompany.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NRK Construction Company | Substation & Civil Infrastructure Experts",
    template: "%s | NRK Construction Company",
  },
  description:
    "NRK Construction Company specializes in civil construction works for AIS, GIS & GSS substations, powerhouse construction, RCC roads, foundations, and complete power infrastructure projects across India.",
  keywords: [
    "NRK Construction",
    "NRK Company",
    "NRKcompany.com",
    "substation civil works",
    "AIS substation construction",
    "GIS substation construction",
    "GSS substation construction",
    "power infrastructure India",
    "132kV substation",
    "220kV substation",
    "400kV substation",
    "UPPTCL contractor",
    "HVPNL contractor",
    "civil construction contractor India",
    "powerhouse construction",
    "RCC road construction",
    "foundation construction",
    "electrical civil works",
  ],
  authors: [{ name: "NRK Construction Company" }],
  creator: "NRK Construction Company",
  publisher: "NRK Construction Company",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "NRK Construction Company",
    title: "NRK Construction Company | Substation & Civil Infrastructure Experts",
    description:
      "Specialists in civil construction works for power substations, including AIS, GIS & GSS substations, powerhouse construction, RCC roads, and foundations across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NRK Construction Company – Power Infrastructure Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRK Construction Company | Substation & Civil Infrastructure Experts",
    description:
      "Specialists in civil construction works for power substations, powerhouse construction, RCC roads, and foundations across India.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Construction & Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data – Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NRK Construction Company",
              url: siteUrl,
              logo: `${siteUrl}/nrk_logo.png`,
              description:
                "NRK Construction Company specializes in civil construction for AIS, GIS & GSS substations, powerhouses, RCC roads, and complete power infrastructure projects across India.",
              email: "nrkcompanyconstruction@gmail.com",
              areaServed: "IN",
              knowsAbout: [
                "Substation Civil Works",
                "AIS GIS GSS Substations",
                "Powerhouse Construction",
                "Foundation & Structural Work",
                "RCC Road Construction",
                "Power Infrastructure",
              ],
              sameAs: [
                "https://www.linkedin.com/company/nrk-construction",
              ],
            }),
          }}
        />
        {/* Structured Data – Website (Sitelinks SearchBox) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NRK Construction Company",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
