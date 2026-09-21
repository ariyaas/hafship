import { Racing_Sans_One, Raleway, Outfit } from "next/font/google";

// 1. Heading Font (Racing Sans One)
export const racingSansOne = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// 2. Paragraph Font (Raleway)
export const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// 3. Optional Modern Alternative (Outfit)
export const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});