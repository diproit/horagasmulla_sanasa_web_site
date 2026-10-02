import React from "react";
import Image from "next/image";
import {
  PiggyBank,
  CheckCircle2,
  ArrowRight,
  Info,
  Users,
  ShieldCheck,
  Banknote,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { PhotoCardGrid, type PhotoCardItem } from "@/components/sections/PhotoCard";
import { FAQ } from "@/components/sections/FAQ";
import {
  servicesContent,
  savingsAccounts,
  savingsNote,
  loanProducts,
  loanNote,
} from "@/content/services";
import { faqs } from "@/content/faqs";
import { type ImageKey } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Savings Accounts, Loans & Welfare Services",
  description:
    "Horagasmulla SANASA: 11 savings accounts up to 10% p.a. and 11 loan types from 9% to 35% p.a., plus community welfare programs in Dodangoda.",
  path: "/services",
  keywords: [
    "savings account Dodangoda",
    "fixed deposit Sanasa",
    "children's savings account Sri Lanka",
    "Sanasa loans Dodangoda",
    "business loan Sri Lanka cooperative",
    "education loan Sanasa",
    "property loan Dodangoda",
    "Sanasa Bank services",
    "cooperative savings Dodangoda",
  ],
});

/** Format a rate number as "8% p.a." or "7.5% p.a." */
function formatRate(rate: number): string {
  return `${rate}% p.a.`;
}

/** Highest rate among all accounts */
const MAX_RATE = Math.max(...savingsAccounts.map((a) => a.rate));

