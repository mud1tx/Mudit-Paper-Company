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
    "Mudit Paper Company is a leading food-grade paper trader based in Kanpur, India. We supply FSSAI certified greaseproof paper, glassine paper, printed food paper, and ladoo katori cup liners to bakeries, restaurants, sweet shops, and FMCG brands across India.",
  keywords: [
    "food grade paper",
    "greaseproof paper",
    "glassine paper",
    "printed greaseproof paper",
    "ladoo katori",
    "muffin cup liner",
    "food grade paper trader",
    "FSSAI certified paper",
    "food packaging paper India",
    "paper trader Kanpur",
    "food paper supplier India",
    "bakery paper",
    "sweet shop paper",
  ],
  authors: [{ name: COMPANY.name, url: BASE_URL }], // ← COMPANY.name
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
      "FSSAI certified food-grade paper products — greaseproof paper, glassine paper, printed paper, ladoo katori liners. Trusted by bakeries, sweet shops & FMCG brands across India.",
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
      "FSSAI certified food-grade paper products. Greaseproof, glassine, printed paper & cup liners. Supplier across India.",
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
  "@type": "Organization",
  name: COMPANY.name, // ← from config
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Food grade paper trader based in Kanpur, India. Supplying FSSAI certified greaseproof paper, glassine paper, and food packaging materials.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY.phone, // ← from config
    email: COMPANY.email, // ← add email
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: COMPANY.social, // ← from config
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
