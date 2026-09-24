"use client";

import { useState } from "react";
import Image from "next/image";
import ProductImage from "./ProductImage";

export default function ProductGallery({ name, qd, form, images = [] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ProductImage name={name} qd={qd} form={form} size="lg" image={images[active]} />
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1} of ${name}`}
              aria-pressed={i === active}
              className={`relative h-20 w-full rounded-lg overflow-hidden border bg-white transition ${
                i === active
                  ? "border-brand-600 ring-2 ring-brand-200"
                  : "border-brand-100 hover:border-brand-300"
              }`}
            >
              <Image src={src} alt={name} fill className="object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
