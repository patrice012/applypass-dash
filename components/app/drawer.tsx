import * as React from "react";
import {
  BookOpen,
  ChevronRight,
  FileText,
  Home,
  LayoutGrid,
  Settings,
} from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import NavItem from "../ui/nav-item";
import NavItemSmall from "../ui/nav-item-small";
import Link from "next/link";

export function CustomDrawer({
  children,
  isOpened,
  showDrawer,
  DrawerOpen,
}: {
  isOpened: boolean;
  showDrawer: boolean;
  DrawerOpen: () => void;
} & React.PropsWithChildren) {
  return (
    <div className="hidden lg:flex">
      {isOpened ? (
        <Drawer direction="left" open={showDrawer} modal={false}>
          <DrawerTrigger asChild>{children}</DrawerTrigger>
          <DrawerContent className="bg-[#231232] px-4 max-w-[250px] h-full rounded-none py-4">
            <SideContent isOpened={isOpened} />
          </DrawerContent>
        </Drawer>
      ) : (
        <div className="hidden lg:flex">
          <Drawer direction="left" open={showDrawer} modal={false}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent className="bg-[#231232] px-4 max-w-[100px] h-full rounded-none py-4">
              <SideContentSmall DrawerClose={DrawerOpen} isOpened={isOpened} />
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
}

export const SideContent = ({ isOpened }: { isOpened: boolean }) => {
  console.log(isOpened, "isOpened");
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
          path="/blogs"
          icon={<FileText strokeWidth={1.5} />}
          title="Blogs"
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
      <div className="mt-auto flex flex-col items-start gap-3 px-3 py-4 bg-[#FFFCE7] text-[#231232] rounded-xl">
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

export const SideContentSmall = ({
  isOpened,
  DrawerClose,
}: {
  isOpened: boolean;
  DrawerClose: () => void;
}) => {
  console.log(isOpened, "isOpened");
  return (
    <>
      <nav className="flex text-sm font-medium text-white flex-col items-center gap-2">
        <div
          onClick={DrawerClose}
          className="absolute cursor-pointer rounded-full flex justify-center items-center bg-[#fff] border shadow-md left-[80px] z-50 size-[40px] top-[35px]">
          <ChevronRight size={30} color="#6805DA" />
        </div>
        <Link href="/dashboard">
          <img src="/logoMin.svg" alt="" className="h-8 mb-[22px]" />
        </Link>
        <NavItemSmall path="" icon={<Home />} title="Dashboard" />
        <NavItemSmall
          path="/courses"
          icon={<BookOpen strokeWidth={1.5} />}
          title="Courses"
          isOpen={isOpened}
        />
        <NavItemSmall
          path="/blogs"
          icon={<FileText strokeWidth={1.5} />}
          title="Blogs"
          isOpen={isOpened}
        />
        <NavItemSmall
          path="/tools"
          icon={<LayoutGrid strokeWidth={1.5} />}
          title="Tools"
          isOpen={isOpened}
        />
        <NavItemSmall
          path="/settings"
          icon={<Settings strokeWidth={1.5} />}
          title="Settings"
          isOpen={isOpened}
        />
      </nav>
    </>
  );
};
