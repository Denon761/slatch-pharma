import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { searchAll } from "@/lib/data";

export const metadata = {
  title: "Search Results | Slatch Pharmaceuticals",
};

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;
  const { products, categories } = searchAll(q);
  const hasResults = products.length > 0 || categories.length > 0;

  return (
    <div className="container-page py-10">
      <h1 className="text-2xl font-bold text-gray-900">
        Search Results for &ldquo;{q}&rdquo;
      </h1>

      {!hasResults && (
        <p className="mt-6 text-gray-500">
          No matches found. Try a different disease, medicine name, or QD code.
        </p>
      )}

      {categories.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">Health Conditions</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      )}

      {products.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900">Medicines</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
