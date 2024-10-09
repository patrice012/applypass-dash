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
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileDrop } from "@/components/onboarding/fileDrop";
import { ContinueWithoutResumeModal } from "@/components/onboarding/ContinueWithoutResumeModal";

export default function SelectSponsorshipAndSalaryCheckList() {
  const [emotion, setEmotion] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  console.log(files, "selected files");

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
          <div className="space-y-4">
            <Label className="text-[1rem] flex items-center justify-start gap-3">
              <span>
                How confident are you in the performance of this resume?
              </span>
            </Label>
            <div>
              <div className="flex items-center sm:flex-row flex-col sm:gap-1 gap-4 justify-between">
                <div
                  className={` ${
                    emotion === "veryConfident"
                      ? "border-[var(--base)]"
                      : "border"
                  } flex items-center gap-2 border bg-[#FBFAF8] py-3 px-2 rounded-md sm:w-auto w-full`}
                >
                  <Checkbox
                    className="hidden"
                    id="veryConfident"
                    checked={emotion === "veryConfident"}
                    onCheckedChange={() => {
                      setEmotion("veryConfident");
                    }}
                  />
                  <span
                    className="cursor-default"
                    onClick={() => {
                      setEmotion("veryConfident");
                    }}
                  >
                    😃
                  </span>
                  <Label
                    htmlFor="veryConfident"
                    className={`${
                      emotion === "veryConfident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-md font-normal`}
                  >
                    Very confident
                  </Label>
                </div>
                <div
                  className={` ${
                    emotion === "confident" ? "border-[var(--base)]" : "border"
                  } flex items-center gap-2 border bg-[#FBFAF8] py-3 px-2 rounded-md sm:w-auto w-full`}
                >
                  <Checkbox
                    className="hidden"
                    id="confident"
                    checked={emotion === "confident"}
                    onCheckedChange={() => {
                      setEmotion("confident");
                    }}
                  />
                  <span
                    className="cursor-default"
                    onClick={() => {
                      setEmotion("confident");
                    }}
                  >
                    🙂
                  </span>
                  <Label
                    htmlFor="confident"
                    className={`${
                      emotion === "confident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-md font-normal`}
                  >
                    Confident
                  </Label>
                </div>
                <div
                  className={` ${
                    emotion === "lessConfident"
                      ? "border-[var(--base)]"
                      : "border"
                  } flex items-center gap-2 border bg-[#FBFAF8] py-3 px-2 rounded-md sm:w-auto w-full`}
                >
                  <Checkbox
                    className="hidden"
                    id="lessConfident"
                    checked={emotion === "lessConfident"}
                    onCheckedChange={() => {
                      setEmotion("lessConfident");
                    }}
                  />
                  <span
                    className="cursor-default"
                    onClick={() => {
                      setEmotion("lessConfident");
                    }}
                  >
                    😔
                  </span>
                  <Label
                    htmlFor="lessConfident"
                    className={`${
                      emotion === "lessConfident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-md font-normal`}
                  >
                    Less confident
                  </Label>
                </div>
                <div
                  className={` ${
                    emotion === "notConfident"
                      ? "border-[var(--base)]"
                      : "border"
                  } flex items-center gap-2 border bg-[#FBFAF8] py-3 px-2 rounded-md sm:w-auto w-full`}
                >
                  <Checkbox
                    className="hidden"
                    id="notConfident"
                    checked={emotion === "notConfident"}
                    onCheckedChange={() => {
                      setEmotion("notConfident");
                    }}
                  />
                  <span
                    className="cursor-default"
                    onClick={() => {
                      setEmotion("notConfident");
                    }}
                  >
                    🥺
                  </span>
                  <Label
                    htmlFor="notConfident"
                    className={`${
                      emotion === "notConfident"
                        ? "text-[var(--base)]"
                        : "text-black"
                    } text-md font-normal`}
                  >
                    Not confident
                  </Label>
                </div>
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
          <Link
            href={"/dashboard/jobs"}
            className="w-full py-3 text-center text-[1rem] rounded-full text-[var(--base-hover)] bg-white hover:bg-white/60 border border-[var(--base-hover)] hover:border-[var(--base-hover)] transition-all"
          >
            Go back
          </Link>
          {isValidForm ? (
            files.length > 0 ? (
              <Link
                href={"/dashboard"}
                className="w-full py-3 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
              >
                Continue
              </Link>
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
