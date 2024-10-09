import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";

interface PropsSettingEdit {
  children: ReactNode;
  title?: string;
  isTexterea?: boolean;
}

export function SettingEditModal({
  children,
  title,
  isTexterea,
}: PropsSettingEdit) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="mt-[100px]  md:h-auto m-auto sm:max-w-[700px] max-w-[90%] bg-[#FBFAF8] overflow-scroll md:overflow-auto">
        <DialogHeader className="flex flex-col gap-3 items-start">
          <DialogTitle className="text-2xl font-bold">Edit {title}</DialogTitle>
          <Separator />
        </DialogHeader>
        <div className="flex w-full">
          {isTexterea ? (
            <Textarea
              placeholder={`"Enter your ${title} here"`}
              id="username"
              className="w-full focus:outline-0 hover:outline-0 focus-visible:outline-0"
            />
          ) : (
            <Input
              placeholder={`"Enter your ${title} here"`}
              id="username"
              className="w-full"
            />
          )}
        </div>

        <DialogClose>
          <Button
            className="bg-transparent  text-[#6805DA] border border-[#6805DA] hover:bg-transparent py-6 w-full rounded-[100px]"
            type="submit">
            Edit
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
