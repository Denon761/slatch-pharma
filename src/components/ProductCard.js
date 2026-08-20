import Link from "next/link";
import ProductImage from "./ProductImage";
import { formatPKR } from "@/lib/data";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-brand-200 transition">
      <Link href={`/product/${product.slug}`}>
        <ProductImage name={product.name} qd={product.qd} form={product.form} />
      </Link>
      <div className="mt-4 flex-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 hover:text-brand-700 transition line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-gray-500">
          {product.form} &middot; {product.size}
        </p>
        <p className="mt-2 font-bold text-brand-800">{formatPKR(product.price)}</p>
      </div>
      <AddToCartButton product={product} className="mt-3" compact />
    </div>
  );
}
