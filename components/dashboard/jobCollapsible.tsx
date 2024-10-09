"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function JobCollapsible({
  title,
  location,
}: {
  title: string;
  location: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 py-3 rounded-md bg-[#f1f1f1]"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="font-semibold text-[clamp(.9rem,3cqw,1.012rem)]">
          {title}
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}

            <span className="sr-only text-sm">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="px-4 text-sm text-[#3d3d3d]">{location}</div>
      <CollapsibleContent className="space-y-2">
        <div className="px-4 py-2 text-[clamp(.85rem,2.95cqw,1rem)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
          labore! Illo repellendus iste magni corporis mollitia debitis dolor
          placeat quos dolorem doloribus error suscipit modi quis asperiores,
          vitae nostrum. Sunt.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
