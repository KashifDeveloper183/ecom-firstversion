"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import OfferSlider from "./OfferSlider";
import { products, banners } from "../data/products";

export default function ProductList() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [onlySale, setOnlySale] = useState(false);
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");

  useEffect(() => {
    function onSearch(e: Event) {
      const detail = (e as CustomEvent).detail;
      setQuery(typeof detail === "string" ? detail : "");
    }

    if (typeof window !== "undefined") {
      window.addEventListener("productSearch", onSearch as EventListener);
      return () => window.removeEventListener("productSearch", onSearch as EventListener);
    }
  }, []);

  const priceBounds = useMemo(() => {
    const vals = products.map((p) => p.priceValuePKR || 0);
    return {
      min: Math.min(...vals),
      max: Math.max(...vals),
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    // parse min/max inputs
    const min = minPriceInput ? Number(minPriceInput) : undefined;
    const max = maxPriceInput ? Number(maxPriceInput) : undefined;

    let out = products.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q) ||
        (p.discount || "").toLowerCase().includes(q);

      if (!matchesQuery) return false;
      if (onlySale && !(p.discount && p.discount.length > 0)) return false;

      const priceVal = p.priceValuePKR || 0;
      if (min !== undefined && priceVal < min) return false;
      if (max !== undefined && priceVal > max) return false;

      return true;
    });

    // sorting
    if (sort === "price-asc") out = out.sort((a, b) => (a.priceValuePKR || 0) - (b.priceValuePKR || 0));
    else if (sort === "price-desc") out = out.sort((a, b) => (b.priceValuePKR || 0) - (a.priceValuePKR || 0));
    else if (sort === "discount-desc") out = out.sort((a, b) => {
      const da = parseFloat((a.discount || "0").replace("%", "")) || 0;
      const db = parseFloat((b.discount || "0").replace("%", "")) || 0;
      return db - da;
    });

    return out;
  }, [query, onlySale, minPriceInput, maxPriceInput, sort]);

  return (
    <section id="products" className="pt-30 mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <OfferSlider banners={banners} />
      <h2 className="mb-6 mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Products</h2>

      {query && (
        <div className="mb-4 text-sm text-zinc-700">Showing results for "{query}" — {filtered.length} item(s)</div>
      )}

      {/* Filter bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <label className="text-sm text-zinc-700">Sort:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded border px-2 py-1 text-sm">
            <option value="default">Default</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="discount-desc">Top Discounts</option>
          </select>

          <label className="flex items-center gap-2 ml-4 text-sm">
            <input type="checkbox" checked={onlySale} onChange={(e) => setOnlySale(e.target.checked)} />
            <span className="text-sm">On Sale</span>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-zinc-700">Price:</label>
          <input type="number" placeholder={`${priceBounds.min}`} value={minPriceInput} onChange={(e) => setMinPriceInput(e.target.value)} className="w-24 rounded border px-2 py-1 text-sm" />
          <span className="text-sm">—</span>
          <input type="number" placeholder={`${priceBounds.max}`} value={maxPriceInput} onChange={(e) => setMaxPriceInput(e.target.value)} className="w-24 rounded border px-2 py-1 text-sm" />

          <button onClick={() => { setMinPriceInput(""); setMaxPriceInput(""); setOnlySale(false); setSort("default"); }} className="ml-3 rounded bg-zinc-200 px-3 py-1 text-sm hover:bg-zinc-300">Reset</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.length === 0 ? (
          <div className="col-span-full py-12 text-center text-zinc-600">No products match your search.</div>
        ) : (
          filtered.map((p) => (
            <div key={p.id} className="w-full transform transition-all hover:scale-105 hover:shadow-lg">
              <ProductCard title={p.title} price={p.price} originalPrice={p.originalPrice} discount={p.discount} description={p.description} image={p.image} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
