"use client";

import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
}

export function YouTubeFacade({
  videoId,
  title,
  thumbnailUrl,
  className,
}: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    thumbnailUrl || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  useEffect(() => {
    setImgSrc(
      thumbnailUrl || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    );
  }, [videoId, thumbnailUrl]);

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80 group transition-shadow duration-300",
        className
      )}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full border-0 absolute inset-0"
        />
      ) : (
        <>
          {/* Lazy loaded thumbnail image */}
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            width={1280}
            height={720}
            onError={() => {
              if (imgSrc.includes("maxresdefault")) {
                setImgSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
              }
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          />

          {/* Subtle gradient vignette to increase contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Centered round amber play button (at least 64px, keyboard accessible real button) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play video"
              className="w-20 h-20 sm:w-24 sm:h-24 min-w-[72px] min-h-[72px] rounded-full bg-amber hover:bg-amber-light active:bg-amber-dark text-navy-dark flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform group-hover:scale-110 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Play
                className="w-8 h-8 sm:w-10 sm:h-10 fill-navy-dark text-navy-dark ml-1"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Fallback link inside <noscript> */}
          <noscript>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-[#073070] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#0c439c] transition-colors z-20"
            >
              Watch on YouTube
            </a>
          </noscript>
        </>
      )}
    </div>
  );
}

export default YouTubeFacade;
