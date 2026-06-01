import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Vastu Vista Interiors — Interior Designers in Kolkata Since 2014",
  description:
    "Learn about Vastu Vista Interiors — the best interior decoration company in Kolkata. Our story, design philosophy, and commitment to transforming spaces across Kolkata since 2014.",
  alternates: {
    canonical: "https://vastuvistainteriors.com/about/",
  },
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Vastu Vista Interiors — Interior Design Company Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const values = [
  {
    icon: "🎨",
    title: "Design Excellence",
    desc: "We believe every space deserves thoughtful, beautiful design — regardless of size or budget.",
  },
  {
    icon: "🏛️",
    title: "Vastu Principles",
    desc: "Our designs harmonize aesthetics with traditional Vastu Shastra principles for balanced, positive spaces.",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    desc: "We work closely with clients at every stage, ensuring your vision is at the heart of every decision.",
  },
  {
    icon: "⚡",
    title: "Quality Materials",
    desc: "We source only premium, durable materials and work with skilled craftsmen who take pride in their work.",
  },
  {
    icon: "📅",
    title: "On-Time Delivery",
    desc: "We respect your time and commitments — our projects are managed with strict timelines.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We stay ahead of interior design trends while creating timeless spaces that remain beautiful for years.",
  },
];

const team = [
  {
    name: "Founder & Principal Designer",
    role: "Lead Design & Strategy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bio: "With over 10 years of experience, our founder has led 300+ interior projects across Kolkata, from luxury residences to commercial establishments.",
  },
  {
    name: "Head of Residential Design",
    role: "Home Interiors Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    bio: "Specializing in residential interiors, our design head transforms homes with a keen eye for space optimization and aesthetic balance.",
  },
  {
    name: "Commercial Design Lead",
    role: "Offices & Hospitality",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    bio: "Our commercial lead has designed over 100 office spaces, restaurants, cafés, and retail establishments across Kolkata.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vastuvistainteriors.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://vastuvistainteriors.com/about/" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://vastuvistainteriors.com/#organization",
  name: "Vastu Vista Interiors",
  url: "https://vastuvistainteriors.com",
  telephone: "+919038127376",
  foundingDate: "2014",
  description:
    "Vastu Vista Interiors is a leading interior design company in Kolkata with over 10 years of experience transforming homes, offices, and commercial spaces.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Kolkata" },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* ─── HERO ── */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
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
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Our Story</p>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.05] mb-6">
              About Vastu Vista<br />Interiors
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Kolkata&apos;s most trusted interior decoration company — transforming homes, offices,
              and commercial spaces with vision and craftsmanship since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STORY ── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Who We Are</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.1] mb-8">
              Crafting Beautiful<br />Spaces Since 2014
            </h2>
            <div className="space-y-5 text-[#555555] text-base leading-relaxed">
              <p>
                Vastu Vista Interiors was founded with a single mission: to make beautiful, thoughtful
                interior design accessible to every home and business in Kolkata. What began as a small
                studio in South Kolkata has grown into one of the city&apos;s most recognized interior
                design companies, with over 500 completed projects across 20+ locations.
              </p>
              <p>
                Our name combines two powerful concepts —{" "}
                <span className="text-[#2D2D2D] font-semibold">Vastu</span>, the ancient Indian science
                of harmonious space design, and{" "}
                <span className="text-[#2D2D2D] font-semibold">Vista</span>, meaning a beautiful view
                or perspective. This philosophy guides every project: we create spaces that are not only
                visually stunning but deeply balanced and functional.
              </p>
              <p>
                From modular kitchens and false ceilings to complete home renovations and restaurant
                interiors — every project is handled with the same passion, precision, and commitment
                to excellence that has earned us the trust of hundreds of satisfied clients.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Interior design craftsmanship — Vastu Vista Interiors Kolkata"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1A1A1A] text-white px-7 py-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold leading-none">500+</p>
              <p className="text-sm text-gray-400 mt-2">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES (dark) ── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#8C8C8C]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">What Drives Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
                Our Core<br />Values
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-12">
                Six principles that define how we approach every project, every space, and every client relationship.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                {[
                  { v: "500+", l: "Projects" },
                  { v: "10+", l: "Years" },
                  { v: "20+", l: "Locations" },
                  { v: "50+", l: "Craftsmen" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-3xl font-bold text-white leading-none">{s.v}</p>
                    <p className="text-xs text-gray-500 mt-2">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {values.map((v, i) => (
                <div key={v.title} className="border-t border-white/10 py-8">
                  <p className="text-[#555555] text-xs font-mono mb-3 tracking-[0.2em]">0{i + 1}</p>
                  <h3 className="font-bold text-white text-base mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#2D2D2D]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">The People</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-[1.1]">
                Meet Our Team
              </h2>
            </div>
            <p className="text-[#8C8C8C] text-base leading-relaxed lg:max-w-sm">
              A passionate team of designers, project managers, and skilled craftsmen — united by
              a shared love for creating extraordinary interiors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-[#E5E5E5]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mb-2 font-medium">
                    {member.role}
                  </p>
                  <h3 className="font-bold text-[#2D2D2D] text-lg mb-3">{member.name}</h3>
                  <p className="text-[#8C8C8C] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Let's Create Something Beautiful Together"
        subtext="Share your vision with our design team — we'll turn it into a space you'll love for years."
      />
    </>
  );
}
