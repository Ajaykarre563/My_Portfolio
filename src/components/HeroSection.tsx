import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data";
import Photo from "../assets/images/photo.jpeg";

import { FaPython, FaReact, FaAws, FaDownload, FaEnvelope } from "react-icons/fa";

const ROLES = [
  "AWS & DevOps Engineer",
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
    <div className="max-w-[1400px] mx-auto flex flex-row items-center gap-6 md:gap-10 py-16 px-4 md:px-6">

      {/* LEFT SIDE */}
      <div className="flex-1 min-w-0">

        {/* NAME */}
        <h1 className="text-gray-200 text-3xl md:text-6xl font-bold">
          Ajay Karre
        </h1>

        {/* ROLE */}
        <p className="mt-3 text-lg md:text-2xl text-gray-300">
          I am{" "}
          <span className="text-white font-semibold">
            {displayed}
            <span className="text-blue-400 ml-1">|</span>
          </span>
        </p>

        {/* DESCRIPTION */}
       <p className="text-gray-300 mt-4 text-sm md:text-lg leading-relaxed text-justify max-w-2xl break-words">
       Software Engineer with hands-on experience in AWS and DevOps, specializing in deploying scalable cloud applications.Experienced in infrastructure automation, and cloud environment management.Worked on real-time projects at Arohak Technologies, ensuring high availability, scalability, and reliable system performance.
      </p>

        {/* SMALL ATTRACTIVE BUTTONS */}
        <div className="flex flex-wrap gap-2 mt-4">

          {ROLES.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-3 py-1 
                text-xs md:text-sm rounded-lg font-medium 
                cursor-pointer transition

                ${i === 0 ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white" : ""}
                ${i === 1 ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white" : ""}
                ${i === 2 ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black" : ""}
              `}
            >
              {i === 0 && <FaAws />}
              {i === 1 && <FaReact />}
              {i === 2 && <FaPython />}
              <span className="whitespace-nowrap">{r}</span>
            </motion.div>
          ))}

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-3 mt-6">

          <a
  href="/My_Portfolio/Ajay_Karre_Resume.pdf"
  download
  className="flex items-center gap-2 px-4 py-2 text-sm 
             bg-gradient-to-r from-purple-500 to-pink-500 
             text-white rounded-full"
>
  <FaDownload /> Download
</a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 px-4 py-2 text-sm 
                       border border-gray-400 text-gray-300 
                       rounded-full"
          >
            <FaEnvelope /> Contact
          </a>

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 flex justify-end">
        <img
          src={Photo}
          alt="Ajay Karre"
          className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover object-[50%_18%]"
        />
      </div>

    </div>
  );
}