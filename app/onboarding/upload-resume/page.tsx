"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileDrop } from "@/components/onboarding/fileDrop";
import { X, File } from "lucide-react";
import { ScoreMeter } from "@/components/onboarding/scoreMeter";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function SelectSponsorshipAndSalaryCheckList() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(100);
  const [emotion, setEmotion] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  console.log(files, "selected files");

  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    router.push("/onboarding/current-status ");
    toast({
      title: "Your data have been recorded",
    });
  }

  useEffect(() => {
    if (files.length) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [files.length]);

  console.log(files);
  return (
    <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
      <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
        <CardTitle className="text-center leading-8 tracking-normal">
          Upload Your Resume
        </CardTitle>
        <CardDescription className="text-center text-[1rem] text-dark">
          We’d like to review and evaluate your best and most up to date resume.
          This resume should be the one you intend to use for your current job
          search.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
        <div className="space-y-6">
          {files.length ? (
            <div className="space-y-5">
              <div className="flex items-start justify-between border-b pb-3 relative">
                <div className="flex items-center  gap-3 ">
                  <File size={22} className="text-[#414141]" />
                  <div className="sm:w-auto w-[80%]">
                    <h5 className="truncate max-w-[400px] text-wrap">{files[0]?.name}</h5>
                    <span className="text-sm text-[#414141]">
                      {files[0]?.size
                        ? `${(files[0].size / 1024 / 1024).toFixed(
                            2
                          )} MB. Complete`
                        : "Size unavailable"}
                    </span>
                  </div>
                </div>
                <Button
                  variant={"link"}
                  onClick={() => {
                    setFiles([]);
                  }}
                  className="absolute -top-2 -right-3"
                >
                  <X size={20} className="text-[#414141]" />
                </Button>
              </div>

              <div className="py-6">
                <h5 className="text-[clamp(.85rem,3cqw,1.0125rem)] sm:text-start text-center">
                  Your Current resume Score:
                </h5>
                <div className="flex items-center justify-between sm:flex-row flex-col sm:gap-3 gap-6 w-full">
                  <div className="flex-1">
                    <ScoreMeter svgScore={66} />
                  </div>
                  <div className="space-y-1 flex-1 ">
                    <div className="flex items-center justify-between sm:gap-3 gap-6 w-ful">
                      <div className="flex items-center justify-center gap-1">
                        <div className="h-3 w-3 rounded-sm bg-[#FEED35]"></div>
                        <span>Length</span>
                      </div>
                      <span>43%</span>
                    </div>
                    <div className="flex items-center justify-between sm:gap-3 gap-6 w-ful">
                      <div className="flex items-center justify-center gap-1">
                        <div className="h-3 w-3 rounded-sm bg-[#EF462C]"></div>
                        <span>Key Optimization</span>
                      </div>
                      <span>0%</span>
                    </div>
                    <div className="flex items-center justify-between sm:gap-3 gap-6 w-ful">
                      <div className="flex items-center justify-center gap-1">
                        <div className="h-3 w-3 rounded-sm bg-[#EF462C]"></div>
                        <span>Content</span>
                      </div>
                      <span>14%</span>
                    </div>
                    <div className="flex items-center justify-between sm:gap-3 gap-6 w-ful">
                      <div className="flex items-center justify-center gap-1">
                        <div className="h-3 w-3 rounded-sm bg-[#FAB031]"></div>
                        <span>Organization</span>
                      </div>
                      <span>25%</span>
                    </div>
                    <div className="flex items-center justify-between sm:gap-3 gap-6 w-ful">
                      <div className="flex items-center justify-center gap-1">
                        <div className="h-3 w-3 rounded-sm bg-[#FAB031]"></div>
                        <span>Misc</span>
                      </div>
                      <span>33%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <Label className="text-[1rem] flex items-center justify-start gap-3">
                <span>Upload Your Resume</span>
              </Label>
              <FileDrop setFiles={setFiles} />
              <div className="flex items-center justify-between sm:flex-row flex-col gap-3 text-neutral-600 text-[.95rem]">
                <span>Supported formats: PDF only</span>
                <span>Maximum file size: 10MB</span>
              </div>
            </div>
          )}
          <div className="space-y-4">
            <Label className="text-[1rem] flex items-center justify-start gap-3">
              <span>
                How confident are you in the performance of this resume?
              </span>
            </Label>
            <div>
              <div className="flex items-center sm:flex-row flex-col sm:gap-1 gap-4 justify-between">
                <Button
                  variant={"outline"}
                  onClick={() => {
                    setEmotion("veryConfident");
                  }}
                  className={`${
                    emotion === "veryConfident"
                      ? "border-[var(--base)]"
                      : "border"
                  } flex items-center justify-start gap-2 border bg-[#FBFAF8] py-6 px-2 rounded-md sm:w-auto w-full`}
                >
                  <span>😃</span>
                  <Label
                    className={`${
                      emotion === "veryConfident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-[.95rem] font-normal`}
                  >
                    Very confident
                  </Label>
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    setEmotion("confident");
                  }}
                  className={`${
                    emotion === "confident" ? "border-[var(--base)]" : "border"
                  } flex items-center justify-start gap-2 border bg-[#FBFAF8] py-6 px-2 rounded-md sm:w-auto w-full`}
                >
                  <span>🙂</span>
                  <Label
                    className={`${
                      emotion === "confident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-[.95rem] font-normal`}
                  >
                    Confident
                  </Label>
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    setEmotion("lessConfident");
                  }}
                  className={`${
                    emotion === "lessConfident"
                      ? "border-[var(--base)]"
                      : "border"
                  } flex items-center justify-start gap-2 border bg-[#FBFAF8] py-6 px-2 rounded-md sm:w-auto w-full`}
                >
                  <span>😔</span>
                  <Label
                    className={`${
                      emotion === "lessConfident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-[.95rem] font-normal`}
                  >
                    Less confident
                  </Label>
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    setEmotion("notConfident");
                  }}
                  className={`${
                    emotion === "notConfident"
                      ? "border-[var(--base)]"
                      : "border"
                  } flex items-center justify-start gap-2 border bg-[#FBFAF8] py-6 px-2 rounded-md sm:w-auto w-full`}
                >
                  <span>🥺</span>
                  <Label
                    className={`${
                      emotion === "notConfident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-[.95rem] font-normal`}
                  >
                    Not confident
                  </Label>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="premiumResume" />
            <label
              htmlFor="premiumResume"
              className="text-md font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I’d like to discuss a premium resume makeover with the ApplyPass
              team
            </label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center sm:flex-row  flex-col gap-4 w-full">
          <Button
            onClick={() => {
              router.back();
            }}
            className="w-full py-6 text-center text-[1rem] rounded-full text-[var(--base-hover)] bg-white hover:bg-white/60 border border-[var(--base-hover)] hover:border-[var(--base-hover)] transition-all"
          >
            Go back
          </Button>
          {isValidForm ? (
            <Button
              onClick={goToNext}
              className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
            >
              Continue
            </Button>
          ) : (
            <Button disabled className="w-full py-6 text-[1rem] rounded-full">
              Continue
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
