# SEO & Structure Verification Checklist
**Dodangoda Horagasmulla SANASA Society Ltd**

---

## 1. Page-by-Page SEO Metadata & Headings

| Page | URL Path | Page Title (50–65 chars) | Meta Description (140–160 chars) | Primary H1 | Primary Keyword |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Home** | `/` | `Dodangoda Horagasmulla SANASA Society Ltd — Trusted Cooperative Banking since 1965` (76 chars) | `Dodangoda Horagasmulla SANASA Society Ltd offers secure savings, agricultural and microfinance loans, and community welfare projects in Dodangoda since 1965.` (158 chars) | `Your Trusted Cooperative Banking Partner in Dodangoda` | `Sanasa Bank` |
| **About Us** | `/about-us` | `About Us — Dodangoda Horagasmulla SANASA Society Ltd` (54 chars) | `Established on 10 July 1965 with 42 founding members, Dodangoda Horagasmulla SANASA Society Ltd offers cooperative banking and dedicated community service.` (156 chars) | `About Us` | `cooperative bank legacy` |
| **Our Services** | `/services` | `Savings Accounts, Loans & Welfare Services — Horagasmulla SANASA` (65 chars) | `Horagasmulla SANASA: 11 savings accounts up to 10% p.a. and 11 loan types from 9% to 35% p.a., plus community welfare programs in Dodangoda.` (142 chars) | `Our Services` | `savings account Dodangoda` |
| **Membership** | `/membership` | `Membership — Dodangoda Horagasmulla SANASA Society Ltd` (55 chars) | `Join Horagasmulla SANASA: access welfare & financial benefits including emergency assistance, loans, education, health support, marriage, and childbirth aid.` (152 chars) | `Membership` | `Sanasa Bank membership` |
| **Management** | `/management` | `Management — Dodangoda Horagasmulla SANASA Society Ltd` (55 chars) | `Meet the democratically elected Board of Directors and leadership of Horagasmulla SANASA Society Ltd, dedicated to transparency, integrity, and community trust.` (161 chars) | `Management` | `Board of Directors Horagasmulla` |
| **Contact Us** | `/contact` | `Contact Us — Dodangoda Horagasmulla SANASA Society Ltd` (55 chars) | `Contact Dodangoda Horagasmulla SANASA Society Ltd: branch address, office & WhatsApp numbers, email inquiries, business hours, and Google Maps directions.` (155 chars) | `Contact Us` | `Contact Sanasa Bank` |
| **404 Not Found** | `/_not-found` | `Page Not Found — Dodangoda Horagasmulla SANASA Society Ltd` (59 chars) | `The page you are looking for does not exist. Browse our cooperative banking services, savings accounts, or contact Horagasmulla SANASA.` (138 chars) | `Oops! We couldn't find that page` | `N/A (noindex)` |

---

## 2. Heading Hierarchy & Structure Audit

- [x] **Exactly one H1 per page**:
  - `/`: Hero H1 "Your Trusted Cooperative Banking Partner in Dodangoda"
  - `/about-us`: PageBanner H1 "About Us"
  - `/services`: PageBanner H1 "Our Services"
  - `/membership`: PageBanner H1 "Membership"
  - `/management`: PageBanner H1 "Management"
  - `/contact`: PageBanner H1 "Contact Us"
  - `not-found.tsx`: H1 "Oops! We couldn't find that page"
- [x] **Zero skipped heading levels**:
  - H1 &rarr; H2 (Section headings, including "Our Management Team" on `/management`) &rarr; H3 (Cards / Subsection blocks) &rarr; H4 (nested items).
  - Quotes, decorative callouts, and stats use semantic `<blockquote>`, `<span>`, or visually hidden `<h2 className="sr-only">`.

---

## 3. Meta Tags & Social Sharing Verification

- [x] **Production Domain**: `https://horagasmulla.sanasa.org` configured with `metadataBase`.
- [x] **Canonical URLs**: Built dynamically using `NEXT_PUBLIC_SITE_URL` via `buildMetadata` helper (`lib/seo.ts`).
  - Home: `https://horagasmulla.sanasa.org/` (exact trailing slash)
  - Inner Pages: `https://horagasmulla.sanasa.org/{path}` (no trailing slash)
- [x] **Open Graph Tags**:
  - `og:type`: "website".
  - `og:site_name`: "Dodangoda Horagasmulla SANASA".
  - `og:locale`: "en_LK".
  - `og:image`: 512x512 PNG card (`https://horagasmulla.sanasa.org/images/og-image.png`).
  - `og:image:type`: "image/png".
  - `og:image:alt`: "Horagasmulla SANASA logo: blue cupped hands holding the cooperative emblem, with the Sinhala name Horagasmulla over the bank building".
- [x] **Twitter / X Cards**: `summary` card with matching title, description, image (`https://horagasmulla.sanasa.org/images/og-image.png`), and alt text.
- [x] **Robots Meta Directives**:
  - `NEXT_PUBLIC_ALLOW_INDEXING=true`: Emits `index: true, follow: true, "max-image-preview": "large"`.
  - Otherwise: Emits `noindex, nofollow, noimageindex`.
  - `app/not-found.tsx`: Explicitly set to `noindex, nofollow`.

### Open Graph & Social Sharing Review Matrix

