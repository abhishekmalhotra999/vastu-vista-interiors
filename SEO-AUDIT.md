# SEO Audit — Vastu Vista Interiors
**Date:** 21 May 2026  
**Auditor:** GitHub Copilot  
**Total pages:** 430 (5 static + 20 product + 400 product×location + 5 misc)  
**Domain:** https://vastuvistainteriors.com  

---

## Summary Scorecard

| Category | Status | Grade |
|---|---|---|
| Meta Titles | 3 too long, rest good | B |
| Meta Descriptions | All within limits | A |
| Canonical Tags | Missing on 4 static pages | C |
| Open Graph / Social | No OG image on static pages; wrong logo dims | D |
| Twitter Cards | Missing entirely | F |
| Structured Data / Schema | 2 critical issues | C |
| Core Web Vitals (code) | CLS risk from img tags | C |
| Sitemap | Good coverage, minor issues | B+ |
| Robots.txt | Functional, one non-standard directive | B |
| Internal Linking | Good via Footer and Navbar | B |
| EEAT Signals | Missing physical address | C |
| Page-level Canonicals (product/location) | Set correctly | A |
| lang attribute | Wrong locale tag | C |

---

## 🔴 CRITICAL — Fix Before Go-Live

### 1. FAQPage Schema on Product Pages Has No Visible FAQ Content (Policy Violation)
**File:** `src/app/products/[product]/page.tsx`  
**Issue:** The `faqSchema` auto-generates Q&As from `product.features` (e.g. *"Does your Modular Kitchen Design service include custom l-shaped, u-shaped & island layouts?"*). Google's structured data guidelines explicitly require that FAQ content rendered as `FAQPage` schema **must be visible to the user on the page**. Product pages have no FAQ section — only a features list. This qualifies as misleading structured data and can trigger a **manual action** or silently suppress rich results across the entire domain.  
**Fix:** Either (a) remove `faqSchema` from all product detail pages, or (b) add a visible FAQ section to each product page with natural Q&As that match the schema. Option (a) is faster and safer.

---

### 2. Duplicate & Conflicting LocalBusiness Schemas
**Files:** `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/contact/page.tsx`  
**Issue:** Three separate `LocalBusiness` schemas exist:
- **Layout** (renders on ALL 430 pages): has `openingHours: "Mo-Sa 09:00-19:00"`, no `@id`
- **Homepage**: has `openingHoursSpecification: 10:00–20:00`, `@id: ".../#business"`, `aggregateRating`
- **Contact page**: has `openingHoursSpecification: 10:00–20:00`, `@id: ".../#business"`, `contactPoint`

Problems:
1. The layout schema runs on every page, meaning every product page has a `LocalBusiness` schema alongside its `Service` schema — this is fine and actually good, BUT the opening hours `09:00-19:00` contradicts the `10:00-20:00` set on homepage/contact.
2. The layout schema has no `@id` — Google may create a separate entity from the two `@id`-bearing schemas.
3. The layout-injected schema lacks `aggregateRating`, `contactPoint`, and `openingHoursSpecification` that the others have — the richer schemas are only on 2 pages.  

**Fix:** Move the complete, rich `LocalBusiness` schema to `layout.tsx` (one authoritative definition across all pages) and remove the page-level duplicates from homepage and contact. Set a single consistent opening hours value.

---

### 3. Missing Canonical Tags on 4 Static Pages
**Files:** `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/portfolio/page.tsx`, `src/app/products/page.tsx`  
**Issue:** None of these pages have `alternates.canonical` in their `metadata` export. With `trailingSlash: true` enabled, Apache/Nginx may serve both `/about` and `/about/` — without a canonical, Google picks arbitrarily. Also creates potential duplicate content risk if the site is ever crawled through www vs non-www.  
**Fix:** Add `alternates: { canonical: "https://vastuvistainteriors.com/[page]/" }` to each page's `metadata`.

---

### 4. OG Image Is the Logo — Wrong Dimensions & Wrong Content for Social Sharing
**File:** `src/app/layout.tsx`  
**Issue:** The global `openGraph.images` uses `/assets/vastu-vista-logo.png` with declared dimensions `width: 400, height: 120`. Actual file dimensions are **1622×531** — completely mismatched in the metadata declaration. More importantly:
- Facebook, LinkedIn, WhatsApp, Twitter all expect **1200×630px** for full preview cards
- Using a logo means every shared page shows a logo thumbnail instead of a compelling interior design photo
- The 4 static pages (about, contact, portfolio, products) have **no page-level `og:image`** override, so they all fall back to this mismatched logo  

