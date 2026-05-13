import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlogPost from "./pages/BlogPost";

function App() {
   const [currentPage, setCurrentPage] = useState("home");
   const [selectedBlogId, setSelectedBlogId] = useState(null);

   const handleBlogClick = (blogId) => {
      setSelectedBlogId(blogId);
      setCurrentPage("blog-detail");
      window.scrollTo(0, 0);
   };

   const handleBackFromBlog = () => {
      setCurrentPage("home");
      setSelectedBlogId(null);

      const blogsSection = document.getElementById("blog");
      if (blogsSection) {
         blogsSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   if (currentPage === "blog-detail" && selectedBlogId !== null) {
      return (
         <>
            <Navbar onBlogClick={handleBackFromBlog} />
            <BlogPost blogId={selectedBlogId} onBack={handleBackFromBlog} />
            <Footer />
         </>
      );
   }

   return (
      <div className="min-h-screen">
         <Navbar />
         <Hero />
         <About />
         <Projects />
         <Services />
         <Skills />
         <Blogs onBlogClick={handleBlogClick} />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
