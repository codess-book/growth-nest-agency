import type { Metadata } from "next";
import About from "@/Components/About";
export const metadata: Metadata = {
  title: "About Us | Growth Next",
  description: "Learn about Growth Next, a digital marketing agency helping businesses grow through customized SEO, social media, and content strategies.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <About />
    </main>
  );
}