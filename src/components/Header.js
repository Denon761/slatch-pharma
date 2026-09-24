"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Leaf, Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/medicines", label: "Medicines" },
  { href: "/health-conditions", label: "Health Conditions" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="bg-brand-800 text-white text-xs">
        <div className="container-page flex flex-wrap items-center justify-center sm:justify-between gap-1 py-1.5">
          <span>Pakistan&apos;s Trusted Herbal Medicine Website</span>
          <span className="hidden sm:inline">40+ Years of Herbal Service</span>
        </div>
      </div>

      <div className="border-b border-gray-100">
        <div className="container-page flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
              <Leaf className="h-7 w-7" />
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold tracking-wide text-brand-800 text-2xl">
                SLATCH
              </span>
              <span className="block text-xs font-semibold tracking-wider text-gray-500 -mt-1">
                PHARMACEUTICALS<sup>&reg;</sup>
              </span>
              <span className="block text-xs text-brand-600 -mt-0.5">Herbal Medicines</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 border-b-2 transition ${
                    active
                      ? "text-brand-700 border-brand-700"
                      : "text-gray-700 border-transparent hover:text-brand-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search medicine..."
                className="w-40 lg:w-56 rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            <Link href="/account" className="flex items-center gap-1 text-sm text-gray-700 hover:text-brand-700">
              <User className="h-5 w-5" />
              <span className="hidden lg:inline">Account</span>
            </Link>
            <button
              onClick={openCart}
              aria-label={`Open cart, ${count} items`}
              className="relative flex items-center gap-1 text-sm text-gray-700 hover:text-brand-700"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden lg:inline">Cart</span>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-700 text-[10px] font-bold text-white">
                {count}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={openCart}
              aria-label={`Open cart, ${count} items`}
              className="relative p-2 text-gray-700"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-700 text-[10px] font-bold text-white">
                {count}
              </span>
            </button>
            <button
              className="p-2 text-gray-700"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <span className="font-bold text-brand-800">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-1.5 text-gray-400 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search medicine..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            <nav className="mt-6 flex flex-col gap-4 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/account"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-brand-700"
              >
                Account
              </Link>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openCart();
                }}
                className="text-left text-gray-700 hover:text-brand-700"
              >
                Cart ({count})
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
