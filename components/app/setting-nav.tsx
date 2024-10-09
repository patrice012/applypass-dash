"use client";

import { PropsWithChildren } from "react";
import { Separator } from "@radix-ui/react-separator";

const SettingsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-[48px] py-[32px] gap-[36px] flex flex-col w-full">
      <span className="font-bold">Settings</span>
      <Separator />
      <div className="flex gap-[60px]">
        <div className="bg-[#fff] p-[30px] rounded-[10px] gap-[10px] shadow-md">
          <span>Account Settings</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
