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
      `${product.name} manufacturer`,
      `food grade ${product.name}`,
      `FSSAI certified ${product.name}`,
      "food grade paper",
      "food packaging paper India",
      "Mudit Paper Company",
    ],
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: productUrl,
      siteName: "Mudit Paper Company",
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
            // ← add address
            "@type": "PostalAddress",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
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
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Is ${product.name} food safe?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, our ${product.name} is FSSAI certified and food-grade safe for direct food contact.`,
            },
          },
          {
            "@type": "Question",
            name: `Where can I buy ${product.name} in India?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `You can buy ${product.name} from Mudit Paper Company, based in Kanpur, India. We supply across India. Contact us at ${BASE_URL} for bulk orders.`,
            },
          },
          {
            "@type": "Question",
            name: `What is the minimum order quantity for ${product.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Minimum order quantity for ${product.name} is as per requirement. Contact Mudit Paper Company for custom orders and bulk pricing.`,
            },
          },
          // ← add two more FAQs for better coverage
          {
            "@type": "Question",
            name: `Does Mudit Paper Company supply ${product.name} in bulk?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, Mudit Paper Company supplies ${product.name} in bulk quantities across India. We cater to bakeries, sweet shops, restaurants, and FMCG brands. Contact us for bulk pricing.`,
            },
          },
          {
            "@type": "Question",
            name: `Is ${product.name} available in custom sizes?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, ${product.name} is available in custom widths, GSM, and roll sizes as per your requirement. Contact Mudit Paper Company for custom orders.`,
            },
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
      <Footer />
    </>
  );
}
