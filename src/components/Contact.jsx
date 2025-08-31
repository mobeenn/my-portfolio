import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export const Contact = () => {
   const [formState, setFormState] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
         .send(
            "service_hjx3yzh",
            "template_xhsy8es",
            formState,
            "u16M7FbPyaU2VZR4_"
         )
         .then(
            (result) => {
               toast("Message Sent Successfully ✅");
               setFormState({ name: "", email: "", subject: "", message: "" });
            },
            (error) => {
               toast("Something went wrong ❌", error.text);
            }
         );
   };

   return (
      <section id="contact" className="py-20 mx-5">
         {" "}
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
         >
            {" "}
            Get in Touch{" "}
         </motion.h2>{" "}
         <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
         >
            {" "}
            <div className="relative mb-6 group">
               {" "}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>{" "}
               <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={(e) =>
                     setFormState({ ...formState, name: e.target.value })
                  }
                  className="relative block w-full px-4 py-3 bg-white dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                  placeholder="Your Full Name"
                  required
               />{" "}
            </div>{" "}
            <div className="relative mb-6 group">
               {" "}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>{" "}
               <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                     setFormState({ ...formState, email: e.target.value })
                  }
                  className="relative block w-full px-4 py-3 bg-white dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                  placeholder="Your Email"
                  required
               />{" "}
            </div>{" "}
            <div className="relative mb-6 group">
               {" "}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>{" "}
               <input
                  type="text"
                  name="subject"
                  value={formState.name}
                  onChange={(e) =>
                     setFormState({ ...formState, name: e.target.value })
                  }
                  className="relative block w-full px-4 py-3 bg-white dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                  placeholder="Your Subject"
                  required
               />{" "}
            </div>{" "}
            <div className="relative mb-6 group">
               {" "}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>{" "}
               <textarea
                  name="message"
                  value={formState.message}
                  onChange={(e) =>
                     setFormState({ ...formState, message: e.target.value })
                  }
                  className="relative block w-full px-4 py-3 bg-white dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                  rows={5}
                  placeholder="Your Message"
                  required
               ></textarea>{" "}
            </div>{" "}
            <motion.button
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               type="submit"
               className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
               {" "}
               <span>Send Message</span> <Send className="w-5 h-5" />{" "}
            </motion.button>{" "}
         </motion.form>{" "}
      </section>
   );
};
