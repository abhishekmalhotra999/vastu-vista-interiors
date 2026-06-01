import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vastuvistainteriors.com"),
  title: {
    default: "Best Interior Designer in Kolkata | Vastu Vista Interiors",
    template: "%s | Vastu Vista Interiors",
  },
  description:
    "Vastu Vista Interiors is the best interior designer in Kolkata. We offer home interior design, modular kitchen design, false ceiling, bedroom, living room, office and commercial interior design across 20+ locations in Kolkata.",
  openGraph: {
    type: "website",
    siteName: "Vastu Vista Interiors",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Premium interior design by Vastu Vista Interiors Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vastuvistainteriors.com/#business",
  name: "Vastu Vista Interiors",
  description:
    "Best interior designer in Kolkata offering home interior design, modular kitchen design, false ceiling, bedroom, living room and commercial interior design services across 20+ locations.",
  url: "https://vastuvistainteriors.com",
  telephone: "+919038127376",
  email: "info@vastuvistainteriors.com",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.5726",
    longitude: "88.3639",
  },
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919038127376",
    contactType: "customer service",
    availableLanguage: ["English", "Bengali", "Hindi"],
  },
  areaServed: [
    "Salt Lake", "New Town", "Rajarhat", "Ballygunge", "Alipore",
    "Park Street", "Behala", "Tollygunge", "Kasba", "Garia",
    "Jadavpur", "Dum Dum", "Lake Town", "Baguiati", "Barasat",
    "Howrah", "Beliaghata", "Park Circus", "Santoshpur", "Picnic Garden",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-[#555555] bg-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
