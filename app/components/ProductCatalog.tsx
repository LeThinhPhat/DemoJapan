"use client";

import { useState } from "react";

type Product = {
  name: string;
  material: string;
  type: string;
  price: string;
  description: string;
  size: string;
  color: string;
};

type ProductCatalogProps = {
  products: Product[];
};

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Product Catalog
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Product List
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Click a product to preview its details
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-amber-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] p-4 shadow-[0_20px_50px_-30px_rgba(146,64,14,0.35)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Product Details
            </p>
            <h3 className="text-3xl font-bold text-slate-900">
              {selectedProduct.name}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              {selectedProduct.description}
            </p>
          </div>
          <div className="rounded-lg bg-slate-900 px-5 py-4 text-white lg:min-w-56">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
              Price
            </p>
            <p className="mt-2 text-3xl font-bold">{selectedProduct.price}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Material
            </p>
            <p className="mt-2 font-semibold text-slate-800">
              {selectedProduct.material}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Type
            </p>
            <p className="mt-2 font-semibold text-slate-800">
              {selectedProduct.type}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Size
            </p>
            <p className="mt-2 font-semibold text-slate-800">
              {selectedProduct.size}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Color
            </p>
            <p className="mt-2 font-semibold text-slate-800">
              {selectedProduct.color}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        {products.map((product) => (
          <button
            key={product.name}
            type="button"
            onClick={() => setSelectedProduct(product)}
            className={`rounded-xl border bg-white/90 p-6 text-left shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(15,23,42,0.28)] ${
              selectedProduct.name === product.name
                ? "border-amber-400 ring-2 ring-amber-200"
                : "border-white/60"
            }`}
          >
            <div className="mb-5 rounded-lg bg-[linear-gradient(135deg,#f59e0b_0%,#fb7185_100%)] p-10 text-white">
              <p className="text-sm uppercase tracking-[0.25em] opacity-80">
                {product.type}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{product.name}</h3>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Material: {product.material}</p>
              <p>Type: {product.type}</p>
              <p className="pt-2 text-lg font-bold text-slate-900">
                {product.price}
              </p>
            </div>
            <span className="mt-5 inline-flex rounded-md bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              View Details
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
