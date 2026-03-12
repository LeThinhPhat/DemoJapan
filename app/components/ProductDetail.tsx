import Link from "next/link";
import type { Product } from "../data/products";
import RelatedProducts from "./RelatedProducts";

type ProductDetailProps = {
  product: Product;
  relatedProducts: Product[];
};

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              品目詳細
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {product.name}
            </h2>
          </div>
          <Link
            href="/"
            className="inline-flex rounded-lg border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
          >
            一覧へ戻る
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-amber-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] p-4 shadow-[0_20px_50px_-30px_rgba(146,64,14,0.35)]">
        <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div
            className="h-64 w-full bg-cover bg-center sm:h-80"
            style={{ backgroundImage: `url(${product.imageUrl})` }}
          />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              買取内容
            </p>
            <h3 className="text-3xl font-bold text-slate-900">{product.name}</h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              {product.description}
            </p>
          </div>
          <div className="rounded-lg bg-slate-900 px-5 py-4 text-white lg:min-w-56">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
              参考買取価格
            </p>
            <p className="mt-2 text-3xl font-bold">{product.price}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              素材
            </p>
            <p className="mt-2 font-semibold text-slate-800">{product.material}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              分類
            </p>
            <p className="mt-2 font-semibold text-slate-800">{product.type}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              買取条件
            </p>
            <p className="mt-2 font-semibold text-slate-800">{product.size}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              対応エリア
            </p>
            <p className="mt-2 font-semibold text-slate-800">{product.color}</p>
          </div>
        </div>
      </div>

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
