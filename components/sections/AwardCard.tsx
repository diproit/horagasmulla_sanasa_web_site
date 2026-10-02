import React from "react";
import Image from "next/image";
import type { Award } from "@/content/awards";
import { siteImages, type ImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";

export interface AwardCardProps {
  award: Award;
  className?: string;
}

export function AwardCard({ award, className }: AwardCardProps) {
  const imageInfo = siteImages[award.imageKey as ImageKey];
  const imageSrc = imageInfo?.src || "/images/award-bronze.jpg";

  return (
    <article
      className={cn(
        "group bg-white rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-slate-100/80 flex flex-col overflow-hidden",
        className
      )}
    >
      {/* 4:3 Image container with top-left amber year pill */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={award.imageAlt}
          width={300}
          height={450}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500"
        />

        {award.year !== null && (
          <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#F59E0B] text-slate-900 shadow-xs">
            {award.year}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Small category chip: light-blue background, royal-blue text */}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EBF3FE] text-[#0B63D6] self-start mb-2.5">
          {award.category}
        </span>

        {/* H3 title: navy, semibold */}
        <h3 className="text-base sm:text-lg font-semibold text-[#073070] leading-snug">
          {award.title}
        </h3>

        {/* Muted description */}
        <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
          {award.description}
        </p>
      </div>
    </article>
  );
}
