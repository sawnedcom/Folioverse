// src/app/components/ContactForm.tsx
// ------------------------------------------------------------
// A dynamic contact form component with state management for input fields and a submission handler.

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    // Place your form submission logic here
    // Example: Using Formspree or another API
    // For now, we will just log the data to the console
    console.log("Form data:", formData);

    // Simulate successful submission
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-xl p-8 shadow-lg dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Full Name
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 p-2 text-black shadow-sm focus:border-folioverse-accent focus:ring-folioverse-accent dark:border-gray-700 dark:bg-gray-700 dark:text-white" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-white font-medium">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 p-2 text-black shadow-sm focus:border-folioverse-accent focus:ring-folioverse-accent dark:border-gray-700 dark:bg-gray-700 dark:text-white" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-white font-medium">
            Message
          </label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 p-2 text-black shadow-sm focus:border-folioverse-accent focus:ring-folioverse-accent dark:border-gray-700 dark:bg-gray-700 dark:text-white" required />
        </div>
        <button type="submit" className="w-fit rounded-md bg-folioverse-accent px-4 py-2 font-bold text-white shadow-lg bg-slate-700 transition-transform hover:scale-105">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center font-semibold text-folioverse-accent">{status}</p>}
    </div>
  );
}
