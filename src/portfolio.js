/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Mihir",
  logo_name: "Mihir763();",
  nickname: "Mihir",
  full_name: "Mihir Joshi",
  subTitle:
    "Full Stack Developer, MERN Stack Developer, UI/UX Design",
  resumeLink:
    "https://drive.google.com/file/d/1gB1xgjU2anJO945FJPs2rk8zWwGSkpQf/view?usp=sharing",
  mail: "mailto:mihirjoshi8585@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mihir763",
  linkedin: "https://www.linkedin.com/in/mihir-joshi-803818239",
  gmail: "mihirjoshi8585@gmail.com",
  twitter: "https://twitter.com/mihirjoshi2207",
  };

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Building responsive website front end using ReactJS",
        
      ],
      softwareSkills: [
      

        

      ],
    },
    {
      title: "MERN STACK Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by deeplearning.ai and Stanford Online",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        
      ],
    },
    {
      title: "UI/UX Designing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Saffrony Institute of Technology",
      subtitle: "B.E in Applied Information Technology",
      logo_path: "logo.png",
      alt_name: "Saffrony",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Managmenet & Warehousing",
        "⚡ Also studied Mobile Computing, Severless Data Processing and created projects on them",
        "⚡ Upcoming courses: Advanced Topics in Web Development and Cloud Computing",
      ],
      website_link: "https://www.saffrony.ac.in/",
    },
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "Server-side Development with NodeJs, Express, MongoDBe",
      subtitle: "THE HONG KONG Univeersity.",
      logo_path: "1.png",
      certificate_link: "coursera.org/account/accomplishments/certificate/CRJAMJN59238",
      alt_name: "Coursera",
      color_code: "#ffc475",
    },
    {
      title: "Full Stack Web development with React",
      subtitle: "THE HONG KONG Univeersity.",
      logo_path: "1.png",
      certificate_link: "coursera.org/account/accomplishments/certificate/1A4JLSXLZ178",
      alt_name: "Coursera",
      color_code: "#1e70c1",
    },
    {
      title: "TATA Imagination Challenge'22",
      subtitle: "TCS",
      logo_path: "unstop-logo-2000x789.png",
      certificate_link: " https://unstop.com/certificate-preview/87b1aa4d-5372-4b9e-902f-ce3e4b64ca7c",
      alt_name: "UNSTOP",
      color_code: "#ffbfae",
    },
    {
      title: "POWER PROGRAMMER AND VIRTUAL EXPERIENCE",
      subtitle: "INFOSYS",
      logo_path: "download (1).png",
      certificate_link: "https://www.theforage.com/achievements?ref=8x7ZTT29XrwPTutTJ",
      alt_name: "Forage",
      color_code: "#b190b0",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Participation",
      experiences: [
        {
          title: "SSIP'22 Hackathon",
          company: "SSIP",
          company_url: "http://ssipgujarat.in/hackathon",
          logo_path: "download (2).png",
          duration: "October-December -2022 ",
          location: "Gujrat.",
          description:
            "At ACPDC thousands of students apply for diploma admission. Students upload Scan copy of marksheet for verification. These marksheets are in pdf format. These marksheet contents are to be converted to data which can be fetched to database using OCR. Students Maths, Science, English, total obtained marks and total maximum marks to be fetched from scan copy of marksheet and entered into the database.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Dynamisers Solution",
          company: "Dynamisers",
          company_url: "https://www.dynamisers.com/",
          logo_path: "internship-text-red-violet-ribbon-badge-stamp-internship-text-red-violet-ribbon-stamp-213094471.jpg",
          duration: "February-May -2023",
          location: "Work From Home",
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Event management System",
          company: "Saffrony college",
          company_url: "https://www.saffrony.ac.in/",
          logo_path: "logo.png",
          duration: "Januari 2023",
          location: "Mehsana",
          description:
            "This platform will have different events where you can book and get information about them. It also has convenience like coupon and only payment will be based on QR code. entorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "image-removebg-preview.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
   
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
   {
      name: "CreArt Designing",
      url: "https://github.com/mihir763",
      description:
        "Basically this project is based on real life problem. It means to create a platform business of wedding related all  products are there and also as a printing and product hard & soft copy both are available. (much more features like:-  E-Payment, Chatbot, Track Record, Language Translator.)",
      languages: [
        
    
      ],
    },
    {
      name: "Event management system",
      url: "https://github.com/mihir763",
      description:
        "This platform will have different events where you can book and get information about them. It also has convenience like coupon and only payment will be based on QR code.",
      languages: [
        
      ],
    },
    
    {
      name: "Portfolio - (Reactjs,Angularjs)",
      url: "https://github.com/mihir763",
      description:
        "This is a React component, and angular components using portfolio website create.",
      languages: [
        
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
