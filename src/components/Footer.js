import Link from "next/link";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { categories } from "@/lib/data";

export default function Footer() {
  const topCategories = categories.slice(0, 6);

  return (
    <footer className="mt-16 bg-brand-900 text-brand-100">
      <div className="container-page grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-extrabold tracking-wide text-white">SLATCH PHARMACEUTICALS</span>
          </div>
          <p className="mt-4 text-sm text-brand-200">
            Pakistan&apos;s trusted herbal medicine brand, serving families with time-tested
            herbal formulations for more than 40 years.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Health Conditions</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {topCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="text-brand-200 hover:text-white transition">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-brand-200 hover:text-white transition">About Us</Link></li>
            <li><Link href="/medicines" className="text-brand-200 hover:text-white transition">All Medicines</Link></li>
            <li><Link href="/faq" className="text-brand-200 hover:text-white transition">FAQ</Link></li>
            <li><Link href="/contact" className="text-brand-200 hover:text-white transition">Contact</Link></li>
            <li><Link href="/policies/privacy-policy" className="text-brand-200 hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/policies/terms-and-conditions" className="text-brand-200 hover:text-white transition">Terms &amp; Conditions</Link></li>
            <li><Link href="/policies/shipping-returns" className="text-brand-200 hover:text-white transition">Shipping &amp; Returns</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>123 Herbal Avenue, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>support@slatchpharma.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-page py-4 text-xs text-brand-300 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Slatch Pharmaceuticals. All rights reserved.</span>
          <span>Herbal medicines are not a substitute for professional medical advice.</span>
        </div>
      </div>
    </footer>
  );
}
