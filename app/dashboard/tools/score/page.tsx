"use client";

import { ScoreMeter } from "@/components/onboarding/scoreMeter";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileScore = () => {
  const router = useRouter();

  return (
    <div className="px-[10px] py-4 lg:py-8 lg:px-8 border">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 xl:gap-20 items-start">
        <button onClick={() => router.back()} className="cursor-pointer">
          <ArrowLeft color="#001E52" size={32} />
        </button>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="font-bold text-[23px]">Your Linkedin Profile Score</h2>
          <div className="bg-[#FBFAF8] rounded-md shadow border">
            <div className="p-4 border-b-2 border-[#DDE3E7]">
              <h1 className="text-[20px] font-semibold">Overview</h1>
            </div>
            <div className="flex flex-col p-4 gap-10">
              <ScoreMeter svgScore={45} />
              <div className="flex flex-col flex-1 gap-3">
                <ScoreDetailItem
                  bg="bg-green-custom"
                  title="Headline"
                  value={36}
                />
                <ScoreDetailItem
                  bg="bg-green-custom"
                  title="Geographic location"
                  value={36}
                />
                <ScoreDetailItem
                  bg="bg-orange-custom"
                  title="About"
                  value={36}
                />
                <ScoreDetailItem
                  bg="bg-pink-custom"
                  title="Top skills"
                  value={36}
                />
                <ScoreDetailItem
                  bg="bg-orange-custom"
                  title={`Bullet points in "Experience" section`}
                  value={36}
                />
              </div>
            </div>
          </div>
          <h4 className="font-bold text-[24px] my-5">Breakdown</h4>
          <div className="flex flex-col md:flex-row items-start w-full md:items-center justify-between">
            <h4 className="text-[18px]">Headline</h4>
            <div className="flex w-full md:max-w-max justify-between gap-4 items-center">
              <Progress value={80} className="w-[180px] h-[10px]" />
              <div className="flex items-center gap-2 md:gap-4">
                <Badge className="bg-[#6805DA]/30 border text-[#6805DA] font-bold px-5 py-[6px]">
                  8/10
                </Badge>
                <ChevronDown />
              </div>
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
            <p>&quot;Good grade&quot; number of points</p>
            <p>&quot;Bad grade&quot; number of points</p>
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
    <div className="flex flex-col items-start md:flex-row py-5 w-full md:items-center justify-between border-t">
      <h4 className="text-[18px]">{title}</h4>
      <div className="flex md:max-w-max w-full justify-between gap-4 items-center">
        <Progress
          indicatorColor="bg-[#FCA069]"
          value={80}
          className="w-[120px] md:w-[180px] h-[10px]"
        />
        <div className="flex items-center gap-2 md:gap-4">
          <Badge className="bg-[#FEDFCD]/30 border border-[#FEDFCD] text-[#064E3B] font-bold px-5 py-[6px]">
            8/10
          </Badge>
          <ChevronDown className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const ScoreDetailItem = ({
  title,
  value,
  bg,
}: {
  title: string;
  value: number;
  bg?: string;
}) => {
  return (
    <div className="flex gap-4 w-full items-center justify-between">
      <div className="flex w-[120px] md:max-w-max flex-1 items-center gap-2 line-clamp-1 truncate ... ">
        <div className={`flex-shrink-0 ${bg} size-4 rounded-md`}></div>
        <h6>{title}</h6>
      </div>
      <span>{value}%</span>
    </div>
  );
};
