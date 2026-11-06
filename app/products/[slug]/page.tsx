import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopBar from "@/components/layout/TopBar/TopBar";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductVariants from "@/components/product/ProductVariants";
import ProductGallery from "@/components/product/ProductGallery";
import ProductFaq from "@/components/product/ProductFaq";
import ProductRelated from "@/components/product/ProductRelated";
import ProductCTA from "@/components/product/ProductCTA";
import RevealInit from "@/components/RevealInit";
import BackToTop from "@/components/ui/BackToTop";
import { PRODUCTS, PRODUCTS_LIST } from "@/data/product";
import { BASE_URL } from "@/lib/config";
import {
  PAGE_UPDATED,
  faqJsonLd,
  pageMetadata,
  subPageJsonLd,
} from "@/lib/seo";
import type { Product } from "@/types/product";
import styles from "@/components/product/product.module.css";

type Params = { params: Promise<{ readonly slug: string }> };

// Only the slugs in PRODUCTS_LIST exist; any other URL is a real 404
export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS_LIST.map(({ slug }) => ({ slug }));
}

// "Greaseproof (OGR) Paper Wholesaler in India": the site sells nationwide, so
// titles target India. Kanpur stays in the address and business data.
const seoTitle = (product: Product) => `${product.name} Wholesaler in India`;

// Short enough for Google to show in full (about 155 characters). The long
// product.description stays on the page itself.
const seoDescription = (product: Product) =>
  `${product.card.summary} Bulk supply to businesses across India.`;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) return {};

  return pageMetadata({
    title: seoTitle(product),
    description: seoDescription(product),
    path: `/products/${slug}`,
    image: { url: product.image, alt: product.imageAlt },
  });
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) notFound();

  const path = `/products/${slug}`;
  const productUrl = `${BASE_URL}${path}`;
  const page = subPageJsonLd({
    name: seoTitle(product),
    description: seoDescription(product),
    path,
    dateModified: product.updated ?? PAGE_UPDATED.products,
    crumbs: [
      { name: "Home", path: "/" },
      { name: product.name, path },
    ],
  });

  // No offers, so this does not claim a price rich result. It tells Google
  // (and AI search) what the product is, its specs and who sells it.
  const productData = {
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    ...(product.alternateNames && { alternateName: product.alternateNames }),
    description: product.description,
    url: productUrl,
    image: [product.image, ...product.gallery.map((g) => g.src)].map(
      (src) => `${BASE_URL}${src}`,
    ),
    category: product.tag,
    countryOfOrigin: "IN",
    // The business entity from the root layout
    brand: { "@id": `${BASE_URL}/#business` },
    isRelatedTo: PRODUCTS_LIST.filter((p) => p.slug !== slug).map((p) => ({
      "@id": `${BASE_URL}/products/${p.slug}#product`,
    })),
    additionalProperty: (product.variants[0]?.specs ?? []).map((kv) => ({
      "@type": "PropertyValue",
      name: kv.label,
      value: kv.value,
    })),
  };

  const structuredData = {
    ...page,
    "@graph": [
      { ...page["@graph"][0], mainEntity: { "@id": `${productUrl}#product` } },
      ...page["@graph"].slice(1),
      productData,
      faqJsonLd(product.faqs, path),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape "<" so data can never close the script tag early
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <TopBar />
      <Navbar />
      <RevealInit />
      <main
        id="main-content"
        className={styles.main}
      >
        <ProductHero
          name={product.name}
          tagline={product.tagline}
          description={product.description}
          image={product.image}
          imageAlt={product.imageAlt}
          breadcrumb={product.breadcrumb}
          tag={product.tag}
          specs={product.card.specs}
          highlights={product.variants[0]?.specs ?? []}
        />
        <ProductVariants
          variants={product.variants}
          background={product.specBackground}
        />
        <ProductGallery images={product.gallery} />
        <ProductFaq items={product.faqs} />
        <ProductRelated currentSlug={slug} />
        <ProductCTA productName={product.name} />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
