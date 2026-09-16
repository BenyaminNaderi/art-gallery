import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <div className="max-w-md text-center">
        <p className="mb-6 font-mono text-[10px] tracking-[0.35em] text-white/45">
          LUNA SWAN / ERROR
        </p>

        <h1 className="mb-4 font-mono text-5xl tracking-[0.15em] md:text-7xl">
          404
        </h1>

        <p className="mb-10 font-mono text-sm tracking-[0.15em] text-white/60">
          PAGE NOT FOUND
        </p>

        <p className="mb-12 text-sm leading-relaxed text-white/50">
          صفحه‌ای که دنبالش هستی وجود نداره یا جابه‌جا شده.
        </p>

        <Link
          href="/"
          className="inline-block border border-white/30 px-8 py-3 font-mono text-[10px] tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          BACK TO GALLERY
        </Link>
      </div>
    </main>
  );
}