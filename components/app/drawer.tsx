import * as React from "react";
import {
  BookOpen,
  FileUser,
  Home,
  LayoutGrid,
  Settings,
  UsersRound,
} from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import NavItem from "../ui/nav-item";
import Link from "next/link";

export function CustomDrawer({
  children,
  isOpened,
}: { isOpened: boolean } & React.PropsWithChildren) {
  return (
    <div className="hidden lg:flex">
      <Drawer direction="left" open={isOpened} modal={false}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent className="bg-[#231232] px-4 max-w-[250px] h-full rounded-none py-4">
          <SideContent isOpened={isOpened} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export const SideContent = ({ isOpened }: { isOpened: boolean }) => {
  return (
    <>
      <nav className="flex text-sm font-medium text-white flex-col items-start gap-2">
        <Link href="/dashboard">
          <img src="/logowhite.svg" alt="" className="h-8 mb-[22px]" />
        </Link>
        <NavItem path="" icon={<Home />} title="Dashboard" />
        <NavItem
          path="/courses"
          icon={<BookOpen strokeWidth={1.5} />}
          title="Courses"
        />
        <NavItem
          path="/community"
          icon={<UsersRound strokeWidth={1.5} />}
          title="Community"
        />
        <NavItem
          path="/tools"
          icon={<LayoutGrid strokeWidth={1.5} />}
          title="Tools"
        />
        <NavItem
          path="/settings"
          icon={<Settings strokeWidth={1.5} />}
          title="Settings"
        />
      </nav>
      <div className="mt-auto flex flex-col items-start gap-3 px-3 sm:py-4 bg-[#FFFCE7] text-[#231232] rounded-xl">
        <img src="/gold.svg" alt="Gold" className="-ml-1 size-[64px]" />
        <h1 className="text-base font-bold">
          Want to apply to more of your matches ?
        </h1>
        <p className="text-xs font-normal">
          You are in free plan. You can get more of your matches by upgrading
          your plan.
        </p>
        <button className="w-full bg-[#6805DA] py-2 rounded-[100px] text-white">
          Upgrade Now
        </button>
      </div>
    </>
  );
};
