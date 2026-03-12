export type Product = {
  slug: string;
  name: string;
  material: string;
  type: string;
  price: string;
  description: string;
  size: string;
  color: string;
  imageUrl: string;
};

export const products: Product[] = [
  {
    slug: "lo-inox-thanh-ly",
    name: "ステンレス処分ロット",
    material: "ステンレス 201/304",
    type: "解体スクラップ",
    price: "18,000 - 32,000 VND/kg",
    description:
      "工場設備、棚、作業台、厨房機器などの解体ステンレスをロット単位または重量単位で買取します。現地での切断、仕分け、搬出にも対応します。",
    size: "kg単位またはロット単位で査定",
    color: "ホーチミン市および近郊対応",
    imageUrl: "https://hougen.co.jp/wp-content/uploads/IMG_1378-e1538623285766.jpg",
  },
  {
    slug: "van-khoa-ong-nuoc-cu",
    name: "中古バルブ・配管部材",
    material: "銅、鋼、合金",
    type: "水回り設備",
    price: "状態確認後にお見積り",
    description:
      "バルブ、継手、配管、給湯設備などの中古水回り部材を買取しています。工事現場、工場、店舗整理品にも対応可能です。",
    size: "少量から大量まで受付",
    color: "市内・近郊へ出張買取",
    imageUrl: "https://uchidametal.com/photo/zappin/kyuto_02.jpg",
  },
  {
    slug: "phe-lieu-hon-hop",
    name: "混合スクラップ",
    material: "鉄、アルミ、ステンレス、金属線",
    type: "在庫処分ロット",
    price: "重量と混在率で査定",
    description:
      "解体後の混合金属、古い金物、余剰資材、不良在庫などをまとめて買取します。現地積み込み用の車両手配も可能です。",
    size: "現地回収車両を手配可能",
    color: "当日査定に対応",
    imageUrl: "https://www.hidakasangyo.com/wp-content/uploads/2024/03/scrap_misc_7.jpg",
  },
  {
    slug: "voi-nuoc-phu-kien-cu",
    name: "中古水栓・金具類",
    material: "クロムメッキ銅、ステンレス",
    type: "中古金物",
    price: "セット単位・箱単位で査定",
    description:
      "蛇口、レバー、シャワー部材、取付金具などの中古品を買取しています。住宅、ホテル、ショールームの改装撤去品にも対応します。",
    size: "小口から大型案件まで対応",
    color: "トゥードゥック、ジーアン、ビエンホア優先対応",
    imageUrl: "https://hiranoyasan.com/wp-content/themes/hiranoyasan.com/images/water-faucet.jpg",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
