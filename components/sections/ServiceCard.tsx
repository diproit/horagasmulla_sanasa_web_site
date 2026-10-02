import React from "react";
import Link from "next/link";
import {
  PiggyBank,
  HandCoins,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  summary: string;
  href: string;
  iconName?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ServiceCard({
  title,
  summary,
  href,
  iconName,
  icon,
  className,
}: ServiceCardProps) {
  // Map iconName to Lucide icon with royal-blue color
  const renderIcon = () => {
    if (icon) return icon;

    switch (iconName?.toLowerCase()) {
      case "piggybank":
      case "savings":
        return <PiggyBank className="w-6 h-6 text-primary" aria-hidden="true" />;
      case "handcoins":
      case "loans":
        return <HandCoins className="w-6 h-6 text-primary" aria-hidden="true" />;
      case "hearthandshake":
      case "welfare":
        return <HeartHandshake className="w-6 h-6 text-primary" aria-hidden="true" />;
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />;
      default:
        return <Building className="w-6 h-6 text-primary" aria-hidden="true" />;
    }
  };

  return (
    <div
      className={cn(
        "group flex flex-col bg-surface rounded-xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 relative overflow-hidden",
        className
      )}
    >
      {/* Wave background image — decorative, hidden from screen readers */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/service-card-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-left-bottom pointer-events-none select-none"
      />

      {/* Subtle white overlay so text stays crisp over the wave art */}
      <div className="absolute inset-0 bg-white/55 pointer-events-none" aria-hidden="true" />

      {/* Card content — sits above the background layers */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Royal blue icon inside a soft blue tint container */}
        <div className="w-13 h-13 rounded-xl bg-tint flex items-center justify-center shrink-0 mb-5 border border-primary/10 group-hover:scale-105 transition-transform duration-200">
          {renderIcon()}
        </div>

        {/* Semantic H3 for card title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-text group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="mt-2.5 text-sm sm:text-base text-muted leading-relaxed flex-1">
          {summary}
        </p>

        {/*
          Accessible "Learn More" link.
          Contrast Rule: cyan fails contrast on white surfaces, so royal blue (#0B63D6)
          is used for the text with a cyan arrow accent.
        */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-light transition-colors group/link focus-visible:outline-2 focus-visible:outline-primary rounded-md py-1"
          >
            <span>Learn More</span>
            <span className="sr-only"> about {title}</span>
            <ArrowRight
              className="w-4 h-4 text-cyan group-hover/link:translate-x-1 transition-transform duration-150"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export interface ServiceCardsGridProps {
  cards: Array<{
    title: string;
    summary: string;
    href: string;
    iconName?: string;
  }>;
  className?: string;
}

export function ServiceCardsGrid({ cards, className }: ServiceCardsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
        className
      )}
    >
      {cards.map((card) => (
        <ServiceCard
          key={card.title}
          title={card.title}
          summary={card.summary}
          href={card.href}
          iconName={card.iconName}
        />
      ))}
    </div>
  );
}
