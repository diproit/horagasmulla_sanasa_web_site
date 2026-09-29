import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
  bordered?: boolean;
  background?: "surface" | "tint" | "navy" | "transparent";
  className?: string;
  children: React.ReactNode;
}

export function Card({
  hoverLift = true,
  bordered = true,
  background = "surface",
  className,
  children,
  ...props
}: CardProps) {
  const bgStyles = {
    surface: "bg-surface text-text",
    tint: "bg-tint text-text",
    navy: "bg-navy text-white",
    transparent: "bg-transparent text-text",
  };

  return (
    <div
      className={cn(
        // Rounded corners 8-12px (rounded-xl is 12px)
        "rounded-xl transition-all duration-200 overflow-hidden",
        bgStyles[background],
        bordered &&
          (background === "navy"
            ? "border border-cyan/20"
            : "border border-slate-200/80"),
        // Soft card shadows with slightly stronger hover shadow and gentle lift
        hoverLift
          ? "shadow-sm hover:shadow-md hover:-translate-y-1"
          : "shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-5 sm:p-6 pb-2 sm:pb-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg sm:text-xl font-bold tracking-tight text-text",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted leading-relaxed mt-1.5", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-5 sm:p-6 pt-2 sm:pt-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-5 sm:p-6 pt-0 flex items-center justify-between mt-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