**Fix:**
1. Create a proper `og-image.jpg` (1200×630) showing a beautiful interior — place it in `public/assets/`
2. Update the layout `openGraph.images` to use this file with correct dimensions
3. Add page-specific `og:image` for About, Portfolio, Contact, Products pages using relevant Unsplash photos (already used on those pages)

---

## 🟠 HIGH — Fix Before Go-Live

### 5. No Twitter Card Metadata
**File:** `src/app/layout.tsx` (and all page-level metadata)  
**Issue:** No `twitter` field in any `metadata` export. Without it, Twitter/X shares show basic link previews only — no image card. Given the visual nature of interior design, this is a significant social traffic opportunity missed.  
**Fix:** Add to `layout.tsx` metadata:
```ts
twitter: {
  card: "summary_large_image",
  site: "@vastuvista",       // update to actual Twitter handle if exists
  creator: "@vastuvista",
  images: ["/assets/og-image.jpg"],
},
```

---

### 6. Three Product Meta Titles Exceed 60-Character Limit
Google truncates title tags at ~600px (≈60–65 chars). These three exceed it:

| Product | Current Title | Chars | Issue |
|---|---|---|---|
| False Ceiling | `False Ceiling Design & Installation in Kolkata \| Vastu Vista Interiors` | **71** | Truncated in SERP |
| PVC Ceiling Panels | `PVC Ceiling Panels Installation in Kolkata \| Vastu Vista Interiors` | **67** | Truncated |
| Reception Area | `Reception Area Interior Design in Kolkata \| Vastu Vista Interiors` | **65** | Borderline |

**Fix** (suggested rewrites, all ≤ 60 chars):
- `False Ceiling Design in Kolkata | Vastu Vista Interiors` (55)
- `PVC Ceiling Panels in Kolkata | Vastu Vista Interiors` (53)
- `Reception Area Design in Kolkata | Vastu Vista Interiors` (57)

**File:** `src/data/products.ts`

---

### 7. `lang="en"` Should Be `lang="en-IN"` for India Targeting
**File:** `src/app/layout.tsx`  
**Issue:** `<html lang="en">` — for a Kolkata-focused Indian business, `en-IN` (English as used in India) sends the correct locale signal to Google. This affects local search ranking and snippet language matching.  
**Fix:** Change `lang="en"` to `lang="en-IN"` in the root layout.

---

### 8. Hero (LCP) Images Missing `fetchpriority="high"`
**Files:** All page files with hero `<img>` tags  
**Issue:** The full-screen hero `<img>` on every page is the Largest Contentful Paint (LCP) element. Without `fetchpriority="high"`, browsers treat it like any other image and may lazy-load or deprioritize it. Google's Core Web Vitals measurement penalizes LCP > 2.5s.  
**Fix:** Add `fetchpriority="high"` to the first hero `<img>` on every page. Example:
```jsx
<img
  src="..."
  alt="..."
  fetchpriority="high"
  className="w-full h-full object-cover"
/>
```
Note: TypeScript may require `// @ts-ignore` above or a custom type declaration since `fetchpriority` is not yet in all JSX type definitions.

---

### 9. All `<img>` Tags Missing `width` and `height` — Causes CLS
**Files:** All page and component files  
**Issue:** None of the `<img>` tags have explicit `width` and `height` attributes. The browser cannot reserve layout space before the image loads, causing Cumulative Layout Shift (CLS) — a Core Web Vitals metric. Google uses CLS as a ranking signal. For `object-cover` images inside fixed-height containers, this is less severe but still flags in Lighthouse.  
**Fix:** Add `width` and `height` matching the intrinsic or container ratio to all `<img>` tags. For full-bleed heroes in absolute-positioned containers, this may be skipped since the container defines the height — but product card images need it.

---

### 10. Physical Address "Coming Soon" — Critical EEAT Gap
**File:** `src/app/contact/page.tsx` (contact details data)  
**Issue:** The contact page lists `"Kolkata, West Bengal (Office address coming soon)"` as the address. For **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness) — Google's quality evaluation framework — a real business address is a trust signal. Local SEO also relies heavily on NAP (Name, Address, Phone) consistency. Missing address:
- Weakens Knowledge Panel eligibility
- Hurts local pack ranking
- Reduces trust score in manual quality evaluations  

**Fix:** Update with the actual business address before go-live. Also ensure the same address appears in all three `LocalBusiness` schemas.

