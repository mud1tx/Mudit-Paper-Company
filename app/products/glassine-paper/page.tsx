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
  name: "Glassine Paper",
  tagline: "Crystal Clear. Smooth Both Ways. Food Certified.",
  description:
    "Glassine Paper is a smooth, glossy, and translucent paper known for its exceptional resistance to air, grease, and moisture. Available in both One-Sided Smooth (1S) and Two-Sided Smooth (2S) variants, it is the preferred choice for premium food packaging, confectionery wrapping, and pharmaceutical applications. Its naturally dense surface provides a superior barrier without any coating.",
  image: "/images/design-1.png",
  breadcrumb: "Glassine Paper",
  tag: "1S & 2S Smooth · Food Grade",

  keyValues: [
    { label: "Variants", value: "1S & 2S Smooth", icon: "✨" },
    { label: "GSM Range", value: "25 – 60 GSM", icon: "⚖️" },
    { label: "Finish", value: "Translucent", icon: "🔍" },
    { label: "Origin", value: "Made in India", icon: "🏭" },
    { label: "MOQ", value: "50 Kg / Roll", icon: "📦" },
    { label: "Shelf Life", value: "24 Months", icon: "🗓️" },
  ],

  features: [
    {
      title: "One-Sided Smooth (1S)",
      icon: "◑",
      desc: "Smooth on one side, slightly rough on the other. Ideal for wrapping where only one face is visible — cost-effective and widely used in bakeries and sweet shops.",
    },
    {
      title: "Two-Sided Smooth (2S)",
      icon: "⬜",
      desc: "Perfectly smooth on both sides. Premium finish for high-end confectionery, chocolate wrapping, and pharmaceutical packaging where both faces are visible.",
    },
    {
      title: "Natural Grease Barrier",
      icon: "🛡️",
      desc: "Dense paper structure provides grease resistance without any chemical coating — naturally safe for direct food contact.",
    },
    {
      title: "Translucent Appearance",
      icon: "🔍",
      desc: "Semi-transparent finish lets the product show through — perfect for premium packaging where visibility adds to the appeal.",
    },
    {
      title: "Air & Moisture Resistant",
      icon: "💧",
      desc: "Exceptional barrier against air and moisture keeps food fresh longer and maintains product quality during storage and transit.",
    },
    {
      title: "100% Food Safe",
      icon: "✅",
      desc: "FSSAI compliant. Zero harmful chemicals. Safe for direct contact with food at all stages of packaging.",
    },
  ],

  applications: [
    { label: "Chocolate & Candy Wrapping", icon: "🍫" },
    { label: "Mithai & Sweet Packaging", icon: "🍬" },
    { label: "Bakery & Dry Food Wrapping", icon: "🥐" },
    { label: "Pharmaceutical Packaging", icon: "💊" },
    { label: "Interleaving Sheets", icon: "📋" },
    { label: "Release Liner Applications", icon: "🏷️" },
    { label: "Premium Gift Wrapping", icon: "🎁" },
    { label: "FMCG Inner Packaging", icon: "🛒" },
  ],

  gallery: ["/images/design-1.png", "/images/design-2.png"],
};

export const metadata = {
  title: "Glassine Paper – Mudit Paper Company",
  description: PRODUCT.description,
};

export default function GlassinePaperPage() {
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
