export interface Product {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  metaTitle: string;
  metaDesc: string;
  image: string;
  category: "residential" | "commercial" | "flooring" | "ceiling" | "renovation";
}

export const products: Product[] = [
  {
    slug: "modular-kitchen-design",
    name: "Modular Kitchen Design",
    shortDesc: "Custom modular kitchens built for style, storage, and functionality",
    fullDesc:
      "Our modular kitchen design service in Kolkata transforms your cooking space into a beautiful and functional area. We design custom layouts — L-shaped, U-shaped, parallel, or island kitchens — using premium hardware, soft-close mechanisms, and high-quality laminates or acrylic finishes. Every modular kitchen we build is tailored to your space, lifestyle, and budget.",
    features: [
      "Custom L-shaped, U-shaped & island layouts",
      "Soft-close hinges and drawer systems",
      "Quartz, granite & laminate countertops",
      "Built-in appliance integration",
      "Tall unit & pantry storage",
      "Under-cabinet LED lighting",
    ],
    metaTitle: "Modular Kitchen Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Expert modular kitchen design in Kolkata. Custom layouts, premium hardware, and space-efficient solutions by Vastu Vista Interiors. Get a free quote today.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "false-ceiling-installation",
    name: "False Ceiling Installation",
    shortDesc: "Elegant gypsum, POP and designer false ceilings for every space",
    fullDesc:
      "Vastu Vista Interiors specializes in false ceiling installation across Kolkata. Our false ceiling designs range from simple gypsum boards to elaborate tray ceilings, coffered designs, and LED-integrated cove lighting. We use premium materials and skilled craftsmen to deliver flawless finishes that elevate the ambiance of any room.",
    features: [
      "Gypsum board & POP false ceilings",
      "Tray, coffered & cove ceiling designs",
      "Integrated LED cove lighting",
      "Soundproofing options",
      "Moisture-resistant solutions for bathrooms",
      "Quick installation with minimal disruption",
    ],
    metaTitle: "False Ceiling Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Premium false ceiling design and installation in Kolkata. Gypsum, POP, tray and LED cove ceilings by expert craftsmen. Contact Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    category: "ceiling",
  },
  {
    slug: "pvc-ceiling-panels",
    name: "PVC Ceiling Panels",
    shortDesc: "Waterproof, low-maintenance PVC ceiling panels for all spaces",
    fullDesc:
      "Our PVC ceiling panel installation service provides a cost-effective and durable alternative to traditional false ceilings. PVC panels are lightweight, moisture-resistant, and available in a wide range of textures and finishes. Perfect for kitchens, bathrooms, balconies, and commercial spaces throughout Kolkata.",
    features: [
      "100% waterproof & moisture-resistant",
      "Wide range of textures and finishes",
      "Easy to clean and maintain",
      "Fast installation",
      "Ideal for humid areas",
      "Cost-effective ceiling solution",
    ],
    metaTitle: "PVC Ceiling Panels in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Affordable PVC ceiling panel installation in Kolkata. Waterproof, durable, and stylish ceiling solutions for homes and offices. Call Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80",
    category: "ceiling",
  },
  {
    slug: "wallpaper-installation",
    name: "Wallpaper Installation",
    shortDesc: "Stylish wallpaper installation to transform any wall instantly",
    fullDesc:
      "Transform your walls with our professional wallpaper installation service in Kolkata. We offer thousands of designs — from subtle textures to bold prints, floral patterns to geometric motifs. Our trained installers ensure perfect alignment, smooth application, and seamless finish. Whether for a feature wall or entire room, we deliver stunning results.",
    features: [
      "Thousands of design options",
      "Vinyl, fabric & non-woven wallpapers",
      "Precise measurement and cutting",
      "Bubble-free professional installation",
      "Feature wall & full-room options",
      "Removable wallpaper for rentals",
    ],
    metaTitle: "Wallpaper Installation in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Professional wallpaper installation in Kolkata. Hundreds of designs for feature walls and full rooms. Expert installation by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "wooden-flooring",
    name: "Wooden Flooring",
    shortDesc: "Premium hardwood and engineered wooden flooring for warm, elegant spaces",
    fullDesc:
      "Add warmth and natural elegance to your home with our wooden flooring installation service in Kolkata. We offer solid hardwood, engineered wood, and premium laminate flooring in a wide range of species, colors, and finishes. Each installation includes proper subfloor preparation, precise fitting, and finishing to ensure durability and beauty.",
    features: [
      "Solid hardwood & engineered wood options",
      "Premium laminate flooring",
      "Multiple wood species and finishes",
      "Proper subfloor preparation",
      "Tongue-and-groove installation",
      "Scratch and stain-resistant coatings",
    ],
    metaTitle: "Wooden Flooring Installation in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Premium wooden flooring installation in Kolkata. Solid hardwood, engineered wood, and laminate options by Vastu Vista Interiors. Get a free estimate.",
    image:
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?auto=format&fit=crop&w=800&q=80",
    category: "flooring",
  },
  {
    slug: "vinyl-flooring",
    name: "Vinyl Flooring",
    shortDesc: "Durable, waterproof vinyl flooring for homes and commercial spaces",
    fullDesc:
      "Our vinyl flooring installation service offers a practical, budget-friendly flooring solution for homes and businesses in Kolkata. Luxury vinyl planks (LVP) and luxury vinyl tiles (LVT) are 100% waterproof, highly durable, and available in realistic wood and stone textures. Perfect for high-traffic areas, kitchens, bathrooms, and commercial spaces.",
    features: [
      "100% waterproof luxury vinyl planks (LVP)",
      "Realistic wood and stone textures",
      "Scratch and dent resistant",
      "Comfortable underfoot with foam backing",
      "Easy click-lock installation",
      "Suitable for high-traffic commercial areas",
    ],
    metaTitle: "Vinyl Flooring Installation in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Affordable vinyl flooring installation in Kolkata. Waterproof LVP and LVT for homes and offices. Expert installation by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=800&q=80",
    category: "flooring",
  },
  {
    slug: "customized-wardrobes",
    name: "Customized Wardrobes",
    shortDesc: "Built-to-measure wardrobe solutions maximizing your storage space",
    fullDesc:
      "Our customized wardrobe service in Kolkata designs storage solutions perfectly tailored to your space and needs. From sliding door wardrobes to walk-in closets, we build custom interiors with hanging sections, shelves, drawers, and accessory organizers. Available in laminates, lacquered finishes, and mirror panels.",
    features: [
      "Sliding, hinged & walk-in wardrobes",
      "Custom interior organizers",
      "Mirror panel options",
      "Laminates, acrylic & lacquer finishes",
      "Soft-close systems",
      "Built-in lighting options",
    ],
    metaTitle: "Customized Wardrobe Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Custom wardrobe design and installation in Kolkata. Sliding, hinged, and walk-in wardrobes with smart storage solutions by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "tv-unit-design",
    name: "TV Unit Design",
    shortDesc: "Stylish custom TV units and entertainment centers for modern living rooms",
    fullDesc:
      "Elevate your living room with a custom-designed TV unit from Vastu Vista Interiors. We create wall-mounted and freestanding TV units with cable management, storage cabinets, display shelves, and integrated LED lighting. Designed to complement your living room interior and available in a wide range of materials and finishes.",
    features: [
      "Wall-mounted & freestanding designs",
      "Cable management solutions",
      "Integrated LED backlighting",
      "Open shelves & closed storage",
      "Custom dimensions for any TV size",
      "Matching side units available",
    ],
    metaTitle: "TV Unit Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Custom TV unit and entertainment center design in Kolkata. Modern, stylish, and functional TV walls by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "bedroom-interior-setup",
    name: "Bedroom Interior Setup",
    shortDesc: "Complete bedroom interior design for your perfect personal sanctuary",
    fullDesc:
      "Your bedroom should be your personal sanctuary. Our bedroom interior design service in Kolkata covers everything — custom beds with storage, wardrobes, dressing tables, side tables, lighting, false ceiling, and soft furnishings. We create cohesive, calming bedroom spaces that reflect your style and ensure restful sleep.",
    features: [
      "Custom bed design with storage",
      "Wardrobe and dressing table",
      "False ceiling with ambient lighting",
      "Accent wall with wallpaper or panels",
      "Complete soft furnishing coordination",
      "Smart storage solutions",
    ],
    metaTitle: "Bedroom Interior Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Complete bedroom interior design in Kolkata. Custom beds, wardrobes, false ceilings, and soft furnishings for your perfect sanctuary. Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "living-room-decoration",
    name: "Living Room Decoration",
    shortDesc: "Stunning living room interior design that impresses every guest",
    fullDesc:
      "Your living room is the heart of your home. Vastu Vista Interiors designs living rooms that are both beautiful and functional — from sofa arrangements and TV units to false ceilings, wall treatments, and décor accessories. We create spaces that flow seamlessly and make a lasting impression on every guest.",
    features: [
      "Sofa arrangement and seating design",
      "Custom TV unit and entertainment wall",
      "False ceiling with cove lighting",
      "Feature walls with panels or wallpaper",
      "Accent rugs, cushions & décor",
      "Optimal space planning & furniture layout",
    ],
    metaTitle: "Living Room Interior Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Transform your living room with expert interior design in Kolkata. Custom furniture, false ceilings, and décor by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "dining-room-interior-design",
    name: "Dining Room Interior Design",
    shortDesc: "Elegant dining room designs for memorable meals and gatherings",
    fullDesc:
      "Create a dining space where every meal becomes a celebration. Our dining room interior design service covers custom dining tables, seating, lighting, crockery units, and wall décor. We design spaces that balance elegance with practicality, from intimate family dining areas to formal dining rooms for entertaining guests.",
    features: [
      "Custom dining table and chairs",
      "Crockery unit and bar cabinet",
      "Statement pendant lighting",
      "Feature wall design",
      "Space-efficient layouts",
      "Material and finish coordination",
    ],
    metaTitle: "Dining Room Interior Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Elegant dining room interior design in Kolkata. Custom tables, lighting, and décor for beautiful dining spaces by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "office-cabin-interior",
    name: "Office Cabin Interior",
    shortDesc: "Professional office cabin designs that boost productivity and prestige",
    fullDesc:
      "First impressions matter in business. Our office cabin interior design service creates professional, functional, and prestigious workspaces in Kolkata. From executive cabins to open-plan offices, we design with ergonomics, brand identity, and productivity in mind. We handle everything from partition walls to furniture, lighting, and flooring.",
    features: [
      "Executive and director cabin design",
      "Ergonomic furniture selection",
      "Glass partition systems",
      "Brand-aligned color schemes",
      "Cable management and tech integration",
      "False ceiling and professional lighting",
    ],
    metaTitle: "Office Cabin Interior Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Professional office cabin interior design in Kolkata. Executive cabins, open offices, and corporate spaces by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    category: "commercial",
  },
  {
    slug: "reception-area-design",
    name: "Reception Area Design",
    shortDesc: "Impactful reception interiors that create the perfect first impression",
    fullDesc:
      "Your reception area is the face of your business. Vastu Vista Interiors designs reception areas that communicate professionalism, trust, and brand identity. From corporate offices to hotels and clinics, we create welcoming, visually impressive reception spaces with custom reception desks, seating areas, brand signage, and ambient lighting.",
    features: [
      "Custom reception desk design",
      "Brand signage and logo walls",
      "Seating area layout",
      "Statement lighting design",
      "False ceiling and flooring",
      "Biophilic and décor elements",
    ],
    metaTitle: "Reception Area Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Impressive reception area design in Kolkata for offices, hotels, and clinics. Custom desks, brand walls, and professional interiors by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    category: "commercial",
  },
  {
    slug: "restaurant-interior-decoration",
    name: "Restaurant Interior Decoration",
    shortDesc: "Immersive restaurant interiors that elevate the dining experience",
    fullDesc:
      "As experienced restaurant interior designers in Kolkata, we understand that dining is an experience. Our restaurant interior design service creates immersive, themed, or contemporary dining environments that reflect your concept and brand. From intimate bistros to large restaurants, we handle seating layout, lighting, bar areas, kitchen visibility, and décor.",
    features: [
      "Concept-driven theme design",
      "Seating layout optimization",
      "Bar and counter design",
      "Ambient and task lighting",
      "Acoustic treatments",
      "Kitchen and service area planning",
    ],
    metaTitle: "Restaurant Interior Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Expert restaurant interior decoration in Kolkata. Immersive dining concepts, seating layouts, and atmosphere creation by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    category: "commercial",
  },
  {
    slug: "cafe-interior-design",
    name: "Café Interior Design",
    shortDesc: "Trendy, cozy café interiors that make customers stay longer",
    fullDesc:
      "Create the perfect café atmosphere that keeps customers coming back. Our café interior design service specializes in creating cozy, Instagram-worthy, and functionally efficient café spaces. From counter design and seating arrangements to lighting, wall art, and surface finishes — we craft café environments that align with your brand and target clientele.",
    features: [
      "Counter and display case design",
      "Cozy seating layout",
      "Instagram-worthy accent walls",
      "Pendant and mood lighting",
      "Outdoor seating integration",
      "Signage and brand elements",
    ],
    metaTitle: "Café Interior Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Trendy café interior design in Kolkata. Cozy, functional, and Instagram-worthy café spaces by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    category: "commercial",
  },
  {
    slug: "luxury-sofa-set-design",
    name: "Luxury Sofa Set Design",
    shortDesc: "Custom luxury sofa sets tailored to your living room and lifestyle",
    fullDesc:
      "Elevate your living room with a custom luxury sofa set designed and sourced by Vastu Vista Interiors. We offer bespoke sofas in premium fabrics — velvet, linen, leather, and performance textiles — in any configuration you desire. Every piece is crafted to complement your interior design, with customizable dimensions, colors, and cushion firmness.",
    features: [
      "Bespoke dimensions and configurations",
      "Premium fabric and leather options",
      "Feather and foam cushion variants",
      "Matching ottomans and day beds",
      "Sustainable and durable frames",
      "Fabric protection treatments",
    ],
    metaTitle: "Luxury Sofa Set Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Custom luxury sofa set design in Kolkata. Bespoke sofas in premium fabrics for your living room by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "wall-panel-decoration",
    name: "Wall Panel Decoration",
    shortDesc: "Textured wall panels for striking feature walls in any space",
    fullDesc:
      "Add depth, texture, and architectural interest to your walls with our wall panel decoration service. Vastu Vista Interiors installs a wide range of wall panels — fluted wooden panels, 3D PVC panels, stone-look panels, fabric-wrapped panels, and metal accents. Perfect for feature walls in living rooms, bedrooms, offices, and hospitality spaces.",
    features: [
      "Fluted wooden and MDF panels",
      "3D PVC and gypsum panels",
      "Stone-look and marble effect panels",
      "Fabric-wrapped acoustic panels",
      "LED-integrated backlit panels",
      "Custom painting and finishing",
    ],
    metaTitle: "Wall Panel Decoration in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Stylish wall panel decoration in Kolkata. Fluted wood, 3D PVC, stone, and backlit panels for feature walls by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "led-lighting-design",
    name: "LED Lighting Design",
    shortDesc: "Ambient, accent and task LED lighting that transforms any space",
    fullDesc:
      "Lighting defines the mood and functionality of every space. Our LED lighting design service in Kolkata creates comprehensive lighting plans for homes and commercial spaces — combining ambient, task, and accent lighting for the perfect atmosphere. From cove lighting and downlights to statement fixtures and smart lighting systems.",
    features: [
      "Full lighting plan and consultation",
      "Cove and ceilings LED strips",
      "Recessed downlights and track lighting",
      "Statement pendant and chandelier",
      "Smart lighting system integration",
      "Energy-efficient LED solutions",
    ],
    metaTitle: "LED Lighting Design in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Professional LED lighting design in Kolkata. Ambient, accent, and task lighting for homes and offices by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "space-saving-furniture",
    name: "Space Saving Furniture",
    shortDesc: "Smart, multifunctional furniture solutions for compact homes",
    fullDesc:
      "Make every square foot count with our space-saving furniture solutions in Kolkata. Ideal for 1BHK and 2BHK apartments, we design and source smart multifunctional furniture — murphy beds, extendable dining tables, sofa-cum-beds, wall-mounted desks, and modular storage systems that maximize your living area without compromising on style.",
    features: [
      "Murphy beds and wall beds",
      "Extendable dining tables",
      "Sofa-cum-beds and daybeds",
      "Wall-mounted and fold-down desks",
      "Modular storage systems",
      "Under-stair and loft storage",
    ],
    metaTitle: "Space Saving Furniture in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Smart space-saving furniture solutions in Kolkata for compact homes and apartments. Murphy beds, modular storage, and multifunctional designs by Vastu Vista Interiors.",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80",
    category: "residential",
  },
  {
    slug: "home-renovation-services",
    name: "Home Renovation Services",
    shortDesc: "Complete home renovation and interior remodelling from concept to handover",
    fullDesc:
      "Our home renovation service in Kolkata provides a complete, stress-free remodelling experience. From initial design consultation to final handover, Vastu Vista Interiors manages every aspect — civil work, flooring, wall treatments, false ceilings, kitchen, bathroom, electrical, and furnishing. We handle all contractors, timelines, and quality checks so you don't have to.",
    features: [
      "Full design consultation and planning",
      "Civil work and structural changes",
      "Kitchen and bathroom renovation",
      "Flooring, painting, and wall treatments",
      "Electrical and plumbing coordination",
      "Furniture sourcing and installation",
    ],
    metaTitle: "Home Renovation Services in Kolkata | Vastu Vista Interiors",
    metaDesc:
      "Complete home renovation and interior remodelling in Kolkata. End-to-end project management by Vastu Vista Interiors — from design to handover.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    category: "renovation",
  },
];

export default products;
