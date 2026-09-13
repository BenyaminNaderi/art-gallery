import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WorksGallery } from "@/components/works-gallery";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 font-mono text-[10px] tracking-[0.2em]">
          <Link href="#top" className="font-semibold tracking-[0.28em]">
            LUNA SWAN®
          </Link>
          <Link
            href="#artworks"
            className="hidden text-white/65 hover:text-white md:block"
          >
            GALLERY
          </Link>
          <a
            href="https://t.me/lunaswanw"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/65 hover:text-white"
          >
            TELEGRAM <ArrowUpRight className="size-3" />
          </a>
        </nav>
      </header>
      <main id="top" className="pb-16 pt-32">
        <WorksGallery />
      </main>
      <footer className="mx-6 border-t border-white/15 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>LUNA SWAN / ART GALLERY</span>
          <a
            href="https://t.me/lunaswanw"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            FOLLOW THE ARCHIVE ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
