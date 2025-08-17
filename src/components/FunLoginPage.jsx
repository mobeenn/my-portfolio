import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User } from "lucide-react";
import heroImg from "../assets/logo2.png";
import toast from "react-hot-toast";

export default function FunLoginPage({ onLogin }) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = (e) => {
      e.preventDefault();
      toast(`Welcome back, ${username || "Guest"}! 🚀 (No real login 😆)`);
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
