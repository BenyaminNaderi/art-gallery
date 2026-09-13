"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { VideoCard } from "./video-card";
import { CustomCursor } from "./custom-cursor";
import { artworks } from "@/lib/artworks";

const categories = [
  "ALL",
  ...new Set(artworks.map((artwork) => artwork.category)),
];

export function WorksGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [query, setQuery] = useState("");
  const filteredArtworks = useMemo(
    () =>
      artworks.filter((artwork) => {
        const search = query.trim().toLowerCase();
        return (
          (activeCategory === "ALL" || artwork.category === activeCategory) &&
          (!search ||
            `${artwork.title} ${artwork.category}`
              .toLowerCase()
              .includes(search))
        );
      }),
    [activeCategory, query],
  );
  return (
    <section id="artworks" aria-labelledby="gallery-heading">
      <CustomCursor isActive={hoveredId !== null} />
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.35em] text-white/45">
              LUNA SWAN / ART ARCHIVE
            </p>
            <h1
              id="gallery-heading"
              className="max-w-xl font-mono text-3xl leading-tight tracking-[0.12em] text-white md:text-5xl"
            >
              ORIGINAL WORKS
              <br />
              &amp; LIMITED EDITIONS
            </h1>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <label className="flex items-center gap-3 border-b border-white/25 pb-2 text-white/55 focus-within:border-white">
              <Search aria-hidden="true" className="size-4" />
              <span className="sr-only">Search artworks</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="SEARCH"
                className="w-36 bg-transparent font-mono text-[10px] tracking-[0.2em] text-white outline-none placeholder:text-white/35"
              />
            </label>
            <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/45">
              <SlidersHorizontal aria-hidden="true" className="size-3" />
              {filteredArtworks.length.toString().padStart(2, "0")} WORKS
            </span>
          </div>
        </div>
        <div
          className="mb-10 flex gap-2 overflow-x-auto pb-2"
          aria-label="Filter artworks by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 border px-4 py-2 font-mono text-[10px] tracking-[0.2em] transition-colors ${activeCategory === category ? "border-white bg-white text-black" : "border-white/20 text-white/55 hover:border-white/60 hover:text-white"}`}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredArtworks.length > 0 ? (
          <div
            className={
              filteredArtworks.length > 5
                ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[600px]"
                : "flex min-h-[600px] flex-col gap-4 md:flex-row md:items-stretch"
            }
          >
            {filteredArtworks.map((artwork) => (
              <VideoCard
                key={artwork.id}
                project={artwork}
                isHovered={hoveredId === artwork.id}
                onHoverChange={(hovered) =>
                  setHoveredId(hovered ? artwork.id : null)
                }
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[360px] items-center justify-center border border-dashed border-white/20 text-center">
            <p className="font-mono text-xs tracking-[0.2em] text-white/50">
              NO ARTWORKS MATCH YOUR SEARCH
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
