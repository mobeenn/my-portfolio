import React from "react";
import { blogs } from "../data/blog";

import { FaArrowLeft } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

export default function BlogPost({ blogId, onBack }) {
   const blog = blogs.find((b) => b.id === blogId);

   if (!blog) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
               <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
               <button onClick={onBack} className="btn-primary">
                  <FaArrowLeft size={16} />
                  Back to blogs
               </button>
            </div>
         </div>
      );
   }

   return (
      <article className="min-h-screen pt-24 pb-16">
         <div className="container-max px-4 sm:px-6 lg:px-8 max-w-3xl">
            {/* Back Button */}
            <button
               onClick={onBack}
               className="flex items-center gap-2 mb-8 text-sm font-medium hover:text-accent transition-colors"
               style={{ color: "#606f80" }}
            >
               <FaArrowLeft size={16} />
               Back to articles
            </button>

            {/* Header */}
            <header className="mb-10">
               <div
                  className="flex flex-wrap items-center gap-4 mb-5 text-sm"
                  style={{ color: "#606f80" }}
               >
                  <div className="flex items-center gap-1.5">
                     <FiCalendar size={14} />
                     {blog.date}
                  </div>

                  <div className="flex items-center gap-1.5">
                     <FiClock size={14} />
                     {blog.readTime}
                  </div>

                  <div className="flex items-center gap-1.5">
                     <FaUser size={14} />
                     {blog.author}
                  </div>
               </div>

               <h1
                  className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                  style={{ color: "#f8fafc" }}
               >
                  {blog.title}
               </h1>

               <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                     <span key={tag} className="tag">
                        {tag}
                     </span>
                  ))}
               </div>
            </header>

            {/* Image */}
            <div
               className="relative rounded-2xl overflow-hidden mb-12 h-96"
               style={{ border: "1px solid rgba(107,207,209,0.2)" }}
            >
               <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
               />
               <div
                  className="absolute inset-0"
                  style={{
                     background:
                        "linear-gradient(to top, rgba(17,27,29,0.6) 0%, transparent 50%)",
                  }}
               />
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
               {blog.sections.map((section, idx) => {
                  switch (section.type) {
                     case "heading":
                        return (
                           <h2
                              key={idx}
                              className="text-3xl font-bold mt-12 mb-6 first:mt-0"
                              style={{ color: "#f8fafc" }}
                           >
                              {section.content}
                           </h2>
                        );

                     case "subheading":
                        return (
                           <h3
                              key={idx}
                              className="text-2xl font-bold mt-8 mb-4"
                              style={{ color: "#6bcfd1" }}
                           >
                              {section.content}
                           </h3>
                        );

                     case "paragraph":
                        return (
                           <p
                              key={idx}
                              className="text-base leading-8 mb-6"
                              style={{ color: "#a0b4c0", lineHeight: "1.9" }}
                           >
                              {section.content}
                           </p>
                        );

                     case "code":
                        return (
                           <pre
                              key={idx}
                              className="code-block mb-6 rounded-xl overflow-x-auto"
                           >
                              <code>{section.content}</code>
                           </pre>
                        );

                     case "list":
                        return (
                           <ul key={idx} className="space-y-2 mb-6 ml-4">
                              {section.items?.map((item, i) => (
                                 <li
                                    key={i}
                                    className="flex gap-3"
                                    style={{ color: "#a0b4c0" }}
                                 >
                                    <span style={{ color: "#6bcfd1" }}>•</span>
                                    <span>{item}</span>
                                 </li>
                              ))}
                           </ul>
                        );

                     default:
                        return null;
                  }
               })}
            </div>

            {/* Author Box */}
            <div
               className="mt-16 pt-8 rounded-2xl p-8"
               style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(107,207,209,0.12)",
               }}
            >
               <div className="flex items-center gap-4">
                  <div
                     className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                     style={{
                        background: "linear-gradient(135deg, #0f7d86, #6bcfd1)",
                        color: "#f8fafc",
                     }}
                  >
                     A
                  </div>
                  <div>
                     <p className="font-semibold" style={{ color: "#f8fafc" }}>
                        {blog.author}
                     </p>
                     <p className="text-sm" style={{ color: "#606f80" }}>
                        Full Stack Developer & Blockchain Enthusiast
                     </p>
                  </div>
               </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
               <button
                  onClick={onBack}
                  className="btn-outline flex-1 justify-center"
               >
                  <FaArrowLeft size={16} />
                  Back to articles
               </button>

               <a href="#contact" className="btn-primary flex-1 justify-center">
                  Get in touch
               </a>
            </div>
         </div>
      </article>
   );
}
