"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  // Phone number provided by user. If you want international format, remove leading 0 and prepend country code.
  // Example international (Pakistan): 923700742042
  const phone = "03700742042";
  const message = encodeURIComponent("Hi, I'm interested in this product. Do you have more details?");
  const href = `https://wa.me/${phone}?text=${message}`;

  const [shift, setShift] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setShift((s) => !s), 800);
    return () => clearInterval(t);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order Now on WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-3"
    >
      {/* Animated text badge (clickable as part of the anchor). Hidden on very small screens to avoid overlap. */}
      <span
        className={`hidden sm:inline-block rounded-full bg-emerald-600 px-3 py-1 text-sm font-medium text-white shadow-md transform transition-transform duration-300 ${
          shift ? "translate-x-0" : "-translate-x-1"
        } animate-pulse`}
      >
        Order Now on WhatsApp
      </span>

      <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:scale-105">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .07 5.3.07 11.93c0 2.1.55 4.17 1.6 6.01L0 24l6.3-1.63a11.9 11.9 0 005.7 1.49c6.63 0 11.93-5.3 11.93-11.93 0-3.19-1.24-6.19-3.41-8.95z" fill="#fff"/>
          <path d="M17.2 13.5c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.95 1.18c-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.17 0-.3-.05-.45-.05-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.66-.5l-.56.01c-.17 0-.45.07-.69.33-.24.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.82 2.78 4.41 3.9 2.6 1.12 2.6.75 3.08.7.48-.05 1.56-.63 1.78-1.24.22-.6.22-1.11.15-1.23-.07-.12-.27-.17-.57-.32z" fill="#00A884"/>
        </svg>
      </span>
    </a>
  );
}
