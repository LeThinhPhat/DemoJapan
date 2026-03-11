import Banner from "./components/Banner";
import ChatBox from "./components/ChatBox";
import ProductCatalog from "./components/ProductCatalog";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

const products = [
  {
    name: "Kimono Linen",
    material: "Linen",
    type: "Jacket",
    price: "1.250.000d",
    description:
      "Kimono Linen is a lightweight outerwear piece with a breathable silhouette, suitable for daily wear and minimalist styling.",
    size: "M, L, XL",
    color: "Beige, Light Brown",
  },
  {
    name: "Yukata Cotton",
    material: "Cotton",
    type: "Shirt",
    price: "890.000d",
    description:
      "Yukata Cotton uses soft cotton fabric that feels comfortable, making it ideal for warm weather and active movement.",
    size: "S, M, L",
    color: "White, Navy Blue",
  },
  {
    name: "Denim Hakama",
    material: "Denim",
    type: "Pants",
    price: "1.490.000d",
    description:
      "Denim Hakama is a wide-leg design with a strong visual identity, combining structured denim with a modern fashion feel.",
    size: "M, L",
    color: "Dark Denim Blue",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8ef_0%,#ffffff_45%,#f5efe6_100%)] text-slate-900">
      <ChatBox />
      <Banner />

      <header className="border-b border-amber-200/70 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <a
              href="#"
              className="text-xl font-bold tracking-[0.2em] text-amber-700 uppercase"
            >
              DemoJapan
            </a>

            <form className="flex w-full max-w-md items-center overflow-hidden rounded-full border border-amber-200 bg-white shadow-sm">
              <input
                type="text"
                placeholder="Search products, articles..."
                className="w-full bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
              >
                Search
              </button>
            </form>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#" className="transition hover:text-amber-700">
              Home
            </a>
            <a href="#" className="transition hover:text-amber-700">
              About
            </a>
            <a href="#" className="transition hover:text-amber-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-5">
        <section className="mb-6 rounded-xl border border-white/60 bg-white/75 p-8 shadow-[0_24px_80px_-32px_rgba(146,64,14,0.35)]">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-amber-300 bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
              Welcome to Home Page
            </span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              The body now includes SidebarLeft and SidebarRight for product filtering.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The left side filters by material, the right side filters by category, and the center shows products for quick browsing.
            </p>
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[240px_minmax(0,1fr)_240px]">
          <SidebarLeft />

          <ProductCatalog products={products} />

          <SidebarRight />
        </section>
      </main>

      <footer className="border-t border-amber-200/70 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>Copyright 2026 DemoJapan. All rights reserved.</p>
          <p>Header - Body - Footer built with Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
