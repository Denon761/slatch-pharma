"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/data";

export default function CartDrawer() {
  const { items, drawerOpen, closeCart, updateQty, removeItem, subtotal, count } = useCart();

  useEffect(() => {
    if (!drawerOpen) return;
    function onKeyDown(e) {
      if (e.key === "Escape") closeCart();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [drawerOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${drawerOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!drawerOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="text-lg font-bold text-gray-900">Your Cart ({count})</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1.5 text-gray-400 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-brand-300" />
            <p className="mt-3 text-sm text-gray-500">Your cart is empty.</p>
            <Link
              href="/medicines"
              onClick={closeCart}
              className="mt-5 inline-flex items-center rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 transition"
            >
              Browse Medicines
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto divide-y divide-gray-100 px-5">
              {items.map((item) => (
                <div key={item.slug} className="flex items-center gap-3 py-4">
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-50 border border-brand-100 text-[9px] font-bold text-brand-700 text-center px-1"
                  >
                    {item.qd}
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="text-sm font-semibold text-gray-900 hover:text-brand-700 line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-0.5 text-xs text-gray-500">{formatPKR(item.price)}</p>
                    <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-gray-200 w-fit">
                      <button
                        onClick={() => updateQty(item.slug, item.qty - 1)}
                        className="p-1 text-gray-600 hover:text-brand-700"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-5 text-center text-xs font-medium">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.slug, item.qty + 1)}
                        className="p-1 text-gray-600 hover:text-brand-700"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.slug)}
                    className="shrink-0 p-1.5 text-gray-400 hover:text-red-600"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 px-5 py-4">
              <div className="flex items-center justify-between text-sm font-semibold text-gray-900">
                <span>Subtotal</span>
                <span>{formatPKR(subtotal)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="mt-4 block w-full rounded-lg bg-brand-700 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-800 transition"
              >
                Go to Checkout
              </Link>
              <Link
                href="/cart"
                onClick={closeCart}
                className="mt-2 block w-full rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700 hover:border-brand-300 transition"
              >
                View Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
