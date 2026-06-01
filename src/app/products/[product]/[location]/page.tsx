import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { locations } from "@/data/locations";
import ContactCTA from "@/components/ContactCTA";

interface Props {
  params: Promise<{ product: string; location: string }>;
}

export async function generateStaticParams() {
  const params: { product: string; location: string }[] = [];
  for (const product of products) {
    for (const location of locations) {
      params.push({ product: product.slug, location: location.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: productSlug, location: locationSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  const location = locations.find((l) => l.slug === locationSlug);
  if (!product || !location) return {};

  const title = `${product.name} in ${location.name} | Vastu Vista Interiors`;
  const description = `Looking for ${product.name} in ${location.name}, Kolkata? Vastu Vista Interiors provides expert ${product.name.toLowerCase()} services in ${location.name}. ${product.shortDesc}. Call for a free quote.`;

  // Cap description at 155 characters
  const descTruncated = description.length > 155 ? description.slice(0, 152) + "..." : description;

  return {
    title,
    description: descTruncated,
    alternates: {
      canonical: `https://vastuvistainteriors.com/products/${product.slug}/${location.slug}/`,
    },
    openGraph: {
      title,
      description: descTruncated,
      images: [{ url: product.image, alt: `${product.name} in ${location.name} Kolkata`, width: 800, height: 600 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      images: [product.image],
    },
  };
}

export default async function ProductLocationPage({ params }: Props) {
  const { product: productSlug, location: locationSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  const location = locations.find((l) => l.slug === locationSlug);
  if (!product || !location) notFound();

  const waLink = `https://wa.me/916290415915?text=${encodeURIComponent(
    `Hi Vastu Vista Interiors! I'm interested in ${product.name} in ${location.name}, Kolkata. Please share details and pricing.`
  )}`;

  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 8);
  const relatedProducts = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vastuvistainteriors.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://vastuvistainteriors.com/products/" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://vastuvistainteriors.com/products/${product.slug}/` },
      { "@type": "ListItem", position: 4, name: location.name, item: `https://vastuvistainteriors.com/products/${product.slug}/${location.slug}/` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://vastuvistainteriors.com/products/${product.slug}/${location.slug}/#service`,
    name: `${product.name} in ${location.name}`,
    description: `${product.shortDesc} in ${location.name}, Kolkata.`,
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
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    image: product.image,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: location.name,
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
            alt={`${product.name} in ${location.name} Kolkata`}
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
            <Link href={`/products/${product.slug}`} className="hover:text-white transition-colors">{product.name}</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-200">{location.name}</span>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#CCCCCC]/60" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#CCCCCC]/70">{location.name}, Kolkata</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              {product.name} in<br />
              <span className="text-[#C8C8C8] italic">{location.name}.</span>
            </h1>
            <p className="text-gray-300/85 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Expert {product.name.toLowerCase()} services in {location.name}, {location.area}. Vastu Vista
              Interiors delivers high-quality, customized interior solutions right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
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

      {/* ─── ABOUT & WHY CHOOSE US ── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">{location.name}</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1] mb-6">
              {product.name} in<br />{location.name}
            </h2>
            <p className="text-[#555555] text-base leading-relaxed mb-5">{product.fullDesc}</p>
            <p className="text-[#555555] text-base leading-relaxed">
              {location.description} At Vastu Vista Interiors, we bring our expertise directly to{" "}
              {location.name} residents and businesses, offering personalised {product.name.toLowerCase()} solutions
              that meet the unique demands and aesthetics of the area.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Why Choose Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1] mb-6">
              Our Promise in<br />{location.name}
            </h2>
            <div className="divide-y divide-[#E5E5E5]">
              {[
                { title: "Local Expertise", desc: `Multiple completed projects in ${location.name} — we understand local norms, material availability, and design preferences.` },
                { title: "On-Site Consultation", desc: `Our designers visit your home or office in ${location.name} for a free, no-obligation consultation and measurement.` },
                { title: "Transparent Pricing", desc: "Clear, itemised quotes with no hidden charges — we respect your budget." },
                { title: "Quality Materials", desc: "Premium materials and skilled craftsmen ensuring a durable, beautiful result." },
                { title: "Timely Completion", desc: "We commit to project timelines and hand over your transformed space on schedule." },
              ].map((item, i) => (
                <div key={item.title} className="py-4 flex items-start gap-5">
                  <span className="text-xs font-mono text-[#8C8C8C] tracking-[0.15em] pt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-[#2D2D2D] text-sm mb-1">{item.title}</p>
                    <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">What&apos;s Included</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1]">
                Our {product.name}<br />Service Features
              </h2>
            </div>
            <p className="text-[#8C8C8C] text-base leading-relaxed lg:max-w-sm">
              Every project we undertake in {location.name} comes with these carefully curated service elements.
            </p>
          </div>
          <div className="divide-y divide-[#E5E5E5] bg-white rounded-2xl border border-[#E5E5E5] px-8">
            {product.features.map((feature, i) => (
              <div key={feature} className="py-5 flex items-start gap-5">
                <span className="text-xs font-mono text-[#8C8C8C] tracking-[0.15em] pt-0.5 flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[#555555] text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OTHER LOCATIONS ── */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Coverage</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1]">
                {product.name} in<br />Other Locations
              </h2>
            </div>
            <p className="text-[#8C8C8C] text-base leading-relaxed lg:max-w-sm">
              We serve 20+ locations across Kolkata. Click your area for location-specific details and pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/products/${product.slug}/${loc.slug}`}
                className="bg-[#F8F8F8] border border-[#E5E5E5] text-[#2D2D2D] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D2D2D] hover:text-white hover:border-[#2D2D2D] transition-all duration-200"
              >
                {product.name} in {loc.name}
              </Link>
            ))}
            <Link
              href={`/products/${product.slug}`}
              className="bg-[#2D2D2D] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#555555] transition-all duration-200"
            >
              View All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ── */}
      {relatedProducts.length > 0 && (
        <section className="py-20 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <h2 className="text-2xl font-bold text-[#2D2D2D]">More Products in {location.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((rp) => (
                <Link key={rp.slug} href={`/products/${rp.slug}/${location.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={rp.image} alt={`${rp.name} in ${location.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">{rp.name}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[#8C8C8C] text-xs leading-relaxed">{location.name}, Kolkata</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        productName={product.name}
        locationName={location.name}
        heading={`Get ${product.name} in ${location.name}`}
        subtext={`Vastu Vista Interiors — trusted interior designers in ${location.name}, Kolkata. Free site visit and consultation available.`}
      />
    </>
  );
}
