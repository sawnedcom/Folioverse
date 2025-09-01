//src/app/components/Navbar.tsx
// ------------------------------------------------------------
// A responsive and dynamic navigation bar with hover effects, a scroll-based style change, and a mobile menu.

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function PremiumNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // Handle scroll effect to change navbar style when scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemHover = (item: string) => {
    setActiveItem(item);
  };

  const handleItemLeave = () => {
    setActiveItem("");
  };

  // Menu item data for easy mapping
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full py-4 backdrop-blur-sm transition-all duration-500 ${isScrolled ? "bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-lg" : "bg-white/70 dark:bg-gray-900/70"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo/Brand with hover animation */}
        <Link href="/" className="group flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white" onMouseEnter={() => handleItemHover("logo")} onMouseLeave={handleItemLeave}>
          <div className="relative w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-white font-bold z-10">F</span>
            {/* Animated background on hover */}
            <div className={`absolute inset-0 bg-light opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
          </div>
          <span className="relative">
            Folioverse
            {/* Animated underline effect */}
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gray-200 to-slate-50 transition-transform duration-300 ${activeItem === "logo" ? "scale-x-100" : "scale-x-0"}`}></span>
          </span>
        </Link>

        {/* Desktop Navigation with subtle hover animation */}
        <div className="hidden items-center space-x-2 md:flex">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium group" onMouseEnter={() => handleItemHover(item.label)} onMouseLeave={handleItemLeave}>
              <span className="relative z-10">{item.label}</span>

              {/* Animated background on hover */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-gray-500/10 to-slate-400/10 transition-all duration-300 ${activeItem === item.label ? "opacity-100" : "opacity-0"}`}></div>

              {/* Animated underline effect */}
              <div className={`absolute bottom-0 left-1/2 w-4/5 h-0.5 bg-gradient-to-r from-gray-400 to-slate-400 transition-all duration-300 transform -translate-x-1/2 ${activeItem === item.label ? "scale-x-100" : "scale-x-0"}`}></div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button with animation */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu} className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Toggle navigation menu">
            {/* Animated menu icon */}
            <div className="relative w-5 h-5">
              <Menu size={20} className={`absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X size={20} className={`absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content with slide-down animation */}
      <div className={`absolute top-full left-0 w-full dark:bg-gray-900 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container mx-auto px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={toggleMenu} className="block py-3 px-4 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:pl-6">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
