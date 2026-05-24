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
    "Food-grade paper trader in Kanpur, India. Greaseproof paper, glassine paper, printed food paper and ladoo katori cup liners. Bulk supply across India.",
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
      "Mudit Paper Company — food-grade paper trader in Kanpur. Greaseproof, glassine, printed paper and ladoo katori liners. Bulk orders welcome.",
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
      "Food-grade paper trader in Kanpur — greaseproof, glassine, printed paper & ladoo katori liners. Bulk supply across India.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: COMPANY.name,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/og-image.jpg`,
      description:
        "Premium food-grade paper trader in Kanpur, India. Supplying greaseproof paper, glassine paper, printed food paper, and ladoo katori cup liners.",
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        addressLocality: COMPANY.city,
        addressRegion: COMPANY.state,
        postalCode: COMPANY.postalCode,
        addressCountry: COMPANY.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: COMPANY.geo.latitude,
        longitude: COMPANY.geo.longitude,
      },
      telephone: COMPANY.phone,
      email: COMPANY.email,
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
        opens: "10:00",
        closes: "18:00",
      },
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      sameAs: [...COMPANY.social, BASE_URL],
    },
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
