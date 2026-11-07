import { z } from "zod";
import { PRODUCTS_LIST } from "@/data/product";

// Shared by the contact form (client) and /api/contact (server), so the two
// can never disagree about what a valid enquiry is.

export const BUSINESS_TYPES = [
  "Bakery / Patisserie",
  "Restaurant / QSR",
  "Food Processing Company",
  "Sweet Shop / Confectionery",
  "FMCG / Retail Brand",
  "Paper Converter / Packaging Manufacturer",
  "Paper Dealer / Distributor",
  "Other",
] as const;

// Papers we sell that do not have a page yet. Once a product goes live in
// PRODUCTS_LIST it is picked up from there, so it never appears twice.
const WITHOUT_PAGE = [
  "One Side OGR Paper",
  "MG Poster Paper",
  "Bleached Kraft Paper",
];

export const PRODUCT_OPTIONS: readonly string[] = [
  ...new Set([...PRODUCTS_LIST.map(({ label }) => label), ...WITHOUT_PAGE]),
  "Multiple Products",
];

const oneOf = (options: readonly string[]) => (v: string) =>
  options.includes(v);

// Link to the enquiry form. With a product slug, the form opens with that
// product already selected (see productFromSlug).
export function quoteHref(slug?: string): string {
  return slug ? `/?product=${encodeURIComponent(slug)}#contact` : "/#contact";
}

// The form's product option for a slug from the link, or "" if it is unknown
export function productFromSlug(slug: string | null): string {
  const label = PRODUCTS_LIST.find((p) => p.slug === slug)?.label;
  return label && PRODUCT_OPTIONS.includes(label) ? label : "";
}

// Accepts "9876543210", "+91 98765 43210" or "098765-43210" and keeps the
// 10-digit number, so people are not rejected for typing a common format
const indianMobile = z
  .string()
  .trim()
  .transform((v) => v.replace(/\D/g, "").replace(/^(?:91|0)(?=\d{10}$)/, ""))
  .refine(
    (v) => v === "" || /^[6-9]\d{9}$/.test(v),
    "Enter a valid 10-digit mobile number",
  );

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),
  lastName: z.string().trim().max(50, "Last name is too long").optional(),
  phone: indianMobile.optional(),
  email: z.email("Enter a valid email address"),
  businessType: z
    .string()
    .refine(oneOf(BUSINESS_TYPES), "Please select your business type"),
  product: z.string().refine(oneOf(PRODUCT_OPTIONS), "Please select a product"),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be 1000 characters or fewer")
    .optional(),
  // Honeypot: real users never fill this in. Bots often do. Accepted here and
  // checked in /api/contact, so bots get a fake success instead of an error.
  website: z.string().max(200).optional(),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
