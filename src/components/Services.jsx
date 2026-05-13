import React from "react";
import { FaGlobe, FaFileCode, FaCode, FaPuzzlePiece } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
   {
      id: 1,
      icon: FaGlobe,
      title: "Full Stack Web Development",
      description:
         "End-to-end web application development using the MERN stack. From scalable database architecture to pixel-perfect frontends.",
      features: [
         "React.js SPA & SSR applications",
         "Node.js + Express REST APIs",
         "MongoDB database design",
         "JWT authentication & RBAC",
         "Real-time with Socket.io",
      ],
      accentColor: "#0f7d86",
      lightColor: "rgba(15, 125, 134, 0.15)",
   },
   {
      id: 2,
      icon: FaFileCode,
      title: "Blockchain Development",
      description:
         "Building decentralized applications on Ethereum and EVM-compatible chains with security and optimization.",
      features: [
         "Full dApp architecture",
         "On-chain data indexing",
         "Multi-chain compatibility",
         "DeFi protocol development",
         "Gas optimization strategies",
      ],
      accentColor: "#1a6b73",
      lightColor: "rgba(26, 107, 115, 0.15)",
   },
   {
      id: 3,
      icon: FaCode,
      title: "Smart Contract Development",
      description:
         "Secure Solidity smart contracts for tokens, NFTs, DeFi, and DAO systems.",
      features: [
         "ERC-20 / ERC-721 / ERC-1155",
         "DeFi staking & AMMs",
         "Security audits",
         "OpenZeppelin usage",
         "Hardhat testing & deployment",
      ],
      accentColor: "#267880",
      lightColor: "rgba(38, 120, 128, 0.15)",
   },
   {
      id: 4,
      icon: FaPuzzlePiece,
      title: "Web3 Integration",
      description:
         "Connecting web apps to blockchain via wallets, contracts, and token systems.",
      features: [
         "MetaMask / WalletConnect",
         "Ethers.js integration",
         "NFT minting UIs",
         "Token gating systems",
         "IPFS storage solutions",
      ],
      accentColor: "#346870",
      lightColor: "rgba(52, 104, 112, 0.15)",
   },
];

export default function Services() {
   return (
      <section id="services" className="section-padding">
         <div className="container-max">
            {/* Heading */}
            <div className="text-center mb-14">
               <div className="accent-line mx-auto"></div>
               <h2 className="section-title">Services</h2>
               <p className="section-subtitle">What I can build for you</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                     <div
                        key={service.id}
                        className="rounded-2xl p-7 transition-all duration-300"
                        style={{
                           background: "rgba(255,255,255,0.04)",
                           border: "1px solid rgba(107,207,209,0.12)",
                           animationDelay: `${index * 100}ms`,
                        }}
                        onMouseEnter={(e) => {
                           const el = e.currentTarget;
                           el.style.transform = "translateY(-6px)";
                           el.style.background = "rgba(255,255,255,0.06)";
                           el.style.borderColor = `${service.accentColor}60`;
                           el.style.boxShadow = `0 24px 48px rgba(0,0,0,0.3), 0 0 24px ${service.accentColor}20`;
                        }}
                        onMouseLeave={(e) => {
                           const el = e.currentTarget;
                           el.style.transform = "translateY(0)";
                           el.style.background = "rgba(255,255,255,0.04)";
                           el.style.borderColor = "rgba(107,207,209,0.12)";
                           el.style.boxShadow = "none";
                        }}
                     >
                        {/* Icon + Title */}
                        <div className="flex items-start gap-5 mb-5">
                           <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                              style={{
                                 background: service.lightColor,
                                 border: `1px solid ${service.accentColor}40`,
                              }}
                           >
                              <Icon size={22} style={{ color: "#6bcfd1" }} />
                           </div>

                           <div>
                              <h3
                                 className="font-bold text-lg mb-1"
                                 style={{ color: "#f8fafc" }}
                              >
                                 {service.title}
                              </h3>
                              <p
                                 className="text-sm"
                                 style={{ color: "#606f80" }}
                              >
                                 {service.description}
                              </p>
                           </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                           {service.features.map((feature) => (
                              <li
                                 key={feature}
                                 className="flex items-center gap-2.5"
                              >
                                 <div
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: "#6bcfd1" }}
                                 />
                                 <span
                                    className="text-sm"
                                    style={{ color: "#a0b4c0" }}
                                 >
                                    {feature}
                                 </span>
                              </li>
                           ))}
                        </ul>

                        {/* CTA */}
                        <a
                           href="#contact"
                           className="flex items-center gap-2 text-sm font-medium transition-all duration-200"
                           style={{ color: "#6bcfd1" }}
                        >
                           Get a Quote <FiArrowRight />
                        </a>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
