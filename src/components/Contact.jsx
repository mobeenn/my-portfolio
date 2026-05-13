// import { useState } from "react";
// import {
//    Mail,
//    Phone,
//    MapPin,
//    Send,
//    AlertCircle,
//    CheckCircle,
// } from "lucide-react";

// export default function Contact() {
//    const [form, setForm] = useState({
//       name: "",
//       email: "",
//       message: "",
//    });

//    const [submitState, setSubmitState] = useState({
//       loading: false,
//       success: false,
//       error: null,
//    });

//    const validateForm = () => {
//       if (!form.name.trim() || form.name.length < 2) {
//          setSubmitState({
//             loading: false,
//             success: false,
//             error: "Name must be at least 2 characters",
//          });
//          return false;
//       }

//       if (!form.email.includes("@") || form.email.length < 5) {
//          setSubmitState({
//             loading: false,
//             success: false,
//             error: "Please enter a valid email",
//          });
//          return false;
//       }

//       if (!form.message.trim() || form.message.length < 10) {
//          setSubmitState({
//             loading: false,
//             success: false,
//             error: "Message must be at least 10 characters",
//          });
//          return false;
//       }

//       return true;
//    };

//    const handleSubmit = async (e) => {
//       e.preventDefault();

//       setSubmitState({
//          loading: true,
//          success: false,
//          error: null,
//       });

//       if (!validateForm()) {
//          return;
//       }

//       // Supabase functionality removed
//       setTimeout(() => {
//          setSubmitState({
//             loading: false,
//             success: true,
//             error: null,
//          });

//          setForm({
//             name: "",
//             email: "",
//             message: "",
//          });

//          setTimeout(() => {
//             setSubmitState({
//                loading: false,
//                success: false,
//                error: null,
//             });
//          }, 5000);
//       }, 1000);
//    };

//    const handleChange = (e) => {
//       const { name, value } = e.target;

//       setForm((prev) => ({
//          ...prev,
//          [name]: value,
//       }));

//       setSubmitState({
//          loading: false,
//          success: false,
//          error: null,
//       });
//    };

