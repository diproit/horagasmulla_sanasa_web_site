"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  Eye,
  Download,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { BrochureInfo, KeyBenefit } from "@/content/membership";

export interface PdfPanelProps {
  brochure: BrochureInfo;
  benefits?: KeyBenefit[];
  className?: string;
}

export function PdfPanel({ brochure, className }: PdfPanelProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-slate-200/90 shadow-sm  p-5 sm:p-6 flex flex-col transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      {/* Panel Header */}
      <div className="flex items-start gap-3.5 mb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-text leading-tight">
            {brochure.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
            {brochure.description}
          </p>
        </div>
      </div>

      {/* Document Cover Photo Preview (Clickable to open native PDF in new tab) */}
      <a
        href={brochure.file}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full rounded-xl overflow-hidden border border-slate-200/90 bg-slate-50 mb-5 hover:border-primary/60 transition-all duration-200 group cursor-pointer shadow-2xs hover:shadow-md text-left"
        title="Click to open full PDF document in a new tab"
      >
        {/* Real Document Cover Photo Container */}
        <div className="relative w-full aspect-[3/4] bg-white flex items-center justify-center p-3 sm:p-4 overflow-hidden">
          <Image
            src="/images/membership-benefits-cover.png"
            alt="සී/ස දොඩන්ගොඩ හොරගස්මුල්ල සකසුරුවම් හා ණය ගනුදෙනු සමුපකාර සමිතිය - නව සුභ සාධක කාරක නියෝග මාලාව"
            width={600}
            height={700}
            className="w-full h-full object-contain rounded-md shadow-xs group-hover:scale-[1.02] transition-transform duration-300"
            priority
          />
        </div>
      </a>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
        <a
          href={brochure.file}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-[#0B63D6] hover:bg-[#0952B5] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          <Eye className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>PDF Preview</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
        </a>

        <a
          href={brochure.file}
          download={brochure.downloadName}
          className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary/5 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Small Fallback Link */}
      <div className="mt-3.5 text-center">
        <a
          href={brochure.file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted hover:text-primary transition-colors inline-flex items-center gap-1 font-medium"
        >
          <span>Open directly in browser viewer</span>
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>

        <noscript>
          <div className="mt-1 text-xs">
            <a href={brochure.file} className="text-primary underline">
              Direct link to {brochure.title} (PDF)
            </a>
          </div>
        </noscript>
      </div>
    </div>
  );
}
