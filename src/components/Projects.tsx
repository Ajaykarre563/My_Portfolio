import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "../data";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl text-gray-400 text-center p-10">Projects</h1>
      <div>
        {PROJECTS.map((data, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-2 p-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image Section - Slide In From Left */}
            <motion.div
              className="col-span-1 text-xl text-gray-400 text-center justify-items-center"
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={data.image}
                height={200}
                width={200}
                className="rounded-lg"
              />
            </motion.div>

            {/* Details Section - Slide In From Right */}
            <motion.div
              className="col-span-1 text-gray-400 pl-20"
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-white">{data.title}</div>
              <div>{data.description}</div>
              <div>
                <SkillsCard skills={data.technologies} />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// SkillsCard Component with Animation
function SkillsCard({ skills }: { skills: string[] }): JSX.Element {
  return (
    <motion.div
      className="flex gap-4 mt-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {skills.map((d, index) => (
        <motion.div
          key={index}
          className="border border-gray-800 rounded-lg p-2 text-purple-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {d}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;


