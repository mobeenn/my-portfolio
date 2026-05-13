// import React, { useEffect, useRef, useState } from "react";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// import { FiArrowRight, FiMessageCircle, FiDownload } from "react-icons/fi";
// import Person from "../assets/person.png";
// const roles = [
//    "Full Stack Developer",
//    "MERN Stack Expert",
//    "Blockchain Developer",
//    "Smart Contract Engineer",
//    "Web3 Integrator",
// ];

// export default function Hero() {
//    const [roleIndex, setRoleIndex] = useState(0);
//    const [displayed, setDisplayed] = useState("");
//    const [deleting, setDeleting] = useState(false);
//    const timeoutRef = useRef(null);

//    useEffect(() => {
//       const currentRole = roles[roleIndex];

//       if (!deleting && displayed.length < currentRole.length) {
//          timeoutRef.current = setTimeout(() => {
//             setDisplayed(currentRole.slice(0, displayed.length + 1));
//          }, 80);
//       } else if (!deleting && displayed.length === currentRole.length) {
//          timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
//       } else if (deleting && displayed.length > 0) {
//          timeoutRef.current = setTimeout(() => {
//             setDisplayed(displayed.slice(0, -1));
//          }, 45);
//       } else if (deleting && displayed.length === 0) {
//          setDeleting(false);
//          setRoleIndex((prev) => (prev + 1) % roles.length);
//       }

//       return () => clearTimeout(timeoutRef.current);
//    }, [displayed, deleting, roleIndex]);

//    const socialLinks = [
//       { icon: FaGithub, label: "GitHub" },
//       { icon: FaLinkedin, label: "LinkedIn" },
//       { icon: FaTwitter, label: "Twitter" },
//    ];

//    return (
//       <section
//          id="home"
//          className="relative min-h-screen flex items-center overflow-hidden pt-16"
//       >
//          {/* Background blobs */}
//          <div
//             className="hero-blob w-96 h-96 opacity-20"
//             style={{ background: "#0f7d86", top: "10%", right: "5%" }}
//          />
//          <div
//             className="hero-blob w-64 h-64 opacity-10"
//             style={{ background: "#6bcfd1", bottom: "15%", left: "2%" }}
//          />

//          <div className="container-max section-padding py-12 w-full">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                {/* LEFT SIDE */}
//                <div>
//                   <div className="flex items-center gap-3 mb-6">
//                      <div
//                         className="w-2 h-2 rounded-full animate-pulse"
//                         style={{ background: "#6bcfd1" }}
//                      />
//                      <span
//                         className="text-sm font-medium uppercase"
//                         style={{ color: "#6bcfd1" }}
//                      >
//                         Available for work
//                      </span>
//                   </div>

//                   <h1 className="text-4xl sm:text-5xl lg:text-5xl leading-tight font-bold mb-4">
//                      Hi, I'm <span className="text-gradient">Dev Mobeen</span>
//                   </h1>

//                   <div className=" flex items-center gap-2 mb-6 h-10">
//                      <span
//                         className="text-xl sm:text-2xl font-semibold"
//                         style={{ color: "#606f80" }}
//                      >
//                         I'm a
//                      </span>
//                      <span
//                         className="text-xl sm:text-2xl font-semibold"
//                         style={{ color: "#6bcfd1" }}
//                      >
//                         {displayed}
//                      </span>
//                   </div>

//                   <p
//                      className="text-lg leading-relaxed mb-8 max-w-lg"
//                      style={{ color: "#606f80", lineHeight: "1.8" }}
//                   >
//                      2+ years of experience crafting scalable full-stack web
//                      applications and decentralized blockchain solutions. From
//                      MERN stack APIs to Solidity smart contracts. I build things
//                      that matter.
//                   </p>

//                   {/* Buttons */}
//                   <div className="flex flex-wrap gap-4 mb-10">
//                      <a
//                         href="#projects"
//                         className="btn-primary flex items-center gap-2"
//                      >
//                         View Projects <FiArrowRight />
//                      </a>

//                      <a
//                         href="#contact"
//                         className="btn-outline flex items-center gap-2"
//                      >
//                         <FiMessageCircle /> Contact
//                      </a>

//                      <a
//                         href="#"
//                         className="btn-outline flex items-center gap-2"
//                      >
//                         <FiDownload /> Resume
//                      </a>
//                   </div>

//                   {/* Social */}
//                   <div className="flex items-center gap-4">
//                      <span style={{ color: "#606f80" }}>Find me:</span>

//                      <div className="flex gap-3">
//                         {socialLinks.map(({ icon: Icon, label }) => (
//                            <a
//                               key={label}
//                               href="#"
//                               className="w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:scale-110"
//                               style={{
//                                  background: "rgba(255,255,255,0.06)",
//                                  border: "1px solid rgba(107,207,209,0.15)",
//                                  color: "#606f80",
//                               }}
//                            >
//                               <Icon size={16} />
//                            </a>
//                         ))}
//                      </div>
//                   </div>
//                </div>

