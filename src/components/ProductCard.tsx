import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  locationSlug?: string;
}

export default function ProductCard({ product, locationSlug }: ProductCardProps) {
  const href = locationSlug
    ? `/products/${product.slug}/${locationSlug}`
    : `/products/${product.slug}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-[#E5E5E5] transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={`${product.name} in Kolkata`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-3 text-xs text-white font-medium bg-[#2D2D2D]/70 px-2.5 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-[#2D2D2D] text-base mb-1.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-[#8C8C8C] text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDesc}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href={href}
            className="flex-1 text-center text-sm font-medium text-[#2D2D2D] border border-[#2D2D2D] px-3 py-2 rounded-lg hover:bg-[#2D2D2D] hover:text-white transition-colors duration-200"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/916290415915?text=${encodeURIComponent(
              locationSlug
                ? `Hi! I'm interested in ${product.name} in ${locationSlug.replace(/-/g, " ")}, Kolkata.`
                : `Hi! I'm interested in ${product.name} in Kolkata.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5c] transition-colors"
            aria-label={`WhatsApp inquiry for ${product.name}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.532 5.857L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.064-1.414l-.363-.215-3.76.98.906-3.669-.237-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
