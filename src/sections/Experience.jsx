import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"

const experience = [
  {
    role: "Junior Developer",
    company: "Brain Station 23",
    duration: "2021",
    description: "Build Software"
  },
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2022",
    description: "Build Software"
  },
  {
    role: "Senior Developer",
    company: "Apollo",
    duration: "2025",
    description: "Build Software"
  }
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y = useTransform(scrollYProgress, [start, end], [idx % 2 === 0 ? 30 : -30, 0])
  const x = useTransform(scrollYProgress, [start, end], [-24, 0])

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}>
        </motion.div>

        <motion.div
          className={`absolute ${idx % 2 === 0 ? '-top-8' : '-bottom-8'} w-0.5 bg-white/40`}
          style={{ height: 40, opacity }}>
        </motion.div>

        <motion.article
          className={`absolute ${idx % 2 === 0 ? 'bottom-12' : "top-12"} bg-gray-900/40 backdrop-blur-md border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}
          style={{ opacity, y, maxWidth: '90vw' }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}>
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-md text-gray-400 mb-3">{exp.company} | {exp.duration}</p>
          <p className="text-md text-gray-300 wrap-break-word">{exp.description}</p>
        </motion.article>
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center w-full min-h-37.5">
      <motion.div
        className="absolute -left-6.5 top-6 z-20 w-6 h-6 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.1)]"
        style={{ opacity, scale }}>
      </motion.div>

      {/* Experience card */}
      <motion.article
        className="bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 w-[85vw] max-w-sm shadow-xl ml-4"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.1 }}>
        <h3 className="text-lg font-bold text-white wrap-break-word">{exp.role}</h3>
        <p className="text-sm text-cyan-400 font-medium mb-2">{exp.company} | {exp.duration}</p>
        <p className="text-sm text-gray-300 leading-relaxed wrap-break-word">{exp.description}</p>
      </motion.article>
    </div>
  )
}

export default function Experience() {
  const sceneRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const SCENE_HEIGHT_VH = isMobile ? 120 * experience.length : 100 * experience.length;
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  })
  const thresholds = useMemo(() => experience.map((_, i) => (i + 1) / experience.length), [])
  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`)
  return (
    <section id="experience" className="relative bg-black text-white">
      <div ref={sceneRef} style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "100vh" }} className="relative">
        <div
          className={`flex flex-col items-center ${isMobile ? "relative h-auto" : "sticky top-0 h-screen"
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold py-10 text-center">
            Experience
          </h2>
          <div className="flex flex-1 items-center justify-center w-full px-6 pb-20">
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-1 bg-white/15 rounded">
                  <motion.div className="absolute left-0 top-0 h-1 bg-white rounded origin-left"
                    style={{ width: lineSize }}>
                  </motion.div>
                </div>
                <div className="relative flex justify-between mt-0">
                  {experience.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}
            {isMobile && (
              <div className="relative w-full max-w-[90vw] mt-10">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-white rounded origin-top"
                    style={{ height: lineSize }}>
                  </motion.div>
                </div>
                <div className="relative flex flex-col gap-16 ml-8 pb-32">
                  {experience.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}