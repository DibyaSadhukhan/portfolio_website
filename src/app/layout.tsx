import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// We use the exact font from your template!
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dibya Sadhukhan | AI & Data Engineer",
  description:
    "AI & Data Engineer building scalable data pipelines, LLM-powered applications, and intelligent automation systems. Experienced in Python, NLP, and cloud-based data solutions.",

  keywords: [
    "Dibya Sadhukhan",
    "AI Engineer",
    "Data Engineer",
    "Machine Learning Engineer",
    "LLM",
    "Data Pipelines",
    "Python Developer",
    "NLP",
    "ETL",
  ],

  authors: [{ name: "Dibya Sadhukhan" }],
  creator: "Dibya Sadhukhan",

  openGraph: {
    title: "Dibya Sadhukhan | AI & Data Engineer",
    description:
      "Building AI systems, scalable data pipelines, and automation tools that solve real-world problems.",
    url: "https://portfolio-dibya-s.vercel.app/",
    siteName: "Dibya Sadhukhan Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dibya Sadhukhan | AI & Data Engineer",
    description:
      "AI Engineer focused on LLMs, automation, and scalable data systems.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