//                {/* RIGHT SIDE */}
//                {/* <div className="flex justify-center lg:justify-end">
//                   <img
//                      src={Person}
//                      alt="developer"
//                      className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
//                      style={{
//                         border: "2px solid rgba(107,207,209,0.3)",
//                         boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
//                      }}
//                   />
//                </div> */}
//                <div className="flex justify-center lg:justify-end relative">
//                   <div className="relative group">
//                      {/* 🔹 Top Right Badge */}
//                      <div
//                         className="absolute -top-6 -right-6 px-4 py-2 rounded-xl text-sm font-semibold animate-bounce-slow"
//                         style={{
//                            background: "rgba(107,207,209,0.1)",
//                            border: "1px solid rgba(107,207,209,0.3)",
//                            color: "#6bcfd1",
//                            backdropFilter: "blur(10px)",
//                         }}
//                      >
//                         🚀 Web3 Ready
//                      </div>

//                      {/* 🔹 Bottom Left Badge */}
//                      <div
//                         className="absolute -bottom-6 -left-6 px-4 py-2 rounded-xl text-sm font-semibold animate-pulse"
//                         style={{
//                            background: "rgba(255,255,255,0.05)",
//                            border: "1px solid rgba(107,207,209,0.2)",
//                            color: "#6bcfd1",
//                            backdropFilter: "blur(10px)",
//                         }}
//                      >
//                         💼 2+ Years Experience
//                      </div>

//                      {/* 🔹 Glow Background */}
//                      <div
//                         className="absolute inset-0 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"
//                         style={{
//                            background:
//                               "radial-gradient(circle, #6bcfd1, transparent)",
//                         }}
//                      />

//                      {/* 🔹 Image */}
//                      <img
//                         src={Person}
//                         alt="developer"
//                         className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl animate-float"
//                         style={{
//                            border: "2px solid rgba(107,207,209,0.3)",
//                            boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
//                         }}
//                      />
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// }

// animation code for hero section with dynamic role typing effect, animated background blobs, and social media icons.

// import React, { useEffect, useRef, useState } from "react";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { FiArrowRight, FiMessageCircle, FiDownload } from "react-icons/fi";
// import Person from "../assets/person.png";

// const roles = [
//    "Full Stack Developer",
//    "MERN Stack Expert",
//    "Blockchain Developer",
//    "Smart Contract Engineer",
//    "Web3 Integrator",
// ];

// export default function Hero() {
//    const [roleIndex, setRoleIndex] = useState(0);
//    const [displayed, setDisplayed] = useState("");
//    const [deleting, setDeleting] = useState(false);
//    const timeoutRef = useRef(null);

//    useEffect(() => {
//       const currentRole = roles[roleIndex];

//       if (!deleting && displayed.length < currentRole.length) {
//          timeoutRef.current = setTimeout(() => {
//             setDisplayed(currentRole.slice(0, displayed.length + 1));
//          }, 80);
//       } else if (!deleting && displayed.length === currentRole.length) {
//          timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
//       } else if (deleting && displayed.length > 0) {
//          timeoutRef.current = setTimeout(() => {
//             setDisplayed(displayed.slice(0, -1));
//          }, 45);
//       } else if (deleting && displayed.length === 0) {
//          setDeleting(false);
//          setRoleIndex((prev) => (prev + 1) % roles.length);
//       }

//       return () => clearTimeout(timeoutRef.current);
//    }, [displayed, deleting, roleIndex]);

//    const socialLinks = [
//       { icon: FaGithub, label: "GitHub" },
//       { icon: FaLinkedin, label: "LinkedIn" },
//       { icon: FaTwitter, label: "Twitter" },
//    ];

//    return (
//       <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
//          {/* 🔥 Animated Background */}
//          <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="bg-blob w-96 h-96 -top-20 -left-20" />
//             <div className="bg-blob w-80 h-80 -bottom-15 -right-15" />
//             <div className="bg-lines" />
//             <div className="bg-grid" />
//          </div>

//          <div className="container-max section-padding py-12 w-full">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                {/* LEFT */}
//                <div>
//                   <h1 className="text-4xl sm:text-5xl font-bold mb-4">
//                      Muhammad Mobeen
//                   </h1>

//                   <div className="flex items-center gap-2 mb-6 h-10">
//                      <span className="text-xl font-semibold text-gray-400">
//                         I'm a
//                      </span>
//                      <span className="text-xl font-semibold text-cyan-400">
//                         {displayed}
//                      </span>
//                   </div>

