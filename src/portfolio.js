/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chandra Sekhar Mullu",
  title: "Hi all, I'm Chandra",
  subTitle: emoji(
    "A passionate Quantitative Developer 🚀 with 5+ years of experience in finance, building distributed computing frameworks, high-performance risk platforms and data pipelines with Python / Rust / SQL and cloud-native infrastructure. Love to build things that change things."
  ),
  resumeLink: "./resume.pdf", // The download button serves the bundled resume.pdf. Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/iamknownstranger",
  linkedin: "https://www.linkedin.com/in/chandra-sekhar-mullu/",
  gmail: "sekharmullu@gmail.com",
  hackerrank: "https://www.hackerrank.com/s7r4n93r",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "QUANTITATIVE DEVELOPER WHO LOVES BUILDING HIGH-PERFORMANCE DATA AND RISK PLATFORMS",
  skills: [
    emoji(
      "⚡ Design and build distributed computing frameworks that scale to millions of positions and thousands of scenarios"
    ),
    emoji(
      "⚡ Develop high-performance libraries in Rust and Python with cross-language bindings using Arrow"
    ),
    emoji(
      "⚡ Build event-driven streaming ETL pipelines, data orchestration tooling and MLOps workflows"
    ),
    emoji(
      "⚡ Ship cloud-native microservices with Docker, Kubernetes and automated CI/CD"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIIT Nuzvid (RGUKT)",
      logo: require("./assets/images/iiitNuzvidLogo.svg").default,
      subHeader: "Integrated Bachelor of Technology in Computer Science",
      duration: "2018 - 2022",
      desc: "Graduated with a CGPA of 8.73.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend / Data Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Distributed Systems / Cloud",
      progressPercentage: "85%"
    },
    {
      Stack: "Quantitative Development / MLOps",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quantitative Developer",
      company: "Millennium",
      companylogo: require("./assets/images/millenniumLogo.svg").default,
      date: "July 2022 – Present",
      desc: "Building enterprise risk and distributed computing platforms.",
      descBullets: [
        "Designed and developed a distributed computing framework to efficiently compute firm stress on over 2M positions across 4K scenarios",
        "Architected a library for enterprise risk calculations using Rust with cross-language bindings for Python and Java using Arrow",
        "Created a custom hierarchy for risk calculations at any entity or aggregation within Millennium's fund-of-funds structure using GraphQL, leveraging MCP to generate aggregations via LLMs",
        "Implemented an event-driven streaming ETL workflow that optimized enterprise risk reporting for the CIO office, reducing SLAs by 3 hours",
        "Built compute-grid, an internal library to spin up on-demand Ray/Dask clusters with CPU/memory/IO quotas and cost-aware autoscaling",
        "Established a cloud-native deployment pipeline from scratch, achieving 50% faster deployments and increased developer productivity"
      ]
    },
    {
      role: "AI Backend Engineer",
      company: "Marsview.ai",
      companylogo: require("./assets/images/marsviewLogo.svg").default,
      date: "August 2021 – June 2022",
      desc: "Marsview.ai was acquired by Eltropy.",
      descBullets: [
        "Developed and deployed NLP models and microservices for real-time communication and analytics, serving up to 1 million requests",
        "Integrated the real-time API stack with Eltropy One, a product that enables secure and compliant messaging for financial institutions",
        "Implemented a custom Redis-backed LRU cache for token embeddings (similar to RAG), boosting the async stack performance by 900%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SIDE PROJECTS AND OPEN-SOURCE WORK THAT I LIKE TO TINKER WITH",
  projects: [
    {
      projectName: "Igloo",
      projectDesc:
        "An open-source project I work on — explore the code on GitHub",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/igloo-io/igloo"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Portfolio Pulse",
      projectDesc:
        "A Streamlit web app for tracking and analysing an investment portfolio",
      footerLink: [
        {
          name: "Open App",
          url: "https://portfolio-pulse.streamlit.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Certifications I have earned along the way",

  achievementsCards: [
    {
      title: "Software Engineering with Python",
      subtitle:
        "DataCamp certification covering professional software engineering practices in Python.",
      image: require("./assets/images/datacampLogo.svg").default,
      imageAlt: "DataCamp Logo",
      footerLink: []
    },
    {
      title: "IT Automation with Python",
      subtitle:
        "Google professional certificate covering Python scripting, automation and troubleshooting.",
      image: require("./assets/images/googleCertLogo.svg").default,
      imageAlt: "Google Logo",
      footerLink: []
    },
    {
      title: "Data Analysis & Visualization with Python",
      subtitle:
        "Coursera certifications in data analysis and data visualization with Python.",
      image: require("./assets/images/courseraLogo.svg").default,
      imageAlt: "Coursera Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9703093034",
  email_address: "sekharmullu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
