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

  const title = `${product.name} in ${location.name}, Kolkata | Vastu Vista Interiors`;
  const description = `Looking for ${product.name} in ${location.name}, Kolkata? Vastu Vista Interiors provides expert ${product.name.toLowerCase()} services to homes and businesses in ${location.name}. ${product.shortDesc}. Get a free quote today.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://vastuvistainteriors.com/products/${product.slug}/${location.slug}/`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: product.image, alt: `${product.name} in ${location.name} Kolkata` }],
    },
  };
}

export default async function ProductLocationPage({ params }: Props) {
  const { product: productSlug, location: locationSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  const location = locations.find((l) => l.slug === locationSlug);
  if (!product || !location) notFound();

  const waLink = `https://wa.me/919038127376?text=${encodeURIComponent(
    `Hi Vastu Vista Interiors! I'm interested in ${product.name} in ${location.name}, Kolkata. Please share details and pricing.`
  )}`;

  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 8);
  const relatedProducts = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${product.name} in ${location.name}`,
    description: `${product.shortDesc} in ${location.name}, Kolkata.`,
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
    areaServed: {
      "@type": "City",
      name: location.name,
    },
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
          <nav className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <Link href={`/products/${product.slug}`} className="hover:text-white transition-colors">{product.name}</Link>
            <span>/</span>
            <span className="text-gray-200">{location.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {product.name} in {location.name}, Kolkata
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            Expert {product.name.toLowerCase()} services in {location.name}, {location.area}. Vastu Vista
            Interiors delivers high-quality, affordable, and customized interior solutions right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1ebe5c] transition-colors text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
              </svg>
              WhatsApp Free Quote
            </a>
            <a href="tel:+919038127376"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-white/20 transition-colors text-sm">
              Call +91 90381 27376
            </a>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
              {product.name} in {location.name}
            </h2>
            <p className="text-[#555555] text-base leading-relaxed mb-4">
              {product.fullDesc}
            </p>
            <p className="text-[#555555] text-base leading-relaxed">
              {location.description} At Vastu Vista Interiors, we bring our expertise directly to{" "}
              {location.name} residents and businesses, offering personalized {product.name.toLowerCase()} solutions
              that meet the unique demands and aesthetics of the area.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
              Why Choose Us for {product.name} in {location.name}?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-[#555555] text-sm">
                  <strong className="text-[#2D2D2D]">Local Expertise:</strong> We have completed multiple projects in {location.name} and understand the local building norms, material availability, and design preferences.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-[#555555] text-sm">
                  <strong className="text-[#2D2D2D]">On-Site Consultation:</strong> Our designers visit your home or office in {location.name} for a free, no-obligation consultation and measurement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-[#555555] text-sm">
                  <strong className="text-[#2D2D2D]">Transparent Pricing:</strong> Clear, itemized quotes with no hidden charges — we respect your budget.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-[#555555] text-sm">
                  <strong className="text-[#2D2D2D]">Quality Materials:</strong> We source premium materials and use skilled craftsmen ensuring a durable, beautiful result.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-[#555555] text-sm">
                  <strong className="text-[#2D2D2D]">Timely Completion:</strong> We commit to project timelines and handover your beautifully transformed space on schedule.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-7 text-center">
            What&apos;s Included in Our {product.name} Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, i) => (
              <div key={i} className="bg-white border border-[#E5E5E5] rounded-xl p-5 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#2D2D2D] text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-[#555555] text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center">
            Our Process for {location.name} Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", title: "Free Consultation", desc: `We visit your property in ${location.name} for a detailed discussion and free measurement.` },
              { n: "02", title: "Design Proposal", desc: "We create a customized design plan with 3D visuals and itemized quote within 48 hours." },
              { n: "03", title: "Execution", desc: "Our skilled team handles all work with quality materials and daily progress updates." },
              { n: "04", title: "Handover", desc: `We complete a final walk-through and hand over your transformed space in ${location.name} on time.` },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center font-bold mx-auto mb-3">
                  {step.n}
                </div>
                <h3 className="font-semibold text-[#2D2D2D] text-sm mb-2">{step.title}</h3>
                <p className="text-[#8C8C8C] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline WhatsApp CTA */}
      <section className="py-10 px-4 bg-[#F8F8F8] border-y border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-semibold text-[#2D2D2D] mb-3 text-lg">
            Get a Free Quote for {product.name} in {location.name}
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1ebe5c] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
            </svg>
            WhatsApp Us for {location.name}
          </a>
        </div>
      </section>

      {/* Other locations for this product */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-5">
            {product.name} in Other Kolkata Locations
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherLocations.map((loc) => (
              <Link key={loc.slug} href={`/products/${product.slug}/${loc.slug}`}
                className="bg-[#F8F8F8] border border-[#E5E5E5] text-[#555555] text-sm px-4 py-2 rounded-full hover:bg-[#2D2D2D] hover:text-white hover:border-[#2D2D2D] transition-all">
                {product.name} in {loc.name}
              </Link>
            ))}
            <Link href={`/products/${product.slug}`}
              className="bg-[#2D2D2D] text-white text-sm px-4 py-2 rounded-full hover:bg-[#555555] transition-colors">
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* Related products in same location */}
      {relatedProducts.length > 0 && (
        <section className="py-12 px-4 bg-[#F8F8F8]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-5">
              More Products in {location.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedProducts.map((rp) => (
                <Link key={rp.slug} href={`/products/${rp.slug}/${location.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-[#E5E5E5] hover:shadow-md transition-shadow">
                  <div className="h-28 overflow-hidden">
                    <img src={rp.image} alt={`${rp.name} in ${location.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <p className="font-medium text-[#2D2D2D] text-xs leading-snug">{rp.name}</p>
                    <p className="text-[#8C8C8C] text-xs mt-0.5">{location.name}</p>
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
        heading={`Transform Your Space with ${product.name} in ${location.name}`}
        subtext={`Vastu Vista Interiors — trusted interior designers serving ${location.name}, Kolkata. Free site visit and consultation available.`}
      />
    </>
  );
}
