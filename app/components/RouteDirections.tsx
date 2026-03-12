const routeSteps = [
  {
    title: "Vo Van Kiet方面へ進む",
    description:
      "市内中心部からVo Van Kiet通りを東方向へ進み、ハノイ街道方面で右車線を維持してトゥードゥック方面へ入ります。",
  },
  {
    title: "Linh Xuan物流ヤードへ入場",
    description:
      "物流ヤードのゲートを通過したらBレーンへ直進してください。トラックは倉庫前の待機スペースで転回できます。",
  },
  {
    title: "集荷倉庫に到着",
    description:
      "倉庫はB12区画にあります。正面看板の右側に計量場所と荷下ろしスペースがあります。",
  },
];

export default function RouteDirections() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          アクセス案内
        </p>
        <h3 className="text-2xl font-semibold text-slate-900">
          倉庫までの行き方
        </h3>
        <p className="max-w-3xl text-sm leading-7 text-slate-600">
          バイク、ピックアップ、小型トラックで搬入する際に使いやすいルートです。
        </p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {routeSteps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#fffaf4_0%,#ffffff_100%)] p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              手順 {index + 1}
            </p>
            <h4 className="mt-2 text-lg font-semibold text-slate-900">
              {step.title}
            </h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        到着先: B12区画 Linh Xuan物流ヤード、トゥードゥック市、ホーチミン市
      </div>
    </section>
  );
}
