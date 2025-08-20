import React from "react";

import logo2 from "../assets/logo2.png";
import vscode from "../assets/vscode.jpg";
import laptop from "../assets/laptop.jpg";
import chatgpt from "../assets/chatgpt.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const teamData = [
   {
      id: 1,
      img: logo2,
      title: "Muhammad Mobeen",
      desc: "Full Stack Developer (MERN + Blockchain). Passionate about building modern web apps.",
   },
   {
      id: 2,
      img: vscode,
      title: "Visual Studio Code",
      desc: "The main code editor I use for building projects efficiently.",
   },
   {
      id: 3,
      img: laptop,
      title: "Laptop",
      desc: "My workstation where all the ideas come to life.",
   },
   {
      id: 4,
      img: chatgpt,
      title: "ChatGPT",
      desc: "My AI companion that helps me brainstorm and solve problems faster.",
   },
];
export const Team = () => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   return (
      <section ref={ref} className="py-16 bg-[#0a0f1f]" id="team">
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
         >
            <div className="max-w-6xl mx-auto px-4 text-center">
               <h2 className="text-3xl font-bold mb-12 text-white">
                  Meet the Team
               </h2>
               <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamData.map((item) => (
                     <div
                        key={item.id}
                        className="group bg-white shadow-lg rounded-2xl p-6 transition-all duration-500 hover:bg-black hover:shadow-2xl"
                     >
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-transparent group-hover:border-white transition-all duration-500"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                           {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm group-hover:text-gray-300 transition-colors duration-500">
                           {item.desc}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </motion.h2>
      </section>
   );
};
