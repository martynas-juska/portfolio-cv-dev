import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Premium notification UI
import TitleHeader from "../components/TitleHeader";
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef(null);
  const formCardRef = useRef(null);
  const emailCardRef = useRef(null);
  
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    cardRef.current.style.setProperty("--start", angle);
  };

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Create a loading toast that resolves when finished
    const toastId = toast.loading("Sending your message...");
    


    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      
      // Update the loading toast to success
      toast.success("Message sent! I'll get back to you shortly.", {
        id: toastId,
        duration: 5000,
        icon: '🚀',
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("martynas@gmail.com");
    toast.success("Email copied to clipboard!", {
      style: {
        background: "#1c1c21",
        color: "#fff",
        border: "1px solid #2d2d38",
      },
    });
  };

  return (
    <section id="contact" className="flex-center md:mt-20 mt-10 section-padding xl:px-0 min-h-screen">
      {/* This component renders the actual toast popups */}
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <div className="w-full h-full md:px-20 px-5 max-w-7xl mx-auto">
        <TitleHeader title="Get in Touch" sub="💬 Let's Connect" />

        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
          <div className="flex flex-col justify-between h-full gap-4">
            
            <div 
              ref={formCardRef}
              onMouseMove={(e) => handleMouseMove(e, formCardRef)}
              className="card card-border rounded-xl p-6 flex-1 group relative transition-all duration-300"
            >
              <div className="glow"></div>
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-3.5 relative z-10 h-full">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="4"
                    required
                    className="resize-none"
                  />
                </div>

                <button type="submit" disabled={loading} className="group mt-auto cursor-pointer">
                  <div className="cta-button">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>

            <div 
              ref={emailCardRef}
              onMouseMove={(e) => handleMouseMove(e, emailCardRef)}
              className="card card-border rounded-xl p-5 group relative transition-all duration-300"
            >
              <div className="glow"></div>
              <div className="relative z-10 text-center">
                <p className="text-white-50 mb-2.5 text-sm">Or email me directly at:</p>
                <button onClick={copyEmail} className="text-white text-lg font-semibold hover:text-white-50 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto group/btn">
                  <span>martynas.juska96@gmail.com</span>
                  <svg className="w-5 h-5 opacity-0 group-hover/btn:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <p className="text-white-50/70 text-xs mt-1.5">Click to copy</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden border-2 border-black-50 hover:border-white-50/50 transition-all duration-500 max-h-[550px]">
              <img src="/images/laptop-profile.png" alt="Profile" className="w-auto h-full max-h-[550px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}