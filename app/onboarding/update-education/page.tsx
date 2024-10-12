"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { AddEducationModal } from "@/components/onboarding/educationModal";

export default function UpdateEducation() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(16);
  const { toast } = useToast();
  const router = useRouter();

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    setIsValidForm(true);
  }, []);

  function goToNext() {
    router.push("/onboarding/update-profile");
    toast({
      title: "Your data have been recorded",
    });
  }

  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <CardTitle className="text-center leading-8 tracking-normal">
            Update Your Education
          </CardTitle>
          {/* <CardDescription className="text-center text-[1rem] text-dark"></CardDescription> */}
        </CardHeader>

        <AddEducationModal>
          <Button
            variant={"link"}
            className="flex items-center text-lg hover:no-underline  hover:text-[var(--base)] mb-3"
          >
            <Plus size={26} className="mr-2 h-4 w-4" />
            Add education
          </Button>
        </AddEducationModal>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-3">
            {/* College /Instituition */}
            <h5 className="text-xl font-semibold">UL</h5>
            {/* degree, major */}
            <p className="text-neutral-700">Master of Science, mathematics</p>
            <div className="text-neutral-700">
              {/* Enrollment Date - Graduation Date  --> date*/}
              <span>2023</span> - <span>present</span>
            </div>
          </div>
        </CardContent>

        <CardContent className="grid rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <AddEducationModal>
            <Button
              variant={"link"}
              className="flex items-center text-lg hover:no-underline  hover:text-[var(--base)]"
            >
              <Plus size={26} className="mr-2 h-4 w-4" />
              Add education
            </Button>
          </AddEducationModal>
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
    </div>
  );
}
