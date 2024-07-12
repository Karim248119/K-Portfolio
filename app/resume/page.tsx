"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Skills from "./Skills";
import About from "./About";
import Courses from "./Courses";
import Education from "./Education";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
      className=" w-screen h-screen  flex flex-col sm:justify-center items-center py-20 sm:py-0 bg-primary"
    >
      <div className=" xl:w-[60%] w-[90%] h-[30vh]   ">
        <Tabs
          defaultValue="About"
          className=" w-full flex flex-col sm:flex-row justify-center gap-16 sm:gap-0  "
        >
          <TabsList className="flex flex-col sm:w-1/3 sm:px-10  w-full mx-auto sm:gap-6 gap-3 mt-10 sm:mt-0  justify-start text-sm ">
            <TabsTrigger className="" value="About">
              About me
            </TabsTrigger>
            <TabsTrigger className="" value="Skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="" value="Education">
              Education
            </TabsTrigger>
          </TabsList>
          <div className="sm:h-full sm:w-2/3 w-full pb-10 sm:pb-0">
            <div className=" h-full w-full ">
              <About />
              <Skills />
              <Education />
            </div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