//                   <p className="text-lg text-gray-400 mb-8 max-w-lg">
//                      I build scalable web applications and secure blockchain
//                      solutions. From MERN APIs to Solidity smart contracts — I
//                      turn ideas into real products.
//                   </p>

//                   <div className="flex gap-4 mb-10">
//                      <a
//                         href="#projects"
//                         className="btn-primary flex gap-2 items-center"
//                      >
//                         View Projects <FiArrowRight />
//                      </a>
//                      <a
//                         href="#contact"
//                         className="btn-outline flex gap-2 items-center"
//                      >
//                         <FiMessageCircle /> Contact
//                      </a>
//                   </div>

//                   <div className="flex gap-3">
//                      {socialLinks.map(({ icon: Icon, label }) => (
//                         <a key={label} href="#" className="icon-box">
//                            <Icon size={16} />
//                         </a>
//                      ))}
//                   </div>
//                </div>

//                {/* RIGHT IMAGE */}
//                <div className="flex justify-center lg:justify-end relative">
//                   <div className="relative group">
//                      {/* Badge Top */}
//                      <div className="badge top-badge">🚀 Web3 Ready</div>

//                      {/* Badge Bottom */}
//                      <div className="badge bottom-badge">
//                         💼 2+ Years Experience
//                      </div>

//                      {/* Glow */}
//                      <div className="glow" />

//                      <img src={Person} alt="developer" className="hero-img" />
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// }

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import Person from "../assets/person.png";

const roles = [
   "Full Stack Developer",
   "MERN Stack Expert",
   "Blockchain Developer",
   "Smart Contract Engineer",
   "Web3 Integrator",
];

export default function Hero() {
   const [roleIndex, setRoleIndex] = useState(0);
   const [displayed, setDisplayed] = useState("");
   const [deleting, setDeleting] = useState(false);
   const timeoutRef = useRef(null);

   useEffect(() => {
      const currentRole = roles[roleIndex];

      if (!deleting && displayed.length < currentRole.length) {
         timeoutRef.current = setTimeout(() => {
            setDisplayed(currentRole.slice(0, displayed.length + 1));
         }, 80);
      } else if (!deleting && displayed.length === currentRole.length) {
         timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && displayed.length > 0) {
         timeoutRef.current = setTimeout(() => {
            setDisplayed(displayed.slice(0, -1));
         }, 45);
      } else if (deleting && displayed.length === 0) {
         setDeleting(false);
         setRoleIndex((prev) => (prev + 1) % roles.length);
      }

      return () => clearTimeout(timeoutRef.current);
   }, [displayed, deleting, roleIndex]);

   const socialLinks = [
      { icon: FaGithub, label: "GitHub" },
      { icon: FaLinkedin, label: "LinkedIn" },
      { icon: FaTwitter, label: "Twitter" },
   ];

   return (
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
         {/* 🔥 Animated Background */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="bg-blob w-96 h-96 -top-20 -left-20" />
            <div className="bg-blob w-80 h-80 -bottom-15 -right-15" />
            <div className="bg-lines" />
            <div className="bg-grid" />
         </div>

         <div className="container-max section-padding py-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* LEFT */}
               <div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                     Muhammad Mobeen
                  </h1>

                  <div className="flex items-center gap-2 mb-6 h-10">
                     <span className="text-xl font-semibold text-gray-400">
                        I'm a
                     </span>
                     <span className="text-xl font-semibold text-cyan-400">
                        {displayed}
                     </span>
                  </div>

                  <p className="text-lg text-gray-400 mb-8 max-w-lg">
                     I build scalable web applications and secure blockchain
                     solutions. From MERN APIs to Solidity smart contracts — I
                     turn ideas into real products.
                  </p>

                  <div className="flex gap-4 mb-10">
                     <a
                        href="#projects"
                        className="btn-primary flex gap-2 items-center"
                     >
                        View Projects <FiArrowRight />
                     </a>
                     <a
                        href="#contact"
                        className="btn-outline flex gap-2 items-center"
                     >
                        <FiMessageCircle /> Contact
                     </a>
                  </div>

                  <div className="flex gap-3">
                     {socialLinks.map(({ icon: Icon, label }) => (
                        <a key={label} href="#" className="icon-box">
                           <Icon size={16} />
                        </a>
                     ))}
                  </div>
               </div>

               {/* RIGHT (3D Tilt Image) */}
               <div className="flex justify-center lg:justify-end relative">
                  <div
                     className="relative group tilt-card"
                     onMouseMove={(e) => {
                        const card = e.currentTarget;
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;

                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                           "rotateX(0deg) rotateY(0deg)";
                     }}
                  >
                     <div className="badge top-badge">🚀 Web3 Ready</div>
                     <div className="badge bottom-badge">
                        💼 2+ Years Experience
                     </div>

                     <div className="glow" />

                     <img src={Person} alt="developer" className="hero-img" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
