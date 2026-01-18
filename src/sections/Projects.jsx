import { useEffect, useMemo, useRef, useState } from "react"
import M1 from '../assets/M1.png'
import img1 from '../assets/D1.png'
import M2 from '../assets/M2.png'
import img2 from '../assets/D2.png'
import M3 from '../assets/M3.png'
import img3 from '../assets/D3.png'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"

export default function Projects() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = useMemo(() => [
    { title: 'Chatter Box', link: 'https://chatter-box-9325d.web.app/', bgColor: '#31DDD4', image: isMobile ? M1 : img1 },
    { title: 'Socio', link: 'https://socio-7ccb1.web.app/', bgColor: '#4C1864', image: isMobile ? M2 : img2 },
    { title: 'Medicure', link: 'https://ass8-b11-medicure.netlify.app/', bgColor: '#1769E2', image: isMobile ? M3 : img3 }
  ], [isMobile]);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const step = 1 / projects.length;
    const index = Math.floor(v / step);
    setActiveIndex(Math.min(index, projects.length - 1));
  });

  return (
    <section 
      id="projects" 
      ref={sceneRef}
      className="relative"
      style={{ 
        height: `${projects.length * 100}vh`, 
        backgroundColor: projects[activeIndex]?.bgColor || "#000",
        transition: "background-color 0.8s ease" 
      }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section Header  */}
        <div className="relative z-100 w-full text-center pt-10 md:pt-16 pb-4 bg-transparent">
           <p className="text-white/80 uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold drop-shadow-md">
             Featured Work
           </p>
        </div>

        <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {projects.map((project, idx) => (
              activeIndex === idx && (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Background Large Title */}
                  <motion.h3 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.12 }} 
                    className="absolute top-[15%] md:top-[10%] text-white font-black italic text-[12vw] leading-none select-none z-0 whitespace-nowrap"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Main Project Card */}
                  <motion.div 
                    initial={{ y: 100, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative z-10 w-[90%] md:w-[70%] lg:w-[60%] aspect-video rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 bg-black"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Button */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                      <h4 className="text-white text-3xl font-bold">{project.title}</h4>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors"
                      >
                        Visit Project
                      </a>
                    </div>
                  </motion.div>

                  {/* Mobile Title */}
                  <div className="absolute bottom-20 md:hidden text-center z-20">
                    <h3 className="text-white text-4xl font-black italic">{project.title}</h3>
                                          <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white text-black text-sm px-4 py-1 rounded-full font-bold hover:bg-cyan-400 transition-colors"
                      >
                        Visit Project
                      </a>
                  </div>

                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={`h-12 w-1 rounded-full transition-all duration-500 ${activeIndex === i ? "bg-white" : "bg-white/20"}`} 
            />
          ))}
        </div>

      </div>
    </section>
  )
}
