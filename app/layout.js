import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import your global layout components
import Navbar from "@/app/components/layout/Navbar"; // Or "@/components/Navbar" depending on your filename
import Footer from "@/app/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata for Hafship SEO
export const metadata = {
  title: "HAFSHIP | Dry Bulk Shipbroking",
  description: "Hafship is an independent dry bulk shipbroking house connecting shipowners, operators, charterers and cargo interests across global dry bulk markets.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-slate-900">
        
        {/* Renders at the top of every page */}
        <Navbar />
        
        {/* Main content expands to push footer down */}
        <main className="flex-grow w-full">
          {children}
        </main>
        
        {/* Renders at the bottom of every page */}
        <Footer />
        
      </body>
    </html>
  );
}