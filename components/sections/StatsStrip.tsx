"use client";

import React, { useEffect, useRef, useState } from "react";
import { statistics, type StatItem } from "@/content/stats";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface CountUpStatProps {
  item: StatItem;
}

function CountUpStat({ item }: CountUpStatProps) {
  const [display, setDisplay] = useState<string>(item.displayValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof item.value !== "number" || item.value <= 1) {
      // For string values like "Rs. 1 Billion" or if reduced motion is requested, show real value immediately
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const target = item.value;
          const duration = 1600; // ms
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * target);

            const suffix = item.suffix || "";
            setDisplay(`${currentVal}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setDisplay(item.displayValue);
            }
          };

          requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [item]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center p-4 sm:p-6"
    >
      {/* 36-44px bold white number */}
      <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none tabular-nums">
        {display}
      </span>
      {/* Pale cyan label */}
      <span className="mt-2 text-xs sm:text-sm font-semibold tracking-wider text-cyan-pale uppercase">
        {item.label}
      </span>
      {item.description && (
        <span className="mt-1 text-xs text-slate-300/80 max-w-[200px] hidden sm:block">
          {item.description}
        </span>
      )}
    </div>
  );
}

export interface StatsStripProps {
  stats?: StatItem[];
  className?: string;
}

export function StatsStrip({ stats = statistics, className }: StatsStripProps) {
  return (
    <div
      className={cn(
        "bg-navy text-white border-y border-white/10 relative overflow-hidden py-6 sm:py-8 lg:py-10",
        className
      )}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan/10 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <h2 className="sr-only">Key Statistics & Highlights</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat) => (
            <CountUpStat key={stat.id} item={stat} />
          ))}
        </div>
      </Container>
    </div>
  );
}
