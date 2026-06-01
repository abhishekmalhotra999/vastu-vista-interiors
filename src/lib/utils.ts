import { products, Product } from "@/data/products";
import { locations, Location } from "@/data/locations";

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function generateWhatsAppLink(productName?: string, locationName?: string): string {
  const base = "https://wa.me/916290415915";
  if (productName && locationName) {
    const text = encodeURIComponent(
      `Hi Vastu Vista Interiors! I'm interested in ${productName} services in ${locationName}, Kolkata. Please share details and pricing.`
    );
    return `${base}?text=${text}`;
  }
  if (productName) {
    const text = encodeURIComponent(
      `Hi Vastu Vista Interiors! I'm interested in ${productName} services. Please share details and pricing.`
    );
    return `${base}?text=${text}`;
  }
  const text = encodeURIComponent(
    "Hi Vastu Vista Interiors! I'm interested in your interior design services. Please share details."
  );
  return `${base}?text=${text}`;
}

export function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export { products, locations };
export type { Product, Location };
