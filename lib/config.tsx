// src/lib/config.ts
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.mudit-paper-company.vercel.app";

export const COMPANY = {
  name: "Mudit Paper Company",
  phone: "+916392935042",
  email: "muditagarwalna@gmail.com",
  address: "Kanpur, Uttar Pradesh, India",
  postalCode: "208001",
  city: "Kanpur",
  state: "Uttar Pradesh",
  country: "IN",
  social: [
    "https://www.instagram.com/muditpapercompany",
    "https://www.facebook.com/muditpapercompany",
  ],
} as const;
