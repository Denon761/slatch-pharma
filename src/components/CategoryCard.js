import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryIcon from "./CategoryIcon";

export default function CategoryCard({ category }) {
  const children = Array.isArray(category.children) ? category.children : [];

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition"
    >
      <div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition group-hover:scale-105"
        style={{ backgroundColor: `${category.color}1A`, color: category.color }}
      >
        <CategoryIcon name={category.icon} className="h-9 w-9" />
      </div>
      <h3 className="font-semibold text-gray-900 leading-snug">{category.name}</h3>

      {children.length > 0 && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {children.slice(0, 3).map((child) => (
            <span
              key={child}
              className="rounded-full border border-brand-100 bg-brand-50 px-2 py-1 text-[10px] font-medium text-brand-700"
            >
              {child}
            </span>
          ))}
        </div>
      )}

      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 transition-all">
        View Medicines <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
