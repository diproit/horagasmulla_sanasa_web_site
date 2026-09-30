"use client";

import React, { useEffect, useRef, useState } from "react";
import { statistics, type StatItem } from "@/content/stats";

interface WelcomeCountUpStatProps {
  item: StatItem;
}

function WelcomeCountUpStat({ item }: WelcomeCountUpStatProps) {
  // Initialize with real value for SSR HTML
  const [display, setDisplay] = useState<string>(item.displayValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof item.value !== "number" || item.value <= 1) {
      // For string values like "Rs. 1 Billion" or if reduced motion is requested, keep real value immediately
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
      className="flex flex-col items-start text-left min-w-0"
    >
      <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-[#0B63D6] tracking-tight leading-none tabular-nums break-words sm:whitespace-nowrap">
        {display}
      </span>
      <span className="mt-2 text-xs sm:text-sm font-medium text-[#64748B] uppercase tracking-wider">
        {item.label}
      </span>
    </div>
  );
}

export interface WelcomeStatsProps {
  stats?: StatItem[];
  className?: string;
}

export function WelcomeStats({
  stats = statistics,
  className = "",
}: WelcomeStatsProps) {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 w-full ${className}`}
    >
      {stats.map((stat) => (
        <WelcomeCountUpStat key={stat.id} item={stat} />
      ))}
    </div>
  );
}

export default WelcomeStats;
