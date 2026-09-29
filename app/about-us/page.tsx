import React from "react";
import Image from "next/image";
import {
  Award,
  Trophy,
  Users,
  Coins,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { Timeline } from "@/components/sections/Timeline";
import { PhotoCardGrid, type PhotoCardItem } from "@/components/sections/PhotoCard";
import { aboutContent } from "@/content/about";
import { statistics } from "@/content/stats";
import { siteImages, type ImageKey } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Discover Dodangoda Horagasmulla SANASA Society Ltd: 60+ years of cooperative banking, Rs. 1 Billion assets, 600 members, verified awards, and modern facilities.",
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
  const { banner, legacy, milestones, awards, facilities } = aboutContent;

  // Retrieve dynamic statistics from /content/stats
  const totalAssetsStat = statistics.find((s) => s.id === "total-assets");
  const activeMembersStat = statistics.find((s) => s.id === "active-members");
  const totalAssetsText = totalAssetsStat ? totalAssetsStat.displayValue : "Rs. 1 Billion";
  const activeMembersText = activeMembersStat ? `${activeMembersStat.value} active members` : "600 active members";

  const mainOfficeImage = siteImages["main-office"];
  const bronzeAwardImage = siteImages["award-bronze"];
  const trophyAwardImage = siteImages["award-cooperative-day"];

  // Prepare facilities items with proper ImageKey
  const facilityItems: PhotoCardItem[] = facilities.items.map((facility) => ({
    id: facility.id,
    title: facility.title,
    caption: facility.caption,
    imageKey: facility.imageKey as ImageKey,
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
          4. AWARDS & VERIFICATION (id="awards", Background: Default / Slate White)
          Target of Home page "View More" link.
          Sub-text: "Official recognition of our performance and transparency"
          Sub-heading: "Commitment to Regulatory Excellence"
          Two paragraphs (mention 2018 National Centenary Bronze Award)
          Two image cards: "Centenary Bronze Plaque (2018)" and "International Cooperative Day Trophy"
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
            className="mb-8 sm:mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Regulatory Excellence text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Audit & Compliance</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text leading-snug">
                  {awards.subHeading}
                </h3>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                {awards.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-text/80 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <Award className="w-4 h-4 text-amber-dark shrink-0" aria-hidden="true" />
                  <span>Verified Financial Standards</span>
                </div>
                <p className="text-muted">
                  Fully regulated under the Department of Cooperative Development (Western Province), guaranteeing total safety for your thrift deposits.
                </p>
              </div>
            </div>

            {/* Right Column: Two Award Image Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Award Card 1: Centenary Bronze Plaque */}
              <article className="group bg-surface rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="relative aspect-square bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-4">
                  <Image
                    src={bronzeAwardImage.src}
                    alt={bronzeAwardImage.alt}
                    width={bronzeAwardImage.width}
                    height={bronzeAwardImage.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber text-text shadow-xs">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Bronze Award</span>
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-primary block uppercase tracking-wider mb-1">
                    National Recognition
                  </span>
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors leading-snug">
                    Centenary Bronze Plaque (2018)
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed flex-1">
                    Awarded in the National Cooperative Excellence Competition for exemplary governance, member trust, and financial stability.
                  </p>
                </div>
              </article>

              {/* Award Card 2: International Cooperative Day Trophy */}
              <article className="group bg-surface rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="relative aspect-square bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-4">
                  <Image
                    src={trophyAwardImage.src}
                    alt={trophyAwardImage.alt}
                    width={trophyAwardImage.width}
                    height={trophyAwardImage.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-primary text-white shadow-xs">
                    <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Annual Trophy</span>
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-cyan block uppercase tracking-wider mb-1">
                    Community Leadership
                  </span>
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors leading-snug">
                    International Cooperative Day Trophy
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed flex-1">
                    Presented in recognition of community leadership, thrift promotion, and member support initiatives.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. OUR FACILITIES (Background: Surface / Light Blue)
          Sub-text: "Comfortable, modern environment to serve you"
          Three photo cards: Transaction Counter, Computerized Operations, Banking Office
          ========================================================================= */}
      <Section background="surface" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <SectionHeading
            heading={facilities.heading}
            subText={facilities.subText}
            align="center"
            withAmberBar
            className="mb-10 sm:mb-12"
          />

          <PhotoCardGrid items={facilityItems} columns={3} aspectRatio="video" />
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
