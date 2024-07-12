import React, { useState } from "react";
import { COURSES } from "./data";
import { TabsContent } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Courses() {
  return (
    <TabsContent value="Education">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 pb-10 ">
        <h1 className="text-3xl font-bold">My Education</h1>
        <p className=" text-white/60">
          My university major is Mechatronics Engineering, which helped me learn
          programming languages, problem-solving skills, and organizing my
          thoughts. However, as a web and mobile developer, I have relied
          heavily on self-learning and online courses.
        </p>
      </div>
      <ScrollArea>
        <div className="h-[400px]  grid sm:grid-cols-2 gap-5">
          {COURSES.map((course, index) => {
            return (
              <div key={index} className="w-full bg-white/10 rounded-md p-5 ">
                <div className=" flex flex-col gap-3 justify-between">
                  <div className=" leading-none  text-outline-main text-transparent font-extrabold">
                    {course.num}
                  </div>
                  <h2 className="  leading-normal font-bold text">
                    {course.title}
                  </h2>
                  <p className=" text-white/60  text-sm flex items-center gap-2 ">
                    <div className="h-[5px] w-[5px] rounded-full bg-main" />
                    online course
                  </p>
                  <div className=" flex flex-col gap-5">
                    <a href={course.link} className=" place-self-end">
                      <button className=" flex group text-[10px] gap-2 font-bold  justify-center items-center bg-white/10 text-main p-2 rounded-full hover:bg-main hover:text-primary transition-all ease-in-out duration-300 ">
                        View Certificate
                        <BsArrowUpRight className="  text-sm group-hover:rotate-45 transition-all duration-75  ease-in-out" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </TabsContent>
  );
}
