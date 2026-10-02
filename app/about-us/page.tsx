import React from "react";
import Image from "next/image";
import {
  Users,
  Coins,
  ArrowRight,
  Building,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { Timeline } from "@/components/sections/Timeline";
import { PhotoCardGrid, type PhotoCardItem } from "@/components/sections/PhotoCard";
import { AwardCard } from "@/components/sections/AwardCard";
import { aboutContent } from "@/content/about";
import { statistics } from "@/content/stats";
import { awards as awardsData, type Award } from "@/content/awards";
import { siteImages, type ImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Discover Dodangoda Horagasmulla SANASA Society Ltd: 60+ years of cooperative banking, Rs. 400 Million assets, 750+ members, 7 trophies in cricket, netball, volleyball and drama, and modern facilities.",
  path: "/about-us",
  keywords: [
    "About Sanasa Bank",
    "Dodangoda Horagasmulla history",
    "cooperative bank legacy",
    "SANASA 1965",
    "Horagasmulla facilities",
    "Cooperative awards",
  ],
});

export default function AboutUsPage() {
  const { banner, legacy, milestones, awards, } = aboutContent;

  // Retrieve dynamic statistics from /content/stats
  const totalAssetsStat = statistics.find((s) => s.id === "total-assets");
  const activeMembersStat = statistics.find((s) => s.id === "active-members");
  const totalAssetsText = totalAssetsStat ? totalAssetsStat.displayValue : "Rs. 400 Million";
  const activeMembersText = activeMembersStat ? `${activeMembersStat.displayValue} active members` : "750+ active members";

  const mainOfficeImage = siteImages["main-office"];


  // Compute category counts from awards data
  const categories: Array<Award["category"]> = [
    "Cricket",
    "Netball & Volleyball",
    "Drama",
  ];
  const categoryCounts = categories.map((cat) => ({
    name: cat,
    count: awardsData.filter((a) => a.category === cat).length,
  }));

  // Schema.org Breadcrumbs
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
  ]);

  const breadcrumbsList = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <>
      {/* Schema.org BreadcrumbList JSON-LD */}
      <JsonLd data={breadcrumbSchema} />

      {/* =========================================================================
          1. PAGE BANNER
          Title: "About Us"
          Sub-text: "Over six decades of service, cooperative values, and community development"
          ========================================================================= */}
      <PageBanner
        title={banner.title}
        subText={banner.subText}
        breadcrumbs={breadcrumbsList}
        badge="Since 1965"
      />

      {/* =========================================================================
          2. OUR LEGACY (Background: Default / Slate White)
          Three paragraphs, closing line showing Rs. 1 Billion total assets and 600 active members
          Main office photo captioned "Main Office Entrance"
          ========================================================================= */}
      <Section background="default" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Legacy text & Key stats badge */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                heading={legacy.heading}
                subText={legacy.subHeading}
                align="left"
                withAmberBar
                className="mb-4"
              />

              <div className="space-y-4 text-base sm:text-lg text-text/90 leading-relaxed">
                {legacy.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              {/* Highlighted Closing Line Badge with Dynamic Stats */}
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-tint border border-primary/20 text-primary">
                  <div className="flex items-center gap-2.5">
                    <Coins className="w-5 h-5 text-amber-dark shrink-0" aria-hidden="true" />
                    <span className="text-sm sm:text-base font-bold text-text">
                      <strong className="text-primary font-bold">{totalAssetsText}</strong> total assets
                    </span>
                  </div>

                  <span className="hidden sm:inline-block text-slate-300" aria-hidden="true">
                    •
                  </span>

                  <div className="flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-sm sm:text-base font-bold text-text">
                      <strong className="text-primary font-bold">{activeMembersText}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Main Office Entrance Photo with Caption */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <figure className="w-full max-w-md lg:max-w-none group">
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-100 ring-1 ring-slate-200 aspect-[4/3]">
                  <Image
                    src={mainOfficeImage.src}
                    alt={mainOfficeImage.alt}
                    width={mainOfficeImage.width}
                    height={mainOfficeImage.height}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="mt-3 text-xs sm:text-sm text-center font-medium text-muted">
                  {legacy.imageCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. HISTORICAL MILESTONES (id="milestones", Background: Surface / Light Blue)
          Sub-text: "Our journey through years of dedicated community service"
          Timeline with four entries: Establishment (1965), Cooperative Registration,
          Computerization, Modernization. Only the first has the year 1965.
          ========================================================================= */}
      <Section
        id="milestones"
        background="surface"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-20"
      >
        <Container>
          <SectionHeading
            heading={milestones.heading}
            subText={milestones.subText}
            align="center"
            withAmberBar
            className="mb-10 sm:mb-14"
          />

          <Timeline items={milestones.items} />
        </Container>
      </Section>

      {/* =========================================================================
          4. AWARDS & ACHIEVEMENTS (id="awards", Background: Default / Slate White)
          H2 "Awards & Achievements"
          sub-text "Our trophies from cooperative sports and cultural events"
          Intro paragraph about teamwork and community spirit (no claims about regulators)
          Three category chips with counts computed from the data
          Grid of all 7 AwardCards (3 columns on lg, 2 on md, 1 on mobile, with 7th card centered on lg)
          ========================================================================= */}
      <Section
        id="awards"
        background="default"
        spacing="spacious"
        className="border-b border-slate-200/80 scroll-mt-20"
      >
        <Container>
          <SectionHeading
            heading={awards.heading}
            subText={awards.subText}
            align="center"
            withAmberBar
            className="mb-6 sm:mb-8"
          />

          <p className="max-w-3xl mx-auto text-center text-base sm:text-lg text-muted leading-relaxed mb-8 sm:mb-10">
            {awards.intro}
          </p>

          {/* Three category chips with counts computed from data */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            {categoryCounts.map(({ name, count }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#EBF3FE] text-[#0B63D6] border border-[#0B63D6]/20 shadow-2xs"
              >
                <span>{name}</span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0B63D6] text-white text-xs font-bold">
                  {count}
                </span>
              </span>
            ))}
          </div>

          {/* Grid of all 7 AwardCards: Row 1 has 4 cards, Row 2 has 3 cards justifying the screen */}
          <div className="space-y-6 sm:space-y-8">
            {/* Top row: 4 cards on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {awardsData.slice(0, 4).map((award) => (
                <AwardCard key={award.id} award={award} className="h-full" />
              ))}
            </div>

            {/* Bottom row: 3 cards spanning and justifying the screen width */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center">
              {awardsData.slice(4).map((award) => (
                <AwardCard key={award.id} award={award} className="h-full" />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. CALL-TO-ACTION BAND (Background: Hero / Navy gradient)
          Links to /membership and /contact for internal navigation
          ========================================================================= */}
      <Section background="hero" spacing="default" className="text-center">
        <Container className="max-w-3xl mx-auto py-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            <Building className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Community Ownership</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text leading-tight">
            Ready to Join Our Cooperative Community?
          </h2>

          <p className="mt-3 text-base text-muted leading-relaxed max-w-xl mx-auto">
            Become an equal shareholder with voting rights, secure thrift returns, and access to low-interest community credit facilities.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/membership" variant="primary" size="lg">
              <span>Explore Membership</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <span>Contact Branch Office</span>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
