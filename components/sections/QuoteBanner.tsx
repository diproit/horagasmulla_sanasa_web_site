import React from "react";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

export interface QuoteBannerProps {
  quote?: string;
  subText?: string;
  className?: string;
}

export function QuoteBanner({
  quote = homeContent.closingQuote.quote,
  subText = homeContent.closingQuote.subText,
  className,
}: QuoteBannerProps) {
  return (
    <div
      className={cn(
        "relative bg-navy text-white py-14 sm:py-20 border-y border-white/10 overflow-hidden text-center",
        className
      )}
    >
      {/* Decorative gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-cyan/15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Large Amber Quote Mark */}
        <div
          className="text-amber text-6xl sm:text-7xl lg:text-8xl font-serif leading-none select-none -mb-4 sm:-mb-6 opacity-90"
          aria-hidden="true"
        >
          “
        </div>

        {/* Semantic blockquote */}
        <blockquote className="space-y-4">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
            {quote}
          </p>
          {subText && (
            <footer className="text-sm sm:text-base text-cyan-pale font-medium">
              — {subText}
            </footer>
          )}
        </blockquote>
      </Container>
    </div>
  );
}
