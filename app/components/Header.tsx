"use client";

import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQ(value);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("productSearch", { detail: value }));
    }
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Topbar: small strip with socials and quick links */}
      <div className="w-full bg-zinc-900 text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 py-1 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Free shipping over $50</span>
            <a href="tel:03700742042" className="hover:underline">Call: 03700742042</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline hover:underline">Help</a>
            <a href="#" className="hidden sm:inline hover:underline">Track Order</a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-1 rounded hover:bg-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H19l-.5 3h-2.3v7A10 10 0 0022 12z"/></svg>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-1 rounded hover:bg-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-1 rounded hover:bg-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.2.9C18.6 5 17.7 4.5 16.7 4.5c-1.6 0-2.9 1.3-2.9 2.9 0 .2 0 .4.1.6C10 7.7 7 6 5.2 3.6c-.3.6-.5 1.3-.5 2 0 1.4.7 2.6 1.8 3.3-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.5 3 3.9-.3.1-.7.1-1 .1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3 2.3-1.1.9-2.5 1.4-4 1.4H6c1.5.9 3.3 1.4 5.2 1.4 6.2 0 9.6-5.1 9.6-9.6v-.4C21 7.2 21.6 6.6 22 5.9z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header: branding + search */}
      <div className="backdrop-blur-lg bg-[#ff3b6b] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
            <span className="font-bold text-lg text-white drop-shadow-lg">My Shop</span>
          </div>

          <div className="w-full sm:flex-1">
            <div className="mx-auto max-w-3xl">
              <label className="relative block">
                <input
                  type="search"
                  aria-label="Search products"
                  placeholder="Search products, brands and more"
                  value={q}
                  onChange={handleChange}
                  className="w-full rounded-full border border-white/40 bg-white/50 px-4 py-3 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-500 focus:outline-none shadow-md"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-600">Search</span>
              </label>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
