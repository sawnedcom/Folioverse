// src/fixtures/projects.ts
// // ------------------------------------------------------------
// Projects Data
// List of project objects following the Project type

import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Folioverse Template",
    description: "A professional and modern portfolio template built with Next.js, Tailwind CSS, and TypeScript.",
    image: "/image/image.png",
    slug: "folioverse-template",
    tags: [
      { id: "t1", name: "Next.js" },
      { id: "t2", name: "Tailwind CSS" },
    ],
    category: "Web Development",
    githubUrl: "https://github.com/username/folioverse-template",
    liveUrl: "https://folioverse-demo.vercel.app",
  },
  {
    id: "2",
    title: "E-commerce Dashboard",
    description: "Admin dashboard to manage orders, products, and sales reports.",
    image: "/image/image.png",
    slug: "ecommerce-dashboard",
    tags: [
      { id: "t3", name: "React" },
      { id: "t4", name: "TypeScript" },
    ],
    category: "Dashboard",
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
  },
  {
    id: "3",
    title: "Personal Blog",
    description: "A simple blog app with Markdown support and comment system.",
    image: "/image/image.png",
    slug: "personal-blog",
    tags: [
      { id: "t5", name: "Gatsby" },
      { id: "t6", name: "GraphQL" },
    ],
    category: "Content Platform",
    githubUrl: "https://github.com/username/personal-blog",
    liveUrl: "https://personal-blog-demo.vercel.app",
  },
];
