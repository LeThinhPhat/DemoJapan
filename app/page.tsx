import ProductCatalog from "./components/ProductCatalog";
import SiteShell from "./components/SiteShell";
import { products } from "./data/products";

export default function Home() {
  return (
    <SiteShell
      title="スクラップ、中古設備、在庫処分品を大量買取しています。"
      description="ステンレス、銅、鉄くず、水回り設備、解体現場の撤去品、倉庫や店舗の処分在庫まで現地で査定・回収します。"
    >
      <ProductCatalog products={products} />
    </SiteShell>
  );
}
