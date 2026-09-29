"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/*
 * NOTE ON SEO & MACHINE TRANSLATION:
 * Machine translation via Google Translate is rendered client-side dynamically on the DOM.
 * It is NOT indexed by search engines (Googlebot, Bingbot, etc.).
 * The static HTML entry point remains strictly marked as lang="en", ensuring crawlers
 * only index the canonical, authoritative English copy.
 */

export interface LanguageToggleProps {
  className?: string;
  variant?: "topbar" | "mobile" | "nav";
}

function setGoogleTransCookie(target: "si" | "en") {
  const val = `/en/${target}`;
  document.cookie = `googtrans=${val}; path=/;`;
}

function clearGoogleTransCookie() {
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "googtrans=/en/en; path=/;";
}

export function LanguageToggle({
  className,
  variant = "topbar",
}: LanguageToggleProps) {
  const [currentLang, setCurrentLang] = useState<"en" | "si">("en");

  // Sync state with cookie / localStorage on mount
  useEffect(() => {
    try {
      const cookieMatch = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
      const savedLang = localStorage.getItem("sanasa_preferred_lang");

      if (cookieMatch?.[1] === "si" || savedLang === "si") {
        setCurrentLang("si");
      } else {
        setCurrentLang("en");
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleLanguageChange = (lang: "en" | "si") => {
    if (lang === currentLang) return;

    setCurrentLang(lang);
    try {
      localStorage.setItem("sanasa_preferred_lang", lang);
    } catch {
      // Ignore
    }

    if (lang === "si") {
      setGoogleTransCookie("si");

      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = "si";
        select.dispatchEvent(new Event("change", { bubbles: true }));
      } else {
        // If Google Translate select is not ready yet, reload so the cookie triggers automatic translation
        window.location.reload();
      }
    } else {
      clearGoogleTransCookie();

      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
      // Reload ensures DOM is completely restored to pristine English
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={cn(
        "notranslate inline-flex items-center rounded-full p-0.5 border text-xs font-semibold select-none",
        variant === "topbar"
          ? "bg-navy-dark/80 border-cyan/30 text-white"
          : variant === "nav"
          ? "bg-slate-100/90 border-slate-200 text-slate-700 shadow-2xs"
          : "bg-slate-100/90 border-slate-200 text-slate-700 w-full justify-center p-1 min-h-[48px] shadow-2xs",
        className
      )}
    >
      {/* English Option */}
      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        aria-pressed={currentLang === "en"}
        aria-label="Switch language to English"
        className={cn(
          "rounded-full transition-all duration-150 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer flex items-center justify-center",
          variant === "topbar"
            ? "px-2.5 py-1 text-[11px]"
            : variant === "mobile"
            ? "flex-1 text-center min-h-[44px] px-4 py-2.5 text-sm font-semibold"
            : "px-2.5 py-1 text-xs",
          currentLang === "en"
            ? "bg-primary text-white font-bold shadow-xs"
            : variant === "topbar"
            ? "text-white/70 hover:text-white"
            : "text-slate-600 hover:text-primary"
        )}
      >
        EN
      </button>

      <span
        className={cn(
          "select-none",
          variant === "topbar"
            ? "text-cyan/40 mx-0.5 text-xs"
            : variant === "mobile"
            ? "text-slate-300 mx-1 text-sm font-normal"
            : "text-slate-300 mx-0.5 text-xs"
        )}
        aria-hidden="true"
      >
        |
      </span>

      {/* Sinhala Option */}
      <button
        type="button"
        onClick={() => handleLanguageChange("si")}
        aria-pressed={currentLang === "si"}
        aria-label="Switch language to Sinhala (සිංහල)"
        className={cn(
          "rounded-full transition-all duration-150 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer flex items-center justify-center",
          variant === "topbar"
            ? "px-2.5 py-1 text-[11px]"
            : variant === "mobile"
            ? "flex-1 text-center min-h-[44px] px-4 py-2.5 text-sm font-semibold"
            : "px-2.5 py-1 text-xs",
          currentLang === "si"
            ? "bg-amber text-text font-bold shadow-xs"
            : variant === "topbar"
            ? "text-cyan-pale hover:text-white"
            : "text-slate-600 hover:text-primary"
        )}
      >
        සිං
      </button>
    </div>
  );
}

export default LanguageToggle;
