import { Leaf } from "lucide-react";

// Stand-in "packaging" visual used everywhere a real product photo would go.
export default function ProductImage({ name, qd, form, size = "md" }) {
  const dims = size === "lg" ? "h-64" : size === "sm" ? "h-32" : "h-44";

  return (
    <div
      className={`relative ${dims} w-full rounded-lg overflow-hidden border border-brand-100 bg-gradient-to-br from-brand-50 to-cream flex flex-col items-center justify-center px-3 text-center`}
    >
      <Leaf className="absolute top-2 right-2 h-5 w-5 text-brand-200" />
      <span className="rounded-full bg-brand-700 text-white text-[11px] font-semibold px-2.5 py-0.5 tracking-wide">
        {qd}
      </span>
      <p className="mt-2 text-sm font-semibold text-brand-900 leading-snug line-clamp-3">
        {name}
      </p>
      {form && <p className="mt-1 text-xs text-brand-600">{form}</p>}
    </div>
  );
}
