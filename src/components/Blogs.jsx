import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogs } from "../data/blog";

function Blogs(props) {
   const { onBlogClick } = props;

   return (
      <section id="blogs" className="section-padding">
         <div className="container-max">
            <div className="text-center mb-14">
               <div className="accent-line mx-auto"></div>

               <h2 className="section-title">Latest Articles</h2>

               <p className="section-subtitle">
                  Thoughts on web development and blockchain
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {blogs.map((blog, index) => (
                  <div
                     key={blog.id}
                     className="group cursor-pointer"
                     onClick={() => onBlogClick(blog.id)}
                     style={{
                        animation: "slideUp 0.7s ease-out forwards",
                        animationDelay: `${index * 150}ms`,
                        opacity: 0,
                     }}
                  >
                     <div
                        className="relative rounded-xl overflow-hidden mb-5 h-48 transition-all duration-300"
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "scale(1.04)";
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "scale(1)";
                        }}
                     >
                        <img
                           src={blog.image}
                           alt={blog.title}
                           className="w-full h-full object-cover"
                        />

                        <div
                           className="absolute inset-0"
                           style={{
                              background:
                                 "linear-gradient(to top, rgba(17,27,29,0.8) 0%, transparent 60%)",
                           }}
                        ></div>
                     </div>

                     <div
                        className="flex items-center gap-4 mb-3 text-xs"
                        style={{ color: "#606f80" }}
                     >
                        <div className="flex items-center gap-1.5">
                           <Calendar size={12} />
                           {blog.date}
                        </div>

                        <div className="flex items-center gap-1.5">
                           <Clock size={12} />
                           {blog.readTime}
                        </div>
                     </div>

                     <h3
                        className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-200"
                        style={{ color: "#f8fafc" }}
                     >
                        {blog.title}
                     </h3>

                     <p
                        className="text-sm leading-relaxed mb-4 line-clamp-2"
                        style={{ color: "#a0b4c0" }}
                     >
                        {blog.excerpt}
                     </p>

                     <div className="flex items-center justify-between">
                        <div className="flex gap-1.5 flex-wrap">
                           {blog.tags.map((tag) => (
                              <span
                                 key={tag}
                                 className="tag text-xs py-0.5 px-2"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>

                        <ArrowRight
                           size={16}
                           style={{
                              color: "#6bcfd1",
                              transition: "transform 0.3s ease",
                              transform: "translateX(0)",
                           }}
                           className="group-hover:translate-x-1"
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Blogs;
