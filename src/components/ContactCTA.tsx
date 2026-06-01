interface ContactCTAProps {
  productName?: string;
  locationName?: string;
  heading?: string;
  subtext?: string;
}

export default function ContactCTA({
  productName,
  locationName,
  heading = "Ready to Transform Your Space?",
  subtext = "Get a free consultation from Kolkata's trusted interior design experts.",
}: ContactCTAProps) {
  const waText = productName && locationName
    ? encodeURIComponent(
        `Hi Vastu Vista Interiors! I'm interested in ${productName} in ${locationName}, Kolkata. Please share details and pricing.`
      )
    : productName
    ? encodeURIComponent(
        `Hi Vastu Vista Interiors! I'm interested in ${productName}. Please share details and pricing.`
      )
    : encodeURIComponent(
        "Hi Vastu Vista Interiors! I'm interested in your interior design services. Please share details."
      );

  return (
    <section className="bg-[#2D2D2D] py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{heading}</h2>
        <p className="text-gray-300 mb-8 text-base">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/916290415915?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1ebe5c] transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
            </svg>
            WhatsApp for Free Quote
          </a>
          <a
            href="tel:+916290415915"
            className="flex items-center gap-2 bg-white text-[#2D2D2D] font-semibold px-6 py-3 rounded-full hover:bg-[#F8F8F8] transition-colors text-sm border border-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call +91 90381 27376
          </a>
        </div>
      </div>
    </section>
  );
}
