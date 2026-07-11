import type { Metadata } from "next";
import Contact from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
export const metadata: Metadata = {
  title: "Contact Us | Growth Next",
  description: "Get in touch with Growth Next for digital marketing solutions tailored to your business needs.",
};

export default function ContactPage() {
  return (
    <>
    <Navbar />
    <main className="pt-24">
        
      <Contact />
    </main>
    <Footer />
    </>
    
  );
}