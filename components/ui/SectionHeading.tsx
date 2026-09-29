import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  heading: string;
  subText?: string;
  align?: "center" | "left";
  withAmberBar?: boolean;
  inverted?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({
  badge,
  heading,
  subText,
  align = "center",
  withAmberBar = false,
  inverted = false,
  className,
  id,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      id={id}
      className={cn(
        "mb-8 sm:mb-12",
        isCentered ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3",
            inverted
              ? "bg-primary-light/20 text-cyan-pale border border-cyan/30"
              : "bg-tint text-primary border border-primary/20"
          )}
        >
          {badge}
        </div>
      )}

      <div
        className={cn(
          "flex items-center gap-3",
          isCentered ? "justify-center" : "justify-start"
        )}
      >
        {withAmberBar && !isCentered && (
          <span
            className="w-1.5 h-7 sm:h-9 bg-amber rounded-full shrink-0"
            aria-hidden="true"
          />
        )}
        <h2
          className={cn(
            // Section heading type scale: 30-36px bold, scaling cleanly on mobile (24-34px)
            "text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight",
            inverted ? "text-white" : "text-text"
          )}
        >
          {heading}
        </h2>
        {withAmberBar && isCentered && (
          <span
            className="w-1.5 h-7 sm:h-9 bg-amber rounded-full shrink-0"
            aria-hidden="true"
          />
        )}
      </div>

      {subText && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg leading-relaxed",
            // Accessibility rules:
            // - Cyan-pale on dark/navy backgrounds
            // - Muted slate-gray (#64748B) on light backgrounds
            inverted ? "text-cyan-pale" : "text-muted"
          )}
        >
          {subText}
        </p>
      )}
    </div>
  );
}
