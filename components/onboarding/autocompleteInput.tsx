"use client";

import { cn } from "@/lib/utils";
import {
  Command,
  // CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useMemo, useState } from "react";

export function AutoCompleteInput({
  setInputValue,
  setSearchTerm,
  items,
  className,
  placeholder,
  setDefault = false,
}: {
  setInputValue: (value: string) => void;
  setSearchTerm: (value: string) => void;
  items: { id: string; label: string }[];
  className?: string;
  placeholder: string;
  setDefault?: boolean;
}) {
  const filteredItems = useMemo(() => (items.length > 0 ? items : []), [items]);
  const [localSearch, setLocalSearch] = useState("");
  const [closeModal, setCloseModal] = useState(false);

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    if (setDefault) setInputValue(value);
    setLocalSearch(value);
    setCloseModal(false);
  };

  const handleItemSelect = (item: { id: string; label: string }) => {
    setInputValue(item.id);
    setLocalSearch(item.label);
    setCloseModal(true);
  };

  return (
    <Command
      className={cn(
        "rounded-md md:min-w-[450px] shadow-none bg-[#FBFAF8] border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
      )}
    >
      <CommandInput
        onValueChange={handleInputChange}
        value={localSearch}
        placeholder={placeholder}
        className="text-[1rem] w-full outline-none"
      />

      <CommandList className={cn("w-full", className)}>
        {filteredItems.length > 0 && !closeModal
          ? filteredItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleItemSelect(item)}
              >
                <span>{item.label}</span>
              </CommandItem>
            ))
          : null}
      </CommandList>
    </Command>
  );
}
