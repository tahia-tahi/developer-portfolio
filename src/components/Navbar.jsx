import { motion } from "framer-motion";
import { HiHome, HiUser, HiBriefcase, HiCpuChip, HiChatBubbleLeftRight, HiCodeBracketSquare, HiAcademicCap, HiStar } from "react-icons/hi2";
import { href } from "react-router";

export default function Navbar() {
  const navLinks = [
    { name: "Home", icon: <HiHome />, href: "#home" },
    { name: "About", icon: <HiUser />, href: "#about" },
    { name: "Skills", icon: <HiCodeBracketSquare />, href: "#skills" },
    { name: "Projects", icon: <HiBriefcase />, href: "#projects" },
    { name: "Experience", icon: <HiAcademicCap/>, href:'#experience'},
    { name: "Testimonials", icon: <HiStar/>, href:'#testimonial'},
    { name: "Services", icon: <HiCpuChip />, href: "#services" },
    { name: "Contact", icon: <HiChatBubbleLeftRight />, href: "#contact" },
  ];

  return (
    <nav className="fixed z-100
      /* Mobile: Top Center */
      top-0 left-0 w-full flex justify-center py-4 px-4
 HiCodeBracket
      /* Medium/Tablet: Still Top Center but more compact */
      md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-auto
      
      /* Desktop/Large: Right Side Center */
      lg:top-1/2 lg:right-6 lg:left-auto lg:-translate-y-1/2 lg:translate-x-0 lg:w-auto">

      <div className="flex 
        /* Layout change */
        flex-row lg:flex-col 
        items-center 
        gap-3 sm:gap-4 lg:gap-y-2 
        bg-white/5 backdrop-blur-xl border border-white/10 
        px-3 py-2 lg:px-2 lg:py-5 
        rounded-full shadow-2xl">

        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className="group relative flex items-center justify-center 
              w-9 h-9 sm:w-10 sm:h-10 
              rounded-full text-white/40 transition-all duration-300 
              hover:text-[#1cd8d2] hover:bg-white/5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Tooltip logic: down at Mobile, left in Desktop */}
            <div className="absolute hidden group-hover:flex items-center
              top-12 lg:top-auto lg:right-14 pr-0 lg:pr-2">
              <div className="bg-black/80 backdrop-blur-md text-white text-[8px] uppercase tracking-[0.2em] px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                {link.name}
              </div>
            </div>

            <span className="text-lg sm:text-xl lg:text-xl">{link.icon}</span>

            {/* Active Indicator Dot */}
            <div className="absolute -bottom-0.5 lg:bottom-auto lg:-right-1.5 w-1 h-1 bg-[#1cd8d2] rounded-full scale-0 group-hover:scale-100 transition-transform shadow-[0_0_8px_#1cd8d2]"></div>
          </motion.a>
        ))}
      </div>
    </nav>
  );
}