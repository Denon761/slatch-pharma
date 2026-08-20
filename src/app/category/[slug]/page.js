import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import CategoryIcon from "@/components/CategoryIcon";
import ProductCard from "@/components/ProductCard";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} Medicines | Slatch Pharmaceuticals`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);

  return (
    <div className="container-page py-10">
      <nav className="flex items-center gap-1 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/health-conditions" className="hover:text-brand-700">Health Conditions</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-gray-800">{category.name}</span>
      </nav>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-brand-50 border border-brand-100 p-6">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
          <CategoryIcon name={category.icon} className="h-7 w-7" />
        </span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
          <p className="mt-1 text-sm text-gray-600 max-w-2xl">{category.description}</p>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        {items.length} medicine{items.length !== 1 ? "s" : ""} found
      </p>

      {items.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-500">
          No medicines listed for this condition yet. Please check back soon or{" "}
          <Link href="/contact" className="text-brand-700 font-medium hover:underline">
            contact us
          </Link>{" "}
          for guidance.
        </div>
      )}
    </div>
  );
}
