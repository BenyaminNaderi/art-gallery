"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <div className="max-w-md text-center">
        <p className="mb-6 font-mono text-[10px] tracking-[0.35em] text-white/45">
          LUNA SWAN / ERROR
        </p>

        <h1 className="mb-4 font-mono text-5xl tracking-[0.15em] md:text-7xl">
          ERROR
        </h1>

        <p className="mb-10 font-mono text-sm tracking-[0.15em] text-white/60">
          SOMETHING WENT WRONG
        </p>

        <p className="mb-12 text-sm leading-relaxed text-white/50">
          یه مشکلی پیش اومده. می‌تونی دوباره تلاش کنی یا به گالری برگردی.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="border border-white/30 px-8 py-3 font-mono text-[10px] tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            TRY AGAIN
          </button>

          <Link
            href="/"
            className="border border-white/30 px-8 py-3 font-mono text-[10px] tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            BACK TO GALLERY
          </Link>
        </div>
      </div>
    </main>
  );
}