"use client";
import React from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import MotionProvider from "../../components/Motions/MotionProvider";
export default function ServicesCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <MotionProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
        className="flex flex-col justify-center items-center text-center group bg-white/10 sm:p-10 p-5 gap-2 sm:gap-5 transition-all ease-in-out duration-500 hover:bg-white hover:text-black hover:-translate-y-3"
      >
        <div className="sm:text-[2vw] text-[vw] group-hover:text-main group-hover:scale-125  transition-all ease-in-out duration-700">
          {icon}
        </div>
        <h2 className="text-[3vw] sm:text-[1.5vw]">{title}</h2>
        <p className="text-[2vw] sm:text-[0.8vw] text-gray-300 group-hover:text-gray-500">
          {description}
        </p>
      </motion.div>
    </MotionProvider>
  );
}
