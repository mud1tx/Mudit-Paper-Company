import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { COMPANY, BASE_URL } from "@/lib/config";
import { formatPhone } from "@/lib/format";
import { PAGE_UPDATED, pageMetadata } from "@/lib/seo";
import type { ContactDetail, LegalSection } from "@/types/legal";

const TITLE = "Terms of Use";
const PATH = "/terms-of-use";
const DESCRIPTION = `Terms governing the use of the ${COMPANY.name} website and enquiry services.`;

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

// Contact details, shown with working links in the last section
const CONTACT_DETAILS: readonly ContactDetail[] = [
  { label: "Business", value: COMPANY.name },
  { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  {
    label: "Phone",
    value: formatPhone(COMPANY.phone),
    href: `tel:${COMPANY.phone}`,
  },
  { label: "Address", value: COMPANY.address },
];

const SECTIONS: readonly LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    paragraphs: [
      `Welcome to ${COMPANY.name}. These Terms of Use ("Terms") govern your access to and use of our website at ${BASE_URL} (the "Website"). By accessing or using the Website, you agree to these Terms.`,
      `The Website is operated by ${COMPANY.name}, based in ${COMPANY.city}, ${COMPANY.state}, India. If you do not agree with these Terms, please discontinue use of the Website.`,
      "These Terms govern the use of the Website only. Any separate terms agreed in writing for a quotation, sale or supply of products will govern the relevant business transaction as described below.",
    ],
  },
  {
    id: "use-of-website",
    title: "Permitted Use of the Website",
    paragraphs: [
      "You may use the Website for lawful purposes, including learning about our paper products, reviewing general product information and making genuine business enquiries.",
      "When using the Website, you agree not to:",
    ],
    list: [
      "Use the Website in violation of applicable law or the rights of others",
      "Submit false, misleading or fraudulent enquiries",
      "Attempt to gain unauthorised access to the Website, its systems or related accounts",
      "Interfere with the Website's security, availability or normal operation",
      "Upload or transmit malicious code or other harmful material",
      "Use automated tools to scrape, copy or extract Website content in a manner that is unauthorised or unlawful",
      "Misrepresent your identity, business or authority to act on behalf of another person or organisation",
    ],
    closing:
      "We may take reasonable steps to protect the Website against misuse, security threats and activities that violate these Terms or applicable law.",
  },
  {
    id: "website-information",
    title: "Website Information",
    paragraphs: [
      "The Website provides general information about our business, paper products and related services. We make reasonable efforts to keep this information accurate and up to date, but information may change and may not always reflect current availability or commercial conditions.",
      "Website content is provided for general information and should not be treated as a final quotation, technical guarantee, certification, or binding offer to supply products.",
      "Please contact us to confirm current product specifications, availability, pricing and other requirements before making a purchasing decision.",
    ],
  },
  {
    id: "product-information",
    title: "Product Specifications and Suitability",
    paragraphs: [
      "Paper specifications may include grade, grammage (GSM), dimensions, colour, finish, treatment, packaging and other characteristics. These details should be confirmed with us for the particular product and order.",
      "Product availability, specifications and prices may change without notice. Where applicable, the final agreed specifications will be recorded in the relevant written quotation, purchase order or order confirmation.",
      "Customers are responsible for communicating their intended application and relevant technical requirements before placing an order. Any specific requirements relating to food contact, regulatory compliance, certifications, performance or other specialised properties must be expressly confirmed in writing for the relevant product.",
      "Images, illustrations and product descriptions on the Website are indicative unless expressly stated otherwise. Actual appearance may vary depending on the product, grade, finish, lighting and display settings.",
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries and Quotations",
    paragraphs: [
      "You may use our Website or the contact details provided on it to enquire about products, request quotations or discuss your paper requirements.",
      "Submitting an enquiry does not create a binding order or guarantee that a product is available. Quotations may be subject to a validity period, minimum quantity, stock availability, technical specifications, payment conditions, taxes, freight charges and other stated terms.",
      "A quotation should be read together with any conditions expressly included in it. Please obtain written confirmation of material commercial and technical requirements before proceeding with an order.",
    ],
  },
  {
    id: "orders",
    title: "Orders and Business Transactions",
    paragraphs: [
      "Orders are subject to acceptance by the relevant parties and the terms agreed for the transaction. An enquiry, discussion or quotation alone does not necessarily constitute an accepted order.",
      "The applicable quotation, purchase order, order confirmation, invoice and any separate written agreement may set out the agreed product specifications, quantity, price, taxes, payment terms, delivery arrangements and other conditions.",
      "Where transaction documents conflict, the parties should resolve the conflict in writing. Specifically agreed transaction terms will take precedence over these general Website Terms to the extent of the conflict, subject to applicable law.",
      "These Website Terms do not replace any separate written agreement governing the sale or supply of products.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      `Unless otherwise indicated, original text, graphics, branding, logos and other content created for the Website are owned by ${COMPANY.name} or used with permission from the relevant rights holders. Such material may be protected by applicable intellectual property laws, including the Copyright Act, 1957, where applicable.`,
      "You may view the Website and refer to its content for personal or legitimate business evaluation. You must not reproduce, republish, distribute, modify or commercially exploit protected Website content without the necessary permission, except where permitted by applicable law.",
      "Third-party names, logos, trademarks and other materials remain the property of their respective owners. Their appearance on the Website does not imply endorsement or ownership by us.",
    ],
    closing:
      "To request permission to use our original Website content or branding, contact us using the details provided below.",
  },
  {
    id: "third-party-links",
    title: "Third-Party Websites and Services",
    paragraphs: [
      "The Website may contain links to third-party websites, platforms or services for convenience or additional information.",
      "These third-party services are operated independently and may have their own terms, privacy policies and practices. We do not control their content, availability or policies and are not responsible for them, except to the extent liability cannot be excluded under applicable law.",
      "Accessing a third-party website is at your discretion. We recommend reviewing its applicable terms and privacy policy before using the service or providing personal information.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    paragraphs: [
      "If you submit personal information through our Website, we handle it in accordance with our Privacy Policy and applicable law.",
      "Please avoid including unnecessary personal, confidential or sensitive information in general enquiry forms. Information required for a business enquiry should be limited to what is reasonably relevant to the request.",
    ],
    closing: (
      <>
        Please read our <Link href="/privacy-policy">Privacy Policy</Link> for
        further information about our handling of personal information.
      </>
    ),
  },
  {
    id: "availability",
    title: "Website Availability and Security",
    paragraphs: [
      "We aim to keep the Website available and functioning properly. However, access may occasionally be interrupted because of maintenance, technical issues, network failures, security measures or circumstances beyond our reasonable control.",
      "We may modify, suspend or discontinue part or all of the Website where reasonably necessary for maintenance, security, operational or business reasons.",
      "You are responsible for using appropriate security measures on your own devices and for ensuring that information you submit through the Website is accurate.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    paragraphs: [
      "The Website and its general content are provided for informational purposes and on an 'as available' basis.",
      "To the extent permitted by applicable law, we do not guarantee that the Website will be uninterrupted, error-free, completely secure or suitable for every particular purpose.",
      "Nothing in these Terms excludes any representation, warranty, right or obligation that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, we will not be liable for indirect or consequential losses arising solely from the use of, or inability to use, the Website.",
      "This section does not exclude or limit liability for matters where exclusion or limitation is prohibited by law, nor does it override the rights and obligations expressly agreed for a specific business transaction.",
      "Any claim arising from the sale or supply of products will be assessed under applicable law and the written terms governing the relevant transaction.",
    ],
  },
  {
    id: "indemnity",
    title: "Misuse of the Website",
    paragraphs: [
      "If your unlawful use of the Website or deliberate violation of these Terms causes loss or damage for which you are legally responsible, applicable remedies may be available under the law.",
      "Nothing in these Terms creates liability where it would not otherwise arise under applicable law or requires you to indemnify us for our own acts or omissions where such a requirement would be unlawful.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    paragraphs: [
      "We may revise these Terms to reflect changes to our Website, business operations or applicable law. The revised version will be published on this page with an updated 'Last updated' date.",
      "Changes will apply from the date indicated in the revised Terms, subject to applicable law. Changes to an existing business order will be governed by the agreement applicable to that transaction unless the parties agree otherwise in writing.",
      "We encourage you to review this page periodically.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    paragraphs: [
      `These Terms are governed by the laws of India. Subject to applicable law, disputes relating to these Website Terms may be brought before the courts having competent jurisdiction in ${COMPANY.city}, ${COMPANY.state}, India.`,
      "Nothing in this section gives a court jurisdiction that it would not otherwise have under applicable law.",
    ],
  },
  {
    id: "severability",
    title: "Severability",
    paragraphs: [
      "If any provision of these Terms is found to be invalid or unenforceable under applicable law, that provision will be treated to the extent necessary as severable from the remaining provisions. The remaining provisions will continue to apply to the extent legally permitted.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "If you have questions about these Terms or the use of our Website, you may contact us using the following details:",
    ],
    details: CONTACT_DETAILS,
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      updated={PAGE_UPDATED.terms}
      sections={SECTIONS}
    />
  );
}
