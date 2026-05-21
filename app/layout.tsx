import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
