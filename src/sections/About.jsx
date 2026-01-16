import { motion } from "framer-motion";
import { FaCamera, FaPlane, FaBook, FaLightbulb, FaEdit } from "react-icons/fa";

export default function About() {
  const stats = [
    { label: "Experience", value: "02+ years", focus: "Backend & Frontend" },
    { label: "Specialty", value: "Full Stack", focus: "MERN / Next.js" },
    { label: "Focus", value: "Performance", focus: "Scalable Arch." },
  ];

  const hobbies = [
    { name: "Photography", icon: <FaCamera />, color: "text-purple-400" },
    { name: "Editing", icon: <FaEdit />, color: "text-blue-400" },
    { name: "Touring", icon: <FaPlane />, color: "text-green-400" },
    { name: "Reading", icon: <FaBook />, color: "text-yellow-400" },
    { name: "Learning", icon: <FaLightbulb />, color: "text-orange-400" },
  ];

  // ব্রাইটনেস কমিয়ে এবং পালস রেঞ্জ অ্যাডজাস্ট করা হয়েছে
  const glowVariants = {
    initial: { scale: 0.8, opacity: 0.2 }, // Initial opacity কমানো হয়েছে
    pulse: {
      scale: [0.8, 1.1, 0.8],
      opacity: [0.2, 0.4, 0.2], // Max brightness এখন মাত্র ০.৪ (আগে ০.৮ ছিল)
      transition: { 
        duration: 2.5, // গতি আরও ফাস্ট করা হয়েছে
        repeat: Infinity, 
        ease: "easeInOut" 
      },
    },
  };

  const glows = [
    { className: "-top-20 -left-20 w-[400px] h-[400px] blur-[120px]", delay: 0 },
    { className: "-bottom-20 -right-20 w-[500px] h-[500px] blur-[150px]", delay: 0.8 },
    { className: "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] blur-[100px]", delay: 1.5 }
  ];

  return (
    <section id="about" className="min-h-screen w-full relative bg-black text-white flex items-center py-20 lg:py-28 overflow-hidden">
      
      {/* Background Glows (Low Brightness) */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((glow, i) => (
          <motion.div 
            key={i} 
            variants={glowVariants}
            initial="initial"
            animate="pulse"
            className={`absolute rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] ${glow.className}`} 
            style={{ transitionDelay: `${glow.delay}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10"> 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content & Stats */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#1cd8d2] mb-4 font-semibold">✦ About Me</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Crafting Digital <br /> 
                <span className="text-gray-500 italic font-light">Experiences.</span>
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                I am a <span className="text-white font-medium">Full-stack Engineer</span> dedicated to building 
                robust applications. With a focus on 
                <span className="text-[#00bf8f]"> clean architecture</span>, I transform complex ideas into reality.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1cd8d2]/30 transition-all group"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">{stat.label}</p>
                  <p className="text-lg md:text-xl font-bold whitespace-nowrap">{stat.value}</p>
                  <p className="text-[10px] text-[#00bf8f] mt-1">{stat.focus}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Hobbies (Clean Layout) */}
          <div className="lg:col-span-5 w-full space-y-8">
            <div className="relative">
              <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-px bg-[#1cd8d2]"></span> Life Beyond Code
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 transition-all cursor-default"
                  >
                    <span className={`${hobby.color} text-lg`}>{hobby.icon}</span>
                    <span className="text-sm text-gray-300 font-medium tracking-wide">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                 <p className="text-[11px] md:text-xs text-gray-400 italic font-light leading-relaxed border-l border-[#1cd8d2]/30 pl-4">
                    "Continuously evolving through code, books, and lenses."
                 </p>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <a href="#projects" className="px-9 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-all shadow-lg">
                View Work
              </a>
              <a href="#contact" className="text-white text-sm font-semibold hover:text-[#1cd8d2] transition-colors flex items-center gap-2 group">
                Contact Me <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}