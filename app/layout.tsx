import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import { BASE_URL, COMPANY, THEME_COLOR } from "@/lib/config";
import { DEFAULT_OG_IMAGE, SITE_TITLE } from "@/lib/seo";
import { PRODUCTS_LIST } from "@/data/product";
import HashScroll from "@/components/layout/HashScroll";
import Analytics from "@/components/layout/Analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_DESCRIPTION = COMPANY.description;

// Set only for production builds, so local work is not counted. Vercel preview
// deployments are skipped too.
const GA_ID =
  process.env.VERCEL_ENV === "preview"
    ? undefined
    : process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  colorScheme: "light",
};

// Icons and the web manifest come from the file conventions in app/
// (favicon.ico, icon.png, apple-icon.png, manifest.ts), so they are not
// listed here. No canonical either: each page sets its own, otherwise
// every page would inherit "/" and point search engines at the homepage.
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${COMPANY.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: BASE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "business",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: COMPANY.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  // X falls back to the Open Graph title, description and image
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Search Console code from the environment. Not a secret (it is public in
  // the page HTML), but it must be set wherever the site is built, or the meta
  // tag disappears and Google can lose verification.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
  appleWebApp: {
    title: COMPANY.shortName,
  },
};

// ── Structured data ───────────────────────────────────────────────────────────
// The single definition of the business entity, rendered on every page.
// Other pages reference it by @id instead of redefining it.
const BUSINESS_ID = `${BASE_URL}/#business`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // WholesaleStore is a LocalBusiness and an Organization
      "@type": "WholesaleStore",
      "@id": BUSINESS_ID,
      name: COMPANY.name,
      alternateName: COMPANY.shortName,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.webp`,
      image: `${BASE_URL}/og-image.jpg`,
      description: SITE_DESCRIPTION,
      foundingDate: String(COMPANY.foundedYear),
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
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
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...COMPANY.hours.days],
        opens: COMPANY.hours.opens,
        closes: COMPANY.hours.closes,
      },
      areaServed: { "@type": "Country", name: "India" },
      // Helps search engines and AI tools link the business to its products
      knowsAbout: PRODUCTS_LIST.map(({ label }) => label),
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      contactPoint: COMPANY.phones.map((telephone) => ({
        "@type": "ContactPoint",
        telephone,
        email: COMPANY.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      })),
      sameAs: [
        ...Object.values(COMPANY.social),
        ...Object.values(COMPANY.marketplaces),
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BASE_URL,
      name: COMPANY.name,
      alternateName: COMPANY.shortName,
      inLanguage: "en-IN",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={poppins.variable}
      // Keeps the smooth scrolling from globals.css for in-page links, but
      // new pages open at the top instantly instead of sliding up
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Escape "<" so data can never close the script tag early
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="skipLink"
        >
          Skip to main content
        </a>
        {children}
        <HashScroll />
        {GA_ID && <Analytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
