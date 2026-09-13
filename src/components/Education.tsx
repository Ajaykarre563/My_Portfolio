import { EDUCATION } from "../data";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaAward } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-16 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <FaGraduationCap className="text-sm" /> Academic Foundation
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-sm md:text-base"
        >
          Academic qualifications in Computer Science &amp; Engineering.
        </motion.p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            className="relative mb-12 pl-12 md:pl-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Timeline Marker */}
            <div className="absolute left-2 md:left-4 top-2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-neutral-950 border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>
            </div>

            {/* Card */}
            <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-indigo-500/30 transition duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold">
                  {edu.year}
                </span>
              </div>

              <p className="text-gray-300 text-sm md:text-base font-medium mt-1">
                {edu.degree}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-white/5 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-pink-400" />
                  <span>{edu.location}</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white font-semibold">
                  <FaAward className="text-amber-400" />
                  <span>Score / GPA: <span className="text-orange-400">{edu.GPA}</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}