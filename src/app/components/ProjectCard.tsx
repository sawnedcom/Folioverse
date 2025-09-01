// src/app/components/ProjectCard.tsx
// ------------------------------------------------------------
// A reusable project card component with two layouts (grid & list)

import Link from "next/link";
import Image from "next/image";
import { Project } from "../../types";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  viewMode?: "grid" | "list";
}

export default function ProjectCard({ project, viewMode = "grid" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // List view layout
  if (viewMode === "list") {
    return (
      <Link href={`/projects/${project.slug}`} className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-800/50 bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-xl hover:-translate-y-1" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative overflow-hidden rounded-xl md:w-64 flex-shrink-0">
          <div className="relative h-48 w-full md:h-40">
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Hover action buttons */}
            <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {project.githubUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, "_blank");
                  }}
                  className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
                  aria-label="View code on GitHub">
                  <Github size={16} className="text-gray-700 dark:text-gray-300" />
                </button>
              )}
              {project.liveUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, "_blank");
                  }}
                  className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
                  aria-label="View live project">
                  <ExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white-400 dark:group-hover:text-white-400 transition-colors">{project.title}</h3>
            <ArrowUpRight size={20} className="text-gray-400 mt-1.5 transition-all duration-300 group-hover:text-white-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag.id} className="rounded-full bg-gray-200/50 dark:bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-300/20 transition-colors group-hover:bg-gray-300/20 group-hover:border-gray-300/30">
                {tag.name}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
            <span className="flex items-center">{project.date}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Grid view layout (default)
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-800/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Hover action buttons */}
          <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {project.githubUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }}
                className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
                aria-label="View code on GitHub">
                <Github size={16} className="text-gray-700 dark:text-gray-300" />
              </button>
            )}
            {project.liveUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }}
                className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
                aria-label="View live project">
                <ExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
              </button>
            )}
          </div>

          {/* Date badge */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">{project.date}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white-600 dark:group-hover:text-white-400 transition-colors">{project.title}</h3>
          <ArrowUpRight size={18} className="text-gray-400 mt-1 transition-all duration-300 group-hover:text-white-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag.id} className="rounded-full bg-gray-200/50 dark:bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-300/20 transition-colors group-hover:bg-gray-300/20 group-hover:border-gray-300/30">
              {tag.name}
            </span>
          ))}
          {project.tags.length > 3 && <span className="rounded-full bg-gray-200/50 dark:bg-gray-800/50 px-3 py-1 text-xs text-gray-600 dark:text-gray-400">+{project.tags.length - 3}</span>}
        </div>
      </div>
    </Link>
  );
}
