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
  figma,
  docker,
  Bader,
  dm,
  GuTe,
  Klein,
  Munich1st,
  Kbsz,
  uhland,
  greut,
  ksa,
  DA,
  carrent,
  jobit,
  join,
  elpollo,
  ringoffire,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work / Education",
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
    title: "Angular Developer",
    icon: mobile,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Temporary worker",
    company_name: "Bader Pulverbeschichtung GmbH",
    icon: Bader,
    iconBg: "#fff",
    date: "April 2022 - September 2022",
    points: [
      "Coating of metal parts",
      "Hanging metal parts on the production line",
    ],
  },
  {
    title: "Employee in the Corona test center",
    company_name: "dm Drogeriemarkt",
    icon: dm,
    iconBg: "#fff",
    date: "April 2021 - May 2021",
    points: ["Responsible for testing citizens for the corona virus"],
  },
  {
    title: "Sales representative in the field",
    company_name: "Munich1st",
    icon: Munich1st,
    iconBg: "#fff",
    date: "October 2020 - Dezember 2020",
    points: [
      "Distribution of telecommunications products",
      "Distribution of energy products",
      "Team building and leadership",
    ],
  },
  {
    title: "Worker for electrical installations",
    company_name: "GuTe Technik",
    icon: GuTe,
    iconBg: "#fff",
    date: "March 2020 - August 2020",
    points: [
      "Preparation for electrical installation",
      "Recycling scrap metal",
      "work on the construction site",
    ],
  },
  {
    title: "Production workers for luxury sun loungers",
    company_name: "Klein Metalldesign",
    icon: Klein,
    iconBg: "#fff",
    date: "April 2018 - September 2019",
    points: ["Woodworking", "Metalworking", "Final assembly", "Deliveries"],
  },
];

const education = [
  {
    title: "Developer Akademie",
    icon: DA,
    iconBg: "#fff",
    date: "September 2022 - Now",
    points: [
      "The Developer Academy teaches a range of programming languages and tools including HTML, CSS, JavaScript, Angular, Git, Scrum, Python, Django, SQL, Docker, Linux, and IT Security.",
    ],
  },
  {
    title: "Kaufmännische Schule Aalen",
    icon: ksa,
    iconBg: "#fff",
    date: "2022 - 2023",
    points: [
      "Berufskolleg 2",
      "Expected degree: Abschluss: Fachhochschulreife",
    ],
  },
  {
    title: "Kreisberufsschulzentrum Ellwangen",
    icon: Kbsz,
    iconBg: "#fff",
    date: "2021 - 2022",
    points: ["Berufskolleg 1"],
  },
  {
    title: "Kaufmännische Schule Aalen",
    icon: ksa,
    iconBg: "#fff",
    date: "2018 - 2019",
    points: ["Wirtschaftsgymnasium (dropped out)"],
  },
  {
    title: "Uhland-Realschule Aalen",
    icon: uhland,
    iconBg: "#fff",
    date: "2012 - 2018",
    points: ["Degree: Mittlere Reife"],
  },
  {
    title: "Greutschule Aalen",
    icon: greut,
    iconBg: "#fff",
    date: "2008 - 2012",
    points: ["Elementary school"],
  },
];

const projects = [
  {
    name: "Join",
    description:
      "Join is a Kanban software that simplifies project management, optimizes workflows, and boosts productivity. With customizable boards and automated workflows, teams can track progress and collaborate seamlessly.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: join,
    source_code_link: "https://github.com/",
    demo_source_code: "projects/join final version/index.html"
  },
  {
    name: "El Pollo Loco",
    description:
      "In El Pollo Loco, players help Pepe fight off chickens using a throwable glass bottle and the ability to jump on them. It's a unique and fun game for all ages.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: elpollo,
    source_code_link: "https://github.com/DorianJacekDellAnna/El-Pollo-Loco",
    demo_source_code: "projects/El_Pollo_Loco /index.html"
  },
  {
    name: "Ring of fire",
    description:
      "Angular app for Ring of Fire card game: Multiplayer game with deck of cards, additional rules. UI displays game state, player actions, card animations. Real-time updates for interactive gameplay.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: ringoffire,
    source_code_link: "https://github.com/DorianJacekDellAnna/ring-of-fire",
    demo_source_code: "https://ringoffire-doriandellanna.web.app"
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  projects,
};
