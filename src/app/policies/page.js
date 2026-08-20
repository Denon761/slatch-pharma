import Link from "next/link";
import { ChevronRight } from "lucide-react";

const POLICIES = [
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
  { href: "/policies/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/policies/shipping-returns", label: "Shipping & Returns" },
];

export const metadata = {
  title: "Policies | Slatch Pharmaceuticals",
};

export default function PoliciesPage() {
  return (
    <div className="container-page py-14 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900">Policies</h1>
      <div className="mt-8 divide-y divide-gray-100 border-y border-gray-100">
        {POLICIES.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="flex items-center justify-between py-4 font-medium text-gray-800 hover:text-brand-700 transition"
          >
            {p.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </div>
  );
}
