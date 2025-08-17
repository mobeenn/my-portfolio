import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { ConnectWalletButton } from "./ConnectWalletButton ";
export const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const navLinks = [
      {
         label: "Home",
         href: "#",
         onClick: (e) => {
            e.preventDefault();
            document.getElementById("/")?.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
            setIsOpen(false);
         },
      },
      {
         label: "About",
         href: "#",
         onClick: (e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
            setIsOpen(false);
         },
      },
      {
         label: "Skills",
         href: "#",
         onClick: (e) => {
            e.preventDefault();
            document.getElementById("skills")?.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
            setIsOpen(false);
         },
      },
      {
         label: "Projects",
         href: "#",
         onClick: (e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
            setIsOpen(false);
         },
      },
      {
         label: "Team",
         href: "#",
         onClick: (e) => {
            e.preventDefault();
            document.getElementById("team")?.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
            setIsOpen(false);
         },
      },
      {
         label: "Contact",
         href: "#",
         onClick: (e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
            setIsOpen(false);
         },
      },
   ];
   return (
      <>
         {/* Navbar */}
         <header
            id="/"
            className="bg-[#0A0F1F] text-[#FFFFFF80] px-4 py-4 shadow-md relative top-0 left-0 right-0"
         >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
               {/* Logo */}
               <div className="flex items-center cursor-pointer">
                  <img
                     className="object-cover w-19 rounded-full h-19"
                     src={logo}
                     alt="popu.ai"
                  />
               </div>

               {/* Desktop Menu */}
               <nav className="hidden lg:flex items-center space-x-6">
                  {navLinks.map((link) => (
                     <a
                        key={link.label}
                        href={link.href}
                        onClick={link.onClick}
                        className="text-nowrap font-poppins text-[16px] font-medium leading-6 tracking-normal text-right hover:text-[#ff7a01]  transition duration-300 ease-in-out"
                     >
                        {link.label}
                     </a>
                  ))}
                  <ConnectWalletButton />
               </nav>

               {/* Mobile Menu Button */}
               <div className="lg:hidden">
                  <button onClick={() => setIsOpen(true)}>
                     <FiMenu className="w-6 h-6 text-white" />
                  </button>
               </div>
            </div>

            {/* Mobile Sidebar */}
            <div
               className={`fixed top-0 left-0 h-full w-64 bg-[#0e0417] shadow-lg transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
               } transition-transform duration-300 ease-in-out z-50`}
            >
               <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <div className="mx-auto cursor-pointer">
                     <img
                        className="object-cover w-19 rounded-full h-19"
                        src={logo}
                        alt="popu.ai"
                     />
                  </div>
                  <button onClick={() => setIsOpen(false)}>
                     <FiX className="w-6 h-6 text-white" />
                  </button>
               </div>
               <nav className="flex flex-col p-8 gap-2.5 space-y-4">
                  {navLinks.map((link) => (
                     <a
                        key={link.label}
                        href={link.href}
                        onClick={link.onClick}
                        className="font-poppins text-center font-medium leading-6 tracking-normal hover:text-[#ff7a01] hover:underline transition duration-300 ease-in-out"
                     >
                        {link.label}
                     </a>
                  ))}

                  <ConnectWalletButton />
               </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
               <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                  onClick={() => setIsOpen(false)}
               ></div>
            )}
         </header>
      </>
   );
};
