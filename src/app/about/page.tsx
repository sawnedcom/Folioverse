// src/app/about/page.tsx
// ------------------------------------------------------------
// About Page Component - Shows personal background, philosophy, skills, and approach with animations.

"use client";

import React from "react";
import { User, Code, Heart, Lightbulb, Target, Award } from "lucide-react";

export default function AboutPage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-slate-200 opacity-20 blur-3xl animate-pulse dark:bg-slate-700"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gray-300 opacity-15 blur-3xl animate-pulse dark:bg-gray-600"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-slate-300 opacity-10 blur-3xl dark:bg-slate-600"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 pt-24">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-20 animate-fade-in-up">
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 p-1 animate-fade-in-up animation-delay-200">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                <User size={48} className="text-slate-600 dark:text-slate-300" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-800 animate-fade-in-up animation-delay-400"></div>
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 mb-4 pb-4">About Me</h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 rounded-full animate-fade-in-up animation-delay-300"></div>
          </div>

          <p className="mt-8 text-xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed animate-fade-in-up animation-delay-500">A passionate frontend developer with a deep passion for creating stunning digital experiences. Skilled in turning complex ideas into engaging, responsive, and user-centered web products.</p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Background & Philosophy section */}
          <section className="animate-fade-in-up animation-delay-600">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Background Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-600 dark:to-slate-700 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 rounded-xl flex items-center justify-center">
                      <Code size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Background</h2>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">My journey in technology started with strong curiosity about how modern web applications can change the way we interact with the digital world.</p>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">After learning various frontend technologies, I focus on building solutions that are not only functional but also deliver outstanding and memorable user experiences.</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-700 dark:to-slate-600 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 rounded-xl flex items-center justify-center">
                      <Heart size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Work Philosophy</h2>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">My philosophy is centered on the principle that the best technology is invisible to users — powerful but non-intrusive, sophisticated but still intuitive.</p>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">I believe in clean code, scalable architecture, and human-centered design. Every line of code aims to create sustainable and impactful solutions.</p>

                  <div className="mt-6 space-y-3">
                    {[
                      { icon: <Target size={16} />, text: "User-Centric Design" },
                      { icon: <Lightbulb size={16} />, text: "Clean Architecture" },
                      { icon: <Award size={16} />, text: "Performance Optimization" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                        <div className="text-slate-300">{item.icon}</div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Approach section */}
          <section className="animate-fade-in-up animation-delay-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Approach & Skills</h2>
              <div className="w-16 h-1 bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Frontend Excellence */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 rounded-xl flex items-center justify-center mb-4">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Frontend Excellence</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Building responsive and interactive user interfaces using modern technologies such as React, Next.js, and TypeScript.</p>
              </div>

              {/* User Experience */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 rounded-xl flex items-center justify-center mb-4">
                  <User size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">User Experience</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Focusing every design and implementation on intuitive, accessible, and memorable user experience.</p>
              </div>

              {/* Performance Optimization */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 rounded-xl flex items-center justify-center mb-4">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Performance First</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Optimizing application performance using lazy loading, code splitting, and best practices to ensure minimal loading time.</p>
              </div>
            </div>
          </section>

          {/* Quote section */}
          <section className="animate-fade-in-up animation-delay-800">
            <div className="relative bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-4 left-4 text-8xl font-serif text-slate-600">&ldquo;</div>
                <div className="absolute bottom-4 right-4 text-8xl font-serif text-slate-600 rotate-180">&rdquo;</div>
              </div>

              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed mb-6">&ldquo;Great web development is not about writing perfect code, but about creating meaningful connections between users and technology.&rdquo;</p>
                <div className="w-12 h-1 bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 rounded-full mx-auto"></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
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

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </main>
  );
}
