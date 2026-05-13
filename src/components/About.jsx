import React from "react";
import {
   GraduationCap,
   Briefcase,
   User,
   MapPin,
   Coffee,
   Star,
} from "lucide-react";

const stats = [
   { label: "Years Experience", value: "2+", icon: Briefcase },
   { label: "Projects Delivered", value: "20+", icon: Star },
   { label: "Smart Contracts", value: "10+", icon: Coffee },
];

function About() {
   return (
      <section id="about" className="section-padding">
         <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                  <div className="relative w-full max-w-md mx-auto lg:mx-0">
                     <div
                        className="absolute -top-3 -left-3 w-full h-full rounded-2xl opacity-40"
                        style={{
                           background:
                              "linear-gradient(135deg, #0f7d86 0%, #6bcfd1 100%)",
                        }}
                     ></div>

                     <div
                        className="relative rounded-2xl overflow-hidden"
                        style={{
                           border: "2px solid rgba(107, 207, 209, 0.2)",
                           boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4)",
                        }}
                     >
                        <img
                           src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt="About Me"
                           className="w-full h-72 object-cover"
                        />

                        <div
                           className="p-6"
                           style={{ background: "rgba(17, 27, 29, 0.95)" }}
                        >
                           <div className="flex items-center gap-2 mb-2">
                              <MapPin size={14} style={{ color: "#6bcfd1" }} />
                              <span
                                 className="text-sm"
                                 style={{ color: "#606f80" }}
                              >
                                 Available Worldwide · Remote
                              </span>
                           </div>

                           <div className="grid grid-cols-3 gap-4 mt-4">
                              {stats.map(({ label, value, icon: Icon }) => (
                                 <div key={label} className="text-center">
                                    <div
                                       className="text-2xl font-bold mb-0.5"
                                       style={{ color: "#6bcfd1" }}
                                    >
                                       {value}
                                    </div>

                                    <div
                                       className="text-xs leading-tight"
                                       style={{ color: "#606f80" }}
                                    >
                                       {label}
                                    </div>

                                    <Icon
                                       size={14}
                                       className="mx-auto mt-1"
                                       style={{ color: "#0f7d86" }}
                                    />
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <div className="accent-line"></div>

                  <h2 className="section-title">About Me</h2>

                  <p className="section-subtitle">
                     Passionate developer bridging Web2 and Web3
                  </p>

                  <p
                     className="text-base leading-relaxed mb-6"
                     style={{
                        color: "#a0b4c0",
                        lineHeight: "1.85",
                     }}
                  >
                     I'm a Full Stack Developer with a deep specialization in
                     MERN stack and blockchain technologies. Over the past 2
                     years, I've built production-ready web applications and
                     deployed smart contracts that interact with real financial
                     value on Ethereum mainnet.
                  </p>

                  <p
                     className="text-base leading-relaxed mb-8"
                     style={{
                        color: "#a0b4c0",
                        lineHeight: "1.85",
                     }}
                  >
                     I believe the future of the internet is decentralized, and
                     I'm passionate about building the tools and infrastructure
                     that will get us there. Whether it's a high-performance
                     REST API or a gas-optimized DeFi protocol, I bring the same
                     attention to detail and engineering rigor to every project.
                  </p>

                  <div className="space-y-4 mb-8">
                     <div
                        className="flex items-start gap-4 p-4 rounded-xl"
                        style={{
                           background: "rgba(255,255,255,0.04)",
                           border: "1px solid rgba(107,207,209,0.12)",
                        }}
                     >
                        <div
                           className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                           style={{
                              background: "rgba(15, 125, 134, 0.2)",
                           }}
                        >
                           <GraduationCap
                              size={18}
                              style={{ color: "#6bcfd1" }}
                           />
                        </div>

                        <div>
                           <h4
                              className="font-semibold mb-0.5"
                              style={{ color: "#f8fafc" }}
                           >
                              Education
                           </h4>

                           <p className="text-sm" style={{ color: "#606f80" }}>
                              Bachelor of Science in Computer Science
                           </p>

                           <p
                              className="text-xs mt-0.5"
                              style={{ color: "#4a6564" }}
                           >
                              2020 – 2024 · GPA: 3.8 / 4.0
                           </p>
                        </div>
                     </div>

                     <div
                        className="flex items-start gap-4 p-4 rounded-xl"
                        style={{
                           background: "rgba(255,255,255,0.04)",
                           border: "1px solid rgba(107,207,209,0.12)",
                        }}
                     >
                        <div
                           className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                           style={{
                              background: "rgba(15, 125, 134, 0.2)",
                           }}
                        >
                           <Briefcase size={18} style={{ color: "#6bcfd1" }} />
                        </div>

                        <div>
                           <h4
                              className="font-semibold mb-0.5"
                              style={{ color: "#f8fafc" }}
                           >
                              Experience
                           </h4>

                           <p className="text-sm" style={{ color: "#606f80" }}>
                              2+ Years — Full Stack MERN + Blockchain
                              Development
                           </p>

                           <p
                              className="text-xs mt-0.5"
                              style={{ color: "#4a6564" }}
                           >
                              Freelance & Open Source · 2022 – Present
                           </p>
                        </div>
                     </div>

                     <div
                        className="flex items-start gap-4 p-4 rounded-xl"
                        style={{
                           background: "rgba(255,255,255,0.04)",
                           border: "1px solid rgba(107,207,209,0.12)",
                        }}
                     >
                        <div
                           className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                           style={{
                              background: "rgba(15, 125, 134, 0.2)",
                           }}
                        >
                           <User size={18} style={{ color: "#6bcfd1" }} />
                        </div>

                        <div>
                           <h4
                              className="font-semibold mb-0.5"
                              style={{ color: "#f8fafc" }}
                           >
                              Focus Areas
                           </h4>

                           <p className="text-sm" style={{ color: "#606f80" }}>
                              DeFi protocols · NFT systems · MERN SaaS apps
                           </p>

                           <p
                              className="text-xs mt-0.5"
                              style={{ color: "#4a6564" }}
                           >
                              Smart contract auditing · Gas optimization
                           </p>
                        </div>
                     </div>
                  </div>

                  <a href="#projects" className="btn-primary">
                     See My Work
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default About;
