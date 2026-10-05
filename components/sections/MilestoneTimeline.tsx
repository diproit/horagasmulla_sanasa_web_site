import React from "react";
import { type Milestone } from "@/content/about";
import { cn } from "@/lib/utils";

export interface MilestoneTimelineProps {
  items: Milestone[];
  className?: string;
}

export function MilestoneTimeline({ items, className }: MilestoneTimelineProps) {
  return (
    <div className={cn("relative w-full max-w-5xl mx-auto py-4", className)}>
      {/* Central vertical line on desktop (lg:), left-aligned on tablet & mobile */}
      <div
        className="absolute top-3 bottom-3 left-4 sm:left-6 lg:left-1/2 w-[2px] bg-[#B2D4F8] -translate-x-1/2"
        aria-hidden="true"
      />

      <ol className="relative space-y-8 sm:space-y-10 lg:space-y-9 list-none p-0 m-0">
        {items.map((item, index) => {
          const isEven = index % 2 === 0; // index 0 (left), index 1 (right), index 2 (left)...
          const isFeatured = Boolean(item.featured);

          return (
            <li
              key={item.id}
              className={cn(
                "relative flex flex-col items-start lg:flex-row lg:items-start group",
                isEven ? "lg:justify-start" : "lg:justify-end"
              )}
            >
              {/* Dot on vertical line: left-aligned on mobile, centered on lg */}
              <div
                className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FFB300] ring-4 ring-white shadow-xs z-10"
                aria-hidden="true"
              />

              {/* Mobile / Tablet Horizontal Connector from line (left-4/6) to card (ml-9/12) */}
              <div
                className="block lg:hidden absolute left-4 sm:left-6 top-[31px] w-5 sm:w-6 h-[2px] bg-[#B2D4F8] -translate-y-1/2"
                aria-hidden="true"
              />

              {/* Desktop Horizontal Connector between center line (50%) and card edge (44% or 56%) */}
              {isEven ? (
                <div
                  className="hidden lg:block absolute left-[44%] w-[6%] top-[31px] h-[2px] bg-[#B2D4F8] -translate-y-1/2"
                  aria-hidden="true"
                />
              ) : (
                <div
                  className="hidden lg:block absolute left-[50%] w-[6%] top-[31px] h-[2px] bg-[#B2D4F8] -translate-y-1/2"
                  aria-hidden="true"
                />
              )}

              {/* Milestone Card */}
              <article
                style={{ contentVisibility: "auto", containIntrinsicSize: "1px 220px" }}
                className={cn(
                  "w-[calc(100%-2.25rem)] sm:w-[calc(100%-3rem)] ml-9 sm:ml-12 lg:ml-0 lg:w-[44%]",
                  "rounded-xl p-5 sm:p-6 transition-shadow duration-200",
                  isFeatured
                    ? "bg-[#F0F6FF] border border-blue-200/90 border-l-4 border-l-[#0B63D6] shadow-sm hover:shadow-md"
                    : "bg-white border border-slate-200/90 shadow-xs hover:shadow-md"
                )}
              >
                {/* Period Badge as bold pill */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className={cn(
                      "font-bold rounded-full tracking-wide inline-flex items-center whitespace-nowrap",
                      isFeatured
                        ? "bg-[#FFB300] text-slate-900 px-3.5 sm:px-4 py-1 text-xs sm:text-sm shadow-2xs"
                        : "bg-[#0B63D6] text-white px-3 sm:px-3.5 py-1 text-xs sm:text-sm"
                    )}
                  >
                    {item.period}
                  </span>
                </div>

                {/* H3 Entry Title */}
                <h3
                  className={cn(
                    "text-[#073070] font-semibold tracking-tight leading-snug break-words",
                    isFeatured
                      ? "text-xl sm:text-2xl font-bold mt-2.5"
                      : "text-lg sm:text-xl mt-2"
                  )}
                >
                  {item.title}
                </h3>

                {/* Bullets List */}
                {item.bullets && item.bullets.length > 0 && (
                  <ul
                    className="mt-4 space-y-2 text-[15px] sm:text-base text-[#64748B] leading-relaxed list-none p-0 m-0"
                    role="list"
                  >
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-[#0B63D6] shrink-0 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="break-words">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
