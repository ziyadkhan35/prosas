import { Lora, Open_Sans, Shantell_Sans } from "next/font/google";

export const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-open_sans', 
})
export const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-lora'
})
export const shantell_sans = Shantell_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-shantell_sans'
})