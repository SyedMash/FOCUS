"use client"
import ReactLenis from "lenis/react";
import React from "react";
const Smooth = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
export default Smooth
