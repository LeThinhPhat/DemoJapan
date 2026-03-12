import Link from "next/link";
import RouteDirections from "./RouteDirections";

const warehouseGallery = [
  "https://r-needs.com/_img/ja/article/2256/image/770_510_2_f3f3f3//",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHiUryCNamibdNz3b8CVCCyRUvgcXPoMtmA&s",
  "https://officekusama.jp/common/upload_data/officekusamajp/image/20251229151607.jpg",
];

export default function WarehouseDetail() {
  return (
    <div className="space-y-3">
      <section className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              倉庫詳細
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              集荷倉庫と仕分けヤード
            </h2>
          </div>
          <Link
            href="/"
            className="inline-flex rounded-lg border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
          >
            ホームへ戻る
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-amber-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] p-5 shadow-[0_20px_50px_-30px_rgba(146,64,14,0.35)]">
        <div className="grid gap-3 md:grid-cols-3">
          {warehouseGallery.map((imageUrl, index) => (
            <div
              key={imageUrl}
              className={`overflow-hidden rounded-xl border border-slate-200 bg-white ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`w-full bg-cover bg-center ${
                  index === 0 ? "min-h-[18rem] h-72 md:h-full" : "h-36"
                }`}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              受け入れ体制
            </p>
            <h3 className="text-3xl font-bold text-slate-900">
              小口持ち込みから大型処分ロットまで一か所で対応
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              倉庫内は計量、資材集約、クレーン待機、荷下ろしエリアに分かれており、到着後すぐに数量確認、仕分け、査定ができます。
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                倉庫面積
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">2,500 m2</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                荷下ろしバース
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">08</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                1日あたり取引数
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">35+</p>
            </div>
          </div>
        </div>
      </section>

      <RouteDirections />
    </div>
  );
}
