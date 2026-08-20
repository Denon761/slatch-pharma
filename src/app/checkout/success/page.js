import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default async function CheckoutSuccessPage({ searchParams }) {
  const { order } = await searchParams;

  return (
    <div className="container-page py-20 text-center">
      <CheckCircle2 className="mx-auto h-14 w-14 text-brand-600" />
      <h1 className="mt-6 text-3xl font-bold text-gray-900">Order Placed Successfully</h1>
      <p className="mt-2 text-gray-500">
        Thank you for your order. We will contact you shortly to confirm delivery.
      </p>
      {order && (
        <p className="mt-4 inline-block rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-800">
          Order ID: {order}
        </p>
      )}
      <div className="mt-8">
        <Link
          href="/medicines"
          className="inline-flex items-center rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
