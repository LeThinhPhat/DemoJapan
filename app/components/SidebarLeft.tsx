const materials = ["Cotton", "Linen", "Denim", "Silk", "Polyester"];

export default function SidebarLeft() {
  return (
    <aside className="rounded-xl border border-amber-100 bg-white/90 p-4 shadow-[0_20px_50px_-30px_rgba(146,64,14,0.35)]">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Sidebar Left
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Filter by material
          </h2>
        </div>

        <div className="space-y-2">
          {materials.map((material) => (
            <label
              key={material}
              className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700 transition hover:border-amber-300 hover:bg-amber-50"
            >
              <span>{material}</span>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
            </label>
          ))}
        </div>

        <button className="w-full rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700">
          Apply filters
        </button>
      </div>
    </aside>
  );
}
