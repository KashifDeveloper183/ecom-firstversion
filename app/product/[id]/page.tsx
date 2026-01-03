import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/" className="text-sm text-zinc-600 hover:underline">← Back to products</Link>
      <div className="mt-6 text-zinc-700">Product details are not available.</div>
    </div>
  );
}
