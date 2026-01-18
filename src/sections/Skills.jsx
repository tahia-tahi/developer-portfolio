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

  // আপনার দেওয়া পালসিং অ্যানিমেশন (গতি ২.৫ সেকেন্ড করা হয়েছে)
  const glowVariants = {
    initial: { scale: 0.8, opacity: 0.2 },
    pulse: {
      scale: [0.8, 1.1, 0.8],
      opacity: [0.2, 0.4, 0.2],
      transition: { 
        duration: 2.5, 
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xTranslate1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const xTranslate2 = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  const autoScrollVariant = {
    animate: (direction) => ({
      x: direction === "left" ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25, 
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
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {glows.map((glow, i) => (
          <motion.div 
            key={i} 
            variants={glowVariants}
            initial="initial"
            animate="pulse"
            className={`absolute rounded-full bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] ${glow.className}`} 
            style={{ transitionDelay: `${glow.delay}s` }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">My Skills</h2>
        <p className="text-[#1cd8d2] uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold opacity-80">
          Modern Applications | Modern Technologies
        </p>
      </div>

      {/* Row Rows for Skills */}
      <div className="relative flex flex-col gap-12 z-10">
        {/* Row 1 */}
        <motion.div style={{ x: xTranslate1 }} className="flex whitespace-nowrap">
          <motion.div variants={autoScrollVariant} animate="animate" custom="left" className="flex gap-12 pr-12">
            {[...skillData, ...skillData, ...skillData].map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* Row 2 */}
        {/* <motion.div style={{ x: xTranslate2 }} className="flex whitespace-nowrap">
          <motion.div variants={autoScrollVariant} animate="animate" custom="right" className="flex gap-12 pr-12">
            {[...skillData, ...skillData, ...skillData].map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}

function SkillItem({ skill }) {
  return (
    <div className="flex flex-col items-center gap-4 min-w-[100px] group cursor-pointer">
      <div className={`text-5xl md:text-6xl ${skill.color} transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_15px_rgba(28,216,210,0.4)] group-hover:scale-110`}>
        {skill.icon}
      </div>
      <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
}