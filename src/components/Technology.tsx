import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaAws,
  FaTools,
} from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";

/* Enhanced Subskills Data with Proficiency Levels */
const skillData: Record<string, { name: string; proficiency: number }[]> = {
  Frontend: [
    { name: "HTML5", proficiency: 95 },
    { name: "CSS3", proficiency: 95 },
    { name: "JavaScript", proficiency: 90 },
    { name: "React.js", proficiency: 92 },
  ],
  Backend: [
    { name: "Python", proficiency: 88 },
    { name: "FastAPI", proficiency: 85 },
    { name: "Django", proficiency: 83 },
    { name: "PHP", proficiency: 78 },
  ],
  Database: [
    { name: "MongoDB", proficiency: 87 },
    { name: "SQL", proficiency: 90 },
    { name: "Power BI", proficiency: 82 },
    { name: "Excel", proficiency: 85 },
  ],
  "AWS & DevOps": [
    { name: "AWS", proficiency: 80 },
    { name: "Git", proficiency: 95 },
    { name: "Docker", proficiency: 88 },
    { name: "Kubernetes", proficiency: 75 },
    { name: "Linux", proficiency: 85 },
    { name: "Jenkins", proficiency: 80 },
    { name: "Terraform", proficiency: 78 },
  ],
  "Data Analyst": [
    { name: "SQL", proficiency: 90 },
    { name: "Python", proficiency: 88 },
    { name: "Excel", proficiency: 92 },
    { name: "ML", proficiency: 82 },
    { name: "NLP", proficiency: 80 },
    { name: "Power BI", proficiency: 82 },
    { name: "Data Cleaning", proficiency: 88 },
    { name: "Data Understanding", proficiency: 85 },
    { name: "Data Manipulation", proficiency: 87 },
    { name: "OpenCV", proficiency: 75 },
    { name: "NumPy", proficiency: 86 },
    { name: "Pandas", proficiency: 88 },
    { name: "Matplotlib", proficiency: 84 },
    { name: "Seaborn", proficiency: 83 },
    { name: "Scikit-learn", proficiency: 85 },
  ],
  "Testing Tools": [
    { name: "Manual Testing", proficiency: 87 },
    { name: "Selenium", proficiency: 80 },
  ],
  "Gen-AI": [
    { name: "Prompt Engineering", proficiency: 89 },
    { name: "ChatGPT/GPT-4", proficiency: 85 },
    { name: "Hugging Face", proficiency: 80 },
    { name: "Vector DBs", proficiency: 78 },
    { name: "LangChain", proficiency: 82 },
    { name: "Fine-Tuning", proficiency: 75 },
    { name: "RAG", proficiency: 80 },
  ],
  "End-to-End IT Recruitment": [
    { name: "Talent Sourcing", proficiency: 90 },
    { name: "Shortlisting", proficiency: 88 },
    { name: "Interview Coordination", proficiency: 85 },
    { name: "Offer Generation", proficiency: 88 },
    { name: "Salary Negotiation", proficiency: 85 },
    { name: "Onboarding", proficiency: 87 },
  ],
  "Other Skills": [
    { name: "ServiceNow", proficiency: 80 },
    { name: "Managed File Transfer", proficiency: 82 },
    { name: "EDI", proficiency: 78 },
    { name: "SAP-CPI", proficiency: 75 },
  ],
};

/* Main Icons for categories */
const categoryIcons: Record<string, JSX.Element> = {
  Frontend: <FaLaptopCode className="text-blue-400" />,
  Backend: <FaTools className="text-yellow-300" />,
  Database: <FaDatabase className="text-purple-400" />,
  "AWS & DevOps": <FaAws className="text-orange-400" />,
  "Data Analyst": <MdAnalytics className="text-green-400" />,
  "Testing Tools": <FaTools className="text-red-400" />,
  "Gen-AI": <BsRobot className="text-purple-400" />,
  "End-to-End IT Recruitment": <HiUserGroup className="text-green-400" />,
  "Other Skills": <GiSkills className="text-blue-400" />,
};

