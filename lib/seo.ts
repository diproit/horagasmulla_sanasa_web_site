import type { Metadata } from "next";

export const SITE_NAME = "Dodangoda Horagasmulla SANASA Society Ltd";
export const OG_SITE_NAME = "Dodangoda Horagasmulla SANASA";

export const HOME_TITLE =
  "Dodangoda Horagasmulla SANASA Society Ltd — Trusted Cooperative Banking since 1965";
export const HOME_OG_TITLE = "Dodangoda Horagasmulla SANASA";
export const HOME_OG_DESCRIPTION =
  "Dodangoda Horagasmulla SANASA Society Ltd: a trusted cooperative bank serving Dodangoda since 1965 with savings, loans and community welfare programs.";

export const DEFAULT_DESCRIPTION =
  "Official website of Dodangoda Horagasmulla SANASA Society Ltd. Empowering our community with secure savings, low-interest agricultural and microfinance loans, and welfare projects.";

export const DEFAULT_KEYWORDS = [
  "Sanasa Bank",
  "cooperative bank",
  "savings",
  "loans",
  "Dodangoda",
  "Horagasmulla",
  "microfinance",
  "cooperative society",
  "Kalutara",
  "Sri Lanka",
];

export const BASE_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://horagasmulla.sanasa.org";

export const DEFAULT_OG_IMAGE = "/images/og-image.png";
export const DEFAULT_OG_IMAGE_ALT =
  "Horagasmulla SANASA logo: blue cupped hands holding the cooperative emblem, with the Sinhala name Horagasmulla over the bank building";

export interface BuildMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[] | string;
  image?: string;
}

/**
 * Builds standard type-safe Next.js metadata for Dodangoda Horagasmulla SANASA Society Ltd.
 * Enforces canonical URLs, Open Graph, Twitter cards, and conditional indexing robots directives.
 */
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_OG_IMAGE,
}: BuildMetadataParams = {}): Metadata {
  const isHome = !title || path === "/" || path === "";
  const fullTitle = isHome ? HOME_TITLE : `${title} — ${SITE_NAME}`;

  // Canonical and og:url:
  // Home page must be exactly "https://horagasmulla.sanasa.org/" (with trailing slash)
  // Inner pages: "https://horagasmulla.sanasa.org/about-us" etc. (no trailing slash)
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonicalUrl = isHome
    ? `${BASE_SITE_URL}/`
    : `${BASE_SITE_URL}${cleanPath.replace(/\/$/, "")}`;

  const ogTitle = isHome ? HOME_OG_TITLE : `${title} | ${OG_SITE_NAME}`;
  const ogDescription = isHome ? HOME_OG_DESCRIPTION : description;

  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

  const formattedKeywords = Array.isArray(keywords)
    ? keywords
    : keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

  const ogImageUrl = image.startsWith("http")
    ? image
    : `${BASE_SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    metadataBase: new URL(BASE_SITE_URL),
    title: fullTitle,
    description,
    keywords: formattedKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: allowIndexing
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        },
    openGraph: {
      type: "website",
      siteName: OG_SITE_NAME,
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      locale: "en_LK",
      images: [
        {
          url: ogImageUrl,
          width: 512,
          height: 512,
          type: "image/png",
          alt: DEFAULT_OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImageUrl,
          alt: DEFAULT_OG_IMAGE_ALT,
        },
      ],
    },
    icons: {
      icon: [
        { url: "/images/favicon/favicon.ico", sizes: "any" },
        { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/images/favicon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      ],
      shortcut: ["/images/favicon/favicon.ico"],
      apple: [
        { url: "/images/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
        { url: "/images/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
        { url: "/images/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
        { url: "/images/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
        { url: "/images/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
        { url: "/images/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
        { url: "/images/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
        { url: "/images/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
        { url: "/images/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/manifest.json",
  };
}
