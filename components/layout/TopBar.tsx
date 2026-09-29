import React from "react";
import { Phone, MessageCircle, Mail, Facebook, Youtube } from "lucide-react";
import { contactContent } from "@/content/contact";
import { Container } from "@/components/ui/Container";

export function TopBar() {
  const { managerWhatsApp, officePhone, email, social } = contactContent;

  return (
    <div className="bg-navy border-b border-white/10 text-white text-xs select-none">
      <Container className="flex items-center justify-between h-9 px-4 sm:px-6 lg:px-8">
        {/* Left: Contact Details with Icons matching photo layout */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
          {/* Office Phone */}
          <a
            href={officePhone.telHref}
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-cyan-pale transition-colors group shrink-0"
            aria-label={`Call Office: ${officePhone.display}`}
          >
            <Phone
              className="w-3.5 h-3.5 text-cyan group-hover:text-cyan-pale transition-colors shrink-0"
              aria-hidden="true"
            />
            <span className="font-medium text-xs tracking-tight">{officePhone.display}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={managerWhatsApp.whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-cyan-pale transition-colors group shrink-0"
            aria-label={`Chat on WhatsApp: ${managerWhatsApp.display}`}
          >
            <MessageCircle
              className="w-3.5 h-3.5 text-cyan group-hover:text-cyan-pale transition-colors shrink-0"
              aria-hidden="true"
            />
            <span className="font-medium text-xs tracking-tight">{managerWhatsApp.display}</span>
          </a>

          {/* Email */}
          <a
            href={email.mailtoHref}
            className="hidden sm:inline-flex items-center gap-1.5 text-white/90 hover:text-cyan-pale transition-colors group shrink-0"
            aria-label={`Send email to ${email.display}`}
          >
            <Mail
              className="w-3.5 h-3.5 text-cyan group-hover:text-cyan-pale transition-colors shrink-0"
              aria-hidden="true"
            />
            <span className="font-medium text-xs">{email.display}</span>
          </a>
        </div>

        {/* Right: Social Links (Facebook and YouTube only) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-cyan hover:text-cyan-pale transition-colors rounded-sm focus-visible:outline-1 focus-visible:outline-cyan"
            aria-label="Visit our official Facebook page (opens in new tab)"
          >
            <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-cyan hover:text-cyan-pale transition-colors rounded-sm focus-visible:outline-1 focus-visible:outline-cyan"
            aria-label="Watch SANASA TV on YouTube (opens in new tab)"
          >
            <Youtube className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
