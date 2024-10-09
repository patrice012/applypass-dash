"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { useRouter } from "next/navigation";

const UploadResumeModal = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevState) => {
        if (prevState < 100) {
          return prevState + 10;
        } else {
          clearInterval(timer);
          return prevState + 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 mt-[100px] h-full md:h-auto m-auto sm:max-w-[640px] max-w-[90%] bg-[#FBFAF8] overflow-scroll md:overflow-auto">
        <DialogHeader className="py-4 px-5 flex flex-col items-start border-b">
          <DialogTitle className="text-2xl font-bold">
            Check Your Linkedin Score
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 px-5 flex flex-col gap-4">
          <Input
            placeholder="Enter your linkedin url"
            id="name"
            className="col-span-3"
          />

          <h4 className="self-center">Or</h4>

          <div className="w-full py-12 border-2 bg-[#F3F4F6] rounded-md border-dashed relative">
            <div className="flex flex-col items-center justify-center gap-2 m-auto">
              <img className="size-20" src="/upload.svg" alt="" />
              <h5 className="font-normal text-lg text-[#1F2937]">
                Select a file to upload or drag it here
              </h5>
              <p className="font-normal text-sm text-[#1F2937]">
                Upload and get your resume scored. Maximum file size 100MB.
              </p>
            </div>
            <input
              className="cursor-pointer absolute top-0 w-full h-full opacity-0"
              type="file"
            />
          </div>

          <div className="flex flex-col gap-3 bg-[#FFF5F0] p-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[#1F2937]">Uploading Document</h4>
              <div className="flex items-center justify-center bg-[#06C00D] rounded-full size-5">
                <Check size={16} color="white" />
              </div>
            </div>
            <Progress value={progress} className="w-full h-2" />
            <div className="flex items-center justify-between">
              <span>demofile.pdf - 10M</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
        <DialogFooter className="px-5 pb-4 flex flex-col md:grid md:grid-cols-2 gap-3">
          <DialogClose>
            <Button
              className="bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-transparent py-6 w-full rounded-[100px]"
              type="submit"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="py-6 w-full rounded-[100px] border border-[#6805DA] bg-[#6805DA] hover:bg-[#6805DA]/60"
            onClick={() => router.push("/dashboard/tools/score")}
          >
            Get Score
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadResumeModal;
