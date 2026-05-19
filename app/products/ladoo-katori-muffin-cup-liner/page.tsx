import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductKeyValues from "@/components/product/ProductKeyValues";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductGallery from "@/components/product/ProductGallery";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";
import styles from "@/components/product/product.module.css";

const PRODUCT = {
  name: "Ladoo Katori & Muffin Cup Liner",
  tagline: "Perfect Shape. Food Safe. Plain to Printed.",
  description:
    "Our Ladoo Katori and Muffin Cup Liners are premium food-grade paper cups designed to hold, present, and protect sweets, muffins, cupcakes, and dry fruits beautifully. Available in plain white to full multi-colour custom printed designs, and in any size from 65mm to 100mm diameter. Currently available in circular shape, these liners are the go-to choice for mithai shops, bakeries, caterers, and FMCG sweet brands across India.",
  image: "/images/design-1.png",
  breadcrumb: "Ladoo Katori / Muffin Cup Liner",
  tag: "Plain to Multi Colour · 65–100mm",

  keyValues: [
    { label: "Shape", value: "Circle", icon: "⭕" },
    { label: "Size Range", value: "65mm – 100mm", icon: "📐" },
    { label: "Print", value: "Plain to Multi Colour", icon: "🎨" },
    { label: "Material", value: "Food Grade Paper", icon: "✅" },
    { label: "MOQ", value: "As Per Requirement", icon: "📦" },
    { label: "Origin", value: "Made in India", icon: "🏭" },
  ],

  features: [
    {
      title: "Any Size from 65–100mm",
      icon: "📐",
      desc: "Available in any diameter between 65mm and 100mm — perfectly sized for small ladoos, large katoris, standard muffins, and cupcakes.",
    },
    {
      title: "Plain to Multi Colour Print",
      icon: "🎨",
      desc: "Choose from plain white, single colour, or full multi-colour custom printed designs. Add your logo, brand name, or festive pattern to every cup.",
    },
    {
      title: "100% Food Safe",
      icon: "✅",
      desc: "Made from FSSAI certified food-grade paper. Safe for direct contact with sweets, dry fruits, muffins, and all food items.",
    },
    {
      title: "Grease Resistant",
      icon: "🛡️",
      desc: "Specially treated to resist oil and moisture from sweets and baked goods — keeps the liner clean and presentable till the last bite.",
    },
    {
      title: "Sturdy & Shape Retaining",
      icon: "💪",
      desc: "Firm enough to hold shape when filled with heavy mithai or dense muffins — no collapsing, no leaning, perfect presentation every time.",
    },
    {
      title: "Ideal for Gifting & Display",
      icon: "🎁",
      desc: "Printed liners instantly elevate the look of mithai boxes, gift hampers, bakery displays, and catering trays — branding that works for you.",
    },
  ],

  applications: [
    { label: "Ladoo & Mithai Katori", icon: "🍬" },
    { label: "Muffin & Cupcake Liner", icon: "🧁" },
    { label: "Dry Fruit Cup Packaging", icon: "🥜" },
    { label: "Sweet Shop Display", icon: "🏪" },
    { label: "Wedding & Event Catering", icon: "🎊" },
    { label: "Festive Gift Hampers", icon: "🎁" },
    { label: "Bakery & Patisserie", icon: "🥐" },
    { label: "FMCG Sweet Packaging", icon: "🛒" },
  ],

  gallery: ["/images/design-1.png", "/images/design-2.png"],
};

export const metadata = {
  title: `${PRODUCT.name} – Mudit Paper Company`,
  description:
    "Premium food-grade ladoo katori and muffin cup liners. Plain to multi-colour printed. Size 65–100mm. FSSAI certified. Bulk orders available.",
  keywords:
    "ladoo katori, muffin cup liner, cupcake liner, mithai katori, paper cup liner India",
};

export default function PrintedFoodPaperPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <ProductHero
          name={PRODUCT.name}
          tagline={PRODUCT.tagline}
          description={PRODUCT.description}
          image={PRODUCT.image}
          breadcrumb={PRODUCT.breadcrumb}
          tag={PRODUCT.tag}
        />
        <ProductKeyValues items={PRODUCT.keyValues} />
        <ProductFeatures
          items={PRODUCT.features}
          label="Why OGR"
        />
        <ProductApplications items={PRODUCT.applications} />
        <ProductGallery
          images={PRODUCT.gallery}
          productName={PRODUCT.name}
        />
        <ProductCTA productName={PRODUCT.name} />
      </main>
      <Footer />
    </>
  );
}
