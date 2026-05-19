import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { locations } from "@/data/locations";

export default function Footer() {
  const featuredProducts = products.slice(0, 8);
  const featuredLocations = locations.slice(0, 10);

  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/assets/vastu-vista-logo.png"
                alt="Vastu Vista Interiors"
                width={150}
                height={45}
                className="h-10 w-auto object-contain brightness-90"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Vastu Vista Interiors is the best interior designer in Kolkata, delivering
              beautiful, functional spaces for homes, offices, and commercial establishments
              across 20+ locations.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/919038127376?text=Hi%20Vastu%20Vista%20Interiors!%20I%27m%20interested%20in%20your%20interior%20design%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-3 py-2 rounded-full hover:bg-[#1ebe5c] transition-colors"
                aria-label="Contact on WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
                </svg>
                +91 90381 27376
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              {featuredProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-sm text-[#8C8C8C] hover:text-white transition-colors font-medium"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Areas We Serve
            </h3>
            <ul className="space-y-2">
              {featuredLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/products/modular-kitchen-design/${loc.slug}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#8C8C8C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kolkata, West Bengal, India<br />(Office address coming soon)</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#8C8C8C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919038127376" className="hover:text-white transition-colors">+91 90381 27376</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#8C8C8C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@vastuvistainteriors.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#8C8C8C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-3">Quick Links</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "About", href: "/about" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Vastu Vista Interiors. All rights reserved.</p>
          <p>
            Interior designers in Kolkata |{" "}
            <Link href="/products" className="hover:text-gray-300 transition-colors">
              Interior decorators near me
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
