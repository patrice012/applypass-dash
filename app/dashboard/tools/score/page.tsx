"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileScore = () => {
  const router = useRouter();

  return (
    <div className="px-[10px] py-4 lg:py-8 lg:px-8 border">
      <div className="flex gap-20 items-start">
        <button onClick={() => router.back()} className="cursor-pointer">
          <ArrowLeft color="#001E52" size={32} />
        </button>
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="font-bold text-[23px]">Your Linkedin Profile Score</h2>
          <h4 className="font-bold text-[24px] my-5">Available Tools</h4>
          <div className="flex w-full items-center justify-between">
            <h4 className="text-[18px]">Headline</h4>
            <div className="flex gap-4 items-center">
              <Progress value={80} className="w-[180px] h-[10px]" />
              <Badge className="bg-[#6805DA]/30 border text-[#6805DA] font-bold px-5 py-[6px]">
                8/10
              </Badge>
              <ChevronDown />
            </div>
          </div>
          <div className="bg-[#6805DA]/20 p-4 rounded-lg border border-[#6805DA]/30">
            <p className="text-sm">
              Dolor dictum lorem porttitor vulputate non elementum sit nunc.
              Potenti vitae et aliquam maecenas gravida. Vitae ultricies lectus
              congue feugiat enim sed vehicula. Sed vestibulum feugiat lectus
              fermentum non aliquam nunc. Tincidunt donec erat at nec nunc vel
              donec purus. Rhoncus sem adipiscing dapibus viverra risus varius
              ultrices quis.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>"Good grade" number of points</p>
            <p>"Bad grade" number of points</p>
          </div>
          <div className="flex flex-col">
            <IndicatorContainer title="Geographic location" />
            <IndicatorContainer title="About" />
            <IndicatorContainer title="Top Skills" />
            <IndicatorContainer
              title={`Bullet points in "Experience" section.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScore;

const IndicatorContainer = ({ title }: { title: string }) => {
  return (
    <div className="flex py-5 w-full items-center justify-between border-t">
      <h4 className="text-[18px]">{title}</h4>
      <div className="flex gap-4 items-center">
        <Progress
          indicatorColor="bg-[#FCA069]"
          value={80}
          className="w-[180px] h-[10px]"
        />
        <Badge className="bg-[#FEDFCD]/30 border border-[#FEDFCD] text-[#064E3B] font-bold px-5 py-[6px]">
          8/10
        </Badge>
        <ChevronDown className="cursor-pointer" />
      </div>
    </div>
  );
};
