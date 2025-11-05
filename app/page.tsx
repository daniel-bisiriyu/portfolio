import About from "./components/about";
import Contact from "./components/contact";
import CursorTrail from "./components/cursor-trail";
import CursorTrail2 from "./components/cursor-trail2";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <CursorTrail />
      {/* <CursorTrail2 /> */}
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
