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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[88vh] flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#CCCCCC] text-sm font-medium uppercase tracking-widest mb-4">
            Interior designers in Kolkata
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Best Interior Designer<br className="hidden sm:block" /> in Kolkata
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Welcome to <strong className="text-white">Vastu Vista Interiors</strong> — Kolkata&apos;s premier destination for
            home interior design Kolkata, creating stunning modern home interior Kolkata that reflect
            your personality and lifestyle. From elegant apartments to commercial spaces, we craft
            masterpieces that endure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919038127376?text=Hi%20Vastu%20Vista%20Interiors!%20I%27d%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1ebe5c] transition-colors text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
              </svg>
              Get Free Consultation
            </a>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 bg-transparent text-white font-semibold px-7 py-3.5 rounded-full border-2 border-white hover:bg-white hover:text-[#2D2D2D] transition-colors text-base"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#2D2D2D] py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-[#CCCCCC] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Our Interior Design Products in Kolkata
            </h2>
            <p className="text-[#8C8C8C] max-w-3xl mx-auto text-base leading-relaxed">
              From <strong className="text-[#555555]">modular kitchen design Kolkata</strong> to{" "}
              <strong className="text-[#555555]">bedroom interior design Kolkata</strong>,{" "}
              <strong className="text-[#555555]">living room interior design Kolkata</strong> to{" "}
              <strong className="text-[#555555]">false ceiling design Kolkata</strong> — our comprehensive
              services cover every corner of your home and business with expertise and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="inline-block bg-[#2D2D2D] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#555555] transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4 bg-[#F8F8F8]" id="why-us">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Why Choose Vastu Vista Interiors?
            </h2>
            <p className="text-[#8C8C8C] max-w-2xl mx-auto text-base">
              As the most trusted interior decoration company in Kolkata, we combine artistic vision
              with practical expertise to deliver transformative spaces across every budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="bg-white p-7 rounded-xl border border-[#E5E5E5] hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-[#2D2D2D] text-lg mb-2">{item.title}</h3>
                <p className="text-[#8C8C8C] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-16 px-4 bg-white" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">Portfolio Highlights</h2>
            <p className="text-[#8C8C8C] max-w-2xl mx-auto text-base">
              Explore a glimpse of our work — luxury interior designers in Kolkata at their finest,
              from stunning residential projects to beautiful commercial spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioImages.map((img) => (
              <div key={img.label} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-4 left-4 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="inline-block border-2 border-[#2D2D2D] text-[#2D2D2D] font-semibold px-8 py-3 rounded-full hover:bg-[#2D2D2D] hover:text-white transition-colors">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-16 px-4 bg-[#F8F8F8]" id="locations">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Interior Decorators Near Me — Serving All of Kolkata
            </h2>
            <p className="text-[#8C8C8C] max-w-2xl mx-auto text-base">
              Searching for <strong className="text-[#555555]">interior decorators near me</strong>?
              Vastu Vista Interiors serves 20+ locations across Kolkata. Our designers visit your
              location for a free on-site consultation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/products/modular-kitchen-design/${loc.slug}`}
                className="bg-white border border-[#E5E5E5] text-[#2D2D2D] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D2D2D] hover:text-white hover:border-[#2D2D2D] transition-all duration-200">
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-[#2D2D2D] text-base mb-2">{step.title}</h3>
                <p className="text-[#8C8C8C] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-7 rounded-xl border border-[#E5E5E5] shadow-sm">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#555555] text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#2D2D2D] text-sm">{t.name}</p>
                  <p className="text-[#8C8C8C] text-xs">{t.location}, Kolkata</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl p-6">
                <h3 className="font-semibold text-[#2D2D2D] text-base mb-2">{item.q}</h3>
                <p className="text-[#8C8C8C] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <ContactCTA
        heading="Start Your Dream Interior Project Today"
        subtext="Whether you need home renovation and interior Kolkata services, a luxury makeover, or a smart budget redesign — Vastu Vista Interiors is ready to transform your space."
      />
    </>
  );
}
