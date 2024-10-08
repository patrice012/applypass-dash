"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import Image from "next/image";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useToast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";

export function ContinueWithoutResumeModal({
  children,
}: {
  children: ReactNode;
}) {
  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    router.push("/dashboard/jobs");
    toast({
      title: "Your data have been recorded",
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl py-[5rem]">
        <DialogHeader></DialogHeader>
        <div className="flex flex-col gap-6 items-center">
          <div className="sm:block hidden">
            <Image
              src="/no_resume.png"
              alt="no resume"
              width={190}
              height={220}
            />
          </div>
          <Label className="text-[clamp(1.35rem,3cqw,1.6rem)] text-center">
            Want to go without resume?
          </Label>
          <p className="text-[clamp(1rem,2.5cqw,1.1rem)] text-center">
            You can streamline your process with a resume but understand if you
            don’t have one ready.
          </p>

          <div className="flex items-center justify-center gap-4 w-full mx-auto">
            <DialogClose asChild>
              <Button
                type="button"
                className="w-full py-6 text-center text-[1rem] rounded-full text-[var(--base-hover)] bg-white hover:bg-white/60 border border-[var(--base-hover)] hover:border-[var(--base-hover)] transition-all"
              >
                Go back
              </Button>
            </DialogClose>
            <Button
              onClick={goToNext}
              className="w-full p-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
            >
              Continue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
