import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductKeyValues from "@/components/product/ProductKeyValues";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductGallery from "@/components/product/ProductGallery";
import ProductApplications from "@/components/product/ProductApplications";
import ProductCTA from "@/components/product/ProductCTA";
import { PRODUCTS, PRODUCTS_LIST } from "@/data/product";
import { BASE_URL, COMPANY } from "@/lib/config";
import styles from "@/components/product/product.module.css";
import RevealInit from "@/components/RevealInit";
import BackToTop from "@/components/ui/BackToTop";

export function generateStaticParams() {
  return PRODUCTS_LIST.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) return {};

  const productUrl = `${BASE_URL}/products/${slug}`;
  const productImage = `${BASE_URL}${product.image}`;

  return {
    title: product.name,
    description: product.description,
    keywords: [
      product.name,
      product.name.toLowerCase(),
      `${product.name} India`,
      `${product.name} Kanpur`,
      `buy ${product.name}`,
      `${product.name} supplier`,
      `${product.name} wholesaler`,
      `bulk ${product.name}`,
      `${product.name} manufacturer`,
      `food grade ${product.name}`,
      `food packaging paper India`,
      "food grade paper wholesaler",
      "paper wholesaler Kanpur",
      "Mudit Paper Company",
    ],
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: productUrl,
      siteName: COMPANY.name,
      title: `${product.name} – Food Grade Paper | Mudit Paper Company`,
      description: product.description,
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: `${product.name} – Mudit Paper Company`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} – Food Grade Paper | Mudit Paper Company`,
      description: product.description,
      images: [productImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) notFound();

  const productUrl = `${BASE_URL}/products/${slug}`;
  const productImage = `${BASE_URL}${product.image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}/#product`,
        name: product.name,
        description: product.description,
        image: productImage,
        url: productUrl,
        brand: {
          "@type": "Brand",
          name: COMPANY.name,
        },
        manufacturer: {
          "@type": "Organization",
          name: COMPANY.name,
          url: BASE_URL,
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: COMPANY.city,
            addressRegion: COMPANY.state,
            postalCode: COMPANY.postalCode,
            addressCountry: COMPANY.country,
          },
        },
        countryOfOrigin: "IN",
        offers: {
          "@type": "Offer",
          url: productUrl,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: COMPANY.name,
            url: BASE_URL,
          },
        },
        additionalProperty: product.keyValues.map((kv) => ({
          "@type": "PropertyValue",
          name: kv.label,
          value: kv.value,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${BASE_URL}/#products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: productUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
          breadcrumb={product.breadcrumb}
          tag={product.tag}
        />
        <ProductKeyValues items={product.keyValues} />
        <ProductFeatures items={product.features} />
        <ProductApplications items={product.applications} />
        <ProductGallery
          images={product.gallery}
          productName={product.name}
        />
        <ProductCTA productName={product.name} />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