export default function ServicesPage() {
  const { banner, welfare } = servicesContent;

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

  // Icons for Loan Schemes — removed (no longer used)

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
          ========================================================================= */}
      <PageBanner
        title={banner.title}
        subText={banner.subText}
        breadcrumbs={breadcrumbsList}
        badge="Cooperative Financial Solutions"
      />

      {/* In-page navigation anchors bar */}
      <div className="bg-surface border-b border-slate-200/90 py-2.5 sm:py-3 sticky top-14 sm:top-17 z-10 shadow-xs">
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
          11 real accounts — 3 cols lg / 2 cols md / 1 col mobile.
          Last row centered via flex-wrap justify-center.
          Deep-link id on every card; scroll-mt-28 for sticky header offset.
          ========================================================================= */}
      <Section
        id="savings"
        background="default"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-28"
      >
        <Container>
          {/* Section heading */} 
          <SectionHeading
            heading="Savings Accounts & Deposits"
            subText="Eleven savings and deposit options for members, families, children and youth"
            align="center"
            withAmberBar
            className="mb-10 sm:mb-14"
          />


          {/* Cards grid — flex-wrap so the last row can be centered */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {savingsAccounts.map((account, index) => {
              const isHighest = account.rate === MAX_RATE;
              const cardNumber = index + 1;

              return (
                <article
                  key={account.id}
                  id={account.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden scroll-mt-28
                    w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-40px)]"
                >
                  {/* ── Card header image ── */}
                  <div className="relative w-full h-38 shrink-0">
                    <Image
                      src="/images/savings-card-header.png"
                      alt=""
                      fill
                      unoptimized
                      aria-hidden="true"
                      className="object-cover object-top"
                    />
                    {/* Number badge + highest-rate pill overlaid on the image */}
                    <div className="absolute inset-0 flex items-start justify-between p-3">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-primary text-xs font-bold shrink-0 shadow"
                        aria-label={`Account ${cardNumber}`}
                      >
                        {cardNumber}
                      </span>
                      {isHighest && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-bold shadow">
                          ★ Highest rate
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5 sm:p-6">
                    {/* Account name */}
                    <h3 className="text-base sm:text-[17px] font-semibold text-navy leading-snug">
                      {account.name}
                    </h3>

                    {/* Rate block */}
                    <div className="mt-3 mb-4">
                      <span className="text-5xl font-extrabold text-primary leading-none">
                        {account.rate}%
                      </span>
                      <span className="block text-xs text-muted mt-0.5">per annum</span>
                    </div>

                    {/* Highlights bullet list */}
                    <ul className="space-y-2 list-none p-0 m-0 flex-1">
                      {account.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] sm:text-sm text-muted leading-relaxed">
                          <CheckCircle2
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/membership" variant="primary" size="md">
              <span>Become a member</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline" size="md">
              <span>Visit or call our office</span>
            </Button>
          </div>
        </Container>
      </Section>


      {/* =========================================================================
          3. LOANS & CREDIT SOLUTIONS (id="loans")
          11 real loan types — 3 cols lg / 2 cols md / 1 col mobile.
          Navy (#073070) top accent differentiates cards from the royal-blue savings cards.
          Deep-link id on every card; scroll-mt-28 for sticky header offset.
          ========================================================================= */}
      <Section
        id="loans"
        background="surface"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-28"
      >
        <Container>
          {/* Section heading */}
          <SectionHeading
            heading="Loans & Credit Solutions"
            subText="Eleven loan options for family, business, property and emergency needs"
            align="center"
            withAmberBar
            className="mb-8 sm:mb-10"
          />

          {/* Cards grid */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {loanProducts.map((loan, index) => {
              const cardNumber = index + 1;
              return (
                <article
                  key={loan.id}
                  id={loan.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden scroll-mt-28
                    w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-40px)]"
                >
                  {/* ── Card header image ── */}
                  <div className="relative w-full h-38 shrink-0">
                    <Image
                      src="/images/savings-card-header2.png"
                      alt=""
                      fill
                      unoptimized
                      aria-hidden="true"
                      className="object-cover object-top"
                    />
                    {/* Number badge + tag pill overlaid on the image */}
                    <div className="absolute inset-0 flex items-start justify-between p-3">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-primary text-xs font-bold shrink-0 shadow"
                        aria-label={`Loan ${cardNumber}`}
                      >
                        {cardNumber}
                      </span>
                      {loan.tag && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#ffb900] text-[#7b3306] text-xs font-bold shadow">
                          {loan.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5 sm:p-6">

                    {/* Loan name */}
                    <h3 className="text-base sm:text-[17px] font-semibold text-navy leading-snug">
                      {loan.name}
                    </h3>

                    {/* Rate block */}
                    <div className="mt-3 mb-4">
                      <span className="text-5xl font-extrabold text-primary leading-none">
                        {loan.rate}%
                      </span>
                      <span className="block text-xs text-muted mt-0.5">per annum</span>
                    </div>

                    {/* Key-fact rows */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-start gap-2">
                        <Banknote className="w-4 h-4 text-navy/60 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <span className="text-xs font-semibold text-navy/70 uppercase tracking-wide">Loan amount</span>
                          <p className="text-[13px] text-muted leading-snug">{loan.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-navy/60 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <span className="text-xs font-semibold text-navy/70 uppercase tracking-wide">Repayment</span>
                          <p className="text-[13px] text-muted leading-snug">
                            {loan.repayment ?? "Contact our office"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights bullet list */}
                    <ul className="space-y-2 list-none p-0 m-0 flex-1 border-t border-slate-100 pt-4 mt-2">
                      {loan.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] sm:text-sm text-muted leading-relaxed">
                          <CheckCircle2
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ── Loans at a Glance table ── */}
          <div className="mt-14">
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 text-center">
              Loans at a Glance
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full min-w-[600px] text-sm border-collapse">
                <caption className="sr-only">
                  Horagasmulla SANASA loan types, annual interest rates, loan amounts, and repayment periods
                </caption>
                <thead>
                  <tr className="bg-navy text-white">
                    <th scope="col" className="text-left px-4 py-3 font-semibold">Loan type</th>
                    <th scope="col" className="text-center px-4 py-3 font-semibold whitespace-nowrap">Annual interest rate</th>
                    <th scope="col" className="text-left px-4 py-3 font-semibold">Loan amount</th>
                    <th scope="col" className="text-left px-4 py-3 font-semibold">Repayment period</th>
                  </tr>
                </thead>
                <tbody>
                  {loanProducts.map((loan, index) => (
                    <tr
                      key={loan.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-blue-50/60"}
                    >
                      <th scope="row" className="text-left px-4 py-3 font-medium text-navy align-top">
                        <a href={`#${loan.id}`} className="hover:text-primary transition-colors">
                          {loan.name}
                        </a>
                      </th>
                      <td className="text-center px-4 py-3 font-bold text-primary whitespace-nowrap align-top">
                        {loan.rate}% p.a.
                      </td>
                      <td className="text-left px-4 py-3 text-muted align-top">{loan.amount}</td>
                      <td className="text-left px-4 py-3 text-muted align-top">
                        {loan.repayment ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footnote */}
            <p className="mt-3 text-xs text-muted text-center leading-relaxed px-2">
              {loanNote}
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/membership" variant="primary" size="md">
              <span>Become a member</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline" size="md">
              <span>Visit or call our office</span>
            </Button>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. COMMUNITY WELFARE & SOCIAL RESPONSIBILITY (id="welfare")
          ========================================================================= */}
      <Section
        id="welfare"
        background="default"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-28"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
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
          ========================================================================= */}
      <Section background="hero" spacing="default" className="text-center">
        <Container className="max-w-3xl mx-auto py-4">
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
