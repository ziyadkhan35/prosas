import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#41A595',
        night: {
          1: '#3D3D3D'
        },
        cloud: {
          1: '#E8FFFB',
          2: '#DEDBDB'
        }
      },
      fontFamily: {
        karla: ['var(--font-karla)'],
        kalam: ['var(--font-kalam)'],
        kameron: ['var(--font-kameron)'],
        kavivanar: ['var(--font-kavivanar)'],
      }
    },
  },
  plugins: [],
};
export default config;
