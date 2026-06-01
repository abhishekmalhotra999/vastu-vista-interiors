import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Interior Design Portfolio Kolkata | Vastu Vista Interiors",
  description:
    "View the portfolio of Vastu Vista Interiors — Kolkata's best interior design company. Gallery of residential and commercial interior projects across Kolkata.",
  alternates: {
    canonical: "https://vastuvistainteriors.com/portfolio/",
  },
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Interior Design Portfolio — Vastu Vista Interiors Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    alt: "Luxury living room interior design Kolkata",
    label: "Luxury Living Room",
    location: "Salt Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80",
    alt: "Modular kitchen design Kolkata",
    label: "Modular Kitchen",
    location: "New Town",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=700&q=80",
    alt: "Bedroom interior design Kolkata",
    label: "Master Bedroom",
    location: "Ballygunge",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
    alt: "Office interior decorators Kolkata",
    label: "Corporate Office",
    location: "Park Street",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
    alt: "Restaurant interior designer Kolkata",
    label: "Fine Dining Restaurant",
    location: "Alipore",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
    alt: "False ceiling design Kolkata bedroom",
    label: "False Ceiling Design",
    location: "Rajarhat",
  },
  {
    src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=700&q=80",
    alt: "Dining room interior design Kolkata",
    label: "Dining Room",
    location: "Tollygunge",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80",
    alt: "Café interior design Kolkata",
    label: "Café Interior",
    location: "Jadavpur",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80",
    alt: "Wallpaper installation interior design Kolkata",
    label: "Accent Wall & Wallpaper",
    location: "Kasba",
  },
  {
    src: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?auto=format&fit=crop&w=700&q=80",
    alt: "Wooden flooring interior Kolkata",
    label: "Wooden Flooring",
    location: "Behala",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
    alt: "Wall panel decoration interior Kolkata",
    label: "Wall Panel Feature",
    location: "Lake Town",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
    alt: "Reception area design Kolkata office",
    label: "Office Reception",
    location: "Howrah",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vastuvistainteriors.com/" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://vastuvistainteriors.com/portfolio/" },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ─── HERO ── */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryImages[0].src}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/85 to-[#1A1A1A]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#8C8C8C]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Our Work</p>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.05] mb-6">
                Interior Design<br />Portfolio
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-10">
                A curated gallery of residential and commercial interior design projects completed
                across Kolkata by Vastu Vista Interiors.
              </p>
              <div className="flex items-center pt-8 border-t border-white/15 gap-0">
                {[
                  { v: "500+", l: "Projects" },
                  { v: "12+", l: "Project Types" },
                  { v: "20+", l: "Locations" },
                ].map((s, i) => (
                  <div key={s.l} className="flex items-center">
                    <div className="pr-8">
                      <p className="text-3xl font-bold text-white leading-none">{s.v}</p>
                      <p className="text-xs text-gray-400 mt-1.5">{s.l}</p>
                    </div>
                    {i < 2 && <div className="h-8 w-px bg-white/15 mr-8" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {galleryImages.slice(0, 4).map((img) => (
                <div key={img.label} className="aspect-square overflow-hidden rounded-xl opacity-70">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ── */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={img.label}
                className={`break-inside-avoid mb-5 relative group overflow-hidden rounded-2xl ${
                  i % 4 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-bold text-base leading-none">{img.label}</p>
                  <p className="text-white/60 text-xs mt-1.5">{img.location}, Kolkata</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Love What You See? Let's Design Your Space"
        subtext="Get in touch with our team and start your interior transformation journey today."
      />
    </>
  );
}
