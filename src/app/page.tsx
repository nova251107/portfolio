import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SocialProof from "@/components/SocialProof";
import Review from "@/components/Review";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import FloatingOrbs from "@/components/FloatingOrbs";
import MouseFollower from "@/components/MouseFollower";

export default function Home() {
  return (
    <>
      <MouseFollower />
      <FloatingOrbs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <SocialProof />
        <SectionDivider />
        <Review />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
