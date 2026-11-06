import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/config";

// Vercel sets VERCEL_ENV to "preview" or "development" on non-live deployments.
// Those get blocked entirely so Google never indexes a duplicate copy of the
// site on a *.vercel.app URL. On other hosts VERCEL_ENV is unset, so the live
// rules apply.
const isPreview =
  process.env.VERCEL_ENV !== undefined &&
  process.env.VERCEL_ENV !== "production";

export default function robots(): MetadataRoute.Robots {
  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Form endpoint only, nothing to index
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
