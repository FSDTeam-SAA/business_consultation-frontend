import "@/app/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navar";
import Footer from "@/components/footer";
import NewsletterSection from "@/components/newsletter-section";

export const metadata: Metadata = {
  title: "Account",
  description: "Account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        {children}
        <NewsletterSection />
        <Footer />
      </body>
    </html>
  );
}
