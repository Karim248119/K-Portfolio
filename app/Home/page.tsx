"use client";

import ColorPalette from "@/components/ColorPalette";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import Circle from "@/components/Circle";
import Image from "next/image";

export default function HomePage() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web developer", "Mobile developer", "ui/ux designer"],
      loop: true,
      typeSpeed: 150,
      backSpeed: 150,
    };

    if (el.current) {
      const typed = new Typed(el.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.5, ease: "easeIn" }}
      className="relative lg:mt-20 bg-primary"
    >
      <div className="lg:h-[100vh] h-auto lg:w-[70%] w-full text-white grid lg:grid-cols-5 lg:grid-rows-1 grid-rows-2 mx-auto lg:-mt-20">
        <div className="pt-5 w-full h-full flex flex-col justify-center items-center lg:items-start gap-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:text-4xl text-xl font-bold">Hello, I&apos;m</div>
          <div className="lg:text-5xl text-2xl font-bold text-main">
            Karim Abdelhalim
          </div>
          <div className="lg:text-xl text-sm">
            I&apos;m a <span className="text-main job" ref={el}></span>
          </div>
          <div className="flex lg:gap-5 gap-2 lg:mt-10 mt-5">
            <a href="/cv.pdf" download>
              <button className="lg:h-14 lg:px-5 h-8 p-2 flex justify-center items-center gap-2 bg-primary border-[2px] text-main border-main rounded-full lg:text-xl text-xs hover:text-primary hover:bg-main transition-all duration-300 ease-in-out">
                download CV <FaDownload />
              </button>
            </a>
            <div className="flex lg:gap-5 gap-2">
              <a
                href="https://www.linkedin.com/in/karim-abdel-halim-95a97a248/"
                className="lg:h-14 lg:w-14 h-8 w-8 flex justify-center items-center bg-primary border-[2px] text-main border-main rounded-full lg:text-2xl text-xs hover:text-primary hover:bg-main transition-all duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Karim248119"
                className="lg:h-14 lg:w-14 h-8 w-8 flex justify-center items-center bg-primary border-[2px] text-main border-main rounded-full lg:text-2xl text-xs hover:text-primary hover:bg-main transition-all duration-300 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/kareem.kemo.75098364?mibextid=ZbWKwL"
                className="lg:h-14 lg:w-14 h-8 w-8 flex justify-center items-center bg-primary border-[2px] text-main border-main rounded-full lg:text-2xl text-xs hover:text-primary hover:bg-main transition-all duration-300 ease-in-out"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:col-span-2 order-1 lg:order-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
            className="relative mt-20 lg:-mt-20"
          >
            <div className="lg:h-80 lg:w-80 w-44 h-44 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                priority
                quality={100}
                alt="personal"
                fill
                src="/images/photo_no_headphones.png"
                className="object-contain"
              />
            </div>
            <Circle />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
