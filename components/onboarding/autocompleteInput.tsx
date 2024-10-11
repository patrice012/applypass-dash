"use client";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useMemo } from "react";

export function AutoCompleteInput({
  setInputValue,
  setSearchTerm,
  items,
  className,
  placeholder,
}: {
  setInputValue: (value: string) => void;
  setSearchTerm: (value: string) => void;
  items: { id: string; label: string }[];
  className?: string;
  placeholder: string;
}) {
  const filteredItems = useMemo(() => (items.length > 0 ? items : []), [items]);

  return (
    <Command
      className={cn(
        "rounded-md md:min-w-[450px] shadow-none bg-[#FBFAF8] border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
      )}
    >
      <CommandInput
        onValueChange={(value) => setSearchTerm(value)}
        placeholder={placeholder}
        className="text-[1rem] w-full outline-none"
      />

      <CommandList className={cn("w-full", className)}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <CommandItem
              key={item.id}
              onSelect={() => {
                setInputValue(item.id);
              }}
            >
              <span>{item.label}</span>
            </CommandItem>
          ))
        ) : (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
      </CommandList>
    </Command>
  );
}
