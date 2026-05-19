import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { locations } from "@/data/locations";

export const dynamic = "force-static";

const BASE_URL = "https://vastuvistainteriors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/products/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/portfolio/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
      url: `${BASE_URL}/products/${p.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = products.flatMap((p) =>
    locations.map((l) => ({
      url: `${BASE_URL}/products/${p.slug}/${l.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  return [...staticPages, ...productPages, ...locationPages];
}
