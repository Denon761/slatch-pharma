"use client";

import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function BuyNowButton({ product, qty = 1, className = "", compact = false }) {
  const router = useRouter();
  const { buyNow } = useCart();

  function handleClick() {
    buyNow(product, qty);
    router.push("/checkout");
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-700 font-medium text-brand-700 transition hover:bg-brand-700 hover:text-white ${
        compact ? "px-3 py-2 text-sm" : "px-5 py-3"
      } ${className}`}
    >
      <Zap className="h-4 w-4" /> Buy Now
    </button>
  );
}
