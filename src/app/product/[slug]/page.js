import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import {
  products,
  getProductBySlug,
  getCategoryBySlug,
  getProductsByCategory,
  formatPKR,
} from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} (${product.qd}) | Slatch Pharmaceuticals`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getProductsByCategory(product.category).filter(
    (p) => p.slug !== product.slug
  ).slice(0, 4);

  return (
    <div className="container-page py-10">
      <nav className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-brand-700">
              {category.name}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductImage name={product.name} qd={product.qd} form={product.form} size="lg" />

        <div>
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="text-xs font-semibold uppercase tracking-wide text-brand-600 hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {product.qd} &middot; {product.form} &middot; {product.size}
          </p>
          <p className="mt-4 text-2xl font-extrabold text-brand-800">
            {formatPKR(product.price)}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">
            <div>
              <h3 className="font-semibold text-gray-900">Suggested Usage</h3>
              <p className="mt-1 text-sm text-gray-600">{product.usage}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Key Ingredients</h3>
              <p className="mt-1 text-sm text-gray-600">{product.ingredients}</p>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            This information is provided for general awareness only and does not
            replace professional medical advice. Please consult a physician before use.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-900">Related Medicines</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
