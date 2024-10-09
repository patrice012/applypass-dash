import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PropsWithChildren } from "react";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";

export function LogInterViewModal({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="mt-[100px] h-full md:h-auto m-auto sm:max-w-[700px] max-w-[90%] bg-[#FBFAF8] overflow-scroll md:overflow-auto">
        <DialogHeader className="flex flex-col gap-3 items-start">
          <DialogTitle className="text-2xl font-bold">
            Log Interview
          </DialogTitle>
          <Separator />
          <div className="flex flex-col gap-2 items-start">
            <DialogDescription className="text-lg text-[#231232] font-semibold text-start">
              Congratulations on interview you got with ApplyPass.
            </DialogDescription>
            <DialogDescription className="text-start">
              With this data, we will work to get you more matches like this in
              the future.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className="text-start">
              When did you receive the offer for this interview ?
            </label>
            <Input
              placeholder="Enter number"
              id="name"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="username" className="text-start">
              What is your interview date ?
            </label>
            <Input
              placeholder="Enter number"
              id="username"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="username" className="text-start">
              What excites and/or doesn&apos;t excites you about this interview
              ?
            </label>
            <Textarea
              placeholder="Enter your message here"
              id="username"
              className="col-span-3"
            />
          </div>
          <div className="flex gap-3">
            <Checkbox id="terms" className="" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I want to avoid applying to any other listings for this company
            </label>
          </div>
        </div>
        <DialogFooter className="flex flex-co md:grid md:grid-cols-2 gap-3">
          <DialogClose>
            <Button
              className="bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-transparent py-6 w-full rounded-[100px]"
              type="submit"
            >
              Maybe later
            </Button>
          </DialogClose>
          <Button
            className="py-6 w-full rounded-[100px] border border-[#6805DA] bg-[#6805DA] hover:bg-[#6805DA]/60"
            type="submit"
          >
            Log Interview
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
