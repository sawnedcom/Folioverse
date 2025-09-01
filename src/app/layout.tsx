// src/app/layout.tsx
// ------------------------------------------------------------
// Root layout component with global styles, fonts, navbar, and footer

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={poppins.variable}>
      <head>
        <title>Folioverse - Template Portfolio & Resume</title>
        <meta name="description" content="Folioverse, a professional portfolio and resume template that is clean, modern, and easy to customize." />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
