import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { CONTACT } from "../data";

const AppBar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center 
      backdrop-blur-lg bg-black/30 border-b border-white/10 shadow-lg"
    >
      {/* Logo + Role */}
      <div className="flex flex-col cursor-pointer">
        <motion.h1
          className="text-white text-2xl md:text-3xl font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Ajay Karre
        </motion.h1>

        <span className="text-sm text-gray-400 hidden md:block">
          AWS & DevOps Engineer
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-5">
        
        {/* Social Icons */}
        <div className="flex items-center text-xl text-gray-300">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Ajaykarre563"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-white transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/ajay-karre-737291268/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Get in Touch */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${CONTACT.email}`}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 
          text-white text-sm font-semibold shadow-md hover:shadow-lg transition"
        >
          Contact Me
        </motion.a>
      </div>
    </motion.header>
  );
};

export default AppBar;