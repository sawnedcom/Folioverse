// src/app/contact/page.tsx
// ------------------------------------------------------------
// A complete contact page component that includes a contact form, professional information, social media links, and a FAQ section. It features a responsive layout with animations and a clean, modern design.

import React from "react";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Globe, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactPage(): React.JSX.Element {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background blur effects for visual flair */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gray-200 opacity-30 blur-3xl animate-pulse dark:bg-gray-700"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gray-300 opacity-20 blur-3xl animate-pulse dark:bg-gray-600"></div>
        <div className="absolute top-1/3 right-1/4 h-60 w-60 rounded-full bg-gray-100 opacity-40 blur-2xl animate-pulse dark:bg-gray-800" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 pt-24">
        {/* Page Header and Intro */}
        <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300 mb-4">Let&apos;s Connect</h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 rounded-full"></div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed">Ready to bring your ideas to life? Whether you&apos;re looking to collaborate on a project, need technical consultation, or just want to say hello, I&apos;d love to hear from you.</p>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">24h</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">5★</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Rating</div>
            </div>
          </div>
        </div>

        {/* Main Content: Contact Form and Info Cards */}
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Contact Form Section */}
          <div className="lg:col-span-2 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <Send className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Send a Message</h2>
                  <p className="text-gray-600 dark:text-gray-400">Fill out the form below and I&apos;ll get back to you soon</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Contact Info</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Email</div>
                    <a href="mailto:hello@example.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Phone</div>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Location</div>
                    <span className="text-gray-600 dark:text-gray-400">Earth, Sun, Milky Way</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Timezone</div>
                    <span className="text-gray-600 dark:text-gray-400">GMT+8 (WITA)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Connect Online</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group">
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
                </a>

                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group">
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
                </a>

                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group">
                  <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Twitter</span>
                </a>

                <a href="/resume.pdf" download className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group">
                  <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Resume</span>
                </a>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Currently Available</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">I&apos;m actively taking on new projects and collaborations. Let&apos;s discuss how we can work together to bring your vision to life.</p>
              <div className="mt-4 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Next Available</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Immediately</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Quick answers to common questions</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "What is your typical response time?",
                answer: "I usually respond to all inquiries within 24 hours, often much sooner during business hours.",
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.",
              },
              {
                question: "What types of projects do you take on?",
                answer: "I specialize in web development, particularly React/Next.js applications, e-commerce solutions, and modern web apps.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, I provide ongoing maintenance and support packages for all projects to ensure everything runs smoothly.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-16 text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">Whether you have a clear vision or just an idea, I&apos;m here to help you turn it into reality. Let&apos;s schedule a call to discuss your project needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-8 py-3 bg-gray-600 dark:bg-gray-500 text-white rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 font-medium">
                <Mail size={18} />
                Send Email
              </a>
              <a href="https://calendly.com/yourprofile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-gray-500 dark:hover:border-gray-400 transition-colors duration-200 font-medium">
                <Calendar size={18} />
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
