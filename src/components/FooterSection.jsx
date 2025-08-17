import React from "react";
import {
   Footer,
   FooterLink,
   FooterLinkGroup,
   FooterTitle,
} from "flowbite-react";

import footerlogo from "../assets/logo2.png";

export const FooterSection = () => {
   return (
      <Footer className=" text-[#EAEAEA]">
         <div className="w-full bg-[#0a0f1f] text-center">
            <div className="grid w-full grid-cols-2 sm:mx-auto px-3 sm:px-19 py-8 md:grid-cols-4">
               {/* Quick Links */}
               <div>
                  <FooterTitle
                     className="text-[#F0CB52] leading-[100px]"
                     title="Quick Links"
                  />
                  <FooterLinkGroup col>
                     <FooterLink
                        href="#"
                        onClick={(e) => {
                           e.preventDefault();
                           document.getElementById("about")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                           });
                        }}
                     >
                        About
                     </FooterLink>
                     <FooterLink
                        href="#"
                        onClick={(e) => {
                           e.preventDefault();
                           document.getElementById("skills")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                           });
                        }}
                     >
                        Skills
                     </FooterLink>
                     <FooterLink
                        href="#"
                        onClick={(e) => {
                           e.preventDefault();
                           document.getElementById("projects")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                           });
                        }}
                     >
                        Projects
                     </FooterLink>
                     <FooterLink
                        href="#"
                        onClick={(e) => {
                           e.preventDefault();
                           document.getElementById("team")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                           });
                        }}
                     >
                        Team
                     </FooterLink>
                  </FooterLinkGroup>
               </div>

               {/* Social */}
               <div>
                  <FooterTitle
                     className="leading-[90px] mx-4 mt-2 text-[#F0CB52]"
                     title="Social"
                  />
                  <FooterLinkGroup className="mx-4" col>
                     <FooterLink
                        target="blank"
                        href="https://www.linkedin.com/in/dev-mobeen/"
                     >
                        LinkedIn
                     </FooterLink>
                     <FooterLink
                        target="blank"
                        href="https://github.com/mobeenn"
                     >
                        GitHub
                     </FooterLink>
                     <FooterLink
                        target="blank"
                        href="https://web.facebook.com/profile.php?id=100073950722013"
                     >
                        Facebook
                     </FooterLink>
                  </FooterLinkGroup>
               </div>

               {/* Contact */}
               <div className="text-left">
                  <FooterTitle
                     className="leading-[80px] mt-2 text-[#F0CB52]"
                     title="Contact"
                  />
                  <FooterLinkGroup col>
                     <FooterLink href="mailto:ali@veracious.ai">
                        Email: mobeen0616@gmail.com
                     </FooterLink>
                     <FooterLink href="#">
                        Level 1, Devonshire House, One Mayfair Place, London, UK
                     </FooterLink>
                  </FooterLinkGroup>
               </div>
            </div>

            {/* Footer Logo */}
            <div className="py-5 flex justify-center">
               <a
                  href="/"
                  onClick={(e) => {
                     e.preventDefault();
                     document.getElementById("/")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                     });
                  }}
               >
                  <img
                     src={footerlogo}
                     className="fill-[#4b4c51] w-full max-w-[50px] rounded-[20px] object-contain"
                     alt="footer logo"
                  />
               </a>
            </div>
         </div>
      </Footer>
   );
};
