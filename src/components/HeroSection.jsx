import React from "react";
import { FiDownload, FiEye } from "react-icons/fi";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function HeroSection() {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });
   return (
      <section ref={ref}>
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
         >
            <div className="  flex flex-col bg-[#0A0F1F] text-white lg:flex-row items-center justify-center py-12 sm:py-20 ">
               {/* Left Content */}
               <div className="flex-1 text-center  space-y-6 ">
                  <h1 className="text-4xl md:text-6xl sm:-ml-20 font-bold leading-tight">
                     Hi, I'm <span className="text-pink-500">Mobeen</span>
                  </h1>
                  <p className="text-gray-300 mx-4 lg:ml-20 text-lg leading-9 text-pretty">
                     I’m a{" "}
                     <motion.span
                        className="text-pink-400 font-semibold inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                     >
                        Frontend & Blockchain Developer
                     </motion.span>{" "}
                     skilled in building modern web applications with{" "}
                     <motion.span
                        className="text-pink-400 font-semibold inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                           duration: 0.6,
                           ease: "easeOut",
                           delay: 0.2,
                        }}
                     >
                        React.js
                     </motion.span>{" "}
                     and the{" "}
                     <motion.span
                        className="text-pink-400 font-semibold inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                           duration: 0.6,
                           ease: "easeOut",
                           delay: 0.4,
                        }}
                     >
                        MERN stack
                     </motion.span>
                     . I also work with{" "}
                     <motion.span
                        className="text-pink-400 font-semibold inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                           duration: 0.6,
                           ease: "easeOut",
                           delay: 0.6,
                        }}
                     >
                        Solidity
                     </motion.span>{" "}
                     to write and test smart contracts, build DApps, and
                     integrate blockchain with frontend technologies.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center ">
                     <a
                        href="https://res.cloudinary.com/dgjwmmiz6/raw/upload/v1755679617/M-Mobeen-resume_w5pt0q.docx"
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white font-semibold rounded-[8px] shadow-lg hover:bg-pink-600 transition"
                     >
                        <FiDownload size={20} />
                        Resume
                     </a>

                     <button>
                        <a
                           href="#projects"
                           className="flex items-center gap-2 px-6 py-2.5 border-2 border-pink-500 text-pink-500 font-semibold rounded-[8px] hover:bg-pink-500 hover:text-white transition"
                        >
                           <FiEye size={20} />
                           View Projects
                        </a>
                     </button>
                  </div>
               </div>

               {/* Right Image */}
               <div className="flex-1 flex justify-center my-8">
                  <div className="relative w-60 h-60 md:w-102 md:h-102 rounded-full p-[4px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg">
                     <img
                        src={logo}
                        alt="Mobeen"
                        className="w-full h-full object-cover rounded-full border-4 border-[#0A0F1F]"
                     />
                  </div>
               </div>
            </div>
         </motion.h2>
      </section>
   );
}
