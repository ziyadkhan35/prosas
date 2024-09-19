import type { Metadata, Viewport } from "next";
import { lora, shantell_sans, open_sans } from "../fonts";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  metadataBase: new URL('https://prosas.az'),
  title: "ProSAS",
  description: "ProSAS provides advanced fire protection systems, IT equipment installation, and security solutions to keep your assets safe.",
  keywords: ['fire protection', 'IT equipment installation', 'security systems', 'CCTV', 'emergency announcement', 'fm-200', 'ProSAS', 'prosas', 'yanğından mühafizə sistemləri','CCTV', 'kamera təhlükəsizliyi', 'video müşahidə','şəbəkə infrastruktur', 'qazlı yanğın söndürmə', ' ictimai anons sistemləri', 'fon musiqisi sistemləri', 'системы фоновой музыки', 'bina avtomatlaşdırılması', 'автоматизация зданий', 'системы оповещения в чрезвычайных ситуациях', 'газовое пожаротушение', 'сеть инфраструктура', 'системы сетей для бизнеса', 'IT решения для сетей', 'LAN', 'WAN', 'системы видеонаблюдения', 'камеры безопасности', 'системы пожарной защиты'],
  authors: [{ name: 'Ziyadkhan Murudov' }],
  creator: 'Ziyadkhan Murudov',
  publisher: 'Ziyadkhan Murudov',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'az-AZ': '/az',
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    title: 'ProSAS',
    description: 'Fire protection systems, IT equipment installation, and security solutions.',
    url: 'https://prosas.az/',
    siteName: 'ProSAS',
    images: '/logo.png',
    locale: 'en_US',
    type: 'website',
  },
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

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


