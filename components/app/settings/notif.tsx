import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { MoveLeft } from "lucide-react";

export default function Notif({
  setClick,
  click,
}: {
  setClick: (value: boolean) => void;
  click: boolean;
}) {
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex gap-[10px] items-center">
          {" "}
          {click ? (
            <MoveLeft
              className="flex md:hidden"
              onClick={() => setClick(false)}
              size={18}
            />
          ) : (
            ""
          )}{" "}
          <span className="font-bold text-lg md:text-2xl">Notifications</span>
        </div>
        <span className="text-[#757F87] text-sm md:text-base">
          Edit your notification settings below
        </span>
      </div>

      <div className="flex flex-col gap-[15px] py-[15px]">
        <Separator />
        <div className="grid col-span-3 gap-[10px] md:gap-0 grid-rows-2 md:grid-cols-3 ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[13px] md:text-[15px] font-bold">
              Email notifications
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#757F87] items-center justify-between">
              <span className="text-[13px] md:text-[15px]">
                Allow Sample app to send emails to your inbox
              </span>
              <Switch />
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid col-span-3 gap-[10px] md:gap-0 grid-rows-2 md:grid-cols-3 ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[13px] md:text-[15px] font-bold">
              Push notifications
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#757F87] items-center justify-between">
              <span className="text-[13px] md:text-[15px]">
                Show notifications on mobile phone lock screen
              </span>
              <Switch />
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid col-span-3 gap-[10px] md:gap-0 grid-rows-2 md:grid-cols-3 ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[13px] md:text-[15px] font-bold">
              Enable badge app icon
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#757F87] items-center gap-2 justify-between">
              <span className="text-[13px] md:text-[15px]">
                Show badge app icon on mobile home screen
              </span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
