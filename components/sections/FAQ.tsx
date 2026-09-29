import React from "react";
import { ChevronDown } from "lucide-react";
import { faqs as defaultFaqs, type FAQItem } from "@/content/faqs";
import { cn } from "@/lib/utils";

export interface FAQProps {
  items?: FAQItem[];
  category?: "membership" | "services" | "contact";
  className?: string;
}

export function FAQ({ items = defaultFaqs, category, className }: FAQProps) {
  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;

  return (
    <div className={cn("space-y-4 max-w-3xl mx-auto", className)}>
      {filteredItems.map((item) => (
        <details
          key={item.id}
          className="group bg-surface rounded-xl border border-slate-200/90 shadow-xs transition-all duration-200 open:shadow-sm open:border-primary/40 overflow-hidden"
        >
          <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer select-none font-bold text-base sm:text-lg text-text hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary list-none [&::-webkit-details-marker]:hidden">
            <span className="leading-snug">{item.question}</span>
            <span className="w-8 h-8 rounded-full bg-tint flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
              <ChevronDown
                className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </span>
          </summary>

          <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-muted leading-relaxed border-t border-slate-100 pt-4">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

/**
 * Returns Schema.org FAQPage JSON-LD object
 */
export function generateFaqJsonLd(items: FAQItem[] = defaultFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
