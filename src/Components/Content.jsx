import React from "react";
import laptop from "../Assets/laptop.jpg";
import TypingText from "./TypingText";


const Content = () => {

  const messages = [
    "I am a Full Stack Engineer.",
    "I am an aspiring Machine Learning Engineer.",
  ];

  return (
    <div className="text-black">
      <div className="flex flex-col text-center justify-center w-full h-screen  mt-[-50px] mx-auto max-w-[800px]">
        <p className="text-black-600 font-bold p-2 md:text-3xl sm:text-2xl text-xl">
          Hi, I am Agna Parikh!
        </p>
        <h4 className="text-[#0563bb] md:text-3xl sm:text-2xl text-xl md:py-6">
          <TypingText stepsArray={messages} loopCount={Infinity} />
        </h4>
        <div className="flex justify-center items-center">
        </div>
        <img
          src= {laptop}
          alt="Profile"
          className="mt-12 w-80 h-80 mx-auto mb-6 border-4 border-gray-300 shadow-md rounded-full"
        />
      </div>
    </div>
  );
};

export default Content;
