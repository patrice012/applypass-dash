import {
  Package2,
  LayoutDashboard,
  UsersRound,
  FileUser,
  BookOpen,
} from "lucide-react";
import NavItem from "../ui/nav-item";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-[#231232] text-white sticky top-0 h-screen inset-y-0 left-0 z-10 hidden flex-col lg:flex px-4 py-[22px] max-w-[250px]">
      <nav className="flex text-sm font-medium text-white flex-col items-start gap-2">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <NavItem isActive icon={<LayoutDashboard />} title="Dashboard" />
        <NavItem icon={<UsersRound strokeWidth={1.5} />} title="Community" />
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
          You are in free plan. You can get more of your matches by upgrading
          your plan.
        </p>
        <button className="w-full bg-[#6805DA] py-2 rounded-[100px] text-white">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
