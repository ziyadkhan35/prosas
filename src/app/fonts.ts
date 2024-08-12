import { Karla, Kalam, Kameron, Kavivanar } from "next/font/google";

export const karla = Karla({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-karla', 
})
export const kalam = Kalam({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-kalam'
})
export const kameron = Kameron({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-kameron'
})
export const kavivanar = Kavivanar({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-kavivanar'
})