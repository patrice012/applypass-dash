import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

export function TooltipWrapper({
  TooltipTriggerNode,
  TooltipContentNode,
}: {
  TooltipTriggerNode: ReactNode;
  TooltipContentNode: ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{TooltipTriggerNode}</TooltipTrigger>
        <TooltipContent>{TooltipContentNode}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
