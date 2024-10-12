import { Loader } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function ButtonLoading({ className }: { className?: string }) {
  return (
    <Button
      variant={"outline"}
      disabled
      className={cn(
        "w-auto py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all",
        className
      )}
    >
      <Loader className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}
