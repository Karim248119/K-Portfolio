"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PROJECTS } from "./Projects";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { FaFigma } from "react-icons/fa6";

export default function Projects() {
  const [project, setProject] = useState(PROJECTS[0]);
  const [Grab, setGrab] = useState(false);
  const swiperRef = useRef(null);

  const handleSlider = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(PROJECTS[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
      className="w-full md:h-[100vh] flex flex-col justify-center items-center md:mt-0 mt-20 bg-primary"
    >
      <div className="w-full md:h-full h-min-[100vh] mx-auto flex justify-center items-center ">
        <div className=" md:w-[80%]  w-full grid md:grid-cols-2 grid-cols-1 md:gap-[15vw]">
          <div className="h-full  w-full md:order-2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlider}
              onMouseDown={() => {
                setGrab(true);
              }}
              onMouseUp={() => {
                setGrab(false);
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className={`${Grab ? "cursor-grabbing" : "cursor-grab"}`}
            >
              {PROJECTS.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    alt="project pic"
                    src={item.img}
                    className=" w-full flex justify-center items-center text-black"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-5 mt-2">
              <button
                className="bg-main rounded-full  p-1"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <FaChevronLeft />
              </button>
              <button
                className="bg-main rounded-full  p-1"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className=" w-full md:aspect-[2.5/2] flex  flex-col gap-5 p-5 md:p-0 md:gap-0 md:justify-between">
            <div className=" md:text-[7vw] text-[20vw] leading-none  text-outline text-transparent font-extrabold">
              {project.num}
            </div>
            <h2 className="md:text-[2.7vw] text-[8vw] leading-none  font-bold text">
              {project.title}
            </h2>
            <p className=" text-white/60 md:text-[1vw] text-[3vw]">
              {project.description}
            </p>

            <div className="  text-main md:text-[0.8vw] text-[2.5vw] flex 2">
              {project.skills}
            </div>

            <div className="w-full h-[1px] bg-white/60 "></div>
            <div className=" flex gap-3">
              {project.web && (
                <a
                  href={project.web}
                  className="w-12 h-12 rounded-full hover:rotate-45 bg-white/20 flex justify-center items-center hover:bg-main hover:text-primary transition-all ease-in-out duration-300 "
                >
                  <RxArrowTopRight className=" text-3xl " />
                </a>
              )}
              {project.playstore && (
                <a
                  href={project.playstore}
                  className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center hover:bg-main hover:text-primary transition-all ease-in-out duration-300 "
                >
                  <FaGooglePlay className=" text-2xl " />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center hover:bg-main hover:text-primary transition-all ease-in-out duration-300 "
                >
                  <FaGithub className=" text-3xl " />
                </a>
              )}
              {project.figma && (
                <a
                  href={project.figma}
                  className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center hover:bg-main hover:text-primary transition-all ease-in-out duration-300 "
                >
                  <FaFigma className=" text-2xl " />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
