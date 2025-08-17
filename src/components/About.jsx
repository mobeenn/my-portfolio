import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });
   return (
      <section
         ref={ref}
         id="about"
         className="w-full bg-[#0a0f1f] text-white sm:py-16 px-6 md:px-20"
      >
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
         >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-20">
               {/* Left Side */}
               <div className="md:w-1/3 w-full space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
                     Profile
                  </h2>
                  <p className="text-gray-300">
                     BS in Computer Science with a focus on modern web
                     technologies and blockchain development.
                  </p>
                  <h3 className="text-2xl font-semibold text-pink-400">
                     Development
                  </h3>
                  <p className="text-gray-300">
                     Passionate about creating modern web applications using the
                     MERN stack and exploring blockchain technologies.
                  </p>
                  <h3 className="text-2xl font-semibold text-pink-400">
                     Experience
                  </h3>
                  <p className="text-gray-300">
                     Full-time developer at Infini8AI, working on AI projects
                     and modern web applications.
                  </p>
               </div>

               {/* Right Side */}
               <div className="md:w-2/3 w-full space-y-6 text-balance">
                  <h2 className="text-4xl font-bold text-pink-500">About Me</h2>
                  <p className="text-gray-300 text-lg ">
                     Hi, I’m{" "}
                     <motion.span
                        className="text-pink-400 font-semibold inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                     >
                        Muhammad Mobeen
                     </motion.span>{" "}
                     – a full-stack developer specializing in{" "}
                     <span className="text-pink-400 font-semibold">
                        <motion.span
                           className="text-pink-400 font-semibold inline-block"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                           MERN stack, Solidity, and Web3.js
                        </motion.span>
                     </span>
                     . I combine my passion for blockchain and AI to deliver
                     modern, efficient, and innovative web solutions.
                  </p>
                  <p className="text-gray-300 text-lg">
                     I have hands-on experience in backend integration, AI
                     integration, and blockchain integration. At CryptoKoder, I
                     developed smart contracts for ICO tokens, tested them
                     rigorously, and implemented blockchain integrations. I’ve
                     also contributed to projects like Inclusive DeFi and
                     Bits&Algorithm, integrating GEm Wallet and MetaMask for
                     seamless user experiences.
                  </p>
                  <p className="text-gray-300 text-lg ">
                     Currently, I’m working as a frontend developer at
                     Infini8AI, focusing on AI integration, Stripe integration,
                     and building interactive web applications. I approach every
                     project creatively and efficiently, ensuring client-focused
                     solutions that solve real-world problems.
                  </p>
               </div>
            </div>
         </motion.h2>
      </section>
   );
};
