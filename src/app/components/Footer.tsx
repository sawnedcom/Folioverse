// src/app/components/Footer.tsx
// ------------------------------------------------------------
// A dynamic footer component with navigation, social links, and a scroll-to-top button.

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, X, Mail, ArrowUp } from "lucide-react";

export default function PremiumFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Folioverse</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xs">A leading platform for exploring and sharing the beauty of nature through photography and stories.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-white dark:text-gray-400  transition-colors duration-300" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white dark:text-gray-400  transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white dark:text-gray-400  transition-colors duration-300" aria-label="X">
                  <X size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white dark:text-gray-400  transition-colors duration-300" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/documentation" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-white dark:text-gray-400  transition-colors duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Get the latest updates and nature photography tips sent directly to your inbox.</p>
              <form className="space-y-3">
                <div>
                  <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
                </div>
                <button type="submit" className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} Folioverse. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button onClick={scrollToTop} className={`fixed bottom-6 right-6 p-3 bg-slate-700 text-white rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </>
  );
}
