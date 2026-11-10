import type { ProductMap, ProductListItem } from "@/types/product";

const BUTTER_PAPER_LINK = {
  href: "/butter-paper",
  label: "Read our butter paper guide",
} as const;

// ── All product data ──────────────────────────────────────────────────────────
// Each product page shows: hero, photo gallery, one card per variant (spec
// table, applications, special features), then FAQs. Add a variant to a
// product's `variants` list to get another numbered card on its page.
export const PRODUCTS: ProductMap = {
  // ── 1. Greaseproof Paper ────────────────────────────────────────────────────
  "greaseproof-ogr-paper": {
    name: "Greaseproof (OGR) Paper",
    alternateNames: [
      "OGR Paper",
      "Oil and Grease Resistant Paper",
      "Double Side OGR Paper",
      "One Side OGR Paper",
      "Butter Paper",
    ],
    tagline: "Oil Resistant. Grease Resistant. Packaging Ready.",
    description:
      "Greaseproof (OGR, oil and grease resistant) paper resists oil and grease, making it suitable for food wrapping, lining and packaging. Some buyers also call it butter paper. Mudit Paper Company supplies double side OGR paper (32–50 GSM, kit value 3–7) and one side OGR paper (30–50 GSM) in sheets to food packaging businesses, paper converters and distributors across India.",
    image: "/images/greaseproof-paper/hero.webp",
    imageAlt:
      "Greaseproof paper lining a baking tray, with a roll of paper beside it",
    card: {
      tag: "Specialty Paper",
      summary:
        "Double side and one side OGR greaseproof paper sheets for food wrapping, lining and packaging.",
      specs: ["32–50 GSM", "Kit 3–7", "White", "Sheets", "Custom Size"],
    },
    breadcrumb: "Greaseproof (OGR) Paper",
    tag: "Oil & Grease Resistant Paper",
    specBackground: "/images/spec-bg-greaseproof.webp",
    variants: [
      {
        name: "Double Side OGR Paper",
        specs: [
          { label: "OGR Side", value: "Both Sides" },
          { label: "GSM Range", value: "32 – 50 GSM" },
          { label: "Kit Value", value: "3 – 7" },
          { label: "Colour", value: "White" },
          { label: "Supply Format", value: "Sheets" },
          { label: "Printability", value: "Flexo / Offset" },
          { label: "Sheet Size", value: "As Per Requirement" },
          { label: "MOQ", value: "Subject to Order Requirements" },
        ],
        applications: [
          "Food Wrapping",
          "Burger & Takeaway Wrapping",
          "Bakery Basket Liners",
          "Baking Tray Liners",
          "Food Service Packaging",
        ],
        features: [
          "Strong barrier against oils, fats and butter",
          "Kit value 3–7 to match the grease resistance you need",
          "Surface suited to flexo and offset printing by converters",
          "Sheets cut to your required size",
          "Bulk supply for paper converters, distributors and packaging businesses",
        ],
      },
      {
        name: "One Side OGR Paper",
        specs: [
          { label: "OGR Side", value: "One Side" },
          { label: "GSM Range", value: "30 – 50 GSM" },
          { label: "Finish", value: "One Side Smooth" },
          { label: "Colour", value: "White" },
          { label: "Supply Format", value: "Sheets" },
          { label: "Printability", value: "Flexo / Offset" },
          { label: "Sheet Size", value: "As Per Requirement" },
          { label: "MOQ", value: "Subject to Order Requirements" },
        ],
        applications: [
          "Food Wrapping",
          "Takeaway Food Packaging",
          "Bakery Liners",
          "Food Service Packaging",
        ],
        features: [
          "Oil and grease barrier on one side of the sheet",
          "Suited to food wrapping and packaging",
          "Sheets cut to your required size",
          "Bulk supply for food packaging businesses and paper converters",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/greaseproof-paper/bakery.webp",
        caption: "Bakery Basket Liners",
        alt: "Greaseproof paper lining a basket of croissants",
      },
      {
        src: "/images/greaseproof-paper/sweets-mithai.webp",
        caption: "Sweet Shops & Mithai",
        alt: "Greaseproof paper used in sweet shops and mithai preparation",
      },
      {
        src: "/images/greaseproof-paper/burger-wrapper.webp",
        caption: "Burger & Takeaway Wrapping",
        alt: "Burger wrapped in a sheet of greaseproof paper",
      },
      {
        src: "/images/greaseproof-paper/frying-and-baking.webp",
        caption: "Baking Tray Liners",
        alt: "Baking tray lined with white greaseproof paper",
      },
    ],
    faqs: [
      {
        question: "What is greaseproof (OGR) paper?",
        answer:
          "OGR stands for oil and grease resistant. Greaseproof paper resists oil and grease, so it is used for food wrapping, tray and basket liners, and takeaway packaging.",
      },
      {
        question: "Is greaseproof paper the same as butter paper?",
        answer:
          "Not always. “Butter paper” is a trade name that can mean greaseproof paper, glassine paper or a separate coated paper. We supply greaseproof and glassine, not coated butter paper. Tell us your use and we will suggest the right one.",
        link: BUTTER_PAPER_LINK,
      },
      {
        question:
          "What is the difference between double side and one side OGR paper?",
        answer:
          "Double side OGR paper resists oil and grease on both sides of the sheet. One side OGR paper has its oil and grease barrier on one side only. Tell us your use and we will suggest the right grade.",
      },
      {
        question: "What GSM and kit value do you supply?",
        answer:
          "We supply double side OGR paper in 32–50 GSM and kit value 3–7, and one side OGR paper in 30–50 GSM, both in sheets cut to your required size. A higher kit value means higher grease resistance.",
      },
      {
        question: "Do you deliver across India?",
        answer:
          "Yes. We are based in Kanpur, Uttar Pradesh, and supply bulk orders to businesses across India. Share your GSM, sheet size, quantity and delivery location for a quote.",
      },
    ],
  },

  // ── 2. Glassine Paper ───────────────────────────────────────────────────────
  "glassine-paper": {
    name: "Glassine Paper",
    alternateNames: [
      "Glassine",
      "2S Glassine Paper",
      "Two-Sided Smooth Glassine Paper",
      "Butter Paper",
    ],
    tagline: "Smooth on Both Sides. Translucent. 18–60 GSM.",
    description:
      "Glassine paper is a smooth, glossy, translucent paper that resists air, grease and moisture, with a dense surface that provides this barrier without any coating. Mudit Paper Company supplies Two-Sided Smooth (2S) glassine paper, 18–60 GSM, in bulk to packaging businesses, paper converters and distributors across India. Some buyers also call it butter paper.",
    image: "/images/glassine-paper/hero.webp",
    imageAlt: "Croissant wrapped in translucent glassine paper",
    card: {
      tag: "Premium",
      summary:
        "Two-Sided Smooth (2S) translucent glassine paper, 18–60 GSM, for confectionery and pharma packaging.",
      specs: ["18–60 GSM", "2S Smooth", "Translucent", "Sheets", "Custom Size"],
    },
    breadcrumb: "Glassine Paper",
    tag: "2S Smooth · Translucent",
    specBackground: "/images/spec-bg-glassine.webp",
    variants: [
      {
        name: "Glassine Paper",
        specs: [
          { label: "Grade", value: "Two-Sided Smooth (2S)" },
          { label: "GSM Range", value: "18 – 60 GSM" },
          { label: "Finish", value: "Smooth, Glossy, Translucent" },
          { label: "Barrier", value: "Air, Grease & Moisture Resistant" },
          {
            label: "Printability",
            value: "Flexo / Offset",
          },

          {
            label: "Supply Format",
            value: "Sheets",
          },
          {
            label: "Sheet Size",
            value: "As Per Requirement",
          },
          {
            label: "MOQ",
            value: "Subject to Order Requirements",
          },
        ],
        applications: [
          "Chocolate & Candy Wrapping",
          "Bakery & Food Wrapping",
          "Pharmaceutical Packaging",
          "Industrial Packaging",
          "Premium Gift Wrapping",
        ],
        features: [
          "Smooth on both sides for a clean, premium finish",
          "Natural grease barrier with no chemical coating",
          "Translucent, so the product shows through the wrap",
          "Air and moisture resistant to help protect products in storage and transit",
          "Bulk supply for paper converters, distributors and packaging businesses",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/glassine-paper/chocolate-packaging.webp",
        caption: "Chocolate & Candy Wrapping",
        alt: "Chocolates and sweets wrapped in glassine paper beside a gift box",
      },
      {
        src: "/images/glassine-paper/industrial-packaging.webp",
        caption: "Industrial Packaging",
        alt: "Small industrial parts packed in glassine paper pouches",
      },
      {
        src: "/images/glassine-paper/premium-gift-wrapping.webp",
        caption: "Premium Gift Wrapping",
        alt: "Gift box wrapped in glassine paper with a ribbon and wax seal",
      },
      {
        src: "/images/glassine-paper/pharmaceutical-packaging.webp",
        caption: "Pharmaceutical Packaging",
        alt: "Capsules packed in glassine paper pouches in a basket",
      },
    ],
    faqs: [
      {
        question: "What is glassine paper?",
        answer:
          "Glassine is a smooth, glossy, translucent paper. It is pressed between rollers to create a dense surface that resists air, grease and moisture without any coating. It is used for confectionery, food, pharmaceutical and industrial packaging.",
      },
      {
        question: "What is glassine paper used for?",
        answer:
          "Common uses include chocolate and candy wrapping, bakery and food wrapping, pharmaceutical packaging, industrial parts packaging and premium gift wrapping.",
      },
      {
        question: "What is 2S glassine paper?",

        answer:
          "2S stands for Two-Sided Smooth. It refers to glassine paper with a smooth finish on both sides in 18-60 GSM, making it suitable for applications requiring a consistent smooth paper surface.",
      },
      {
        question:
          "What is the difference between glassine and greaseproof paper?",
        answer:
          "Glassine is smooth, glossy and translucent, and is often chosen when appearance matters. Greaseproof (OGR) paper is chosen mainly for oil and grease resistance. We supply both.",
        link: {
          href: "/products/greaseproof-ogr-paper",
          label: "See our greaseproof (OGR) paper",
        },
      },
      {
        question: "Is glassine paper waterproof?",
        answer:
          "No. Glassine resists moisture, but it is not waterproof. Tell us your product and storage conditions, and we will advise whether it suits your use.",
      },
      {
        question: "Is glassine paper the same as butter paper?",
        answer:
          "Not always. “Butter paper” is a trade name that can mean glassine paper, greaseproof paper or a separate coated paper. We supply glassine and greaseproof, not coated butter paper. Tell us your use and we will suggest the right one.",
        link: BUTTER_PAPER_LINK,
      },
    ],
  },

  // ── 3. Ladoo Katori & Muffin Cup Liner ──────────────────────────────────────
  "ladoo-katori-muffin-cup-liner": {
    name: "Ladoo Katori & Muffin Cup Liner",
    alternateNames: [
      "Ladoo Katori",
      "Laddu Katori",
      "Paper Katori",
      "Mithai Katori",
      "Muffin Cup Liner",
      "Cupcake Liner",
      "Paper Cup Liner",
    ],
    tagline: "65mm Fluted Paper Cups. Plain to Custom Printed.",
    description:
      "A ladoo katori, also spelled laddu katori, is a small fluted paper cup that holds and presents ladoos, mithai, muffins, cupcakes and dry fruits. Mudit Paper Company supplies 65mm circular food-grade paper cup liners, from plain white to full multi-colour custom print, in bulk to mithai shops, bakeries, caterers and FMCG sweet brands across India.",
    image: "/images/ladoo-katori/hero.webp",
    imageAlt: "Ladoos served in white paper katori cup liners",
    card: {
      tag: "Food Packaging",
      summary:
        "65mm food-grade paper cup liners for ladoos, mithai, muffins and cupcakes, plain white or custom printed.",
      specs: ["65mm Diameter", "Plain to Printed", "Circular Shape"],
    },
    breadcrumb: "Ladoo Katori / Muffin Cup Liner",
    tag: "Plain to Multi Colour · 65mm",
    specBackground: "/images/spec-bg-ladoo-katori.webp",
    variants: [
      {
        name: "Ladoo Katori & Muffin Cup Liner",
        specs: [
          { label: "Type", value: "Fluted Paper Cup Liner" },
          { label: "Shape", value: "Circular" },
          { label: "Diameter", value: "65mm" },
          { label: "Print", value: "Plain White to Multi-Colour Custom Print" },
          { label: "Material", value: "Food Grade Paper" },
          { label: "MOQ", value: "As Per Requirement" },
        ],
        applications: [
          "Ladoo & Mithai Cups",
          "Muffin & Cupcake Liners",
          "Dry Fruit Presentation",
          "Sweet Boxes & Festive Gift Hampers",
          "Bakery & Catering Display",
        ],
        features: [
          "Custom print with your logo, brand name or festive pattern",
          "Grease and moisture resistant",
          "Sturdy, holds its shape when filled",
          "Neat presentation for gifting and display",
          "Bulk supply for mithai shops, bakeries, caterers and FMCG sweet brands",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/ladoo-katori/muffin-liner.webp",
        caption: "Printed Muffin & Cupcake Liners",
        alt: "Muffin in a floral printed paper cup liner beside a stack of liners",
      },
      {
        src: "/images/ladoo-katori/mithai-katori.webp",
        caption: "White Ladoo & Mithai Katori",
        alt: "Stack of plain white fluted paper cup liners",
      },
      {
        src: "/images/ladoo-katori/colored-mithai-katori.webp",
        caption: "Coloured Ladoo & Mithai Katori",
        alt: "Multi-coloured paper cup liners in blue, green, red and yellow",
      },
      {
        src: "/images/ladoo-katori/gift-hamper.webp",
        caption: "Festive Gift Hampers",
        alt: "Gift box of ladoos in paper cup liners with small jars",
      },
    ],
    faqs: [
      {
        question: "What is a ladoo katori?",
        answer:
          "A ladoo katori, also spelled laddu katori, is a small fluted paper cup that holds a ladoo or other mithai for display, gifting and serving.",
      },
      {
        question: "What are ladoo katori and muffin cup liners used for?",
        answer:
          "They are used for ladoos, mithai, muffins, cupcakes and dry fruits, and for presenting sweets in gift boxes, festive hampers, bakery displays and catering trays.",
      },
      {
        question: "What size ladoo katori do you supply?",
        answer:
          "We currently supply a 65mm diameter liner in a circular shape. Tell us what you plan to fill it with and we will confirm whether it suits your product.",
      },
      {
        question: "Can paper katori be printed with our logo?",
        answer:
          "Yes. Liners are available from plain white to full multi-colour custom print, including your logo, brand name or a festive pattern.",
      },
      {
        question: "Are these cup liners food grade?",
        answer:
          "Yes. They are made from food-grade paper and resist grease and moisture from sweets and baked goods.",
      },
      {
        question: "What is the minimum order, and do you deliver across India?",
        answer:
          "The minimum order depends on your requirement. We are based in Kanpur, Uttar Pradesh, and supply bulk orders to businesses across India. Share your print design, quantity and delivery location for a quote.",
      },
    ],
  },

  // ── DRAFT PRODUCTS: not on the website ──────────────────────────────────────
  // Dummy data, kept in a comment so it never reaches the site. To launch one:
  //   1. Replace every "TODO" with real details and check each claim is true.
  //   2. Add its photo to public/images and update `image` and `imageAlt`.
  //   3. Move its entry out of this comment, and uncomment its line in
  //      PRODUCTS_LIST below. The page, sitemap, Navbar and home card then
  //      appear automatically, and it joins the contact form and related links.
  /* DRAFT-PRODUCTS-START
  // ── MG Poster Paper ─────────────────────────────────────────────────────────
  "mg-poster-paper": {
    name: "MG Poster Paper",
    alternateNames: ["MG Paper", "Machine Glazed Paper", "Poster Paper"],
    tagline: "Glossy on One Side. Ready for Printing and Packaging.",
    description:
      "MG poster paper is a machine glazed (MG) paper with one smooth, glossy side and one rougher side. Mudit Paper Company supplies MG poster paper, TODO GSM, in bulk to printers, packaging businesses, paper converters and distributors across India.",
    image: "/images/mg-poster-paper/hero.webp",
    imageAlt: "TODO: describe what the photo shows",
    card: {
      tag: "Specialty Paper",
      summary:
        "Machine glazed poster paper, TODO GSM, with one glossy side, for printing, wrapping and packaging.",
      specs: ["TODO GSM", "One Side Glazed", "TODO Format", "Bulk Orders"],
    },
    breadcrumb: "MG Poster Paper",
    tag: "Machine Glazed Paper",
    variants: [
      {
        name: "MG Poster Paper",
        specs: [
          { label: "GSM Range", value: "TODO GSM" },
          { label: "Finish", value: "One Side Glazed" },
          { label: "Colour", value: "TODO" },
          { label: "Supply Format", value: "TODO: Reels / Sheets" },
          { label: "Size", value: "TODO" },
          { label: "MOQ", value: "TODO" },
        ],
        applications: [
          "Posters & Printed Material",
          "Wrapping & Packaging",
          "Paper Bags",
          "Labels",
        ],
        features: [
          "Glossy side gives a smooth surface for printing",
          "Suits printing, wrapping and converting work",
          "Bulk supply for printers, paper converters and distributors",
        ],
      },
    ],
    gallery: [],
    faqs: [
      {
        question: "What is MG poster paper?",
        answer:
          "MG stands for machine glazed. MG poster paper is smooth and glossy on one side and rougher on the other, and is used for printing, wrapping and packaging.",
      },
      {
        question: "What GSM of MG poster paper do you supply?",
        answer: "We supply MG poster paper in TODO GSM, as TODO reels or sheets.",
      },
      {
        question: "What is the minimum order, and do you deliver across India?",
        answer:
          "Our minimum order is TODO. We are based in Kanpur, Uttar Pradesh, and supply bulk orders to businesses across India. Share your GSM, size, quantity and delivery location for a quote.",
      },
    ],
  },

  // ── Bleached Kraft Paper ────────────────────────────────────────────────────
  "bleached-kraft-paper": {
    name: "Bleached Kraft Paper",
    alternateNames: ["White Kraft Paper", "Bleached Kraft", "BK Paper"],
    tagline: "Clean White Finish. Strong Kraft Paper.",
    description:
      "Bleached kraft paper is a white kraft paper made from bleached pulp, chosen for its strength and clean, printable surface. Mudit Paper Company supplies bleached kraft paper, TODO GSM, in bulk to packaging businesses, paper converters and distributors across India.",
    image: "/images/bleached-kraft-paper/hero.webp",
    imageAlt: "TODO: describe what the photo shows",
    card: {
      tag: "Specialty Paper",
      summary:
        "White bleached kraft paper, TODO GSM, for paper bags, wrapping and printed packaging.",
      specs: ["TODO GSM", "White", "TODO Format", "Bulk Orders"],
    },
    breadcrumb: "Bleached Kraft Paper",
    tag: "White Kraft Paper",
    variants: [
      {
        name: "Bleached Kraft Paper",
        specs: [
          { label: "GSM Range", value: "TODO GSM" },
          { label: "Burst Factor (BF)", value: "TODO" },
          { label: "Colour", value: "White" },
          { label: "Finish", value: "TODO: MG / MF" },
          { label: "Supply Format", value: "TODO: Reels / Sheets" },
          { label: "MOQ", value: "TODO" },
        ],
        applications: [
          "Paper Bags",
          "Food & Retail Wrapping",
          "Printed Packaging",
          "Pouches & Sachets",
        ],
        features: [
          "Clean white surface for printing and branding",
          "Strong kraft paper for bags and wrapping",
          "Bulk supply for packaging businesses, paper converters and distributors",
        ],
      },
    ],
    gallery: [],
    faqs: [
      {
        question: "What is bleached kraft paper?",
        answer:
          "Bleached kraft paper is white kraft paper made from bleached pulp. It combines the strength of kraft paper with a clean surface for printing.",
      },
      {
        question: "What is the difference between bleached and brown kraft paper?",
        answer:
          "Bleached kraft is white, which suits bright printing and a clean look. Brown kraft is unbleached and keeps its natural colour.",
      },
      {
        question: "What GSM of bleached kraft paper do you supply?",
        answer:
          "We supply bleached kraft paper in TODO GSM, as TODO reels or sheets.",
      },
      {
        question: "What is the minimum order, and do you deliver across India?",
        answer:
          "Our minimum order is TODO. We are based in Kanpur, Uttar Pradesh, and supply bulk orders to businesses across India. Share your GSM, size, quantity and delivery location for a quote.",
      },
    ],
  },

  
  DRAFT-PRODUCTS-END */
} as const;

// ── Product list for Navbar dropdown and home page ────────────────────────────
export const PRODUCTS_LIST: readonly ProductListItem[] = [
  {
    slug: "greaseproof-ogr-paper",
    label: "Greaseproof (OGR) Paper",
  },
  { slug: "glassine-paper", label: "Glassine Paper" },
  {
    slug: "ladoo-katori-muffin-cup-liner",
    label: "Ladoo Katori / Muffin Cup Liner",
  },
  // Draft products, not on the website. Uncomment together with their data.
  // { slug: "mg-poster-paper", label: "MG Poster Paper" },
  // { slug: "bleached-kraft-paper", label: "Bleached Kraft Paper" }
] as const;
