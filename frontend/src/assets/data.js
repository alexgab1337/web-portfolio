import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import cPlusIcon from "./svgs/c++.svg";
import cIcon from "./svgs/c.svg";
import pythonIcon from "./svgs/python.svg";
import jsIcon from "./svgs/JS.svg";
import htmlIcon from "./svgs/html.svg";
import cssIcon from "./svgs/css.svg";
import reactIcon from "./svgs/react.svg";
import nodeIcon from "./svgs/nodejs.svg";
import expressIcon from "./svgs/express.svg";
import tailwindIcon from "./svgs/tailwind.svg";
import framerIcon from "./svgs/framer-motion.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "Company1",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/coding_project_example.jpg",
  },
  {
    title: "Company2",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/coding_project_example.jpg",
  },
  {
    title: "Company3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/coding_project_example.jpg",
  },
];

export const skillsData = [
  { name: "C", icon: cIcon },
  { name: "C++", icon: cPlusIcon },
  { name: "Python", icon: pythonIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JS", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "TailwindCSS", icon: tailwindIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "Framer Motion", icon: framerIcon },
];

export const experiencesData = [
  {
    title: "System Administrator",
    location: "Moscow, Russia",
    description:
      "I worked as a System Administrator in a private construction company. I installed, configurated and supported smooth operation and safety of applications, websites, local networks, and all software that was used in that company.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "2022 - 2023",
  },
  {
    title: "Graduated private high-school",
    location: "Moscow, Russia",
    description:
      "I graduated a private high school in the center of Moscow with 3 years of expertise in Python.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Studying Computer Science",
    location: "Chicago, IL",
    description:
      "I'm now actively studying Computer Science at the University of illinois at Chicago. My current interest is machine and deep learning.",
    icon: React.createElement(BiCodeCurly),
    date: "2023 - 2024",
  },
];
