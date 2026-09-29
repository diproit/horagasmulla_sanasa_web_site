import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  inverted?: boolean;
  className?: string;
}

export function Breadcrumbs({
  items,
  inverted = true,
  className,
}: BreadcrumbsProps) {
  // Always start with Home if not provided
  const allItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items.filter((item) => item.label.toLowerCase() !== "home"),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-xs sm:text-sm font-medium", className)}
    >
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={item.label + index} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className={cn(
                    "w-3.5 h-3.5 shrink-0",
                    inverted ? "text-cyan/70" : "text-muted"
                  )}
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-semibold",
                    inverted ? "text-cyan-pale" : "text-text"
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    inverted
                      ? "text-white/80 hover:text-amber"
                      : "text-muted hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Returns Schema.org BreadcrumbList JSON-LD object
 */
export function generateBreadcrumbsJsonLd(
  items: BreadcrumbItem[],
  baseUrl: string = "https://horagasmulla-sanasa.org"
) {
  const allItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items.filter((item) => item.label.toLowerCase() !== "home"),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  };
}
