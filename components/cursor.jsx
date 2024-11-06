'use client';

import { useMotionValue, useSpring, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Cursor = () => {
  const [variant, setVariant] = useState("DEFAULT");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        cursorX.set(e.clientX - (variant === "PROJECT" ? 32 : 8));
        cursorY.set(e.clientY - (variant === "PROJECT" ? 32 : 8));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [variant, cursorX, cursorY]);

  // Smooth scroll handler
  const smoothScroll = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("href");
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const variants = {
    DEFAULT: {
      width: 16,
      height: 16,
      backgroundColor: "transparent",
      border: "1px solid white",
    },
    PROJECT: {
      height: 100,
      width: 100,
      mixBlendMode: "unset",
      backgroundColor: "transparent",
      border: "1px solid white",
    },
    BUTTON: {
      opacity: 0,
    },
    TEXT: {
      height: 100,
      width: 100,
      backgroundColor: "transparent",
      border: "1px solid white",
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 mix-blend-difference z-50 rounded-full pointer-events-none grid place-items-center"
        variants={variants}
        animate={variant}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          ...variants[variant],
        }}
      >
        {variant === "PROJECT" && (
          <div className="text-black">
            <ArrowUpRight size={28} />
          </div>
        )}
      </motion.div>


    </>
  );
};

export default Cursor;
