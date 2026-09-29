"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className={cn("flex items-center", className)}>
      <ul className="flex items-center gap-1 xl:gap-2 list-none m-0 p-0">
        {siteConfig.navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname?.startsWith(item.href));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onLinkClick}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm transition-all duration-150 inline-block focus-visible:outline-2 focus-visible:outline-primary",
                  // Active link has soft blue pill background and bold royal-blue text (matching the photo)
                  isActive
                    ? "bg-tint text-primary font-bold shadow-2xs"
                    : "text-text font-medium hover:text-primary hover:bg-slate-100/80"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
