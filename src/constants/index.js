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
  { text: "VR", imgPath: "/images/ideas.svg" },
  { text: "Interactive UIs", imgPath: "/images/concepts.svg" },
  { text: "Embedded Systems", imgPath: "/images/designs.svg" },
  { text: "Game Development", imgPath: "/images/code.svg" },
  { text: "VR", imgPath: "/images/ideas.svg" },
  { text: "Interactive UIs", imgPath: "/images/concepts.svg" },
  { text: "Embedded Systems", imgPath: "/images/designs.svg" },
  { text: "Game Development", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience (CO-OP)" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 3, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-ford-logo.png",
  },
  {
    imgPath: "/images/logos/company-uottawa-logo.png",
  },
  {
    imgPath: "/images/logos/company-ford-logo.png",
  },
  {
    imgPath: "/images/logos/company-uottawa-logo.png",
  },
  {
    imgPath: "/images/logos/company-ford-logo.png",
  },
  {
    imgPath: "/images/logos/company-uottawa-logo.png",
  },
  {
    imgPath: "/images/logos/company-ford-logo.png",
  },
  {
    imgPath: "/images/logos/company-uottawa-logo.png",
  },
  {
    imgPath: "/images/logos/company-ford-logo.png",
  },
  {
    imgPath: "/images/logos/company-uottawa-logo.png",
  },
  {
    imgPath: "/images/logos/company-ford-logo.png",
  },
  {
    imgPath: "/images/logos/company-uottawa-logo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Debugging & Problem Solving",
    desc: "Comfortable diagnosing and fixing issues in large codebases running on target hardware.",
  },
  {
    imgPath: "/images/agile.png",
    title: "Reliable Communication",
    desc: "Familiar with Agile workflows, version control, and collaborative development in large teams.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "I make sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "",
    modelPath: "/models/unreal_engine_cglogo.glb",
    scale: 0.02,
    rotation: [0, 0, 0],
  },
  {
    name: "Cpp",
    modelPath: "/models/cpp_logo.glb",
    scale: 0.065,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.7,
    rotation: [0, 0, 0],
  },
  {
    name: "Android",
    modelPath: "/models/android_logo.glb",
    scale: 2.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Java",
    modelPath: "/models/java_logo.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.045,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.045,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Oussema brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    Tools: "Unreal Engine - Oculus Quest 2 - C++",
    title: "Virtual Reality Software Developer",
    date: "May 2025 - October 2025",
    responsibilities: [
      "Developed a Virtual Reality lab simulation on Oculus Quest 2 in Unreal Engine 5 using Blueprints to run immersive proprioception reflex experiments for the Faculty of Health Sciences.",
      "Implemented an arm tracking system to log rotation angles with less than 2° margin of error, providing students with precise data.",
      "Implemented a results-submission feature using Amazon SES that emails logged simulation data to students via HTTP requests making it easier to work on the written lab portion.",
    ],
  },
  {
    review:
      "Oussema's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    Tools: "Vehicle Infotainment (Android Auto - Java/Kotlin)",
    title: "Full Stack Software Developer Intern",
    date: "May 2024 - August 2024",
    responsibilities: [
      "Implemented UI components for the Setup Wizard App on Ford’s Android-Auto based infotainment system.",
      "Collaborated with UX designers and system engineers to match UI behavior with design specifications and infotainment system requirements.",
      "Tested UI flows on in-vehicle infotainment builds, validating responsiveness and input correctness under target hardware constraints.",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    Tools: "Vehicle Infotainment (Unreal Engine - C++)",
    title: "Full Stack Software Developer Intern",
    date: "May 2023 - December 2023",
    responsibilities: [
      "Worked on the MyMustang app, exclusive to the 2024 Mustang, built with Unreal Engine and packaged to QNX platform to deliver modern interactive UIs of Track Apps Service.",
      "Resolved a critical input bug by modifying button press logic to release finger capture when a user’s finger slides outside the button bounds, preventing unintended click events.",
      "Debugged and fixed float precision errors in displayed lap times eliminating rounding inconsistencies of ±1 ms",
    ],
  },
  {
    review:
      "Oussema's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    Tools: "Vehicle Infotainment (QT/QML - C++)",
    title: "Frontend Software Developer Intern",
    date: "September 2022 - April 2023",
    responsibilities: [
      "Debugged and fixed localization issues, updated translations, and reformatted strings to ensure readability across all infotainment system UIs.",
      "Worked in an Agile/Scrum environment, gaining hands-on experience with professional software development workflows and cross-functional team dynamics.",
      "Learned core development practices including build processes, debugging workflows, and version control in a large-scale software project.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "https://github.com/OussemaNijewi",
    imgPath: "/images/github.png",
  },
  {
    name: "https://www.linkedin.com/in/nijewi-oussema",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "https://www.instagram.com/oussema.nijewi/",
    imgPath: "/images/instagram.png",
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
