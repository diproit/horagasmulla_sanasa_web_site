import React from "react";
import Image from "next/image";
import type { WelfareActivity } from "@/content/services";
import { siteImages, type ImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";

export interface ActivityCardProps {
  activity: WelfareActivity;
  className?: string;
}

export function ActivityCard({ activity, className }: ActivityCardProps) {
  const imageInfo = siteImages[activity.imageKey as ImageKey];
  const imageSrc = imageInfo?.src || "/images/main-office.jpg";
  const imageWidth = imageInfo?.width || 800;
  const imageHeight = imageInfo?.height || 600;

  return (
    <article
      id={activity.id}
      className={cn(
        "group bg-white rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 flex flex-col h-full overflow-hidden scroll-mt-28",
        className
      )}
    >
      {/* 4:3 Image container with bottom-left amber date pill */}
      <div className="relative aspect-[4/2] w-full overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={imageSrc}
          alt={activity.imageAlt}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {activity.dateLabel && (
          <div className="absolute bottom-3 left-3">
            {activity.isoDate ? (
              <time
                dateTime={activity.isoDate}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#F59E0B] text-slate-950 shadow-xs"
              >
                {activity.dateLabel}
              </time>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#F59E0B] text-slate-950 shadow-xs">
                {activity.dateLabel}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Small tag chip: light-blue background, royal-blue text */}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EBF3FE] text-[#0B63D6] self-start mb-3">
          {activity.tag}
        </span>

        {/* H3 title: navy, semibold */}
        <h3 className="text-base sm:text-lg font-semibold text-[#073070] leading-snug mb-2">
          {activity.title}
        </h3>

        {/* Description in muted gray */}
        <p className="text-sm text-slate-600 leading-relaxed flex-1">
          {activity.description}
        </p>
      </div>
    </article>
  );
}
