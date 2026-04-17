import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// We use the exact font from your template!
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dibya Sadhukhan",
  description: "AI Engineer / Data Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">

      {/* 
        We force a dark background (#080806) to match the Hero exactly.
        We also removed the old light-mode Navbar for now so it doesn't look weird! 
      */}
      <body className={`${jakarta.className} bg-[#080806] text-gray-300 min-h-screen flex flex-col antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
