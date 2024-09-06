import type { Metadata, Viewport } from "next";
import { lora, shantell_sans, open_sans } from "../fonts";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "ProSAS",
  description: "ProSAS provides advanced fire protection systems, IT equipment installation, and security solutions to keep your assets safe.",
  // keywords: ['fire protection', 'IT equipment installation', 'security systems', 'CCTV', 'emergency announcement', 'fm-200', 'ProSAS', 'prosas'],
  // authors: [{ name: 'Ziyadkhan Murudov' }],
  // creator: 'Ziyadkhan Murudov',
  // publisher: 'Ziyadkhan Murudov',
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // }
}
// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 1,
//   userScalable: false,
// }

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


