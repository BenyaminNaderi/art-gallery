"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArtworkImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // بستن با دکمه Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* عکس اصلی صفحه */}
      <div
        className="group relative cursor-zoom-in overflow-hidden bg-white/5"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="aspect-[4/5] w-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
        />

        {/* راهنمای کوچک */}
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-white/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          CLICK TO EXPAND
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={() => setIsOpen(false)}
        >
          {/* دکمه بستن */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 z-50 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-white hover:text-black"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>

          {/* عکس بزرگ */}
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()} // کلیک روی عکس، لایت‌باکس رو نبنده
          />
        </div>
      )}
    </>
  );
}