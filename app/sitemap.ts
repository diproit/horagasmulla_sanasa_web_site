import type { MetadataRoute } from "next";
import { BASE_SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const pages = [
    {
      path: "/",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about-us",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/membership",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/management",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return pages.map((page) => ({
    url: `${BASE_SITE_URL}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
