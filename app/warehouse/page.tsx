import SiteShell from "../components/SiteShell";
import WarehouseDetail from "../components/WarehouseDetail";

export default function WarehousePage() {
  return (
    <SiteShell
      title="集荷倉庫のご案内とアクセス方法"
      description="倉庫写真、受け入れ能力、持ち込み時のルート案内をご確認いただけます。"
    >
      <WarehouseDetail />
    </SiteShell>
  );
}
