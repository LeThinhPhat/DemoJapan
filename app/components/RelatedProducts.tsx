import Link from "next/link";
import type { Product } from "../data/products";

type RelatedProductsProps = {
  products: Product[];
};

export default function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            関連品目
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">
            あわせて売却しやすい品目
          </h3>
        </div>
        <p className="text-sm text-slate-500">
          同時に買取しやすい近いカテゴリの品目をご案内します。
        </p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="rounded-xl border border-white/60 bg-[linear-gradient(135deg,#fffaf4_0%,#ffffff_100%)] p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_28px_60px_-30px_rgba(15,23,42,0.28)]"
          >
            <div className="mb-4 overflow-hidden rounded-lg border border-slate-200">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              />
            </div>
            <div className="mb-2">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-700">
                {product.type}
              </p>
              <h4 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h4>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>素材: {product.material}</p>
              <p>買取条件: {product.size}</p>
              <p className="text-lg font-bold text-slate-900">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
