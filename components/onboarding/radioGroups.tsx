"use client";

import { Label } from "../ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupsMultipe({
  items,
  setSelectList,
  children,
  display = "grid",
}: {
  items: { id: string; label: string }[];
  setSelectList: (
    value: {
      id: string;
      label: string;
    }[]
  ) => void;
  children: React.ReactNode;
  display?: string;
}) {
  const [selectedItem, setSelectedItem] = useState("");

  // Handler to toggle checkbox state
  const handleRadioChange = (itemId: string) => {
    setSelectedItem(itemId);
    // Filter items based on selected items
    const filteredItems = items.filter(
      (item) => itemId?.trim() === item.id?.trim()
    );
    setSelectList(filteredItems);
  };

  return (
    <div>
      <div className="mb-4">{children}</div>
      <div
        className={`sm:grid-cols-2 gap-4 sm:max-h-[22rem] max-h-[35rem]
      overflow-y-auto ${display}`}
      >
        <RadioGroup onValueChange={(value: string) => handleRadioChange(value)}>
          {items?.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <RadioGroupItem
                className=""
                id={item.id}
                value={item.id}
                checked={selectedItem === item.id}
              />
              <Label
                htmlFor={item.id}
                className={`${
                  selectedItem === item.id
                    ? "text-[var(--base)]"
                    : "text-black"
                } text-md font-normal`}
              >
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
