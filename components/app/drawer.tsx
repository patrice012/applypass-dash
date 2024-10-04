import * as React from "react";
import {
  BookOpen,
  FileUser,
  LayoutDashboard,
  Package2,
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
          <nav className="flex text-sm font-medium text-white flex-col items-start gap-2">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <NavItem isActive icon={<LayoutDashboard />} title="Dashboard" />
            <NavItem
              icon={<UsersRound strokeWidth={1.5} />}
              title="Community"
            />
            <NavItem
              extras={
                <div className="text-xs px-2 py-1 bg-[#DF4425] rounded-2xl">
                  38/100
                </div>
              }
              icon={<FileUser strokeWidth={1.5} />}
              title="Resume Score"
            />
            <NavItem icon={<BookOpen strokeWidth={1.5} />} title="Courses" />
          </nav>
          <div className="mt-auto flex flex-col items-start gap-4 px-4 sm:py-4 bg-[#FFFCE7] text-[#231232] rounded-xl">
            <h1 className="text-base font-bold">
              Want to apply to more of your matches ?
            </h1>
            <p className="text-xs font-normal">
              You are in free plan. You can get more of your matches by
              upgrading your plan.
            </p>
            <button className="w-full bg-[#6805DA] py-2 rounded-[100px] text-white">
              Upgrade Now
            </button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
