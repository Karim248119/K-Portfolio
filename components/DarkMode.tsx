"use client";
import { useTheme } from "next-themes";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function DarkMode() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark") {
    return <FiSun color="white" onClick={() => setTheme("light")} />;
  } else {
    return <FiMoon color="white" onClick={() => setTheme("dark")} />;
  }
}
