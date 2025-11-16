import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../data";
import Photo from "../assets/images/photo.jpg";

import { FaPython, FaReact, FaAws, FaDownload, FaEnvelope } from "react-icons/fa";

const ROLES = [
  "Python Full Stack Developer",
  "Data Analyst",
  "ML & NLP Engineer",
  "AWS & DevOps Enthusiast",
  "SQL & MongoDB Expert",
  "Automation Tester",
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

      {/* LEFT SIDE (Same layout as your old code) */}
      <div className="flex flex-col justify-center">

        {/* NAME */}
        <h1 className="text-gray-200 text-5xl md:text-6xl font-bold flex flex-wrap">
          {"Ajay Karre".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Rotating Role */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          I am{" "}
          <span className="text-white font-semibold">
            {displayed}
            <span className="text-blue-400 blinking-cursor ml-1">|</span>
          </span>
        </p>

        {/* BADGES */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {ROLES.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-xl text-white font-semibold text-sm 
                shadow-lg border border-white/10 transition-all
                ${i % 3 === 0 ? "bg-gradient-to-r from-blue-600 to-cyan-500" : ""}
                ${i % 3 === 1 ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}
                ${i % 3 === 2 ? "bg-gradient-to-r from-yellow-400 to-orange-400" : ""}
              `}
            >
              {i % 3 === 0 && <FaPython />}
              {i % 3 === 1 && <FaReact />}
              {i % 3 === 2 && <FaAws />}
              <span>{r}</span>
            </motion.div>
          ))}
        </div>

        {/* PARAGRAPH — EXACTLY LIKE OLD STYLE (DO NOT CHANGE) */}
        <motion.p
          className="text-gray-200 mt-8 text-lg leading-relaxed max-w-[85%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {HERO_CONTENT}
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                       rounded-lg text-white font-bold shadow-lg border border-blue-400/30"
          >
            <FaDownload /> Download Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:email@example.com"
            className="flex items-center gap-3 px-8 py-3 rounded-lg bg-blue-900/40 border border-blue-500/40 
                       text-blue-300 font-semibold"
          >
            <FaEnvelope /> Get In Touch
          </motion.a>
        </div>
      </div>

      {/* RIGHT SIDE (Image unchanged!) */}
      <div className="flex justify-center lg:justify-end items-center">
        <motion.img
          src={Photo}
          width="350"
          height="350"
          alt="Profile"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Cursor blink */}
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
