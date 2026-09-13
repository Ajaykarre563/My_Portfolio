import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import { FaLaptopCode, FaCheckCircle } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <FaLaptopCode className="text-xs" /> Featured Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Real-Time Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed"
        >
          Scalable, secure AWS infrastructure and automated solutions deployed in real-world production environments.
        </motion.p>
      </div>

      {/* Projects Cards Container */}
      <div className="flex flex-wrap gap-8 max-w-6xl mx-auto justify-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex-1 basis-full lg:basis-[calc(50%-1rem)] min-w-[280px] max-w-full group relative bg-neutral-900/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Top Image Preview */}
            <div className="relative h-56 w-full overflow-hidden bg-neutral-950 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

              {/* Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold backdrop-blur-md">
                <FaCheckCircle className="text-[10px]" />
                <span>Production Project</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-3 text-justify break-words">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2.5">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition"
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