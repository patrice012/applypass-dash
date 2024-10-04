import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  BookOpen,
  CircleDashed,
  CircleHelp,
  CircleUser,
  CircleX,
  FileUser,
  LayoutDashboard,
  LogOut,
  Menu,
  NotepadText,
  Package2,
  Settings,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "../ui/button";
import { ReactNode, useState } from "react";
import { CustomDrawer } from "./drawer";
import NavItem from "../ui/nav-item";
import Link from "next/link";

const Header = ({
  isDrawerOpen,
  handleOpenDrawer,
}: {
  isDrawerOpen: boolean;
  handleOpenDrawer: () => void;
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <header className="bg-white py-4 z-30 border-b justify-between flex items-center px-[10px] lg:px-8 w-full">
        <div className="hidden lg:flex items-center gap-3">
          <CustomDrawer isOpened={isDrawerOpen}>
            <button onClick={handleOpenDrawer}>
              <Menu size={32} className="cursor-pointer" />
            </button>
          </CustomDrawer>

          <h3 className="hidden lg:block text-2xl text-[#231232] font-bold">
            Good evening, David
          </h3>
        </div>
        <div className="lg:hidden">
          <Menu size="32" onClick={toggleSidebar} />
        </div>
        <div className="flex items-center gap-4">
          <button className="size-[35px] lg:size-10 flex items-center rounded-full border cursor-pointer">
            <Bell className="m-auto" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                  className="overflow-hidden size-[36px] lg:size-10 rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="flex flex-col gap-1 p-4"
            >
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full size-12 border border-[#6805DA]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={48}
                    height={48}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
                <div className="flex flex-col items-start">
                  <h2 className="font-semibold">David Hopper</h2>
                  <p>david@applypass.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownItem
                icon={<Settings size={20} />}
                title="Account setting"
              />
              <DropdownItem
                icon={<CircleUser size={20} />}
                title="Job Matching profile"
              />
              <DropdownMenuSeparator />
              <div className="flex items-center">
                <DropdownItem
                  icon={<CircleDashed size={20} />}
                  title="Job Application Status"
                />
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 peer-checked:bg-[#0f7afd]"></div>
                </label>
              </div>
              <DropdownMenuSeparator />
              <DropdownItem
                icon={<NotepadText size={20} />}
                title="Terms & Conditions"
              />
              <DropdownItem
                icon={<ShieldCheck size={20} />}
                title="Privacy & Policy"
              />
              <DropdownItem
                icon={<CircleHelp size={20} />}
                title="Help And Support"
              />
              <DropdownMenuSeparator />
              <Link href="/">
                <DropdownItem icon={<LogOut size={20} />} title="Sign Out" />
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div>
        {isSidebarOpen && (
          <div className="bg-[#5150509c] fixed right-0 top-0 w-full h-full z-[1000] lg:hidden">
            <div className="flex max-w-[320px] flex-col  right-0  top-0 bg-[#231232] overflow-auto  h-full p-4 relative">
              <nav className="flex text-sm font-medium text-white flex-col items-start gap-2">
                <Link
                  href="#"
                  className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                  <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <NavItem
                  isActive
                  icon={<LayoutDashboard />}
                  title="Dashboard"
                />
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
                <NavItem
                  icon={<BookOpen strokeWidth={1.5} />}
                  title="Courses"
                />
              </nav>
              <div className="mt-auto flex flex-col items-start gap-4 p-4 bg-[#FFFCE7] text-[#231232] rounded-xl">
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
              <div
                className="absolute top-0 right-0 z-20 p-2"
                onClick={toggleSidebar}
              >
                <CircleX strokeWidth={1.5} size={28} color="#fff" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

const DropdownItem = ({ title, icon }: { title: string; icon: ReactNode }) => {
  return (
    <DropdownMenuLabel className="flex items-center gap-3 cursor-pointer">
      {icon}
      <span className="font-normal">{title}</span>
    </DropdownMenuLabel>
  );
};
