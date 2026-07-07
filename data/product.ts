import { ProductMap, ProductListItem } from "@/types/product";

// ── All product data ──────────────────────────────────────────────────────────
export const PRODUCTS: ProductMap = {
  // ── 1. Greaseproof Paper ────────────────────────────────────────────────────
  "greaseproof-paper": {
    name: "OGR Greaseproof Paper",
    tagline: "Food-Safe. Grease-Resistant.",
    description:
      "OGR Greaseproof Paper is a premium food-contact paper engineered to provide an exceptional barrier against oils, fats, and moisture. Manufactured under strict food-safety standards, it is the trusted choice of bakeries, confectioneries, restaurants, and food processors across India.",
    image: "/images/greaseproof-paper/hero.webp",
    breadcrumb: "Greaseproof Paper",
    tag: "Food Grade Paper",
    instagramTag: "#greaseproof",
    keyValues: [
      { label: "GSM Range", value: "30 – 50 GSM", icon: "⚖️" },
      { label: "Kit Value", value: "3 – 7", icon: "🛡️" },
      { label: "Color", value: "White", icon: "🎨" },
      { label: "Printability", value: "Flexo / Offset", icon: "🖨️" },
      { label: "Width", value: "Custom Available", icon: "📐" },
      { label: "MOQ", value: "300 Kg / Sheets", icon: "📦" },
    ],
    features: [
      {
        title: "Superior Grease Barrier",
        icon: "🛡️",
        desc: "Engineered to resist penetration from oils, fats, and butter — keeps packaging clean and professional.",
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
      {
        label: "Bakeries & Cakes",
        image: "/images/greaseproof-paper/bakery.webp",
      },
      {
        label: "Sweet Shops & Mithai",
        image: "/images/greaseproof-paper/sweets-mithai.webp",
      },
      {
        label: "Burgers & Fast Food",
        image: "/images/greaseproof-paper/burger-wrapper.webp",
      },
      {
        label: "Frying & Baking",
        image: "/images/greaseproof-paper/frying-and-baking.webp",
      },
    ],
    gallery: [],
  },

  // ── 2. Glassine Paper ───────────────────────────────────────────────────────
  "glassine-paper": {
    name: "Glassine Paper",
    tagline: "Crystal Clear. Smooth Both Ways. Food Certified.",
    description:
      "Glassine Paper is a smooth, glossy, and translucent paper known for its exceptional resistance to air, grease, and moisture. Available in both One-Sided Smooth (1S) and Two-Sided Smooth (2S) variants, it is the preferred choice for premium food packaging, confectionery wrapping, and pharmaceutical applications. Its naturally dense surface provides a superior barrier without any coating.",
    image: "/images/glassine-paper/hero.webp",
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
      {
        label: "Chocolate & Candy Wrapping",
        image: "/images/glassine-paper/chocolate-packaging.webp",
      },
      {
        label: "Industrial packaging",
        image: "/images/glassine-paper/industrial-packaging.webp",
      },
      {
        label: "Premium Gift Wrapping",
        image: "/images/glassine-paper/premium-gift-wrapping.webp",
      },
      {
        label: "Pharmaceutical packaging",
        image: "/images/glassine-paper/pharmaceutical-packaging.webp",
      },
    ],
    gallery: [],
  },

  // ── 3. Printed Food Grade Paper ─────────────────────────────────────────────
  "printed-food-paper": {
    name: "Printed Greaseproof & Glassine Paper",
    tagline: "Your Brand. Your Design. Food Safe.",
    description:
      "Transform your food packaging into a powerful branding tool with our custom printed greaseproof and glassine paper. Whether you need a simple single-colour logo or a full multi-colour decorative design, we print on any GSM to match your exact requirement. Perfect for bakeries, sweet shops, restaurants, and FMCG brands that want packaging which looks as good as the food inside.",
    image: "/images/printed-food-paper/brand-packaging.webp",
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
      {
        label: "Branded Bakery Wrapping",
        image: "/images/printed-food-paper/branded-bakery.webp",
      },
      {
        label: "Custom Sweet Cup Lining",
        image: "/images/printed-food-paper/sweet-cup.webp",
      },
      {
        label: "Restaurant Burger Wraps",
        image: "/images/printed-food-paper/burger-wrap.webp",
      },
      {
        label: "FMCG Brand Packaging",
        image: "/images/printed-food-paper/brand-packaging.webp",
      },
    ],
    gallery: [],
  },

  // ── 4. Ladoo Katori & Muffin Cup Liner ──────────────────────────────────────
  "ladoo-katori-muffin-cup-liner": {
    name: "Ladoo Katori & Muffin Cup Liner",
    tagline: "Perfect Shape. Food Safe. Plain to Printed.",
    description:
      "Our Ladoo Katori and Muffin Cup Liners are premium food-grade paper cups designed to hold, present, and protect sweets, muffins, cupcakes, and dry fruits beautifully. Available in plain white to full multi-colour custom printed designs, and in any size from 65mm to 100mm diameter. Currently available in circular shape, these liners are the go-to choice for mithai shops, bakeries, caterers, and FMCG sweet brands across India.",
    image: "/images/ladoo-katori/hero.webp",
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
      {
        label: "Muffin & Cupcake Liner",
        image: "/images/ladoo-katori/muffin-liner.webp",
      },
      {
        label: "Ladoo & Mithai Katori",
        image: "/images/ladoo-katori/mithai-katori.webp",
      },
      {
        label: "Colored Ladoo & Mithai Katori",
        image: "/images/ladoo-katori/colored-mithai-katori.webp",
      },
      {
        label: "Festive Gift Hampers",
        image: "/images/ladoo-katori/gift-hamper.webp",
      },
    ],

    gallery: [],
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
