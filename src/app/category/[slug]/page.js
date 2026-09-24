import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import CategoryIcon from "@/components/CategoryIcon";
import { categories, getCategoryBySlug } from "@/lib/data";

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

  const children = Array.isArray(category.children) ? category.children : [];

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
        {category.image ? (
          <span className="flex h-28 shrink-0 items-center">
            <Image
              src={category.image.src}
              alt={category.name}
              width={category.image.width}
              height={category.image.height}
              className="h-full w-auto"
            />
          </span>
        ) : (
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: category.color }}
          >
            <CategoryIcon name={category.icon} className="h-7 w-7" />
          </span>
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
          <p className="mt-1 text-sm text-gray-600 max-w-2xl">{category.description}</p>
        </div>
      </div>

      {children.length > 0 && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Level 2 Conditions</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {children.map((child) => (
              <span
                key={child}
                className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-sm text-brand-700"
              >
                {child}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
