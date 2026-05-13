import React, { useEffect, useRef, useState } from "react";

const skillGroups = [
   {
      title: "Frontend",
      color: "#6bcfd1",
      bgColor: "rgba(107, 207, 209, 0.08)",
      borderColor: "rgba(107, 207, 209, 0.2)",
      skills: [
         { name: "React.js", level: 90 },
         { name: "TypeScript", level: 86 },
         { name: "Tailwind CSS", level: 92 },
         { name: "Next.js", level: 80 },
      ],
   },
   {
      title: "Backend",
      color: "#0f7d86",
      bgColor: "rgba(15, 125, 134, 0.08)",
      borderColor: "rgba(15, 125, 134, 0.25)",
      skills: [
         { name: "Node.js", level: 88 },
         { name: "Express.js", level: 87 },
         { name: "MongoDB", level: 85 },
         { name: "REST APIs", level: 90 },
      ],
   },
   {
      title: "Blockchain",
      color: "#4a9b9c",
      bgColor: "rgba(74, 155, 156, 0.08)",
      borderColor: "rgba(74, 155, 156, 0.25)",
      skills: [
         { name: "Solidity", level: 82 },
         { name: "Web3.js", level: 84 },
         { name: "Ethers.js", level: 83 },
         { name: "Hardhat", level: 78 },
      ],
   },
   {
      title: "Web3 Standards",
      color: "#2d8a8e",
      bgColor: "rgba(45, 138, 142, 0.08)",
      borderColor: "rgba(45, 138, 142, 0.25)",
      skills: [
         { name: "ERC-20 Tokens", level: 85 },
         { name: "ERC-721 NFTs", level: 82 },
         { name: "Smart Contracts", level: 83 },
         { name: "Wallet Integration", level: 86 },
      ],
   },
];

const techLogos = [
   { name: "React", emoji: "⚛️" },
   { name: "Node.js", emoji: "🟢" },
   { name: "MongoDB", emoji: "🍃" },
   { name: "Solidity", emoji: "🔷" },
   { name: "Web3.js", emoji: "🌐" },
   { name: "Ethers.js", emoji: "⚡" },
   { name: "TypeScript", emoji: "🔵" },
   { name: "Express", emoji: "🚂" },
   { name: "Hardhat", emoji: "🔨" },
   { name: "IPFS", emoji: "📦" },
];

/* ===================== SKILL BAR ===================== */
function SkillBar({ name, level, color }) {
   const [width, setWidth] = useState(0);
   const ref = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setTimeout(() => setWidth(level), 100);
            }
         },
         { threshold: 0.3 },
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
   }, [level]);

   return (
      <div ref={ref} className="mb-4 last:mb-0">
         <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium" style={{ color: "#f8fafc" }}>
               {name}
            </span>
            <span className="text-xs font-medium" style={{ color }}>
               {level}%
            </span>
         </div>

         <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
         >
            <div
               className="h-full rounded-full transition-all duration-1000 ease-out"
               style={{
                  width: `${width}%`,
                  background: `linear-gradient(90deg, ${color}99, ${color})`,
               }}
            />
         </div>
      </div>
   );
}

/* ===================== MAIN COMPONENT ===================== */
export default function Skills() {
   return (
      <section
         id="skills"
         className="section-padding"
         style={{ background: "rgba(0,0,0,0.15)" }}
      >
         <div className="container-max">
            {/* Heading */}
            <div className="text-center mb-14">
               <div className="accent-line mx-auto"></div>
               <h2 className="section-title">Technical Skills</h2>
               <p className="section-subtitle">
                  Technologies I work with day-to-day
               </p>
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
               {skillGroups.map((group) => (
                  <div
                     key={group.title}
                     className="rounded-2xl p-6"
                     style={{
                        background: group.bgColor,
                        border: `1px solid ${group.borderColor}`,
                     }}
                  >
                     <div className="flex items-center gap-2 mb-5">
                        <div
                           className="w-2.5 h-2.5 rounded-full"
                           style={{ background: group.color }}
                        />
                        <h3
                           className="font-semibold text-sm uppercase tracking-wider"
                           style={{ color: group.color }}
                        >
                           {group.title}
                        </h3>
                     </div>

                     {group.skills.map((skill) => (
                        <SkillBar
                           key={skill.name}
                           name={skill.name}
                           level={skill.level}
                           color={group.color}
                        />
                     ))}
                  </div>
               ))}
            </div>

            {/* Tech Logos */}
            <div
               className="rounded-2xl p-6"
               style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(107,207,209,0.1)",
               }}
            >
               <h3
                  className="text-center text-sm font-medium uppercase tracking-widest mb-6"
                  style={{ color: "#606f80" }}
               >
                  Technologies & Tools
               </h3>

               <div className="flex flex-wrap justify-center gap-3">
                  {techLogos.map((tech) => (
                     <div
                        key={tech.name}
                        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                        style={{
                           background: "rgba(255,255,255,0.05)",
                           border: "1px solid rgba(107,207,209,0.15)",
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.borderColor =
                              "rgba(107,207,209,0.4)";
                           e.currentTarget.style.background =
                              "rgba(107,207,209,0.08)";
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.borderColor =
                              "rgba(107,207,209,0.15)";
                           e.currentTarget.style.background =
                              "rgba(255,255,255,0.05)";
                        }}
                     >
                        <span className="text-base">{tech.emoji}</span>
                        <span
                           className="text-sm font-medium"
                           style={{ color: "#f8fafc" }}
                        >
                           {tech.name}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
