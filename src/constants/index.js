import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  youtube,
  docker,
  meta,
  tesla,
  cpp,
  python,
  blog,
  c,
  xcel,
  gradview,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: backend,
  },
  {
    title: "Tech-Driven Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Mentor",
    company_name: "MastersCoding",
    icon: meta,
    iconBg: "#383E56",
    date: "Mar 2024 - Present",
    points: [
      "Mentoring students in frontend and backend development using MERN stack.",
      "Assisting learners in building real-world web applications and strengthening their coding fundamentals.",
      "Providing guidance on best practices in responsive design, code structuring, and Git/GitHub workflows.",
      "Encouraging collaborative learning and conducting interactive coding sessions.",
    ],
  },
  {
    title: "Tech Community Volunteer",
    company_name: "Computer Society of India - Student Chapter",
    icon: tesla, 
    iconBg: "#E6DEDD",
    date: "Jan  2024 - Present",
    points: [
      "Organized and volunteered in technical events and workshops promoting coding culture on campus.",
      "Collaborated with peers to coordinate tech talks, hackathons, and awareness programs.",
      "Promoted open-source contribution culture and knowledge-sharing in the community.",
      "Actively contributed to fostering a collaborative and learning-oriented environment.",
    ],
  }
];



const projects = [
  {
    name: "Xcelifiee",
    description:
      "A data visualization platform with Excel file processing and interactive dashboards. Enables users to add research work like publications, patents, and funding proposals, with graphical analysis of team-wise and individual contributions.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "data visualization",
        color: "green-text-gradient",
      },
      {
        name: "dashboard",
        color: "pink-text-gradient",
      },
    ],
    image: xcel,
    source_code_link: "https://github.com/askarthikey/xcelifiee-repo",
  },
  {
    name: "GradView",
    description:
      "Student performance management system designed to track academic achievements including publications, research papers, and coding profiles. Implements sorting and categorization of students based on performance metrics.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "student analytics",
        color: "green-text-gradient",
      },
      {
        name: "performance tracking",
        color: "pink-text-gradient",
      },
    ],
    image: gradview,
    source_code_link: "https://github.com/askarthikey/GradView",
  },
  {
    name: "ClipVault",
    description:
      "A secure video management platform tailored for content creators and YouTubers. Features an approval system for reviewing videos before publishing, streamlining workflow and enhancing security in collaboration.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "video workflow",
        color: "green-text-gradient",
      },
      {
        name: "secure content management",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/askarthikey/ClipVault",
  },
  {
    name: "Blog Website",
    description:
      "A dynamic blog platform with role-based access control and real-time content updates. Offers a seamless and secure publishing experience with optimized performance.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "role-based access",
        color: "green-text-gradient",
      },
      {
        name: "real-time updates",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Kavyasahithi006/Blog-website",
  },
];


export { services, technologies, experiences, projects };
