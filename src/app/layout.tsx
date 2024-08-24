import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ReactNode } from "react";
import { lora, open_sans, shantell_sans } from "./fonts";

export const metadata: Metadata = {
  title: "ProSAS",
  description: "Fire protection and Security systems",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" className={`${open_sans.variable} ${lora.variable} ${shantell_sans.variable}`}>
      <body className={open_sans.className}>
          <header>
            <Header />
          </header>
          
          <main>
            {children}
          </main>
          
          <footer>
            <Footer />
          </footer>
      </body>
    </html>
  );
}
