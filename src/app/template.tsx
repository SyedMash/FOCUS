"use client";
import { animateIn } from "@/utils/animate";
import React, { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animateIn();
  }, []);

  return (
    <div>
      <div
        id="banner"
        className="min-h-screen w-full bg-[#1A100A] fixed top-0 left-0 z-50 flex items-center justify-center"
      >
        <h1 className="text-white text-5xl">MASH</h1>
      </div>
      {children}
    </div>
  );
};

export default Template;
