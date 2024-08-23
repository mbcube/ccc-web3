import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["rogan", ...defaultTheme.fontFamily.sans],
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tulip: {
          '50': '#fcf9ea',
          '100': '#faf1c7',
          '200': '#f6e092',
          '300': '#f0c754',
          '400': '#ecb63b',
          '500': '#da9718',
          '600': '#bc7312',
          '700': '#965212',
          '800': '#7d4216',
          '900': '#6a3719',
          '950': '#3e1c0a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
