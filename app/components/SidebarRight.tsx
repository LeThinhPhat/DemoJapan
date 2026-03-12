const productTypes = [
  "解体スクラップ",
  "水回り設備",
  "ステンレス処分品",
  "中古金物",
  "在庫処分ロット",
];

export default function SidebarRight() {
  return (
    <aside className="rounded-xl border border-rose-100 bg-white/90 p-4 shadow-[0_20px_50px_-30px_rgba(190,24,93,0.28)]">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-700">
            買取カテゴリ
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            品目で選ぶ
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
              <span className="text-xs font-semibold text-rose-500">選択</span>
            </button>
          ))}
        </div>

        <div className="rounded-lg bg-slate-900 p-3 text-sm text-slate-200">
          素材とカテゴリを組み合わせると、売却したい品目をすばやく確認できます。
        </div>
      </div>
    </aside>
  );
}
