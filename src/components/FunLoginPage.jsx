import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, User } from "lucide-react";
import heroImg from "../assets/logo2.png";
import toast from "react-hot-toast";

export default function FunLoginPage({ onLogin }) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [voices, setVoices] = useState([]);

   // Load available voices
   useEffect(() => {
      const loadVoices = () => {
         const availableVoices = window.speechSynthesis.getVoices();
         setVoices(availableVoices);
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
   }, []);

   // Speak function
   const speak = (message) => {
      const utterance = new SpeechSynthesisUtterance(message);

      const femaleVoice = voices.find(
         (voice) =>
            voice.name.includes("Google US English Female") ||
            voice.name.toLowerCase().includes("female")
      );

      if (femaleVoice) utterance.voice = femaleVoice;
      utterance.lang = "en-US";
      utterance.pitch = 1;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
   };

   // On page load speak
   useEffect(() => {
      const speakFun = () => {
         speak("This is just a fun login page");
      };

      if (window.speechSynthesis.getVoices().length > 0) {
         speakFun();
      } else {
         window.speechSynthesis.onvoiceschanged = speakFun;
      }
   }, [voices]);

   const handleLogin = (e) => {
      e.preventDefault();

      if (!username) {
         toast.error("Please enter your email");
         speak("Please enter your email");
         return;
      }

      if (!password) {
         toast.error("Please enter your password");
         speak("Please enter your password");
         return;
      }

      const namePart = username.includes("@")
         ? username.split("@")[0]
         : username;

      // Unique fun messages
      const messages = [
         `Welcome ${namePart}! Your adventure through my portfolio begins now!`,
         `Hey ${namePart}! You made it! Let’s dive into some magic of my projects!`,
         `Ahoy ${namePart}! You’ve unlocked the gateway to my portfolio world. Explore wisely!`,
         `Welcome ${namePart}! Brace yourself for some cool code and creative chaos!`,
      ];

      const welcomeMsg = messages[Math.floor(Math.random() * messages.length)];

      toast.success(welcomeMsg);
      speak(welcomeMsg);

      onLogin();
   };

   return (
      <div className="flex h-screen w-full">
         {/* Left Image Section */}
         <div className="hidden md:flex w-1/2 bg-black items-center justify-center">
            <img
               src={heroImg}
               alt="Login Visual"
               className="h-full object-cover"
            />
         </div>

         {/* Right Login Section */}
         <div className="flex w-full md:w-1/2 items-center justify-center bg-gradient-to-br from-red-900 via-black to-red-800">
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.6 }}
               className="bg-black/70 border border-red-700 shadow-2xl rounded-2xl p-8 w-96"
            >
               <h2 className="text-3xl font-bold text-center mb-6 text-red-400">
                  🔐 Fun Login
               </h2>
               <form onSubmit={handleLogin} className="space-y-4">
                  {/* Username */}
                  <div className="flex items-center border border-red-700 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-red-500">
                     <User className="text-red-400 w-5 h-5 mr-2" />
                     <input
                        type="text"
                        placeholder="Enter username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full outline-none bg-transparent text-white placeholder-gray-400"
                     />
                  </div>

                  {/* Password */}
                  <div className="flex items-center border border-red-700 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-red-500">
                     <Lock className="text-red-400 w-5 h-5 mr-2" />
                     <input
                        type="password"
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full outline-none bg-transparent text-white placeholder-gray-400"
                     />
                  </div>

                  {/* Button */}
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     type="submit"
                     className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-2 rounded-xl font-semibold shadow-lg"
                  >
                     Login 🎉
                  </motion.button>
               </form>
               <p className="text-center text-sm text-gray-400 mt-4">
                  *Just for fun, not real login 😉
               </p>
            </motion.div>
         </div>
      </div>
   );
}
