export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://mudit-paper-company.vercel.app";

export const COMPANY = {
  name: "Mudit Paper Company",
  phone: "+916392935042",
  whatsapp: "916392935042",
  email: "muditagarwalna@gmail.com",
  address: "Kanpur, Uttar Pradesh, India",
  postalCode: "208001",
  city: "Kanpur",
  state: "Uttar Pradesh",
  country: "IN",
  geo: {
    latitude: "26.4499",
    longitude: "80.3319",
  },
  social: [
    "https://www.instagram.com/muditpapercompany",
    "https://www.facebook.com/muditpapercompany",
    "https://www.linkedin.com/company/muditpapercompany",
  ],
  marketplaces: [
    "https://www.indiamart.com/muditpapercompany",
    "https://www.justdial.com/Kanpur/Mudit-Paper-Company",
    "https://www.tradeindia.com/muditpapercompany",
  ],
} as const;
