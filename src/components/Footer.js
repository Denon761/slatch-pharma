import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function Footer() {
  const topCategories = categories.slice(0, 6);

  return (
    <footer className="mt-16 bg-brand-900 text-brand-100">
      <div className="container-page grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/1354.jpeg"
              alt="Slatch Pharmaceuticals"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-contain bg-white"
            />
            <span className="text-lg font-extrabold tracking-wide text-white">SLATCH PHARMACEUTICALS</span>
          </div>
          <p className="mt-4 text-sm text-brand-200">
            Slatch Pharmaceuticals® is a herbal medicines marketing and distribution company
            dedicated to making established herbal medicines more accessible to customers
            across Pakistan through professional marketing, reliable distribution, clear
            product information, and a transparent retail experience.
          </p>
          <p className="mt-4 text-sm">
            <span className="text-brand-300">Call us: </span>
            <a href={PHONE_TEL} className="font-semibold text-white hover:underline">{PHONE_DISPLAY}</a>
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
