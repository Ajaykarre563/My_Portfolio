import { ABOUT_TEXT } from "../data";
import { motion } from "framer-motion";
import Photo from "../assets/images/photo.jpg";
const About = () => {
  return (
    <div className="flex flex-col items-center p-10 pb-40">
      {/* About Me Text Animation on Scroll */}
      <motion.div
        className="text-gray-400 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} // Ensures animation happens once
        transition={{ duration: 1 }}
      >
        About Me
      </motion.div>

      {/* Grid Section with Animations */}
      <motion.div
        className="grid grid-cols-2 mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} // Ensures animation happens once
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Image Animation */}
        <motion.img
          src={Photo}
          alt="about"
          width={300}
          height={75}
          className="justify-self-center rounded-lg"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }} // Ensures animation happens once
          transition={{ duration: 1 }}
        />

        {/* Text Animation */}
        <motion.div
          className="text-gray-300 mt-20 text-xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} // Ensures animation happens once
          transition={{ duration: 1, delay: 1 }}
        >
          {ABOUT_TEXT}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;