---

## 🟡 MEDIUM — Fix Within First Week of Launch

### 11. About and Contact Page Meta Titles Are Generic
**Files:** `src/app/about/page.tsx`, `src/app/contact/page.tsx`  

| Page | Current Title | Issue |
|---|---|---|
| About | `About Us \| Best Interior Designers in Kolkata` | "About Us" wastes prime keyword space |
| Contact | `Contact Us \| Vastu Vista Interiors Kolkata` | "Contact Us" has near-zero search intent value |

**Suggested rewrites:**
- About: `Vastu Vista Interiors — Interior Designers in Kolkata Since 2014` (63 chars) — includes founding year for EEAT
- Contact: `Contact Interior Designers in Kolkata | Vastu Vista Interiors` (62 chars) — keyword-forward

---

### 12. No `WebSite` Schema with SearchAction on Homepage
**File:** `src/app/page.tsx`  
**Issue:** A `WebSite` schema with `SearchAction` enables the **Google Sitelinks Search Box** in SERPs when users search for the brand name. This appears as a search box under the main result for branded queries.  
**Fix:** Add to homepage schemas:
```js
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://vastuvistainteriors.com/#website",
  name: "Vastu Vista Interiors",
  url: "https://vastuvistainteriors.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://vastuvistainteriors.com/products/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

### 13. Not-Found Page Missing `robots: noindex`
**File:** `src/app/not-found.tsx`  
**Issue:** The 404 page has no `metadata` export at all. Without `robots: { index: false }`, Googlebot can technically attempt to index it (though it usually won't follow 404 responses). With a static export, the 404 page renders as a real HTML page that some crawlers may index.  
**Fix:** Add:
```ts
export const metadata: Metadata = {
  title: "Page Not Found | Vastu Vista Interiors",
  robots: { index: false, follow: false },
};
```

---

### 14. Layout OG Image Path Is Wrong in Metadata Declaration
**File:** `src/app/layout.tsx`  
**Issue:** The `openGraph.images` URL is `/assets/vastu-vista-logo.png` but the actual file is at `public/assets/vastu-vista-logo.png` (served at `/assets/vastu-vista-logo.png`). **Path is correct** — but the declared dimensions `width: 400, height: 120` are wrong; actual dimensions are **1622×531**. Incorrect dimension hints cause Facebook and LinkedIn to crop/display images incorrectly.  
**Fix:** Update to `width: 1622, height: 531` or replace with a proper 1200×630 OG image.

---

### 15. `keywords` Meta Tag Is Deprecated
**File:** `src/app/layout.tsx`  
**Issue:** The `keywords` array in layout metadata generates a `<meta name="keywords">` tag. Google has explicitly ignored this tag since 2009, and Bing since 2011. It's not harmful but adds unnecessary bytes to every page's `<head>`.  
**Fix:** Remove the `keywords` array from layout metadata.

---

### 16. Product Page OG Descriptions Missing `twitter:description`
**Files:** `src/app/products/[product]/page.tsx`, `src/app/products/[product]/[location]/page.tsx`  
**Issue:** Both `generateMetadata` functions set `openGraph.title` and `openGraph.description` but have no `twitter` object. Twitter will fall back to the `og:` tags for title/description but may not pick up the image correctly without an explicit `twitter:image`.  
**Fix:** Add `twitter: { card: "summary_large_image", images: [product.image] }` to both `generateMetadata` returns.

---

### 17. Sitemap `lastModified` Always Uses Build Date
**File:** `src/app/sitemap.ts`  
**Issue:** `lastModified: now` (where `now = new Date()`) means every URL in the sitemap claims to have been modified at build time, every single build. Google's crawlers will see all 430 pages as "new" on every deployment, potentially wasting crawl budget on unchanged pages.  
**Fix:** For static content that rarely changes (location pages), use a fixed date string. Reserve `new Date()` only for pages that genuinely change per build:
```ts
// Static pages that rarely change:
lastModified: new Date("2025-01-01"),
// Pages that change with data:
lastModified: now,
```

---

## 🟢 LOW — Nice-to-Have Improvements

### 18. No `theme-color` Meta Tag
**File:** `src/app/layout.tsx`  
**Issue:** No `<meta name="theme-color">` in the layout. This controls the browser chrome color on Android Chrome and Safari. Matching to `#1A1A1A` (dark brand color) would improve mobile experience.  
**Fix:** Add `themeColor: "#1A1A1A"` to layout metadata.

---

