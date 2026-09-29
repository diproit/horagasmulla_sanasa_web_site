import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Facebook,
  Youtube,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { contactContent } from "@/content/contact";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { managerWhatsApp, officePhone, email, social, hours, registeredAddress } =
    contactContent;

  return (
    <footer className="bg-navy text-slate-300 border-t border-white/10 select-none">
      {/* Main 4-column footer body */}
      <div className="py-12 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 px-4 sm:px-6 lg:px-8">
          {/* (a) Brand Block (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-primary rounded-lg"
              aria-label={`${siteConfig.name} - Home`}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-sm bg-white p-1">
                <Image
                  src="/logo.png"
                  alt="SANASA Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base sm:text-lg group-hover:text-amber transition-colors leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-cyan-pale font-medium">
                  {siteConfig.tagline} • Est. {siteConfig.foundingYear}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Empowering rural lives and families across Dodangoda with secure savings,
              accessible agricultural and microfinance loans, and dedicated community welfare
              initiatives for over six decades.
            </p>

            {/* Social Icons (Facebook and YouTube only - NO Instagram) */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-pale block mb-3">
                Follow Official Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan hover:text-amber hover:border-amber/40 hover:bg-white/10 transition-colors"
                  aria-label="Visit our official Facebook page"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan hover:text-amber hover:border-amber/40 hover:bg-white/10 transition-colors"
                  aria-label="Watch SANASA TV on YouTube"
                >
                  <Youtube className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* (b) Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-tight">Quick Links</h3>
            <ul className="space-y-2.5 text-sm list-none p-0 m-0">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-amber transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan group-hover:bg-amber transition-colors shrink-0" />
                    <span>{item.label === "Contact" ? "Contact Us" : item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* (c) Contact Info (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-base tracking-tight">Contact Info</h3>
            <ul className="space-y-3 text-sm list-none p-0 m-0">
              {/* Postal Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan shrink-0 mt-1" aria-hidden="true" />
                <div className="flex flex-col">
                  <span>{registeredAddress.value}</span>
                  <Link
                    href="/contact#map"
                    className="text-xs text-cyan hover:text-amber transition-colors inline-flex items-center gap-1 mt-1 font-medium"
                  >
                    <span>View on map</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
              </li>

              {/* Manager WhatsApp */}
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-cyan shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-cyan-pale block">Manager / WhatsApp:</span>
                  <a
                    href={managerWhatsApp.whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-amber transition-colors font-medium"
                    aria-label={`Chat on WhatsApp with Manager: ${managerWhatsApp.display}`}
                  >
                    {managerWhatsApp.display}
                  </a>
                </div>
              </li>

              {/* Office Telephone */}
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-cyan-pale block">Office Line:</span>
                  <a
                    href={officePhone.telHref}
                    className="text-slate-200 hover:text-amber transition-colors font-medium"
                    aria-label={`Call Office: ${officePhone.display}`}
                  >
                    {officePhone.display}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-cyan-pale block">Email:</span>
                  <a
                    href={email.mailtoHref}
                    className="text-slate-200 hover:text-amber transition-colors font-medium"
                    aria-label={`Send email to: ${email.display}`}
                  >
                    {email.display}
                  </a>
                </div>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-cyan shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs leading-relaxed text-slate-300">
                  <span className="text-white font-medium block">{hours.schedule}</span>
                  <span className="text-cyan-pale/80">{hours.closed}</span>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      {/* (d) Bottom Bar */}
      <div className="border-t border-white/10 py-5 bg-navy/95">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left px-4 sm:px-6 lg:px-8">
          <p>{siteConfig.copyright}</p>
          <p className="text-cyan-pale/90 hover:text-amber transition-colors font-medium">
            {siteConfig.credit}
          </p>
        </Container>
      </div>
    </footer>
  );
}
