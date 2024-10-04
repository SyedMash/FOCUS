import React from "react";

export const Button = () => {
  return (
    <button className="cursor-pointer  text-white font-bold relative text-[18px] w-[9em] h-[3em] text-center bg-gradient-to-r from-[#593802] from-10% via-[#593802] via-30% to-[#593802] to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-[#071A1D] before:from-10% before:via-[#130A05] before:via-30% before:to-[#130A05] before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
      LEARN MORE
    </button>
  );
};