### 19. No Image Sitemap
**File:** `src/app/sitemap.ts`  
**Issue:** None of the 430 pages include image URLs in the sitemap. Google's image sitemap extension (`<image:image>`) helps index images for Google Images search. For an interior design company, image search traffic can be significant.  
**Fix:** Extend the sitemap to include `images` arrays for product and location pages using the Unsplash image URLs.

---

### 20. Products Listing Page Title Could Be Stronger
**File:** `src/app/products/page.tsx`  
**Current:** `All Interior Design Products in Kolkata | Vastu Vista Interiors`  
**Issue:** "All Interior Design Products" is generic. "Products" is an awkward word for what are actually "services" in SEO terminology. No one searches "all interior design products Kolkata."  
**Suggested:** `Interior Design Services in Kolkata | Vastu Vista Interiors` (58 chars)

---

### 21. `host` Directive in Robots.ts Is Non-Standard
**File:** `src/app/robots.ts`  
**Issue:** The `host` field in `MetadataRoute.Robots` generates `Host: https://vastuvistainteriors.com` in the robots.txt file. This directive is used by Yandex (Russian search engine) but is ignored by Google and Bing. Harmless but unnecessary.

---

### 22. Inconsistent `rel="noopener noreferrer"` on External Links
**Files:** `src/components/Footer.tsx`, all page files with WhatsApp/external `<a>` links  
**Issue:** Some `target="_blank"` external links have `rel="noopener noreferrer"` (correct) and others may not. Without `noopener`, there is a minor security risk (tab-napping). Without `noreferrer`, referral traffic analytics shows direct traffic instead of attributed source.  
**Fix:** Verify all `target="_blank"` external links include `rel="noopener noreferrer"`.

---

### 23. Portfolio Page Has No Schema
**File:** `src/app/portfolio/page.tsx`  
**Issue:** The portfolio page has a breadcrumb schema but no content schema. An `ImageGallery` or `CollectionPage` schema would help Google understand this is a gallery of interior design work.  
**Suggested schema type:** `CollectionPage` or `ImageGallery` with `about` pointing to `LocalBusiness @id`.

---

### 24. H1 Quality Check
Every page should have exactly one H1 that contains the primary keyword. Current status:

| Page | H1 | Notes |
|---|---|---|
| Homepage | "Best Interior Designer in Kolkata" | ✅ Good |
| About | "About Vastu Vista Interiors" | ⚠️ Weak — add "Kolkata" |
| Portfolio | "Interior Design Portfolio" | ⚠️ Add "Kolkata" |
| Contact | "Contact Vastu Vista Interiors" | ✅ Acceptable |
| Products | "Interior Design Products in Kolkata" | ✅ Good |
| Product detail | "{product.name} in Kolkata." | ✅ Good |
| Product+location | "{product.name} in {location.name}." | ✅ Good |

---

## Meta Title & Description Audit — All Pages

### Static Pages

| Page | Title | Chars | Desc | Chars | Canonical | OG Image |
|---|---|---|---|---|---|---|
| Homepage | Best Interior Designer in Kolkata \| Vastu Vista Interiors | 57 ✅ | Vastu Vista Interiors — the best interior designer... | 155 ✅ | ✅ | ❌ (logo only) |
| About | About Us \| Best Interior Designers in Kolkata | 46 ✅ | Learn about Vastu Vista Interiors... | 158 ✅ | ❌ MISSING | ❌ |
| Contact | Contact Us \| Vastu Vista Interiors Kolkata | 43 ✅ | Contact Vastu Vista Interiors — the best... | 154 ✅ | ❌ MISSING | ❌ |
| Portfolio | Interior Design Portfolio \| Vastu Vista Interiors Kolkata | 58 ✅ | View the portfolio of Vastu Vista Interiors... | 148 ✅ | ❌ MISSING | ❌ |
| Products | All Interior Design Products in Kolkata \| Vastu Vista Interiors | 65 ⚠️ | Browse all 20 interior design products... | 152 ✅ | ❌ MISSING | ❌ |

### Product Pages (20 pages)

