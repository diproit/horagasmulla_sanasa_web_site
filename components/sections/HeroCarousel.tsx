"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "opening",
    image: "/images/hero/hero-opening.jpg",
    alt: "Dodangoda Horagasmulla SANASA Society Branch Opening Ceremony",
    tag: "MODERN COOPERATIVE BANKING • EST. 1965",
    title: "Empowering Rural Lives with Trusted Banking",
    subtitle:
      "Save today for a better tomorrow. Providing secure savings, low-interest microcredit, and ethical financial leadership across Dodangoda.",
    primaryCta: {
      label: "Our Services",
      href: "/services",
    },
    secondaryCta: {
      label: "Join SANASA",
      href: "/membership",
    },
  },
  {
    id: "community",
    image: "/images/hero/hero-community.jpg",
    alt: "Dodangoda Horagasmulla SANASA Youth and Community Festival",
    tag: "COMMUNITY & YOUTH WELFARE",
    title: "Uplifting Families & Inspiring Next Generations",
    subtitle:
      "Beyond everyday banking: active welfare funds, educational honors, senior-citizen appreciation events, and social gatherings.",
    primaryCta: {
      label: "Community Welfare",
      href: "/services#welfare",
    },
    secondaryCta: {
      label: "Our Story",
      href: "/about-us",
    },
  },
  {
    id: "flags",
    image: "/images/hero/hero-flags.jpg",
    alt: "SANASA and Sri Lankan National Flags Flying High",
    tag: "60 YEARS OF RECOGNIZED TRUST",
    title: "Six Decades of Cooperative Integrity",
    subtitle:
      "Honored with the National Centenary Bronze Award for audit compliance, exemplary member service, and democratic village governance.",
    primaryCta: {
      label: "Awards & Milestones",
      href: "/about-us#awards",
    },
    secondaryCta: {
      label: "Contact Office",
      href: "/contact",
    },
  },
  {
    id: "lamp",
    image: "/images/hero/hero-lamp.jpg",
    alt: "Traditional Sri Lankan Brass Oil Lamp Ceremony",
    tag: "CULTURAL HERITAGE & FINANCIAL PEACE",
    title: "Illuminating Paths to Sustainable Prosperity",
    subtitle:
      "Rooted in genuine Sri Lankan traditions, giving our members confidence and financial security through mutual thrift and low rates.",
    primaryCta: {
      label: "Savings Accounts",
      href: "/services#savings",
    },
    secondaryCta: {
      label: "Loan Solutions",
      href: "/services#loans",
    },
  },
];

interface HeroCarouselProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
}

export function HeroCarousel({
  slides = HERO_SLIDES,
  autoPlayInterval = 4000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, autoPlayInterval]);

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="SANASA Featured Stories"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[560px] xs:h-[620px] sm:h-[680px] md:h-[720px] lg:h-[560px] xl:h-[590px] overflow-hidden select-none bg-navy-dark focus:outline-hidden"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with subtle Ken Burns effect */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[10000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />

            {/* Left-to-Right and Top-to-Bottom Cinematic Dark Overlays (matching reference mockup) */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 via-45% to-navy-dark/30 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-transparent to-navy-dark/40 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        );
      })}

      {/* Slide Text Content & CTAs */}
      <Container className="relative z-20 h-full flex flex-col justify-center pb-20 sm:pb-24">
        <div className="max-w-3xl">
          {slides.map((slide, index) => {
            const isActive = index === current;
            if (!isActive) return null;

            return (
              <div
                key={slide.id}
                className="animate-fade-in flex flex-col items-start text-left"
              >
                {/* Tagline / Category pill matching reference mockup */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-pale backdrop-blur-md shadow-xs mb-4 sm:mb-5">
                  <span
                    className="w-2 h-2 rounded-full bg-amber animate-pulse shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                    {slide.tag}
                  </span>
                </div>

                {/* Primary Hero Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Sub-headline description */}
                <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
                  {slide.subtitle}
                </p>

                {/* Action Buttons (Vibrant primary rounded pill + Glass secondary) */}
                <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary hover:bg-primary-light active:bg-navy-dark text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{slide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>

                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer"
                  >
                    <span>{slide.secondaryCta.label}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Bottom Controls Bar */}
      <Container className="absolute bottom-6 sm:bottom-10 inset-x-0 z-30 pointer-events-none">
        <div className="flex items-center justify-between w-full">
          {/* Segmented Progress Line Indicators (matching reference mockup at bottom-left) */}
          <div
            role="tablist"
            aria-label="Hero slider pagination"
            className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto"
          >
            {slides.map((slide, index) => {
              const isActive = index === current;
              return (
                <button
                  key={slide.id}
                  role="tab"
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-selected={isActive}
                  aria-label={`Slide ${index + 1}: ${slide.title}`}
                  className="relative py-2 group cursor-pointer focus:outline-hidden"
                >
                  <div
                    className={`h-1 sm:h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "w-12 sm:w-16 bg-white/30"
                        : "w-6 sm:w-8 bg-white/25 group-hover:bg-white/40"
                    }`}
                  >
                    {isActive && (
                      <div
                        className="h-full bg-primary-light rounded-full w-full"
                        style={{
                          animation: `progressBar ${autoPlayInterval}ms linear forwards`,
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Left/Right Arrow Navigation Buttons at bottom-right */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 active:bg-white/40 text-white border border-white/20 backdrop-blur-md shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 active:bg-white/40 text-white border border-white/20 backdrop-blur-md shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Progress Bar Animation Keyframe Style */}
      <style jsx>{`
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroCarousel;
