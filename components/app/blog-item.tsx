/* eslint-disable @next/next/no-img-element */
import { LayoutValue } from "@/helpers/constants";
import { CalendarDays, Clock4 } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface BlogItemProps {
  title?: string;
  image?: string;
  style?: LayoutValue;
}

const BlogItem = ({
  title,
  image,
  style = LayoutValue.Grid,
}: BlogItemProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/dashboard/blogs/details")}
      title={title}
      className={`transition-all ease-in-out duration-200 cursor-pointer flex bg-white ${
        style == 0
          ? "flex-col"
          : "flex-col items-start md:items-center md:flex-row justify-between p-3 md:p-4 bg-[#F9F9FA] border border-[#E7E9EB]"
      } gap-4 border rounded-lg pb-4`}
    >
      <div
        className={`flex max-w-full ${
          style == 0 ? "flex-col" : "flex-row items-center"
        }`}
      >
        <img
          className={`object-cover ${
            style == 0
              ? "h-[200px] w-full rounded-t-lg mb-3"
              : "size-16 md:size-20 rounded-[5px]"
          }`}
          src={image}
          alt="BlogItem image"
        />
        <div
          className={`flex flex-col ${
            style == 0 ? "gap-4" : "gap-2"
          } px-4 truncate text-ellipsis overflow-hidden ..."`}
        >
          <h1 className="font-semibold text-base md:text-lg truncate ...">
            57,000 engineering interviews: The interview threshold, magic
            numbe...
          </h1>
          <div
            className={`flex ${
              style == 0
                ? "items-start justify-between order-first"
                : "gap-4 items-center"
            }`}
          >
            <div className={`flex gap-4 items-center`}>
              <div className="flex items-center gap-1">
                <CalendarDays size={20} strokeWidth={2} />
                <span className="text-[#757F87] text-sm md:text-base">
                  15 Oct 2023
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock4 size={20} strokeWidth={2} />
                <span className="text-[#757F87] text-sm md:text-base">
                  06 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        className={`max-w-max bg-[#6805DA] hover:bg-[#6805DA] rounded-[100px] border border-[#6805DA] py-2 px-5`}
      >
        Read Blog
      </Button>
    </div>
  );
};

export default BlogItem;
