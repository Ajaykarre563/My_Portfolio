import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaAws, FaTools } from "react-icons/fa";

/* SKILLS */
const skillData: Record<string, { name: string }[]> = {
  "AWS Cloud": [
    { name: "EC2" }, { name: "VPC" }, { name: "VPN" }, { name: "ACM" },
    { name: "IAM" }, { name: "RDS" }, { name: "S3" }, { name: "EBS" },
    { name: "Lambda" }, { name: "ALB" }, { name: "NLB" }, { name: "EFS" },
    { name: "SNS" }, { name: "ECS" }, { name: "EKS" }, { name: "Route53" },
    { name: "DynamoDB" }, { name: "EventBridge" }, { name: "CloudWatch" },
    { name: "CloudFormation" },
  ],

  "DevOps Tools": [
    { name: "Docker" }, { name: "Kubernetes" }, { name: "Jenkins" },
    { name: "Terraform" }, { name: "Ansible" }, { name: "BitBucket" },
    { name: "CI/CD" }, { name: "Shell Scripting" }, { name: "Git" },
    { name: "GitHub" }, { name: "GitLab" }, { name: "Linux" },
  ],

  Backend: [
    { name: "Python" }, { name: "FastAPI" },
  ],

  Frontend: [
    { name: "HTML" }, { name: "CSS" },
    { name: "JavaScript" }, { name: "React" },
  ],

  Database: [
   { name: "MySQL" },{ name: "MongoDB" },
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

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">

        {Object.keys(skillData).map((category, index) => (
          <motion.div
            key={index}
            onClick={() =>
              setOpenCategory(openCategory === category ? null : category)
            }
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center gap-2 px-3 py-1.5 
              text-xs md:text-sm font-medium 
              rounded-lg cursor-pointer transition duration-300
              backdrop-blur-md border
              
              ${
                openCategory === category
                  ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-400 text-white shadow-lg"
                  : "bg-white/5 border-white/10 text-gray-300"
              }

              hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20
              hover:border-blue-400 hover:text-white hover:shadow-md
            `}
          >
            <span className="text-base">{categoryIcons[category]}</span>
            <span className="whitespace-nowrap">{category}</span>
          </motion.div>
        ))}

      </div>

      {/* SKILLS */}
      <div className="max-w-5xl mx-auto mt-10">

        <AnimatePresence mode="wait">
          {openCategory && (
            <motion.div
              key={openCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {skillData[openCategory].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="
                    px-3 py-1 text-xs md:text-sm
                    bg-purple-600/20 
                    text-purple-300 
                    rounded-full 
                    border border-purple-500/30
                    hover:bg-purple-500/30 hover:text-white
                    transition duration-300
                  "
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};

export default Technology;