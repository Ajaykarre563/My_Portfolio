import { EDUCATION } from "../data";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-16 px-6 md:px-16">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white mb-16">
        Education
      </h1>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-gray-700 max-w-4xl mx-auto">
        
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            className="mb-12 ml-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-4 ring-black"></span>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg transition">
              
              {/* Year */}
              <p className="text-sm text-indigo-400 mb-1">
                {edu.year}
              </p>

              {/* Institution */}
              <h2 className="text-xl font-semibold text-white">
                {edu.institution}
              </h2>

              {/* Degree */}
              <p className="text-gray-400 text-sm mt-1">
                {edu.degree}
              </p>

              {/* Location */}
              <p className="text-gray-500 text-sm">
                {edu.location}
              </p>

              {/* GPA */}
              <p className="mt-2 text-sm">
                <span className="text-purple-400 font-semibold">CGPA: </span>
                <span className="text-white">{edu.GPA}</span>
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Education;