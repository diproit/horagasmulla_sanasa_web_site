import React from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

export interface PageBannerProps {
  title: string;
  subText: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  className?: string;
}

export function PageBanner({
  title,
  subText,
  breadcrumbs,
  badge,
  className,
}: PageBannerProps) {
  return (
    <div
      className={cn(
        "relative bg-navy text-white py-12 sm:py-16 lg:py-20 border-b border-white/10 overflow-hidden",
        className
      )}
    >
      {/* Subtle decorative background gradient circles */}
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Breadcrumbs at the top of banner */}
        <div className="mb-4 sm:mb-6">
          <Breadcrumbs items={breadcrumbs} inverted={true} />
        </div>

        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-cyan-pale border border-cyan/30 mb-4">
            {badge}
          </div>
        )}

        {/* Semantic H1 for the page (only one H1 per page!) */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-4xl leading-tight">
          {title}
        </h1>

        {/* One-line sub-text in pale-cyan */}
        <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-cyan-pale max-w-3xl leading-relaxed">
          {subText}
        </p>
      </Container>
    </div>
  );
}
