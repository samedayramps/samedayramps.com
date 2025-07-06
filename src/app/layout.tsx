import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Same Day Ramps - Wheelchair Ramp Rentals Dallas-Fort Worth",
  description: "Fast, professional wheelchair ramp rentals in Dallas-Fort Worth. Installation in as little as 24 hours. Professional-grade aluminum ramps for temporary accessibility needs.",
  keywords: [
    "wheelchair ramp rental",
    "Dallas Fort Worth",
    "temporary ramp",
    "mobility access",
    "hospital discharge",
    "aluminum ramp",
    "accessibility rental",
    "same day installation"
  ],
  authors: [{ name: "Same Day Ramps" }],
  creator: "Same Day Ramps",
  publisher: "Same Day Ramps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://samedayramps.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Same Day Ramps - Wheelchair Ramp Rentals Dallas-Fort Worth",
    description: "Fast, professional wheelchair ramp rentals in Dallas-Fort Worth. Installation in as little as 24 hours. Professional-grade aluminum ramps for temporary accessibility needs.",
    url: "https://samedayramps.com",
    siteName: "Same Day Ramps",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional wheelchair ramp installation by Same Day Ramps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Same Day Ramps - Wheelchair Ramp Rentals Dallas-Fort Worth",
    description: "Fast, professional wheelchair ramp rentals in Dallas-Fort Worth. Installation in as little as 24 hours.",
    images: ["/hero.webp"],
  },
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
  verification: {
    google: "your-google-site-verification-code",
  },
};

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Same Day Ramps",
  "description": "Professional wheelchair ramp rentals with same-day installation in Dallas-Fort Worth area",
  "url": "https://samedayramps.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.7767",
    "longitude": "-96.7970"
  },
  "openingHours": "Mo-Su 24:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "32.7767",
      "longitude": "-96.7970"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wheelchair Ramp Rental Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Temporary Wheelchair Ramp Rental",
          "description": "Professional aluminum wheelchair ramp rental with installation"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
