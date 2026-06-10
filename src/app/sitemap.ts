import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { locations } from "@/data/locations";
import { BASE_URL, LAST_UPDATED, asAbsoluteUrl } from "@/data/seo";
import { portfolioGalleryImages, siteImages } from "@/data/site-images";

export const dynamic = "force-static";

// Static launch date — never changes once site goes live
const STATIC_DATE = new Date("2025-06-01");

/**
 * Encode & as %26 so Unsplash/Pexels query-string URLs are valid XML.
 * encodeURI() does NOT encode & because it's a valid URI character,
 * but XML attribute values require it to be escaped.
 */
function xmlSafeUrl(url: string): string {
  return url.replace(/&/g, "%26");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [xmlSafeUrl(asAbsoluteUrl(siteImages.homeHero))],
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: STATIC_DATE,
      changeFrequency: "monthly",
      priority: 0.75,
      images: [
        xmlSafeUrl(asAbsoluteUrl(siteImages.aboutHero)),
        xmlSafeUrl(asAbsoluteUrl(siteImages.featureWallMain)),
      ],
    },
    {
      url: `${BASE_URL}/products/`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [xmlSafeUrl(asAbsoluteUrl(siteImages.productHero))],
    },
    {
      url: `${BASE_URL}/portfolio/`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: portfolioGalleryImages.slice(0, 12).map((image) =>
        xmlSafeUrl(asAbsoluteUrl(image.src))
      ),
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: STATIC_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [xmlSafeUrl(asAbsoluteUrl(siteImages.contactHero))],
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}/`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: [xmlSafeUrl(asAbsoluteUrl(p.image))],
  }));

  // Location pages rarely change — use a stable date to preserve crawl budget
  const locationPages: MetadataRoute.Sitemap = products.flatMap((p) =>
    locations.map((l) => ({
      url: `${BASE_URL}/products/${p.slug}/${l.slug}/`,
      lastModified: STATIC_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.65,
      images: [xmlSafeUrl(asAbsoluteUrl(p.image))],
    }))
  );

  return [...staticPages, ...productPages, ...locationPages];
}
