import { ProductMap, ProductListItem } from "@/types/product";

// ── All product data ──────────────────────────────────────────────────────────
export const PRODUCTS: ProductMap = {
  // ── 1. Greaseproof Paper ────────────────────────────────────────────────────
  "greaseproof-paper": {
    name: "OGR Greaseproof Paper",
    tagline: "Food-Safe. Grease-Resistant. Certified.",
    description:
      "OGR Greaseproof Paper is a premium food-contact paper engineered to provide an exceptional barrier against oils, fats, and moisture. Manufactured under strict food-safety standards, it is the trusted choice of bakeries, confectioneries, restaurants, and food processors across India.",
    image: "/images/greaseproof-paper.jpeg",
    breadcrumb: "Greaseproof Paper",
    tag: "Food Grade · FSSAI Certified",
    instagramTag: "#greaseproof",
    keyValues: [
      { label: "Food Grade", value: "FSSAI Certified", icon: "🇮🇳" },
      { label: "GSM Range", value: "30 – 50 GSM", icon: "⚖️" },
      { label: "Origin", value: "Made in India", icon: "🏭" },
      { label: "MOQ", value: "50 Kg / Roll", icon: "📦" },
      { label: "Width", value: "Custom Available", icon: "📐" },
      { label: "Shelf Life", value: "24 Months", icon: "🗓️" },
    ],
    features: [
      {
        title: "Superior Grease Barrier",
        icon: "🛡️",
        desc: "Engineered to resist penetration from oils, fats, and butter — keeps packaging clean and professional.",
      },
      {
        title: "100% Food Safe",
        icon: "✅",
        desc: "FSSAI compliant with zero harmful chemicals. Safe for direct food contact at all temperatures.",
      },
      {
        title: "Consistent GSM",
        icon: "⚖️",
        desc: "Tight GSM tolerance across every roll ensures uniform performance and no surprises on your line.",
      },
      {
        title: "Moisture Resistant",
        icon: "💧",
        desc: "Resists moisture absorption, keeping food fresh and packaging intact even in humid environments.",
      },
      {
        title: "Printable Surface",
        icon: "🖨️",
        desc: "Available with custom printing for branding, logos, and product information.",
      },
      {
        title: "Eco-Friendly",
        icon: "🌿",
        desc: "Made from sustainably sourced wood pulp. Recyclable and biodegradable.",
      },
    ],
    applications: [
      { label: "Bakeries & Patisseries", icon: "🥐" },
      { label: "Burger & Sandwich Wrapping", icon: "🍔" },
      { label: "Fried Food Packaging", icon: "🍟" },
      { label: "Confectionery & Mithai", icon: "🍬" },
      { label: "Deli & Butcher Wrapping", icon: "🥩" },
      { label: "Food Trays & Liners", icon: "🍱" },
      { label: "FMCG Packaging Lines", icon: "🛒" },
      { label: "Catering & Food Service", icon: "🍽️" },
    ],
    gallery: [
      "/images/greaseproof/design-1.png",
      "/images/greaseproof/design-2.png",
    ],
  },

  // ── 2. Glassine Paper ───────────────────────────────────────────────────────
  "glassine-paper": {
    name: "Glassine Paper",
    tagline: "Crystal Clear. Smooth Both Ways. Food Certified.",
    description:
      "Glassine Paper is a smooth, glossy, and translucent paper known for its exceptional resistance to air, grease, and moisture. Available in both One-Sided Smooth (1S) and Two-Sided Smooth (2S) variants, it is the preferred choice for premium food packaging, confectionery wrapping, and pharmaceutical applications. Its naturally dense surface provides a superior barrier without any coating.",
    image: "/images/glassine-paper.jpeg",
    breadcrumb: "Glassine Paper",
    tag: "1S & 2S Smooth · Food Grade",
    instagramTag: "#glassine",
    keyValues: [
      { label: "Variants", value: "1S & 2S Smooth", icon: "✨" },
      { label: "GSM Range", value: "25 – 60 GSM", icon: "⚖️" },
      { label: "Finish", value: "Translucent", icon: "🔍" },
      { label: "Origin", value: "Made in India", icon: "🏭" },
      { label: "MOQ", value: "50 Kg / Roll", icon: "📦" },
      { label: "Shelf Life", value: "24 Months", icon: "🗓️" },
    ],
    features: [
      {
        title: "One-Sided Smooth (1S)",
        icon: "◑",
        desc: "Smooth on one side, slightly rough on the other. Ideal for wrapping where only one face is visible — cost-effective and widely used in bakeries and sweet shops.",
      },
      {
        title: "Two-Sided Smooth (2S)",
        icon: "⬜",
        desc: "Perfectly smooth on both sides. Premium finish for high-end confectionery, chocolate wrapping, and pharmaceutical packaging where both faces are visible.",
      },
      {
        title: "Natural Grease Barrier",
        icon: "🛡️",
        desc: "Dense paper structure provides grease resistance without any chemical coating — naturally safe for direct food contact.",
      },
      {
        title: "Translucent Appearance",
        icon: "🔍",
        desc: "Semi-transparent finish lets the product show through — perfect for premium packaging where visibility adds to the appeal.",
      },
      {
        title: "Air & Moisture Resistant",
        icon: "💧",
        desc: "Exceptional barrier against air and moisture keeps food fresh longer and maintains product quality during storage and transit.",
      },
      {
        title: "100% Food Safe",
        icon: "✅",
        desc: "FSSAI compliant. Zero harmful chemicals. Safe for direct contact with food at all stages of packaging.",
      },
    ],
    applications: [
      { label: "Chocolate & Candy Wrapping", icon: "🍫" },
      { label: "Mithai & Sweet Packaging", icon: "🍬" },
      { label: "Bakery & Dry Food Wrapping", icon: "🥐" },
      { label: "Pharmaceutical Packaging", icon: "💊" },
      { label: "Interleaving Sheets", icon: "📋" },
      { label: "Release Liner Applications", icon: "🏷️" },
      { label: "Premium Gift Wrapping", icon: "🎁" },
      { label: "FMCG Inner Packaging", icon: "🛒" },
    ],
    gallery: ["/images/glassine/design-1.png", "/images/glassine/design-2.png"],
  },

  // ── 3. Printed Food Grade Paper ─────────────────────────────────────────────
  "printed-food-paper": {
    name: "Printed Greaseproof & Glassine Paper",
    tagline: "Your Brand. Your Design. Food Safe.",
    description:
      "Transform your food packaging into a powerful branding tool with our custom printed greaseproof and glassine paper. Whether you need a simple single-colour logo or a full multi-colour decorative design, we print on any GSM to match your exact requirement. Perfect for bakeries, sweet shops, restaurants, and FMCG brands that want packaging which looks as good as the food inside.",
    image: "/images/printed-food-paper.jpeg",
    breadcrumb: "Printed Greaseproof / Glassine",
    tag: "Custom Print · Single & Multi Colour",
    instagramTag: "#printedpaper",
    keyValues: [
      { label: "Print Type", value: "Single to Multi Colour", icon: "🎨" },
      { label: "Base Paper", value: "Greaseproof / Glassine", icon: "📄" },
      { label: "GSM", value: "Any GSM Available", icon: "⚖️" },
      { label: "MOQ", value: "As Per Requirement", icon: "📦" },
      { label: "Turnaround", value: "Custom Lead Time", icon: "⏱️" },
      { label: "Origin", value: "Made in India", icon: "🏭" },
    ],
    features: [
      {
        title: "Single Colour Printing",
        icon: "🖊️",
        desc: "Clean, minimal single-colour prints — ideal for logos, brand names, and simple patterns. Cost-effective for large volume orders.",
      },
      {
        title: "Multi Colour Printing",
        icon: "🎨",
        desc: "Full multi-colour designs with vibrant, food-safe inks. From intricate patterns to photographic-quality prints — bring any design to life.",
      },
      {
        title: "Print on Any GSM",
        icon: "⚖️",
        desc: "We print on any GSM of greaseproof or glassine paper — from lightweight 25 GSM wrapping sheets to heavy 90 GSM packaging paper.",
      },
      {
        title: "Food Safe Inks",
        icon: "✅",
        desc: "All inks used are food-grade certified and FSSAI compliant. Safe for direct and indirect food contact — no migration, no risk.",
      },
      {
        title: "Custom Sizes & Rolls",
        icon: "📐",
        desc: "Available in custom widths, sheet sizes, and roll lengths to fit your exact packaging line or wrapping requirement.",
      },
      {
        title: "Grease & Moisture Resistant",
        icon: "🛡️",
        desc: "Print quality stays intact even under greasy and moist food conditions — your branding remains sharp and clean throughout.",
      },
    ],
    applications: [
      { label: "Branded Bakery Wrapping", icon: "🥐" },
      { label: "Custom Sweet Box Lining", icon: "🍬" },
      { label: "Restaurant Burger Wraps", icon: "🍔" },
      { label: "Festive & Wedding Packaging", icon: "🎁" },
      { label: "Chocolate & Candy Wrapping", icon: "🍫" },
      { label: "FMCG Brand Packaging", icon: "🛒" },
      { label: "Catering & Tray Lining", icon: "🍽️" },
      { label: "Dry Fruit Gift Packaging", icon: "🥜" },
    ],
    gallery: ["/images/printed/design-1.png", "/images/printed/design-2.png"],
  },

  // ── 4. Ladoo Katori & Muffin Cup Liner ──────────────────────────────────────
  "ladoo-katori-muffin-cup-liner": {
    name: "Ladoo Katori & Muffin Cup Liner",
    tagline: "Perfect Shape. Food Safe. Plain to Printed.",
    description:
      "Our Ladoo Katori and Muffin Cup Liners are premium food-grade paper cups designed to hold, present, and protect sweets, muffins, cupcakes, and dry fruits beautifully. Available in plain white to full multi-colour custom printed designs, and in any size from 65mm to 100mm diameter. Currently available in circular shape, these liners are the go-to choice for mithai shops, bakeries, caterers, and FMCG sweet brands across India.",
    image: "/images/ladoo-katori.jpeg",
    breadcrumb: "Ladoo Katori / Muffin Cup Liner",
    tag: "Plain to Multi Colour · 65–100mm",
    instagramTag: "#ladookatori",
    keyValues: [
      { label: "Shape", value: "Circle", icon: "⭕" },
      { label: "Size Range", value: "65mm – 100mm", icon: "📐" },
      { label: "Print", value: "Plain to Multi Colour", icon: "🎨" },
      { label: "Material", value: "Food Grade Paper", icon: "✅" },
      { label: "MOQ", value: "As Per Requirement", icon: "📦" },
      { label: "Origin", value: "Made in India", icon: "🏭" },
    ],
    features: [
      {
        title: "Any Size from 65–100mm",
        icon: "📐",
        desc: "Available in any diameter between 65mm and 100mm — perfectly sized for small ladoos, large katoris, standard muffins, and cupcakes.",
      },
      {
        title: "Plain to Multi Colour Print",
        icon: "🎨",
        desc: "Choose from plain white, single colour, or full multi-colour custom printed designs. Add your logo, brand name, or festive pattern to every cup.",
      },
      {
        title: "100% Food Safe",
        icon: "✅",
        desc: "Made from FSSAI certified food-grade paper. Safe for direct contact with sweets, dry fruits, muffins, and all food items.",
      },
      {
        title: "Grease Resistant",
        icon: "🛡️",
        desc: "Specially treated to resist oil and moisture from sweets and baked goods — keeps the liner clean and presentable till the last bite.",
      },
      {
        title: "Sturdy & Shape Retaining",
        icon: "💪",
        desc: "Firm enough to hold shape when filled with heavy mithai or dense muffins — no collapsing, no leaning, perfect presentation every time.",
      },
      {
        title: "Ideal for Gifting & Display",
        icon: "🎁",
        desc: "Printed liners instantly elevate the look of mithai boxes, gift hampers, bakery displays, and catering trays — branding that works for you.",
      },
    ],
    applications: [
      { label: "Ladoo & Mithai Katori", icon: "🍬" },
      { label: "Muffin & Cupcake Liner", icon: "🧁" },
      { label: "Dry Fruit Cup Packaging", icon: "🥜" },
      { label: "Sweet Shop Display", icon: "🏪" },
      { label: "Wedding & Event Catering", icon: "🎊" },
      { label: "Festive Gift Hampers", icon: "🎁" },
      { label: "Bakery & Patisserie", icon: "🥐" },
      { label: "FMCG Sweet Packaging", icon: "🛒" },
    ],
    gallery: [
      "/images/ladoo-katori/design-1.png",
      "/images/ladoo-katori/design-2.png",
    ],
  },
} as const;

// ── Product list for Navbar dropdown and home page ────────────────────────────
export const PRODUCTS_LIST: readonly ProductListItem[] = [
  { slug: "greaseproof-paper", label: "Greaseproof Paper", icon: "🧈" },
  { slug: "glassine-paper", label: "Glassine Paper", icon: "✨" },
  {
    slug: "printed-food-paper",
    label: "Printed Greaseproof / Glassine",
    icon: "🖨️",
  },
  {
    slug: "ladoo-katori-muffin-cup-liner",
    label: "Ladoo Katori / Muffin Cup Liner",
    icon: "🧁",
  },
] as const;
