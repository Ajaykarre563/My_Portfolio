import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { CONTACT } from "../data"; // make sure CONTACT.email exists, e.g. { email: "you@domain.com" }

const AppBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 flex justify-between items-center backdrop-blur-md bg-white/5 shadow-lg border-b border-white/10"
    >
      {/* Logo */}
      <motion.h1
        className="text-zinc-300 text-4xl font-semibold tracking-wide cursor-pointer select-none"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 220 }}
        aria-label="Home"
      >
        AK
      </motion.h1>

      {/* Right side: icons + Get in touch */}
      <div className="flex items-center space-x-4">
        <div className="text-gray-200 text-2xl flex items-center">
          <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://github.com/Ajaykarre563"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-3"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-white transition duration-200" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://www.linkedin.com/in/ajay-karre-737291268/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-3"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-400 transition duration-200" />
          </motion.a>
        </div>

        {/* Get in touch button — opens email client */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          href={`mailto:${CONTACT.email}`}
          className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Get in touch"
        >
          Get in touch
        </motion.a>
      </div>
    </motion.div>
  );
};

export default AppBar;
