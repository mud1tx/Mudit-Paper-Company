import type { NextConfig } from "next";

// Sent with every page. Standard protections that Lighthouse "Best Practices"
// and security scanners check for; none of them change how the site looks.
const SECURITY_HEADERS = [
  // Browsers must use HTTPS for a year after the first visit
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  // Stops browsers guessing file types, e.g. running an image as a script
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Other sites cannot show this site inside a frame (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Other sites see the domain a visitor came from, never the full URL
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site never needs the camera, microphone or location
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Don't advertise "X-Powered-By: Next.js"
  poweredByHeader: false,

  images: {
    // AVIF is usually 20–30% smaller than WebP. Browsers that can't show it
    // get WebP automatically.
    formats: ["image/avif", "image/webp"],
  },

  // Old product URLs that may be indexed or linked from elsewhere (IndiaMART,
  // WhatsApp shares). Permanent redirects pass their Google ranking to the
  // new URL instead of showing a 404.
  async redirects() {
    return [
      {
        source: "/products/greaseproof-paper",
        destination: "/products/greaseproof-ogr-paper",
        permanent: true,
      },
      {
        // Product no longer offered
        source: "/products/printed-food-paper",
        destination: "/",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
