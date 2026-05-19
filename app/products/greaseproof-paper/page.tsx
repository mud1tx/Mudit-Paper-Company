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
  name: "OGR Greaseproof Paper",
  tagline: "Food-Safe. Grease-Resistant. Certified.",
  description:
    "OGR Greaseproof Paper is a premium food-contact paper engineered to provide an exceptional barrier against oils, fats, and moisture. Manufactured under strict food-safety standards, it is the trusted choice of bakeries, confectioneries, restaurants, and food processors across India.",
  image: "/images/greaseproof-paper.jpeg",
  breadcrumb: "Greaseproof Paper",
  tag: "Food Grade · FSSAI Certified",

  keyValues: [
    { label: "Food Grade", value: "FSSAI Certified", icon: "🇮🇳" },
    { label: "GSM Range", value: "30 – 50 GSM", icon: "⚖️" },
    { label: "Origin", value: "Made in India", icon: "🏭" },
    { label: "MOQ", value: "50 Kg / Roll", icon: "📦" },
    { label: "Width", value: "Custom Available", icon: "📐" },
    { label: "Shelf Life", value: "24 Months", icon: "🗓️" },
  ],

  features: [
    {
      title: "Superior Grease Barrier",
      icon: "🛡️",
      desc: "Engineered to resist penetration from oils, fats, and butter — keeps packaging clean and professional.",
    },
    {
      title: "100% Food Safe",
      icon: "✅",
      desc: "FSSAI compliant with zero harmful chemicals. Safe for direct food contact at all temperatures.",
    },
    {
      title: "Consistent GSM",
      icon: "⚖️",
      desc: "Tight GSM tolerance across every roll ensures uniform performance and no surprises on your line.",
    },
    {
      title: "Moisture Resistant",
      icon: "💧",
      desc: "Resists moisture absorption, keeping food fresh and packaging intact even in humid environments.",
    },
    {
      title: "Printable Surface",
      icon: "🖨️",
      desc: "Available with custom printing for branding, logos, and product information.",
    },
    {
      title: "Eco-Friendly",
      icon: "🌿",
      desc: "Made from sustainably sourced wood pulp. Recyclable and biodegradable.",
    },
  ],

  applications: [
    { label: "Bakeries & Patisseries", icon: "🥐" },
    { label: "Burger & Sandwich Wrapping", icon: "🍔" },
    { label: "Fried Food Packaging", icon: "🍟" },
    { label: "Confectionery & Mithai", icon: "🍬" },
    { label: "Deli & Butcher Wrapping", icon: "🥩" },
    { label: "Food Trays & Liners", icon: "🍱" },
    { label: "FMCG Packaging Lines", icon: "🛒" },
    { label: "Catering & Food Service", icon: "🍽️" },
  ],

  gallery: ["/images/design-1.png", "/images/design-2.png"],
};

export const metadata = {
  title: "OGR Greaseproof Paper – Mudit Paper Company",
  description: PRODUCT.description,
};

export default function GreaseproofPaperPage() {
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
