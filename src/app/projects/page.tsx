// src/app/projects/page.tsx
// ------------------------------------------------------------
// Projects page with search, filter, view toggle, and animated layout.

"use client";

import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../fixtures/projects";
import { Search, Filter, Grid, List } from "lucide-react";

export default function ProjectsPage(): React.JSX.Element {
  // States for search, filter, and view mode
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);

  // Get unique categories from projects
  const categories = React.useMemo(() => {
    const cats = projects.reduce((acc: string[], project) => {
      if (project.category && !acc.includes(project.category)) {
        acc.push(project.category);
      }
      return acc;
    }, []);
    return ["all", ...cats];
  }, []);

  // Filter projects by search and category
  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gray-200 opacity-30 blur-3xl animate-pulse dark:bg-gray-700"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gray-300 opacity-20 blur-3xl animate-pulse dark:bg-gray-600"></div>
        <div className="absolute top-1/3 left-1/3 h-60 w-60 rounded-full bg-gray-100 opacity-40 blur-2xl animate-pulse animation-delay-1000 dark:bg-gray-800"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-4">Featured Projects</h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
          </div>

          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">A curated collection of projects showcasing modern web development techniques, innovative solutions, and creative problem-solving approaches.</p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8 animate-fade-in-up animation-delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white">{projects.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white">{categories.length - 1}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white">{filteredProjects.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Showing</div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-12 animate-fade-in-up animation-delay-400">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="text" placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200" />
              </div>

              {/* Category filter & view toggle */}
              <div className="flex items-center gap-4">
                {/* Category filter */}
                <div className="relative">
                  <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-700 dark:text-gray-300">
                    <Filter size={18} />
                    <span className="capitalize">{selectedCategory}</span>
                  </button>

                  {/* Dropdown */}
                  {isFilterOpen && (
                    <div className="absolute bottom-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsFilterOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 capitalize transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl">
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* View mode toggle */}
                <div className="flex bg-gray-50 dark:bg-gray-700 rounded-xl p-1">
                  <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "grid" ? "bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}>
                    <Grid size={18} />
                  </button>
                  <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "list" ? "bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}>
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects list */}
        <div className="animate-fade-in-up animation-delay-500">
          {filteredProjects.length === 0 ? (
            // Empty state
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">No Projects Found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-gray-600 dark:bg-gray-500 text-white rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200">
                Clear Filters
              </button>
            </div>
          ) : (
            // Grid or list
            <div className={viewMode === "grid" ? "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" : "space-y-6"}>
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${600 + index * 100}ms` }}>
                  <ProjectCard project={project} viewMode={viewMode} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load more / info */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300">
              <span>
                Showing {filteredProjects.length} of {projects.length} projects
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Custom animations */}
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

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </main>
  );
}
