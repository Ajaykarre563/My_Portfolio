import { EXPERIENCE } from "../data";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-16 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <FaBriefcase className="text-xs" /> Career History
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Professional Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-sm md:text-base"
        >
          Real-world engineering tenure delivering enterprise cloud infrastructure and data-driven systems.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing Gradient Vertical Line */}
        <div className="absolute left-4 md:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-orange-500 via-purple-500 to-transparent" />

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-14 pl-12 md:pl-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Pulsing Timeline Marker */}
            <div className="absolute left-2 md:left-4 top-2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-neutral-950 border-2 border-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl hover:border-white/20 transition-all duration-300">
              {/* Header: Role & Period */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-orange-400 font-medium">
                    <FaBuilding className="text-xs" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  <FaCalendarAlt className="text-purple-400" />
                  <span>{exp.year}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
                {exp.description}
              </p>

              {/* Technologies Applied */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                  Technologies &amp; Tools Utilized:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-lg bg-neutral-800/80 text-gray-200 border border-white/10 hover:border-orange-500/30 hover:text-orange-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}