"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Theme from "../hooks/ThemeProvider";
import DarkMode from "@/components/DarkMode";
import { RiMenu3Fill } from "react-icons/ri";
import ColorPalette from "@/components/ColorPalette";
import MobilePalette from "@/components/MobilePalette";

export default function Navbar() {
  const [IsOpened, setIsOpened] = useState(false);

  const Links = [
    { name: "Home", path: "/" },
    { name: "resume", path: "/resume" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const pathName = usePathname();
  return (
    <nav className="z-50 bg-primary">
      <div className=" bg-primary h-20 w-full flex justify-between absolute items-center flex-row  top-0 left-0 px-8 xl:px-20 text-white z-30">
        <h1 className="xl:text-3xl text-lg font-semibold">
          Karim
          <span className=" text-main">.</span>
        </h1>

        <div className="sm:flex justify-center items-center gap-5 hidden navs font-bold">
          {Links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  link.path === pathName && "text-main border-b-2 border-main"
                } font-medium capitalize transition-all text-hover p-1 xl:text-lg text-xs `}
              >
                {link.name}
              </Link>
            );
          })}
          <ColorPalette />
        </div>

        <div className="sm:hidden flex flex-col">
          <button onClick={() => setIsOpened(!IsOpened)}>
            <RiMenu3Fill size={20} />
          </button>
        </div>
      </div>
      <div
        className="  h-[100vh] w-[60vw] flex flex-col items-center justify-center py-3 overflow-hidden navs sm:hidden  z-50 bg-[#121212] text-xs text-center gap-2 font-semibold fixed top-0 transition-all ease duration-700"
        style={{ left: IsOpened ? 0 : "-60vw" }}
      >
        <div className=" -mt-10 mb-10">
          <MobilePalette />
        </div>

        {Links.map((link) => {
          return (
            <Link
              onClick={() => setIsOpened(!IsOpened)}
              key={link.name}
              href={link.path}
              className={`${
                link.path === pathName && "text-main"
              } font-medium capitalize  hover:text-main  text-lg p-2`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
