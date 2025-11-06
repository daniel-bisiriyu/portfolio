import About from "./components/about";
import Contact from "./components/contact";
import CursorTrail from "./components/cursor-trail";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
