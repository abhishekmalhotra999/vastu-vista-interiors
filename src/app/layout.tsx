import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { BASE_URL, DEFAULT_OG_IMAGE, localBusinessSchema, SITE_NAME } from "@/data/seo";

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
  metadataBase: new URL(BASE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `Best Interior Designer in Kolkata | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Vastu Vista Interiors — top interior design company in Kolkata for modular kitchens, false ceilings, wardrobes, offices, restaurants & full home renovation. Free consultation.",
  alternates: {
    canonical: BASE_URL,
  },
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: BASE_URL,
    title: `Best Interior Designer in Kolkata | ${SITE_NAME}`,
    description:
      "Top interior design company in Kolkata. Modular kitchens, false ceilings, wardrobes, offices & home renovation. 500+ projects, 20+ locations.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Premium interior design by Vastu Vista Interiors in Kolkata",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Interior Designer in Kolkata | ${SITE_NAME}`,
    description:
      "Top interior designers in Kolkata. Modular kitchens, false ceilings, wardrobes & home renovation. Free consultation available.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Interior Design",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
