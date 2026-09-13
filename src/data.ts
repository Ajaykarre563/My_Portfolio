import crenma from "./assets/images/crenma.png";
import st from "./assets/images/st.png";
/* HERO SECTION */
export const HERO_CONTENT = `I am an AWS & DevOps Engineer with hands-on experience in deploying scalable applications and managing cloud infrastructure. I specialize in AWS services, CI/CD pipelines, Linux server management, and infrastructure automation using Terraform and Docker. I focus on building secure, reliable, and production-ready systems and continuously improving my DevOps expertise.`;


/* ABOUT SECTION */
export const ABOUT_TEXT = `I am an AWS & DevOps Engineer with hands-on experience in designing, deploying, and managing scalable cloud-based applications.

At Arohak Technologies, I worked on real-time production projects including CRENMA and SecureTransfers, handling end-to-end AWS infrastructure, application deployment, and DevOps operations, I implemented CI/CD pipelines, Infrastructure as Code using Terraform and YAML, Docker-based deployments, Linux server administration, security controls, monitoring, and compliance practices using SonarQube and SOC 2 scanning, ensuring secure, highly available, and reliable production environments.

I'm passionate about cloud technologies, DevOps practices, and building efficient, secure, and scalable systems. I continuously strive to learn new tools and technologies to improve my skills and contribute effectively to real-world projects.`;

/* EDUCATION */
export const EDUCATION = [
  {
    year: "2020 - 2024",
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Marri Laxman Reddy Institute of Technology and Management",
    GPA: "8.26",
    location: "Hyderabad, Telangana, India",
  },
  {
    year: "2018 - 2020",
    degree: "Intermediate (MPC)",
    institution: "Sri Aadrash Junior College",
    GPA: "9.62",
    location: "Hyderabad, Telangana, India",
  },
  {
    year: "2018",
    degree: "SSC",
    institution: "Panchasheela High School",
    GPA: "8.33",
    location: "Hyderabad, Telangana, India",
  },
];

