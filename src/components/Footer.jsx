// import React from "react";
// import { Github, Linkedin, Twitter, Code2 } from "lucide-react";
// const currentYear = new Date().getFullYear();

// const socialLinks = [
//    { icon: Github, href: "#", label: "GitHub" },
//    { icon: Linkedin, href: "#", label: "LinkedIn" },
//    { icon: Twitter, href: "#", label: "Twitter" },
// ];

// const quickLinks = [
//    { label: "Home", href: "#home" },
//    { label: "About", href: "#about" },
//    { label: "Projects", href: "#projects" },
//    { label: "Services", href: "#services" },
//    { label: "Blogs", href: "#blogs" },
//    { label: "Contact", href: "#contact" },
// ];

// export default function Footer() {
//    return (
//       <footer
//          className="section-padding border-t"
//          style={{
//             background: "rgba(0,0,0,0.3)",
//             borderColor: "rgba(107,207,209,0.08)",
//          }}
//       >
//          <div className="container-max">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//                <div>
//                   <div className="flex items-center gap-2.5 mb-4">
//                      <div
//                         className="w-8 h-8 rounded-lg flex items-center justify-center"
//                         style={{
//                            background:
//                               "linear-gradient(135deg, #0f7d86, #6bcfd1)",
//                         }}
//                      >
//                         <Code2 size={16} className="text-white" />
//                      </div>

//                      <span
//                         className="font-bold text-base"
//                         style={{ color: "#f8fafc" }}
//                      >
//                         Alex<span style={{ color: "#6bcfd1" }}>Dev</span>
//                      </span>
//                   </div>

//                   <p className="text-sm mb-4" style={{ color: "#606f80" }}>
//                      Full Stack MERN + Blockchain Developer crafting modern web
//                      experiences.
//                   </p>

//                   <div className="flex gap-3">
//                      {socialLinks.map(({ icon: Icon, href, label }) => (
//                         <a
//                            key={label}
//                            href={href}
//                            aria-label={label}
//                            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
//                            style={{
//                               background: "rgba(255,255,255,0.06)",
//                               border: "1px solid rgba(107,207,209,0.15)",
//                               color: "#606f80",
//                            }}
//                            onMouseEnter={(e) => {
//                               e.currentTarget.style.color = "#6bcfd1";
//                               e.currentTarget.style.borderColor =
//                                  "rgba(107,207,209,0.5)";
//                               e.currentTarget.style.background =
//                                  "rgba(107,207,209,0.1)";
//                            }}
//                            onMouseLeave={(e) => {
//                               e.currentTarget.style.color = "#606f80";
//                               e.currentTarget.style.borderColor =
//                                  "rgba(107,207,209,0.15)";
//                               e.currentTarget.style.background =
//                                  "rgba(255,255,255,0.06)";
//                            }}
//                         >
//                            <Icon size={16} />
//                         </a>
//                      ))}
//                   </div>
//                </div>

//                <div>
//                   <h4
//                      className="font-semibold mb-4"
//                      style={{ color: "#f8fafc" }}
//                   >
//                      Quick Links
//                   </h4>

//                   <ul className="space-y-2.5">
//                      {quickLinks.slice(0, 3).map(({ label, href }) => (
//                         <li key={label}>
//                            <a
//                               href={href}
//                               className="text-sm transition-colors duration-200 hover:text-accent"
//                               style={{ color: "#606f80" }}
//                            >
//                               {label}
//                            </a>
//                         </li>
//                      ))}
//                   </ul>
//                </div>

//                <div>
//                   <h4
//                      className="font-semibold mb-4"
//                      style={{ color: "#f8fafc" }}
//                   >
//                      More
//                   </h4>

//                   <ul className="space-y-2.5">
//                      {quickLinks.slice(3).map(({ label, href }) => (
//                         <li key={label}>
//                            <a
//                               href={href}
//                               className="text-sm transition-colors duration-200 hover:text-accent"
//                               style={{ color: "#606f80" }}
//                            >
//                               {label}
//                            </a>
//                         </li>
//                      ))}
//                   </ul>
//                </div>

//                <div>
//                   <h4
//                      className="font-semibold mb-4"
//                      style={{ color: "#f8fafc" }}
//                   >
//                      Newsletter
//                   </h4>

//                   <p className="text-sm mb-3" style={{ color: "#606f80" }}>
//                      Subscribe for web dev and blockchain insights.
//                   </p>

//                   <form className="flex" onSubmit={(e) => e.preventDefault()}>
//                      <input
//                         type="email"
//                         placeholder="your@email.com"
//                         className="flex-1 px-3 py-2 rounded-l-lg text-xs outline-none"
//                         style={{
//                            background: "rgba(255,255,255,0.05)",
//                            border: "1px solid rgba(107,207,209,0.15)",
//                            color: "#f8fafc",
//                         }}
//                      />

//                      <button
//                         className="px-3 py-2 rounded-r-lg text-xs font-medium transition-colors"
//                         style={{
//                            background: "#0f7d86",
//                            color: "#f8fafc",
//                            border: "1px solid #0f7d86",
//                         }}
//                      >
//                         Join
//                      </button>
//                   </form>
//                </div>
//             </div>

//             <div
//                className="h-px mb-8"
//                style={{
//                   background:
//                      "linear-gradient(90deg, transparent, rgba(107,207,209,0.2), transparent)",
//                }}
//             ></div>

