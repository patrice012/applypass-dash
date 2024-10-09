"use client";

import {
  BriefcaseBusiness,
  ChevronDown,
  ListFilter,
  Minus,
  Plus,
  Star,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobItem from "@/components/app/job-item";
import { TabsContent } from "@radix-ui/react-tabs";
import { LogInterViewModal } from "@/components/dialogs/log-interview";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { JobDetail } from "@/components/dialogs/job-detail";
import { useState } from "react";

import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const checkIsTouchDevice = (): boolean => {
    return (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  };

  // const isTouchDevice = "ontouchstart" in window;
  const isTouchDevice = checkIsTouchDevice();

  const [open, setOpen] = useState(false);

  return (
    <main className="flex-grow flex flex-col w-full px-4 py-[24px] md:p-[32px] gap-[24px] overflow-y-scroll scrollbar scrollbar-thumb-[#d4d4d4] scrollbar-w-[7px] scrollbar-thumb-rounded-full">
      <div className="flex w-full items-center">
        <div className="bg-[#EDE9FE] rounded-[12px]  md:items-center p-4 w-full flex flex-col gap-[24px] md:flex-row justify-between">
          <div className="flex sm:flex-row flex-col w-full gap-[12px] items-start sm:items-center">
            <div className="bg-[#fff] rounded-[7px] p-[16px] ">
              <BriefcaseBusiness color="#DF4425" size={40} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <span className="text-[#231232] font-bold text-[16px] md:text-[20px]">
                Complete your Job Match Profile
              </span>
              <span className="text-[#231232] text-[12px] md:text-[14px]">
                For better matches and to begin your free trial.
              </span>
            </div>
          </div>
          <button className="bg-[#6805DA] hover:bg-[#6805daa9] border border-[#6805DA] transition ease-in-out duration-500 hover:border hover:border-[#6805DA] rounded-full px-[40px] py-[12px]  text-[#fff] text-nowrap">
            Complete Profile
          </button>
        </div>
      </div>

      <Tabs defaultValue="week" draggable>
        <span className="text-[#231232] font-bold text-[18px] md:text-[24px]">
          Job Dashboard
        </span>

        <div className="flex items-center  border-[#E5E7EB] border-b">
          <TabsList className="sm:justify-between gap-[24px] justify-start flex w-full md:gap-[20px] md:justify-start overflow-x-auto scrollbar-hide ">
            <TabsTrigger className="" value="week">
              Job matches (112)
            </TabsTrigger>
            <TabsTrigger value="month">Job Application Queue (28)</TabsTrigger>
            <TabsTrigger value="year">Jobs applied (28)</TabsTrigger>
          </TabsList>

          <div className="ml-auto  justify-end hidden md:flex  items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-sm rounded-full h-[38px] py-[12px] px-[20px] gap-[20px]"
                >
                  <div className="flex gap-2 items-center">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="text-nowrap text-[14px]">Filter by:</span>
                  </div>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#F3F4F6] p-[8px]">
                <DropdownMenuItem className="gap-[12px] p-[12px] cursor-pointer bg-[#fff] hover:rounded-[4px]">
                  <span className="text-[#231232] text-[14px]">
                    Match Score:
                  </span>
                  <span className="text-[#231232] text-[14px] font-bold">
                    {">"} 95%
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-[12px] p-[12px] cursor-pointer hover:bg-[#fff]">
                  <span className="text-[#231232] text-[14px]">
                    Match Score:
                  </span>
                  <span className="text-[#231232] text-[14px] font-bold">
                    {">"} 95%
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-[12px] p-[12px] cursor-pointer hover:bg-[#fff]">
                  <span className="text-[#231232] text-[14px]">
                    Match Score:
                  </span>
                  <span className="text-[#231232] text-[14px] font-bold">
                    {">"} 95%
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full sm:justify-end flex md:hidden mt-6  sm:items-center gap-2">
          <DropdownMenu open={open} onOpenChange={(open) => setOpen(open)}>
            <DropdownMenuTrigger
              {...(isTouchDevice
                ? {
                    onPointerDown: (e) => e.preventDefault(),
                    onClick: () => setOpen(!open),
                  }
                : undefined)}
              className="w-full sm:max-w-max"
              asChild
            >
              <Button
                variant="outline"
                size="sm"
                className="text-sm flex justify-between rounded-full h-[48px] sm:h-[38px] py-[12px] px-[20px] gap-[20px]"
              >
                <div className="flex gap-2 items-center">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className=" text-[14px]">Filter by:</span>
                </div>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#F3F4F6]  w-full sm:max-w-max p-[8px]"
            >
              <DropdownMenuItem className="gap-[12px] p-[12px] cursor-pointer bg-[#fff] hover:rounded-[4px]">
                <span className="text-[#231232] text-[14px]">Match Score:</span>
                <span className="text-[#231232] text-[14px] font-bold">
                  {">"} 95%
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-[12px] p-[12px] cursor-pointer hover:bg-[#fff]">
                <span className="text-[#231232] text-[14px]">Match Score:</span>
                <span className="text-[#231232] text-[14px] font-bold">
                  {">"} 95%
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-[12px] p-[12px] cursor-pointer hover:bg-[#fff]">
                <span className="text-[#231232] text-[14px]">Match Score:</span>
                <span className="text-[#231232] text-[14px] font-bold">
                  {">"} 95%
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <TabsContent value="week">
          <div className="flex flex-col gap-4 mt-6">
            {Array.from({ length: 10 }).map((em, idx) => (
              <JobItem key={idx} isActive={idx % 2 === 0} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="month">
          <div className="flex flex-col gap-[15px] mt-6">
            {Array.from({ length: 3 }).map((_e, idx: number) => {
              return (
                <JobDetail>
                  <div key={idx} className="flex w-full items-center ">
                    <div className="w-full flex flex-col md:flex-row gap-4  md:items-center py-4 px-[10px] md:p-4 rounded-xl bg-[#F6F5F4] border border-[#E5E7EB] justify-between">
                      <div className="flex w-full gap-[12px] items-start">
                        <div className="size-14 border-[1.5px] border-[#E7E9EB] rounded-full bg-white p-2">
                          <img
                            src={
                              "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <span className="text-[#231232] font-semibold text-[14px] md:text-[16px]">
                            Site Reliability Engineer (SRE)
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Manager | On Site | VueJS | Google LLC
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Match Score:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              99%
                            </span>
                          </span>
                          <span className=" flex md:hidden text-[#231232] text-[12px] md:text-[14px]">
                            Applied on:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              19th August, 2024
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="flex gap-[8px]"
                      >
                        <button className="bg-[#34D399] hover:bg-[#fff] hover:text-[#34D399] transition ease-in-out duration-500  w-full justify-center md:items-center flex gap-[8px] items-center rounded-full border border-[#059669]  px-[16px] md:w-[180px] py-[10px] text-[14px] font-medium  text-[#fff] text-nowrap">
                          <User size={20} color="#FDE68A" /> Added to Queue
                        </button>
                        <button className="h-[40px] shrink-0 w-[40px] flex justify-center items-center rounded-full bg-[#fff] hover:bg-[#EF4444]/10 transition ease-in-out duration-500 border border-[#D1D5DB]">
                          <Minus color="#EF4444" />
                        </button>
                      </div>
                    </div>
                  </div>
                </JobDetail>
              );
            })}
            {Array.from({ length: 3 }).map((_e, idx: number) => {
              return (
                <JobDetail>
                  <div key={idx} className="flex w-full items-center  ">
                    <div className="w-full flex flex-col md:flex-row gap-4  md:items-center py-4 px-[10px] md:p-4 rounded-xl bg-[#F6F5F4] border border-[#E5E7EB] justify-between">
                      <div className="flex w-full gap-[12px] items-start">
                        <div className="size-14 border-[1.5px] border-[#E7E9EB] rounded-full bg-white p-2">
                          <img
                            src={
                              "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <span className="text-[#231232] font-semibold text-[14px] md:text-[16px]">
                            Site Reliability Engineer (SRE)
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Manager | On Site | VueJS | Google LLC
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Match Score:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              99%
                            </span>
                          </span>
                          <span className=" flex md:hidden text-[#231232] text-[12px] md:text-[14px]">
                            Applied on:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              19th August, 2024
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="flex gap-[8px]"
                      >
                        <Tooltip>
                          <TooltipContent className="bg-[#231232]">
                            <p className="text-[#fff]">Added by ApplyPass</p>
                          </TooltipContent>
                          <TooltipTrigger className="bg-[#FFFFFF] w-full justify-center md:items-center flex gap-[8px] items-center rounded-full md:w-[180px] border border-[#059669]  hover:bg-[#059669]/10 transition ease-in-out duration-500 px-[16px] py-[10px] text-[14px] font-medium  text-[#001E52] text-nowrap">
                            <Plus size={20} color="#001E52" /> Available to
                            Apply
                          </TooltipTrigger>
                        </Tooltip>
                        <button className="h-[40px] shrink-0 w-[40px] flex justify-center items-center rounded-full hover:bg-[#EF4444]/10 transition ease-in-out duration-500 bg-[#fff] border border-[#D1D5DB]">
                          <Minus color="#EF4444" />
                        </button>
                      </div>
                    </div>
                  </div>
                </JobDetail>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="year">
          <div className="flex flex-col gap-[15px] mt-6">
            {Array.from({ length: 3 }).map((_e, idx: number) => {
              return (
                <JobDetail>
                  <div key={idx} className="flex w-full items-center ">
                    <div className="w-full flex flex-col md:flex-row gap-4  md:items-center py-4 px-[10px] md:p-4 rounded-xl bg-[#F6F5F4] border border-[#E5E7EB] justify-between">
                      <div className="flex w-full gap-[12px] items-start">
                        <div className="size-14 border-[1.5px] border-[#E7E9EB] rounded-full bg-white p-2">
                          <img
                            src={
                              "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <span className="text-[#231232] font-semibold text-[14px] md:text-[16px]">
                            Site Reliability Engineer (SRE)
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Manager | On Site | VueJS | Google LLC
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Match Score:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              99%
                            </span>
                          </span>
                          <span className=" flex md:hidden text-[#231232] text-[12px] md:text-[14px]">
                            Applied on:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              19th August, 2024
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="flex gap-[8px]"
                      >
                        <LogInterViewModal>
                          <button className="bg-[#fff] w-full justify-center md:items-center flex gap-[8px] items-center  rounded-full border border-[#6805DA] hover:bg-[#6805DA]/10 transition ease-in-out duration-500 px-[16px] md:w-[180px] py-[10px] text-[14px] font-medium  text-[#231232] text-nowrap">
                            <Star size={20} color="#231232" /> Log Interview
                          </button>
                        </LogInterViewModal>
                      </div>
                    </div>
                  </div>
                </JobDetail>
              );
            })}
            {Array.from({ length: 3 }).map((_e, idx: number) => {
              return (
                <JobDetail>
                  <div key={idx} className="flex w-full items-center  ">
                    <div className="w-full flex flex-col md:flex-row gap-4  md:items-center py-4 px-[10px] md:p-4 rounded-xl bg-[#F6F5F4] border border-[#E5E7EB] justify-between">
                      <div className="flex w-full gap-[12px] items-start">
                        <div className="size-14 border-[1.5px] border-[#E7E9EB] rounded-full bg-white p-2">
                          <img
                            src={
                              "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                            }
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                          <span className="text-[#231232] font-semibold text-[14px] md:text-[16px]">
                            Site Reliability Engineer (SRE)
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Manager | On Site | VueJS | Google LLC
                          </span>
                          <span className="text-[#231232] text-[12px] md:text-[14px]">
                            Match Score:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              99%
                            </span>
                          </span>
                          <span className=" flex md:hidden text-[#231232] text-[12px] md:text-[14px]">
                            Applied on:{" "}
                            <span className="text-[#231232] text-[12px] md:text-[14px] font-bold">
                              19th August, 2024
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="flex gap-[8px]"
                      >
                        <button className="bg-[#3B82F6] hover:bg-[#fff] hover:text-[#3B82F6] transition ease-in-out duration-500 w-full justify-center md:items-center flex gap-[8px] items-center rounded-full md:w-[180px] border border-[#2563EB] px-[16px] py-[10px] text-[14px] font-medium  text-[#fff] text-nowrap">
                          <Star
                            size={20}
                            color="#FFC501"
                            enableBackground="#3B82F6"
                          />{" "}
                          Interview Logged
                        </button>
                      </div>
                    </div>
                  </div>
                </JobDetail>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-center">
        <button className="border border-[#6805DA] hover:bg-[#6805DA]/10 text-[#6805DA] transition ease-in-out duration-500  rounded-full px-[20px] py-[10px]">
          Load More Jobs
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
