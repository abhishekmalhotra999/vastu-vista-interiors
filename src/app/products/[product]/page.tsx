import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { locations } from "@/data/locations";
import ContactCTA from "@/components/ContactCTA";

interface Props {
  params: Promise<{ product: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: productSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDesc,
    alternates: {
      canonical: `https://vastuvistainteriors.com/products/${product.slug}/`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDesc,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { product: productSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  if (!product) notFound();

  const relatedProducts = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    description: product.fullDesc,
    provider: {
      "@type": "LocalBusiness",
      name: "Vastu Vista Interiors",
      telephone: "+919038127376",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
    },
    areaServed: "Kolkata",
    image: product.image,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative py-24 px-4"
        style={{
          backgroundImage: `url('${product.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-200">{product.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {product.name} in Kolkata
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            {product.shortDesc}. Available across 20+ locations in Kolkata by Vastu Vista Interiors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/919038127376?text=${encodeURIComponent(`Hi Vastu Vista Interiors! I'm interested in ${product.name} in Kolkata. Please share details and pricing.`)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1ebe5c] transition-colors text-sm"
            >
              WhatsApp for Free Quote
            </a>
            <a
              href="tel:+919038127376"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-white/20 transition-colors text-sm"
            >
              Call +91 90381 27376
            </a>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
              About Our {product.name} Service
            </h2>
            <p className="text-[#555555] text-base leading-relaxed">{product.fullDesc}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">What&apos;s Included</h2>
            <ul className="space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-[#555555] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="py-14 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-3">
              {product.name} — Available in These Kolkata Locations
            </h2>
            <p className="text-[#8C8C8C] text-sm max-w-xl mx-auto">
              Click your area to see location-specific details, pricing context, and get a tailored quote.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/products/${product.slug}/${loc.slug}`}
                className="bg-white border border-[#E5E5E5] text-[#2D2D2D] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D2D2D] hover:text-white hover:border-[#2D2D2D] transition-all duration-200"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-7">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.slug} href={`/products/${rp.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-[#E5E5E5] hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#2D2D2D] text-sm">{rp.name}</h3>
                    <p className="text-[#8C8C8C] text-xs mt-1">{rp.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        productName={product.name}
        heading={`Get ${product.name} in Kolkata`}
        subtext={`Contact Vastu Vista Interiors for expert ${product.name} services across Kolkata. Free consultation available.`}
      />
    </>
  );
}
