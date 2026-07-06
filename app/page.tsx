import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import Services from "@/Components/Services";
import About from "@/Components/About";
import Portfolio from "@/Components/Portfolio";
import Contact from "@/Components/Contact";
// import Cursor from "@/Components/Cursor";

export default function Home() {
  return (
    <main>

      <Navbar />   {/* fixed — sits on top of everything */}
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />     {/* full-screen section, has pt-32 built-in to clear navbar */}
    </main>

  );
}
