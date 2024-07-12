"use client";
import React from "react";

export default function linkButton({
  children,
  link,
  className,
}: {
  children?: any;
  link?: string;
  className?: string;
}) {
  return (
    <a
      href={link}
      className={
        " p-2 bg-white/20 rounded-full text-6xl hover:bg-main hover:text-primary transition-all ease-in-out duration-300" +
        className
      }
    >
      <button>{children}</button>
    </a>
  );
}
