import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Trophy, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ServiceCardsGrid } from "@/components/sections/ServiceCard";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBankOrCreditUnionSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  path: "/",
  description:
    "Dodangoda Horagasmulla SANASA Society Ltd offers secure savings, agricultural and microfinance loans, and community welfare projects in Dodangoda since 1965.",
});

export default function HomePage() {
  const { hero, welcome, featuredServices, awards, closingQuote } = homeContent;
  const heroImage = siteImages["hero-building"];
  const bronzeAwardImage = siteImages["award-bronze"];
  const trophyAwardImage = siteImages["award-cooperative-day"];
  const bankSchema = getBankOrCreditUnionSchema();

  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd data={bankSchema} />

      {/* =========================================================================
          1. HERO SECTION
          Two columns on large screens (text left, photo right), stacked on phones.
          White-to-light-blue gradient background.
          Next.js Image with priority and explicit dimensions.
          ========================================================================= */}
      <Section
        background="hero"
        spacing="spacious"
        className="relative overflow-hidden border-b border-slate-200/80 pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-20 lg:pb-24"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, quote line, sub-headline, and CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Quote Line / Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-primary/20 shadow-xs mb-5">
                <span className="w-2 h-2 rounded-full bg-amber shrink-0 animate-pulse" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide">
                  &ldquo;{hero.tagline}&rdquo;
                </span>
              </div>

              {/* H1 Primary Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-text leading-[1.15]">
                {hero.headline}
              </h1>

              {/* Sub-headline paragraph */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                {hero.subHeadline}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button
                  href={hero.primaryCta.href}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-md"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  href={hero.secondaryCta.href}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            {/* Right Column: Building entrance photo with caption & rounded corners */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <figure className="w-full max-w-md lg:max-w-none group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100 ring-1 ring-slate-200/60 aspect-[4/3]">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="mt-3 text-xs sm:text-sm text-center font-medium text-muted">
                  {hero.imageCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. STATS STRIP
          Key metrics showcasing assets, membership, account holders, and history.
          ========================================================================= */}
      <StatsStrip />

      {/* =========================================================================
          3. WELCOME SECTION
          H2 "Welcome to Dodangoda Horagasmulla SANASA Bank"
          Sub-heading "Uplifting Rural Lives & Communities"
          Three structured paragraphs detailing history, governance, and community CSR.
          ========================================================================= */}
      <Section background="surface" spacing="default" className="border-b border-slate-200/80">
        <Container className="max-w-4xl mx-auto">
          <SectionHeading
            heading={welcome.heading}
            subText={welcome.subHeading}
            align="center"
            withAmberBar
            className="mb-8 sm:mb-10"
          />

          <div className="bg-background rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-5 text-base sm:text-lg text-text/90 leading-relaxed">
            {welcome.paragraphs.map((paragraph, index) => (
              <p key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 hidden sm:inline-block" aria-hidden="true" />
                <span>{paragraph}</span>
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. FEATURED SERVICES
          H2 "Featured Services"
          Sub-text "Tailored cooperative financial solutions"
          Three cards linking to /services#savings, /services#loans, /services#welfare
          ========================================================================= */}
      <Section background="default" spacing="default" className="border-b border-slate-200/80">
        <Container>
          <SectionHeading
            heading={featuredServices.heading}
            subText={featuredServices.subHeading}
            align="center"
          />

          <ServiceCardsGrid cards={featuredServices.cards} />

          <div className="mt-10 sm:mt-12 text-center">
            <Button href="/services" variant="outline" size="md">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. AWARDS & ACHIEVEMENTS
          H2 "Awards & Achievements", sub-text "Official recognition of our performance"
          Two image cards (Centenary Bronze 2018, Cooperative Day Trophy)
          Text block with "Proven Excellence in Cooperative Governance"
          Two award descriptions and a "View More" link to /about-us#awards
          Images first on mobile screens!
          ========================================================================= */}
      <Section background="surface" spacing="default" className="border-b border-slate-200/80">
        <Container>
          <SectionHeading
            heading={awards.heading}
            subText={awards.subHeading}
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Cards Column: order-1 on mobile, order-2 on large screens (Images first on mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Award Card 1: Centenary Bronze Award */}
              <article className="group bg-background rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="relative aspect-square bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3">
                  <Image
                    src={bronzeAwardImage.src}
                    alt={bronzeAwardImage.alt}
                    width={bronzeAwardImage.width}
                    height={bronzeAwardImage.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber text-text shadow-xs">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Bronze 2018</span>
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors leading-snug">
                    {awards.centenaryAward.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed flex-1">
                    {awards.centenaryAward.description}
                  </p>
                </div>
              </article>

              {/* Award Card 2: Cooperative Day Trophy */}
              <article className="group bg-background rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="relative aspect-square bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3">
                  <Image
                    src={trophyAwardImage.src}
                    alt={trophyAwardImage.alt}
                    width={trophyAwardImage.width}
                    height={trophyAwardImage.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-primary text-white shadow-xs">
                    <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Annual Trophy</span>
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors leading-snug">
                    {awards.cooperativeDayAward.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed flex-1">
                    {awards.cooperativeDayAward.description}
                  </p>
                </div>
              </article>
            </div>

            {/* Text Block Column: order-2 on mobile, order-1 on large screens */}
            <div className="order-2 lg:order-1 lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Verified Governance</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text leading-snug">
                  {awards.featureSubHeading}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-muted leading-relaxed">
                {awards.paragraph}
              </p>

              {/* Award highlights checklist */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-background border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-text">
                      {awards.centenaryAward.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-muted">
                      {awards.centenaryAward.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-background border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-text">
                      {awards.cooperativeDayAward.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-muted">
                      {awards.cooperativeDayAward.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* View More Link to /about-us#awards */}
              <div className="pt-2">
                <Link
                  href={awards.viewMoreLink.href}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-primary hover:text-primary-light transition-colors group focus-visible:outline-2 focus-visible:outline-primary rounded-md py-1"
                >
                  <span>{awards.viewMoreLink.label}</span>
                  <span className="sr-only"> on About Us awards section</span>
                  <ArrowRight
                    className="w-4 h-4 text-cyan group-hover:translate-x-1 transition-transform duration-150"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. QUOTE BANNER
          "A happy family, a prosperous village, is the Sanasa wish"
          ========================================================================= */}
      <QuoteBanner
        quote={closingQuote.quote}
        subText={closingQuote.subText}
      />
    </>
  );
}
