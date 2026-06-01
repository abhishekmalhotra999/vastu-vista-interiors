import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Vastu Vista Interiors",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-bold text-[#E5E5E5] mb-4">404</p>
        <h1 className="text-2xl font-bold text-[#2D2D2D] mb-3">Page Not Found</h1>
        <p className="text-[#8C8C8C] mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-[#2D2D2D] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#555555] transition-colors text-sm">
            Back to Home
          </Link>
          <Link href="/products" className="border border-[#2D2D2D] text-[#2D2D2D] font-semibold px-6 py-3 rounded-full hover:bg-[#2D2D2D] hover:text-white transition-colors text-sm">
            Our Products
          </Link>
        </div>
      </div>
    </div>
  );
}
