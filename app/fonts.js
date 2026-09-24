import { 
  Racing_Sans_One, 
  Raleway, 
  Outfit, 
  Lora, 
  Merriweather 
} from "next/font/google";
import localFont from "next/font/local";

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

// 4. Formal Heading/Body Serif (Lora)
export const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// 5. Highly Legible Formal Serif (Merriweather)
export const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

// 6. Custom Hero Font (American Captain)
export const americanCaptain = localFont({
  src: './fonts/AmericanCaptain.ttf',
  display: 'swap',
});