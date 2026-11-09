import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
