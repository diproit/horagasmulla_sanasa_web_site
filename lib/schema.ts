import { BASE_SITE_URL, SITE_NAME, HOME_TITLE, DEFAULT_DESCRIPTION } from "./seo";
import { awards } from "@/content/awards";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Generates Schema.org Organization schema
 */
export function getOrganizationSchema(baseUrl: string = BASE_SITE_URL): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: SITE_NAME,
    url: baseUrl,
    logo: `${baseUrl}/images/sanasa-logo.svg`,
    email: "sanasa.hor@gmail.com",
    telephone: ["+94706400288", "+94342285061"],
    foundingDate: "1965",
    sameAs: [
      "https://www.facebook.com/share/1FfbYzc2ot/",
      "https://youtube.com/@sanasatv?si=htc9BXE5Sju3PEbm",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+94706400288",
        contactType: "customer service",
        availableLanguage: ["si", "en"],
        areaServed: "LK",
      },
      {
        "@type": "ContactPoint",
        telephone: "+94342285061",
        contactType: "office",
        availableLanguage: ["si", "en"],
        areaServed: "LK",
      },
    ],
  };
}

/**
 * Generates Schema.org WebSite schema
 */
export function getWebSiteSchema(baseUrl: string = BASE_SITE_URL): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-LK",
  };
}

/**
 * Generates Schema.org BankOrCreditUnion schema
 */
export function getBankOrCreditUnionSchema(
  baseUrl: string = BASE_SITE_URL
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BankOrCreditUnion",
    "@id": `${baseUrl}/#bank`,
    name: SITE_NAME,
    alternateName: "Horagasmulla SANASA",
    description: HOME_TITLE,
    url: baseUrl,
    logo: `${baseUrl}/images/sanasa-logo.svg`,
    image: `${baseUrl}/images/og-image.svg`,
    telephone: ["+94706400288", "+94342285061"],
    email: "sanasa.hor@gmail.com",
    foundingDate: "1965",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Horagasmulla",
      addressLocality: "Dodangoda",
      addressRegion: "Western Province",
      postalCode: "12020",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.55803,
      longitude: 80.007111,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:30",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/share/1FfbYzc2ot/",
      "https://youtube.com/@sanasatv?si=htc9BXE5Sju3PEbm",
    ],
    parentOrganization: {
      "@id": `${baseUrl}/#organization`,
    },
    award: awards.map((a) => (a.year ? `${a.year} ${a.title}` : a.title)),
  };
}

/**
 * Helper to build BreadcrumbList schema
 */
export function getBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = BASE_SITE_URL
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const itemUrl = item.path.startsWith("http")
        ? item.path
        : `${baseUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

/**
 * Helper to build FAQPage schema
 */
export function getFaqSchema(faqs: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Returns the unified root graph containing Organization, WebSite, and BankOrCreditUnion
 * suitable for inclusion in root layout.
 */
export function getRootSchemas(baseUrl: string = BASE_SITE_URL): Record<string, unknown>[] {
  return [
    getOrganizationSchema(baseUrl),
    getWebSiteSchema(baseUrl),
    getBankOrCreditUnionSchema(baseUrl),
  ];
}
