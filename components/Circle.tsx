import React from "react";
import { motion } from "framer-motion";
export default function Circle() {
  return (
    <motion.svg
      className="lg:h-[24rem] lg:w-[24rem] w-48 h-48 "
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="253"
        cy="253"
        r="250"
        className="  stroke-main"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: ["90 90 20 90"],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  );
}
