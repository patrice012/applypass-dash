"use client";

import CourseItem from "@/components/app/course-item";
import { Button } from "@/components/ui/button";
import { LayoutValue } from "@/helpers/constants";
import { courseItemImages } from "@/helpers/mock";
import { ChevronDown, LayoutGrid, TableOfContents } from "lucide-react";
import { PropsWithChildren, useState } from "react";

const CoursesPage = () => {
  const [layout, setLayout] = useState<LayoutValue>(LayoutValue.Grid);

  return (
    <main className="main-content">
      <h1 className="text-2xl font-bold">Good Evening, Dan!</h1>
      <div className="flex flex-col gap-3 md:flex-row items-start md:items-center justify-between bg-[#EDE9FE] p-4 rounded-lg">
        <div className="flex flex-row w-full gap-[12px] items-center sm:items-center">
          <img src="/diamond.svg" alt="" />
          <div className="flex flex-col gap-1">
            <span className="text-[#231232] font-semibold text-[15px] md:text-[20px]">
              Get the most out of your job search!
            </span>
            <span className="text-[#231232] text-[12px] md:text-[14px]">
              Invest in yourself - get more opportunities, faster.
            </span>
          </div>
        </div>
        <Button
          className={`w-full md:max-w-max bg-[#6805DA] hover:bg-[#6805DA] rounded-[100px] border border-[#6805DA] py-2 px-5`}
        >
          Upgrade Now
        </Button>
      </div>
      <div className="flex flex-col gap-3 items-start md:flex-row w-full justify-between md:items-center">
        <h4 className="font-bold text-2xl">All Courses</h4>
        <div className="flex gap-4 items-center">
          <div className="order-last md:order-first flex p-1 rounded-[100px] h-[41px] border">
            <SelectLayout
              onClick={() => setLayout(LayoutValue.Line)}
              selected={layout == 1}
            >
              <TableOfContents
                size={20}
                className="rotate-180"
                strokeWidth={1.5}
              />
            </SelectLayout>
            <SelectLayout
              onClick={() => setLayout(LayoutValue.Grid)}
              selected={layout == 0}
            >
              <LayoutGrid size={20} strokeWidth={1.5} />
            </SelectLayout>
          </div>
          <div className="cursor-pointer px-4 py-2 flex items-center h-[41px] rounded-[100px] border">
            <span>
              Display per page:
              <span className="text-base font-semibold"> 10</span>
            </span>
            <ChevronDown />
          </div>
        </div>
      </div>
      <div
        className={`transition-all ease-in duration-200 ${
          layout == 0
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]"
            : "flex flex-col gap-4"
        }`}
      >
        <CourseItem style={layout} image={courseItemImages[0]} />
        <CourseItem style={layout} image={courseItemImages[1]} />
        <CourseItem style={layout} image={courseItemImages[2]} />
        <CourseItem style={layout} image={courseItemImages[0]} />
        <CourseItem style={layout} image={courseItemImages[1]} />
        <CourseItem style={layout} image={courseItemImages[2]} />
        <CourseItem style={layout} image={courseItemImages[0]} />
        <CourseItem style={layout} image={courseItemImages[1]} />
        <CourseItem style={layout} image={courseItemImages[2]} />
      </div>
    </main>
  );
};

export default CoursesPage;

const SelectLayout = ({
  children,
  selected,
  onClick,
}: PropsWithChildren & { selected: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 rounded-[100px] cursor-pointer ${
        selected ? "bg-[#EFF5FE]" : ""
      }`}
    >
      {children}
    </button>
  );
};
