import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { NavLinks } from "./NavLinks";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/90 shadow-2xs transition-shadow duration-200">
      {/* Top Header Row */}
      <Container className="flex items-center justify-between h-14 sm:h-16 lg:h-17">
        {/* Brand: Circular Emblem Logo & Bank Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-2 focus-visible:outline-primary rounded-lg p-1 -ml-1 min-w-0"
          aria-label={`${siteConfig.name} - Home`}
        >
          {/* Circular Emblem matching screenshot style */}
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border border-slate-200/80 shadow-xs ring-2 ring-primary/10 bg-white">
            <Image
              src="/logo.png"
              alt="SANASA Emblem"
              fill
              priority
              sizes="44px"
              className="object-contain p-0.5"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="font-extrabold text-sm sm:text-base lg:text-xl text-navy tracking-tight group-hover:text-primary transition-colors leading-tight truncate">
              <span className="sm:hidden">{siteConfig.brandName}</span>
              <span className="hidden sm:inline">{siteConfig.shortName}</span>
            </span>
            <span className="text-[10px] sm:text-xs text-muted font-medium hidden xs:block truncate">
              Cooperative Society Ltd • Since {siteConfig.foundingYear}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation & Actions (lg and above): NavLinks -> LanguageToggle -> Join Now */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {/* Direct Navigation Links: Home, About Us, Services, Membership, Management, Contact */}
          <NavLinks />

          {/* Translation Toggle: placed specifically between Contact and Join Now */}
          <div className="pl-1 pr-1 border-l border-slate-200/80">
            <LanguageToggle variant="nav" />
          </div>

          {/* Join Now Button: Vibrant Royal-Blue Rounded Button (matching layout) */}
          <Link
            href="/membership"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-light active:bg-navy shadow-sm hover:shadow transition-all duration-150 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer shrink-0"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile View Actions (below lg): Join Now & Hamburger Menu Trigger (never overflowing) */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <Link
            href="/membership"
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-primary text-white font-semibold text-xs hover:bg-primary-light active:bg-navy shadow-xs"
          >
            Join Now
          </Link>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
