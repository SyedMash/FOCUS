import React from "react";
import { Button } from "../components/ui/Button";

const About = () => {
  return (
    <div className="h-screen w-full relative bg-neutral-950">
      <div className="absolute top-1/4 left-2/4 -translate-x-2/4 flex flex-col z-20">
        <h1 className="text-4xl  sm:text-4xl md:text-5xl text-center lg:text-7xl xl:text-8xl 2xl:text-9xl top-1/4 -translate-y-1/4 left-5 font-extrabold text-white/50">
          ABOUT
        </h1>
        <p className="sm:text-2xl mb-5 lg:w-10/12 xl:w-full text-center text-white">
          This website was created as a canvas to showcase my skills in
          front-end development, responsive design, and creative animations.
          Every element, from the fluid transitions to the interactive features,
          is designed to demonstrate my technical expertise and passion for
          crafting engaging user experiences. Built with modern technologies,
          this site is fully responsive, adapting seamlessly to any device or
          screen size. It not only reflects my growth as a developer but also
          serves as a living portfolio, constantly evolving as I explore new
          techniques and push the boundaries of web design.
        </p>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default About;