| Product | metaTitle | Chars | metaDesc | Chars |
|---|---|---|---|---|
| Modular Kitchen Design | Modular Kitchen Design in Kolkata \| Vastu Vista Interiors | 57 ✅ | Expert modular kitchen design in Kolkata... | 143 ✅ |
| False Ceiling Installation | False Ceiling Design & Installation in Kolkata \| Vastu Vista Interiors | **71 ❌** | Premium false ceiling design and installation... | 149 ✅ |
| PVC Ceiling Panels | PVC Ceiling Panels Installation in Kolkata \| Vastu Vista Interiors | **67 ❌** | Affordable PVC ceiling panel installation... | 156 ✅ |
| Wallpaper Installation | Wallpaper Installation in Kolkata \| Vastu Vista Interiors | 57 ✅ | Professional wallpaper installation in Kolkata... | 149 ✅ |
| Wooden Flooring | Wooden Flooring Installation in Kolkata \| Vastu Vista Interiors | 63 ⚠️ | Premium wooden flooring installation... | 151 ✅ |
| Vinyl Flooring | Vinyl Flooring Installation in Kolkata \| Vastu Vista Interiors | 62 ⚠️ | Affordable vinyl flooring installation... | 148 ✅ |
| Customized Wardrobes | Customized Wardrobe Design in Kolkata \| Vastu Vista Interiors | 61 ⚠️ | Custom wardrobe design and installation... | 143 ✅ |
| TV Unit Design | TV Unit Design in Kolkata \| Vastu Vista Interiors | 49 ✅ | Custom TV unit and entertainment center... | 140 ✅ |
| Bedroom Interior Setup | Bedroom Interior Design in Kolkata \| Vastu Vista Interiors | 58 ✅ | Complete bedroom interior design... | 150 ✅ |
| Living Room Decoration | Living Room Interior Design in Kolkata \| Vastu Vista Interiors | 62 ⚠️ | Transform your living room with expert... | 138 ✅ |
| Dining Room Interior | Dining Room Interior Design in Kolkata \| Vastu Vista Interiors | 62 ⚠️ | Elegant dining room interior design... | 140 ✅ |
| Office Cabin Interior | Office Cabin Interior Design in Kolkata \| Vastu Vista Interiors | 63 ⚠️ | Professional office cabin interior design... | 144 ✅ |
| Reception Area Design | Reception Area Interior Design in Kolkata \| Vastu Vista Interiors | **65 ❌** | Impressive reception area design... | 151 ✅ |
| Restaurant Interior | Restaurant Interior Design in Kolkata \| Vastu Vista Interiors | 61 ⚠️ | Expert restaurant interior decoration... | 142 ✅ |
| Café Interior Design | Café Interior Design in Kolkata \| Vastu Vista Interiors | 55 ✅ | Trendy café interior design in Kolkata... | 117 ✅ |
| Luxury Sofa Set | Luxury Sofa Set Design in Kolkata \| Vastu Vista Interiors | 57 ✅ | Custom luxury sofa set design... | 125 ✅ |
| Wall Panel Decoration | Wall Panel Decoration in Kolkata \| Vastu Vista Interiors | 56 ✅ | Stylish wall panel decoration in Kolkata... | 143 ✅ |
| LED Lighting Design | LED Lighting Design in Kolkata \| Vastu Vista Interiors | 54 ✅ | Professional LED lighting design... | 120 ✅ |
| Space Saving Furniture | Space Saving Furniture in Kolkata \| Vastu Vista Interiors | 57 ✅ | Smart space-saving furniture solutions... | 152 ✅ |
| Home Renovation | Home Renovation Services in Kolkata \| Vastu Vista Interiors | 59 ✅ | Complete home renovation and interior... | 151 ✅ |

### Product × Location Pages (400 pages)

**Template:** `{product.name} in {location.name}, Kolkata | Vastu Vista Interiors`  
**Sample:** `Modular Kitchen Design in Salt Lake, Kolkata | Vastu Vista Interiors` = 68 chars ⚠️  

**Issue:** For products with longer names + longer location names, titles can reach 75–80 chars.  
**Worst case:** `Restaurant Interior Decoration in Picnic Garden, Kolkata | Vastu Vista Interiors` = 83 chars ❌  
**Fix:** Shorten the template — drop `, Kolkata` (location pages already have location in slug/content):  
`{product.name} in {location.name} | Vastu Vista Interiors`  
**Sample after fix:** `Modular Kitchen Design in Salt Lake | Vastu Vista Interiors` = 57 chars ✅  
**Worst case after fix:** `Restaurant Interior Decoration in Picnic Garden | Vastu Vista Interiors` = 72 chars ⚠️ — still long; also needs product name shortening.

**Description template:** `Looking for {product.name} in {location.name}, Kolkata? Vastu Vista Interiors provides expert {product.name.toLowerCase()} services to homes and businesses in {location.name}. {product.shortDesc}. Get a free quote today.`  
At longest this can hit 200+ chars ❌ — Google truncates at ~155–160 chars.  
**Fix:** Cap description at 155 chars or rewrite template to be shorter.

