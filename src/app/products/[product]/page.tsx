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
      images: [{ url: product.image, alt: product.name, width: 800, height: 600 }],
    },
    twitter: {
      card: "summary_large_image",
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { product: productSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  if (!product) notFound();

  const relatedProducts = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vastuvistainteriors.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://vastuvistainteriors.com/products/" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://vastuvistainteriors.com/products/${product.slug}/` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://vastuvistainteriors.com/products/${product.slug}/#service`,
    name: product.name,
    description: product.fullDesc,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://vastuvistainteriors.com/#business",
      name: "Vastu Vista Interiors",
      telephone: "+916290415915",
      address: {
        "@type": "PostalAddress",
        streetAddress: "19 Vivekananda Park, Amrabati, Naskarhat, Tiljala",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700039",
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "City", name: "Kolkata" },
    image: product.image,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "Kolkata",
      seller: {
        "@type": "LocalBusiness",
        "@id": "https://vastuvistainteriors.com/#business",
      },
    },
  };

  const jsonLd = serviceSchema;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ─── HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={`${product.name} in Kolkata`}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-14 pt-40">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-7" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-200">{product.name}</span>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#CCCCCC]/60" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#CCCCCC]/70 capitalize">{product.category}</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              {product.name}<br />
              <span className="text-[#C8C8C8] italic">in Kolkata.</span>
            </h1>
            <p className="text-gray-300/85 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              {product.shortDesc}. Available across 20+ locations in Kolkata by Vastu Vista Interiors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/916290415915?text=${encodeURIComponent(`Hi Vastu Vista Interiors! I'm interested in ${product.name} in Kolkata. Please share details and pricing.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1ebe5c] transition-all text-sm shadow-xl shadow-[#25D366]/25"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
                </svg>
                WhatsApp for Free Quote
              </a>
              <a href="tel:+916290415915"
                className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full border border-white/35 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all text-sm">
                Call +91 90381 27376
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESCRIPTION & FEATURES ── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">About This Product</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1] mb-6">
              Our {product.name}<br />Service
            </h2>
            <p className="text-[#555555] text-base leading-relaxed">{product.fullDesc}</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">What&apos;s Included</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1] mb-6">
              Everything You Get
            </h2>
            <div className="divide-y divide-[#E5E5E5]">
              {product.features.map((feature, i) => (
                <div key={feature} className="py-4 flex items-start gap-5">
                  <span className="text-xs font-mono text-[#8C8C8C] tracking-[0.15em] pt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#555555] text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION LINKS ── */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Coverage</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1]">
                Available Across<br />Kolkata
              </h2>
            </div>
            <p className="text-[#8C8C8C] text-base leading-relaxed lg:max-w-sm">
              Click your area to see location-specific details and get a tailored quote from our team.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
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

      {/* ─── RELATED PRODUCTS ── */}
      {relatedProducts.length > 0 && (
        <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <h2 className="text-2xl font-bold text-[#2D2D2D]">Related Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((rp) => (
                <Link key={rp.slug} href={`/products/${rp.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={rp.image} alt={rp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">{rp.name}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[#8C8C8C] text-xs leading-relaxed">{rp.shortDesc}</p>
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
