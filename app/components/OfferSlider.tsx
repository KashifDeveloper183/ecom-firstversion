"use client";

import { useEffect, useState } from "react";

type Banner = {
  id: number;
  image: string;
  alt?: string;
};

export default function OfferSlider({ banners }: { banners: Banner[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!banners || banners.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % banners.length), 4500);
    return () => clearInterval(t);
  }, [banners]);

  if (!banners || banners.length === 0) return null;

  return (
    <div className="w-full mb-6">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          // translate needs to include the 20px gap per slide: -index * 100% - index * 20px
          style={{ transform: `translateX(calc(-${index * 100}% - ${index * 20}px))` }}
        >
          {banners.map((b) => (
            <div
              key={b.id}
              className="flex-shrink-0"
              // make each slide slightly narrower and add a right margin of 20px
              style={{ minWidth: "calc(100% - 20px)", marginRight: 20 }}
            >
              <img
                src={b.image}
                alt={b.alt || "offer banner"}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <button
          aria-label="Previous banner"
          onClick={() => setIndex((i) => (i - 1 + banners.length) % banners.length)}
          className="hidden sm:flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-zinc-800 shadow-md hover:scale-105"
        >
          ‹
        </button>

        <button
          aria-label="Next banner"
          onClick={() => setIndex((i) => (i + 1) % banners.length)}
          className="hidden sm:flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-zinc-800 shadow-md hover:scale-105"
        >
          ›
        </button>

        <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-2">
          {banners.map((b, i) => (
            <button
              key={b.id}
              aria-label={`Go to banner ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full ${i === index ? "bg-white" : "bg-white/50"} transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
