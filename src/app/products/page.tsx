import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "All Interior Design Products in Kolkata | Vastu Vista Interiors",
  description:
    "Browse all 20 interior design products offered by Vastu Vista Interiors in Kolkata — modular kitchen, false ceiling, bedroom, living room, office, restaurant and more.",
};

const categories = [
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "flooring", label: "Flooring" },
  { key: "ceiling", label: "Ceiling" },
  { key: "renovation", label: "Renovation" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F8F8] py-16 px-4 border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#8C8C8C] text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-5">
            Interior Design Products in Kolkata
          </h1>
          <p className="text-[#8C8C8C] text-lg leading-relaxed max-w-3xl mx-auto">
            From modular kitchen design and false ceiling installation to complete home renovation and
            commercial interiors — explore our full range of products available across 20+ locations
            in Kolkata.
          </p>
        </div>
      </section>

      {/* Products by category */}
      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.key);
        if (catProducts.length === 0) return null;
        return (
          <section key={cat.key} className="py-14 px-4 bg-white border-b border-[#F0F0F0]">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-bold text-[#2D2D2D]">{cat.label} Interiors</h2>
                <span className="text-xs font-medium text-[#8C8C8C] bg-[#F8F8F8] border border-[#E5E5E5] px-3 py-1 rounded-full">
                  {catProducts.length} products
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {catProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <ContactCTA
        heading="Not Sure Which Service You Need?"
        subtext="Chat with our design consultants on WhatsApp — we'll help you figure out exactly what your space needs."
      />
    </>
  );
}
