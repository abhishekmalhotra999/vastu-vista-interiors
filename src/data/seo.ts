import { locations } from "@/data/locations";
import { products } from "@/data/products";
import { absoluteAsset } from "@/data/site-images";

export const BASE_URL = "https://vastuvista.in";
export const SITE_NAME = "Vastu Vista Interiors";
export const DEFAULT_OG_IMAGE = absoluteAsset(
  "/new_images/False_ceiling/WhatsApp Image 2026-06-03 at 11.59.40 (1).jpeg"
);
export const LAST_UPDATED = new Date("2026-06-04");

export const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: "19 Vivekananda Park, Amrabati, Naskarhat, Tiljala",
  addressLocality: "Kolkata",
  addressRegion: "West Bengal",
  postalCode: "700039",
  addressCountry: "IN",
};

export const serviceAreaNames = locations.map((location) => location.name);

export function canonical(path = "/") {
  return `${BASE_URL}${path}`;
}

export function asAbsoluteUrl(url: string) {
  return absoluteAsset(url);
}

export function truncateDescription(text: string, maxLength = 155) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trimEnd()}...`;
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Single authoritative LocalBusiness schema — injected in layout.tsx
 * so it appears on every page. This is the definitive entity definition.
 * Do NOT add additional LocalBusiness schemas on individual pages.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#business`,
  name: SITE_NAME,
  alternateName: "Vastu Vista Interiors Kolkata",
  description:
    "Interior design company in Kolkata offering modular kitchens, false ceilings, wardrobes, bedrooms, living rooms, offices, restaurants and full home renovation services.",
  url: BASE_URL,
  telephone: "+916290415915",
  email: "info@vastuvistainteriors.com",
  image: DEFAULT_OG_IMAGE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/assets/vastu-vista-logo.png`,
    width: 1622,
    height: 531,
  },
  priceRange: "Rs.999/sqft+",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
  address: businessAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.5726",
    longitude: "88.3639",
  },
  foundingDate: "2014",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 50,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+916290415915",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Bengali", "Hindi"],
  },
  sameAs: [
    "https://wa.me/916290415915",
  ],
  areaServed: serviceAreaNames.map((name) => ({
    "@type": "Place",
    name: `${name}, Kolkata`,
  })),
  makesOffer: products.map((product) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: product.name,
      url: canonical(`/products/${product.slug}/`),
    },
  })),
};
