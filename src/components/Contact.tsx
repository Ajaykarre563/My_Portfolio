import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <FaPaperPlane className="text-xs" /> Connect With Me
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed"
        >
          I am actively exploring new opportunities in AWS Cloud Engineering and DevOps.
          Feel free to reach out via email, phone, or connect on LinkedIn!
        </motion.p>
      </div>

      {/* Contact Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-neutral-900/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-indigo-500/40 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl mb-4 group-hover:scale-110 transition duration-300">
                <FaEnvelope />
              </div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</h3>
              <p className="text-sm font-medium text-white mt-1 break-all">{CONTACT.email}</p>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex-1 text-center py-2 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 text-xs font-semibold transition"
              >
                Send Email
              </a>
              <button
                onClick={() => handleCopy(CONTACT.email, "email")}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs transition"
                title="Copy Email"
              >
                {copiedField === "email" ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-emerald-500/40 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl mb-4 group-hover:scale-110 transition duration-300">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</h3>
              <p className="text-sm font-medium text-white mt-1">{CONTACT.phoneNo}</p>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
              <a
                href={`tel:${CONTACT.phoneNo}`}
                className="flex-1 text-center py-2 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 text-xs font-semibold transition"
              >
                Call
              </a>
              <button
                onClick={() => handleCopy(CONTACT.phoneNo, "phone")}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs transition"
                title="Copy Phone"
              >
                {copiedField === "phone" ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-950/60 border border-white/5 hover:border-pink-500/40 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 text-xl mb-4 group-hover:scale-110 transition duration-300">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</h3>
              <p className="text-sm font-medium text-white mt-1">{CONTACT.address}</p>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
              <span className="text-xs text-gray-400">Open to Relocation / Remote</span>
            </div>
          </div>
        </div>

        {/* Social Links Banner */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            Connect directly on professional platforms:
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ajay-karre-737291268/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:bg-blue-600/30 transition"
            >
              <FaLinkedin className="text-sm" /> LinkedIn
            </a>

            <a
              href="https://github.com/Ajaykarre563"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-xs font-semibold hover:bg-white/10 transition"
            >
              <FaGithub className="text-sm" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center mt-16 pt-8 border-t border-white/5 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Ajay Karre. Built with React, Tailwind CSS, &amp; Framer Motion.</p>
      </footer>
    </section>
  );
}