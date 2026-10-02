"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { awards as defaultAwards, type Award } from "@/content/awards";
import { siteImages, type ImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";

export interface AwardsCarouselProps {
  awards?: Award[];
}

export function AwardsCarousel({ awards = defaultAwards }: AwardsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Update button states on track scroll
  const updateScrollButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollPrev(scrollLeft > 6);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    updateScrollButtons();

    const track = trackRef.current;
    if (track) {
      track.addEventListener("scroll", updateScrollButtons, { passive: true });
    }
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      if (track) {
        track.removeEventListener("scroll", updateScrollButtons);
      }
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const handleScroll = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const firstSlide = track.querySelector<HTMLElement>('[role="group"]');
    const slideWidth = firstSlide ? firstSlide.offsetWidth + 24 : track.clientWidth;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollBy({
      left: direction === "prev" ? -slideWidth : slideWidth,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    setIsGrabbing(true);
    startX.current = e.pageX - track.offsetLeft;
    scrollLeftStart.current = track.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    track.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    setIsGrabbing(false);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Awards and achievements"
      className="w-full bg-gradient-to-b from-[#F0F6FF] to-[#FFFFFF] py-12 lg:py-24 overflow-hidden border-b border-slate-200/80"
    >
      <Container>
        {/* Header Row aligned with page container */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          {/* Heading + Muted line */}
          <div className="space-y-2">
            <h2
              className="text-[36px] sm:text-[40px] lg:text-[44px] font-bold leading-tight tracking-tight text-[#0B63D6] bg-gradient-to-r from-[#073070] via-[#0B63D6] to-[#3B82F6] bg-clip-text [-webkit-background-clip:text] text-transparent [-webkit-text-fill-color:transparent]"
              style={{
                color: "#0B63D6",
              }}
            >
              Awards &amp; Achievements
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal">
              7 trophies in cricket, netball, volleyball and drama
            </p>
          </div>

          {/* Right Button linking to /about-us#awards */}
          <div className="shrink-0">
            <Link
              href="/about-us#awards"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0B63D6] hover:bg-[#073070] text-white font-bold text-sm sm:text-base transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B63D6]"
            >
              View All Awards
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll-Snap Carousel Track */}
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Awards list carousel"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={cn(
            "w-full overflow-x-auto flex gap-6 pb-6 pt-2 snap-x snap-mandatory [scroll-snap-type:x_mandatory]",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63D6] focus-visible:ring-offset-2 rounded-xl",
            isGrabbing ? "cursor-grabbing select-none" : "cursor-grab"
          )}
        >
          {awards.map((award, index) => {
            const imageInfo = siteImages[award.imageKey as ImageKey];
            const imageSrc = imageInfo?.src || "/images/award-bronze.jpg";

            return (
              <div
                key={award.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${awards.length}`}
                className="w-full md:w-[40%] lg:w-[32%] shrink-0 flex-none snap-start select-none"
              >
                {/* Label ABOVE the card: "2026 · Cricket" (or category only when year is null) */}
                <div className="text-xs sm:text-sm font-medium text-slate-800 mb-2.5">
                  {award.year !== null ? `${award.year} · ` : ""}
                  {award.category}
                </div>

                {/* 4:3 image frame with 20px rounded corners and soft shadow */}
                <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-slate-100 group">
                  <Image
                    src={imageSrc}
                    alt={award.imageAlt}
                    width={600}
                    height={450}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  />
                </div>

                {/* H3 title: navy, semibold, 18-20px */}
                <h3 className="mt-4 text-[18px] sm:text-[20px] font-semibold text-[#073070] leading-snug">
                  {award.title}
                </h3>

                {/* Description: muted gray with line-clamp-3 */}
                <p className="mt-2 text-sm sm:text-base text-slate-600 line-clamp-3 leading-relaxed">
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls: two round outline buttons centered below */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handleScroll("prev")}
            disabled={!canScrollPrev}
            aria-label="Previous award"
            className={cn(
              "w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#073070] text-[#073070] flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63D6] focus-visible:ring-offset-2",
              canScrollPrev
                ? "hover:bg-[#073070]/5 cursor-pointer opacity-100"
                : "opacity-35 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-5 h-5 text-[#073070]" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => handleScroll("next")}
            disabled={!canScrollNext}
            aria-label="Next award"
            className={cn(
              "w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#073070] text-[#073070] flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63D6] focus-visible:ring-offset-2",
              canScrollNext
                ? "hover:bg-[#073070]/5 cursor-pointer opacity-100"
                : "opacity-35 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-5 h-5 text-[#073070]" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
