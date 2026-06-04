import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import { absoluteAsset, portfolioGalleryImages, siteImages } from "@/data/site-images";

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
        url: absoluteAsset("/interior-pics/WhatsApp Image 2026-05-24 at 10.17.43.jpeg"),
        width: 1200,
        height: 630,
        alt: "Interior Design Portfolio — Vastu Vista Interiors Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteAsset("/interior-pics/WhatsApp Image 2026-05-24 at 10.17.43.jpeg")],
  },
};

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
            src={siteImages.portfolioHero}
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
              {portfolioGalleryImages.slice(0, 4).map((img) => (
                <div key={img.label} className="aspect-square overflow-hidden rounded-xl opacity-70">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" loading="lazy" />
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
            {portfolioGalleryImages.map((img, i) => (
              <div
                key={img.label}
                className={`break-inside-avoid mb-5 relative group overflow-hidden rounded-2xl ${
                  i % 4 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
