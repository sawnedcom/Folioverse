// src/types/index.ts
// ------------------------------------------------------------
//   This file defines TypeScript interfaces for project-related data.
//   Tag: represents a label or keyword with an id and name.
//   Project: represents a project with details such as title, description, image, category,
//   optional URLs (live demo and GitHub), metadata (duration, team, year, client),
//   status tracking, and an optional date field.

export interface Tag {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  tags: Tag[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  team?: string;
  year?: number;
  client?: string;
  status?: "ongoing" | "completed" | "planned";
  date?: string;
}
