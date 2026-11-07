"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent } from "@/lib/analytics";

type Props = {
  readonly gaId: string;
};

// Which contact links count as an enquiry action, and what each is called
const CONTACT_LINKS = [
  {
    event: "click_whatsapp",
    matches: (href: string) => href.includes("wa.me/"),
  },
  { event: "click_call", matches: (href: string) => href.startsWith("tel:") },
  {
    event: "click_email",
    matches: (href: string) => href.startsWith("mailto:"),
  },
  {
    event: "click_instagram",
    matches: (href: string) => href.includes("instagram.com"),
  },
] as const;

// Google Analytics 4. Page views, including moves between pages without a full
// reload, come from GA4's enhanced measurement. This adds the contact clicks.
export default function Analytics({ gaId }: Props) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href");
      if (!link || !href) return;

      const contact = CONTACT_LINKS.find(({ matches }) => matches(href));
      if (!contact) return;

      // Only where on the page, never the visitor's details
      const place =
        link.closest("section[id]")?.id ??
        link.closest("footer, nav")?.tagName.toLowerCase() ??
        "page";
      trackEvent(contact.event, { link_location: place });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        // After the page has loaded, so it never slows the first view
        strategy="lazyOnload"
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
      >
        {`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}
