import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/Components/Whatsapp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:       'Growth Nest | Premium Digital Marketing Agency',
  description: 'Growth Nest is a performance-first digital marketing agency. We help ambitious brands dominate their market with SEO, social media, web development and performance marketing.',
  keywords:    'digital marketing agency, SEO services, social media marketing, web development, Growth Nest',
  openGraph: {
    title:       'Growth Nest | Premium Digital Marketing Agency',
    description: 'We help brands grow faster, smarter, and stronger.',
    url:         'https://growthnext.in',
    siteName:    'Growth Nest',
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Growth Nest | Premium Digital Marketing Agency',
    description: 'Performance-first digital agency for ambitious brands.',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">{children}</body>
         <WhatsAppFloat /> 
    </html>
  );
}
