export default function Banner() {
  return (
    <div
      className="border-b border-rose-200"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(15, 23, 42, 0.68) 0%, rgba(15, 23, 42, 0.52) 100%), url(https://www.toakinzoku.co.jp/img/SP_ch_scrap_misc_bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="font-medium text-white/90">
          当日査定対応、写真送付だけでも概算見積できます
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="banner-blink rounded-full bg-white/92 px-4 py-2 text-slate-700 shadow-sm ring-1 ring-white/30">
            受け入れ先: B12区画 Linh Xuan物流ヤード、トゥードゥック市
          </span>
          <a
            href="tel:0901234567"
            className="banner-blink rounded-full bg-rose-600 px-4 py-2 font-semibold text-white shadow-sm"
          >
            買取ホットライン: 0901 234 567
          </a>
        </div>
      </div>
    </div>
  );
}
