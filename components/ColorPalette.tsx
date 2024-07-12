"use client";

import { useEffect, useState } from "react";
import { IoColorFilterOutline } from "react-icons/io5";

const ColorPalette = () => {
  const [paletteVisible, setPaletteVisible] = useState(false);
  const [lastClickedButton, setLastClickedButton] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
      setSelectedColor(storedColor);
      document.documentElement.style.setProperty("--main-color--", storedColor);
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
    button.style.border = "2px solid black";
  };

  return (
    <div>
      <button className="   " onClick={togglePalette}>
        <IoColorFilterOutline className="text-main" size={35} />
      </button>
      <div
        className={`palette-container fixed top-0 ${
          paletteVisible ? "left-5" : "-left-[13vw]"
        } w-[13vw] bg-black shadow-lg transition-all duration-500 ease-in-out `}
      >
        <div className="py-5">
          {[
            "#ff305b",
            "#D3D3D3",
            "#FF0000",
            "#00FFFF",
            "#FFFF00",
            "#FFA500",
            "#39FF14",
            "#FF00FF",
            "#FF69B4",
            "#00FF99",
          ].map((color, index) => (
            <button
              key={index}
              className="w-[2vw] h-[2vw] m-1 rounded-full"
              style={{ backgroundColor: color }}
              onClick={(e) => handleColorChange(e.target)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
