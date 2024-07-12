import React from "react";
import ServicesCard from "../services/ServicesCard";
import { FaCode, FaMobile, FaMobileAlt } from "react-icons/fa";
import { FaCediSign } from "react-icons/fa6";
import Header from "../../components/Header";
import MotionProvider from "../../components/Motions/MotionProvider";

export default function Services() {
  return (
    <MotionProvider>
      <section id="Services" className=" bg-white md:pb-10">
        <div className=" w-full bg-primary flex flex-col items-center">
          <Header text="Our services" />
          <div className="w-full h-full grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 justify-center place-items-center">
            <ServicesCard
              icon={<FaCode />}
              title="Web Develobment"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          magni enim cumque facere natus, voluptatibus voluptates!"
            />
            <ServicesCard
              icon={<FaMobileAlt />}
              title="Mobile Apps"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          magni enim cumque facere natus, voluptatibus voluptates!"
            />
            <ServicesCard
              icon={<FaCode />}
              title="ui/ux design"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          magni enim cumque facere natus, voluptatibus voluptates!"
            />
            <ServicesCard
              icon={<FaCediSign />}
              title="Logo design"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          magni enim cumque facere natus, voluptatibus voluptates!"
            />
          </div>
        </div>
      </section>
    </MotionProvider>
  );
}
