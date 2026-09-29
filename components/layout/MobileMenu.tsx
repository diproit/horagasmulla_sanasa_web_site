"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, Mail, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { contactContent } from "@/content/contact";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Close when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key and handle focus trap/lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const { managerWhatsApp, officePhone, email, hours } = contactContent;

  return (
    <div className="lg:hidden">
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="p-2 -mr-2 text-text hover:text-primary rounded-lg focus-visible:outline-2 focus-visible:outline-primary transition-colors cursor-pointer"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-text" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6 text-text" aria-hidden="true" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        aria-label="Mobile Navigation"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-surface z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div>
            <span className="font-bold text-base text-navy block leading-tight">
              Horagasmulla SANASA
            </span>
            <span className="text-xs text-muted">Cooperative Bank since 1965</span>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="p-2 text-text hover:text-primary rounded-lg focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Content */}
        <nav aria-label="Mobile" className="p-4 flex-1 flex flex-col">
          {/* 1. Six Page Links (Home, About Us, Services, Membership, Management, Contact) */}
          <ul className="space-y-1 list-none p-0 m-0">
            {siteConfig.navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-3 rounded-lg text-base transition-colors",
                      isActive
                        ? "bg-tint text-primary font-bold border-l-4 border-primary"
                        : "text-text font-medium hover:bg-slate-100 hover:text-primary"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* 2. Thin Divider */}
          <div className="my-5 border-t border-slate-200" aria-hidden="true" />

          {/* 3. The "EN | සිං" Language Toggle (matching desktop order & styling, >=44px tap target) */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-muted block mb-2 px-1">
              Language / භාෂාව:
            </span>
            <LanguageToggle variant="mobile" />
          </div>

          {/* 4. The "Join Now" Button, Full Width, Same Style as Desktop */}
          <div className="mt-1">
            <Link
              href="/membership"
              onClick={closeMenu}
              className="flex items-center justify-center w-full px-5 py-3 rounded-lg bg-primary text-white font-semibold text-base shadow-sm hover:bg-primary-light active:bg-navy transition-colors text-center cursor-pointer"
            >
              Join Now
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-200 space-y-3.5 text-xs text-muted">
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <a
                href={managerWhatsApp.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium text-text"
              >
                WhatsApp: {managerWhatsApp.display}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <a
                href={officePhone.telHref}
                className="hover:text-primary transition-colors font-medium text-text"
              >
                Office: {officePhone.display}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <a
                href={email.mailtoHref}
                className="hover:text-primary transition-colors font-medium text-text"
              >
                {email.display}
              </a>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <span>{hours.schedule}</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
