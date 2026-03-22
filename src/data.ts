import crenma from "./assets/images/crenma.png";
import st from "./assets/images/st.png";
/* HERO SECTION */
export const HERO_CONTENT = `I am an AWS & DevOps Engineer with hands-on experience in deploying scalable applications and managing cloud infrastructure. I specialize in AWS services, CI/CD pipelines, Linux server management, and infrastructure automation using Terraform and Docker. I focus on building secure, reliable, and production-ready systems and continuously improving my DevOps expertise.`;


/* ABOUT SECTION */
export const ABOUT_TEXT = `I am an AWS & DevOps Engineer with practical experience in designing, deploying, and managing scalable cloud-based applications.

During my internship at Arohak Technologies, I worked on real-time projects such as Crenma and Secure Transfer, where I handled complete deployment using AWS services including EC2, VPC, IAM, RDS, and S3. I implemented CI/CD pipelines, automated infrastructure using Terraform, and managed Linux-based servers to ensure high availability and system reliability.

I also have a strong foundation in Data Science, where I worked on data analysis, machine learning, and visualization projects using Python libraries like Pandas, NumPy, and Scikit-learn. My experience includes data preprocessing, feature engineering, and building models to extract meaningful insights.

I am passionate about cloud technologies, DevOps practices, and building efficient, secure, and scalable systems. I continuously strive to learn new tools and technologies to improve my skills and contribute effectively to real-world projects.`;


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
    year: "2024 - Present",
    role: "AWS & DevOps Engineer Intern",
    company: "Arohak Technologies",
    description:
      "Worked on real-time deployment of scalable applications on AWS using services such as EC2, VPC, IAM, RDS, S3, Route 53, and Load Balancers. Implemented CI/CD pipelines using Jenkins, automated infrastructure using Terraform, and managed Linux servers. Utilized Docker for containerization and performed system monitoring using CloudWatch. Ensured high availability, security, and reliability of applications.",
    technologies: [
      "AWS",
      "EC2",
      "VPC",
      "IAM",
      "RDS",
      "S3",
      "Route53",
      "Load Balancer",
      "CloudWatch",
      "Lambda",
      "EBS",
      "EFS",
      "DynamoDB",
      "SNS",
      "ECS",
      "EKS",
      "EventBridge",
      "Secrets Manager",
      "AWS CLI",
      "Terraform",
      "Jenkins",
      "Docker",
      "Linux",
      "CI/CD",
    ],
  },
  {
    year: "2023",
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
      "Worked on deploying and managing an application in AWS with a focus on certificate renewal to handle SSL certificates and connected them with an Application Load Balancer (ALB) to enable secure HTTPS communication. Deployed the UI, backend, and database on EC2 inside a VPC. Configured IAM, VPN, and PostgreSQL database. Built CI/CD pipelines using Jenkins, used Docker for containerization, and automated deployments with Terraform. Ensured the application runs securely and smoothly with proper certificate renewal.",
    technologies: [
      "AWS",
      "EC2",
      "VPC",
      "VPN",
      "IAM",
      "PostgreSQL",
      "Terraform",
      "Jenkins",
      "Linux",
      "CI/CD",
      "Docker",
      "ECR",
      "ECS",
      "ALB",
      "Elastic ip",
    ],
  },
  {
    title: "Secure Transfer Project",
    image: st, // ✅ use imported image
    description:
      "Designed, deployed, and managed a secure file transfer system using tools such as CrushFTP, WinSCP, and PuTTY. Architected and configured AWS infrastructure including EC2, VPC, VPN, and PostgreSQL to ensure secure, reliable, and scalable communication. Implemented CI/CD pipelines for automated deployment and continuous integration. Monitored system performance, handled troubleshooting, and managed backend operations to maintain high availability and data security in a production environment.",
    technologies: [
      "AWS",
      "EC2",
      "VPC",
      "VPN",
      "PostgreSQL",
      "CrushFTP",
      "WinSCP",
      "PuTTY",
      "Linux",
      "CI/CD",
      "Docker",
      "ECR",
      "ECS",
      "ALB",
      "NLB",
      "Elastic ip",
      "RDS",
    ],
  },
];

/* CONTACT */
export const CONTACT = {
  address: "Hyderabad, Telangana, India",
  phoneNo: "+91 8688195609",
  email: "karreajay37@gmail.com",
};