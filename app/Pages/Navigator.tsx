"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
export default function Navbar() {
  const [IsOpened, setIsOpened] = useState(false);
  const handleClickOutside = (event: any) => {
    if (!event.target.closest(".nav") && IsOpened) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [IsOpened]);

  const Links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const pathName = usePathname();
  return (
    <nav className="z-50">
      <div className="nav  w-full flex justify-between items-center flex-row fixed top-0 left-0 p-8 md:px-20 text-white z-30">
        <h1 className="md:text-3xl text-base font-semibold">
          Karim<span className=" text-theme">.</span>
        </h1>
        <div className="sm:flex gap-5 hidden navs font-bold">
          {Links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  link.path === pathName && "text-theme border-b-2 border-theme"
                } font-medium capitalize transition-all text-hover`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="sm:hidden flex flex-col">
          <button
            onClick={() => setIsOpened(!IsOpened)}
            className="border-[0.5px] border-gray-600 px-2 py-1 rounded-[2px] menuBtn flex justify-center items-center"
          >
            <FaBars color="gray" />
          </button>
        </div>
      </div>
      <div
        className="  h-[100vh] w-[60vw] flex flex-col py-3 overflow-hidden navs md:hidden  z-50 bg-white text-xs text-center gap-2 font-semibold fixed top-0 transition-all ease duration-700"
        style={{ left: IsOpened ? 0 : "-60vw" }}
      >
        <Link href="/Home">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Services"> Services</Link>
        <Link href="/Portfolio">Portfolio</Link>
        <Link href="/Testimonial">Testimonial</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </nav>
  );
}
