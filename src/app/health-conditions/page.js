import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/data";

export const metadata = {
  title: "Health Conditions | Slatch Pharmaceuticals",
  description: "Browse herbal medicines by disease and health condition.",
};

export default function HealthConditionsPage() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-gray-900">Health Conditions</h1>
      <p className="mt-2 text-gray-500 max-w-2xl">
        Choose a health condition below to see herbal medicines traditionally used
        for it.
      </p>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
