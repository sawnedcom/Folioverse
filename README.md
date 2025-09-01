# 🚀 Folioverse – Professional Portfolio & Resume Template

**Folioverse** is a modern, high-performance portfolio and resume template built with Next.js 15, Tailwind CSS v4, and TypeScript. Designed for developers, designers, and creative professionals, Folioverse helps you showcase your skills, projects, and experience with a stunning online presence.

---

## ✨ Features

- Next.js 15 (App Router) – Fast, SEO-friendly, and scalable.
- Tailwind CSS v4 – Rapid UI development with utility-first CSS.
- TypeScript – Reliable, maintainable code.
- Responsive Design – Looks great on all devices.
- Dark/Light Mode – Built-in theme switcher.
- Dynamic Project Pages – Each project gets a unique, auto-generated page.
- Functional Contact Form – Easily connect with external email services.
- SEO Ready – Includes sitemap.xml and robots.txt.
- Easy Customization – Update content and add projects with simple edits.

---

## 📁 Project Structure

```
/
├── public/                 # Static files (images, PDFs)
│   ├── image/              # Project & hero images
│   └── resume.pdf          # Resume in PDF format
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # /about page
│   │   ├── projects/       # /projects (list & detail pages)
│   │   ├── contact/        # /contact page
│   │   ├── resume/         # /resume page
│   │   ├── layout.tsx      # Layout (Navbar & Footer)
│   │   ├── page.tsx        # Homepage (Hero Section)
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   ├── fixtures/           # Demo project data
│   └── types/              # TypeScript interfaces
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

---

## 🛠️ How to Use After Purchase

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Installation Steps

1. **Extract the ZIP file**  
   Unzip the purchased package to your preferred folder.

2. **Install Dependencies**  
   Open your terminal in the project folder and run:

   ```
   npm install
   ```

3. **Start Development Server**

   ```
   npm run dev
   ```

   Your site will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for Production**  
   When ready to deploy, run:
   ```
   npm run build
   npm start
   ```

---

## 🎨 Customization Guide

### 1. Update Page Content

Edit text directly inside these files:

- Homepage → `src/app/page.tsx`
- About Page → `src/app/about/page.tsx`
- Contact Page → `src/app/contact/page.tsx`
- Resume Page → `src/app/resume/page.tsx`

### 2. Add & Manage Projects

All project data is stored in `src/fixtures/projects.ts`.

Add a new project object that matches the `Project` type in `src/types/index.ts`:

```ts
{
  id: 'unique-id-5',
  title: 'My Awesome New Project',
  description: 'A brief description of my project.',
  image: '/image/my-project-image.png',
  slug: 'awesome-new-project',
  tags: [
    { id: 't-next', name: 'Next.js' },
    { id: 't-tw', name: 'Tailwind' }
  ],
}
```

Images should be placed inside the `public/image/` folder.

### 3. Resume PDF

Export your resume as `resume.pdf` and place it inside the `public/` folder.  
The "Download Resume" button on `/resume` will automatically serve this file.
If you have pdf about your resume, put it on public folder :).
### 4. Theming & Colors

Default colors are configured in `tailwind.config.ts`.  
Advanced theming can be achieved with CSS variables.

---

## 📜 License & Usage

This template is licensed for commercial use by the purchaser.  
Redistribution or resale is not permitted.

---

## 💡 Final Note

With Folioverse, you get more than a portfolio template — you get a personal branding platform that looks professional, performs fast, and helps you stand out to clients and recruiters.

---
