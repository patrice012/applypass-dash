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
import { useStepSlider } from "@/components/hooks/useStepSlider";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PricingModal } from "@/components/onboarding/pricingModal";

export default function GetStarted() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(100);

  const [canGetStarted, setCanGetStarted] = useState(false);

  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <div className="items-center justify-center hidden sm:flex mt-4">
            <img
              src="/congratulations-high-five.svg"
              width={200}
              height={200}
              alt=""
              className="mx-auto"
            />
          </div>
          <CardTitle className="text-center leading-8 tracking-normal">
            Let&apos;s Get Started!
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark">
            Thank you for completing your profile. Your information has been
            sent into our job matching optimization system and we will begin
            applying to jobs for you in the next 1 - 3 business days.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div
            className={` ${
              canGetStarted ? "border-[var(--base)]" : "border"
            } flex flex-1 items-center  justify-start gap-2 border bg-[#FBFAF8] py-3 px-2 rounded-md sm:w-auto w-full`}
          >
            <Checkbox
              className=""
              id="get-started"
              checked={canGetStarted}
              onCheckedChange={(isChecked: boolean) =>
                setCanGetStarted(isChecked)
              }
            />
            <Label
              htmlFor="get-started"
              className={`${
                canGetStarted ? "text-[var(--base)]" : "text-black"
              } text-[.95rem] font-normal`}
            >
              I understand that by submitting this form, I am ready to start
              autoapplying...
            </Label>
          </div>
        </CardContent>
      </Card>

      <CardFooter>
        {canGetStarted ? (
          <PricingModal>
            <Button className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all">
              Continue
            </Button>
          </PricingModal>
        ) : (
          <Button disabled className="w-full py-6 text-[1rem] rounded-full">
            Continue
          </Button>
        )}
      </CardFooter>
    </div>
  );
}
