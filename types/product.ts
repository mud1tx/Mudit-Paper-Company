// src/types/product.ts

export interface KeyValue {
  readonly label: string;
  readonly value: string;
  readonly icon: string;
}

export interface Feature {
  readonly title: string;
  readonly desc: string;
  readonly icon: string;
}

export interface Application {
  readonly label: string;
  readonly icon: string;
}

export interface Product {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly image: string;
  readonly breadcrumb: string;
  readonly tag: string;
  readonly keyValues: readonly KeyValue[];
  readonly features: readonly Feature[];
  readonly applications: readonly Application[];
  readonly gallery: readonly string[];
  readonly instagramTag?: string;
}

export interface ProductListItem {
  readonly slug: string;
  readonly label: string;
  readonly icon: string;
}

// ── Utility types ─────────────────────────────────────────────────────────────

// Use when you need just name + image (e.g. home page product cards)
export type ProductSummary = Pick<
  Product,
  "name" | "image" | "tagline" | "tag"
>;

// Use when you need to look up products by slug
export type ProductMap = Record<string, Product>;
