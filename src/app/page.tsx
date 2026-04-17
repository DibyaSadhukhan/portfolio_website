import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Skills />
      <Contact />
      <Footer />
      {/* We will add About, Skills, and Projects here later! */}
    </main>
  );
}
