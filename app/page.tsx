import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/home/Hero/Hero";
import Marquee from "@/components/home/Marquee/Marquee";
import About from "@/components/home/About/About";
import Products from "@/components/home/Products/Products";
import WhyUs from "@/components/home/WhyUs/WhyUs";
import Industries from "@/components/home/Industries/Industries";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import Footer from "@/components/layout/Footer/Footer";
import Contact from "@/components/home/Contact/Contact";
import { BASE_URL, COMPANY } from "@/lib/config";
import { PRODUCTS_LIST } from "@/data/product";
import RevealInit from "@/components/RevealInit";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  description:
    "Mudit Paper Company is a trusted food-grade paper trader in Kanpur, India. We supply FSSAI certified greaseproof paper, glassine paper, printed food paper, golden foil laminated paper, and ladoo katori cup liners to bakeries, sweet shops, restaurants, and FMCG brands across India. Bulk orders available.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: COMPANY.name,
    url: BASE_URL,
    title: "Mudit Paper Company – Food Grade Paper Trader | Kanpur, India",
    description:
      "FSSAI certified food-grade paper products — greaseproof paper, glassine paper, printed paper & ladoo katori liners. Trusted supplier for bakeries, sweet shops & FMCG brands across India.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Mudit Paper Company – Food Grade Paper Trader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudit Paper Company – Food Grade Paper Trader | Kanpur, India",
    description:
      "FSSAI certified food-grade paper — greaseproof, glassine, printed paper & ladoo katori liners. Bulk supplier across India.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: COMPANY.name, // ← from config
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/og-image.jpg`,
      description:
        "Food grade paper trader in Kanpur, India. Supplying FSSAI certified greaseproof paper, glassine paper, printed food paper, and ladoo katori cup liners.",
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address, // ← from config
        addressLocality: "Kanpur",
        addressRegion: "Uttar Pradesh",
        postalCode: COMPANY.postalCode, // ← from config
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.4499",
        longitude: "80.3319",
      },
      telephone: COMPANY.phone, // ← from config
      email: COMPANY.email, // ← from config
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      sameAs: COMPANY.social, // ← from config
    },
    // Product list auto-generated from data — no manual maintenance needed
    {
      "@type": "ItemList",
      name: "Food Grade Paper Products",
      url: `${BASE_URL}/#products`,
      itemListElement: PRODUCTS_LIST.map((p, i) => ({
        // ← auto from data
        "@type": "ListItem",
        position: i + 1,
        name: p.label,
        url: `${BASE_URL}/products/${p.slug}`,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
