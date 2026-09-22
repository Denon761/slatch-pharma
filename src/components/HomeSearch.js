"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Search } from "lucide-react";

export default function HomeSearch() {
  const router = useRouter();
  const [disease, setDisease] = useState("");

  function submit(e, value) {
    e.preventDefault();
    if (!value.trim()) return;
    router.push(`/search?q=${encodeURIComponent(value.trim())}`);
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm max-w-xl overflow-hidden">
      <form onSubmit={(e) => submit(e, disease)} className="p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-white shrink-0">
            <Leaf className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-gray-900">Search by Disease</p>
            <p className="text-xs text-gray-500">Enter disease or health condition</p>
          </div>
        </div>
        <div className="relative mt-4">
          <input
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            type="text"
            placeholder="Enter disease or health condition"
            className="w-full rounded-lg border border-gray-200 py-2.5 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
          <button type="submit" aria-label="Search by disease" className="absolute right-1 top-1 bottom-1 px-2 text-brand-700">
            <Search className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Examples: Piles, Hair Fall, Joint Pain, Diabetes, Acidity, Constipation
        </p>
      </form>
    </div>
  );
}
