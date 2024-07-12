import Image from "next/image";
import ThemeSwitch from "../components/DarkMode";
import ColorPalette from "../components/ColorPalette";
import { ThemeProvider } from "next-themes";
import MotionProvider from "../components/Motions/MotionProvider";
import Navbar from "./Pages/Navigator";
import "./globals.css";
import HomePage from "./Home/page";
import Services from "./Pages/Services";

export default function Home() {
  return (
    <main className=" text-white">
      <HomePage />
    </main>
  );
}
