import Header from "@/components/Header";
import ServicesCard from "@/app/services/ServicesCard";

import React from "react";

import { FaCode, FaMobile, FaMobileAlt } from "react-icons/fa";
import { FaCediSign, FaIndianRupeeSign } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { IoLogoDesignernews } from "react-icons/io";

import Navbar from "../Navbar";
import MotionProvider from "@/components/Motions/MotionProvider";
import { SERVICES } from "./data";

export default function Services() {
  return (
    <MotionProvider>
      <section
        id="Services"
        className="h-[100vh] w-[100vw] bg-primary text-white flex flex-col  "
      >
        <div className=" flex-grow w-full flex flex-col items-center  justify-center mt-20 ">
          <div className=" sm:w-[80%] w-[90%]  grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 justify-center place-items-center sm:gap-8 gap-4 sm:py-0 ">
            {SERVICES.map((service, index) => {
              return <ServicesCard key={index} {...service} />;
            })}
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}
