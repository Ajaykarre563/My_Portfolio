import { EXPERIENCE } from "../data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-16">
      
      {/* Heading */}
      <h1 className="text-4xl text-gray-400 text-center pb-16">
        Experience
      </h1>

      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-3 top-0 w-[2px] h-full bg-gray-700"></div>

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 flex items-start gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-black z-10"></div>

            {/* Card */}
            <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 w-full shadow-lg">
              
              <p className="text-sm text-blue-400">{exp.year}</p>

              <h2 className="text-xl font-semibold text-white mt-1">
                {exp.role}
              </h2>

              <p className="text-gray-400">{exp.company}</p>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-purple-500 text-purple-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;