"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { MobileProjects, WebProjects } from "./Projects";
import { FaCode } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
      className="w-full md:h-[100vh] flex flex-col justify-center items-center md:mt-0 mt-20 bg-primary"
    >
      <Tabs
        defaultValue="web"
        className="w-full flex flex-col gap-10"
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="relative flex gap-2 m-auto bg-white/10 rounded-full ">
          {/* Animated Indicator */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 right-0 bg-main rounded-full z-0"
            layout
            initial={false}
            animate={{
              x: activeTab === "web" ? 0 : "100%",
              width: "50%", // Adjust based on number of tabs
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Tabs */}
          <TabsTrigger
            className="relative bg-transparent hover:bg-transparent data-[state=active]:bg-transparent hover:text-white rounded-full z-10"
            value="web"
          >
            <FaCode />
          </TabsTrigger>
          <TabsTrigger
            className="relative bg-transparent hover:bg-transparent data-[state=active]:bg-transparent hover:text-white rounded-full z-10"
            value="mobile"
          >
            <FaMobileAlt />
          </TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="web">
          <ProjectCard Projects={WebProjects} />
        </TabsContent>
        <TabsContent value="mobile">
          <ProjectCard
            Projects={MobileProjects}
            imgClassName="w-[85vw]  aspect-[11/7]"
          />
        </TabsContent>
      </Tabs>
    </motion.section>
  );
}
