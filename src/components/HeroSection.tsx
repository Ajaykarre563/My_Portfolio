import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data";
import Photo from "../assets/images/photo.jpeg";
import {
  FaAws,
  FaDownload,
  FaEnvelope,
  FaDocker,
  FaShieldAlt,
} from "react-icons/fa";
import { SiTerraform, SiKubernetes } from "react-icons/si";

const ROLES = [
  "AWS & DevOps Engineer",
  "Cloud Infrastructure Specialist",
  "CI/CD & Automation Engineer",
];

const STATS = [
  { label: "AWS Services", value: "30+" },
  { label: "Real-Time Deployments", value: "Production" },
  { label: "IaC & Automation", value: "Terraform" },
  { label: "Container Orchestration", value: "ECS & EKS" },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 max-w-2xl text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            Available for Cloud & DevOps Engineering Roles
          </div>

          {/* Greeting & Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">Ajay Karre</span>
          </h1>

          {/* Typing Role */}
          <div className="mt-3 text-xl sm:text-2xl font-semibold text-gray-300 flex items-center justify-center lg:justify-start min-h-[36px]">
            <span>I build & secure </span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-bold border-b-2 border-orange-400/50 pb-0.5">
              {displayed}
            </span>
            <span className="text-orange-400 ml-1 animate-pulse font-mono font-normal">|</span>
          </div>

          {/* Bio Description */}
          <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
            Software Engineer specializing in AWS cloud infrastructure and DevOps automation.
            Experienced in architecting, deploying, and managing resilient multi-tier systems on AWS,
            authoring Infrastructure as Code with Terraform, orchestrating containers with Docker &amp; Kubernetes,
            and establishing automated CI/CD pipelines with zero-downtime releases at Arohak Technologies.
          </p>

          {/* Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-6">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-orange-300 font-medium">
              <FaAws className="text-orange-400" /> AWS Cloud Architecture
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-purple-300 font-medium">
              <SiTerraform className="text-purple-400" /> Terraform IaC
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-blue-300 font-medium">
              <SiKubernetes className="text-blue-400" /> Kubernetes &amp; Docker
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-emerald-300 font-medium">
              <FaShieldAlt className="text-emerald-400" /> VPC &amp; IAM Security
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/My_Portfolio/Ajay_Karre_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300"
            >
              <FaDownload className="text-xs" /> Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
            >
              <FaEnvelope className="text-xs text-orange-400" /> Contact Me
            </motion.a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-white/10 text-center lg:text-left">
            {STATS.map((stat, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-neutral-900/50 border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PROFILE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Glowing Rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 via-purple-600 to-cyan-400 blur-2xl opacity-40 animate-pulse" />

          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-orange-500 via-purple-500 to-blue-500 shadow-2xl shadow-purple-500/20">
            <div className="p-1 rounded-full bg-neutral-950">
              <img
                src={Photo}
                alt="Ajay Karre - AWS & DevOps Engineer"
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-[50%_18%]"
              />
            </div>
          </div>

          {/* Floating AWS Certified Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-orange-500/30 backdrop-blur-md shadow-xl text-xs font-semibold text-white"
          >
            <FaAws className="text-orange-400 text-base" />
            <span>AWS Certified</span>
          </motion.div>

          {/* Floating DevOps Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -top-2 -right-2 sm:top-4 sm:right-2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl text-xs font-semibold text-white"
          >
            <FaDocker className="text-blue-400 text-base" />
            <span>DevOps Practitioner</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}