import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import ContactCTA from "@/components/ContactCTA";
import { products } from "@/data/products";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Best Interior Designer in Kolkata | Vastu Vista Interiors",
  description:
    "Vastu Vista Interiors — the best interior designer in Kolkata. Expert home interior design, modular kitchen design, false ceiling, bedroom, living room, office & commercial interior design across Kolkata.",
  alternates: {
    canonical: "https://vastuvistainteriors.com/",
  },
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Best interior designer in Kolkata — Vastu Vista Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years of Excellence" },
  { value: "20+", label: "Locations Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const whyChooseItems = [
  {
    icon: "💰",
    title: "Affordable Excellence",
    desc: "As reliable affordable interior designers Kolkata, we believe great design should be accessible to everyone. Competitive, transparent pricing with no hidden costs.",
  },
  {
    icon: "✨",
    title: "Luxury Craftsmanship",
    desc: "Our luxury interior designers in Kolkata use only premium materials, finishes, and furnishings to create truly opulent spaces that stand apart.",
  },
  {
    icon: "🔑",
    title: "Turnkey Solutions",
    desc: "We provide complete turnkey interior solutions Kolkata — handling every stage from initial concept and design to procurement, execution, and final handover.",
  },
  {
    icon: "🏢",
    title: "Commercial Expertise",
    desc: "From office interior decorators Kolkata to commercial interior design Kolkata for retail, hospitality, and corporate environments — we handle them all.",
  },
  {
    icon: "📐",
    title: "Budget-Friendly Packages",
    desc: "Looking for a low budget interior designer Kolkata? We offer tiered packages starting from Rs.999/sqft with premium results and zero compromise on quality.",
  },
  {
    icon: "🏆",
    title: "Decade of Trust",
    desc: "As a premier interior decoration company in Kolkata with over a decade of experience, we have earned the trust of 500+ happy families and businesses.",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "We begin with a detailed discussion to understand your vision, needs, lifestyle, and budget." },
  { step: "02", title: "Design & Planning", desc: "Our designers create 2D/3D layouts, mood boards, and material palettes tailored to your space." },
  { step: "03", title: "Execution", desc: "Skilled craftsmen bring the design to life with precision, quality materials, and regular checks." },
  { step: "04", title: "Handover", desc: "We do a thorough walk-through, address any finishing touches, and hand over on time." },
];

const testimonials = [
  {
    name: "Priya Banerjee",
    location: "Salt Lake",
    rating: 5,
    text: "Vastu Vista Interiors completely transformed our 3BHK in Salt Lake. The modular kitchen and false ceiling in the living room are absolutely stunning. Professional, punctual, and within budget!",
  },
  {
    name: "Rahul Agarwal",
    location: "New Town",
    rating: 5,
    text: "We hired them for our office cabin interior in New Town and were blown away. The space feels premium and inspires productivity. True turnkey solution — we did not have to worry about anything.",
  },
  {
    name: "Sneha Ghosh",
    location: "Ballygunge",
    rating: 5,
    text: "Wanted luxury results on a moderate budget and was skeptical. But Vastu Vista Interiors delivered beyond expectations — from the bedroom interior to dining room and wallpaper. 10 out of 10!",
  },
];

const faqItems = [
  {
    q: "Do you handle 2BHK interior design in Kolkata?",
    a: "Yes! 2BHK interior design Kolkata is one of our most in-demand services. We specialize in optimizing compact apartments with smart layouts, built-in storage, modular kitchens, and stylish finishes that make small spaces feel open and luxurious.",
  },
  {
    q: "Do you specialize in flat interior design in Kolkata?",
    a: "Absolutely. Flat interior design Kolkata is at the core of our work. Whether it is a studio apartment, a compact 1BHK, or a spacious 4BHK flat, we create customized interior plans that maximize every square foot and match your personal style.",
  },
  {
    q: "What does your false ceiling design service include?",
    a: "Our false ceiling design Kolkata service covers gypsum board ceilings, POP false ceilings, tray ceilings, coffered designs, and LED-integrated cove lighting. We use quality materials and skilled craftsmen for smooth, durable, and visually stunning results.",
  },
  {
    q: "Do you do restaurant interior design in Kolkata?",
    a: "Yes — as a leading restaurant interior designer Kolkata, we design immersive concept-driven dining environments that enhance guest experience and strengthen brand identity, from seating layout and bar design to lighting and acoustics.",
  },
  {
    q: "What does your home renovation service cover?",
    a: "Our home renovation and interior Kolkata service is a complete package — civil work, flooring, kitchen and bathroom upgrades, false ceilings, wall treatments, electrical coordination, and furniture installation. We manage all contractors and timelines.",
  },
  {
    q: "How quickly can you complete an interior project?",
    a: "A single room typically takes 2–3 weeks, while a full-home interior project takes 6–10 weeks. We provide a detailed project timeline during consultation and are committed to on-time delivery.",
  },
];

