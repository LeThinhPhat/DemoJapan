import Link from "next/link";
import type { Product } from "../data/products";

type ProductCatalogProps = {
  products: Product[];
};

export default function ProductCatalog({ products }: ProductCatalogProps) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              買取一覧
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              現在受付中の品目
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            各品目をクリックすると買取詳細をご覧いただけます
          </p>
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.name}
            href={`/products/${product.slug}`}
            className="rounded-xl border border-white/60 bg-white/90 p-6 text-left shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_28px_60px_-30px_rgba(15,23,42,0.28)]"
          >
            <div className="mb-5 overflow-hidden rounded-lg border border-slate-200">
              <div
                className="h-52 w-full bg-cover bg-center transition duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                {product.type}
              </p>
              <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>素材: {product.material}</p>
              <p>分類: {product.type}</p>
              <p className="pt-2 text-lg font-bold text-slate-900">
                {product.price}
              </p>
            </div>
            <span className="mt-5 inline-flex rounded-md bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              詳細を見る
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
