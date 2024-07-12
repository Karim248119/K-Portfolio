import React, { useState } from "react";
import { COURSES } from "./data";
import { TabsContent } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";

export default function Courses() {
  const [courses, setCourse] = useState(COURSES[0]);
  const handleSlider = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setCourse(COURSES[currentIndex]);
  };
  return (
    <TabsContent value="Courses">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 pb-10 ">
        <h1 className="text-3xl font-bold">My Education</h1>
        <p className=" text-white/60">
          My university major is Mechatronics Engineering, which helped me learn
          programming languages, problem-solving skills, and organizing my
          thoughts. However, as a web and mobile developer, I have relied
          heavily on self-learning and online courses.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlider}
        className=" cursor-grab"
      >
        {COURSES.map((course, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="sm:h-[380px] h-[300px] flex flex-col flex-wrap text-wrap justify-between">
                <div className=" xl:text-8xl sm:text-7xl text-6xl leading-none  text-outline text-transparent font-extrabold">
                  {course.num}
                </div>
                <h2 className=" xl:text-4xl sm:text-3xl  text-2xl leading-normal font-bold text">
                  {course.title}
                </h2>
                <p className=" text-white/60 xl:text-lg sm:text-sm text-xs ">
                  {course.description}
                </p>
                <div className=" flex flex-col gap-5">
                  <div className="w-full h-[1px] bg-white/60 "></div>
                  <a href={course.link}>
                    <button className=" flex group xl:text-lg sm:text-base text-sm gap-2 font-bold  justify-center items-center bg-white/10 text-main p-4 rounded-full hover:bg-main hover:text-primary transition-all ease-in-out duration-300 ">
                      View Certificate
                      <BsArrowUpRight className=" xl:text-xl sm:text-lg text-base group-hover:rotate-45 transition-all duration-75  ease-in-out" />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TabsContent>
  );
}
