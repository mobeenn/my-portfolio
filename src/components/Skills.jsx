import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
   { name: "MongoDB", color: "from-green-400 to-green-600" },
   { name: "ReactJS", color: "from-blue-400 to-blue-600" },
   { name: "NodeJS", color: "from-green-600 to-green-800" },
   { name: "ExpressJS", color: "from-gray-600 to-gray-800" },
   { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
   { name: "Web3.js", color: "from-purple-400 to-purple-600" },
   { name: "ERC-20 Token", color: "from-yellow-400 to-yellow-600" },
   { name: "Solidity", color: "from-gray-700 to-gray-900" },
   { name: "AI Integration", color: "from-pink-400 to-pink-600" },
   { name: "Stripe Integration", color: "from-indigo-400 to-indigo-600" },
   { name: "Smart Contract Testing", color: "from-red-400 to-red-600" },
   { name: "Build DApps", color: "from-purple-600 to-purple-800" },
];

export const Skills = () => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });
   return (
      <section id="skills" ref={ref} className="py-10 bg-[#0a0f1f]">
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
         >
            Skills & Expertise
         </motion.h2>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-8 xl:mx-[180px] text-nowrap text-[12px] sm:text-[16px]">
            {skills.map((skill, index) => (
               <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
               >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button
                     className={`relative w-full px-6 py-4 bg-gradient-to-r ${skill.color} rounded-lg transform transition-all duration-300 hover:scale-105 cursor-default`}
                  >
                     <span className="font-semibold text-white">
                        {skill.name}
                     </span>
                  </button>
               </motion.div>
            ))}
         </div>
      </section>
   );
};
