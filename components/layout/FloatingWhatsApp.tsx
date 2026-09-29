"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { contactContent } from "@/content/contact";

export function FloatingWhatsApp() {
  const { managerWhatsApp } = contactContent;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={managerWhatsApp.whatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Manager on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-4 cursor-pointer"
      >
        {/* Pulse effect */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 -z-10 pointer-events-none"
          aria-hidden="true"
        />

        <MessageCircle className="w-7 h-7 fill-white/20" aria-hidden="true" />

        {/* Hover Tooltip (hidden on mobile, visible on desktop hover) */}
        <span
          role="tooltip"
          className="absolute right-full mr-3 px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 hidden sm:block border border-white/10"
        >
          Chat with Manager
        </span>
      </a>
    </aside>
  );
}
