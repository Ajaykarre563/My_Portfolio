import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT } from "../data";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-16 px-6 md:px-16 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-10"
      >
        Contact Me
      </motion.h1>

      {/* Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 
        rounded-2xl shadow-lg p-8 w-full max-w-xl"
      >
        <div className="space-y-6 text-gray-300">

          {/* Address */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-pink-400 text-xl" />
            <p>{CONTACT.address}</p>
          </div>

          {/* Email */}
          <div
            className="flex items-center space-x-4 cursor-pointer hover:text-blue-400 transition"
            onClick={() => window.location.href = `mailto:${CONTACT.email}`}
          >
            <FaEnvelope className="text-indigo-400 text-xl" />
            <p className="underline">{CONTACT.email}</p>
          </div>

          {/* Phone */}
          <div
            className="flex items-center space-x-4 cursor-pointer hover:text-green-400 transition"
            onClick={() => window.location.href = `tel:${CONTACT.phoneNo}`}
          >
            <FaPhoneAlt className="text-green-400 text-xl" />
            <p>{CONTACT.phoneNo}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;