---

## Structured Data Inventory

| Schema Type | Where | Status |
|---|---|---|
| `LocalBusiness` | Layout (all 430 pages) | ⚠️ No @id, opening hours conflict |
| `LocalBusiness` | Homepage | ⚠️ Duplicate of layout version |
| `LocalBusiness` | Contact page | ⚠️ Duplicate of layout version |
| `Organization` | About page | ✅ Good |
| `FAQPage` | Homepage | ✅ Matches visible FAQ section |
| `FAQPage` | Product detail pages (20) | ❌ No visible FAQ on page — policy violation |
| `Service` | Product detail pages (20) | ✅ Good structure |
| `Service` | Product+location pages (400) | ✅ Good structure |
| `BreadcrumbList` | About, Contact, Products, Portfolio | ✅ Good |
| `BreadcrumbList` | Product detail (3 levels) | ✅ Good |
| `BreadcrumbList` | Product+location (4 levels) | ✅ Good |
| `Review` / `ItemList` | Homepage | ⚠️ Should nest inside LocalBusiness.review[] |
| `WebSite` with SearchAction | Homepage | ❌ Missing |
| `ImageGallery` / `CollectionPage` | Portfolio | ❌ Missing |

---

## Technical SEO Checklist

| Check | Status | Notes |
|---|---|---|
| HTTPS | ✅ | Assumed via `https://vastuvistainteriors.com` |
| Sitemap at `/sitemap.xml` | ✅ | 430+ URLs |
| Robots.txt at `/robots.txt` | ✅ | Allows all |
| `trailingSlash: true` | ✅ | Consistent URL format |
| `metadataBase` set | ✅ | In layout |
| Canonical on product pages | ✅ | Set in generateMetadata |
| Canonical on location pages | ✅ | Set in generateMetadata |
| Canonical on static pages | ❌ | Missing on 4/5 pages |
| `lang` attribute | ⚠️ | `en` should be `en-IN` |
| OG meta on all pages | ⚠️ | Only product pages have good OG image |
| Twitter Card meta | ❌ | Completely missing |
| `fetchpriority="high"` on LCP | ❌ | Missing on all hero images |
| `width`/`height` on `<img>` | ❌ | Missing — causes CLS |
| `loading="lazy"` on below-fold images | ⚠️ | Only on some images |
| Google Analytics / GSC verification | ❓ | Not visible in code — needs confirmation |
| 404 metadata with noindex | ❌ | Missing |
| Physical address in content | ❌ | "Coming soon" |

---

## Priority Fix Order for Go-Live

| # | Issue | Impact | Effort |
|---|---|---|---|
| 1 | Remove FAQPage schema from product pages | 🔴 Critical | Low |
| 2 | Fix duplicate/conflicting LocalBusiness schemas | 🔴 Critical | Medium |
| 3 | Add canonicals to About, Contact, Portfolio, Products | 🔴 Critical | Low |
| 4 | Replace OG image with 1200×630 interior photo | 🔴 Critical | Medium |
| 5 | Add OG image to all static page metadata | 🟠 High | Low |
| 6 | Fix 3 overlong product meta titles | 🟠 High | Low |
| 7 | Fix 400-page location title template (drop ", Kolkata") | 🟠 High | Low |
| 8 | Fix location description template length | 🟠 High | Low |
| 9 | Add Twitter Card meta globally | 🟠 High | Low |
| 10 | Change `lang="en"` to `lang="en-IN"` | 🟠 High | Low |
| 11 | Add `fetchpriority="high"` to hero images | 🟠 High | Medium |
| 12 | Update physical address | 🟠 High | Requires real info |
| 13 | Add 404 noindex metadata | 🟡 Medium | Low |
| 14 | Improve About & Contact meta titles | 🟡 Medium | Low |
| 15 | Add `WebSite` schema to homepage | 🟡 Medium | Low |
| 16 | Remove deprecated `keywords` meta | 🟢 Low | Low |
| 17 | Add `theme-color` meta | 🟢 Low | Low |
| 18 | Add image sitemap | 🟢 Low | Medium |
| 19 | Fix sitemap lastModified dates | 🟢 Low | Low |
| 20 | Add `CollectionPage` schema to portfolio | 🟢 Low | Low |

---

*Audit complete. Approve this document and I'll implement all fixes.*
