import type { MetadataRoute } from "next";
import { BASE_SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isIndexingAllowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

  if (!isIndexingAllowed) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_SITE_URL}/sitemap.xml`,
  };
}
