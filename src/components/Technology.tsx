import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaAws, FaTools } from "react-icons/fa";

/* CLEAN SKILLS */
const skillData: Record<string, { name: string }[]> = {
  "AWS Cloud": [
    { name: "EC2" },
    { name: "VPC" },
    { name: "IAM" },
    { name: "RDS" },
    { name: "S3" },
    { name: "CloudWatch" },
    { name: "Lambda" },
    { name: "VPN" },
    { name: "CloudFormation" },
  ],

  "DevOps Tools": [
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Jenkins" },
    { name: "Terraform" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "GitLab" },
    { name: "Linux" },
    { name: "CI/CD Pipelines" },
  ],

  Backend: [
    { name: "Python" },
    { name: "Django" },
    { name: "FastAPI" },
  ],

  Frontend: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
  ],

  Database: [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
  ],
};

/* ICONS */
const categoryIcons: Record<string, JSX.Element> = {
  "AWS Cloud": <FaAws className="text-orange-400" />,
  "DevOps Tools": <FaTools className="text-yellow-400" />,
  Backend: <FaTools className="text-green-400" />,
  Frontend: <FaLaptopCode className="text-blue-400" />,
  Database: <FaDatabase className="text-purple-400" />,
};

const Technology = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section className="py-16 px-6 md:px-16">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Skills & Technologies
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">

        {Object.keys(skillData).map((category, index) => (
          <div key={index}>

            {/* CATEGORY CARD */}
            <motion.div
              onClick={() =>
                setOpenCategory(openCategory === category ? null : category)
              }
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer p-6 rounded-xl text-center border transition
              ${
                category === "AWS Cloud"
                  ? "bg-gradient-to-r from-orange-600/30 to-yellow-500/30 border-orange-400"
                  : category === "DevOps Tools"
                  ? "bg-gradient-to-r from-yellow-600/30 to-green-500/30 border-yellow-400"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="text-4xl mb-3">
                {categoryIcons[category]}
              </div>
              <h2 className="text-white font-semibold">{category}</h2>
            </motion.div>

            {/* SKILLS LIST */}
            <AnimatePresence>
              {openCategory === category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {skillData[category].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-600/20 
                      text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {skill.name}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Technology;