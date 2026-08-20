import Link from "next/link";
import { ChevronRight, Leaf } from "lucide-react";
import HomeSearch from "@/components/HomeSearch";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-14">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="text-brand-800">Trusted Formulations. </span>
              <br />
              <span className="text-gray-900">Modern Healthcare.</span>
           
            </h1>
            <p className="mt-5 text-gray-600 max-w-md">
              Find the right product by disease or search directly by medicine name or
              QD code.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/medicines"
                className="inline-flex items-center gap-1 rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800 transition"
              >
                Browse Medicines <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/health-conditions"
                className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 hover:border-brand-400 hover:text-brand-800 transition"
              >
                View Health Conditions
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white border border-brand-100 shadow-sm p-8 flex flex-wrap items-center justify-center gap-4">
              {["QD 536", "QD 3068", "QD 192", "QD 560"].map((code) => (
                <div
                  key={code}
                  className="flex h-28 w-20 flex-col items-center justify-end rounded-md bg-gradient-to-b from-brand-100 to-brand-50 border border-brand-200 p-2 text-center"
                >
                  <Leaf className="h-5 w-5 text-brand-500 mb-auto" />
                  <span className="text-[10px] font-bold text-brand-800">{code}</span>
                </div>
              ))}
            </div>
            <span className="absolute -top-4 -right-4 rounded-full bg-white border border-brand-200 shadow-sm px-4 py-2 text-center text-xs font-semibold text-brand-800">
              More Than
              <br />
              40 Years of
              <br />
              Herbal Service
            </span>
          </div>
        </div>

        <div className="container-page pb-14">
          <HomeSearch />
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
          Browse Medicines by Disease &amp; Health Condition
        </h2>
        <p className="mt-2 text-center text-gray-500 max-w-xl mx-auto">
          Choose a health condition below to see herbal medicines traditionally used
          for it.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-brand-800">
        <div className="container-page py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
          <div>
            <p className="text-3xl font-extrabold">40+</p>
            <p className="mt-1 text-sm text-brand-100">Years of Herbal Service</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">{categories.length}</p>
            <p className="mt-1 text-sm text-brand-100">Health Conditions Covered</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">Nationwide</p>
            <p className="mt-1 text-sm text-brand-100">Available Through Medical Stores</p>
          </div>
        </div>
      </section>
    </div>
  );
}
