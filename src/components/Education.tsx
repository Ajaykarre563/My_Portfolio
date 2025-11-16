import { EDUCATION } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Education = () => {
  // Using useInView hook to trigger animation when the element comes into the viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger animation when 10% of the component is visible
  });

  return (
    <div>
      <h1 className="text-4xl text-gray-400 text-center pb-28 pt-10">
        Education
      </h1>
      <div>
        {EDUCATION.map((details, index) => (
          <motion.div
            ref={ref}
            key={index}
            className="grid grid-cols-2 text-xs text-gray-400 p-10"
            initial={{ opacity: 0 }} // Initial state before animation starts
            animate={{
              opacity: inView ? 1 : 0, // Fade in when in view
            }}
            transition={{ duration: 0.8, delay: index * 0.1 }} // Delay for sequential animation
          >
            <motion.div
              className="col-span-1 text-center text-xl"
              initial={{ x: -50, opacity: 0 }} // Start from the left
              animate={{ x: inView ? 0 : -50, opacity: inView ? 1 : 0 }} // Animate to original position
              transition={{ duration: 0.6 }}
            >
              {details.year}
            </motion.div>
            <motion.div
              className="col-span-1 pl-20"
              initial={{ x: 50, opacity: 0 }} // Start from the right
              animate={{ x: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Animate to original position
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 font-bold text-xl text-white">
                {details.institution}
              </div>
              <div className="p-2 text-gray-400 text-sm">
                {details.degree}
              </div>
              <div className="p-2 text-gray-400 text-sm">
                {details.location}
              </div>
              <span className="pl-2 font-semibold text-purple-500  text-xl">GPA :</span>
              <span className="p-2 text-xl">{details.GPA}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
