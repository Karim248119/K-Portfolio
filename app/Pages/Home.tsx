"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import DarkMode from "../../components/DarkMode";
import MotionProvider from "../../components/Motions/MotionProvider";

export default function Home() {
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

      // Cleanup function to destroy Typed instance
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <MotionProvider>
      <section id="Home">
        <div className="absolute top-28 left-28 z-30">
          <DarkMode />
        </div>
        <img
          src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" w-full -z-50 fixed h-screen object-cover"
        />
        <div className="h-[100vh] w-full bg-black opacity-80 absolute top-0 left-0"></div>
        <div className="h-[100vh] w-full flex justify-center items-center flex-col text-white gap-8 relative">
          <p className="md:text-2xl">Hello, I'm</p>
          <p className="md:text-6xl text-xl text-theme">Sherlock Holmes</p>
          <p className="md:text-xl text-sm">
            I'm <span className="text-theme job" ref={el}></span>
          </p>
          <p className=" font-bold text-8xl">02</p>
        </div>
      </section>
    </MotionProvider>
  );
}
