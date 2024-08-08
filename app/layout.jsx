'use client';

import { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/topbar/TopBar";
import NavigationMenu from "./components/NavigationMenu";
import {metadata} from "./data/metadata";
import "../app/globals.css";


export default function RootLayout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) { 
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="es">
        <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <div className={`${navbarFixed ? 'fixed top-0 lg:w-full w-full z-50' : ''}`}>
            <Navbar />
          </div>
          <NavigationMenu />
          <main className="flex-grow pt-[var(--topbar-height)]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
