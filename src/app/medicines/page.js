import { categories } from "@/lib/data";
import MedicinesFilter from "@/components/MedicinesFilter";

export const metadata = {
  title: "All Medicines | Slatch Pharmaceuticals",
  description: "Browse the complete range of Slatch Pharmaceuticals herbal medicines.",
};

export default async function MedicinesPage({ searchParams }) {
  const { category } = await searchParams;

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-gray-900">All Medicines</h1>
      <p className="mt-2 text-gray-500">
        Browse our complete range of herbal medicines, or filter by health condition.
      </p>

      <MedicinesFilter categories={categories} active={category || ""} />
    </div>
  );
}