const Technology = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // Calculate total skills
  const totalSkills = Object.values(skillData).reduce((sum, skills) => sum + skills.length, 0);

  // Get categories to display (all or filtered)
  const categoriesToShow = selectedCategory 
    ? [selectedCategory]
    : Object.keys(skillData);

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technologies & Skills
          </h1>
          <p className="text-center text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            A comprehensive collection of tools and expertise across multiple domains
          </p>
          
          {/* Total Skills Counter */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                       border border-blue-500/50 rounded-full px-6 py-3 backdrop-blur-sm hover:border-blue-400 
                       hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <span className="text-sm font-semibold text-blue-300">Total Skills:</span>
            <motion.span 
              className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
              whileInView={{ scale: 1.2 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              {totalSkills}+
            </motion.span>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-8 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/70 border border-slate-600/50"
              }`}
            >
              All Skills
            </motion.button>
            {Object.keys(skillData).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/70 border border-slate-600/50 hover:border-slate-500"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >

          {categoriesToShow.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >

              {/* CATEGORY CARD */}
              <motion.div
                onClick={() => toggleCategory(category)}
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer flex flex-col items-center justify-center 
                           bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                           backdrop-blur-md p-8 rounded-2xl border border-slate-700/50
                           hover:border-blue-500/80 hover:shadow-[0px_0px_30px_rgba(59,130,246,0.3)]
                           hover:bg-gradient-to-br hover:from-slate-700/60 hover:to-slate-800/60
                           transition-all duration-300 group relative active:shadow-inner
                           active:shadow-blue-500/20"
              >
                <motion.span 
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 15, y: -5 }}
                  whileTap={{ rotate: -15 }}
                >
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </motion.span>
                <h2 className="text-xl font-bold text-gray-100 text-center leading-tight mb-2">
                  {category}
                </h2>
                
                {/* Skill Counter Badge with Tooltip */}
                <motion.div
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white text-xs font-bold px-3 py-1 rounded-full
                             hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200
                             relative group/badge"
                >
                  {skillData[category as keyof typeof skillData].length} skills
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                               bg-slate-950 text-blue-300 text-xs px-2 py-1 rounded
                               whitespace-nowrap opacity-0 pointer-events-none
                               group-hover/badge:opacity-100 transition-opacity"
                  >
                    Click to expand
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* SUBSKILLS DROPDOWN */}
              <AnimatePresence>
                {openCategory === category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 
                               backdrop-blur-md p-6 rounded-2xl border border-slate-700/50
                               shadow-lg shadow-blue-500/10"
                  >
                    <div className="flex flex-wrap gap-3">
                      {skillData[category as keyof typeof skillData].map((skill, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group/skill relative"
                          onMouseEnter={() => setHoveredSkill(`${category}-${idx}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <motion.span 
                            className="px-4 py-2 bg-gradient-to-r from-blue-600/40 to-blue-500/40 
                                       text-blue-100 rounded-lg text-sm font-medium
                                       border border-blue-400/50 hover:border-blue-300
                                       hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                                       transition-all duration-200 cursor-pointer inline-block
                                       group-hover/skill:scale-105 group-hover/skill:from-blue-600/60"
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill.name}
                          </motion.span>

                          {/* Skill Level Tooltip */}
                          <AnimatePresence>
                            {hoveredSkill === `${category}-${idx}` && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                                          bg-slate-950 border border-blue-500/50 text-blue-300 
                                          text-xs px-3 py-2 rounded-lg whitespace-nowrap
                                          pointer-events-none z-10 font-semibold
                                          shadow-lg shadow-blue-500/30"
                              >
                                {skill.proficiency >= 90
                                  ? "⭐ Expert"
                                  : skill.proficiency >= 80
                                  ? "✓ Advanced"
                                  : "◐ Intermediate"}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
