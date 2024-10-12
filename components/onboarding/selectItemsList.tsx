import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { generateRandomFourDigit } from "@/helpers/utils";

export function SelectItemsList({
  selectList,
  setCurrentSelection,
  placeholder,
  label,
  currentSelection,
}: {
  selectList: { id: string; label: string }[];
  setCurrentSelection: (data: string | null) => void;
  placeholder: string;
  label?: string;
  currentSelection?: string | null;
}) {
  return (
    <Select
      value={currentSelection || undefined}
      onValueChange={(value) => {
        setCurrentSelection(value);
      }}
    >
      <SelectTrigger className="py-6 text-md bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label || "Select"}</SelectLabel>
          {selectList.map((item) => {
            const num = generateRandomFourDigit();
            return (
              <SelectItem key={`${item.id}-${num}`} value={item.id}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
