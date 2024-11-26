"use client";
import { useEffect } from "react";
import "./PreLoader.css";
import { preloaderAnimation } from "./loader";

const PreLoader = () => {
  useEffect(() => {
    preloaderAnimation();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 opacity-0 flex items-center justify-center h-60 gap-[5px] overflow-hidden text-[14px] font-extrabold sm:gap-[10px] md:text-[18px] lg:text-[20px]">
        <span>Developer.</span>
        <span>Designer.</span>
        <span>Photograher.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
