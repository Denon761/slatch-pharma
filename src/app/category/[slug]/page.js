import Image from "next/image";
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

  const products = getProductsByCategory(category.slug);

  return (
    <div className="container-page py-10">
      <nav className="flex items-center gap-1 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/health-conditions" className="hover:text-brand-700">Health Conditions</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-gray-800">{category.name}</span>
      </nav>

      <div className="mt-6 flex flex-col md:flex-row items-center gap-6 rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-10">
        {category.image ? (
          <span className="flex h-24 md:h-36 lg:h-44 shrink-0 items-center justify-center">
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
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
          <p className="mt-1 text-sm text-gray-600 max-w-2xl">{category.description}</p>
        </div>
      </div>

      {products.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-900">Medicines in this Category</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
