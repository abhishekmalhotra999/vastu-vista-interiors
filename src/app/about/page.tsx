import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Us | Best Interior Designers in Kolkata",
  description:
    "Learn about Vastu Vista Interiors — the best interior decoration company in Kolkata. Our story, design philosophy, and commitment to transforming spaces across Kolkata since 2014.",
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2D2D2D] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CCCCCC] text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Vastu Vista Interiors
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Kolkata&apos;s most trusted interior decoration company — transforming homes, offices, and
            commercial spaces since 2014.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-5">
              Crafting Beautiful Spaces in Kolkata Since 2014
            </h2>
            <p className="text-[#555555] text-base leading-relaxed mb-4">
              Vastu Vista Interiors was founded with a single mission: to make beautiful, thoughtful
              interior design accessible to every home and business in Kolkata. What began as a small
              studio in South Kolkata has grown into one of the city&apos;s most recognized interior design
              companies, with over 500 completed projects across 20+ locations.
            </p>
            <p className="text-[#555555] text-base leading-relaxed mb-4">
              Our name combines two powerful concepts — <em>Vastu</em>, the ancient Indian science of
              harmonious space design, and <em>Vista</em>, meaning a beautiful view or perspective. This
              philosophy guides every project: we create spaces that are not only visually stunning but
              also deeply balanced and functional.
            </p>
            <p className="text-[#555555] text-base leading-relaxed">
              From modular kitchens and false ceilings to complete home renovations and restaurant
              interiors — we handle every project with the same passion, precision, and commitment to
              excellence that has earned us the trust of hundreds of satisfied clients.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
              alt="Vastu Vista Interiors - Interior decoration company in Kolkata"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-7 rounded-xl border border-[#E5E5E5]">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-[#2D2D2D] text-base mb-2">{v.title}</h3>
                <p className="text-[#8C8C8C] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "10+", label: "Years Experience" },
            { value: "20+", label: "Kolkata Locations" },
            { value: "50+", label: "Skilled Craftsmen" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-[#CCCCCC] mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-2">The People Behind the Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#E5E5E5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[#2D2D2D] text-base">{member.name}</h3>
                <p className="text-[#8C8C8C] text-xs mb-3">{member.role}</p>
                <p className="text-[#555555] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        heading="Let's Create Something Beautiful Together"
        subtext="Partner with Kolkata's most trusted interior design team for your next project."
      />
    </>
  );
}
