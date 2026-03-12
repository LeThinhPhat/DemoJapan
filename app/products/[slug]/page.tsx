import { notFound } from "next/navigation";
import ProductDetail from "../../components/ProductDetail";
import SiteShell from "../../components/SiteShell";
import { getProductBySlug, products } from "../../data/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 2);

  return (
    <SiteShell
      title={`買取品目詳細: ${product.name}`}
      description="品目の説明、実際の写真、買取条件、あわせて売却しやすい関連品目をご案内します。"
    >
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </SiteShell>
  );
}
