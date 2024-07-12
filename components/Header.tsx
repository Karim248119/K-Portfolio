import React from "react";

export default function Header({ text }: { text: string }) {
  return (
    <div className="w-full flex items-center flex-col md:gap-1 gap-[0.1rem] md:pb-10 p-5">
      <p className="text-[4vw] md:text-[2.5vw] text-secondary">{text}</p>
      <div className="w-[5%] md:h-[1px] h-[0.2px] bg-theme"></div>
      <div className="w-[10%] md:h-[1px] h-[0.2px] bg-theme"></div>
      <div className="w-[5%] md:h-[1px] h-[0.2px] bg-theme"></div>
    </div>
  );
}
