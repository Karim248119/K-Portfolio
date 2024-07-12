"use client";

import { useEffect, useState } from "react";
import { IoColorFilterOutline } from "react-icons/io5";

const MobilePalette = () => {
  const [paletteVisible, setPaletteVisible] = useState(false);
  const [lastClickedButton, setLastClickedButton] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color) {
      setSelectedColor(color);
      document.documentElement.style.setProperty("--main-color--", color);
    }
  }, []);

  useEffect(() => {
    if (selectedColor) {
      document.documentElement.style.setProperty(
        "--main-color--",
        selectedColor
      );
    }
  }, [selectedColor]);

  const togglePalette = () => {
    setPaletteVisible(!paletteVisible);
  };

  const handleColorChange = (button: any) => {
    togglePalette();
    const paletteNewColor = window.getComputedStyle(button).backgroundColor;

    localStorage.setItem("color", paletteNewColor);

    setSelectedColor(paletteNewColor);

    if (lastClickedButton) {
      lastClickedButton.style.border = "none";
    }

    setLastClickedButton(button);
    button.style.border = "2px solid white";
  };

  return (
    <div className="w-28 aspect-square relative">
      <button className="" onClick={togglePalette}>
        <IoColorFilterOutline
          className="text-main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] rounded-full p-1 z-50"
          size={60}
        />
      </button>
      <button
        className={`bg-[#00FFFF] w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 ${
          paletteVisible ? "top-0 " : "top-1/2 -translate-y-1/2"
        }`}
        onClick={(e) => handleColorChange(e.target)}
      ></button>
      <button
        className={`bg-[#00FF99] w-5 h-5 rounded-full absolute transition-all ease-in-out duration-300 ${
          paletteVisible
            ? "bottom-5 left-0"
            : "left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        }`}
        onClick={(e) => handleColorChange(e.target)}
      ></button>
      <button
        className={`bg-[#FF00FF] w-5 h-5 rounded-full absolute transition-all ease-in-out duration-300 ${
          paletteVisible
            ? "bottom-5 right-0"
            : "right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
        }`}
        onClick={(e) => handleColorChange(e.target)}
      ></button>
    </div>
  );
};

export default MobilePalette;
