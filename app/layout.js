"use client";

import React from "react";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { routes } from "@/constants/routes";

// import i18n (needs to be bundled ;))
import "./i18n";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700", "800"],
  variable: "--font-inter",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
  variable: "--font-dmSans",
});

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    // <html className={` ${sourceSans.variable} ${inter.variable} `}>
          <html className={` ${dmSans.variable} ${inter.variable} `} lang="en">
     <meta charset="UTF-8" />
     <meta name="description" content="GING: Grupo de Investigación de Internet de Nueva Generación, centrado en innovación educativa, espacios de datos, redes, videoconferencia e Inteligencia Artificial." />
      <meta name="keywords" content="Grupo, Investigación, UPM, ETSIT, Inteligencia Artificial, Redes, Videoconferencia, Espacios de Datos, Innovación Educativa, publicaciones, proyectos, colaboración"></meta>
      <title>GING </title>
      <body className="bg-background text-text">
        <Header route={"/"} />
        <main className="min-h-[70dvh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
