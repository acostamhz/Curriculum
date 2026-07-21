import Navbar from "@/components/layout/NavBar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Timeline from "@/components/timeline/Timeline";
import Stack from "@/components/stack/Stack";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";
import Contact from "@/components/contact/Contact";
import Assistant from "@/components/assistant/Assistant";

export default function Home() {
  console.log(process.env.OPENAI_API_KEY);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Stack />
      <Projects />
      <Certifications />
      <Assistant />
      <Contact />
    </>
  );
}