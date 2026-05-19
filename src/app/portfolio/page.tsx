import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Interior Design Portfolio | Vastu Vista Interiors Kolkata",
  description:
    "View the portfolio of Vastu Vista Interiors — Kolkata's best interior design company. Gallery of residential and commercial interior projects across Kolkata.",
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

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2D2D2D] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CCCCCC] text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Interior Design Portfolio
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            A curated gallery of residential and commercial interior design projects completed
            across Kolkata by Vastu Vista Interiors.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#F8F8F8] border-b border-[#E5E5E5] py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Projects" },
            { value: "20+", label: "Locations" },
            { value: "5", label: "Service Categories" },
            { value: "10+", label: "Years" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-[#2D2D2D]">{s.value}</p>
              <p className="text-sm text-[#8C8C8C]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img) => (
              <div key={img.label} className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm">{img.label}</p>
                  <p className="text-gray-300 text-xs">{img.location}, Kolkata</p>
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
