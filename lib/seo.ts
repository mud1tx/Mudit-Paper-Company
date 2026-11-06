import type { Metadata } from "next";
import { BASE_URL, COMPANY } from "@/lib/config";

export const SITE_TITLE = `Specialty Paper Wholesaler in India | ${COMPANY.name}`;

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${COMPANY.name}, specialty paper wholesaler in India`,
} as const;

type OgImage = {
  readonly url: string;
  readonly width?: number;
  readonly height?: number;
  readonly alt: string;
};

type PageSeo = {
  /** Page title without the company suffix. Omit to use SITE_TITLE. */
  readonly title?: string;
  readonly description?: string;
  /** Path from the site root, e.g. "/privacy-policy" */
  readonly path: string;
  readonly image?: OgImage;
};

// Next.js replaces a parent's openGraph instead of merging it when a page sets
// its own, so every page builds the full set here. Without this, pages share
// the home page's og:title and have no og:url.
export function pageMetadata({
  title,
  description = COMPANY.description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageSeo): Metadata {
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: COMPANY.name,
      url: path,
      title: title ? `${title} | ${COMPANY.name}` : SITE_TITLE,
      description,
      images: [image],
    },
  };
}

// Date each page's content last changed, sent to Google in the sitemap (and
// shown on the legal pages). Update a date only when that page's content
// actually changes: Google stops trusting lastmod if it moves on every deploy.
export const PAGE_UPDATED = {
  home: "2026-11-06",
  products: "2026-11-06",
  butterPaper: "2026-11-04",
  privacy: "2026-11-06",
  terms: "2026-10-28",
} as const;

// FAQPage JSON-LD node. Google rarely shows FAQ rich results for business
// sites now, but it gives search engines and AI assistants clear answers.
export function faqJsonLd(
  faqs: readonly {
    readonly question: string;
    readonly answer: string;
  }[],
  path: string,
) {
  return {
    "@type": "FAQPage",
    "@id": `${BASE_URL}${path}#faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

type Crumb = {
  readonly name: string;
  /** Path from the site root, e.g. "/privacy-policy" */
  readonly path: string;
};

// JSON-LD for a page that sits under the home page, e.g. Home › Privacy Policy.
// Shows the breadcrumb trail in Google results instead of the raw URL.
export function subPageJsonLd({
  name,
  description,
  path,
  dateModified,
  crumbs,
}: {
  readonly name: string;
  readonly description: string;
  readonly path: string;
  readonly dateModified?: string;
  readonly crumbs: readonly Crumb[];
}) {
  const url = `${BASE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: { "@id": `${BASE_URL}/#business` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...(dateModified && { dateModified }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${BASE_URL}${crumb.path}`,
        })),
      },
    ],
  };
}
