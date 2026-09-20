import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAws,
  FaTools,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaNetworkWired,
  FaHdd,
  FaChartLine,
  FaPaperPlane,
  FaCode,
  FaTerminal,
  FaCheckCircle,
  FaStore,
  FaBrain,
} from "react-icons/fa";
import {
  SiAmazonapigateway,
  SiAmazoncloudwatch,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazonecs,
  SiAmazoneks,
  SiAmazoniam,
  SiAmazonrds,
  SiAmazonroute53,
  SiAmazons3,
  SiAmazonsimpleemailservice,
  SiAwselasticloadbalancing,
  SiAwslambda,
  SiAwssecretsmanager,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiAnsible,
  SiLinux,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiGit,
  SiPython,
  SiMysql,
} from "react-icons/si";

interface SkillItem {
  name: string;
  category?: string;
  badge?: string;
  icon?: JSX.Element;
}

/* AWS SKILLS ORGANIZED BY ARCHITECTURAL DOMAIN */
const AWS_DOMAINS = [
  "All",
  "Compute & Containers",
  "Networking & Delivery",
  "Storage & Database",
  "Security & Identity",
  "Monitoring & Ops",
  "Messaging & Integration",
  "AI & Machine Learning",
  "AWS Marketplace & Third-Party Services",
] as const;

type AwsDomain = (typeof AWS_DOMAINS)[number];

