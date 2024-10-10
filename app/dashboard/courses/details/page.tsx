/* eslint-disable @next/next/no-img-element */
"use client";

import { CourseItemSmall } from "@/components/app/course-item";
import CustomPlayer from "@/components/app/player/player";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutValue, loremValue } from "@/helpers/constants";
import { courseItemImages } from "@/helpers/mock";
import { NotepadText, UsersRound } from "lucide-react";
import Video from "next-video";

const CourseDetailsPage = () => {
  return (
    <main className="main-content gap-3 md:gap-5 relative">
      <div className="flex gap-2 md:gap-3">
        <span className="text-[#1165EF] font-semibold">Courses</span>
        <span className="font-normal text-base text-gray-400">|</span>
        <span className="font-semibold">Salary Negotiation Part-01</span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-4">
        <div className="flex gap-3 flex-col xl:col-span-2">
          <div className="w-full">
            <Video
              className="object-cover"
              as={CustomPlayer}
              src="https://res.cloudinary.com/demo/video/upload/fl_splice,l_video:cld_opener_preroll_sd,so_0/what_is_cloudinary_sd.mp4"
            />
          </div>
          <h1 className="font-semibold text-xl">Salary Negotiation Part-01</h1>
          <div className="flex flex-col gap-2 md:flex-row items-start lg:items-center justify-between">
            <div className="flex gap-2 items-center">
              <img
                className="object-cover size-10 rounded-full"
                src={courseItemImages[0]}
                alt="CourseItem image"
              />
              <div className="flex flex-col items-start">
                <h4 className="font-semibold text-[15px]">Jeffrey Connor</h4>
                <span className="text-[#757F87] font-normal text-[13px]">
                  Content | Applypass
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <img src="/star.svg" alt="" />
                <span className="font-bold text-base">4.9</span>
              </div>
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
          <Tabs defaultValue="overview">
            <TabsList className="gap-7 text-[19px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="ressources">Ressources</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p className="text-[#6B7280] text-base font-normal text-justify">
                {loremValue}
              </p>
            </TabsContent>
            <TabsContent value="transcript">
              <p className="text-[#6B7280] text-base font-normal text-justify">
                {loremValue}
              </p>
            </TabsContent>
            <TabsContent value="ressources">
              <p className="text-[#6B7280] text-base font-normal text-justify">
                {loremValue}
              </p>
            </TabsContent>
          </Tabs>
        </div>
        <div className="sticky top-0 flex flex-col gap-4 bg-[#F9FAFB] rounded-md p-2 lg:p-5">
          <h1 className="font-bold text-[23px]">Recommended Courses</h1>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CourseItemSmall
                key={idx}
                image={courseItemImages[0]}
                style={LayoutValue.Line}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetailsPage;
