// src/app/not-found.tsx
// ------------------------------------------------------------
// Not Found Page Component
// Displays 404 error with animation, message, and navigation links

"use client";

import Link from "next/link";
import React from "react";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gray-200 opacity-60 blur-3xl animate-pulse dark:bg-gray-700"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gray-300 opacity-40 blur-3xl animate-pulse animation-delay-1000 dark:bg-gray-600"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 opacity-20 blur-2xl animate-pulse animation-delay-500 dark:from-gray-700 dark:to-gray-600"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 heading */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-gray-400 animate-fade-in-up">404</h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-gray-500 opacity-10 blur-sm animate-pulse">404</div>
        </div>

        {/* Error text */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white animate-fade-in-up animation-delay-200">Page Not Found</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full mx-auto animate-fade-in-up animation-delay-300"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up animation-delay-400">
            The page youre looking for seems to have vanished into the digital void.
            <br className="hidden sm:block" />
            Lets get you back on track.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-500">
          <Link href="/" className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-700 dark:to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </span>
          </Link>

          <Link href="/contact" className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-100 dark:hover:border-gray-400 transition-all duration-300">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Help
            </span>
          </Link>
        </div>

        {/* Extra links */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 animate-fade-in-up animation-delay-600">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Portfolio", href: "/portfolio" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Blog", href: "/blog" },
            ].map((link, index) => (
              <Link key={link.name} href={link.href} className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200" style={{ animationDelay: `${700 + index * 100}ms` }}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </main>
  );
}
