import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      colors: {
        'primary': '#149B58',
        'bg-green': '#0C4F2D'
      }
    },
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [nextui()],
}
