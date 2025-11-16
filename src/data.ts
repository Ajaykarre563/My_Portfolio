import book from "./assets/images/book.jpg";
import Call from "./assets/images/Call.png";
import Diwali from "./assets/images/Diwali.png";
import Ecommerce from "./assets/images/E-comm.png";
import Glass from "./assets/images/GLASS1.jpg";

import Res from "./assets/images/Res.png";

import sentiment from "./assets/images/sentiment_Analysis.jpg";
import SLC from "./assets/images/SLC.png";



export const HERO_CONTENT = `I am a passionate Computer Science Engineering graduate specializing in building full-stack applications, automating IT workflows, and deploying cloud-based solutions. With strong experience across React, Node.js, Express, Python, and modern DevOps tools, I focus on creating secure, scalable, and user-centric solutions. I’ve worked on system integrations, automation, data analytics, and machine learning projects that solve real-world problems. I’m eager to contribute to impactful projects in a growth-oriented organization while continuously learning emerging technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with hands-on experience across Web Development, Python Development, DevOps, and Data Analytics. I’ve worked with technologies like React.js, HTML, CSS, JavaScript, MongoDB, SQL, AWS, Git, Docker, Kubernetes, Jenkins, Linux, and Terraform. My experience includes secure system integrations, automating file transfers, ServiceNow workflows, and enhancing IT service processes.

I’ve also worked in areas like Machine Learning, NLP, Data Visualization, During my internship at Accenture, I analyzed large-scale social media data to generate actionable insights using Pandas, NumPy, and Scikit-learn.

Currently, I’m exploring Generative AI, improving my DevOps expertise, and continuously learning new technologies. I bring a positive attitude, strong collaboration skills, and a passion for building scalable and impactful solutions.`;



export const EDUCATION = [
  {
    year: "2020/11 - 2024/05",
    degree: "Bachelor of Technology in Computer Science",
    institution: "MLR Institute of Technology and Management",
    GPA: "8.2",
    location: "Dundigal Hyderabad, India",
  },
  {
    year: "2018/06 - 2020/05",
    degree: "Intermediate",
    institution: "Sri Aadrash Junior College",
    GPA: "9.6",
    location: "Kukatpally Hyderabad, India",
  },
  {
    year: "2017/06 - 2018/05",
    degree: "Secondary School Certificate (S.S.C)",
    institution: "Panchasheela High School",
    GPA: "8.3",
    location: "Moosapet Hyderabad, India",
  },
];


export const PROJECTS = [
  {
    title: "Financial News Sentiment Analysis",
    image: sentiment,
    description:
      "Preprocessed financial news data and trained a model to classify sentiments.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "NLTK",
      "Gen-AI",
      "Hugging Face"
    ],
    link: "https://github.com/Ajaykarre563/My_Projects/blob/main/Financial_Sentiment_Analysis_By_Using_NLP_%26_ML_.ipynb"
  },

  {
    title: "Glass Classification Model",
    image: Glass,
    description:
      "Predicts glass types based on chemical properties using machine learning.",
    technologies: ["Python", "Scikit-learn", "RandomForest", "GridSearchCV"],
    link: "https://github.com/Ajaykarre563/repo3/blob/main/Glass_Classification_Model_using_RandomForestClassifier_and_GridSearchCV.ipynb"
  },

  {
    title: "Book Sales Optimization",
    image: book,
    description:
      "Uses predictive analytics for personalized book recommendations.",
    technologies: ["Python", "Pandas", "NumPy", "ML", "Scikit-learn"],
    link: "https://github.com/Ajaykarre563/repo2/blob/main/Optimizing_Book_Sales_with_Predictive_Analytics_%26_Recommendation_Systems.ipynb"
  },

  {
    title: "Restaurant Booking Web App (Django)",
    image: Res,
    description:
      "A Django application for booking tables, feedback, menu display, and more.",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/Ajaykarre563/Resturant_website"
  },

  {
    title: "E-Commerce Shopping Website",
    image: Ecommerce,
    description:
      "A dynamic shopping platform with categories, cart, and routing.",
    technologies: ["React", "React Router", "HTML", "CSS", "JS"],
    link: "https://github.com/Ajaykarre563/Shopping_website"
  },

  {
    title: "Sri Lakshmi Catering Website",
    image: SLC,
    description:
      "Catering website with menu sections, Google Maps integration, and demo video.",
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API"],
    link: "https://github.com/Ajaykarre563/catering_website_SLC"
  },

  {
    title: "Customer Satisfaction Dashboard",
    image: Call,
    description:
      "Created a dashboard with pivot tables, slicers, charts, and KPIs using Excel.",
    technologies: ["Excel", "Pivot Tables", "Charts", "Slicers"],
    link: "https://github.com/Ajaykarre563/repo2/blob/main/Ajay_karre_Excel_project%204.xlsx"
  },


  {
    title: "Diwali Sales Analysis",
    image: Diwali,
    description:
      "Analyzed Diwali sales data to find customer trends and top-selling items.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "ML"],
    link: "https://github.com/Ajaykarre563/My_Projects/blob/main/Diwali_Sales_Analysis.ipynb"
  },



];

export const CONTACT = {
  address: "Hyderabad, Telangana, India",
  phoneNo: "+91 8688195609",
  phoneLink: "tel:+918688195609",
  email: "karreajay37@gmail.com",
  emailLink: "mailto:karreajay37@gmail.com",
};
