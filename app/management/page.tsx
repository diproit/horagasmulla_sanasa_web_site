import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Vote,
  ShieldCheck,
  HeartHandshake,
  Award,
  Compass,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/sections/PageBanner";
import { managementContent } from "@/content/management";
import { siteImages, type ImageKey } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Management",
  description:
    "Meet the democratically elected Board of Directors and leadership of Horagasmulla SANASA Society Ltd, dedicated to transparency, integrity, and community trust.",
  path: "/management",
  keywords: [
    "Sanasa Bank management",
    "Board of Directors Horagasmulla",
    "cooperative leadership Dodangoda",
    "cooperative governance Sri Lanka",
    "SANASA bank chairman",
  ],
});

/* 
 * NOTE FOR SITE ADMINISTRATORS:
 * To update the Board of Directors with real members' photos and names:
 * 1. Edit /content/management.ts to replace the demo names, roles, and bios.
 * 2. Upload actual portrait photos into /public/images/ (e.g. board-1.jpg, board-2.jpg)
 *    and update the corresponding image paths in /lib/images.ts.
 */

export default function ManagementPage() {
  const { banner, governance, board, managementTeam, principles } = managementContent;

  const chairman = board.members.find((m) => m.isChairman) || board.members[0];
  const directors = board.members.filter((m) => !m.isChairman);

  const manager = managementTeam.staff.find((s) => s.role === "Manager") || managementTeam.staff[0];
  const assistantManagers = managementTeam.staff.filter((s) => s.role !== "Manager");

  // Schema.org Structured Data
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Management", path: "/management" },
  ]);

  const breadcrumbsList = [
    { label: "Home", href: "/" },
    { label: "Management", href: "/management" },
  ];

  // Principle icons
  const principleIcons = [
    <Vote key="1" className="w-6 h-6 text-primary" aria-hidden="true" />,
    <ShieldCheck key="2" className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    <HeartHandshake key="3" className="w-6 h-6 text-amber-dark" aria-hidden="true" />,
  ];

  return (
    <>
      {/* Schema.org BreadcrumbList JSON-LD */}
      <JsonLd data={breadcrumbSchema} />

      {/* =========================================================================
          1. PAGE BANNER
          Title: "Management"
          Sub-text: "Democratically elected Board of Directors leading with transparency and trust"
          ========================================================================= */}
      <PageBanner
        title={banner.title}
        subText={banner.subText}
        breadcrumbs={breadcrumbsList}
      />

      {/* =========================================================================
          2. OUR GOVERNANCE SYSTEM
          Sub-text: "Board representation directly elected by geographical zones"
          Sub-heading: "Elected Board of Directors"
          Three structured paragraphs
          ========================================================================= */}
      <Section background="default" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight">
                {governance.heading}
              </h2>

              <p className="mt-2 text-base sm:text-lg text-primary font-semibold">
                {governance.subHeading}
              </p>

              <p className="mt-1 text-sm sm:text-base text-muted">
                {governance.subText}
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-5 text-base sm:text-lg text-text/90 leading-relaxed">
              {governance.paragraphs.map((p, index) => (
                <p key={index} className="flex items-start gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2.5 shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. BOARD OF DIRECTORS
          Sub-text: "Meet the leaders of Horagasmulla SANASA"
          Chairman card shown first (larger, "Hon. Chairman", role label "Board Leader" in royal blue)
          Followed by 6 Director cards (portrait, full name, role "Director")
          Placeholder portraits with alt text: "Portrait of [name], Director"
          ========================================================================= */}
      <Section background="surface" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <SectionHeading
            heading={board.heading}
            subText="Meet the leaders of Horagasmulla SANASA"
            align="center"
            withAmberBar
            className="mb-10 sm:mb-14"
          />

          {/* Featured Chairman Card (Larger, prominent presentation) */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <article className="group bg-background rounded-2xl border-2 border-primary/30 p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              {/* Chairman Photo */}
              <div className="relative w-44 sm:w-52 aspect-square rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-primary/20 ring-4 ring-tint shadow-inner">
                {siteImages[chairman.imageKey as ImageKey] ? (
                  <Image
                    src={siteImages[chairman.imageKey as ImageKey].src}
                    alt={`Portrait of ${chairman.name}, Hon. Chairman / Board Leader`}
                    width={siteImages[chairman.imageKey as ImageKey].width}
                    height={siteImages[chairman.imageKey as ImageKey].height}
                    className="w-full h-full object-cover  transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-tint text-primary font-bold">
                    {chairman.name}
                  </div>
                )}
              </div>

              {/* Chairman Details */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-text group-hover:text-primary transition-colors leading-snug">
                  {chairman.name}
                </h3>

                {/* Role label "Board Leader" in royal blue */}
                <p className="text-sm sm:text-base font-bold text-primary">
                  Hon. Chairman
                </p>

                {chairman.bio && (
                  <p className="text-sm text-muted leading-relaxed">
                    {chairman.bio}
                  </p>
                )}
              </div>
            </article>
          </div>

          {/* 6 Director Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {directors.map((director) => (
              <article
                key={director.id}
                className="group bg-background rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col"
              >
                {/* Director Photo Header */}
                <div className="relative aspect-[4/4] bg-slate-100 overflow-hidden border-b border-slate-100">
                  {siteImages[director.imageKey as ImageKey] ? (
                    <Image
                      src={siteImages[director.imageKey as ImageKey].src}
                      alt={`Portrait of ${director.name}, Director`}
                      width={siteImages[director.imageKey as ImageKey].width}
                      height={siteImages[director.imageKey as ImageKey].height}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-muted">
                      {director.name}
                    </div>
                  )}
                </div>

                {/* Director Name & Role */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-text group-hover:text-primary transition-colors leading-snug">
                    {director.name}
                  </h3>

                  {/* Role in Royal Blue */}
                  <span className="text-xs sm:text-sm font-bold text-primary block mt-1">
                    {director.role}
                  </span>

                  {director.bio && (
                    <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed flex-1">
                      {director.bio}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. OUR MANAGEMENT TEAM (id="management-team")
          Bank staff leadership: Manager and two Assistant Managers
          ========================================================================= */}
      <section
        id="management-team"
        aria-labelledby="management-team-heading"
        className="bg-[#F0F6FF] py-10 sm:py-14 lg:py-24 border-b border-slate-200/80"
      >
        <Container>
          {/* Centered header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            {/* Small pill badge "Bank Staff" */}
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-200 bg-white shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-amber shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-navy">Bank Staff</span>
              </div>
            </div>

            <h2
              id="management-team-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text leading-tight"
            >
              {managementTeam.heading}
            </h2>

            <p className="mt-2 text-base sm:text-lg text-muted max-w-xl mx-auto">
              {managementTeam.subText}
            </p>

            <p className="mt-4 text-base sm:text-lg text-text/80 leading-relaxed max-w-[700px] mx-auto">
              {managementTeam.intro}
            </p>
          </div>

          {/* Manager Card (Centered on its own row, slightly larger about 300px wide) */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <article className="group bg-white rounded-[12px] border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col w-full max-w-[340px] sm:max-w-[300px]">
              {/* Manager Photo (4:5 portrait) */}
              <div className="relative aspect-[4/4] bg-slate-100 overflow-hidden border-b border-slate-100">
                <Image
                  src={siteImages[manager.imageKey as ImageKey]?.src || "/images/staff-1.svg"}
                  alt={manager.imageAlt}
                  width={400}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Manager Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col items-center text-center">
                <span className="text-xs font-bold text-primary tracking-wider mb-1">
                  Manager
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-navy leading-snug">
                  {manager.name}
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber text-slate-900 mt-2.5 shadow-2xs">
                  {manager.role}
                </span>
              </div>
            </article>
          </div>

          {/* Assistant Managers (Two cards side by side, centered with same size as board cards) */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 sm:gap-8 max-w-2xl mx-auto">
            {assistantManagers.map((asst) => (
              <article
                key={asst.id}
                className="group bg-white rounded-[12px] border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col w-full max-w-[340px] md:max-w-[280px] lg:max-w-[300px] flex-1"
              >
                {/* Assistant Manager Photo */}
                <div className="relative aspect-[4/4] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={siteImages[asst.imageKey as ImageKey]?.src || "/images/staff-2.svg"}
                    alt={asst.imageAlt}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Assistant Manager Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col items-center text-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    Leadership
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-navy leading-snug">
                    {asst.name}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF3FE] text-primary mt-2.5 border border-primary/20">
                    {asst.role}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Internal Link to Contact Office */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-primary hover:text-primary-light transition-colors group"
            >
              <span>Contact our office</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. COOPERATIVE PRINCIPLES
          Sub-text: "Values that guide our management team"
          Three value blocks:
            1. Democratic Member Control
            2. Transparency & Integrity
            3. Concern for the Community
          ========================================================================= */}
      <Section background="default" spacing="spacious" className="border-b border-slate-200/80">
        <Container>
          <SectionHeading
            heading={principles.heading}
            subText={principles.subText}
            align="center"
            withAmberBar
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {principles.items.map((principle, index) => (
              <div
                key={principle.title}
                className="bg-surface rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:border-primary/40 transition-colors flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center shrink-0 mb-4">
                  {principleIcons[index % principleIcons.length]}
                </div>

                <h3 className="text-lg font-bold text-text mb-2 leading-snug">
                  {principle.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-text font-bold block mb-1">
                    {principle.leadIn}
                  </strong>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. CLOSING CALL-TO-ACTION BAND
          Linking directly to /membership
          ========================================================================= */}
      <Section background="hero" spacing="default" className="text-center">
        <Container className="max-w-3xl mx-auto py-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text leading-tight">
            Have a Voice in Your Local Bank
          </h2>

          <p className="mt-3 text-base text-muted leading-relaxed max-w-xl mx-auto">
            Every registered member has the constitutional right to vote and choose their zonal council representatives who lead our board.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/membership" variant="primary" size="lg">
              <span>Join As a Member</span>
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
