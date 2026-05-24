import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BASE_URL, COMPANY } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mudit Paper Company – Food Grade Paper Trader | Kanpur, India",
    template: "%s | Mudit Paper Company",
  },

  description:
    "Premium food-grade paper trader in Kanpur, India. Supplying greaseproof paper, glassine paper, printed food paper and ladoo katori cup liners to bakeries, sweet shops, restaurants and FMCG brands across India.",
  keywords: [
    // ── Core products ──
    "food grade paper",
    "greaseproof paper",
    "glassine paper",
    "printed greaseproof paper",
    "printed glassine paper",
    "ladoo katori",
    "ladoo katori paper",
    "ladoo katori cup liner",
    "muffin cup liner",
    "muffin liner paper",
    "food safe packaging paper",

    // ── Printed paper specific ──
    "single colour printed food paper",
    "multicolour printed food paper",
    "custom printed greaseproof paper",
    "custom printed glassine paper",
    "printed food grade paper India",
    "single to multicolour food paper",

    // ── Ladoo katori specific ──
    "ladoo katori supplier",
    "ladoo katori manufacturer",
    "paper katori for sweets",
    "mithai katori paper",
    "sweet cup liner India",
    "plain ladoo katori",
    "printed ladoo katori",

    // ── OGR / Oil specific ──
    "OGR paper",
    "oil greaseproof paper",
    "oil grease resistant paper",
    "oil resistant food paper",
    "OGR greaseproof paper",

    // ── Glassine specific ──
    "glassine paper",
    "glassine paper India",
    "1S glassine paper",
    "2S glassine paper",
    "one side smooth glassine paper",
    "two side smooth glassine paper",
    "single side smooth paper",
    "double side smooth paper",
    "1S smooth paper",
    "2S smooth paper",
    "glassine paper supplier India",
    "glassine paper wholesaler",

    // ── Business type ──
    "food grade paper trader",
    "food grade paper wholesaler",
    "paper trader Kanpur",
    "paper wholesaler Kanpur",
    "food paper supplier India",
    "bulk food grade paper",
    "wholesale greaseproof paper India",

    // ── Product specific ──
    "greaseproof paper supplier",
    "glassine paper India",
    "bakery paper",
    "sweet shop paper",

    // ── Location ──
    "food grade paper Kanpur",
    "food grade paper Uttar Pradesh",
    "paper supplier Uttar Pradesh",
    "food packaging paper UP",
    "paper trader UP India",
  ],
  authors: [{ name: COMPANY.name, url: BASE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: COMPANY.name,
    title: "Mudit Paper Company – Food Grade Paper Trader | Kanpur, India",
    description:
      "Mudit Paper Company is a trusted food-grade paper trader in Kanpur. Greaseproof paper, glassine paper, printed designs and ladoo katori liners. Bulk orders for bakeries, sweet shops and FMCG brands across India.",
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
    title: "Mudit Paper Company – Food Grade Paper Trader",
    description:
      "Food-grade paper trader in Kanpur — greaseproof, glassine, printed paper & ladoo katori liners. Bulk supply across India.",
    images: [`${BASE_URL}/og-image.jpg`],
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
  // verification: {
  //   google: "your-google-verification-code",  ← uncomment after Search Console setup
  // },
};

// ── Structured Data ───────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "WholesaleStore"],
  name: COMPANY.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Premium food-grade paper trader in Kanpur, India. Supplying greaseproof paper, glassine paper, printed food paper, and ladoo katori cup liners.",
  address: {
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.state,
    postalCode: COMPANY.postalCode,
    addressCountry: COMPANY.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [...COMPANY.social, BASE_URL],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('mpc-theme')||'light';var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',s==='system'?(d?'dark':'light'):s);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Mudit Paper Company"
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
