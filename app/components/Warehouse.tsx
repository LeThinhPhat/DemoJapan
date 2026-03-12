import Link from "next/link";

export default function Warehouse() {
  return (
    <section className="mt-4 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            集荷倉庫
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            倉庫では当日受け入れと積み下ろし対応を行っています。
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            計量スペース、仕分けエリア、仮置き場、搬入車両レーンを分けており、小口案件から大型解体ロットまで受け入れ可能です。
          </p>

          <Link
            href="/warehouse"
            className="inline-flex rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            倉庫詳細とアクセスを見る
          </Link>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://r-needs.com/_img/ja/article/2256/image/770_510_2_f3f3f3//)",
                }}
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHiUryCNamibdNz3b8CVCCyRUvgcXPoMtmA&s)",
                }}
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://officekusama.jp/common/upload_data/officekusamajp/image/20251229151607.jpg)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              倉庫面積
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">2,500 m2</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              月間受入能力
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">120 t/月</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              1日あたり取引数
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">35+ 件</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              荷下ろし対応
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">終日対応</p>
          </div>
        </div>
      </div>
    </section>
  );
}
