import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Skills />
      {/* We will add About, Skills, and Projects here later! */}
    </main>
  );
}
