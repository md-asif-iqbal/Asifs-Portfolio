"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in 
        <span className="font-medium">  Bachelor of Science in Computer Science and Engineering </span> 
         and earning runner-up in a university project show, I have dedicated over two years to developing full-stack applications. My expertise lies in
        <span className="font-medium"> Next.js and PostgreSQL</span>,
          with a core stack that includes <span className="font-medium">React, Node.js, and TypeScript</span>.
          Currently, as a Full Stack Developer at REPWOOP, I focus on delivering high-quality, scalable solutions using Agile methodologies and strong UI/UX principles.
      </p>

      <p>
        <span className="italic">Beyond coding</span>,
        I am continually expanding my knowledge in 
        <span className="font-medium">cloud computing</span> 
        and <span className="font-medium">machine learning</span>,
        aiming to apply new technologies to tackle complex challenges.
      </p>


    </motion.section>
  );
}
