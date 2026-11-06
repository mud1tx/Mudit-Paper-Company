import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/config";
import { PRODUCTS, PRODUCTS_LIST } from "@/data/product";
import { PAGE_UPDATED } from "@/lib/seo";
import { HERO_SLIDES } from "@/components/home/Hero/Hero";

// Google ignores changeFrequency and priority, so they are left out.
// lastModified uses the real change dates from PAGE_UPDATED, and images
// help product photos show up in Google Images.
const absolute = (path: string) => `${BASE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: PAGE_UPDATED.home,
      images: HERO_SLIDES.map(({ src }) => absolute(src)),
    },

    ...PRODUCTS_LIST.map(({ slug }) => {
      const product = PRODUCTS[slug];
      return {
        url: absolute(`/products/${slug}`),
        lastModified: product.updated ?? PAGE_UPDATED.products,
        images: [
          product.image,
          ...product.gallery.map((g) => g.src),
        ].map(absolute),
      };
    }),

    {
      url: absolute("/butter-paper"),
      lastModified: PAGE_UPDATED.butterPaper,
    },
    {
      url: absolute("/privacy-policy"),
      lastModified: PAGE_UPDATED.privacy,
    },
    {
      url: absolute("/terms-of-use"),
      lastModified: PAGE_UPDATED.terms,
    },
  ];
}
