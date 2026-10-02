import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCardsGrid } from "@/components/sections/ServiceCard";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AwardsCarousel } from "@/components/sections/AwardsCarousel";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBankOrCreditUnionSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  path: "/",
  description:
    "Dodangoda Horagasmulla SANASA Society Ltd offers secure savings, agricultural and microfinance loans, and community welfare projects in Dodangoda since 1965.",
});

export default function HomePage() {
  const { welcome, featuredServices, closingQuote } = homeContent;
  const bankSchema = getBankOrCreditUnionSchema();

  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd data={bankSchema} />

      {/* =========================================================================
          1. FULL-SCREEN IMMERSIVE HERO CAROUSEL
          Showcases authentic society opening ceremony, community festivals,
          and heritage flags with cinematic overlay and progress line indicators.
          ========================================================================= */}
      <HeroCarousel />

      {/* =========================================================================
          2. TRUSTBAR / STATS STRIP
          Key metrics showcasing assets, membership, account holders, and history.
          Kept separate as a distinct section between Hero and Welcome.
          ========================================================================= */}
      <StatsStrip />

      {/* =========================================================================
          3. WELCOME SECTION (Two-Column Split + Embedded Video Facade)
          - Centered top pill badge "Welcome"
          - Left column: H2, royal-blue sub-heading, 3 paragraphs, "Our Story" button
          - Right column: 16:9 YouTube video facade with click-to-load play button
          ========================================================================= */}
      <Section
        background="default"
        spacing="none"
        className="bg-white border-b border-slate-200/80 py-12 sm:py-14 lg:py-24"
      >
        <Container>
          {/* 1. Top Badge: small centered pill label */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 bg-white shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium text-navy tracking-wide">
                Welcome
              </span>
            </div>
          </div>

          {/* 2. Two-column split on desktop (lg and above), stacked below lg */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column (Text & Button) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* H2 Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[42px] font-bold text-navy tracking-tight leading-[1.18] sm:leading-[1.16]">
                {welcome.heading}
              </h2>

              {/* Sub-heading as semibold royal-blue paragraph */}
              <p className="mt-2.5 sm:mt-3 text-base sm:text-lg lg:text-xl font-semibold text-primary">
                {welcome.subHeading}
              </p>

              {/* Three welcome paragraphs */}
              <div className="mt-5 sm:mt-6 space-y-4 text-[16px] sm:text-[17px] text-[#64748B] leading-[1.7]">
                {welcome.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Solid navy pill-shaped button */}
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#073070] hover:bg-[#0c439c] active:bg-[#052352] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#073070] cursor-pointer"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Right Column (Expanded Video Frame) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
              <YouTubeFacade
                videoId={siteConfig.introVideo.videoId}
                title={siteConfig.introVideo.title}
                className="w-full shadow-2xl"
              />
            </div>
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
          5. AWARDS & ACHIEVEMENTS CAROUSEL
          Horizontal scroll-snap track with 7 authentic cooperative trophies.
          ========================================================================= */}
      <AwardsCarousel />

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
