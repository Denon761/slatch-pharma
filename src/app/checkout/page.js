"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/data";

const SHIPPING_FEE = 200;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, hydrated, subtotal, clearCart } = useCart();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  if (hydrated && items.length === 0) {
    return (
      <div className="container-page py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Nothing to check out</h1>
        <p className="mt-2 text-gray-500">Your cart is empty.</p>
        <Link
          href="/medicines"
          className="mt-6 inline-flex items-center rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800 transition"
        >
          Browse Medicines
        </Link>
      </div>
    );
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const orderId = `SP-${Date.now().toString().slice(-8)}`;
    clearCart();
    router.push(`/checkout/success?order=${orderId}`);
  }

  const total = subtotal + (items.length > 0 ? SHIPPING_FEE : 0);

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900">Shipping Details</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">City</label>
                <input
                  required
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Delivery Address</label>
                <textarea
                  required
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Order Notes (optional)</label>
                <textarea
                  name="notes"
                  rows={2}
                  value={form.notes}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900">Payment Method</h2>
            <label className="mt-4 flex items-center gap-3 rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm font-medium text-gray-800">
              <input type="radio" name="payment" defaultChecked readOnly />
              Cash on Delivery
            </label>
            <p className="mt-2 text-xs text-gray-400">
              Pay in cash when your order is delivered to your doorstep.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-brand-50 p-6 h-fit">
          <h2 className="font-semibold text-gray-900">Order Summary</h2>
          <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.slug} className="flex items-center justify-between text-sm text-gray-600">
                <span className="line-clamp-1">
                  {item.name} &times; {item.qty}
                </span>
                <span className="shrink-0">{formatPKR(item.price * item.qty)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-brand-200 pt-4 flex items-center justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>{formatPKR(subtotal)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>{formatPKR(SHIPPING_FEE)}</span>
          </div>
          <div className="mt-4 border-t border-brand-200 pt-4 flex items-center justify-between font-bold text-gray-900">
            <span>Total</span>
            <span>{formatPKR(total)}</span>
          </div>
          <button
            type="submit"
            className="mt-6 block w-full rounded-lg bg-brand-700 px-5 py-3 text-center font-semibold text-white hover:bg-brand-800 transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
