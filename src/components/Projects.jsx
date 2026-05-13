import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

import { projects } from "../data/projects";

const tabs = [
   { label: "All", value: "all" },
   { label: "Frontend", value: "frontend" },
   { label: "Full Stack", value: "fullstack" },
   { label: "Blockchain", value: "blockchain" },
];

export default function Projects() {
   const [activeTab, setActiveTab] = useState("all");
   const [hoveredId, setHoveredId] = useState(null);

   const filtered =
      activeTab === "all"
         ? projects
         : projects.filter((p) => p.category === activeTab);

   return (
      <section
         id="projects"
         className="section-padding"
         style={{ background: "rgba(0,0,0,0.1)" }}
      >
         <div className="container-max">
            {/* Heading */}
            <div className="text-center mb-14">
               <div className="accent-line mx-auto"></div>
               <h2 className="section-title">Projects</h2>
               <p className="section-subtitle">
                  A selection of things I've built
               </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-10">
               <div
                  className="flex gap-1 p-1 rounded-xl"
                  style={{
                     background: "rgba(255,255,255,0.04)",
                     border: "1px solid rgba(107,207,209,0.12)",
                  }}
               >
                  {tabs.map((tab) => (
                     <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                        style={{
                           background:
                              activeTab === tab.value
                                 ? "linear-gradient(135deg, #0f7d86, #1a6b73)"
                                 : "transparent",
                           color:
                              activeTab === tab.value ? "#f8fafc" : "#606f80",
                           boxShadow:
                              activeTab === tab.value
                                 ? "0 4px 12px rgba(15, 125, 134, 0.3)"
                                 : "none",
                        }}
                     >
                        {tab.label}
                     </button>
                  ))}
               </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filtered.map((project) => (
                  <div
                     key={project.id}
                     className="rounded-2xl overflow-hidden cursor-pointer"
                     style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(107,207,209,0.12)",
                        transition: "all 0.3s ease",
                     }}
                     onMouseEnter={(e) => {
                        setHoveredId(project.id);
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.borderColor =
                           "rgba(107,207,209,0.3)";
                        e.currentTarget.style.boxShadow =
                           "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(107,207,209,0.08)";
                     }}
                     onMouseLeave={(e) => {
                        setHoveredId(null);
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor =
                           "rgba(107,207,209,0.12)";
                        e.currentTarget.style.boxShadow = "none";
                     }}
                  >
                     {/* Image */}
                     <div className="relative h-48 overflow-hidden">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover transition-transform duration-500"
                           style={{
                              transform:
                                 hoveredId === project.id
                                    ? "scale(1.08)"
                                    : "scale(1)",
                           }}
                        />

                        <div className="absolute top-3 left-3">
                           <span
                              className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase"
                              style={{
                                 background: "rgba(15, 125, 134, 0.85)",
                                 color: "#f8fafc",
                                 backdropFilter: "blur(8px)",
                              }}
                           >
                              {project.category === "fullstack"
                                 ? "Full Stack"
                                 : project.category}
                           </span>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-5">
                        <h3
                           className="font-bold text-base mb-1.5"
                           style={{
                              color:
                                 hoveredId === project.id
                                    ? "#6bcfd1"
                                    : "#f8fafc",
                           }}
                        >
                           {project.title}
                        </h3>

                        <p
                           className="text-xs mb-3 line-clamp-2"
                           style={{ color: "#606f80" }}
                        >
                           {project.description}
                        </p>

                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-1.5">
                              <div
                                 className="w-1.5 h-1.5 rounded-full"
                                 style={{ background: "#6bcfd1" }}
                              />
                              <span
                                 className="text-xs"
                                 style={{ color: "#606f80" }}
                              >
                                 {project.role}
                              </span>
                           </div>

                           <HiChevronRight
                              size={16}
                              style={{ color: "#606f80" }}
                           />
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 mt-3">
                           <a
                              href={project.liveLink}
                              onClick={(e) => e.stopPropagation()}
                              style={{ color: "#6bcfd1" }}
                              className="flex items-center gap-1 text-xs"
                           >
                              <FiExternalLink size={13} />
                              Live
                           </a>

                           <a
                              href={project.githubLink}
                              onClick={(e) => e.stopPropagation()}
                              style={{ color: "#6bcfd1" }}
                              className="flex items-center gap-1 text-xs"
                           >
                              <FaGithub size={13} />
                              Code
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