//Experience and Projects are only real-time projects and experience. No fake projects or experience is added. Only real-time experience and projects are added.
export const EXPERIENCE = [
  {
    year: "2025 - Present",
    role: "Software Engineer",
    company: "Arohak Technologies",
    description:
      "Worked on real-time deployment and management of scalable, secure applications, including the Crenma and SecureTransfers platforms, at Arohak Technologies. Designed and implemented end-to-end AWS cloud infrastructure from scratch, following secure, highly available, and scalable architecture practices. Deployed and managed AWS Infrastructure as Code (IaC) using Terraform and YAML scripting and DevOps practices, automating infrastructure provisioning and application deployments across multiple environments. Managed networking, security, storage, databases, load balancing, monitoring, and application delivery components for production workloads, while implementing security, code-quality, and compliance practices using SonarQube and SOC 2 scanning to maintain secure, reliable, and compliant application environments.",
    technologies: [
      "AWS",
      "EC2",
      "VPC",
      "IAM",
      "RDS",
      "S3",
      "Route 53",
      "CloudFront",
      "Load Balancers (ALB / NLB)",
      "CloudWatch",
      "CloudWatch Alarms",
      "Lambda",
      "EBS",
      "EFS",
      "DynamoDB",
      "SNS",
      "SES",
      "ECS",
      "EKS",
      "ECR",
      "FireLens",
      "AWS Client VPN",
      "ACM",
      "Secrets Manager",
      "KMS",
      "WAF & Web ACL",
      "API Gateway",
      "CloudFormation",
      "AWS CLI",
      "AWS Marketplace",
      "Amazon EventBridge",
      "Elastic IP",
      "Docker",
      "Docker Compose",
      "Containerization",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Bitbucket",
      "Linux",
      "YAML Scripting",
      "CI/CD",
      "PostgreSQL",
      "Grafana",
      "SonarQube",
      "SOC 2 Scan",
      "Stytch Authentication",
      "NFS",
      "LGTM Stack",
    ],
  },
  {
    year: "Jul-Oct 2024",
    role: "Data Science Trainee",
    company: "Dr. Reddy’s Foundation",
    description:
      "Worked on data analysis and machine learning projects including sentiment analysis and data visualization. Performed data preprocessing, cleaning, and feature engineering using Python and its libraries to extract insights from real-world datasets.",
    technologies: [
      "Python",
      "Feature Engineering",
      "EDA",
      "Data Cleaning",
      "Data Preprocessing",
      "Data Visualization",
      "Machine Learning",
      "NLP",
      "OpenCV",
      "Power BI",
      "Excel",
    ],
  },
];
/* PROJECTS (ONLY REAL-TIME PROJECTS) */
export const PROJECTS = [
  {
    title: "Crenma Project",
    image: crenma, // ✅ use imported image
    description:
      "Crenma is an end-to-end certificate management platform designed to automate SSL/TLS certificate renewal across diverse client environments. The platform supports trusted certificate providers such as Sectigo, Let’s Encrypt, and Google Trust Services (GTS) etc. providing secure and reliable certificate lifecycle management. Certificates can be renewed, managed, and deployed through multiple approaches, including cloud integrations and agent-based deployments, based on the client’s infrastructure, security requirements, and preferences. The platform helps organizations prevent certificate expiration, reduce manual effort, maintain secure HTTPS communication, and ensure continuous application availability.",
    technologies: [
      "Route 53",
      "CloudFront",
      "WAF",
      "ALB",
      "ECS",
      "ECR",
      "Docker",
      "IAM",
      "EC2",
      "KMS",
      "S3",
      "FireLens",
      "Grafana",
      "VPC",
      "RDS",
      "API Gateway",
      "ACM",
      "SES",
      "Lambda",
      "Amazon EventBridge",
      "EFS",
      "SNS",
      "CloudWatch",
      "Secrets Manager",
      "CloudFormation",
      "AWS CLI",
      "PostgreSQL",
      "Jenkins",
      "Bitbucket",
      "Terraform",
      "YAML Scripting",
      "Linux",
      "SonarQube",
      "SOC 2 Scan",
      "Stytch Authentication",
      "CI/CD",
      "VPN",
      "Elastic IP",
    ],
  },
  {
    title: "Secure Transfer Project",
    image: st, // ✅ use imported image
    description:
      "SecureTransfers is a secure file-sharing and file-transfer platform designed to support B2B, H2H, G2G, H2M, and M2H transfer workflows. CrushFTP acts as the secure file-transfer server and gateway, handling the movement of files between clients, partners, applications, and backend storage. The platform enables secure data exchange using SFTP, FTPS, and HTTPS/TLS, along with authentication mechanisms to ensure only authorized users and systems can exchange files. It also supports PGP-based encryption and decryption to protect sensitive data during file transfer and processing. The platform provides Super Admin, Project Owner, and Admin roles for project configuration, user access, permissions, security, and operational management.",
    technologies: [
      "Route 53",
      "ALB",
      "IAM",
      "EC2",
      "Elastic IP",
      "S3",
      "Grafana",
      "VPC",
      "Client VPN",
      "ACM",
      "SES",
      "Lambda",
      "KMS",
      "CloudWatch Alarms",
      "Amazon EventBridge",
      "EFS",
      "NFS",
      "VMWare ESXi",
      "SNS",
      "PostgreSQL",
      "Jenkins",
      "Bitbucket",
      "Terraform",
      "YAML Scripting",
      "Linux",
      "SonarQube",
      "SOC 2 Scan",
      "CrushFTP",
      "SFTP",
      "WinSCP",
      "PuTTY",
      "Secrets Manager",
      "CloudFormation",
      "AWS CLI",
      "AWS Marketplace",
    ],
  },
];

/* CONTACT */
export const CONTACT = {
  address: "Hyderabad, Telangana, India",
  phoneNo: "+91 8688195609",
  email: "karreajay37@gmail.com",
};