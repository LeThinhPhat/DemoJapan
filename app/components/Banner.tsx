export default function Banner() {
  return (
    <div className="border-b border-rose-200 bg-rose-50/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="font-medium text-slate-700">
          Quick contact information for customers
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="banner-blink rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm ring-1 ring-rose-200">
            Address: 123 Sakura Street, District 1, Ho Chi Minh City
          </span>
          <a
            href="tel:0901234567"
            className="banner-blink rounded-full bg-rose-600 px-4 py-2 font-semibold text-white shadow-sm"
          >
            Hotline: 0901 234 567
          </a>
        </div>
      </div>
    </div>
  );
}
