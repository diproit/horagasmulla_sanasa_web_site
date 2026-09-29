import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { TopBar, Header, Footer, FloatingWhatsApp } from "@/components/layout";
import { buildMetadata, BASE_SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRootSchemas } from "@/lib/schema";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_SITE_URL),
  ...buildMetadata({
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootSchemas = getRootSchemas();

  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              iframe.skiptranslate,
              iframe[class*="skiptranslate"],
              iframe[class*="VIpgJd"],
              iframe[id*=":"][id*="container"],
              .goog-te-banner-frame,
              .VIpgJd-ZVi9od-ORHb-OEVmcd,
              .VIpgJd-ZVi9od-OR94Gd-PR6tc,
              [class*="VIpgJd-ZVi9od"] {
                display: none !important;
                visibility: hidden !important;
                height: 0px !important;
                width: 0px !important;
                opacity: 0 !important;
                pointer-events: none !important;
              }
              html, body {
                top: 0px !important;
                position: static !important;
                margin-top: 0px !important;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onerror = function(msg, url, line, col, error) {
                if (msg === 'Script error.' || (!url && msg === 'Script error.') || (url && (url.indexOf('google') !== -1 || url.indexOf('translate') !== -1))) {
                  return true;
                }
                return false;
              };
              window.addEventListener('error', function(e) {
                if (e.message === 'Script error.' || (e.filename && (e.filename.indexOf('google') !== -1 || e.filename.indexOf('translate') !== -1))) {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
              }, true);
              window.addEventListener('unhandledrejection', function(e) {
                var reason = e.reason ? (e.reason.message || String(e.reason)) : '';
                if (reason === 'Script error.' || reason.indexOf('google') !== -1 || reason.indexOf('translate') !== -1) {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                }
              }, true);
              if (typeof window !== 'undefined') {
                var resetTop = function() {
                  if (document.body && document.body.style && document.body.style.top && document.body.style.top !== '0px') {
                    document.body.style.setProperty('top', '0px', 'important');
                  }
                };
                if (window.MutationObserver) {
                  var obs = new MutationObserver(function() {
                    resetTop();
                    var banner = document.querySelector('iframe.skiptranslate, iframe[id*=":"][id*="container"], .goog-te-banner-frame, [class*="VIpgJd-ZVi9od"]');
                    if (banner) {
                      banner.style.setProperty('display', 'none', 'important');
                      banner.style.setProperty('visibility', 'hidden', 'important');
                      banner.style.setProperty('height', '0px', 'important');
                      banner.style.setProperty('width', '0px', 'important');
                      banner.style.setProperty('opacity', '0', 'important');
                      banner.style.setProperty('pointer-events', 'none', 'important');
                    }
                  });
                  var target = document.documentElement;
                  if (target) {
                    obs.observe(target, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
                  } else {
                    window.addEventListener('DOMContentLoaded', function() {
                      obs.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
                    });
                  }
                }
              }
            `,
          }}
        />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.googleTranslateElementInit = function() {
                try {
                  if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                    new window.google.translate.TranslateElement({
                      pageLanguage: 'en',
                      includedLanguages: 'en,si',
                      autoDisplay: false
                    }, 'google_translate_element');
                  }
                } catch(e) {}
              };
            `,
          }}
        />
        <Script
          id="google-translate-cdn"
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <JsonLd data={rootSchemas} />
      </head>
      <body
        className="min-h-screen flex flex-col bg-background text-text font-sans antialiased"
        suppressHydrationWarning
      >
        {/* Hidden Google Translate Mount Element */}
        <div
          id="google_translate_element"
          suppressHydrationWarning
          style={{
            position: "fixed",
            top: -9999,
            left: -9999,
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        {/* Skip to Content Link for Accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber focus:text-text focus:font-semibold focus:rounded-lg focus:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-dark"
        >
          Skip to main content
        </a>

        {/* Global Layout Landmarks */}
        <TopBar />
        <Header />

        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>

        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
