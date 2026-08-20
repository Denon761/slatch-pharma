import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryIcon from "./CategoryIcon";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700 group-hover:bg-brand-100 transition">
        <CategoryIcon name={category.icon} className="h-8 w-8" />
      </div>
      <h3 className="font-semibold text-gray-900 leading-snug">{category.name}</h3>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 transition-all">
        View Medicines <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