//    const contactInfo = [
//       {
//          icon: Mail,
//          label: "Email",
//          value: "mobeen0616@gmail.com",
//          href: "mailto:mobeen0616@gmail.com",
//       },
//       {
//          icon: Phone,
//          label: "Phone",
//          value: "+92 3185844268",
//          href: "+92 3185844268",
//       },
//       {
//          icon: MapPin,
//          label: "Location",
//          value: "Islamabad, Pakistan",
//          href: "#",
//       },
//    ];
import { useState } from "react";
import {
   Mail,
   Phone,
   MapPin,
   Send,
   AlertCircle,
   CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
   const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [submitState, setSubmitState] = useState({
      loading: false,
      success: false,
      error: null,
   });

   const validateForm = () => {
      if (!form.name.trim() || form.name.length < 2) {
         setSubmitState({
            loading: false,
            success: false,
            error: "Name must be at least 2 characters",
         });
         return false;
      }

      if (!form.email.includes("@") || form.email.length < 5) {
         setSubmitState({
            loading: false,
            success: false,
            error: "Please enter a valid email",
         });
         return false;
      }

      if (!form.message.trim() || form.message.length < 10) {
         setSubmitState({
            loading: false,
            success: false,
            error: "Message must be at least 10 characters",
         });
         return false;
      }

      return true;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      setSubmitState({
         loading: true,
         success: false,
         error: null,
      });

      try {
         await emailjs.send(
            "service_hjx3yzh",
            "template_xhsy8es",
            {
               name: form.name,
               email: form.email,
               message: form.message,
            },
            "u16M7FbPyaU2VZR4_",
         );

         setSubmitState({
            loading: false,
            success: true,
            error: null,
         });

         setForm({
            name: "",
            email: "",
            message: "",
         });

         setTimeout(() => {
            setSubmitState({
               loading: false,
               success: false,
               error: null,
            });
         }, 5000);
      } catch (error) {
         console.error(error);

         setSubmitState({
            loading: false,
            success: false,
            error: "Something went wrong. Please try again.",
         });
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      setForm((prev) => ({
         ...prev,
         [name]: value,
      }));

      if (submitState.error) {
         setSubmitState((prev) => ({
            ...prev,
            error: null,
         }));
      }
   };

   const contactInfo = [
      {
         icon: Mail,
         label: "Email",
         value: "mobeen0616@gmail.com",
         href: "mailto:mobeen0616@gmail.com",
      },
      {
         icon: Phone,
         label: "Phone",
         value: "+92 3185844268",
         href: "tel:+923185844268",
      },
      {
         icon: MapPin,
         label: "Location",
         value: "Islamabad, Pakistan",
         href: "#",
      },
   ];
   return (
      <section id="contact" className="section-padding">
         <div className="container-max">
            <div className="text-center mb-14">
               <div className="accent-line mx-auto" />
               <h2 className="section-title">Get In Touch</h2>
               <p className="section-subtitle">
                  Let's discuss your next project
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
               {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                     key={label}
                     href={href}
                     className="group p-6 rounded-2xl transition-all duration-300"
                     style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(107,207,209,0.12)",
                     }}
                     onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.background =
                           "rgba(255,255,255,0.07)";
                        e.currentTarget.style.borderColor =
                           "rgba(107,207,209,0.3)";
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background =
                           "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor =
                           "rgba(107,207,209,0.12)";
                     }}
                  >
                     <div className="flex items-start gap-4">
                        <div
                           className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                           style={{
                              background: "rgba(107,207,209,0.15)",
                              border: "1px solid rgba(107,207,209,0.25)",
                           }}
                        >
                           <Icon size={20} style={{ color: "#6bcfd1" }} />
                        </div>

                        <div>
                           <h3
                              className="font-semibold mb-1"
                              style={{ color: "#f8fafc" }}
                           >
                              {label}
                           </h3>

                           <p style={{ color: "#606f80" }}>{value}</p>
                        </div>
                     </div>
                  </a>
               ))}
            </div>

            <div
               className="max-w-2xl mx-auto rounded-2xl p-8 md:p-10"
               style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(107,207,209,0.12)",
               }}
            >
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                     <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#f8fafc" }}
                     >
                        Full Name
                     </label>

                     <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        disabled={submitState.loading}
                        className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 outline-none"
                        style={{
                           background: "rgba(255,255,255,0.05)",
                           border: "1px solid rgba(107,207,209,0.15)",
                           color: "#f8fafc",
                        }}
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#f8fafc" }}
                     >
                        Email Address
                     </label>

                     <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        disabled={submitState.loading}
                        className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 outline-none"
                        style={{
                           background: "rgba(255,255,255,0.05)",
                           border: "1px solid rgba(107,207,209,0.15)",
                           color: "#f8fafc",
                        }}
                     />
                  </div>

                  <div>
                     <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#f8fafc" }}
                     >
                        Message
                     </label>

                     <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        disabled={submitState.loading}
                        className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 outline-none resize-none"
                        style={{
                           background: "rgba(255,255,255,0.05)",
                           border: "1px solid rgba(107,207,209,0.15)",
                           color: "#f8fafc",
                        }}
                     />
                  </div>

                  {submitState.error && (
                     <div
                        className="flex items-center gap-3 p-4 rounded-lg"
                        style={{
                           background: "rgba(239, 68, 68, 0.1)",
                           border: "1px solid rgba(239, 68, 68, 0.3)",
                        }}
                     >
                        <AlertCircle size={18} style={{ color: "#ef4444" }} />
                        <p style={{ color: "#fca5a5" }}>{submitState.error}</p>
                     </div>
                  )}

                  {submitState.success && (
                     <div
                        className="flex items-center gap-3 p-4 rounded-lg"
                        style={{
                           background: "rgba(34, 197, 94, 0.1)",
                           border: "1px solid rgba(34, 197, 94, 0.3)",
                        }}
                     >
                        <CheckCircle size={18} style={{ color: "#22c55e" }} />
                        <p style={{ color: "#86efac" }}>
                           Message sent successfully! I'll get back to you soon.
                        </p>
                     </div>
                  )}

                  <button
                     type="submit"
                     disabled={submitState.loading}
                     className="btn-primary w-full justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     <Send size={16} />
                     {submitState.loading ? "Sending..." : "Send Message"}
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}
