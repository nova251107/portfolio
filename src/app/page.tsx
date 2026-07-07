import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SocialProof from "@/components/SocialProof";
import Review from "@/components/Review";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <SocialProof />
        <Review />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
