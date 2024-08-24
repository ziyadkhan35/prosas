import type { Metadata } from "next";
import { lora, shantell_sans, open_sans } from "../fonts";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "ProSAS",
  description: "Fire protection and Security systems",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {

  // Internationalization
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${open_sans.variable} ${lora.variable} ${shantell_sans.variable}`}>
      <body className={open_sans.className}>
        <NextIntlClientProvider messages={messages}>
          <header>
            <Header />
          </header>
          
          {children} 
                 
          <footer>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


