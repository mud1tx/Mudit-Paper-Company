import { PRODUCTS } from "@/data/product";
import { COMPANY } from "@/lib/config";
import type { FaqItem, Product } from "@/types/product";

// Read from the product data, so these answers can never disagree with it.
// variant picks a card by position, e.g. 1 for the second card.
const spec = (product: Product, label: string, variant = 0) =>
  product.variants[variant]?.specs.find((s) => s.label === label)?.value ?? "";

const GREASEPROOF = PRODUCTS["greaseproof-ogr-paper"];
const GLASSINE = PRODUCTS["glassine-paper"];

// Each answer opens with the direct answer, so search engines and AI
// assistants can quote it on its own
export const HOME_FAQS: readonly FaqItem[] = [
  {
    question: `What does ${COMPANY.name} supply?`,
    answer: `${COMPANY.name} is a specialty paper wholesaler and trader based in ${COMPANY.city}, India. We supply greaseproof (OGR) paper, One Side OGR paper, 2S glassine paper, MG poster paper, bleached kraft paper and 65mm ladoo katori paper liners. Our paper grades are supplied in sheet form to businesses, paper converters and packaging manufacturers.`,
  },
  {
    question: "Do you deliver specialty paper across India?",
    answer: `Yes. Based in ${COMPANY.city}, ${COMPANY.state}, we supply specialty paper to businesses across India. Share your required paper grade, GSM, sheet dimensions, quantity and delivery location to receive a quotation.`,
  },
  {
    question: "Are you a paper manufacturer or wholesaler?",
    answer: `${COMPANY.name} operates as a specialty paper wholesaler and trader, supplying businesses since ${COMPANY.foundedYear}. We focus on sourcing and supplying specialty paper grades according to customer requirements.`,
  },
  {
    question: "Which industries and businesses do you supply?",
    answer:
      "We supply paper converters, food packaging manufacturers, packaging businesses, FMCG companies, paper dealers, distributors and other businesses requiring specialty paper for packaging and converting applications.",
  },
  {
    question: "What GSM ranges and paper specifications do you offer?",
    answer: `We offer different GSM ranges depending on the paper grade. Double side OGR (greaseproof) paper is available in ${spec(GREASEPROOF, "GSM Range")}, one side OGR paper in ${spec(GREASEPROOF, "GSM Range", 1)}, glassine paper in ${spec(GLASSINE, "GSM Range")}, and ladoo katori paper liners in 65mm diameter. GSM and other specifications for MG poster paper and bleached kraft paper can be confirmed according to grade and availability. Refer to the individual product pages for specifications.`,
  },
  {
    question: "What is the difference between glassine and greaseproof paper?",
    answer:
      "Glassine is smooth, glossy and translucent, and is often chosen when appearance matters. Greaseproof (OGR) paper is chosen mainly for oil and grease resistance. Some buyers call both of them butter paper.",
    link: { href: "/butter-paper", label: "Read our butter paper guide" },
  },
  {
    question: "What is One Side OGR paper?",
    answer:
      "One Side OGR paper is an oil and grease resistant paper grade designed for applications requiring grease resistance on one side. It is used in food packaging and wrapping applications depending on the paper specification and intended use. Contact us for available GSM, specifications and sheet sizes.",
  },
  {
    question: "What is MG poster paper?",
    answer:
      "MG poster paper is a machine-glazed paper grade with a smooth, glazed finish on one side. It is used in various packaging and paper converting applications. Its suitability depends on GSM, surface properties and the intended end use.",
  },
  {
    question: "What is bleached kraft paper used for?",
    answer:
      "Bleached kraft paper is a white paper grade used in packaging, wrapping and converting applications. It is selected for its appearance, strength and suitability for different packaging requirements, depending on its GSM and specifications.",
  },
  {
    question: "Do you supply paper in sheets or reels?",
    answer:
      "We specialise in supplying paper in sheet form. Share your required GSM and sheet dimensions with us so we can check availability and suitable specifications.",
  },
  {
    question: "Do you provide printed or customised paper?",
    answer:
      "Our paper sheets are supplied plain and unprinted, so we do not offer printing on sheets. Ladoo katori and muffin cup liners can be custom printed with your logo. Customers looking for paper sheets for their own printing or converting requirements can share their specifications with us.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "The minimum order quantity depends on the paper grade, GSM, sheet size and availability. Contact us with your requirements and we will confirm the applicable MOQ.",
  },
  {
    question: "Can I get a sample before placing a bulk order?",
    answer:
      "Yes, samples are available. Request one through the enquiry form below, and mention the product, GSM or size you need.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send the enquiry form below, call us or message us on WhatsApp with the product, GSM, size, quantity and delivery location. We reply with a quote within 24 hours.",
  },
];
