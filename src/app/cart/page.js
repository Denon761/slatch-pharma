"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/data";

export default function CartPage() {
  const { items, hydrated, updateQty, removeItem, subtotal } = useCart();

  if (hydrated && items.length === 0) {
    return (
      <div className="container-page py-16 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-brand-300" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="mt-2 text-gray-500">Browse our medicines and add something to your cart.</p>
        <Link
          href="/medicines"
          className="mt-6 inline-flex items-center rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800 transition"
        >
          Browse Medicines
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 divide-y divide-gray-100 border-y border-gray-100">
          {items.map((item) => (
            <div key={item.slug} className="flex items-center gap-4 py-5">
              <Link
                href={`/product/${item.slug}`}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-brand-50 border border-brand-100 text-[10px] font-bold text-brand-700 text-center px-1"
              >
                {item.qd}
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/product/${item.slug}`} className="font-semibold text-gray-900 hover:text-brand-700 line-clamp-1">
                  {item.name}
                </Link>
                <p className="text-xs text-gray-500">{item.size}</p>
                <p className="mt-1 font-semibold text-brand-800">{formatPKR(item.price)}</p>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-gray-200">
                <button
                  onClick={() => updateQty(item.slug, item.qty - 1)}
                  className="p-2 text-gray-600 hover:text-brand-700"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.slug, item.qty + 1)}
                  className="p-2 text-gray-600 hover:text-brand-700"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <p className="w-24 text-right font-semibold text-gray-900">
                {formatPKR(item.price * item.qty)}
              </p>

              <button
                onClick={() => removeItem(item.slug)}
                className="p-2 text-gray-400 hover:text-red-600"
                aria-label="Remove item"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-100 bg-brand-50 p-6 h-fit">
          <h2 className="font-semibold text-gray-900">Order Summary</h2>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>{formatPKR(subtotal)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="mt-4 border-t border-brand-200 pt-4 flex items-center justify-between font-bold text-gray-900">
            <span>Total</span>
            <span>{formatPKR(subtotal)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-lg bg-brand-700 px-5 py-3 text-center font-semibold text-white hover:bg-brand-800 transition"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/medicines"
            className="mt-3 block w-full rounded-lg border border-gray-200 px-5 py-3 text-center font-semibold text-gray-700 hover:border-brand-300 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