//             <div className="flex flex-col sm:flex-row items-center justify-between">
//                <p
//                   className="text-sm text-center sm:text-left mb-4 sm:mb-0"
//                   style={{ color: "#606f80" }}
//                >
//                   &copy; {currentYear} Alex Dev. Designed & built with care.
//                </p>

//                <div className="flex gap-4 text-xs" style={{ color: "#606f80" }}>
//                   <a href="#" className="hover:text-accent transition-colors">
//                      Privacy
//                   </a>

//                   <span>•</span>

//                   <a href="#" className="hover:text-accent transition-colors">
//                      Terms
//                   </a>

//                   <span>•</span>

//                   <a href="#" className="hover:text-accent transition-colors">
//                      Sitemap
//                   </a>
//                </div>
//             </div>
//          </div>
//       </footer>
//    );
// }
import React from "react";
import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const socialLinks = [
   { icon: FaGithub, href: "https://github.com/mobeenn", label: "GitHub" },
   {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/dev-mobeen/",
      label: "LinkedIn",
   },
   { icon: FaTwitter, href: "#", label: "Twitter" },
];

const quickLinks = [
   { label: "Home", href: "#home" },
   { label: "About", href: "#about" },
   { label: "Projects", href: "#projects" },
   { label: "Services", href: "#services" },
   { label: "Blogs", href: "#blogs" },
   { label: "Contact", href: "#contact" },
];

export default function Footer() {
   return (
      <footer
         className="section-padding border-t"
         style={{
            background: "rgba(0,0,0,0.3)",
            borderColor: "rgba(107,207,209,0.08)",
         }}
      >
         <div className="container-max">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
               {/* Logo & About */}
               <div>
                  <div className="flex items-center gap-2.5 mb-4">
                     <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                           background:
                              "linear-gradient(135deg, #0f7d86, #6bcfd1)",
                        }}
                     >
                        <Code2 size={16} className="text-white" />
                     </div>

                     <span
                        className="font-bold text-base"
                        style={{ color: "#f8fafc" }}
                     >
                        Dev<span style={{ color: "#6bcfd1" }}>Mobeen</span>
                     </span>
                  </div>

                  <p className="text-sm mb-4" style={{ color: "#606f80" }}>
                     Full Stack MERN + Blockchain Developer crafting modern web
                     experiences.
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                     {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                           key={label}
                           href={href}
                           aria-label={label}
                           className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                           style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(107,207,209,0.15)",
                              color: "#606f80",
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#6bcfd1";
                              e.currentTarget.style.borderColor =
                                 "rgba(107,207,209,0.5)";
                              e.currentTarget.style.background =
                                 "rgba(107,207,209,0.1)";
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#606f80";
                              e.currentTarget.style.borderColor =
                                 "rgba(107,207,209,0.15)";
                              e.currentTarget.style.background =
                                 "rgba(255,255,255,0.06)";
                           }}
                        >
                           <Icon size={16} />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h4
                     className="font-semibold mb-4"
                     style={{ color: "#f8fafc" }}
                  >
                     Quick Links
                  </h4>
                  <ul className="space-y-2.5">
                     {quickLinks.slice(0, 3).map(({ label, href }) => (
                        <li key={label}>
                           <a
                              href={href}
                              className="text-sm hover:text-accent transition-colors"
                              style={{ color: "#606f80" }}
                           >
                              {label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* More Links */}
               <div>
                  <h4
                     className="font-semibold mb-4"
                     style={{ color: "#f8fafc" }}
                  >
                     More
                  </h4>
                  <ul className="space-y-2.5">
                     {quickLinks.slice(3).map(({ label, href }) => (
                        <li key={label}>
                           <a
                              href={href}
                              className="text-sm hover:text-accent transition-colors"
                              style={{ color: "#606f80" }}
                           >
                              {label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Newsletter */}
               <div>
                  <h4
                     className="font-semibold mb-4"
                     style={{ color: "#f8fafc" }}
                  >
                     Newsletter
                  </h4>

                  <p className="text-sm mb-3" style={{ color: "#606f80" }}>
                     Subscribe for web dev and blockchain insights.
                  </p>

                  <form className="flex" onSubmit={(e) => e.preventDefault()}>
                     <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 px-3 py-2 rounded-l-lg text-xs outline-none"
                        style={{
                           background: "rgba(255,255,255,0.05)",
                           border: "1px solid rgba(107,207,209,0.15)",
                           color: "#f8fafc",
                        }}
                     />

                     <button
                        className="px-3 py-2 rounded-r-lg text-xs font-medium"
                        style={{
                           background: "#0f7d86",
                           color: "#f8fafc",
                           border: "1px solid #0f7d86",
                        }}
                     >
                        Join
                     </button>
                  </form>
               </div>
            </div>

            {/* Divider */}
            <div
               className="h-px mb-8"
               style={{
                  background:
                     "linear-gradient(90deg, transparent, rgba(107,207,209,0.2), transparent)",
               }}
            />

            {/* Bottom */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
               <p className="text-sm mb-4 sm:mb-0" style={{ color: "#606f80" }}>
                  © {currentYear} Muhammad Mobeen. Designed & built with care.
               </p>

               <div className="flex gap-4 text-xs" style={{ color: "#606f80" }}>
                  <a href="#" className="hover:text-accent">
                     Privacy
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-accent">
                     Terms
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-accent">
                     Sitemap
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
