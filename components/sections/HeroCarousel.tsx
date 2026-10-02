"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface HeroSlide {
  id: string;
  /** Desktop (lg+) background image */
  image: string;
  /** Tablet landscape image (md–lg, 768–1023px) */
  tabletImage: string;
  /** Mobile portrait image (below md, <768px) */
  mobileImage: string;
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
    id: "bank",
    image: "/images/hero/Web L/hero-bank.webp",
    tabletImage: "/images/hero/Web T/2.webp",
    mobileImage: "/images/hero/Web M/2.webp",
    alt: "Dodangoda Horagasmulla SANASA Bank Main Building",
    tag: "MODERN COOPERATIVE BANKING • EST. 1965",
    title: "Your Trusted Cooperative Banking Partner in Dodangoda",
    subtitle:
      "Empowering the community since 1965 with secure savings, low-interest agricultural and microfinance loans, and dedicated welfare projects for every family.",
    primaryCta: {
      label: "Our Story",
      href: "/about-us",
    },
    secondaryCta: {
      label: "Our Services",
      href: "/services",
    },
  },
  {
    id: "mobile-app",
    image: "/images/hero/web L/hero-mobile-app1.webp",
    tabletImage: "/images/hero/web T/3.webp",
    mobileImage: "/images/hero/Web M/3.webp",
    alt: "SANASA Mobile Banking App for Balance Inquiry, Bill Payments, and Loan Applications",
    tag: "DIGITAL & MOBILE BANKING",
    title: "Mobile Banking at Your Fingertips",
    subtitle:
      "Perform your daily financial transactions anytime, anywhere. Check account balances, pay utility bills, and apply for loans effortlessly through our mobile banking app.",
    primaryCta: {
      label: "Digital Services",
      href: "/services",
    },
    secondaryCta: {
      label: "Join SANASA",
      href: "/membership",
    },
  },
  {
    id: "digital-passbook",
    image: "/images/hero/web L/hero-digital-passbook1.webp",
    tabletImage: "/images/hero/web T/5.webp",
    mobileImage: "/images/hero/Web M/4.webp",
    alt: "SANASA Digital Passbook for Real-Time Account Statements and Savings Tracking",
    tag: "PAPERLESS DIGITAL PASSBOOK",
    title: "Your Passbook, Now Fully Digital",
    subtitle:
      "Access your savings records, view real-time transaction history, and monitor interest updates securely from your phone or computer without visiting the branch.",
    primaryCta: {
      label: "Savings Accounts",
      href: "/services#savings",
    },
    secondaryCta: {
      label: "Join SANASA",
      href: "/membership",
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
      className="relative w-full overflow-hidden select-none bg-navy focus:outline-hidden"
    >
      {/* ============================================================
          MOBILE HERO (below md) — portrait images, text at the bottom
          ============================================================ */}
      <div className="md:hidden">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              {/* Full-bleed portrait image */}
              <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  unoptimized
                  className="object-cover object-center"
                />

                {/* Dark gradient overlay fading upward from the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

                {/* Text anchored to the bottom of the image */}
                <div className="absolute bottom-0 inset-x-0 px-5 pb-20 pt-24 flex flex-col items-start">
                  {/* Title */}
                  <h1 className="text-2xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-lg">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-3 text-sm text-white/85 leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  {/* CTA buttons */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={slide.primaryCta.href}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white font-semibold text-sm shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>

                    <Link
                      href={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer"
                    >
                      <span>{slide.secondaryCta.label}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Mobile bottom controls (progress + arrows) */}
        <div className="absolute bottom-5 inset-x-0 z-30 px-5 flex items-center justify-between pointer-events-none">
          {/* Progress dots */}
          <div
            role="tablist"
            aria-label="Hero slider pagination"
            className="flex items-center gap-2 pointer-events-auto"
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
                    className={`h-1 rounded-full overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "w-10 bg-white/30"
                        : "w-5 bg-white/25 group-hover:bg-white/40"
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

          {/* Arrow buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md shadow-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md shadow-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          TABLET HERO (md → lg, 768–1023px) — landscape images, text left
          ============================================================ */}
      <div className="hidden md:block lg:hidden relative h-[560px]">
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
              <Image
                src={slide.tabletImage}
                alt={slide.alt}
                fill
                priority={index === 0}
                unoptimized
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* Left-side gradient so text is legible over the image */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/80 via-white/50 to-transparent pointer-events-none" />

        {/* Text overlaid on the left */}
        <div className="relative z-20 h-full flex flex-col justify-center px-10 pb-20">
          <div className="max-w-[420px]">
            {slides.map((slide, index) => {
              const isActive = index === current;
              if (!isActive) return null;
              return (
                <div key={slide.id} className="animate-fade-in flex flex-col items-start text-left">
                  <h1 className="text-3xl font-bold text-[#04126e] tracking-tight leading-[1.12] drop-shadow-sm">
                    {slide.title}
                  </h1>
                  <p className="mt-3 text-base text-[#4b5563] leading-relaxed font-normal">
                    {slide.subtitle}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      href={slide.primaryCta.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-light active:bg-navy-dark text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      href={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-navy/10 hover:bg-navy/20 text-navy font-semibold text-sm border border-navy/20 transition-all duration-200 cursor-pointer"
                    >
                      <span>{slide.secondaryCta.label}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Controls Bar */}
        <div className="absolute bottom-8 inset-x-0 z-30 px-10 flex items-center justify-between pointer-events-none">
          <div
            role="tablist"
            aria-label="Hero slider pagination"
            className="flex items-center gap-2.5 pointer-events-auto"
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
                    className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "w-14 bg-navy/25"
                        : "w-7 bg-navy/20 group-hover:bg-navy/35"
                    }`}
                  >
                    {isActive && (
                      <div
                        className="h-full bg-primary rounded-full w-full"
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
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-navy/10 hover:bg-navy/20 text-navy border border-navy/15 shadow-sm transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-navy/10 hover:bg-navy/20 text-navy border border-navy/15 shadow-sm transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          DESKTOP HERO (lg and above) — original landscape layout
          ============================================================ */}
      <div className="hidden lg:block relative h-[560px] xl:h-[590px]">
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
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* Slide Text Content & CTAs */}
        <Container className="relative z-20 h-full flex flex-col justify-center pb-20">
          <div className="max-w-3xl">
            {slides.map((slide, index) => {
              const isActive = index === current;
              if (!isActive) return null;

              return (
                <div
                  key={slide.id}
                  className="animate-fade-in flex flex-col items-start text-left"
                >
                  {/* Primary Hero Headline */}
                  <h1 className="text-5xl font-medium text-[#04126e] tracking-normal leading-[1.12] drop-shadow-md max-w-[600px]">
                    {slide.title}
                  </h1>

                  {/* Sub-headline description */}
                  <p className="mt-5 text-xl text-[#666565] leading-relaxed max-w-2xl font-normal drop-shadow-xs">
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                      href={slide.primaryCta.href}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary hover:bg-primary-light active:bg-navy-dark text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>

                    <Link
                      href={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold text-base border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer"
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
        <Container className="absolute bottom-10 inset-x-0 z-30 pointer-events-none">
          <div className="flex items-center justify-between w-full">
            {/* Segmented Progress Line Indicators */}
            <div
              role="tablist"
              aria-label="Hero slider pagination"
              className="flex items-center gap-3 pointer-events-auto"
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
                      className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-white/30"
                          : "w-8 bg-white/25 group-hover:bg-white/40"
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
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 active:bg-white/40 text-white border border-white/20 backdrop-blur-md shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 active:bg-white/40 text-white border border-white/20 backdrop-blur-md shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </div>

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
