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
import { Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { FileDrop } from "@/components/onboarding/fileDrop";
import { ContinueWithoutResumeModal } from "@/components/onboarding/ContinueWithoutResumeModal";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function SelectSponsorshipAndSalaryCheckList() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(32);
  const [requireSponsorship, setRequireSponsorship] = useState(false);
  const [notRequireSponsorship, setNotRequireSponsorship] = useState(false);
  const [currentSalary, setCurrentSalaryRange] = useState(0);
  const SALARY_RANGE = {
    min: 0,
    max: 300,
  };
  const [isValidForm, setIsValidForm] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  console.log(files, "selected files");

  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    router.push("/dashboard/jobs");
    toast({
      title: "Your data have been recorded",
    });
  }

  useEffect(() => {
    if (currentSalary > 0 && (requireSponsorship || notRequireSponsorship)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [requireSponsorship, notRequireSponsorship, currentSalary]);

  console.log(currentSalary, files, requireSponsorship, notRequireSponsorship);
  return (
    <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
      <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
        <CardTitle className="text-center leading-8 tracking-normal">
          Sponsorship & Salary
        </CardTitle>
        <CardDescription className="text-center text-[1rem] text-dark">
          Finalize your details to see your matches and earn more interviews
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <Label className="text-[1rem]">
              Do you require visa sponsorship to work in the US?
            </Label>
            <div className="flex items-center justify-between sm:flex-row flex-col gap-3">
              <div
                className={` ${
                  requireSponsorship ? "border-[var(--base)]" : "border"
                } flex items-center gap-2 border bg-[#FBFAF8] p-3 rounded-md sm:w-auto w-full`}
              >
                <Checkbox
                  className=""
                  id="requireSponsorship"
                  checked={requireSponsorship}
                  onCheckedChange={() => {
                    setRequireSponsorship(true);
                    setNotRequireSponsorship(false);
                  }}
                />
                <Label
                  htmlFor="requireSponsorship"
                  className={`${
                    requireSponsorship ? "text-[var(--base)]" : "text-black"
                  } text-md font-normal`}
                >
                  Yes, I require sponsorship
                </Label>
              </div>
              <div
                className={` ${
                  notRequireSponsorship ? "border-[var(--base)]" : "border"
                } flex items-center gap-2 border bg-[#FBFAF8] p-3 rounded-md sm:w-auto w-full`}
              >
                <Checkbox
                  className=""
                  id="notRequireSponsorship"
                  checked={notRequireSponsorship}
                  onCheckedChange={() => {
                    setNotRequireSponsorship(true);
                    setRequireSponsorship(false);
                  }}
                />
                <Label
                  htmlFor="notRequireSponsorship"
                  className={`${
                    notRequireSponsorship ? "text-[var(--base)]" : "text-black"
                  } text-md font-normal`}
                >
                  No, I do not require sponsorship
                </Label>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Label className="text-[1rem]">
              What is your expected base salary?
            </Label>
            <div className="space-y-3.5">
              <Slider
                defaultValue={[0]}
                max={SALARY_RANGE.max}
                min={SALARY_RANGE.min}
                step={1}
                className="focus-visible::ring-offset-0"
                onValueChange={(value) => {
                  console.log(value, "value");
                  setCurrentSalaryRange(value?.at(0) || 0);
                }}
              />
              <div className="flex items-center justify-between text-[.83rem] text-[#646464]">
                <span>${SALARY_RANGE.min}k</span>
                <span>${currentSalary}k</span>
                <span>${SALARY_RANGE.max}k</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Label className="text-[1rem] flex items-center justify-start gap-3">
              <span>Upload Your Resume (Optional)</span>
              <Info size={18} className="text-neutral-600" />
            </Label>
            <FileDrop setFiles={setFiles} />
            <div className="flex items-center justify-between sm:flex-row flex-col gap-3 text-neutral-600 text-[.95rem]">
              <span>Supported formats: PDF only</span>
              <span>Maximum file size: 10MB</span>
            </div>
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
            files.length > 0 ? (
              <Button
                onClick={goToNext}
                className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
              >
                Continue
              </Button>
            ) : (
              <ContinueWithoutResumeModal>
                <Button className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all">
                  Continue
                </Button>
              </ContinueWithoutResumeModal>
            )
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
