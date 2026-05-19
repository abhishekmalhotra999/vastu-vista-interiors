import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://vastuvistainteriors.com"),
  title: {
    default: "Best Interior Designer in Kolkata | Vastu Vista Interiors",
    template: "%s | Vastu Vista Interiors",
  },
  description:
    "Vastu Vista Interiors is the best interior designer in Kolkata. We offer home interior design, modular kitchen design, false ceiling, bedroom, living room, office and commercial interior design across 20+ locations in Kolkata.",
  keywords: [
    "interior designers in Kolkata",
    "best interior designer in Kolkata",
    "home interior design Kolkata",
    "interior decoration company in Kolkata",
    "affordable interior designers Kolkata",
    "modular kitchen design Kolkata",
    "false ceiling design Kolkata",
    "bedroom interior design Kolkata",
    "living room interior design Kolkata",
    "turnkey interior solutions Kolkata",
  ],
  openGraph: {
    type: "website",
    siteName: "Vastu Vista Interiors",
    locale: "en_IN",
    images: [
      {
        url: "/assets/vastu-vista-logo.png",
        width: 400,
        height: 120,
        alt: "Vastu Vista Interiors Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vastu Vista Interiors",
  description:
    "Best interior designer in Kolkata offering home interior design, modular kitchen design, false ceiling, bedroom, living room and commercial interior design services.",
  url: "https://vastuvistainteriors.com",
  telephone: "+919038127376",
  image: "https://vastuvistainteriors.com/assets/vastu-vista-logo.png",
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
  areaServed: [
    "Salt Lake", "New Town", "Rajarhat", "Ballygunge", "Alipore",
    "Park Street", "Behala", "Tollygunge", "Kasba", "Garia",
    "Jadavpur", "Dum Dum", "Lake Town", "Baguiati", "Barasat",
    "Howrah", "Beliaghata", "Park Circus", "Santoshpur", "Picnic Garden",
  ],
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
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