const awsSkillsList: (SkillItem & { domain: AwsDomain })[] = [
  // Compute & Containers
  {
    name: "Amazon EC2",
    badge: "Virtual Servers",
    domain: "Compute & Containers",
    icon: <SiAmazonec2 className="text-orange-400" />,
  },
  {
    name: "Amazon ECS",
    badge: "Container Orchestration",
    domain: "Compute & Containers",
    icon: <SiAmazonecs className="text-orange-400" />,
  },
  {
    name: "Amazon EKS",
    badge: "Managed Kubernetes",
    domain: "Compute & Containers",
    icon: <SiAmazoneks className="text-orange-400" />,
  },
  {
    name: "AWS Lambda",
    badge: "Serverless Compute",
    domain: "Compute & Containers",
    icon: <SiAwslambda className="text-orange-400" />,
  },
  {
    name: "Amazon ECR",
    badge: "Container Registry",
    domain: "Compute & Containers",
    icon: <FaServer className="text-orange-400" />,
  },
  {
    name: "FireLens",
    badge: "Log Routing for ECS",
    domain: "Compute & Containers",
    icon: <FaServer className="text-amber-400" />,
  },

  // Networking & Delivery
  {
    name: "Amazon VPC",
    badge: "Isolated Cloud Network",
    domain: "Networking & Delivery",
    icon: <FaNetworkWired className="text-blue-400" />,
  },
  {
    name: "Amazon Route 53",
    badge: "Highly Available DNS",
    domain: "Networking & Delivery",
    icon: <SiAmazonroute53 className="text-blue-400" />,
  },
  {
    name: "Amazon CloudFront",
    badge: "Global CDN",
    domain: "Networking & Delivery",
    icon: <FaNetworkWired className="text-cyan-400" />,
  },
  {
    name: "Load Balancers (ALB / NLB)",
    badge: "Traffic Distribution",
    domain: "Networking & Delivery",
    icon: <SiAwselasticloadbalancing className="text-blue-400" />,
  },
  {
    name: "Amazon API Gateway",
    badge: "REST & WebSocket APIs",
    domain: "Networking & Delivery",
    icon: <SiAmazonapigateway className="text-indigo-400" />,
  },
  {
    name: "AWS Client VPN",
    badge: "Secure Access",
    domain: "Networking & Delivery",
    icon: <FaNetworkWired className="text-sky-400" />,
  },

  // Storage & Database
  {
    name: "Amazon S3",
    badge: "Object Storage",
    domain: "Storage & Database",
    icon: <SiAmazons3 className="text-emerald-400" />,
  },
  {
    name: "Amazon EBS",
    badge: "Block Storage",
    domain: "Storage & Database",
    icon: <FaHdd className="text-emerald-400" />,
  },
  {
    name: "Amazon EFS",
    badge: "Managed NFS File System",
    domain: "Storage & Database",
    icon: <FaHdd className="text-teal-400" />,
  },
  {
    name: "Amazon RDS",
    badge: "Relational DB",
    domain: "Storage & Database",
    icon: <SiAmazonrds className="text-blue-400" />,
  },
  {
    name: "Amazon DynamoDB",
    badge: "NoSQL Key-Value DB",
    domain: "Storage & Database",
    icon: <SiAmazondynamodb className="text-blue-500" />,
  },

  // Security & Identity
  {
    name: "AWS IAM",
    badge: "Access & Governance",
    domain: "Security & Identity",
    icon: <SiAmazoniam className="text-rose-400" />,
  },
  {
    name: "AWS Secrets Manager",
    badge: "Credential Management",
    domain: "Security & Identity",
    icon: <SiAwssecretsmanager className="text-rose-400" />,
  },
  {
    name: "AWS KMS",
    badge: "Key Encryption Service",
    domain: "Security & Identity",
    icon: <FaShieldAlt className="text-red-400" />,
  },
  {
    name: "AWS WAF & Web ACL",
    badge: "Layer 7 Firewalls",
    domain: "Security & Identity",
    icon: <FaShieldAlt className="text-pink-400" />,
  },
  {
    name: "AWS ACM",
    badge: "Certificate Manager / SSL",
    domain: "Security & Identity",
    icon: <FaShieldAlt className="text-rose-300" />,
  },

  // Monitoring & Ops
  {
    name: "Amazon CloudWatch",
    badge: "Metrics & Logs",
    domain: "Monitoring & Ops",
    icon: <SiAmazoncloudwatch className="text-amber-400" />,
  },
  {
    name: "CloudWatch Alarms",
    badge: "Automated Triggers",
    domain: "Monitoring & Ops",
    icon: <FaChartLine className="text-amber-300" />,
  },
  {
    name: "AWS CloudFormation",
    badge: "Infrastructure as Code",
    domain: "Monitoring & Ops",
    icon: <FaTools className="text-amber-400" />,
  },
  {
    name: "AWS CLI",
    badge: "Command Line Ops",
    domain: "Monitoring & Ops",
    icon: <FaTerminal className="text-yellow-400" />,
  },

  // Messaging & Integration
  {
    name: "Amazon EventBridge",
    badge: "Event-Driven Bus",
    domain: "Messaging & Integration",
    icon: <FaPaperPlane className="text-purple-400" />,
  },
  {
    name: "Amazon SNS",
    badge: "Pub/Sub Messaging",
    domain: "Messaging & Integration",
    icon: <FaPaperPlane className="text-violet-400" />,
  },
  {
    name: "AWS SES",
    badge: "Simple Email Service",
    domain: "Messaging & Integration",
    icon: <SiAmazonsimpleemailservice className="text-purple-300" />,
  },

  // AI & Machine Learning
  {
    name: "Amazon Bedrock",
    badge: "Generative AI & Foundation Models",
    domain: "AI & Machine Learning",
    icon: <FaBrain className="text-pink-400" />,
  },

  // AWS Marketplace & Third-Party Services
  {
    name: "AWS Marketplace",
    badge: "Cloud Software & AMIs",
    domain: "AWS Marketplace & Third-Party Services",
    icon: <FaStore className="text-orange-400" />,
  },
];

const OTHER_SKILLS: Record<string, SkillItem[]> = {
  "DevOps Tools": [
    { name: "Docker", badge: "Containerization", icon: <SiDocker className="text-sky-400" /> },
    { name: "Kubernetes", badge: "K8s Orchestration", icon: <SiKubernetes className="text-blue-400" /> },
    { name: "Terraform", badge: "Infrastructure as Code", icon: <SiTerraform className="text-purple-400" /> },
    { name: "Jenkins", badge: "CI/CD Automation", icon: <SiJenkins className="text-red-400" /> },
    { name: "Ansible", badge: "Config Management", icon: <SiAnsible className="text-red-500" /> },
    { name: "Linux", badge: "RHEL / Ubuntu / Alpine", icon: <SiLinux className="text-yellow-400" /> },
    { name: "GitHub", badge: "Version Control", icon: <SiGithub className="text-gray-200" /> },
    { name: "GitLab", badge: "Pipelines & Git", icon: <SiGitlab className="text-orange-500" /> },
    { name: "BitBucket", badge: "Atlassian Repos", icon: <SiBitbucket className="text-blue-500" /> },
    { name: "Git", badge: "Source Control", icon: <SiGit className="text-orange-600" /> },
    { name: "CI/CD Pipelines", badge: "Automated Release", icon: <FaTools className="text-emerald-400" /> },
    { name: "Shell Scripting", badge: "Bash Automation", icon: <FaTerminal className="text-yellow-300" /> },
  ],

  Backend: [
    { name: "Python", badge: "Core Language", icon: <SiPython className="text-yellow-400" /> },
    { name: "YAML Scripting", badge: "Cloud & Pipeline Config", icon: <FaCode className="text-pink-400" /> },
  ],

  Databases: [
    { name: "MySQL", badge: "Relational SQL", icon: <SiMysql className="text-sky-400" /> },
  ],
};

