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
  name: "Printed Greaseproof & Glassine Paper",
  tagline: "Your Brand. Your Design. Food Safe.",
  description:
    "Transform your food packaging into a powerful branding tool with our custom printed greaseproof and glassine paper. Whether you need a simple single-colour logo or a full multi-colour decorative design, we print on any GSM to match your exact requirement. Perfect for bakeries, sweet shops, restaurants, and FMCG brands that want packaging which looks as good as the food inside.",
  image: "/images/design-1.png",
  breadcrumb: "Printed Greaseproof / Glassine",
  tag: "Custom Print · Single & Multi Colour",

  keyValues: [
    { label: "Print Type", value: "Single to Multi Colour", icon: "🎨" },
    { label: "Base Paper", value: "Greaseproof / Glassine", icon: "📄" },
    { label: "GSM", value: "Any GSM Available", icon: "⚖️" },
    { label: "MOQ", value: "As Per Requirement", icon: "📦" },
    { label: "Turnaround", value: "Custom Lead Time", icon: "⏱️" },
    { label: "Origin", value: "Made in India", icon: "🏭" },
  ],

  features: [
    {
      title: "Single Colour Printing",
      icon: "🖊️",
      desc: "Clean, minimal single-colour prints — ideal for logos, brand names, and simple patterns. Cost-effective for large volume orders.",
    },
    {
      title: "Multi Colour Printing",
      icon: "🎨",
      desc: "Full multi-colour designs with vibrant, food-safe inks. From intricate patterns to photographic-quality prints — bring any design to life.",
    },
    {
      title: "Print on Any GSM",
      icon: "⚖️",
      desc: "We print on any GSM of greaseproof or glassine paper — from lightweight 25 GSM wrapping sheets to heavy 90 GSM packaging paper.",
    },
    {
      title: "Food Safe Inks",
      icon: "✅",
      desc: "All inks used are food-grade certified and FSSAI compliant. Safe for direct and indirect food contact — no migration, no risk.",
    },
    {
      title: "Custom Sizes & Rolls",
      icon: "📐",
      desc: "Available in custom widths, sheet sizes, and roll lengths to fit your exact packaging line or wrapping requirement.",
    },
    {
      title: "Grease & Moisture Resistant",
      icon: "🛡️",
      desc: "Print quality stays intact even under greasy and moist food conditions — your branding remains sharp and clean throughout.",
    },
  ],

  applications: [
    { label: "Branded Bakery Wrapping", icon: "🥐" },
    { label: "Custom Sweet Box Lining", icon: "🍬" },
    { label: "Restaurant Burger Wraps", icon: "🍔" },
    { label: "Festive & Wedding Packaging", icon: "🎁" },
    { label: "Chocolate & Candy Wrapping", icon: "🍫" },
    { label: "FMCG Brand Packaging", icon: "🛒" },
    { label: "Catering & Tray Lining", icon: "🍽️" },
    { label: "Dry Fruit Gift Packaging", icon: "🥜" },
  ],

  gallery: ["/images/design-1.png", "/images/design-2.png"],
};

export const metadata = {
  title: "OGR Printed Food Paper – Mudit Paper Company",
  description: PRODUCT.description,
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
