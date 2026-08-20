"use client";

import Link from "next/link";

export default function MedicinesFilter({ categories, active }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <Link
        href="/medicines"
        className={`rounded-full px-4 py-1.5 text-sm font-medium border transition ${
          !active
            ? "bg-brand-700 text-white border-brand-700"
            : "border-gray-200 text-gray-600 hover:border-brand-300"
        }`}
      >
        All
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/medicines?category=${c.slug}`}
          className={`rounded-full px-4 py-1.5 text-sm font-medium border transition ${
            active === c.slug
              ? "bg-brand-700 text-white border-brand-700"
              : "border-gray-200 text-gray-600 hover:border-brand-300"
          }`}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
