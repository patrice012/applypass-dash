"use client";

import { CourseItemSmall } from "@/components/app/course-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutValue } from "@/helpers/constants";
import { courseItemImages } from "@/helpers/mock";
import { NotepadText, UsersRound } from "lucide-react";

const CourseDetailsPage = () => {
  return (
    <main className="main-content relative">
      <div className="flex gap-6">
        <span className="text-[#1165EF] font-semibold">Courses</span>
        <span className="font-semibold">Salary Negotiation Part-01</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-3 col-span-2">
          <div className="w-full border h-[480px]"></div>
          <h1 className="font-semibold text-xl">Salary Negotiation Part-01</h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img
                className="object-cover size-10 rounded-full border"
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
          <Tabs defaultValue="overview" className="border">
            <TabsList className="gap-7 text-[19px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="ressources">Ressources</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p className="text-[#6B7280] text-base font-normal">
                It doe gillywater snape back black charm them. Feint out sirius
                bat together bean crossbow spider banana. Bezoar scabbers
                blubber to potter. Clean which so mimbletonia creature you
                leprechaun would full-moon. Palominos snitch which cabbage
                bertie squashy glory turban. Soul blood servant nose doe. Duel
                tart shunpike hippogriff scarlet fenrir. Sight knew brass die
                yaxley forbidden marauder’s for padma hiya.
              </p>
            </TabsContent>
            <TabsContent value="transcript">
              Change your password here.
            </TabsContent>
            <TabsContent value="ressources">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <div className="sticky top-0 flex flex-col gap-4 bg-[#F9FAFB] rounded-[16px] p-5">
          <h1 className="font-bold text-[23px]">Recommended Courses</h1>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 6 }).map((e, idx) => (
              <CourseItemSmall
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
