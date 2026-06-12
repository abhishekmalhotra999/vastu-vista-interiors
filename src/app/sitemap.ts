import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { locations } from "@/data/locations";
import { BASE_URL, LAST_UPDATED } from "@/data/seo";

export const dynamic = "force-static";

const STATIC_DATE = new Date("2025-06-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about/`, lastModified: STATIC_DATE, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/products/`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/portfolio/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact/`, lastModified: STATIC_DATE, changeFrequency: "monthly", priority: 0.7 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}/`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = products.flatMap((p) =>
    locations.map((l) => ({
      url: `${BASE_URL}/products/${p.slug}/${l.slug}/`,
      lastModified: STATIC_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  return [...staticPages, ...productPages, ...locationPages];
}
