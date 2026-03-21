import { motion } from "framer-motion";
import { PROJECTS } from "../data";

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-16">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white mb-16">
        Projects
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-lg 
            rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
            hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover 
                transition duration-300 hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "/fallback.png"; // optional fallback
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              
              {/* Title */}
              <h2 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 text-justify">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-600/20 
                    text-purple-400 rounded-full border border-purple-500/30 
                    hover:bg-purple-500/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;