const CATEGORIES = [
  { id: "AWS Cloud", label: "AWS Cloud Architecture", icon: <FaAws className="text-orange-400" />, count: awsSkillsList.length },
  { id: "DevOps Tools", label: "DevOps & CI/CD", icon: <FaTools className="text-cyan-400" />, count: OTHER_SKILLS["DevOps Tools"].length },
  { id: "Backend", label: "Backend & Scripting", icon: <FaCode className="text-emerald-400" />, count: OTHER_SKILLS["Backend"].length },
  { id: "Databases", label: "Databases", icon: <FaDatabase className="text-purple-400" />, count: OTHER_SKILLS["Databases"].length },
];

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState<string>("AWS Cloud");
  const [activeAwsDomain, setActiveAwsDomain] = useState<AwsDomain>("All");

  const filteredAwsSkills =
    activeAwsDomain === "All"
      ? awsSkillsList
      : awsSkillsList.filter((s) => s.domain === activeAwsDomain);

  return (
    <section id="skills" className="py-20 px-6 md:px-16 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <FaAws className="text-sm" /> Cloud & DevOps Competencies
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed"
        >
          Hands-on production expertise in designing, automating, and operating resilient cloud
          infrastructure on <span className="text-orange-400 font-medium">Amazon Web Services</span> and modern DevOps toolchains.
        </motion.p>
      </div>

      {/* Main Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 max-w-4xl mx-auto mb-10">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium
                transition-all duration-300 border
                ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 border-orange-500/50 text-white shadow-lg shadow-orange-500/10"
                    : "bg-neutral-900/60 border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-neutral-800/60"
                }
              `}
            >
              <span className="text-base">{cat.icon}</span>
              <span className="font-semibold">{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive
                    ? "bg-orange-500/30 text-orange-200"
                    : "bg-white/5 text-gray-400"
                }`}
              >
                {cat.count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {activeCategory === "AWS Cloud" ? (
          <motion.div
            key="aws-cloud-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* AWS Architecture Domain Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {AWS_DOMAINS.map((domain) => {
                const isDomainActive = activeAwsDomain === domain;
                return (
                  <button
                    key={domain}
                    onClick={() => setActiveAwsDomain(domain)}
                    className={`
                      px-3 py-1.5 text-xs rounded-lg font-medium transition-all duration-200 border
                      ${
                        isDomainActive
                          ? "bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/20"
                          : "bg-white/5 text-gray-400 border-white/5 hover:text-gray-200 hover:bg-white/10"
                      }
                    `}
                  >
                    {domain}
                  </button>
                );
              })}
            </div>

            {/* AWS Skills Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5"
            >
              {filteredAwsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="
                    group relative flex items-start gap-3 p-3.5 rounded-xl
                    bg-neutral-900/70 border border-white/10 backdrop-blur-md
                    hover:border-orange-500/40 hover:bg-neutral-900/90
                    hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300
                  "
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 text-xl transition duration-300">
                    {skill.icon || <FaAws className="text-orange-400" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-white truncate group-hover:text-orange-300 transition duration-200">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                      {skill.badge}
                    </p>
                    <span className="inline-block mt-1 text-[9px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                      {skill.domain === "AWS Marketplace & Third-Party Services"
                        ? "Marketplace"
                        : skill.domain === "AI & Machine Learning"
                        ? "GenAI / ML"
                        : skill.domain.split(" ")[0]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5"
          >
            {OTHER_SKILLS[activeCategory]?.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="
                  group relative flex items-start gap-3 p-3.5 rounded-xl
                  bg-neutral-900/70 border border-white/10 backdrop-blur-md
                  hover:border-blue-500/40 hover:bg-neutral-900/90
                  hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300
                "
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 text-xl transition duration-300">
                  {skill.icon || <FaCheckCircle className="text-blue-400" />}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-white truncate group-hover:text-blue-300 transition duration-200">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                    {skill.badge}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}