import { LayoutValue } from "@/helpers/constants";
import { NotepadText, UsersRound } from "lucide-react";
import { useRouter } from "next/navigation";

interface CourseItemProps {
  title?: string;
  image?: string;
  style?: LayoutValue;
}

const CourseItem = ({
  title,
  image,
  style = LayoutValue.Grid,
}: CourseItemProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/dashboard/courses/details")}
      title={title}
      className={`transition-all ease-in-out duration-200 cursor-pointer flex bg-white ${
        style == 0
          ? "flex-col"
          : "flex-col md:flex-row justify-between p-4 bg-[#F9F9FA] border border-[#E7E9EB]"
      } gap-4 border rounded-lg pb-4`}
    >
      <div
        className={`flex ${style == 0 ? "flex-col" : "flex-row items-center"}`}
      >
        <img
          className={`object-cover ${
            style == 0
              ? "h-[200px] w-full rounded-t-lg mb-3"
              : "size-20 rounded-[5px]"
          }`}
          src={image}
          alt="CourseItem image"
        />
        <div className={`flex flex-col ${style == 0 ? "gap-4" : "gap-2"} px-4`}>
          <h1 className="font-semibold text-base md:text-lg">
            Salary Negotiation Part-01
          </h1>
          <div
            className={`flex ${
              style == 0 ? "items-start justify-between" : "gap-4 items-center"
            }`}
          >
            <div className="flex gap-2 items-center">
              {style == 0 && (
                <img
                  className="object-cover size-10 rounded-full border"
                  src={image}
                  alt="CourseItem image"
                />
              )}
              <div className="flex flex-col items-start">
                <h4 className="font-semibold text-[15px]">Jeffrey Connor</h4>
                {style == 0 && (
                  <span className="text-[#757F87] font-normal text-[13px]">
                    Chicago, IL
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <img src="/star.svg" alt="" />
              <span className="font-bold text-base">4.9</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex gap-4 items-center ${style == 0 && "px-4"}`}>
        <div className="flex items-center gap-2">
          <UsersRound size={20} strokeWidth={2} />
          <span className="text-[#757F87]">3.4k Learners</span>
        </div>
        <div className="flex items-center gap-2">
          <NotepadText size={20} strokeWidth={2} />
          <span className="text-[#757F87]">32 Classes</span>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

export const CourseItemSmall = ({ title, image }: CourseItemProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/dashboard/courses/details")}
      title={title}
      className={`transition-all ease-in-out duration-200 cursor-pointer flex flex-col justify-between p-4 bg-white border-[#E7E9EB] gap-4 border rounded-lg pb-4`}
    >
      <div className={`flex flex-row items-center`}>
        <img
          className={`object-cover size-14 rounded-[5px]`}
          src={image}
          alt="CourseItem image"
        />
        <div className={`flex flex-col gap-2 px-4`}>
          <h1 className="font-bold text-sm">Salary Negotiation Part-01</h1>
          <div className={`flex gap-4 items-center`}>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col items-start">
                <h4 className="font-normal text-sm">Jeffrey Connor</h4>
              </div>
            </div>
            <div className="flex border items-center gap-1">
              <img className="size-4" src="/star.svg" alt="" />
              <span className="font-semibold leading-0 text-sm">4.9</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex gap-4 items-center`}>
        <div className="flex items-center gap-2">
          <UsersRound size={20} strokeWidth={2} />
          <span className="text-[#757F87]">3.4k Learners</span>
        </div>
        <div className="flex items-center gap-2">
          <NotepadText size={20} strokeWidth={2} />
          <span className="text-[#757F87]">32 Classes</span>
        </div>
      </div>
    </div>
  );
};
