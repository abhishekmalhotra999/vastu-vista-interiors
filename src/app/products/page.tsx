import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import ContactCTA from "@/components/ContactCTA";
import { absoluteAsset, siteImages } from "@/data/site-images";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: `Interior Design Services in Kolkata | ${SITE_NAME}` },
  description:
    "Explore 20 interior design services in Kolkata: modular kitchen, false ceiling, wardrobes, bedroom, living room, office, restaurant & home renovation.",
  alternates: {
    canonical: `${BASE_URL}/products/`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/products/`,
    title: `Interior Design Services in Kolkata | ${SITE_NAME}`,
    description:
      "20 interior design services across Kolkata — residential, commercial, flooring, ceiling & renovation by Vastu Vista Interiors.",
    images: [
      {
        url: absoluteAsset("/interior-pics/WhatsApp Image 2026-05-24 at 10.17.45.jpeg"),
        width: 1200,
        height: 630,
        alt: "Interior Design Services in Kolkata — Vastu Vista Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Interior Design Services in Kolkata | ${SITE_NAME}`,
    description:
      "20 interior design services in Kolkata: modular kitchen, false ceiling, wardrobe, bedroom, office & renovation by Vastu Vista Interiors.",
    images: [absoluteAsset("/interior-pics/WhatsApp Image 2026-05-24 at 10.17.45.jpeg")],
  },
};

const categories = [
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "flooring", label: "Flooring" },
  { key: "ceiling", label: "Ceiling" },
  { key: "renovation", label: "Renovation" },
];

const productsBreadcrumbSchema = breadcrumbSchema([
  { name: "Home", url: `${BASE_URL}/` },
  { name: "Products", url: `${BASE_URL}/products/` },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/products/#servicelist`,
  name: "Interior Design Services in Kolkata",
  description: "20 professional interior design services for homes, offices and commercial spaces across Kolkata by Vastu Vista Interiors.",
  url: `${BASE_URL}/products/`,
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${BASE_URL}/products/${product.slug}/#service`,
      name: product.name,
      description: product.shortDesc,
      url: `${BASE_URL}/products/${product.slug}/`,
      image: product.image,
      provider: { "@id": `${BASE_URL}/#business` },
      areaServed: { "@type": "City", name: "Kolkata" },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* ─── HERO ── */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.productHero}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 lg:py-40">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#8C8C8C]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">What We Offer</p>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.05] mb-6">
              Interior Design<br />Products in Kolkata
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              From modular kitchen design and false ceiling installation to complete home renovation
              and commercial interiors — 20 expertly crafted products across 20+ Kolkata locations.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS BY CATEGORY ── */}
      {categories.map((cat, catIndex) => {
        const catProducts = products.filter((p) => p.category === cat.key);
        if (catProducts.length === 0) return null;
        return (
          <section
            key={cat.key}
            className={`py-20 px-6 sm:px-10 lg:px-16 ${catIndex % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                <div className="flex items-center gap-4">
                  <div className="h-px w-10 bg-[#2D2D2D]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">
                    {cat.label} Interiors
                  </h2>
                </div>
                <span className="text-xs font-medium text-[#8C8C8C] tracking-[0.2em] uppercase">
                  {catProducts.length} products
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {catProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <ContactCTA
        heading="Not Sure Which Product You Need?"
        subtext="Chat with our design consultants on WhatsApp — we'll help you figure out exactly what your space needs."
      />
    </>
  );
}
