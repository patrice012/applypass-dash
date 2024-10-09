"use client";

import ToolItem from "@/components/app/tool-item";
import { useEffect, useState } from "react";

const ToolsPage = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevState) => {
        if (prevState > 2) return 0;
        return prevState + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-[10px] py-4 lg:py-8 lg:px-8">
      <div
        title=""
        className="w-full grid grid-cols-1 md:grid-cols-2 px-6 py-5 rounded-xl text-white bg-gradient-custom-b lg:bg-gradient-custom relative border"
      >
        <div className="flex flex-col gap-3 items-start">
          <span>Free Resume Checker:</span>
          <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl">
            Make Your Resume Stant Out
          </h1>
          <p className="text-[#F3F4F6] font-light text-base">
            Get your resume scored in seconds! Land more interviews at your
            dream companies with personalized resume recommendations.
          </p>
          <button className="w-full md:max-w-max text-sm md:text-base mt-3 px-5 py-3 rounded-[100px] border bg-[#6805DA] text-white font-semibold">
            CHECK YOUR RESUME NOW
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/tools-contact.svg"
            alt="ToolsContact"
            className="h-40 md:h-56"
          />
        </div>
        <div className="flex transition-all ease-in-out p-3 gap-[6px] items-center justify-center absolute bottom-0 w-full">
          {Array.from({ length: 4 }).map((e, idx) => (
            <SlideDot isActive={currentSlide == idx} />
          ))}
        </div>
      </div>
      <h4 className="font-bold text-[24px] my-5">Available Tools</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ToolItem
          title="Free Resume Checker"
          description="Get your resume scored in seconds! Land more interviews with AI."
          image="/resume.svg"
          buttonText="Check Score"
          bg
        />
        <ToolItem
          title="Free Linkedin Scorer"
          description="Check your LinkedIn profile score in second. Get noticed on LinkedIn"
          image="/linkedin.svg"
          buttonText="Check Score"
          bg
        />
        <ToolItem
          title="Cover Letter Generator"
          description="Write cover letter instantly using Applypass cover letter generator."
          image="/application.svg"
          buttonText="Comming Soon"
        />
        <ToolItem
          title="Network Message Writer"
          description="Get your resume scored in seconds! Land more interviews with AI."
          image="/community.svg"
          buttonText="Comming Soon"
        />
        <ToolItem
          title="Free Resume Checker"
          description="Get your resume scored in seconds! Land more interviews with AI."
          image="/resume.svg"
          buttonText="Comming Soon"
        />
      </div>
    </div>
  );
};

export default ToolsPage;

const SlideDot = ({ isActive }: { isActive?: boolean }) => {
  return (
    <div
      className={`${
        isActive ? "bg-white w-14" : "bg-white/40 w-8"
      } rounded-[100px] h-2`}
    ></div>
  );
};
