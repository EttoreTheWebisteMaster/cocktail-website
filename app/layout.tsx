import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const metadata: Metadata = {
  title: "Cocktail Website",
  description: "Have a cocktail, have a good time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
