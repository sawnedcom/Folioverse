// src/app/resume/page.tsx
// ------------------------------------------------------------
// Resume page: header + download, experience, education, skills, contact.
// Simple responsive layout using Tailwind and lucide-react icons.

"use client";

import Link from "next/link";
import React from "react";
import { Download, Calendar, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function ResumePage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gray-200 opacity-30 blur-3xl animate-pulse dark:bg-gray-700"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gray-300 opacity-20 blur-3xl animate-pulse dark:bg-gray-600"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 pt-24">
        {/* header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-4">Professional Resume</h1>
            {/* underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
          </div>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">Download the PDF version for complete details and enhanced formatting.</p>

          {/* download button */}
          {/* you can change the name of the pdf file */}
          <Link href="/resume.pdf" download className="group mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-300">
            <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
            Download PDF Resume
            <ExternalLink size={16} className="opacity-70" />
          </Link>
        </div>

        {/* main content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* experience */}
          <section className="animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Professional Experience</h2>
            </div>

            <div className="space-y-8">
              {/* experience item */}
              <div className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-300">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-gray-600 dark:group-hover:bg-gray-400 transition-colors duration-300"></div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Senior Frontend Engineer</h3>

                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="font-medium">[Company Name]</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>[Start Year] - [End Year]</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Led development of responsive web applications serving over 100K+ users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented modern frontend architecture using React, Next.js, and TypeScript</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improved application performance by 40% through code optimization and lazy loading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mentored junior developers and established best practices for the team</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* additional experience item */}
              <div className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-300">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-gray-600 dark:group-hover:bg-gray-400 transition-colors duration-300"></div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Frontend Developer</h3>

                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="font-medium">[Previous Company]</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>[Start Year] - [End Year]</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Built interactive user interfaces using modern JavaScript frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Collaborated with design teams to implement pixel-perfect UI components</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integrated RESTful APIs and managed application state efficiently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* education */}
          <section className="animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Education</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Bachelor of Computer Science</h3>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="font-medium">[University Name]</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>[Start Year] - [End Year]</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300">Specialized in software engineering with focus on web development and user experience design. Graduated with honors and participated in multiple hackathons and coding competitions.</p>
            </div>
          </section>

          {/* skills */}
          <section className="animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* frontend */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Vue.js"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* styling */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Styling</h4>
                <div className="flex flex-wrap gap-2">
                  {["CSS3", "Tailwind CSS", "Sass", "Styled Components", "Material-UI"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* tools */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Webpack", "Vite", "Docker", "Figma"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* contact */}
          <section className="animate-fade-in-up animation-delay-700">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Lets Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Interested in working together? Feel free to reach out!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:shadow-md transition-shadow duration-200">
                  <Mail size={16} />
                  Email
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:shadow-md transition-shadow duration-200">
                  <Phone size={16} />
                  Phone
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* custom animations */}
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

        .animation-delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </main>
  );
}
