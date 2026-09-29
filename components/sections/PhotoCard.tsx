import React from "react";
import { ImageWithAlt } from "@/components/ui/ImageWithAlt";
import { type ImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";

export interface PhotoCardItem {
  id: string;
  title: string;
  caption?: string;
  subText?: string;
  imageKey?: ImageKey;
  src?: string;
  alt?: string;
  badge?: string;
  isChairman?: boolean;
}

export interface PhotoCardProps {
  item: PhotoCardItem;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "auto";
  className?: string;
}

export function PhotoCard({
  item,
  aspectRatio = "video",
  className,
}: PhotoCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col bg-surface rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200",
        item.isChairman && "ring-2 ring-primary/40",
        className
      )}
    >
      {/* Equal-sized photo header */}
      <div className="relative w-full overflow-hidden bg-slate-100">
        <ImageWithAlt
          imageKey={item.imageKey}
          src={item.src}
          alt={item.alt || item.title}
          aspectRatio={aspectRatio}
          rounded="none"
          className="group-hover:scale-105 transition-transform duration-300"
        />

        {item.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-navy/90 text-cyan-pale backdrop-blur-xs border border-cyan/20">
            {item.badge}
          </span>
        )}
      </div>

      {/* Caption & details below image */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Semantic H3 for card */}
        <h3 className="text-base sm:text-lg font-bold text-text group-hover:text-primary transition-colors leading-snug">
          {item.title}
        </h3>

        {item.caption && (
          <p
            className={cn(
              "mt-1.5 text-xs sm:text-sm leading-relaxed",
              item.isChairman
                ? "text-primary font-semibold"
                : "text-muted font-normal"
            )}
          >
            {item.caption}
          </p>
        )}

        {item.subText && (
          <p className="mt-2 text-xs text-slate-500 leading-normal">
            {item.subText}
          </p>
        )}
      </div>
    </article>
  );
}

export interface PhotoCardGridProps {
  items: PhotoCardItem[];
  columns?: 3 | 4;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "auto";
  className?: string;
}

export function PhotoCardGrid({
  items,
  columns = 3,
  aspectRatio = "video",
  className,
}: PhotoCardGridProps) {
  const colStyles = {
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-6 sm:gap-8", colStyles[columns], className)}>
      {items.map((item) => (
        <PhotoCard
          key={item.id}
          item={item}
          aspectRatio={aspectRatio}
        />
      ))}
    </div>
  );
}
