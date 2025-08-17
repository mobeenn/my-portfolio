import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, X } from "lucide-react";
import papu from "../assets/papu.png";
import datalumio from "../assets/datalumio.png";
import inclusive from "../assets/inclusive.png";
import bitsAndAlgorithm from "../assets/bitsAndAlgorithm.png";

const projects = [
   {
      title: "BITS & Algorithm",
      description: "Blockchain-based digital will creation platform",
      image: bitsAndAlgorithm,
      category: "Blockchain", // ✅ category add
      demoVideo:
         "https://res.cloudinary.com/dgjwmmiz6/video/upload/v1755369509/bits_algorithm_user_panel_srcgit.mp4",
      features: [
         "Digital will creation with asset distribution",
         "Children information management",
         "Gem Wallet integration for XRP Ledger",
         "Immutable blockchain records",
      ],
      techStack: ["React", "Node.js", "XRP Ledger", "Web3.js"],
      techniques: [
         "Authentication/Authorization",
         "API Integration",
         "Blockchain Integration",
         "Smart Contract Development",
      ],
      links: {
         live: "https://bits-and-algorithms-user-panel.vercel.app/user-signin",
         github: "https://github.com/mobeenn/bits_algorithm_user_panel",
      },
   },
   {
      title: "Inclusive DeFi",
      description: "Multi-panel DeFi platform with ICO token rewards",
      image: inclusive,
      category: "Blockchain", // ✅ category add
      demoVideo:
         "https://res.cloudinary.com/dgjwmmiz6/video/upload/v1755422459/inclusive_defi_user_panel_z6ajml.mp4",
      features: [
         "Admin, Creator, and Investor panels",
         "Project listing functionality",
         "ICO token reward system",
         "INCD token integration",
      ],
      techStack: ["React", "Solidity", "Web3.js", "BNB Chain"],
      techniques: [
         "Smart Contract Development",
         "Token Generation (ERC-20)",
         "Multi-panel Architecture",
         "Blockchain Integration",
      ],
      links: {
         live: "http://100.29.45.154:3000/signin",
         github: "https://github.com/mobeenn/inclusive_defi_frontend_fyp",
      },
   },
   {
      title: "Papu.AI",
      description: "AI-powered Avatar & Video Generation Platform",
      image: papu,
      category: "AI", // ✅ category add
      demoVideo:
         "https://res.cloudinary.com/dgjwmmiz6/video/upload/v1755363676/papu.ai_a8cebr.mp4",
      features: [
         "User Authentication",
         "Subscription Plans – Starter, Monthly, Yearly (Stripe Integration)",
         "VEO Video Creation (Generate Custom Videos from Prompt)",
         "AI-Avatar Generation",
         "Credit-Based Usage System",
      ],
      techStack: ["React.js", "Tailwind CSS", "Stripe API", "AI Integrations"],
      techniques: [
         "Authentication/Authorization",
         "API Integration",
         "Blockchain Integration",
         "Smart Contract Development",
      ],
      links: {
         live: "https://papu.ai/",
         github: "https://github.com/mobeenn/papu.ai",
      },
   },
   {
      title: "Data Lumio",
      description: "AI-powered research assistant",
      image: datalumio,
      category: "AI", // ✅ category add
      demoVideo:
         "https://res.cloudinary.com/dgjwmmiz6/video/upload/v1755424206/Screen_Recording_2025-08-17_144413_xtmxez.mp4",
      features: [
         "AI-Powered Data Analysis",
         "Data Transformation",
         "Time-Saving Automation",
         "Export Options",
      ],
      techStack: ["React", "Python", "Firebase", "AI/ML Integration"],
      techniques: [
         "Data Mining techniques",
         "Visualization",
         "Firebase Hosting",
         "AI requests & Data processing",
      ],
      links: {
         live: "https://data-lumio.web.app/",
         github: "https://github.com/mobeenn/data-lumio",
      },
   },
];

export const Projects = () => {
   const [selectedProject, setSelectedProject] = useState(null);
   const [showVideo, setShowVideo] = useState(false);
   const [activeTab, setActiveTab] = useState("All");

   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   const closeVideo = () => setShowVideo(false);

   // ✅ filter projects based on active tab
   const filteredProjects =
      activeTab === "All"
         ? projects
         : projects.filter((p) => p.category === activeTab);

   return (
      <section id="projects" ref={ref} className="py-20 bg-[#0a0f1f]">
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 dark:text-white"
         >
            Featured Projects
         </motion.h2>

         {/* ✅ Tabs */}
         <div className="flex justify-center gap-4 mb-12">
            {["All", "Blockchain", "AI"].map((tab) => (
               <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                     activeTab === tab
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
               >
                  {tab}
               </button>
            ))}
         </div>

         <div className="grid md:grid-cols-2 gap-8 mx-8 xl:mx-[180px]">
            {filteredProjects.map((project, index) => (
               <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onClick={() =>
                     setSelectedProject(
                        selectedProject === index ? null : index
                     )
                  }
                  className="cursor-pointer group"
               >
                  {/* ✅ project card */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-bold text-white mb-2">
                           {project.title}
                        </h3>
                        <p className="text-gray-200">{project.description}</p>
                     </div>
                  </div>

                  {/* ✅ expand details */}
                  {selectedProject === index && (
                     <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                     >
                        <div className="mb-4">
                           <h4 className="font-semibold text-lg mb-2 dark:text-white">
                              Features:
                           </h4>
                           <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                              {project.features.map((feature, i) => (
                                 <li key={i}>{feature}</li>
                              ))}
                           </ul>
                        </div>

                        <div className="mb-4">
                           <h4 className="font-semibold text-lg mb-2 dark:text-white">
                              Tech Stack:
                           </h4>
                           <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, i) => (
                                 <span
                                    key={i}
                                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm"
                                 >
                                    {tech}
                                 </span>
                              ))}
                           </div>
                        </div>

                        <div className="mb-4">
                           <h4 className="font-semibold text-lg mb-2 dark:text-white">
                              Techniques:
                           </h4>
                           <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                              {project.techniques.map((technique, i) => (
                                 <li key={i}>{technique}</li>
                              ))}
                           </ul>
                        </div>

                        {/* ✅ Links */}
                        <div className="flex gap-4 mt-4">
                           {project.links?.live && (
                              <a
                                 href={project.links.live}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                              >
                                 Live Demo
                              </a>
                           )}
                           {project.links?.github && (
                              <a
                                 href={project.links.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
                              >
                                 GitHub
                              </a>
                           )}
                        </div>

                        {/* ✅ Watch Demo */}
                        <motion.button
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           onClick={(e) => {
                              e.stopPropagation();
                              setShowVideo(true);
                           }}
                           className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                           <Play className="w-5 h-5" />
                           <span>Watch Demo</span>
                        </motion.button>
                     </motion.div>
                  )}
               </motion.div>
            ))}
         </div>

         {/* ✅ Video Modal */}
         <AnimatePresence>
            {showVideo && selectedProject !== null && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                  onClick={closeVideo}
               >
                  <motion.div
                     initial={{ scale: 0.9 }}
                     animate={{ scale: 1 }}
                     exit={{ scale: 0.9 }}
                     className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <button
                        onClick={closeVideo}
                        className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                     >
                        <X className="w-6 h-6 text-white" />
                     </button>
                     <video
                        controls
                        className="w-full aspect-video"
                        src={filteredProjects[selectedProject].demoVideo}
                     >
                        Your browser does not support the video tag.
                     </video>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </section>
   );
};
