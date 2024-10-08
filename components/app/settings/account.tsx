import { Separator } from "@/components/ui/separator";
import {  Link, Pencil } from "lucide-react";

export default function Account() {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[100px]">
      <div className="flex flex-col gap-[6px]">
        <span className="font-bold text-2xl">Profile</span>
        <span className="text-[#757F87]">Update your information below</span>
      </div>
      <div className="bg-[#DCFBE7] justify-between items-center flex p-[13px] gap-[16px] rounded-[10px]">
        <div className="flex gap-[20px] items-center">
          <div className="bg-[#fff] rounded-full p-[16px] ">
            <Link color="#409348" size={40} />
          </div>
          <div className="flex flex-col ">
            <span className="text-[#1B1B1B] font-semibold text-xl">
              Profile setup 70% complete
            </span>
            <span className="font-semibold text-[#1B1B1B] text-xl">
              Next Step:{" "}
              <span className="text-[#1B1B1B] font-normal text-xl">
                Add a profile picture
              </span>
            </span>
          </div>
        </div>
        <button className="bg-[#409348] px-[20px] py-[12px] rounded-[10px] transition ease-in-out duration-300 hover:bg-[#40934891]">
          Finish setting up
        </button>
      </div>

      <div className="h-[120px] w-[120px] cursor-pointer rounded-full border border-[#e4e4e4] text-center items-center flex flex-col justify-center text-wrap">
        <span>Upload </span>
        <span> image</span>
        <input   type="file" className="hidden" />
      </div>
      <div className="flex flex-col gap-[15px] py-[15px]">
        <div className="grid col-span-3 grid-cols-3 ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[15px] font-bold">
              Full Name
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F] justify-between">
              <span>Dan Cloe</span>
              <Pencil size={18} />
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid col-span-3 grid-cols-3 ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[15px] font-bold">
              Email Address
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F] justify-between">
              <span>dancloe@email.com</span>
              <Pencil size={18} />
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid col-span-3 grid-cols-3 ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[15px] font-bold">Bio</span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F] gap-2 justify-between">
              <span>
                Baubles gringotts fairy kedavra niffler house harry knitted
                drops. Cupboard bee ginny horseless thestral find ridgeback
                seek. Would owl emporium minerva potter no frogs sunshine sir
                full-moon. Banquet train seeker stunning bertie.
              </span>
              <Pencil size={18} className="shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
