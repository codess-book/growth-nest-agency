import type { Metadata } from "next";
import Services from "@/Components/Services";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
export const metadata: Metadata = {
  title: "Our Services | Growth Next",
  description: "Explore Growth Next's digital marketing services: SEO, Social Media Marketing, Content Marketing, Blog Writing, and Paid Advertising.",
};

export default function ServicesPage() {
   return (
    <>
      <Navbar />
      <main className="pt-24">
        <Services />
      </main>
      <Footer />
    </>
  );
}