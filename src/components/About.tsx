import { ABOUT_TEXT } from "../data";
import { motion } from "framer-motion";
import Photo from "../assets/images/photo.jpeg";
import { FaCloud, FaCogs, FaShieldAlt, FaServer } from "react-icons/fa";

const CORE_PILLARS = [
  {
    icon: <FaCloud className="text-orange-400 text-xl" />,
    title: "AWS Architecture",
    desc: "Designing resilient multi-AZ VPC networks, EC2 autoscaling, and secure database tiers.",
  },
  {
    icon: <FaCogs className="text-purple-400 text-xl" />,
    title: "CI/CD & Automation",
    desc: "Automating pipelines with Jenkins & Docker for zero-downtime delivery to production.",
  },
  {
    icon: <FaServer className="text-blue-400 text-xl" />,
    title: "Infrastructure as Code",
    desc: "Managing infrastructure declaratively using Terraform and CloudFormation.",
  },
  {
    icon: <FaShieldAlt className="text-emerald-400 text-xl" />,
    title: "Security & Observability",
    desc: "Enforcing IAM least privilege, SSL/TLS renewals, and CloudWatch metrics & alarms.",
  },
];

export default function About() {
  // Split ABOUT_TEXT by double line breaks to form neat paragraphs
  const paragraphs = ABOUT_TEXT.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="py-20 px-6 md:px-16 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          Background &amp; Expertise
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          About Me
        </motion.h2>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-neutral-950 p-3 rounded-3xl border border-white/10">
              <img
                src={Photo}
                alt="Ajay Karre"
                className="w-72 h-80 sm:w-80 sm:h-96 object-cover object-[50%_18%] rounded-2xl shadow-2xl"
              />
              <div className="mt-4 px-2 pb-1 text-center">
                <h3 className="text-white font-bold text-lg">Ajay Karre</h3>
                <p className="text-gray-400 text-xs mt-0.5">Software Engineer @ Arohak Technologies</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content Text & Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CORE_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-2 w-fit rounded-lg bg-white/5 border border-white/10 mb-2.5">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}