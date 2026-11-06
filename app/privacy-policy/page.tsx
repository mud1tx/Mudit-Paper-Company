import LegalPage from "@/components/legal/LegalPage";
import { COMPANY, BASE_URL } from "@/lib/config";
import { formatPhone } from "@/lib/format";
import { PAGE_UPDATED, pageMetadata } from "@/lib/seo";
import type { ContactDetail, LegalSection } from "@/types/legal";

// The person who handles privacy questions and grievances
const GRIEVANCE_OFFICER = "Mudit Agarwal";

const TITLE = "Privacy Policy";
const PATH = "/privacy-policy";
const DESCRIPTION = `How ${COMPANY.name} collects, uses and protects personal information submitted through our website.`;

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

// Grievance contact details, shown with working links in the last section
const CONTACT_DETAILS: readonly ContactDetail[] = [
  { label: "Business", value: COMPANY.name },
  { label: "Privacy Contact", value: GRIEVANCE_OFFICER },
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
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `${COMPANY.name} ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose and protect personal information when you visit ${BASE_URL} or contact us through our website.`,
      "This policy applies to personal information submitted through our website, including information provided through enquiry forms. We handle personal information in accordance with applicable Indian law.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "When you submit an enquiry through our website, we may collect the information you choose to provide, including:",
    ],
    list: [
      "Name",
      "Email address",
      "Mobile number, if provided",
      "Business or organisation type, if requested on the form",
      "Paper product or grade of interest",
      "Product specifications, quantity requirements and other details included in your message",
    ],
    closing:
      "Please provide only information relevant to your enquiry. We do not ask you to submit passwords, payment card details or other sensitive information through our enquiry form.",
  },
  {
    id: "how-we-collect",
    title: "How We Collect Information",
    paragraphs: [
      "We collect information directly from you when you complete an enquiry form, email us, telephone us or otherwise contact our business.",
      "Our website and hosting infrastructure may also process limited technical information, such as IP address, browser type, device information and server logs, where generated or required for website operation, security and troubleshooting.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information you provide for legitimate business purposes related to your enquiry, including to:",
    ],
    list: [
      "Respond to questions and product enquiries",
      "Understand your required paper grade, GSM, size, quantity and application",
      "Prepare quotations and discuss pricing or availability",
      "Coordinate sample requests, where applicable",
      "Communicate about orders or business transactions arising from your enquiry",
      "Maintain business records and comply with applicable legal obligations",
      "Protect the website and investigate suspected misuse or security issues",
    ],
    closing:
      "We do not sell your personal information. We do not use enquiry details for unrelated marketing unless we have an appropriate lawful basis to do so.",
  },
  {
    id: "sharing",
    title: "Disclosure and Third-Party Services",
    paragraphs: [
      "We may share relevant information with service providers who help us operate our website or handle enquiries, such as our website hosting provider, email delivery provider and website analytics provider (Google Analytics).",
      "These providers may process information on our behalf in connection with their services and under the terms and privacy practices applicable to those services.",
      "We may also disclose information where reasonably necessary to comply with applicable law, respond to lawful requests, protect our rights or address security concerns.",
      "We do not sell personal information to third parties.",
    ],
  },
  {
    id: "storage-security",
    title: "Data Storage and Security",
    paragraphs: [
      "Enquiry information may be stored in our business email account and in systems used to operate our website and deliver messages. Access is intended to be limited to people who need the information for legitimate business purposes.",
      "We take reasonable measures appropriate to our business and the nature of the information to help protect it against unauthorised access, loss, misuse or disclosure.",
      "No method of electronic transmission or storage can be guaranteed to be completely secure. We therefore cannot guarantee absolute security.",
    ],
  },
  {
    id: "retention",
    title: "How Long We Retain Information",
    paragraphs: [
      "We retain personal information for as long as reasonably necessary to respond to your enquiry, manage any resulting business relationship, maintain relevant business records, resolve disputes and meet applicable legal requirements.",
      "When information is no longer reasonably required for these purposes, we take appropriate steps to delete it or otherwise dispose of it, subject to applicable legal and record-retention obligations.",
    ],
  },
  {
    id: "your-choices",
    title: "Your Privacy Choices and Requests",
    paragraphs: [
      "You may contact us to ask about the personal information you have submitted to us or to request correction or deletion, where applicable law permits.",
      "You may also ask us to stop sending optional communications that you no longer wish to receive. We may need to retain certain information where required by law or where it is reasonably necessary to maintain business records or resolve disputes.",
      "We may need to verify your identity and clarify your request before taking action. We will handle requests in accordance with applicable law.",
    ],
    closing: `To make a privacy request, contact us at ${COMPANY.email}.`,
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    paragraphs: [
      "Our website may use cookies or similar technologies that are necessary for its operation, security and performance. These technologies may store or access limited information on your device.",
      "We use Google Analytics to understand how visitors use our website, so that we can improve it. It uses cookies to collect information such as the pages you visit, how you reached our website, your approximate location, your device and browser, and whether you clicked our contact links or submitted an enquiry. We do not send your name, email address, phone number or message to Google Analytics.",
      "You can block or delete cookies in your browser settings, or install Google's Analytics opt-out browser add-on, available at tools.google.com/dlpage/gaoptout.",
    ],
  },
  {
    id: "external-links",
    title: "External Websites",
    paragraphs: [
      "Our website may contain links to third-party websites or services. We do not control their content, security or privacy practices. If you visit an external website, please review its privacy policy before providing personal information.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    paragraphs: [
      "Our website is intended for business and professional enquiries and is not designed to solicit information from children. If you believe a child has submitted personal information to us, please contact us so that we can review the matter and take appropriate action where necessary.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our business, website, service providers or applicable legal requirements. The revised version will be published on this page with an updated date.",
      "We encourage visitors to review this page periodically to stay informed about our privacy practices.",
    ],
  },
  {
    id: "contact",
    title: "Contact and Privacy Grievances",
    paragraphs: [
      "If you have a question, concern or complaint about this Privacy Policy or the handling of your personal information, please contact:",
    ],
    details: CONTACT_DETAILS,
    closing:
      "Please describe your concern clearly so that we can review it and respond appropriately in accordance with applicable law.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      updated={PAGE_UPDATED.privacy}
      sections={SECTIONS}
    />
  );
}
