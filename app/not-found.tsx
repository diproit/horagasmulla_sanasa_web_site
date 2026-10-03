import Link from "next/link";
import { Metadata } from "next";
import {
  Home,
  Info,
  PiggyBank,
  Users,
  Compass,
  Phone,
  ArrowLeft,
  FileQuestion,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found — Dodangoda Horagasmulla SANASA Society Ltd",
  description:
    "The page you are looking for does not exist. Browse our cooperative banking services, savings accounts, or contact Horagasmulla SANASA.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const mainPages = [
    {
      title: "Home",
      description: "Return to the main overview of our cooperative bank.",
      href: "/",
      icon: <Home className="w-5 h-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "About Us",
      description: "Our 60-year history, leadership legacy, and awards.",
      href: "/about-us",
      icon: <Info className="w-5 h-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "Our Services",
      description: "Savings accounts, loan facilities, and welfare programs.",
      href: "/services",
      icon: <PiggyBank className="w-5 h-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "Membership",
      description: "Welfare benefits, loan facilities, and registration details.",
      href: "/membership",
      icon: <Users className="w-5 h-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "Management",
      description: "Meet our democratically elected Board of Directors.",
      href: "/management",
      icon: <Compass className="w-5 h-5 text-primary" aria-hidden="true" />,
    },
    {
      title: "Contact Us",
      description: "Branch address, phone numbers, WhatsApp, and Google Map.",
      href: "/contact",
      icon: <Phone className="w-5 h-5 text-primary" aria-hidden="true" />,
    },
  ];

  return (
    <Section background="hero" spacing="spacious">
      <Container className="max-w-4xl mx-auto py-8 sm:py-14 text-center">
        {/* Friendly Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tint text-primary text-xs font-bold uppercase tracking-wider mb-5 border border-primary/20">
          <FileQuestion className="w-4 h-4" aria-hidden="true" />
          <span>404 — Page Not Found</span>
        </div>

        {/* Primary H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text leading-tight">
          Oops! We couldn&apos;t find that page
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
          The link you followed may have expired, or the page may have been moved.
          Use the button below or explore the main sections of our website:
        </p>

        {/* Back to Home CTA */}
        <div className="mt-8 mb-12 flex justify-center">
          <Button href="/" variant="primary" size="lg" className="shadow-md">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Back to Home</span>
          </Button>
        </div>

        {/* Quick Links to All Six Main Pages */}
        <div className="border-t border-slate-200/80 pt-10 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-text mb-6 text-center">
            Explore All Main Pages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {mainPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-5 rounded-2xl bg-surface border border-slate-200/90 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-tint flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {page.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{page.title}</span>
                    <span className="text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true">
                      &rarr;
                    </span>
                  </h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {page.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
