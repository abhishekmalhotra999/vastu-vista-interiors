import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Vastu Vista Interiors Kolkata",
  description:
    "Contact Vastu Vista Interiors — the best interior designer in Kolkata. Call, WhatsApp, or fill out the form for a free consultation. We serve 20+ locations across Kolkata.",
};

const contactDetails = [
  { label: "Phone", value: "+91 90381 27376", href: "tel:+919038127376" },
  { label: "WhatsApp", value: "+91 90381 27376", href: "https://wa.me/919038127376" },
  { label: "Email", value: "info@vastuvistainteriors.com", href: "mailto:info@vastuvistainteriors.com" },
  { label: "Address", value: "Kolkata, West Bengal (Office address coming soon)", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F8F8] py-16 px-4 border-b border-[#E5E5E5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-5">
            Contact Vastu Vista Interiors
          </h1>
          <p className="text-[#8C8C8C] text-lg leading-relaxed">
            Ready to transform your space? Get in touch for a free consultation. We serve
            20+ locations across Kolkata — our team can visit you directly.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-7">Reach Us Directly</h2>
            <div className="space-y-5 mb-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F8F8F8] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#8C8C8C]">{item.label[0]}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-[#2D2D2D] font-medium hover:text-[#8C8C8C] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#555555]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F8F8F8] rounded-2xl p-6 border border-[#E5E5E5]">
              <h3 className="font-semibold text-[#2D2D2D] mb-2">Fastest Response via WhatsApp</h3>
              <p className="text-[#8C8C8C] text-sm mb-4">
                Send us a message on WhatsApp and our team will respond within minutes.
              </p>
              <a
                href="https://wa.me/919038127376?text=Hi%20Vastu%20Vista%20Interiors!%20I%27d%20like%20a%20free%20consultation."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1ebe5c] transition-colors text-sm">
                Chat on WhatsApp Now
              </a>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-[#E5E5E5]">
              <div className="bg-[#F8F8F8] flex items-center justify-center h-48 text-[#8C8C8C] text-sm">
                <div className="text-center">
                  <p className="text-[#CCCCCC] text-2xl mb-2">📍</p>
                  <p>Map coming soon</p>
                  <p className="text-xs text-[#CCCCCC]">Kolkata, West Bengal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-7">Send an Inquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
