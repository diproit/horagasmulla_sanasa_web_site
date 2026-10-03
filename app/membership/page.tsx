import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Compass,
  Users2,
  CheckCircle2,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { FAQ } from "@/components/sections/FAQ";
import { PdfPanel } from "@/components/sections/PdfPanel";
import { membershipContent } from "@/content/membership";
import { faqs } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Membership",
  description:
    "Join Horagasmulla SANASA: access welfare & financial benefits including emergency assistance, loans, education, health support, marriage, and childbirth aid.",
  path: "/membership",
  keywords: [
    "Sanasa Bank membership",
    "cooperative welfare benefits",
    "SANASA welfare society",
    "Horagasmulla SANASA loans",
    "cooperative welfare Dodangoda",
    "zonal councils Dodangoda",
  ],
});

export default function MembershipPage() {
  const { banner, whyJoin, eligibility, howToJoin } =
    membershipContent;

  const membershipFaqs = faqs.filter((faq) => faq.category === "membership");

  // Schema.org Structured Data
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Membership", path: "/membership" },
  ]);
  const faqSchema = getFaqSchema(membershipFaqs);

  const breadcrumbsList = [
    { label: "Home", href: "/" },
    { label: "Membership", href: "/membership" },
  ];

  // Zonal block icons
  const zonalIcons = [
    <MapPin key="1" className="w-6 h-6 text-cyan" aria-hidden="true" />,
    <Compass key="2" className="w-6 h-6 text-primary" aria-hidden="true" />,
    <Users2 key="3" className="w-6 h-6 text-amber-dark" aria-hidden="true" />,
  ];

  return (
    <>
      {/* Schema.org Structured Data: BreadcrumbList and FAQPage */}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* =========================================================================
          1. PAGE BANNER
          Title: "Membership"
          Sub-text: "Cooperative ownership and direct democratic representation"
          ========================================================================= */}
      <PageBanner
        title={banner.title}
        subText={banner.subText}
        breadcrumbs={breadcrumbsList}
      />

      {/* =========================================================================
          2. WHY BECOME A MEMBER? & PDF PANEL
          Desktop: 12-column grid (8 cols left content + 4 cols sticky PDF panel)
          Mobile/Tablet: single column (badge, H2, subheading, intro, link, key benefits, PDF panel, closing band)
          ========================================================================= */}
      <section className="bg-white py-10 sm:py-14 lg:py-20 border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: 8 Columns (two-thirds) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wider border border-slate-200 shadow-xs mb-3.5 self-start">
                <span className="w-2 h-2 rounded-full bg-amber shrink-0" aria-hidden="true" />
                <span>{whyJoin.eyebrow}</span>
              </div>

              {/* H2 Heading with Amber Underline Accent */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight">
                {whyJoin.heading}
                <span className="block w-16 h-1 bg-amber rounded-full mt-3" aria-hidden="true" />
              </h2>

              {/* Subheading as semibold royal-blue paragraph */}
              <p className="mt-4 text-base sm:text-lg text-primary font-semibold leading-snug">
                {whyJoin.subheading}
              </p>

              {/* Intro in muted gray */}
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                {whyJoin.intro}
              </p>

              {/* Internal Link to Services */}
              <div className="mt-3.5 mb-6">
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
                >
                  <span>See our savings and loan options</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

              {/* H3 Key Benefits Heading */}
              <h3 className="text-xl sm:text-2xl font-bold text-text mb-5">
                {whyJoin.keyBenefitsHeading}
              </h3>

              {/* 8 Benefit Cards Grid (2 cols on md+, 1 col on phones) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {whyJoin.keyBenefits.map((benefit, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 overflow-hidden p-1 shadow-2xs group-hover:scale-105 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      <Image
                        src={benefit.gif}
                        alt={benefit.title}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-semibold text-text leading-snug group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: 4 Columns (exactly one-third width) - Sticky on Desktop */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <PdfPanel brochure={whyJoin.brochure} benefits={whyJoin.keyBenefits} />
            </div>
          </div>

          {/* Full-width Closing Band */}
          <div className="mt-12 lg:mt-16 bg-[#072556] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <blockquote className="text-lg sm:text-xl font-medium italic text-white leading-relaxed flex items-start gap-2">
                  <span className="text-amber text-3xl font-serif leading-none shrink-0" aria-hidden="true">“</span>
                  <span>{whyJoin.closingQuote}</span>
                </blockquote>
                <p className="mt-3 text-sm sm:text-base text-cyan-pale/90 pl-5 sm:pl-6">
                  {whyJoin.closingCta}
                </p>
              </div>

              <div className="shrink-0 pl-5 sm:pl-6 md:pl-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber hover:bg-amber-light text-slate-900 font-bold transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span className="leading-none">Contact Us to Register</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* =========================================================================
          4. ELIGIBILITY REQUIREMENTS
          Four bullets: resident of area, at least 18, commitment to cooperative,
          initial deposit for share capital.
          ========================================================================= */}
      <Section background="default" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              heading={eligibility.heading}
              subText="Review our straightforward criteria for becoming a full voting cooperative member."
              align="center"
              withAmberBar
              className="mb-8 sm:mb-12"
            />

            <div className="bg-surface rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 m-0">
                {eligibility.requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-slate-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm sm:text-base font-medium text-text leading-snug">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. HOW TO JOIN
          Two paragraphs & Primary button "Contact Us to Register" linking to /contact
          ========================================================================= */}
      <Section background="surface" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight">
              {howToJoin.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-text/90 leading-relaxed text-left bg-background p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              {howToJoin.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-text uppercase tracking-wider mb-3">
                  Required Documents Checklist:
                </h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  {howToJoin.requiredDocuments.map((doc, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={howToJoin.cta.href} variant="primary" size="lg">
                <span>{howToJoin.cta.label}</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                <span>Explore Our Services</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. MEMBERSHIP FAQ
          Frequently Asked Questions regarding cooperative membership
          ========================================================================= */}
      <Section background="default" spacing="spacious">
        <Container>
          <SectionHeading
            heading="Membership Frequently Asked Questions"
            subText="Answers to common questions regarding eligibility, welfare benefits, share capital, and zonal councils."
            align="center"
            withAmberBar
            className="mb-8 sm:mb-12"
          />

          <FAQ items={membershipFaqs} />
        </Container>
      </Section>
    </>
  );
}
