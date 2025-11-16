import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      className="pb-10 mb-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-gray-300 text-center pt-10 pb-6"
      >
        Contact Information
      </motion.h1>

      <div className="flex justify-center">
        <div className="text-xl text-gray-400 text-center space-y-4">

          {/* Address */}
          <motion.p
            variants={slideLeft}
            transition={{ duration: 0.6 }}
            className="p-2"
          >
            {CONTACT.address}
          </motion.p>

          {/* Email */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="underline p-2 cursor-pointer hover:text-blue-400 transition-colors duration-300"
            onClick={() => window.location.href = `mailto:${CONTACT.email}`}
          >
            {CONTACT.email}
          </motion.p>

          {/* Phone */}
          <motion.p
            variants={slideRight}
            transition={{ duration: 0.6 }}
            className="p-2 cursor-pointer hover:text-green-400 transition-colors duration-300"
            onClick={() => window.location.href = `tel:${CONTACT.phoneNo}`}
          >
            {CONTACT.phoneNo}
          </motion.p>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
