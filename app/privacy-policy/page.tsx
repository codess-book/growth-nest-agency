import type { Metadata } from "next";
import PrivacyPolicyModal from "@/Components/privacy-policy";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
export const metadata: Metadata = {
  title: "Privacy Policy | Growth Next",
  description: "Read Growth Next's privacy policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
    <Navbar/>
    <main className="pt-24">
      <PrivacyPolicyModal />
    </main>
    <Footer />
    
    </>
    
  );
}