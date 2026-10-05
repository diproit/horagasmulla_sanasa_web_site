import React from "react";
import { type MilestoneItem } from "@/content/about";
import { cn } from "@/lib/utils";

export interface TimelineProps {
  items: MilestoneItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative max-w-4xl mx-auto py-4", className)}>
      {/* Central vertical line on desktop, left-aligned on mobile */}
      <div
        className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="space-y-8 sm:space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={cn(
                "relative flex flex-col md:flex-row items-start md:items-center group",
                isEven ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber ring-4 ring-white shadow-xs z-10 group-hover:scale-125 transition-transform duration-200"
                aria-hidden="true"
              />

              {/* Content Card */}
              <div
                className={cn(
                  "ml-10 sm:ml-14 md:ml-0 md:w-[45%] w-[calc(100%-2.5rem)] sm:w-[calc(100%-3.5rem)]",
                  isEven ? "md:text-left" : "md:text-right"
                )}
              >
                <div className="bg-surface p-5 sm:p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow duration-200">
                  {/* Period */}
                  <div
                    className={cn(
                      "mb-2",
                      isEven ? "md:text-left" : "md:text-right"
                    )}
                  >
                    <span className="inline-flex px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-amber text-text tracking-wide">
                      {item.period}
                    </span>
                  </div>

                  {/* Milestone title */}
                  <h3 className="text-lg sm:text-xl font-bold text-text tracking-tight">
                    {item.title}
                  </h3>

                  {/* Milestone details */}
                  {item.bullets.length > 0 && (
                    <ul
                      className={cn(
                        "mt-3 space-y-2 text-sm text-muted leading-relaxed",
                        isEven ? "md:text-left" : "md:text-right"
                      )}
                    >
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={`${item.id}-bullet-${bulletIndex}`}
                          className={cn(
                            "flex gap-2",
                            isEven
                              ? "md:flex-row"
                              : "md:flex-row-reverse"
                          )}
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}