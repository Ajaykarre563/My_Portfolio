import { ABOUT_TEXT } from "../data";
import { motion } from "framer-motion";
import Photo from "../assets/images/photo.jpeg";
const About = () => {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 py-16">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-white mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">
        
        {/* Profile Image (Circle) */}
<motion.img
  src={Photo}
  alt="Ajay Karre"
  className="w-64 h-64 object-cover object-[50%_18%] rounded-full shadow-lg mx-auto"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
/>

        {/* Text */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed text-justify tracking-wide"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {ABOUT_TEXT}
        </motion.p>

      </div>
    </section>
  );
};

export default About;