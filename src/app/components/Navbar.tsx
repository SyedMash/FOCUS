"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import TransitionLink from "./TransitionLink";
import ToHomeTransition from "./ToHomeTransition";
import React from "react";

const Navbar = () => {
  const moreRef = useRef<HTMLDivElement>(null);
  const headingDivRef = useRef<HTMLDivElement>(null);
  const homeRef = React.useRef<HTMLHeadingElement>(null);

  const showMore = () => {
    gsap.to(moreRef.current, {
      top: 0,
      ease: "linear",
      duration: 0.5,
    });
  };

  const hideMore = () => {
    gsap.to(moreRef.current, {
      top: "-110%",
    });
  };

  useEffect(() => {
    if (headingDivRef.current) {
      Array.from(headingDivRef.current.children).forEach((e) => {
        e.addEventListener("click", () => {
          setTimeout(() => {
            hideMore();
          }, 2000);
        });
      });
    }

    if (homeRef.current && homeRef.current.firstChild) {
      homeRef.current.firstChild.addEventListener("click", () => {
        setTimeout(() => {
          hideMore();
        }, 2000);
      });
    }
  });

  return (
    <div>
      <div
        ref={moreRef}
        className="fixed -top-[110%] left-0 w-full h-screen bg-[#0B282C] overflow-hidden z-50"
      >
        <h1
          className="absolute top-1/4 right-5 text-2xl text-white/50 font-bold cursor-pointer"
          onClick={hideMore}
        >
          X
        </h1>
        <div
          ref={headingDivRef}
          className="absolute top-1/4 left-[2%] sm:left-[1%] flex flex-col gap-3"
        >
          <TransitionLink href="/" label="HOME" />
          <TransitionLink href="/about" label="ABOUT" />
        </div>
      </div>
      <nav
        ref={homeRef}
        className="ani bg-neutral-900/50 text-white fixed left-2/4 z-50 -translate-x-2/4 overflow-hidden backdrop-blur-3xl h-[75px] w-3/4 lg:w-2/4 xl:w-2/4 2xl:w-1/4 mx-auto rounded-bl-full rounded-full rounded-br-full mt-5 flex items-center justify-between px-5"
      >
        <ToHomeTransition href="/" label="MASH" />
        <h1
          className="sm:text-2xl font-bold ani cursor-pointer"
          onClick={showMore}
        >
          MORE
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
