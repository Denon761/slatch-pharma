import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import AddToCartButton from "@/components/AddToCartButton";
import BuyNowButton from "@/components/BuyNowButton";
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
        <ProductGallery
          name={product.name}
          qd={product.qd}
          form={product.form}
          images={product.images || []}
        />

        <div>
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="text-xs font-semibold uppercase tracking-wide text-brand-600 hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {product.shortName || product.name} {product.qd}
          </h1>
          <p className="mt-4 text-2xl font-extrabold text-brand-800">
            {formatPKR(product.price)}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <AddToCartButton product={product} />
            <BuyNowButton product={product} />
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>

          {product.indication && (
            <div className="mt-4 rounded-lg bg-brand-50 border border-brand-100 px-4 py-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Indication
              </h3>
              <p className="mt-1 text-sm text-brand-900">{product.indication}</p>
            </div>
          )}

          {product.highlights && product.highlights.length > 0 && (
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-gray-900">Why Choose {product.name}?</h3>
              <ul className="mt-2 space-y-1.5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-brand-600">✔</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">
            <div>
              <h3 className="font-semibold text-gray-900">Suggested Usage</h3>
              <p className="mt-1 text-sm text-gray-600">{product.usage}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Key Ingredients</h3>
              <p className="mt-1 text-sm text-gray-600">{product.ingredients}</p>
            </div>
            {product.storage && (
              <div>
                <h3 className="font-semibold text-gray-900">Storage Instructions</h3>
                <p className="mt-1 text-sm text-gray-600">{product.storage}</p>
              </div>
            )}
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <h3 className="font-semibold text-gray-900">Product Information</h3>
            <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              <div>
                <dt className="inline text-gray-500">Product Name: </dt>
                <dd className="inline text-gray-800">{product.name}</dd>
              </div>
              <div>
                <dt className="inline text-gray-500">Product Code: </dt>
                <dd className="inline text-gray-800">{product.qd}</dd>
              </div>
              {product.productCategory && (
                <div>
                  <dt className="inline text-gray-500">Category: </dt>
                  <dd className="inline text-gray-800">{product.productCategory}</dd>
                </div>
              )}
              <div>
                <dt className="inline text-gray-500">Pack Size: </dt>
                <dd className="inline text-gray-800">{product.size}</dd>
              </div>
            </dl>
          </div>

          {(product.regulatory || product.manufacturedBy || product.marketedBy) && (
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-gray-900">Regulatory & Manufacturing Information</h3>
              <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                {product.regulatory && (
                  <>
                    <div className="sm:col-span-2 text-gray-600">
                      Registered with {product.regulatory.authority}
                    </div>
                    <div>
                      <dt className="inline text-gray-500">DRAP Enlistment No.: </dt>
                      <dd className="inline text-gray-800">{product.regulatory.enlistmentNo}</dd>
                    </div>
                    <div>
                      <dt className="inline text-gray-500">Form 7 No.: </dt>
                      <dd className="inline text-gray-800">{product.regulatory.form7No}</dd>
                    </div>
                  </>
                )}
                {product.manufacturedBy && (
                  <div>
                    <dt className="inline text-gray-500">Manufactured By: </dt>
                    <dd className="inline text-gray-800">{product.manufacturedBy}</dd>
                  </div>
                )}
                {product.marketedBy && (
                  <div>
                    <dt className="inline text-gray-500">Marketed By: </dt>
                    <dd className="inline text-gray-800">{product.marketedBy}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          {product.importantNote && (
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-gray-900">Important Note</h3>
              <p className="mt-1 text-sm text-gray-600">{product.importantNote}</p>
            </div>
          )}

          <p className="mt-6 text-xs text-gray-400">
            This information is provided for general awareness only and does not
            replace professional medical advice. Please consult a physician before use.
          </p>
        </div>
      </div>

      {product.tagline && (
        <div className="mt-12 rounded-2xl bg-brand-700 text-white px-6 py-8 text-center md:px-12">
          <h2 className="text-xl md:text-2xl font-bold">{product.tagline.title}</h2>
          <p className="mt-2 text-sm md:text-base text-brand-50">{product.tagline.text}</p>
        </div>
      )}

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