| Page | URL Path (`og:url` / Canonical) | Open Graph Title (`og:title`) | Open Graph Description (`og:description`) |
| :--- | :--- | :--- | :--- |
| **Home** | `https://horagasmulla.sanasa.org/` | `Dodangoda Horagasmulla SANASA` | `Dodangoda Horagasmulla SANASA Society Ltd: a trusted cooperative bank serving Dodangoda since 1965 with savings, loans and community welfare programs.` |
| **About Us** | `https://horagasmulla.sanasa.org/about-us` | `About Us \| Dodangoda Horagasmulla SANASA` | `Established on 10 July 1965 with 42 founding members, Dodangoda Horagasmulla SANASA Society Ltd offers cooperative banking and dedicated community service.` |
| **Our Services** | `https://horagasmulla.sanasa.org/services` | `Savings Accounts, Loans & Welfare Services \| Dodangoda Horagasmulla SANASA` | `Horagasmulla SANASA: 11 savings accounts up to 10% p.a. and 11 loan types from 9% to 35% p.a., plus community welfare programs in Dodangoda.` |
| **Membership** | `https://horagasmulla.sanasa.org/membership` | `Membership \| Dodangoda Horagasmulla SANASA` | `Join Horagasmulla SANASA: access welfare & financial benefits including emergency assistance, loans, education, health support, marriage, and childbirth aid.` |
| **Management** | `https://horagasmulla.sanasa.org/management` | `Management \| Dodangoda Horagasmulla SANASA` | `Meet the democratically elected Board of Directors and leadership of Horagasmulla SANASA Society Ltd, dedicated to transparency, integrity, and community trust.` |
| **Contact Us** | `https://horagasmulla.sanasa.org/contact` | `Contact Us \| Dodangoda Horagasmulla SANASA` | `Contact Dodangoda Horagasmulla SANASA Society Ltd: branch address, office & WhatsApp numbers, email inquiries, business hours, and Google Maps directions.` |


---

## 4. Accessibility & Anchor Text Audit

- [x] **Image Alt Text**:
  - All content images have descriptive alt text (e.g. `Main Office Entrance - Dodangoda Horagasmulla SANASA Bank`, `Portrait of [name], Director`).
  - Decorative elements / SVGs have `aria-hidden="true"`.
- [x] **Descriptive Link Text**:
  - Zero unlabelled "click here" or bare "Learn More" links.
  - "Learn More" links in `ServiceCard` include `<span className="sr-only"> about {title}</span>`.
  - Icon buttons, phone links, and WhatsApp links have full `aria-label` attributes.

---

## 5. Internal Linking Mesh Audit

Every inner page links onward to at least two other relevant pages:

- **About Us (`/about-us`)**:
  1. Links to `/membership` ("Explore Membership")
  2. Links to `/contact` ("Contact Branch Office")
  3. Inverted breadcrumbs link to `/` (Home)
- **Our Services (`/services`)**:
  1. Links to `/membership` ("Become a member", "Apply as Member")
  2. Links to `/contact` ("Contact Us", "Inquire at Branch")
  3. Inverted breadcrumbs link to `/` (Home)
- **Membership (`/membership`)**:
  1. Links to `/contact` ("Contact Us to Register")
  2. Links to `/services` ("Explore Our Services")
  3. Inverted breadcrumbs link to `/` (Home)
- **Management (`/management`)**:
  1. Links to `/membership` ("Join As a Member")
  2. Links to `/contact` ("Contact Branch Office", "Contact our office")
  3. Inverted breadcrumbs link to `/` (Home)
- **Contact Us (`/contact`)**:
  1. Links to `/services` ("View Financial Services")
  2. Links to `/membership` ("Explore Membership")
  3. Inverted breadcrumbs link to `/` (Home)
- **404 Page (`/not-found`)**:
  - Contains direct links to all six main pages (`/`, `/about-us`, `/services`, `/membership`, `/management`, `/contact`) plus a "Back to Home" button.

---

## 6. Structured Data (Schema.org JSON-LD) Audit

- [x] **Root Layout (`app/layout.tsx`)**:
  - `Organization`: `@id`, `name`, `url`, `logo`, `telephone`, `email`, `foundingDate: 1965-07-10`, `sameAs` (Facebook & YouTube), and `contactPoint`.
  - `WebSite`: `@id`, `url`, `name`, `publisher: #organization`, `inLanguage: en-LK`.
  - `BankOrCreditUnion`: `@id`, `name`, `address` (PostalAddress, LK, Dodangoda), `geo`, `telephone` (+94 format), `openingHoursSpecification` (Tue-Sun 08:30-15:00), `foundingDate: 1965-07-10`.
- [x] **Home (`app/page.tsx`)**:
  - `BankOrCreditUnion` schema.
- [x] **All 5 Inner Pages (`app/*/page.tsx`)**:
  - `BreadcrumbList` schema (`itemListElement` with `ListItem`, `position`, `name`, and canonical `item` URL).
- [x] **Services & Contact Pages**:
  - `FAQPage` schema (`mainEntity` with `Question` and `acceptedAnswer`).
- [x] **Security**: All JSON-LD rendered through `components/seo/JsonLd.tsx` with `<` entity escaping (`\u003c`) to prevent XSS.

---

## 7. Sitemap & Robots Configuration

- [x] **`app/sitemap.ts`**:
  - Lists all 6 pages (`/`, `/about-us`, `/services`, `/membership`, `/management`, `/contact`).
  - Home priority: `1.0`, changeFrequency: `weekly`.
  - Inner pages priority: `0.8`, changeFrequency: `monthly`.
  - Dynamic `lastModified` date.
- [x] **`app/robots.ts`**:
  - Reads `NEXT_PUBLIC_ALLOW_INDEXING`.
  - Mode 1 (indexing enabled): `allow: "/"`, references `${BASE_SITE_URL}/sitemap.xml`.
  - Mode 2 (indexing disabled): `disallow: "/"`.
