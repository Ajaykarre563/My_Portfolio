import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaAws } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../data";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function AppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 px-5 md:px-12 py-3.5 backdrop-blur-xl bg-neutral-950/70 border-b border-white/10 shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 via-purple-600 to-blue-500 p-[1.5px] shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <FaAws className="text-orange-400 text-lg group-hover:scale-110 transition duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-base md:text-lg font-bold tracking-tight group-hover:text-orange-400 transition">
              Ajay Karre
            </span>
            <span className="text-[11px] text-gray-400 font-medium tracking-wide">
              AWS & DevOps Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Socials + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-300 text-lg">
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Ajaykarre563"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 hover:text-white transition duration-200"
              title="GitHub Profile"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/ajay-karre-737291268/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition duration-200"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={`mailto:${CONTACT.email}`}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-500 via-purple-600 to-indigo-600 shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <motion.a
            whileTap={{ scale: 0.95 }}
            href={`mailto:${CONTACT.email}`}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-purple-600"
          >
            Contact
          </motion.a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 pb-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 px-3 pt-2 text-lg text-gray-300 border-t border-white/5">
              <a
                href="https://github.com/Ajaykarre563"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-karre-737291268/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}