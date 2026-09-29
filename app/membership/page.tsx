import React from "react";
import {
  Vote,
  Percent,
  BadgePercent,
  HeartHandshake,
  MapPin,
  Compass,
  Users2,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { FAQ } from "@/components/sections/FAQ";
import { membershipContent } from "@/content/membership";
import { faqs } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Membership",
  description:
    "Join Horagasmulla SANASA: explore equal member ownership, annual dividend payouts, concessionary loan rates, and decentralized grassroots zonal governance.",
  path: "/membership",
  keywords: [
    "Sanasa Bank membership",
    "cooperative society membership",
    "Horagasmulla SANASA shares",
    "cooperative dividends Sri Lanka",
    "Dodangoda cooperative bank",
    "zonal councils Dodangoda",
  ],
});

export default function MembershipPage() {
  const { banner, whyJoin, zonalStructure, eligibility, howToJoin } =
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

  // Benefit icons
  const benefitIcons = [
    <Vote key="1" className="w-6 h-6 text-primary" aria-hidden="true" />,
    <Percent key="2" className="w-6 h-6 text-amber-dark" aria-hidden="true" />,
    <BadgePercent key="3" className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    <HeartHandshake key="4" className="w-6 h-6 text-rose-500" aria-hidden="true" />,
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
        badge="Community Stakeholder"
      />

      {/* =========================================================================
          2. WHY BECOME A MEMBER?
          Sub-text: "Ownership, shared benefits, and direct democratic participation"
          Sub-heading: "Benefits of Membership"
          Intro paragraph
          Four benefits with bold lead-ins shown as four cards
          Closing line
          ========================================================================= */}
      <Section background="default" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Equal Stakeholder</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight">
              {whyJoin.heading}
            </h2>

            <p className="mt-2 text-base sm:text-lg text-primary font-semibold">
              {whyJoin.subHeading}
            </p>

            <p className="mt-1 text-sm sm:text-base text-muted">
              {whyJoin.subText}
            </p>

            <p className="mt-4 text-base sm:text-lg text-text/90 leading-relaxed max-w-2xl mx-auto">
              {whyJoin.intro}
            </p>
          </div>

          {/* Four Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoin.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="bg-surface rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0 mb-4 group-hover:scale-105 transition-transform duration-200">
                  {benefitIcons[index % benefitIcons.length]}
                </div>

                <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors leading-snug">
                  {benefit.title}
                </h3>

                <p className="mt-2.5 text-sm text-muted leading-relaxed flex-1">
                  <strong className="text-text font-bold block mb-1">
                    {benefit.leadIn}
                  </strong>
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          {/* Closing Line Box */}
          <div className="mt-10 sm:mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-tint border border-primary/20 text-center">
            <p className="text-sm sm:text-base font-semibold text-primary">
              {whyJoin.closingLine}
            </p>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. GEOGRAPHICAL ZONAL STRUCTURE
          Sub-text: "Decentralized management that distributes decision-making authority"
          Sub-heading: "Bridges to Local Governance"
          Two paragraphs
          Three info blocks (Grama Niladhari Divisions, Geographical Zones, Zonal Councils)
          ========================================================================= */}
      <Section background="surface" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-3">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Decentralized Structure</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight">
              {zonalStructure.heading}
            </h2>

            <p className="mt-2 text-base sm:text-lg text-primary font-semibold">
              {zonalStructure.subHeading}
            </p>

            <p className="mt-1 text-sm sm:text-base text-muted">
              {zonalStructure.subText}
            </p>

            <div className="mt-5 space-y-3 text-base sm:text-lg text-text/90 leading-relaxed text-left max-w-2xl mx-auto bg-background p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              {zonalStructure.paragraphs.map((p, index) => (
                <p key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Three Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {zonalStructure.blocks.map((block, index) => (
              <div
                key={block.title}
                className="bg-background rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0 mb-4">
                  {zonalIcons[index % zonalIcons.length]}
                </div>

                <h3 className="text-lg font-bold text-text mb-2 leading-snug">
                  {block.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-3">
              <FileCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Registration Process</span>
            </div>

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
            subText="Answers to common questions regarding eligibility, share capital, voting rights, and zonal councils."
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
