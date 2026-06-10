import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { absoluteAsset, siteImages } from "@/data/site-images";
import { BASE_URL, SITE_NAME, breadcrumbSchema, businessAddress } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: `Contact Interior Designers in Kolkata | ${SITE_NAME}` },
  description:
    "Contact Vastu Vista Interiors for a free interior design consultation in Kolkata. Call or WhatsApp for kitchen, false ceiling & renovation services.",
  alternates: {
    canonical: `${BASE_URL}/contact/`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/contact/`,
    title: `Contact Interior Designers in Kolkata | ${SITE_NAME}`,
    description:
      "Get a free site visit & consultation from Vastu Vista Interiors. Serving 20+ locations across Kolkata for home, office & commercial interior design.",
    images: [
      {
        url: absoluteAsset("/interior-pics/WhatsApp Image 2026-05-24 at 10.17.45.jpeg"),
        width: 1200,
        height: 630,
        alt: "Contact Vastu Vista Interiors — Interior Designers Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Interior Designers in Kolkata | ${SITE_NAME}`,
    description:
      "Free consultation for interior design, renovation, modular kitchen & false ceiling in Kolkata. Call or WhatsApp Vastu Vista Interiors.",
    images: [absoluteAsset("/interior-pics/WhatsApp Image 2026-05-24 at 10.17.45.jpeg")],
  },
};

const contactDetails = [
  { label: "Phone", value: "+91 62904 15915", href: "tel:+916290415915" },
  { label: "WhatsApp", value: "+91 62904 15915", href: "https://wa.me/916290415915" },
  { label: "Email", value: "info@vastuvistainteriors.com", href: "mailto:info@vastuvistainteriors.com" },
  { label: "Address", value: "19 Vivekananda Park, Amrabati, Naskarhat, Tiljala, Kolkata 700039", href: null },
];

const contactBreadcrumbSchema = breadcrumbSchema([
  { name: "Home", url: `${BASE_URL}/` },
  { name: "Contact", url: `${BASE_URL}/contact/` },
]);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact/#webpage`,
  url: `${BASE_URL}/contact/`,
  name: `Contact ${SITE_NAME}`,
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#business` },
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${BASE_URL}/#business`,
    name: SITE_NAME,
    telephone: "+916290415915",
    email: "info@vastuvistainteriors.com",
    address: businessAddress,
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      {/* ─── HERO ── */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.contactHero}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 lg:py-36">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#8C8C8C]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Get In Touch</p>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.05] mb-6">
              Contact Vastu Vista<br />Interiors
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Ready to transform your space? Get in touch for a free consultation.
              We serve 20+ locations across Kolkata — our team can visit you directly.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Reach Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1] mb-10">
              Let&apos;s Start a<br />Conversation
            </h2>

            {/* WhatsApp primary CTA */}
            <a
              href="https://wa.me/916290415915?text=Hi%20Vastu%20Vista%20Interiors!%20I%27d%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white font-semibold px-7 py-4 rounded-2xl hover:bg-[#1ebe5c] transition-colors mb-10 w-fit shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
              </svg>
              <div>
                <p className="text-sm font-bold">WhatsApp for Free Consultation</p>
                <p className="text-xs text-green-100 mt-0.5">Fastest response — reply within minutes</p>
              </div>
            </a>

            {/* Contact details */}
            <div className="divide-y divide-[#E5E5E5]">
              {contactDetails.map((item) => (
                <div key={item.label} className="py-5 flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] font-medium shrink-0">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[#2D2D2D] font-semibold text-sm hover:text-[#8C8C8C] transition-colors text-right"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#555555] text-sm text-right">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#2D2D2D]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C8C8C]">Inquiry Form</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-[1.1] mb-10">
              Send an Inquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
