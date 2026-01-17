import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaAngular, FaFire 
} from "react-icons/fa";
import { 
  SiExpress, SiNextdotjs, SiVercel, SiNetlify, SiPostman, SiMongodb 
} from "react-icons/si";

export default function Skills() {
  const containerRef = useRef(null);

  const skillData = [
    { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
    { name: "JavaScript", icon: <FaJs />, color: "text-[#F7DF1E]" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
    { name: "Express.js", icon: <SiExpress />, color: "text-white" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-[#E34F26]" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572B6]" },
    { name: "Vercel", icon: <SiVercel />, color: "text-white" },
    { name: "Firebase", icon: <FaFire />, color: "text-[#FFCA28]" },
    { name: "Netlify", icon: <SiNetlify />, color: "text-[#00C7B7]" },
    { name: "Postman", icon: <SiPostman />, color: "text-[#FF6C37]" },
    { name: "Angular", icon: <FaAngular />, color: "text-[#DD0031]" },
  ];

  // Scroll Progress tracking for manual scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Manual Scroll Transform (ইউজার স্ক্রল করলে যতটুকু সরবে)
  const xTranslate1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const xTranslate2 = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  // Infinite Auto-Scroll Animation Variants
  const autoScrollVariant = {
    animate: (direction) => ({
      x: direction === "left" ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // গতি এখান থেকে কন্ট্রোল করতে পারবেন
          ease: "linear",
        },
      },
    }),
  };

  return (
    <section 
    id="skills"
      ref={containerRef}
      className="py-24 bg-black overflow-hidden flex flex-col gap-16 relative"
    >
      {/* Background Glow - লেআউট সুন্দর করার জন্য */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1cd8d2]/10 blur-[120px] pointer-events-none" />

      <div className="text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">My Skills</h2>
        <p className="text-[#1cd8d2] uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold opacity-80">
          Modern Applications | Modern Technologies
        </p>
      </div>

      {/* Row 1: Left Moving (Auto + Manual Scroll) */}
      <div className="relative flex flex-col gap-8">
        <motion.div 
          style={{ x: xTranslate1 }} // মাউস স্ক্রলের জন্য
          className="flex whitespace-nowrap"
        >
          <motion.div 
            variants={autoScrollVariant}
            animate="animate"
            custom="left"
            className="flex gap-12 pr-12"
          >
            {[...skillData, ...skillData, ...skillData].map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* Row 2: Right Moving (Auto + Manual Scroll) */}
        <motion.div 
          style={{ x: xTranslate2 }} // মাউস স্ক্রলের জন্য
          className="flex whitespace-nowrap"
        >
          <motion.div 
            variants={autoScrollVariant}
            animate="animate"
            custom="right"
            className="flex gap-12 pr-12"
          >
            {[...skillData, ...skillData, ...skillData].map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Skill Item Component with Colors & Hover Effects
function SkillItem({ skill }) {
  return (
    <div className="flex flex-col items-center gap-4 min-w-[100px] group cursor-pointer">
      <div className={`text-5xl md:text-6xl ${skill.color} transition-all duration-500 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(28,216,210,0.5)] group-hover:scale-125`}>
        {skill.icon}
      </div>
      <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
}