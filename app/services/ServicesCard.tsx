"use client";
import React from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import MotionProvider from "../../components/Motions/MotionProvider";
import { FaCaretDown, FaCircle } from "react-icons/fa6";
export default function ServicesCard({
  id,
  icon,
  title,
  description,
}: {
  id?: string;
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
        className=" cursor-pointer relative flex flex-col text-center group border-white/50 border bg-white/10 p-4 transition-all ease-in-out duration-500 "
      >
        <div className="h-0 overflow-hidden text-sm bg-white text-black px-2 flex justify-center items-center lg:group-hover:h-[45vh] group-hover:h-[30vh] duration-700 transition-all ease-in-out">
          {description}
        </div>
        <div className="flex h-[30vh] flex-col justify-evenly items-center gap-5 group-hover:h-0 overflow-hidden duration-700 transition-all ease-in-out">
          <span className="group-hover:text-main transition-all ease-in-out duration-300">
            <FaCaretDown size={15} />
          </span>
          <div className="text-6xl text-main">{icon}</div>
          <span className="">.</span>
        </div>
        <div className="flex flex-col my-5 gap-5">
          <h2 className=" uppercase">{title}</h2>
          <p className=" text-white/50 group-hover:text-main font-semibold">
            {id}
          </p>
        </div>

        <div className="h-[2px] w-1/6 bg-white absolute left-1/2 -translate-x-1/2 -bottom-[1px] group-hover:w-1/3 group-hover:bg-main duration-500" />
      </motion.div>
    </MotionProvider>
  );
}
