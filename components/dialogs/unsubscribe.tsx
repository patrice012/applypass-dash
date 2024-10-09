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

export function Unsubscribe({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="mt-[100px]  md:h-auto m-auto sm:max-w-[700px] max-w-[90%] bg-[#FBFAF8] overflow-scroll md:overflow-auto">
        <DialogHeader className="flex flex-col gap-3 ">
          <DialogTitle className="text-2xl font-bold text-center">
            Cancel plan ?
          </DialogTitle>
          <Separator />
          <div className="flex flex-col gap-2 items-start">
            <DialogDescription className="text-sm text-[#1B1B1B]  text-start">
              We will continue your job applications until {"end_date"}.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col items-start gap-[16px]">
            <label
              htmlFor="name"
              className="text-start text-[#1B1B1B] font-bold text-sm">
              Reason for cancelling:
            </label>
            <label htmlFor="name" className="text-start text-[#1B1B1B] text-sm">
              We apologize if our service falls short. Share your reason for
              cancellation to help us improve. Your feedback matters!
            </label>
            <Textarea
              placeholder="Enter your message here"
              id="username"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex flex-co md:grid md:grid-cols-2 gap-3">
          <DialogClose>
            <Button
              className="bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/50 hover:text-[#fff] py-6 w-full rounded-[10px]"
              type="submit">
              Back
            </Button>
          </DialogClose>
          <Button
            className="py-6 w-full rounded-[10px] border border-[red] bg-[red] hover:bg-[red]/60"
            type="submit">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DeleteAccount({ children }: PropsWithChildren) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="mt-[100px]  md:h-auto m-auto sm:max-w-[700px] max-w-[90%] bg-[#FBFAF8] overflow-scroll md:overflow-auto">
          <DialogHeader className="flex flex-col gap-3 ">
            <DialogTitle className="text-2xl font-bold text-center">
              Delete account ?
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 py-4">
            <div className="flex flex-col items-start gap-[16px]">
              <label
                htmlFor="name"
                className="text-start text-[#1B1B1B] font-bold text-sm">
                Reason for delete account:
              </label>
              <label htmlFor="name" className="text-start text-[#1B1B1B] text-sm">
                We apologize if our service falls short. Share your reason for
                cancellation to help us improve. Your feedback matters!
              </label>
              <Textarea
                placeholder="Enter your message here"
                id="username"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="flex flex-co md:grid md:grid-cols-2 gap-3">
            <DialogClose>
              <Button
                className="bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/50 hover:text-[#fff] py-6 w-full rounded-[10px]"
                type="submit">
                Back
              </Button>
            </DialogClose>
            <Button
              className="py-6 w-full rounded-[10px] border border-[red] bg-[red] hover:bg-[red]/60"
              type="submit">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  
