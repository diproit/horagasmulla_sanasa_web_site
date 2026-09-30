import type { Metadata } from "next";

export const SITE_NAME = "Dodangoda Horagasmulla SANASA Society Ltd";
export const HOME_TITLE =
  "Dodangoda Horagasmulla SANASA Society Ltd — Trusted Cooperative Banking since 1965";
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
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

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
  image = "/images/og-image.svg",
}: BuildMetadataParams = {}): Metadata {
  const isHome = !title || path === "/" || path === "";
  const fullTitle = isHome ? HOME_TITLE : `${title} — ${SITE_NAME}`;

  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonicalUrl = `${BASE_SITE_URL}${cleanPath}`;
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
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_LK",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
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
