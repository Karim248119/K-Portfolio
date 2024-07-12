"use client";
import React, { ReactElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactLine = ({
  icon,
  label,
  value,
}: {
  icon: ReactElement;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex gap-3 bg-primary">
      <div className="md:h-16 md:w-16 h-12 w-12 rounded-md bg-white/10 flex justify-center items-center text-main md:text-2xl text-xl">
        {icon}
      </div>
      <div>
        <p className="text-white/60 md:text-sm text-xs">{label}</p>
        <h2 className="md:text-lg text-sm">{value}</h2>
      </div>
    </div>
  );
};

export default function Contact() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9mbngfc", "template_2n13ek8", form.current, {
        publicKey: "JTlpYoyrrGRpqcC0r",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
      className="h-auto md:h-screen w-screen md:pt-0 pt-20 flex flex-col md:flex-row justify-center items-center md:gap-10 gap-5"
    >
      <form
        ref={form}
        className="xl:w-1/3 md:w-[50%] w-[80%]  bg-white/10 rounded-xl flex flex-col justify-center gap-5 md:gap-8 md:p-14 p-5"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="w-full rounded bg-primary md:p-5 p-3 md:text-base text-xs  outline-none focus:outline-main   "
        />
        <input
          type="text"
          name="user_email"
          placeholder="Email"
          className="w-full rounded bg-primary md:p-5 p-3 md:text-base text-xs  outline-none focus:outline-main "
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full rounded h-28 bg-primary md:p-5 p-3 md:text-base text-xs   outline-none focus:outline-main "
        ></textarea>
        <div>
          <button
            className=" bg-main text-primary capitalize p-3 md:px-6  rounded-full font-bold md:text-lg text-sm "
            onClick={sendEmail}
          >
            Send Message
          </button>
        </div>
      </form>
      <div className=" flex flex-col gap-5 w-[80%] md:w-auto  ">
        <ContactLine
          icon={<FaPhoneAlt />}
          label="Phone"
          value="(+20) 102 309 6263"
        />
        <ContactLine
          icon={<IoMail />}
          label="Email"
          value="karimoda66@gmail.com"
        />
        <ContactLine
          icon={<FaLocationDot />}
          label="Location"
          value="Egypt, Cairo"
        />
      </div>
    </motion.div>
  );
}
