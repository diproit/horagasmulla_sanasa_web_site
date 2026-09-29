import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { FAQ } from "@/components/sections/FAQ";
import { contactContent } from "@/content/contact";
import { faqs } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBankOrCreditUnionSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Dodangoda Horagasmulla SANASA Society Ltd: branch address, office & WhatsApp numbers, email inquiries, business hours, and Google Maps directions.",
  path: "/contact",
  keywords: [
    "Contact Sanasa Bank",
    "Dodangoda Horagasmulla contact",
    "SANASA Bank phone number",
    "cooperative bank Dodangoda",
    "SANASA WhatsApp",
    "sanasa.hor@gmail.com",
  ],
});

export default function ContactPage() {
  const {
    banner,
    getInTouch,
    managerWhatsApp,
    officePhone,
    email,
    social,
    hours,
    registeredAddress,
    googleMapsEmbedUrl,
  } = contactContent;

  const contactFaqs = faqs.filter((faq) => faq.category === "contact");

  // Schema.org Structured Data
  const bankSchema = getBankOrCreditUnionSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ]);
  const faqSchema = getFaqSchema(contactFaqs);

  const breadcrumbsList = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Schema.org Structured Data: BankOrCreditUnion, BreadcrumbList, and FAQPage */}
      <JsonLd data={bankSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* =========================================================================
          1. PAGE BANNER
          Semantic H1 inside PageBanner with breadcrumbs and pale-cyan subtext
          ========================================================================= */}
      <PageBanner
        title={banner.title}
        subText={banner.subText}
        breadcrumbs={breadcrumbsList}
        badge="Connect With Us"
      />

      {/* =========================================================================
          2. GET IN TOUCH & INTERACTIVE MAP
          Two-column layout on desktop (info left, map right), stacked on mobile.
          Five structured information blocks:
            1. Registered Office Address
            2. Phone Numbers: Office Mobile and Mobile / WhatsApp (tappable links)
            3. Email Inquiries (mailto link)
            4. Business Hours (Tuesday to Sunday 8:30 AM - 3:00 PM, closed Mon/holidays)
            5. Connect with Us (Facebook and YouTube only)
          No inquiry form.
          ========================================================================= */}
      <Section background="default" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <SectionHeading
            heading={getInTouch.heading}
            subText={getInTouch.subText}
            align="left"
            withAmberBar
            className="mb-8 lg:mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Five Information Blocks */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              {/* Block 1: Registered Office Address */}
              <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text mb-1">
                      {registeredAddress.label}
                    </h3>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {registeredAddress.value}
                    </p>
                    <a
                      href="#location-map"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-light transition-colors mt-3"
                    >
                      <span>Locate on map</span>
                      <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Block 2: Phone Numbers (Office Mobile & Mobile / WhatsApp) */}
              <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-lg font-bold text-text">
                      Phone Numbers
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {/* Office Line */}
                      <div className="bg-background rounded-xl p-4 border border-slate-200/80">
                        <span className="text-xs font-semibold text-muted block mb-1 uppercase tracking-wider">
                          Office Phone
                        </span>
                        <a
                          href={officePhone.telHref}
                          className="text-base font-bold text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2 group"
                          aria-label={`Call office phone at ${officePhone.display}`}
                        >
                          <Phone className="w-4 h-4 text-cyan shrink-0" aria-hidden="true" />
                          <span className="underline decoration-primary/30 group-hover:decoration-primary">
                            {officePhone.display}
                          </span>
                        </a>
                      </div>

                      {/* Manager WhatsApp / Mobile */}
                      <div className="bg-background rounded-xl p-4 border border-slate-200/80">
                        <span className="text-xs font-semibold text-muted block mb-1 uppercase tracking-wider">
                          Mobile / WhatsApp
                        </span>
                        <div className="flex flex-col gap-1.5">
                          <a
                            href={managerWhatsApp.whatsAppHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-bold text-[#0B8542] hover:text-[#096B35] transition-colors inline-flex items-center gap-2 group"
                            aria-label={`Chat with Manager on WhatsApp at ${managerWhatsApp.display}`}
                          >
                            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                            <span className="underline decoration-[#0B8542]/30 group-hover:decoration-[#0B8542]">
                              {managerWhatsApp.display}
                            </span>
                          </a>
                          <span className="text-[11px] text-muted">
                            Direct line to branch manager
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 3: Email Inquiries */}
              <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text mb-1">
                      {email.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mb-2">
                      Send us documents, official communications, or general inquiries:
                    </p>
                    <a
                      href={email.mailtoHref}
                      className="text-base font-bold text-primary hover:text-primary-light transition-colors inline-flex items-center gap-2 group"
                      aria-label={`Send email to ${email.display}`}
                    >
                      <span className="underline decoration-primary/30 group-hover:decoration-primary">
                        {email.display}
                      </span>
                      <ExternalLink className="w-4 h-4 text-cyan" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Block 4: Business Hours */}
              <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0 text-primary">
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text mb-1">
                      {hours.label}
                    </h3>
                    <div className="space-y-1.5 mt-2">
                      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-text">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                        <span>{hours.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shrink-0" aria-hidden="true" />
                        <span>{hours.closed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 5: Connect with Us (Facebook and YouTube only) */}
              <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center shrink-0 text-amber-dark">
                    <ExternalLink className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text mb-1">
                      Connect with Us
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mb-4">
                      Follow our official community updates, event coverage, and video broadcasts:
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      {/* Facebook Button */}
                      <a
                        href={social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] font-semibold text-sm transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#1877F2]"
                        aria-label="Visit Horagasmulla SANASA Bank on Facebook (opens in new tab)"
                      >
                        <svg
                          className="w-4 h-4 fill-current shrink-0"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span>Official Facebook</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                      </a>

                      {/* YouTube Button */}
                      <a
                        href={social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/30 text-[#FF0000] font-semibold text-sm transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#FF0000]"
                        aria-label="Visit Horagasmulla SANASA TV on YouTube (opens in new tab)"
                      >
                        <svg
                          className="w-4 h-4 fill-current shrink-0"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <span>SANASA TV YouTube</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Embed (Fixed aspect ratio, loading lazy, descriptive title) */}
            <div id="location-map" className="lg:col-span-6 xl:col-span-5 scroll-mt-24">
              <div className="bg-surface rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm sticky top-28">
                <div className="flex items-center justify-between mb-3.5 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" aria-hidden="true" />
                    <h3 className="text-base font-bold text-text">
                      Branch Location Map
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-muted bg-slate-100 px-2.5 py-1 rounded-md">
                    Dodangoda, Sri Lanka
                  </span>
                </div>

                {/* Map iframe container with fixed aspect ratio to prevent CLS */}
                <div className="relative w-full aspect-[4/3] min-h-[380px] sm:min-h-[440px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                  <iframe
                    src={googleMapsEmbedUrl}
                    title="Google Map location of Dodangoda Horagasmulla SANASA Bank"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-muted">
                  <span>Dodangoda Horagasmulla SANASA Society Ltd</span>
                  <a
                    href="https://maps.google.com/?q=6.55803,80.007111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light font-semibold inline-flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. FREQUENTLY ASKED QUESTIONS (Contact category)
          Renders the 5 contact-specific FAQs with Schema.org FAQPage JSON-LD
          ========================================================================= */}
      <Section background="surface" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <SectionHeading
            heading="Frequently Asked Questions"
            subText="Quick answers to common questions about visiting our office, telephone support, and locations."
            align="center"
            withAmberBar
            className="mb-8 sm:mb-12"
          />

          <FAQ items={contactFaqs} />
        </Container>
      </Section>

      {/* =========================================================================
          4. ONWARD INTERNAL LINKS BAND
          Links to /services and /membership
          ========================================================================= */}
      <Section background="hero" spacing="default" className="text-center">
        <Container className="max-w-3xl mx-auto py-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text leading-tight">
            How Else Can We Assist You?
          </h2>

          <p className="mt-3 text-base text-muted leading-relaxed max-w-xl mx-auto">
            Discover our competitive savings accounts and low-interest loan portfolios, or register as a shareholder member today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/services" variant="primary" size="lg">
              <span>View Financial Services</span>
              <ChevronRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Button>
            <Button href="/membership" variant="outline" size="lg">
              <span>Explore Membership</span>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
