import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import FunLoginPage from "./components/FunLoginPage";
import { FooterSection } from "./components/FooterSection";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleFakeLogin = () => {
      setIsLoggedIn(true);
   };

   if (!isLoggedIn) {
      return <FunLoginPage onLogin={handleFakeLogin} />;
   }

   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <Header />
         <HeroSection />
         <About />
         <Skills />
         <Projects />
         <Team />
         <Contact />
         <FooterSection />
      </>
   );
}

export default App;
