import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
   { label: "Home", href: "#home" },
   { label: "About", href: "#about" },
   { label: "Projects", href: "#projects" },
   { label: "Services", href: "#services" },
   { label: "Blogs", href: "#blogs" },
   { label: "Contact", href: "#contact" },
];

export default function Navbar({ onBlogClick }) {
   const [scrolled, setScrolled] = useState(false);
   const [active, setActive] = useState("home");
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 20);

         const sections = navLinks.map((l) => l.href.slice(1));

         for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);

            if (el && window.scrollY >= el.offsetTop - 100) {
               setActive(sections[i]);
               break;
            }
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const handleNavClick = (href) => {
      setMenuOpen(false);

      if (onBlogClick && href === "#blogs") {
         onBlogClick();
      }
   };

   return (
      <nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
               ? "bg-[#111b1d]/90 backdrop-blur-md border-b border-accent/10 shadow-lg shadow-black/20"
               : "bg-transparent"
         }`}
      >
         <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-18">
               {/* Logo */}
               <a
                  href="#home"
                  className="flex items-center gap-2.5 group"
                  onClick={() => handleNavClick("#home")}
               >
                  <div
                     className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                     style={{
                        background: "linear-gradient(135deg, #0f7d86, #6bcfd1)",
                     }}
                  >
                     <Code2 size={18} className="text-white" />
                  </div>

                  <span className="font-bold text-lg text-text-main tracking-tight">
                     Dev<span className="text-gradient">Mobeen</span>
                  </span>
               </a>

               {/* Desktop Menu */}
               <div className="hidden md:flex items-center gap-7">
                  {navLinks.map((link) => (
                     <a
                        key={link.href}
                        href={link.href}
                        className={`nav-link text-sm ${
                           active === link.href.slice(1) ? "active" : ""
                        }`}
                        onClick={() => handleNavClick(link.href)}
                     >
                        {link.label}
                     </a>
                  ))}
               </div>

               {/* CTA */}
               <div className="hidden md:block">
                  <a href="#contact" className="btn-primary text-sm py-2 px-5">
                     Hire Me
                  </a>
               </div>

               {/* Mobile Button */}
               <button
                  className="md:hidden p-2 rounded-lg"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
               >
                  {menuOpen ? <X size={22} /> : <Menu size={22} />}
               </button>
            </div>
         </div>

         {/* Mobile Menu */}
         <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
               menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{
               background: "rgba(17, 27, 29, 0.97)",
               backdropFilter: "blur(16px)",
            }}
         >
            <div className="px-4 py-4 space-y-1 border-t border-accent/10">
               {navLinks.map((link) => (
                  <a
                     key={link.href}
                     href={link.href}
                     className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        active === link.href.slice(1)
                           ? "text-accent bg-accent/10"
                           : "text-text-main hover:text-accent hover:bg-white/5"
                     }`}
                     onClick={() => handleNavClick(link.href)}
                  >
                     {link.label}
                  </a>
               ))}

               <div className="pt-2 pb-1">
                  <a
                     href="#contact"
                     className="btn-primary w-full justify-center text-sm"
                  >
                     Hire Me
                  </a>
               </div>
            </div>
         </div>
      </nav>
   );
}
