import ConsoleMessage from "@/components/consoleMessage";
import AppProvider from "@/provider/AppProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Going 2 Zero",
  description:
    "We help businesses take real action toward achieving net zero. Through our innovative AI-powered platform, we provide businesses with the tools to measure, track, and reduce their carbon footprint. Our three-step approach—emissions tracking, personalized consulting, and carbon offsetting—makes sustainability simple, accessible, and effective. We believe that every business, no matter its size, can play a role in fighting climate change. By staying ahead of green regulations and offering tailored solutions, we empower companies to make meaningful progress while unlocking opportunities for growth and compliance.",
    icons: {
      icon: "/asset/fav-logo.png",
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <AppProvider>
          <ConsoleMessage />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
