export interface KeyValue {
  readonly label: string;
  readonly value: string;
}

// One card on the product page: title, spec table and two bullet lists.
// A product with several grades or types lists one each.
export interface ProductVariant {
  readonly name: string;
  readonly specs: readonly KeyValue[];
  readonly applications: readonly string[];
  readonly features: readonly string[];
}

export interface GalleryImage {
  readonly src: string;
  /** Shown under the photo */
  readonly caption: string;
  /** Describes what the photo actually shows */
  readonly alt: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
  readonly link?: { readonly href: string; readonly label: string };
}

// Short version of a product shown on the home page card
export interface ProductCard {
  readonly tag: string;
  readonly summary: string;
  readonly specs: readonly string[];
}

export interface Product {
  readonly name: string;
  /** Other names buyers search for, e.g. "Butter Paper" */
  readonly alternateNames?: readonly string[];
  readonly tagline: string;
  readonly description: string;
  readonly image: string;
  /** Describes what the photo actually shows */
  readonly imageAlt: string;
  readonly card: ProductCard;
  readonly breadcrumb: string;
  readonly tag: string;
  readonly variants: readonly ProductVariant[];
  readonly gallery: readonly GalleryImage[];
  readonly faqs: readonly FaqItem[];
  /** ISO date this product's content last changed. Defaults to PAGE_UPDATED. */
  readonly updated?: string;
  /** Background behind the spec cards. Defaults to /images/spec-bg.webp */
  readonly specBackground?: string;
}

export interface ProductListItem {
  readonly slug: string;
  readonly label: string;
}

// ── Utility types ─────────────────────────────────────────────────────────────

// Use when you need to look up products by slug
export type ProductMap = Record<string, Product>;
