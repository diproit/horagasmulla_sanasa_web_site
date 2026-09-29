import React from "react";
import {
  PiggyBank,
  Heart,
  Award,
  Sprout,
  Home,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { PhotoCardGrid, type PhotoCardItem } from "@/components/sections/PhotoCard";
import { FAQ } from "@/components/sections/FAQ";
import { servicesContent } from "@/content/services";
import { faqs } from "@/content/faqs";
import { type ImageKey } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Our Services",
  description:
    "Explore cooperative banking at Horagasmulla SANASA: secure savings plans, low-interest agricultural and housing loans, and community welfare programs.",
  path: "/services",
  keywords: [
    "Sanasa Bank services",
    "cooperative savings Dodangoda",
    "agricultural loans Sri Lanka",
    "microfinance loans Horagasmulla",
    "children savings account",
    "women cooperative savings",
  ],
});

export default function ServicesPage() {
  const { banner, savings, loans, welfare } = servicesContent;

  const servicesFaqs = faqs.filter((faq) => faq.category === "services");

  // Schema.org Structured Data
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services" },
  ]);
  const faqSchema = getFaqSchema(servicesFaqs);

  const breadcrumbsList = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
  ];

  // Icons for Savings Schemes
  const savingsIcons = [
    <Sparkles key="1" className="w-6 h-6 text-amber-dark" aria-hidden="true" />,
    <Heart key="2" className="w-6 h-6 text-rose-500" aria-hidden="true" />,
    <Award key="3" className="w-6 h-6 text-primary" aria-hidden="true" />,
  ];

  // Icons for Loan Schemes
  const loanIcons = [
    <Sprout key="1" className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    <Home key="2" className="w-6 h-6 text-primary" aria-hidden="true" />,
    <Briefcase key="3" className="w-6 h-6 text-cyan" aria-hidden="true" />,
  ];

  // Prepare Welfare Projects for PhotoCardGrid
  const welfareItems: PhotoCardItem[] = welfare.projects.map((project) => ({
    id: project.id,
    title: project.title,
    caption: project.caption,
    subText: project.description,
    imageKey: project.imageKey as ImageKey,
  }));

  return (
    <>
      {/* Schema.org Structured Data: BreadcrumbList and FAQPage */}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* =========================================================================
          1. PAGE BANNER
          Title: "Our Services"
          Sub-text: "Customized financial schemes and community welfare programs for you"
          ========================================================================= */}
      <PageBanner
        title={banner.title}
        subText={banner.subText}
        breadcrumbs={breadcrumbsList}
        badge="Cooperative Financial Solutions"
      />

      {/* In-page navigation anchors bar */}
      <div className="bg-surface border-b border-slate-200/90 py-2.5 sm:py-3 sticky top-16 sm:top-20 z-10 shadow-xs">
        <Container>
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-0.5 px-1 text-xs sm:text-sm font-semibold">
            <a
              href="#savings"
              className="px-3.5 py-1.5 rounded-full bg-background hover:bg-tint text-text hover:text-primary transition-colors border border-slate-200 shrink-0 whitespace-nowrap"
            >
              Savings Accounts
            </a>
            <a
              href="#loans"
              className="px-3.5 py-1.5 rounded-full bg-background hover:bg-tint text-text hover:text-primary transition-colors border border-slate-200 shrink-0 whitespace-nowrap"
            >
              Loan Schemes
            </a>
            <a
              href="#welfare"
              className="px-3.5 py-1.5 rounded-full bg-background hover:bg-tint text-text hover:text-primary transition-colors border border-slate-200 shrink-0 whitespace-nowrap"
            >
              Community Welfare
            </a>
            <a
              href="#faq"
              className="px-3.5 py-1.5 rounded-full bg-background hover:bg-tint text-text hover:text-primary transition-colors border border-slate-200 shrink-0 whitespace-nowrap"
            >
              Services FAQ
            </a>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          2. SAVINGS ACCOUNTS & DEPOSITS (id="savings")
          Sub-text: "Secure plans with attractive interest rates to grow your wealth"
          Three blocks: Children's Savings, Women's Savings, Senior Citizens'
          Working scroll anchor with header offset (scroll-mt-24).
          ========================================================================= */}
      <Section
        id="savings"
        background="default"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-28"
      >
        <Container>
          <SectionHeading
            heading={savings.heading}
            subText={savings.subText}
            align="center"
            withAmberBar
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {savings.schemes.map((scheme, index) => (
              <article
                key={scheme.id}
                className="bg-surface rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0">
                    {savingsIcons[index % savingsIcons.length]}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-muted">
                    Deposit Plan
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors leading-snug">
                  {scheme.title}
                </h3>

                {scheme.tagline && (
                  <p className="mt-1 text-xs font-semibold text-primary/80">
                    {scheme.tagline}
                  </p>
                )}

                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {scheme.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-text uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {scheme.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-text/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <Button
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Inquire at Branch
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. LOANS & CREDIT SOLUTIONS (id="loans")
          Sub-text: "Flexible credit portfolios supporting rural business & agriculture"
          Sub-heading: "Supportive Loan Schemes"
          Three blocks: Agricultural Loans, Housing & Renovation Loans, Business Development Loans
          Working scroll anchor with header offset (scroll-mt-28).
          ========================================================================= */}
      <Section
        id="loans"
        background="surface"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-28"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Concessionary Credit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight">
              {loans.heading}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-primary font-semibold">
              {loans.subHeading}
            </p>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
              {loans.subText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {loans.schemes.map((scheme, index) => (
              <article
                key={scheme.id}
                className="bg-background rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0">
                    {loanIcons[index % loanIcons.length]}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-muted">
                    Member Credit
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors leading-snug">
                  {scheme.title}
                </h3>

                {scheme.tagline && (
                  <p className="mt-1 text-xs font-semibold text-primary/80">
                    {scheme.tagline}
                  </p>
                )}

                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {scheme.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-text uppercase tracking-wider block">
                      Scheme Terms:
                    </span>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {scheme.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-text/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <Button
                      href="/membership"
                      variant="primary"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Apply as Member
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. COMMUNITY WELFARE & SOCIAL RESPONSIBILITY (id="welfare")
          Sub-text: "Active local participation beyond traditional banking"
          Sub-heading: "Social Upliftment Programs"
          Paragraph describing seedling distribution, Wesak, and senior support.
          Four photo cards: Plant Distribution, Welfare Charity, Wesak Ceremony, Senior Appreciation.
          Working scroll anchor with header offset (scroll-mt-28).
          ========================================================================= */}
      <Section
        id="welfare"
        background="default"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-28"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-3">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Village Welfare</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight">
              {welfare.heading}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-primary font-semibold">
              {welfare.subHeading}
            </p>
            <p className="mt-3 text-base sm:text-lg text-text/90 leading-relaxed max-w-2xl mx-auto">
              {welfare.paragraph}
            </p>
          </div>

          <PhotoCardGrid items={welfareItems} columns={4} aspectRatio="video" />
        </Container>
      </Section>

      {/* =========================================================================
          5. SERVICES FAQ (id="faq")
          Frequently Asked Questions regarding savings and loans
          ========================================================================= */}
      <Section id="faq" background="surface" spacing="spacious" className="border-b border-slate-200/80 scroll-mt-28">
        <Container>
          <SectionHeading
            heading="Savings & Loan Questions"
            subText="Clear answers regarding deposit security, loan eligibility, and welfare benefits."
            align="center"
            withAmberBar
            className="mb-8 sm:mb-12"
          />

          <FAQ items={servicesFaqs} />
        </Container>
      </Section>

      {/* =========================================================================
          6. CLOSING CALL-TO-ACTION BAND
          Links to /membership ("Become a member") and /contact
          ========================================================================= */}
      <Section background="hero" spacing="default" className="text-center">
        <Container className="max-w-3xl mx-auto py-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            <PiggyBank className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Start Saving Today</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text leading-tight">
            Grow Your Future With Horagasmulla SANASA
          </h2>

          <p className="mt-3 text-base text-muted leading-relaxed max-w-xl mx-auto">
            Take advantage of member-first savings interest, affordable low-interest loans, and lifelong community welfare support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/membership" variant="primary" size="lg">
              <span>Become a member</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <span>Contact Us</span>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
