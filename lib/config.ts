// Single source of truth for company details. Everything visible on the site
// and in the structured data Google reads comes from here, so a change in one
// place updates the whole site.

// No trailing slash, so `${BASE_URL}/path` never produces "//path"
export const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://muditpapercompany.com"
).replace(/\/+$/, "");

// Browser toolbar colour on mobile. Matches --color-accent in globals.css.
export const THEME_COLOR = "#ec2427";

// The first number is the main one: used for the call button and tel: links
const PHONES = ["+916392935042", "+917985313240"] as const;

export const COMPANY = {
  name: "Mudit Paper Company",
  shortName: "Mudit Paper",
  description:
    "Specialty paper wholesaler in India supplying greaseproof (OGR), one side OGR, glassine, MG poster and bleached kraft paper for packaging businesses.",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:00",
  },
  phones: PHONES,
  phone: PHONES[0],
  whatsapp: PHONES[0],
  email: "muditpapercompany@gmail.com",
  address: "Kanpur, Uttar Pradesh, India",
  postalCode: "208001",
  foundedYear: 2016,
  city: "Kanpur",
  state: "Uttar Pradesh",
  country: "IN",
  geo: {
    latitude: "26.4658547",
    longitude: "80.3519867",
  },
  // Named, so a reorder can never put the wrong link behind an icon
  social: {
    instagram: "https://www.instagram.com/muditpapercompany",
    facebook: "https://www.facebook.com/muditpapercompany",
    linkedin: "https://www.linkedin.com/company/muditpapercompany",
  },
  marketplaces: {
    indiamart: "https://www.indiamart.com/muditpapercompany",
    justdial: "https://www.justdial.com/Kanpur/Mudit-Paper-Company",
    tradeindia: "https://www.tradeindia.com/muditpapercompany",
  },
} as const;
