import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollReveal from "@/components/ScrollReveal";
import Statement from "@/components/Statement";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Statement />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
