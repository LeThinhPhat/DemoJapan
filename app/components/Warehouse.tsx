export default function Warehouse() {
  return (
    <section className="mt-4 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Warehouse
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Our warehouse supports fast storage and delivery.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            We maintain an organized inventory system with ready-to-ship stock,
            careful packaging flow, and stable product handling for daily
            operations.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Storage Area
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">2,500 m²</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              In-stock Items
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">12,000+</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Daily Orders
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">350+</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Delivery Support
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
