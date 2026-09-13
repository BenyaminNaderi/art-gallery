"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Artwork } from "@/lib/artworks";

export function VideoCard({
  project,
  isHovered,
  onHoverChange,
}: {
  project: Artwork;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // شدت تیلت (هرچقدر عدد بزرگ‌تر باشه، کج شدن بیشتر میشه)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    onHoverChange(false);
  };

  return (
    <Link
      ref={cardRef}
      href={`/artworks/${project.slug}`}
      className={cn(
        "group relative min-h-[520px] min-w-[180px] flex-1 overflow-hidden rounded-[2rem] transition-all duration-700 ease-out md:h-[600px]",
        isHovered
          ? "md:flex-[2] z-10 shadow-2xl shadow-white/10"
          : "md:flex-[0.8]",
      )}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.15s ease-out, flex 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* تصویر اصلی */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-all duration-700",
          isHovered
            ? "scale-110 brightness-100 grayscale-0"
            : "scale-100 brightness-75 grayscale",
        )}
      />

      {/* لایه تاریک گرادینت */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500",
          isHovered ? "opacity-90" : "opacity-70",
        )}
      />

      {/* محتوای پایین */}
      <div className="absolute inset-x-0 bottom-0 p-6 pt-24">
  <div className="flex items-end justify-between gap-4">
    <div
      className={cn(
        "transition-all duration-500",
        isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90",
      )}
    >
      <p className="font-mono text-[10px] tracking-[0.22em] text-white/60">
        {project.category} / {project.year}
      </p>

      <h3 className="mt-2 font-mono text-sm tracking-[0.22em] text-white">
        {project.title}
      </h3>

      <div className="mt-3 flex items-center gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 text-white/80"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.42905 1.23626L4.70181 0L6.0016 1.24977L4.70857 2.48468L3.42905 1.23626ZM8.8114 5.36883C8.86187 6.25476 8.57769 7.12733 8.01517 7.81363C7.65661 8.1977 7.20838 8.48684 6.71064 8.65515C6.12869 8.84667 5.51847 8.93809 4.90594 8.92551H3.9806C3.3289 8.93572 2.68232 8.80907 2.08262 8.55376C1.47414 8.29783 0.953088 7.8707 0.582757 7.32426C0.188123 6.70396 -0.0143483 5.98085 0.000791012 5.24581C0.000791012 5.1478 0.000791006 5.05114 0.0075502 4.95246C0.0966702 3.89049 0.392889 2.85625 0.879486 1.90812L2.70447 2.71449C2.32313 3.44132 2.0869 4.23542 2.00895 5.0525C2.00895 5.12009 2.00219 5.18768 2.00219 5.25527C1.98612 5.61891 2.08266 5.97865 2.27864 6.28537C2.47753 6.57482 2.77297 6.784 3.11205 6.87545C3.26269 6.92403 3.41779 6.95754 3.57505 6.97549C3.7096 6.99189 3.84506 6.99979 3.9806 6.99914H4.90526C5.4559 7.06242 6.01032 6.91779 6.45988 6.59359C6.72984 6.24874 6.85537 5.81254 6.81 5.37694V1.69994H8.80937V5.36883H8.8114ZM17.8647 10.6748L16.6649 9.50816L17.8451 8.33206L19.0698 9.51018L17.8647 10.6795V10.6748ZM13.1055 11.1878C13.5131 11.1708 13.9191 11.2473 14.2926 11.4113C14.6661 11.5753 14.9971 11.8225 15.2603 12.1341C15.765 12.7363 16.0298 13.5036 16.0039 14.2889V14.8973H16.304V14.8905H16.9873C17.2543 14.9111 17.5222 14.863 17.7653 14.7506C17.8404 14.7078 17.9021 14.6449 17.9433 14.5689C17.9845 14.493 18.0036 14.407 17.9985 14.3207V14.2058C18.0053 13.8002 18.0269 12.466 17.9985 12.3477L19.9999 11.7475V14.37C20.0049 14.8894 19.8365 15.3956 19.5213 15.8084C19.2177 16.1647 18.8329 16.4428 18.3993 16.6192C17.9657 16.7957 17.496 16.8653 17.0299 16.8223H15.9836C15.9545 17.3909 15.7639 17.9395 15.4343 18.4038C15.1046 18.868 14.6494 19.2287 14.1221 19.4435C13.6243 19.6614 13.0989 19.81 12.5607 19.8849C12.0568 19.9618 11.5476 19.9991 11.0379 19.9964V18.0633C11.8256 18.1086 12.613 17.9676 13.336 17.6516C13.509 17.5875 13.66 17.4751 13.7711 17.3277C13.8821 17.1804 13.9486 17.0042 13.9626 16.8203H13.1042C12.4408 16.8398 11.7893 16.6413 11.2494 16.2552C10.9468 16.028 10.7049 15.7297 10.545 15.3868C10.3852 15.0438 10.3123 14.6668 10.3329 14.2889C10.3087 13.5527 10.5219 12.8283 10.9412 12.2226C11.1851 11.8815 11.5113 11.6076 11.8894 11.4264C12.2676 11.2452 12.6855 11.1627 13.1042 11.1865L13.1055 11.1878ZM13.9923 14.8973V14.2889C14.0084 13.984 13.9246 13.6822 13.7537 13.4292C13.6789 13.3284 13.5806 13.2474 13.4674 13.1931C13.3543 13.1388 13.2296 13.1129 13.1042 13.1176C12.9773 13.1132 12.8513 13.1392 12.7365 13.1934C12.6218 13.2476 12.5216 13.3284 12.4445 13.4292C12.2858 13.6454 12.2059 13.9095 12.218 14.1774C12.2177 14.2146 12.2193 14.2519 12.2228 14.2889C12.2255 14.3868 12.2542 14.4823 12.306 14.5654C12.3578 14.6486 12.4308 14.7164 12.5175 14.7621C12.6976 14.8583 12.9001 14.905 13.1042 14.8973H13.9923ZM14.164 9.51018L15.3651 10.6795L16.5716 9.51289L15.3442 8.33206L14.164 9.51018ZM3.01066 17.655H3.06068C3.62292 17.6919 4.17897 17.5198 4.62205 17.1717C4.66193 17.192 4.7302 17.2299 4.82483 17.2853L4.94784 17.3529L5.08303 17.4205C5.28749 17.5326 5.49828 17.6328 5.71434 17.7206C6.22701 17.9508 6.78077 18.0753 7.34263 18.0869C7.60895 18.0919 7.87364 18.0444 8.1216 17.9471C8.36956 17.8498 8.59592 17.7046 8.78774 17.5198C9.05391 17.2339 9.25785 16.8958 9.38664 16.527C9.51544 16.1582 9.56629 15.7666 9.53598 15.3772C9.53003 14.7017 9.33675 14.0412 8.97768 13.469C8.75031 13.1045 8.43033 12.8067 8.05035 12.6062C7.67038 12.4056 7.24401 12.3094 6.81473 12.3274C6.4196 12.3194 6.02783 12.4015 5.66921 12.5676C5.31058 12.7337 4.99453 12.9793 4.74507 13.2859C4.55012 13.5173 4.38545 13.7726 4.25503 14.0456C4.20162 14.1486 4.15489 14.255 4.11511 14.364C4.09488 14.4058 4.07815 14.4492 4.06509 14.4937C4.05203 14.5266 4.03986 14.56 4.02859 14.5938C3.94223 14.8988 3.8275 15.195 3.6859 15.4786C3.59107 15.5667 3.47875 15.6339 3.35625 15.6758C3.23375 15.7178 3.1038 15.7334 2.97484 15.7219C2.82224 15.7311 2.67124 15.6864 2.54833 15.5955C2.43761 15.4557 2.3866 15.2779 2.40639 15.1007V9.9982L0.406343 9.16479V15.1C0.400037 15.5032 0.48145 15.9029 0.644942 16.2714C0.760004 16.5299 0.924132 16.7636 1.12822 16.9595C1.33617 17.1579 1.5791 17.316 1.8447 17.4259C2.19632 17.5708 2.57225 17.6476 2.95253 17.6523H3.01269L3.01066 17.655ZM7.59677 15.9652C7.66618 15.7775 7.69116 15.5762 7.66977 15.3772C7.6566 15.0948 7.56096 14.8224 7.39467 14.5938C7.33237 14.4941 7.24665 14.4113 7.14498 14.3524C7.0433 14.2935 6.92877 14.2603 6.81135 14.2558C6.65156 14.2638 6.4972 14.3165 6.36579 14.4077C6.23438 14.499 6.13116 14.6253 6.06784 14.7722C5.98897 14.9105 5.92529 15.0569 5.87791 15.2089C5.85403 15.2751 5.8315 15.3427 5.81032 15.4116L5.78531 15.5002L5.7603 15.5766C6.03086 15.7921 6.33785 15.9573 6.66671 16.0646C6.89753 16.1548 7.14116 16.208 7.38859 16.2221C7.46159 16.2221 7.53188 16.1389 7.59677 15.9686V15.9652Z"
            fill="currentColor"
          />
        </svg>

        <p className="font-sans text-sm text-white/90">
          {project.price}
        </p>
      </div>
    </div>

    {/* دکمه فلش سمت راست */}
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300",
        isHovered ? "scale-110 bg-white text-black" : "bg-transparent",
      )}
    >
      <ArrowUpRight className="size-4" />
    </span>
  </div>
</div>

      {/* افکت نور خیلی ملایم روی هاور */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          background: `radial-gradient(600px circle at ${tilt.y * 20 + 50}% ${tilt.x * -20 + 50}%, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
    </Link>
  );
}