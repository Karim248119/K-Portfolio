import React from "react";
import { SKILLS } from "./data";
import { TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Skills() {
  return (
    <TabsContent value="Skills">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 ">
        <h1 className="text-3xl font-bold">My Skills</h1>
        <p className=" text-white/60">
          I have a strong background in front-end development , with experience
          in both website and mobile application technologies. I am also aware
          of some back-end technologies.
        </p>
        <div>
          <div className=" md:h-[35vh] grid sm:grid-cols-7 grid-cols-3 gap-2 ">
            {SKILLS.map((skill, index) => {
              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className=" flex justify-center items-center p-6  bg-white/10 rounded-lg text-white sm:text-3xl text-3xl  hover:text-main transition-all duration-300 cursor-pointer">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
