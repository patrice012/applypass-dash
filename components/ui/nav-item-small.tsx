import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
  title: string;
  icon: ReactNode;
  extras?: ReactNode;
  path?: string;
  isOpen?: boolean;
}

const NavItemSmall = (props: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === `/dashboard${props.path}`;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={`/dashboard${props.path}`}
          className={`${
            isActive ? "bg-[#6805DA] rounded-[10px]" : ""
          } w-full py-3 font-medium text-sm text-white flex flex-col gap-1 items-center justify-start rounded-[100px] text-muted-foreground transition-colors`}
        >
          <div className="size-[25px]">{props.icon}</div>
          <span className="text-[10px] leading-4 truncate ...">{props.title}</span>
          {props.extras}
        </Link>
      </TooltipTrigger>
    </Tooltip>
  );
};

export default NavItemSmall;