const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", alt: "Luxury living room interior design Kolkata", label: "Living Room" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80", alt: "Modular kitchen design Kolkata", label: "Modular Kitchen" },
  { src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=600&q=80", alt: "Bedroom interior design Kolkata", label: "Master Bedroom" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", alt: "Office interior design Kolkata", label: "Corporate Office" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", alt: "Restaurant interior designer Kolkata", label: "Restaurant" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80", alt: "False ceiling design Kolkata", label: "False Ceiling" },
];

const marqueeItems = [
  "Modular Kitchen Design", "False Ceiling Installation", "Bedroom Interior",
  "Living Room Design", "Office Interiors", "Restaurant Design",
  "Wooden Flooring", "Wallpaper Installation", "Customized Wardrobes",
  "Home Renovation", "TV Unit Design", "Wall Panel Decoration",
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://vastuvistainteriors.com/#website",
  name: "Vastu Vista Interiors",
  url: "https://vastuvistainteriors.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://vastuvistainteriors.com/products/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Customer Reviews — Vastu Vista Interiors",
  itemListElement: testimonials.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
      itemReviewed: {
        "@id": "https://vastuvistainteriors.com/#business",
      },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=90"
            alt="Premium interior design by Vastu Vista Interiors Kolkata"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 pt-40">
          <div className="max-w-2xl xl:max-w-3xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px w-10 bg-[#CCCCCC]/60 flex-shrink-0" />
              <p className="text-[#CCCCCC] text-xs sm:text-sm font-medium uppercase tracking-[0.28em]">
                Kolkata&apos;s Premier Interior Studio
              </p>
            </div>
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold text-white leading-[1.04] tracking-tight mb-7">
              Best Interior<br />
              Designer in<br />
              <span className="text-[#C8C8C8] italic">Kolkata.</span>
            </h1>
            <p className="text-gray-300/85 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              <strong className="text-white font-semibold">Vastu Vista Interiors</strong> — trusted by
              500+ families and businesses for exceptional home and commercial interiors that blend
              aesthetics with function, across 20+ Kolkata locations.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
              <a
                href="https://wa.me/916290415915?text=Hi%20Vastu%20Vista%20Interiors!%20I%27d%20like%20a%20free%20consultation."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1ebe5c] transition-all duration-200 text-sm sm:text-base shadow-xl shadow-[#25D366]/30"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
                </svg>
                Get Free Consultation
              </a>
              <Link
                href="/portfolio"
                className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full border border-white/35 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base"
              >
                View Our Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-0 gap-y-5 pt-8 border-t border-white/15">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="pr-8">
                    <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">{stat.label}</p>
                  </div>
                  {i < stats.length - 1 && <div className="h-9 w-px bg-white/15 mr-8 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3">
          <div className="h-14 w-px bg-gradient-to-b from-white/40 to-transparent" />
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.25em]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Scroll
          </p>
        </div>
      </section>

      {/* ─── MARQUEE TAPE ────────────────────────────────────── */}
      <div className="bg-[#111111] border-t border-white/5 py-4 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-gray-500 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase px-8">{item}</span>
              <span className="text-gray-700 text-[10px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PRODUCTS ────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">What We Offer</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.1]">
                Interior Design<br />Products in Kolkata
              </h2>
            </div>
            <div className="lg:max-w-sm">
              <p className="text-[#8C8C8C] text-base leading-relaxed mb-6">
                From <strong className="text-[#555555]">modular kitchen design Kolkata</strong> and{" "}
                <strong className="text-[#555555]">false ceiling design Kolkata</strong> to complete home
                renovation — 20 expertly crafted design products across Kolkata.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-[#2D2D2D] font-semibold text-sm border-b border-[#2D2D2D] pb-0.5 hover:text-[#8C8C8C] hover:border-[#8C8C8C] transition-colors"
              >
                View all 20 products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#2D2D2D] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors text-sm"
            >
              Explore All 20 Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#1A1A1A]" id="why-us">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#8C8C8C]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Our Commitment</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
                Why Choose<br />Vastu Vista?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                As the most trusted interior decoration company in Kolkata, we combine artistic vision
                with practical expertise to deliver transformative spaces at every budget — from
                affordable interior designers Kolkata to luxury interior designers Kolkata.
              </p>
              <a
                href="https://wa.me/916290415915?text=Hi%20Vastu%20Vista%20Interiors!%20I%27d%20like%20to%20know%20more%20about%20your%20services."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full hover:bg-[#F0F0F0] transition-colors text-sm"
              >
                Talk to Our Experts
              </a>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {whyChooseItems.map((item, i) => (
                <div key={item.title} className="border-t border-white/10 py-8">
                  <p className="text-[#555555] text-xs font-mono mb-3 tracking-[0.2em]">0{i + 1}</p>
                  <h3 className="font-bold text-white text-base mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ───────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8]" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Our Work</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.1]">
                Portfolio<br />Highlights
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#2D2D2D] font-semibold text-sm border-b border-[#2D2D2D] pb-0.5 hover:text-[#8C8C8C] hover:border-[#8C8C8C] transition-colors self-start lg:self-end"
            >
              View Full Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large featured */}
            <div className="md:col-span-7 relative group overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={portfolioImages[0].src} alt={portfolioImages[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-bold text-xl leading-none">{portfolioImages[0].label}</span>
                <p className="text-white/55 text-xs mt-1.5">Vastu Vista Interiors, Kolkata</p>
              </div>
            </div>
            {/* Right column: 2 stacked */}
            <div className="md:col-span-5 grid grid-rows-2 gap-4">
              {[portfolioImages[1], portfolioImages[2]].map((img) => (
                <div key={img.label} className="relative group overflow-hidden rounded-2xl min-h-[180px]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-white font-semibold text-sm">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom 3 equal */}
            {[portfolioImages[3], portfolioImages[4], portfolioImages[5]].map((img) => (
              <div key={img.label} className="md:col-span-4 relative group overflow-hidden rounded-2xl aspect-[4/3]">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold text-sm">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AREAS WE SERVE ──────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white" id="locations">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Coverage</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.1] mb-6">
                Serving All<br />of Kolkata
              </h2>
              <p className="text-[#8C8C8C] text-base leading-relaxed mb-8 max-w-md">
                Searching for <strong className="text-[#555555]">interior decorators near me</strong>?
                We serve 20+ locations across Kolkata with free on-site consultations — from South Kolkata
                and Salt Lake to Howrah and Barasat.
              </p>
              <a
                href="https://wa.me/916290415915?text=Hi%21%20I%27d%20like%20to%20check%20if%20you%20serve%20my%20area."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2D2D2D] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1A1A1A] transition-colors text-sm"
              >
                Check Your Area
              </a>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/products/modular-kitchen-design/${loc.slug}`}
                  className="bg-[#F8F8F8] border border-[#E5E5E5] text-[#2D2D2D] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D2D2D] hover:text-white hover:border-[#2D2D2D] transition-all duration-200"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">How We Work</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.1]">
                Our Design<br />Process
              </h2>
            </div>
            <p className="text-[#8C8C8C] text-base leading-relaxed lg:max-w-sm">
              A structured, client-centric process that ensures your project is delivered on time,
              within budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <p className="absolute -top-4 -left-2 text-[7rem] font-bold text-[#EBEBEB] leading-none select-none pointer-events-none">
                  {step.step}
                </p>
                <div className="relative pt-14">
                  <div className="w-2 h-2 rounded-full bg-[#2D2D2D] mb-5" />
                  <h3 className="font-bold text-[#2D2D2D] text-xl mb-3">{step.title}</h3>
                  <p className="text-[#8C8C8C] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#8C8C8C]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Client Reviews</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1]">
                What Our<br />Clients Say
              </h2>
            </div>
            <p className="text-gray-500 text-sm lg:max-w-xs leading-relaxed">
              Trusted by 500+ families and businesses across Kolkata. Every review reflects a
              transformed space and a delighted client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {testimonials.map((t) => (
              <div key={t.name} className="px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-[1.85] mb-8 flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.location}, Kolkata</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white" id="faq">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Common Questions</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.1] mb-6">
                Frequently<br />Asked<br />Questions
              </h2>
              <p className="text-[#8C8C8C] text-base leading-relaxed mb-8">
                Have more questions? We&apos;re happy to walk you through everything in a free,
                no-obligation consultation.
              </p>
              <a
                href="https://wa.me/916290415915?text=Hi%2C%20I%20have%20some%20questions%20about%20your%20interior%20design%20services."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#2D2D2D] text-[#2D2D2D] font-semibold px-7 py-3.5 rounded-full hover:bg-[#2D2D2D] hover:text-white transition-colors text-sm"
              >
                Ask a Question
              </a>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#E5E5E5]">
              {faqItems.map((item) => (
                <div key={item.q} className="py-8">
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-3">{item.q}</h3>
                  <p className="text-[#8C8C8C] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <ContactCTA
        heading="Start Your Dream Interior Project Today"
        subtext="Whether you need home renovation and interior Kolkata services, a luxury makeover, or a smart budget redesign — Vastu Vista Interiors is ready to transform your space."
      />
    </>
  );
}
