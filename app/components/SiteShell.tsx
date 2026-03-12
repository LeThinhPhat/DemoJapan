import Link from "next/link";
import Banner from "./Banner";
import ChatBox from "./ChatBox";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Warehouse from "./Warehouse";

type SiteShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function SiteShell({
  title,
  description,
  children,
}: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8ef_0%,#ffffff_45%,#f5efe6_100%)] text-slate-900">
      <ChatBox />
      <Banner />

      <header className="border-b border-amber-200/70 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-[0.2em] text-amber-700 uppercase"
            >
              中古買取
            </Link>

            <form className="flex w-full max-w-md items-center overflow-hidden rounded-full border border-amber-200 bg-white shadow-sm">
              <input
                type="text"
                placeholder="売りたい品目やスクラップ種別を検索..."
                className="w-full bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
              >
                検索
              </button>
            </form>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
            <Link href="/" className="transition hover:text-amber-700">
              ホーム
            </Link>
            <a href="#" className="transition hover:text-amber-700">
              会社案内
            </a>
            <a href="#" className="transition hover:text-amber-700">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-5">
        <section className="relative mb-6 overflow-hidden rounded-xl border border-white/20 shadow-[0_24px_80px_-32px_rgba(146,64,14,0.35)]">
          <div
            className="absolute inset-0 bg-cover bg-center hero-slide hero-slide-first"
            style={{
              backgroundImage:
                "url(https://hougen-tokyo.jp/wp-content/uploads/DSC_1250-e1538622263962.jpg)",
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center hero-slide hero-slide-second"
            style={{
              backgroundImage:
                "url(https://shinwa-sangyo.net/img/scrap_door3.jpg)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.64)_45%,rgba(15,23,42,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,158,11,0.22)_0%,rgba(251,113,133,0.08)_100%)]" />

          <div className="absolute bottom-5 right-5 hidden h-24 w-40 overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.85)] backdrop-blur sm:block lg:h-28 lg:w-48">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://www.toakinzoku.co.jp/img/SP_ch_scrap_misc_bg.jpg)",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.34)_100%)]" />
          </div>

          <div className="relative space-y-5 p-7 pr-7 sm:p-8 sm:pr-52">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
              出張買取対応
            </span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/85">
              {description}
            </p>
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[240px_minmax(0,1fr)_240px]">
          <SidebarLeft />
          {children}
          <SidebarRight />
        </section>

        <div className="pb-16 lg:pb-24">
          <Warehouse />
        </div>
      </main>

      <footer className="border-t border-amber-200/70 bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600 lg:px-8">
          <div className="grid gap-6 border-b border-slate-200/80 pb-6 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                買取事業者
              </p>
              <h3 className="text-lg font-semibold text-slate-900">中古品・スクラップ買取センター</h3>
              <p>
                金属スクラップ、水回り設備、解体撤去品、倉庫在庫、店舗や事務所の処分品を中心に買取しています。
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                連絡先
              </p>
              <p>固定電話: 028 3888 9999</p>
              <p>Email: thumua@docunhat.vn</p>
              <p>ホットライン: 0901 234 567</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                倉庫所在地
              </p>
              <p>Linh Xuan物流ヤード B12区画</p>
              <p>トゥードゥック市 Linh Xuan地区</p>
              <p>ホーチミン市</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 中古品・スクラップ買取センター. All rights reserved.</p>
            <p>写真送付での簡易査定、大量案件は現地確認にも対応します。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
