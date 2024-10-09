"use client";

import BlogItem from "@/components/app/blog-item";
import { LayoutValue } from "@/helpers/constants";
import { courseItemImages } from "@/helpers/mock";
import { ChevronDown, LayoutGrid, TableOfContents } from "lucide-react";
import { PropsWithChildren, useState } from "react";

const BlogPage = () => {
  const [layout, setLayout] = useState<LayoutValue>(LayoutValue.Grid);

  return (
    <main className="main-content">
      <div className="flex flex-col gap-3 items-start md:flex-row w-full justify-between md:items-center">
        <h4 className="font-bold text-2xl">Recent Blogs</h4>
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
        <BlogItem style={layout} image={courseItemImages[0]} />
        <BlogItem style={layout} image={courseItemImages[1]} />
        <BlogItem style={layout} image={courseItemImages[2]} />
        <BlogItem style={layout} image={courseItemImages[0]} />
        <BlogItem style={layout} image={courseItemImages[1]} />
        <BlogItem style={layout} image={courseItemImages[2]} />
        <BlogItem style={layout} image={courseItemImages[0]} />
        <BlogItem style={layout} image={courseItemImages[1]} />
        <BlogItem style={layout} image={courseItemImages[2]} />
      </div>
    </main>
  );
};

export default BlogPage;

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
