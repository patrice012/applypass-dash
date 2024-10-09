import { Minus, Plus, User } from "lucide-react";
import { JobDetail } from "../dialogs/job-detail";

interface JobItemProps {
  isActive: boolean;
}

const JobItem = ({ isActive }: JobItemProps) => {
  return (
    <JobDetail>
      <div className="w-full flex flex-col md:flex-row gap-4  md:items-center py-4 px-[10px] md:p-4 rounded-xl bg-[#F6F5F4] border border-[#E5E7EB] justify-between">
        <div className="flex gap-4 items-start">
          <div className="size-14 border-[1.5px] shrink-0 border-[#E7E9EB] rounded-full bg-white p-2">
            <img
              src={
                isActive
                  ? "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  : "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              }
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[6px] items-start">
            <h4 className="text-[#231232] font-semibold text-[14px] md:text-[16px]">
              Test Automation Engineer
            </h4>
            <p className="text-[#231232] text-[12px] md:text-[14px]">
              Manager | On site | VueJs | Dropbox Inc
            </p>
            <p className="text-[#231232] text-[12px] md:text-[14px]">
              Match score :{" "}
              <span className="text-[#231232] font-semibold text-[12px] md:text-[14px]">
                99%
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isActive ? (
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="bg-[#FFFFFF] flex gap-[8px] w-full md:items-center rounded-full md:w-[180px] border border-[#059669] hover:bg-[#059669]/10 transition ease-in-out duration-500 px-[16px] py-[10px] text-[14px] font-medium  text-[#001E52] text-nowrap">
              <Plus size={20} color="#001E52" /> Available to Apply
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="bg-[#34D399] hover:bg-[#fff] hover:text-[#34D399] transition ease-in-out duration-500 flex gap-[8px] w-full  items-center rounded-full border border-[#059669] px-[16px] md:w-[180px] py-[10px] text-[14px] font-medium  text-[#fff] text-nowrap">
              <User size={20} color="#FDE68A" /> Added to Queue
            </button>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="h-[40px] w-[40px] shrink-0 flex justify-center items-center rounded-full bg-[#fff] hover:bg-[#EF4444]/10 transition ease-in-out duration-500 border border-[#D1D5DB]">
            <Minus color="#EF4444" />
          </button>
        </div>
      </div>
    </JobDetail>
  );
};

export default JobItem;
