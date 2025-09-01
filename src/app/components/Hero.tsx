// src/app/components/Hero.tsx
// ------------------------------------------------------------
// A hero section component for a portfolio website, featuring a dynamic background, a main heading, a brief description, call-to-action buttons, and service highlights.

"use client";

import React from "react";
import { ArrowRight, MessageCircle, Play, User, Code2, Palette, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <section className="pb-20 pt-20 relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-500/20 rounded-full blur-lg animate-float"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white block mb-2">Frontend Developer</span>
                <span className=" bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 bg-clip-text text-transparent block">is Right Here!</span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">With deep experience in development, I enjoy turning concepts into powerful and user-friendly web applications</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4  bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg ">
                <MessageCircle size={20} />
                CHAT WITH ME
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link href="/projects" className="group inline-flex items-center gap-3 px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play size={20} />
                START A PROJECT
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 animate-fade-in-up animation-delay-600">
              <div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">3+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Services */}
          <div className="space-y-6 animate-fade-in-up animation-delay-800">
            {/* Service Card 1 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">WEB DEVELOPMENT</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">I provide modern website development services that can turn your product concepts into reality</p>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">UI/UX DESIGN</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">I develop engaging user interface displays and functionalities, from applications to dashboards</p>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">PERFORMANCE OPTIMIZATION</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">I provide expert guidance on development strategies, the latest tech stacks, and product optimization</p>
                </div>
              </div>
            </div>

            {/* Profile Badge */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Premium Developer</div>
                <div className="text-gray-400 text-sm">Ready to elevate your project</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </section>
  );
}
