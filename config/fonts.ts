import { Fira_Code as FontMono, Inter as FontSans, Poppins } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"]
})