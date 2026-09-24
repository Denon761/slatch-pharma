"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartToast() {
  const { notification, dismissNotification, openCart } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!notification) return;
    setVisible(true);
    const showTimer = setTimeout(() => setVisible(false), 4000);
    const removeTimer = setTimeout(() => dismissNotification(), 4300);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(removeTimer);
    };
  }, [notification, dismissNotification]);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-60 w-[calc(100%-2.5rem)] max-w-sm rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      role="status"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900">Added to cart</p>
          <p className="mt-0.5 text-sm text-gray-600 line-clamp-1">
            {notification.name} &times; {notification.qty}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={() => {
                setVisible(false);
                openCart();
              }}
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              View Cart
            </button>
            <Link
              href="/checkout"
              onClick={() => setVisible(false)}
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss notification"
          className="shrink-0 p-1 text-gray-400 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
