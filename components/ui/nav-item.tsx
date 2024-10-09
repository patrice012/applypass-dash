import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
  title: string;
  icon: ReactNode;
  extras?: ReactNode;
  path?: string;
}

const NavItem = (props: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/dashboard${props.path}`;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={`/dashboard${props.path}`}
          className={`${
            isActive ? "bg-[#6805DA] rounded-[100px]" : ""
          } w-full pl-4 py-3 font-medium text-sm text-white flex gap-3 items-center justify-start rounded-[100px] text-muted-foreground transition-colors`}
        >
          <div className="size-[22px]">{props.icon}</div>
          <span className="text-sm leading-4 truncate ...">{props.title}</span>
          {props.extras}
        </Link>
      </TooltipTrigger>
    </Tooltip>
  );
};

export default NavItem;
