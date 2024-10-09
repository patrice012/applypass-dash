import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PropsWithChildren } from "react";
import { Separator } from "../ui/separator";


export function JobDetail({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>{children}</DialogTrigger>
      <DialogContent  className="mt-[100px] px-0 gap-0 h-full  m-auto sm:max-h-[90%] sm:max-w-[90%]  bg-[#FBFAF8] ">
        <DialogHeader className="flex flex-col gap-3 items-start px-6">
          <DialogTitle className="text-2xl font-bold">Job detail</DialogTitle>
          <Separator className="bg-[#e4e4e4]" />
        </DialogHeader>
        <div className="flex-1 h-[75vh] overflow-scroll md:overflow-auto">
          <div className="grid col-span-5 grid-cols-5 ">
            <div className="grid col-span-3 border-r border-[#e4e4e4] py-6 px-6">
              <div className="flex flex-col gap-[20px]">
                <span className="font-bold uppercase">Requirements</span>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </span>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </span>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </span>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </span>
              </div>
            </div>
            <div className="grid col-span-2 sticky top-1">
              <div className="grid col-span-3  py-6 px-6">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex gap-[12px] items-center">
                    <div className="size-14 border-[1.5px] border-[#E7E9EB] rounded-full bg-white p-2">
                      <img
                        src={
                          "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">Dropbox Inc.</span>
                      <span>Information and Communication Technology</span>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <Button
                      className="text-[#000]  border border-[#FCAC12] bg-[#FFEDE0] hover:bg-transparent py-6 w-full rounded-[100px]"
                      type="submit">
                      Top Investor
                    </Button>
                    <Button
                      className="bg-[#DCFBE7] text-[#000] border border-[#409348] hover:bg-transparent py-6 w-full rounded-[100px]"
                      type="submit">
                      Venture Backed
                    </Button>
                    <Button
                      className="bg-[#F9E2E2] text-[#000] border border-[#F83E3E] hover:bg-transparent py-6 w-full rounded-[100px]"
                      type="submit">
                      YC Company
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-semibold">Dropbox Inc.</span>
                    <span>
                      Dropbox is a file hosting service operated by the American
                      company Dropbox, Inc., headquartered in San Francisco,
                      California, U.S. that offers cloud storage, file
                      synchronization, personal cloud, and client software.
                    </span>
                  </div>
                  <div className="bg-[#F9F9FA] flex flex-col shadow-sm rounded-[10px] gap-[15px] py-[15px] px-[15px]">
                    <div className="flex w-full justify-between">
                      <span>Headquarters</span>
                      <span className="font-semibold">San Francisco, CA</span>
                    </div>
                    <Separator />
                    <div className="flex w-full justify-between">
                      <span>CEO</span>
                      <span className="font-semibold">Dan Cloe</span>
                    </div>
                    <div className="flex w-full justify-between">
                      <span>Total Funding</span>
                      <span className="font-semibold">22.7 B</span>
                    </div>
                    <div className="flex w-full justify-between">
                      <span>Headcount</span>
                      <span className="font-semibold">1022</span>
                    </div>
                    <div className="flex w-full justify-between">
                      <span>Founded</span>
                      <span className="font-semibold">2010</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
