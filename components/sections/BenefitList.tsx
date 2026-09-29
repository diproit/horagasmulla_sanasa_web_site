import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { type MemberBenefit } from "@/content/membership";
import { cn } from "@/lib/utils";

export interface BenefitListProps {
  benefits: MemberBenefit[];
  variant?: "cards" | "list";
  className?: string;
}

export function BenefitList({
  benefits,
  variant = "cards",
  className,
}: BenefitListProps) {
  if (variant === "list") {
    return (
      <ul className={cn("space-y-4 list-none p-0 m-0", className)}>
        {benefits.map((benefit) => (
          <li key={benefit.title} className="flex items-start gap-3.5">
            <span className="w-6 h-6 rounded-full bg-tint text-primary flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
            </span>
            <div className="text-sm sm:text-base leading-relaxed text-slate-700">
              <strong className="font-bold text-text mr-1">
                {benefit.leadIn || `${benefit.title}:`}
              </strong>
              <span>{benefit.description}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  // Cards layout (2-column or 4-column pattern per Section 7)
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6",
        className
      )}
    >
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex items-start gap-4 p-5 sm:p-6 bg-surface rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-lg bg-tint text-primary flex items-center justify-center shrink-0 border border-primary/10">
            <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div className="flex-1">
            {/* Semantic H3 for card */}
            <h3 className="text-base sm:text-lg font-bold text-text">
              {benefit.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
