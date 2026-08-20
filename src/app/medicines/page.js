import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";
import MedicinesFilter from "@/components/MedicinesFilter";

export const metadata = {
  title: "All Medicines | Slatch Pharmaceuticals",
  description: "Browse the complete range of Slatch Pharmaceuticals herbal medicines.",
};

export default async function MedicinesPage({ searchParams }) {
  const { category } = await searchParams;
  const list = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-gray-900">All Medicines</h1>
      <p className="mt-2 text-gray-500">
        Browse our complete range of herbal medicines, or filter by health condition.
      </p>

      <MedicinesFilter categories={categories} active={category || ""} />

      <p className="mt-6 text-sm text-gray-500">
        {list.length} medicine{list.length !== 1 ? "s" : ""} found
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
