import { Button } from "@/components/ui/button";

const ToolsPage = () => {
  return (
    <div className="px-[10px] py-4 lg:py-8 lg:px-8">
      <div className="w-full grid grid-cols-2 p-6 rounded-xl text-white bg-gradient-custom border">
        <div className="flex flex-col gap-3 items-start">
          <span>Free Resume Checker:</span>
          <h1 className="font-semibold text-3xl">Make Your Resume Stant Out</h1>
          <p className="text-[#F3F4F6] font-light text-base">
            Get your resume scored in seconds! Land more interviews at your
            dream companies with personalized resume recommendations.
          </p>
          <button className="mt-3 px-5 py-3 rounded-[100px] border border-black bg-[#6805DA] text-white">
            CHECK YOUR RESUME NOW
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/tools-contact.svg" alt="ToolsContact" className="h-56" />
        </div>
      </div>
      <h4 className="font-bold text-[24px] my-6">Available Tools</h4>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex gap-5 rounded-xl p-5 border bg-[#FBFAF8]">
          <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl size-16 shadow-2xl">
            <img className="" src="/resume.svg" alt="Resume Icon" />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-xl font-bold">Free Resume Checker</h3>
            <p className="text-[15px] font-light text-[#4B5563]">
              Get your resume scored in seconds! Land more interviews with AI.
            </p>
            <Button className="mt-2 rounded-[100px] py-2 px-5 bg-[#6805DA]">
              Check Score
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
