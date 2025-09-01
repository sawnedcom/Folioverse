// src/app/projects/[slug]/page.tsx
// ------------------------------------------------------------
// Project detail page with: hero image + quick actions, title & meta,
// main content (tech stack, challenge & solution, key features),
// sidebar (project info, related projects), and bottom navigation.
// Uses Next.js static params, Image/Link, and subtle Tailwind animations.

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../fixtures/projects";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users, Target, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";

// Generate static params for build-time optimization
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailPageProps {
  params: { slug: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects in the same category (exclude current)
  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gray-200 opacity-30 blur-3xl animate-pulse dark:bg-gray-700"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gray-300 opacity-20 blur-3xl animate-pulse dark:bg-gray-600"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 pt-24">
        {/* Breadcrumb */}
        <div className="mb-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero: cover image with quick action buttons */}
        <div className="mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl mb-8 group">
            <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Quick actions: live & repo */}
            <div className="absolute top-4 right-4 flex gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1" aria-label="Open live project">
                  <ExternalLink size={20} className="text-gray-700 dark:text-gray-300" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1" aria-label="Open GitHub repository">
                  <Github size={20} className="text-gray-700 dark:text-gray-300" />
                </a>
              )}
            </div>
          </div>

          {/* Title, description, and meta */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{project.description}</p>

            {/* Meta info: duration, team, year */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              {project.duration && (
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{project.team}</span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main grid: content (left) + sidebar (right) */}
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Technology stack */}
            <section className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Technology Stack</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.tags.map((tag, index) => (
                  <div key={tag.id} className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${400 + index * 50}ms` }}>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full group-hover:bg-gray-600 dark:group-hover:bg-gray-300 transition-colors duration-200"></div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{tag.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenge & solution */}
            <section className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Challenge & Solution</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Challenge card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-700  rounded-full">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Challenge</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">The client needed a fast, scalable e-commerce platform for their handcrafted products. The existing solution was slow, difficult to manage, and didnt provide a good user experience on mobile devices. They required better inventory management and customer analytics.</p>
                </div>

                {/* Solution card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-700 rounded-full">
                      <Lightbulb className="w-6 h-6  text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Solution</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">I built a modern Next.js application with static site generation for optimal performance. Integrated with a headless CMS for easy content management, implemented advanced search and filtering, and created a responsive design that works seamlessly across all devices.</p>
                </div>
              </div>
            </section>

            {/* Key features */}
            <section className="opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-12 bg-gradient-to-b from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Key Features</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {["Responsive Design & Mobile Optimization", "Advanced Search & Filtering System", "Real-time Inventory Management", "Secure Payment Processing", "SEO Optimization & Fast Loading", "Admin Dashboard & Analytics"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Project Info</h3>

              <div className="space-y-4">
                {project.category && (
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Category</label>
                    <span className="text-gray-700 dark:text-gray-300 capitalize">{project.category}</span>
                  </div>
                )}

                {project.client && (
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Client</label>
                    <span className="text-gray-700 dark:text-gray-300">{project.client}</span>
                  </div>
                )}

                {project.status && (
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</label>
                    <span className="inline-flex items-center px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">{project.status}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 dark:bg-gray-500 text-white rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 font-medium" aria-label="Open live demo">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-gray-500 dark:hover:border-gray-400 transition-colors duration-200 font-medium" aria-label="Open source code">
                    <Github size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>

            {/* Related projects */}
            {relatedProjects.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Related Projects</h3>

                <div className="space-y-4">
                  {relatedProjects.map((relatedProject) => (
                    <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={relatedProject.image} alt={relatedProject.title} fill style={{ objectFit: "cover" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 truncate">{relatedProject.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{relatedProject.category}</p>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards]">
          <div className="flex justify-between items-center">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 font-medium">
              <ArrowLeft size={18} />
              All Projects
            </Link>

            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 dark:bg-gray-500 text-white rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 font-medium">
              Lets Work Together
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
