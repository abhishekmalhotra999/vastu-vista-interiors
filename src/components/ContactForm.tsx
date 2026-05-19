"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const service = formData.get("service") as string;
        const message = formData.get("message") as string;
        const text = encodeURIComponent(
          `Hi Vastu Vista Interiors!\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
        );
        window.open(`https://wa.me/919038127376?text=${text}`, "_blank");
      }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Full Name *</label>
        <input id="name" name="name" required type="text" placeholder="Your full name"
          className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#2D2D2D] bg-white placeholder-[#CCCCCC]" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Phone / WhatsApp *</label>
        <input id="phone" name="phone" required type="tel" placeholder="+91 XXXXX XXXXX"
          className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#2D2D2D] bg-white placeholder-[#CCCCCC]" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Product Interested In</label>
        <select id="service" name="service"
          className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#2D2D2D] bg-white">
          <option value="">Select a service (optional)</option>
          <option>Modular Kitchen Design</option>
          <option>False Ceiling Installation</option>
          <option>Bedroom Interior Setup</option>
          <option>Living Room Decoration</option>
          <option>Office Cabin Interior</option>
          <option>Restaurant Interior Decoration</option>
          <option>Home Renovation Services</option>
          <option>Wooden / Vinyl Flooring</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Your Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us about your project, location, and budget..."
          className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#2D2D2D] bg-white placeholder-[#CCCCCC] resize-none" />
      </div>
      <button type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3.5 rounded-full hover:bg-[#1ebe5c] transition-colors text-base">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
        </svg>
        Send via WhatsApp
      </button>
      <p className="text-xs text-center text-[#8C8C8C]">
        This will open WhatsApp with your inquiry pre-filled. No account needed.
      </p>
    </form>
  );
}
