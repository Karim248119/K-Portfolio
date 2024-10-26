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
        className="min-h-[100vh] bg-primary text-white flex flex-col pb-5"
      >
        <div className=" flex-grow w-full flex flex-col items-center mt-20 md:mt-40">
          <div className=" sm:w-[80%] w-[90%]  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {SERVICES.map((service, index) => {
              return <ServicesCard key={index} {...service} />;
            })}
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}
