import { PRODUCTS, PRODUCTS_LIST } from "@/data/product";
import { BASE_URL, COMPANY } from "@/lib/config";

// Plain-text summary of the site for AI tools, following the llms.txt
// proposal. Built from the same data as the pages, so it never goes stale
// and a new product appears here by itself.
export const dynamic = "force-static";

export function GET() {
  const products = PRODUCTS_LIST.map(({ slug }) => {
    const { name, card } = PRODUCTS[slug];
    return `- [${name}](${BASE_URL}/products/${slug}): ${card.summary}`;
  });

  const body = [
    `# ${COMPANY.name}`,
    "",
    `> ${COMPANY.description}`,
    "",
    `Based in ${COMPANY.city}, ${COMPANY.state}, India. Supplying businesses since ${COMPANY.foundedYear}.`,
    "",
    "## Products",
    ...products,
    "",
    "## Guides",
    `- [What Is Butter Paper?](${BASE_URL}/butter-paper): Explains the term and compares glassine and greaseproof paper.`,
    "",
    "## Contact",
    `- [Enquiry form](${BASE_URL}/#contact)`,
    `- Email: ${COMPANY.email}`,
    `- Phone: ${COMPANY.phones.join(", ")}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
