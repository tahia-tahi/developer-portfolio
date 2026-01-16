import PerticlesBackground from "@/components/PerticlesBackground";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import avater from '../assets/avater.png'
export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Backend Engineer"], []);
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  const socials = [
    { Icon: FaTwitter, label: "X", href: '#' },
    { Icon: FaGithub, label: "Github", href: '#' },
    { Icon: FaLinkedin, label: "LinkedIn", href: '#' },
  ];
  const glowVarients = {
    initial: {
      scale: 1,
      opacity: 0.8,
      filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
    },
    hover: {
      scale: 1.2,
      opacity: 1,
      filter: [
        "drop-shadow(0px 0px 8px rgba(28,216,210,0.8))",
        "drop-shadow(0px 0px 12px rgba(0,191,143,0.5))"
      ].join(" "),
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  React.useEffect(() => {
    const current = roles[index];
    const speed = (!deleting && subIndex === current.length) ? 1200 : (deleting ? 40 : 60);
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length) setDeleting(true);
      else if (deleting && subIndex > 0) setSubIndex(v => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(p => (p + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full min-h-screen relative bg-black overflow-hidden flex items-center">
      <PerticlesBackground />

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-[#b02b63] via-[#00bf8f] to-[#1cd8d2] opacity-10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#b02b63] opacity-10 blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:pr-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">

        {/* --- LEFT SIDEBAR --- */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-87.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >

            {/* Profile Image Area */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 group">
              <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-bold italic tracking-tighter">
                RIHAM
              </div>

              <motion.img
                src={avater}
                alt="Riham"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-1">Riham</h2>
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Full-Stack Developer</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-[#00bf8f]" />
                <span className="text-sm">riham@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-[#1cd8d2]" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={glowVarients}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 border border-white/10 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all uppercase text-xs tracking-tighter">
              Let's Work!
            </button>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE CONTENT --- */}
        <div className="lg:col-span-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs uppercase tracking-widest mb-6"
          >
            ✦ Introduction
          </motion.div>

          <motion.div className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]">
            <span>{roles[index].substring(0, subIndex)}</span>
            <span className="inline-block w-1 ml-1 bg-[#1cd8d2] animate-pulse align-middle" style={{ height: "1em" }}></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]"
          >
            I’m <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#b02b63]">Riham</span> <br />
            Building Value.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            I turn complex ideas into beautiful high-impact web infrastructure for my clients that creates effective value through modern engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6"
          >
            <div className="text-center lg:text-left pr-8 border-r border-white/10">
              <h3 className="text-4xl font-bold text-white">02+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Years Exp.</p>
            </div>
            <div className="text-center lg:text-left pr-8 border-r border-white/10">
              <h3 className="text-4xl font-bold text-white">20+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Projects Done</p>
            </div>
            <div className="flex gap-4 ml-2">
              <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-all">My Projects</a>
              <a href="#" className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-bold">Download CV</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}