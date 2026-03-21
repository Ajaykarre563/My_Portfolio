import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data";
import Photo from "../assets/images/photo.jpeg";

import { FaPython, FaReact, FaAws, FaDownload, FaEnvelope } from "react-icons/fa";

const ROLES = [
  "AWS & DevOps Engineer",
  "Data Analyst",
  "Python Full Stack Developer",
  
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const full = ROLES[roleIndex];
    let i = 0;

    setDisplayed("");

    const typer = setInterval(() => {
      if (i <= full.length) {
        setDisplayed(full.slice(0, i));
        i++;
      } else {
        clearInterval(typer);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typer);
  }, [roleIndex]);

  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-6">

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center">

        {/* NAME */}
        <h1 className="text-gray-200 text-5xl md:text-6xl font-bold flex flex-wrap">
          {"Ajay Karre".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* ROLE */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          I am{" "}
          <span className="text-white font-semibold">
            {displayed}
            <span className="text-blue-400 blinking-cursor ml-1">|</span>
          </span>
        </p>

        {/* TAGLINE */}
          <motion.p
  className="text-gray-200 mt-8 text-lg leading-relaxed text-justify 
             [text-align-last:left] hyphens-auto break-words max-w-[85%]"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
 I am an AWS & DevOps Engineer with hands-on experience in deploying scalable applications and managing cloud infrastructure. I have completed AWS certification from Udemy and am currently working at Arohak Technologies, where I work on AWS and cloud-based solutions, gaining practical experience in real-time deployments and CI/CD pipeline implementation.
</motion.p>

        {/* BADGES */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">

  {ROLES.map((r, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.08, y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        flex items-center justify-center gap-2 px-5 py-3 
        rounded-full text-white font-semibold text-sm 
        shadow-lg cursor-pointer backdrop-blur-md border border-white/10
        relative overflow-hidden
        ${i === 0 ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400" : ""}
        ${i === 1 ? "bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400" : ""}
        ${i === 2 ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black" : ""}
      `}
    >
      {/* Glow Effect */}
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300 rounded-full"></span>

      {/* Icon */}
      {i === 0 && <FaAws className="z-10" />}
      {i === 1 && <FaReact className="z-10" />}
      {i === 2 && <FaPython className="z-10" />}

      {/* Text */}
      <span className="z-10">{r}</span>
    </motion.div>
  ))}

</div>

       
        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-8">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Ajay_Karre_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       text-white text-sm font-semibold rounded-full 
                       shadow-lg hover:shadow-purple-500/40 transition duration-300"
          >
            <FaDownload className="text-sm" /> Download
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 px-5 py-2.5 
                       bg-white/5 backdrop-blur-md border border-white/20
                       text-blue-300 text-sm font-semibold rounded-full 
                       hover:bg-blue-500/20 hover:text-white transition duration-300"
          >
            <FaEnvelope className="text-sm" /> Contact
          </motion.a>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center lg:justify-end items-center">
        <motion.img
          src={Photo}
          alt="Ajay Karre"
          className="w-80 h-80 object-cover object-[50%_18%] rounded-full shadow-xl mx-auto"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Cursor animation */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </div>
  );
}