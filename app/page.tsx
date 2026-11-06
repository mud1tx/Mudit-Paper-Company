import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar/TopBar";
import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/home/Hero/Hero";
import Marquee from "@/components/home/Marquee/Marquee";
import About from "@/components/home/About/About";
import Products from "@/components/home/Products/Products";
import WhyUs from "@/components/home/WhyUs/WhyUs";
import Industries from "@/components/home/Industries/Industries";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import Footer from "@/components/layout/Footer/Footer";
import Faq from "@/components/home/Faq/Faq";
import Contact from "@/components/home/Contact/Contact";
import { BASE_URL } from "@/lib/config";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { HOME_FAQS } from "@/data/home-faq";
import { PRODUCTS_LIST } from "@/data/product";
import RevealInit from "@/components/RevealInit";
import BackToTop from "@/components/ui/BackToTop";

// No title: the home page uses the layout's default SITE_TITLE
export const metadata: Metadata = pageMetadata({ path: "/" });

// The business itself is defined once in the root layout (@id /#business).
// This page only adds the product list and FAQs, linked to that business.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/#products`,
      name: "Specialty Paper Products",
      url: `${BASE_URL}/#products`,
      numberOfItems: PRODUCTS_LIST.length,
      itemListElement: PRODUCTS_LIST.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.label,
        url: `${BASE_URL}/products/${p.slug}`,
      })),
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    faqJsonLd(HOME_FAQS, "/"),
  ],
};

export default function Home() {
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
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Industries />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
