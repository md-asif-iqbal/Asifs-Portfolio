import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import repwoop from "@/public/repwoop.png"
import eventManagement from "@/public/take-your-smile.png";
import uiu from "@/public/uiu-club.png";
import drone from "@/public/drone-kits-web.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
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
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Student",
    location: "United International University, Dhaka",
    description:
      "Pursued software engineering with active involvement in team projects, including a dynamic forum website that earned 1st runner-up in a university competition. Technologies: HTML, CSS, JavaScript, React.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2024",
  },
  {
    title: "Leader of Sub-Intern Group",
    location: "Endgame Program",
    description:
      "Led a team of sub-interns, ensuring timely task completion and team motivation, earning the Best Outstanding Leader award. Technologies: Project management, Agile methodologies.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Qwik IT Services, Canada",
    description:
      "Developed backend features for job requirement modules, enhancing system integration and functionality. Technologies: Django, Python, REST APIs, MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - September 2024",
  },
  {
    title: "Full Stack Developer",
    location: "RepWoop IT Company, Dhaka",
    description:
      "Leading the development of a comprehensive POS system, overseeing both frontend and backend components to ensure optimal performance and user experience. Technologies: React, Node.js, MongoDB, Tailwind CSS CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2024 - Present",
  },
] as const;



export const projectsData = [
  {
    title: "Repwoop POS System",
    description:
      "A comprehensive point-of-sale software solution designed for managing sales, stock, and products efficiently. It provides detailed analytics and reporting features.",
    tags: ["JavaScript","React", "Next.js", "Tailwind CSS", "Firebase", "Chart.js","PostgreSQL"],
    imageUrl: repwoop, // Example image URL, replace with actual
    liveUrl: "https://repwoop-pos-system.vercel.app/",
  },
  {
    title: "Event Planning Management",
    description:
      "An interactive platform focused on enhancing user engagement through smile-based activities and events. It features user profiles and event management.",
    tags: ["JavaScript", "React","TypeScript", "Firebase", "Tailwind CSS", "Redux", "MongoDB"],
    imageUrl: eventManagement, // Example image URL, replace with actual
    liveUrl: "https://take-your-smile-2024-update.web.app/",
  },
  {
    title: "UIU Club Forum",
    description:
      "A community forum for UIU students to discuss various topics, share resources, and connect with each other. It includes user authentication and moderation features.",
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    imageUrl: uiu, // Example image URL, replace with actual
    liveUrl: "https://uiu-club-forum.web.app/",
  },
  {
    title: "Drone Kits",
    description:
      "An e-commerce platform for purchasing drone kits and accessories. It offers product reviews, user ratings, and a seamless checkout experience.",
    tags: ["JavaScript", "React", "Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
    imageUrl: drone, // Example image URL, replace with actual
    liveUrl: "https://drone-kits.web.app/",
    
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
