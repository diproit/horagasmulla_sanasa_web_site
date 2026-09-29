import React from "react";
import Image, { type ImageProps } from "next/image";
import { siteImages, type ImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";

export interface ImageWithAltProps extends Omit<ImageProps, "src" | "alt"> {
  imageKey?: ImageKey;
  src?: string;
  alt?: string;
  caption?: string;
  showCaption?: boolean;
  containerClassName?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "auto";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

export function ImageWithAlt({
  imageKey,
  src,
  alt,
  caption,
  showCaption = false,
  containerClassName,
  aspectRatio = "auto",
  rounded = "xl",
  className,
  fill,
  width,
  height,
  priority = false,
  ...props
}: ImageWithAltProps) {
  // Resolve image data from key if available
  const mappedImage = imageKey ? siteImages[imageKey] : undefined;

  const resolvedSrc = src || mappedImage?.src || "/images/hero-building.svg";
  const resolvedAlt = alt || mappedImage?.alt || "Horagasmulla SANASA Bank";
  const resolvedCaption = caption || mappedImage?.caption;

  const finalWidth = width ?? (fill ? undefined : mappedImage?.width ?? 800);
  const finalHeight =
    height ?? (fill ? undefined : mappedImage?.height ?? 600);

  const aspectStyles = {
    auto: "",
    video: "aspect-[16/9]",
    wide: "aspect-[1.91/1]",
    square: "aspect-square",
    portrait: "aspect-[4/5]",
  };

  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const imageElement = (
    <Image
      src={resolvedSrc}
      alt={resolvedAlt}
      width={finalWidth}
      height={finalHeight}
      fill={fill}
      priority={priority}
      referrerPolicy="no-referrer"
      className={cn(
        "object-cover transition-transform duration-300",
        fill && "w-full h-full",
        roundedStyles[rounded],
        className
      )}
      {...props}
    />
  );

  if (fill || showCaption || aspectRatio !== "auto" || containerClassName) {
    return (
      <figure
        className={cn(
          "relative overflow-hidden group",
          aspectStyles[aspectRatio],
          roundedStyles[rounded],
          containerClassName
        )}
      >
        {imageElement}
        {showCaption && resolvedCaption && (
          <figcaption className="mt-2 text-xs sm:text-sm text-muted text-center italic">
            {resolvedCaption}
          </figcaption>
        )}
      </figure>
    );
  }

  return imageElement;
}
