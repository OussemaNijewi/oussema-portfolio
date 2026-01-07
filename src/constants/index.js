const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "VR", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  {
    text: "Interactive UIs",
    imgPath: `${import.meta.env.BASE_URL}images/concepts.svg`,
  },
  {
    text: "Embedded Systems",
    imgPath: `${import.meta.env.BASE_URL}images/designs.svg`,
  },
  {
    text: "Game Development",
    imgPath: `${import.meta.env.BASE_URL}images/code.svg`,
  },
  { text: "VR", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  {
    text: "Interactive UIs",
    imgPath: `${import.meta.env.BASE_URL}images/concepts.svg`,
  },
  {
    text: "Embedded Systems",
    imgPath: `${import.meta.env.BASE_URL}images/designs.svg`,
  },
  {
    text: "Game Development",
    imgPath: `${import.meta.env.BASE_URL}images/code.svg`,
  },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience (CO-OP)" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 3, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-ford-logo.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-uottawa-logo.png`,
  },
];

const abilities = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/seo.png`,
    title: "Debugging & Problem Solving",
    desc: "Comfortable diagnosing and fixing issues in large codebases running on target hardware.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/agile.png`,
    title: "Reliable Communication",
    desc: "Familiar with Agile workflows, version control, and collaborative development in large teams.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/time.png`,
    title: "On-Time Delivery",
    desc: "I make sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.png`,
  },
  {
    name: "Python Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/python.svg`,
  },
  {
    name: "Backend Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/node.png`,
  },
  {
    name: "Interactive Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/three.png`,
  },
  {
    name: "Project Manager",
    imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "",
    modelPath: `${
      import.meta.env.BASE_URL
    }models/unreal_engine_cglogo-transformed.glb`,
    scale: 0.02,
    rotation: [0, 0, 0],
  },
  {
    name: "Cpp",
    modelPath: `${import.meta.env.BASE_URL}models/cpp_logo-transformed.glb`,
    scale: 0.065,
    rotation: [0, 0, 0],
  },
  {
    name: "React",
    modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js",
    modelPath: `${import.meta.env.BASE_URL}models/three.js-transformed.glb`,
    scale: 0.045,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: `${import.meta.env.BASE_URL}models/git-svg-transformed.glb`,
    scale: 0.045,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Python",
    modelPath: `${import.meta.env.BASE_URL}models/python-transformed.glb`,
    scale: 0.7,
    rotation: [0, 0, 0],
  },
  {
    name: "Android",
    modelPath: `${import.meta.env.BASE_URL}models/android_logo-transformed.glb`,
    scale: 2.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Java",
    modelPath: `${import.meta.env.BASE_URL}models/java_logo-transformed.glb`,
    scale: 1.2,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Oussema brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    Tools: "Unreal Engine - Oculus Quest 2 - C++",
    title: "Virtual Reality Software Developer",
    model: "vr",
    scale: 4.5,
    rotation: [-0.3, 0.3, 0],
    date: "May 2025 - October 2025",
    responsibilities: [
      "Developed a standalone VR app using Unreal Engine (C++) targeting Oculus Quest 2 (Android APK) for the Faculty of Human Kinetics to simulate a Sensory Processing lab.",
      "Implemented real-time controller and arm motion tracking using Quest 2 input hardware tracking angles with less than 2° margin of error, providing students with precise data.",
      "Designed and implemented a data logging pipeline, serializing data to JSON and securely transmitting it via HTTPS from the headset to a Node.js server.",
      "Implemented a backend service that receives uploaded serialized data, processes and formats it, and delivers results to the corresponding user email.",
    ],
  },
  {
    review:
      "Oussema's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (Android Auto - Java/Kotlin)",
    title: "Software Developer Intern/CO-OP",
    model: "shelby",
    scale: 120,
    rotation: [-0.2, 0.8, 0],
    date: "May 2024 - August 2024",
    responsibilities: [
      "Implemented UI components for the Setup Wizard App guiding users through first-time vehicle configuration (account setup, preferences, and system customization).",
      "Implemented screen-by-screen workflow logic, customizing AOSP Setup Wizard flows to deliver a Ford-branded user experience aligned with internal Figma designs.",
      "Implemented unit tests increasing code coverage from 0% to 62% tracked using SonarQube.",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    logoPath: `${import.meta.env.BASE_URL}images/logo3.png`,
    Tools: "Vehicle Infotainment (Unreal Engine - C++)",
    title: "Software Developer Intern/CO-OP",
    model: "mustang_gtd",
    scale: 100,
    rotation: [-0.2, 0.8, 0],
    date: "May 2023 - December 2023",
    responsibilities: [
      "Refactored blueprint logic to C++ to improve maintainability and performance.",
      "Fixed a critical input bug where button presses were not canceled when a user slid their finger outside the button bounds by modifying finger capture logic preventing unintended click events.",
      "Debugged and fixed floating-point precision errors in lap time display caused by conversion and rounding issues, eliminating rounding inconsistencies of ±1 ms.",
      "Supported the final release of the MyMustang app by debugging production issues and refactoring systems for improved maintainability.",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    Tools: "Vehicle Infotainment (QT/QML - C++)",
    title: "Software Developer Intern/CO-OP",
    model: "ford_gt",
    scale: 100,
    rotation: [-0.2, 0.8, 0],
    date: "September 2022 - April 2023",
    responsibilities: [
      "Resolved customer-reported localization defects in production infotainment systems UIs by updating translation resources and correcting string formatting.",
      "Updated UI assets to meet new design requirements, maintaining visual consistency across the deployed infotainment systems.",
      "Contributed to the maintenance of a legacy project, learning Agile/Scrum workflows, build processes, debugging techniques, and version control in a large code-base.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${import.meta.env.BASE_URL}images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${import.meta.env.BASE_URL}images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${import.meta.env.BASE_URL}images/logo3.png`,
  },
];

const testimonials = [
  {
    name: "Juan Raymond",
    mentions: "@juan-raymond",
    linkedin: "https://www.linkedin.com/in/juan-raymond/",
    review:
      "Oussema is one of the best coop that I've mentored, and If I have to use 1 word it's improvement. During our time together, he showed me his schedule and on top of his study and coop time, he also go to the gym and practice leet code. His day is packed of good activities which is something that I learn from him. Oussema show skills working with Unreal Engine, C++, Blueprint, UMG, Git and Jira in his daily work. Oussema also shows the willingness to learn by asking question to his senior and implement the knowledge that he gained by trying to work on a side project in his free time. In this era where a highly skilled younger generation with good work ethic getting harder and harder to find I think picking up Oussema is like finding a gem.",
    imgPath: `${import.meta.env.BASE_URL}images/client1.png`,
  },
];

const socialImgs = [
  {
    name: "https://github.com/OussemaNijewi",
    imgPath: `${import.meta.env.BASE_URL}images/github.png`,
  },
  {
    name: "https://www.linkedin.com/in/nijewi-oussema",
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
  },
  {
    name: "https://www.instagram.com/oussema.nijewi/",
    imgPath: `${import.meta.env.BASE_URL}images/instagram.png`,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
