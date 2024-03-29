import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center md:p-5 px-10 pt-40 overflow-hidden relative">
        <img src="/assets/images/LineDraw2.svg" className="gradImgR hidden xl:block absolute opacity-45 bg-gradient-to-r from-bgColor to-transparent -right-40 z-10 -rotate-45 -top-24  w-[50vw]" alt="" />
        <img src="/assets/images/LineDraw2.svg" className=" gradImgL hidden xl:block absolute  opacity-45 -left-40 z-10 -rotate-45 scale-x-[-1]  scale-y-[-1]  -bottom-24  w-[50vw]" alt="" />
        <img src="/assets/images/LineDraw1.svg" className="gradImgR lg:hidden absolute opacity-45  -right-40 z-10 -rotate-45 top-24  w-[100vh]" alt="" />
        {/* <img src="/assets/images/LineDraw1.svg" className=" gradImgL lg:hidden absolute  opacity-45 -left-40 z-10 -rotate-45 scale-x-[-1]  scale-y-[-1]  -bottom-0  w-[100vw]" alt="" /> */}
      <h1 className="text-white font-medium text-2xl text-center lg:text-[30px] flex flex-wrap justify-center items-center">
        <span className="text-googleGreen px-1">Google</span>
        <span className="text-googleBlue px-1">Developers</span>
        <span className="text-googleRed px-1">Student</span>
        <span className="text-googleYellow px-1">Clubs,</span> Kerala
      </h1>
      <p className="text-white font-normal md:text-[25px] text-md my-4">
        presents
      </p>
      <h1 className="bg-gradient-to-r from-googleGreen via-blue-500 to-googleYellow  inline-block text-transparent bg-clip-text font-bold  md:text-[100px] z-20 text-5xl lg:text-[130px] mb-4">
        WoW'24
      </h1>
      <p className="md:px-56 md:text-xl text-sm lg:text-center text-justify flex justify-center items-center px-4 mb-8">
        GDSC WoW Kerala is a community of students and developers who are
        passionate about Google technologies. We are a part of Google Developers
        Student Clubs, a program for students to learn about Google technologies
        and build solutions for their local communities.
      </p>
      <div className="w-[50vw] flex flex-col md:flex-row justify-end items-center md:justify-center pt-8">
        <button className="h-20 ease-in-out duration-300 z-20 w-64 gradColor font-medium text-md md:text-xl rounded-sm md:my-8 my-4 mx-4">
          Register Now
        </button>
        <button className="h-20 ease-in-out duration-300 z-20 w-64 gradColor font-medium text-md md:text-xl rounded-sm md:my-8 my-4 mx-4">
          Know  more
        
        </button>
      </div>
    </div>
  );
};

export default Hero;
