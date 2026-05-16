import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mudit Paper Company – Food Grade Paper Traders",
  description:
    "Mudit Paper Company supplies certified food-grade paper products to bakeries, restaurants, food processors, and FMCG brands across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
    >
      {/* <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('mpc-theme')||'light';var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',s==='system'?(d?'dark':'light'):s);}catch(e){}})();`,
          }}
        />
      </head> */}
      <body
        className={`${playfair.variable} ${dmSans.variable}`}
        // suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
