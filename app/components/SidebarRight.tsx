const productTypes = [
  "Jackets",
  "Shirts",
  "Pants",
  "Accessories",
  "New Collection",
];

export default function SidebarRight() {
  return (
    <aside className="rounded-xl border border-rose-100 bg-white/90 p-4 shadow-[0_20px_50px_-30px_rgba(190,24,93,0.28)]">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-700">
            Sidebar Right
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Filter by product type
          </h2>
        </div>

        <div className="space-y-2">
          {productTypes.map((type) => (
            <button
              key={type}
              type="button"
              className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5 text-left text-sm text-slate-700 transition hover:border-rose-300 hover:bg-rose-50"
            >
              <span>{type}</span>
              <span className="text-xs font-semibold text-rose-500">Filter</span>
            </button>
          ))}
        </div>

        <div className="rounded-lg bg-slate-900 p-3 text-sm text-slate-200">
          Use both sidebars together to quickly narrow products by material and category.
        </div>
      </div>
    </aside>
  );
}
