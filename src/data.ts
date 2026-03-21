import crenma from "./assets/images/crenma.png";
import st from "./assets/images/st.png";
/* HERO SECTION */
export const HERO_CONTENT = `I am an AWS & DevOps Engineer with hands-on experience in deploying scalable applications and managing cloud infrastructure. I specialize in AWS services, CI/CD pipelines, Linux server management, and infrastructure automation using Terraform and Docker. I focus on building secure, reliable, and production-ready systems and continuously improving my DevOps expertise.`;


/* ABOUT SECTION */
export const ABOUT_TEXT = `I am an AWS & DevOps Engineer with practical experience in deploying and managing real-time applications in cloud environments.

During my internship at Arohak Technologies, I worked on real-world projects like Crenma and Secure Transfer, where I handled complete deployment including AWS services such as EC2, VPC, VPN, IAM, and PostgreSQL. I deployed UI, backend, and database on Linux servers and implemented CI/CD pipelines.

I also worked on secure file transfer systems using tools like CrushFTP, WinSCP, and PuTTY. My responsibilities included infrastructure setup, automation using Terraform, troubleshooting, and ensuring system reliability.

I am passionate about cloud technologies, DevOps practices, and building scalable systems.`;


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
    title: "Crenma Project (DevOps Deployment)",
    image: crenma, // ✅ use imported image
    description:
      "Deployed a full-stack application including UI, backend, and database on AWS infrastructure. Configured EC2, VPC, VPN, IAM, and PostgreSQL. Implemented CI/CD pipelines, managed Linux servers, and handled end-to-end deployment, troubleshooting, and automation using Terraform.",
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
    ],
  },
  {
    title: "Secure Transfer Project",
    image: st, // ✅ use imported image
    description:
      "Built and deployed a secure file transfer system using CrushFTP, WinSCP, and PuTTY. Configured cloud infrastructure with VPC, VPN, EC2, and PostgreSQL. Ensured secure communication, implemented CI/CD pipelines, and performed system troubleshooting and backend deployment.",
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
    ],
  },
];

/* CONTACT */
export const CONTACT = {
  address: "Hyderabad, Telangana, India",
  phoneNo: "+91 8688195609",
  email: "karreajay37@gmail.com",
};