import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: "default" | "surface" | "tint" | "navy" | "hero";
  spacing?: "default" | "compact" | "spacious" | "none";
  className?: string;
  children: React.ReactNode;
}

export function Section({
  as: Component = "section",
  background = "default",
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const bgStyles = {
    default: "bg-background text-text",
    surface: "bg-surface text-text",
    tint: "bg-tint text-text",
    navy: "bg-navy text-white",
    hero: "bg-gradient-to-b from-surface via-tint to-background text-text",
  };

  // Section spacing: 64-96px desktop, 40-56px mobile (per brief Section 7)
  const spacingStyles = {
    default: "py-10 sm:py-14 lg:py-20",
    compact: "py-6 sm:py-8 lg:py-12",
    spacious: "py-14 sm:py-20 lg:py-28",
    none: "py-0",
  };

  return (
    <Component
      className={cn(bgStyles[background], spacingStyles[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
