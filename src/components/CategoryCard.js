import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryIcon from "./CategoryIcon";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition"
    >
      {category.image ? (
        <div className="mb-4 flex h-24 shrink-0 items-center justify-center transition group-hover:scale-105">
          <Image
            src={category.image.src}
            alt={category.name}
            width={category.image.width}
            height={category.image.height}
            className="h-full w-auto"
          />
        </div>
      ) : (
        <div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition group-hover:scale-105"
          style={{ backgroundColor: `${category.color}1A`, color: category.color }}
        >
          <CategoryIcon name={category.icon} className="h-9 w-9" />
        </div>
      )}
      <h3 className="font-semibold text-gray-900 leading-snug">{category.name}</h3>

      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 transition-all">
        View Medicines <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
