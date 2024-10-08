"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import { useState } from "react";

export function CheckboxFormMultiple({
  items,
  setSelectCount,
}: {
  items: { id: string; label: string }[];
  setSelectCount: (value: number) => void;
}) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  // Handler to toggle checkbox state
  const handleCheckboxChange = (itemId: string, isChecked: boolean) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSet = new Set(prevSelectedItems);
      if (isChecked) {
        updatedSet.add(itemId);
      } else {
        updatedSet.delete(itemId);
      }

      // Filter items based on selected items
      const filteredItems = items.filter((item) => updatedSet.has(item.id));
      setSelectCount(filteredItems.length);

      return updatedSet;
    });
  };

  console.log(selectedItems, "selectedItems", items);

  return (
    <div>
      <div className="mb-4">
        <span>Select all that apply (select min. 2 domains)</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items?.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Checkbox
              className=""
              id={item.id}
              checked={selectedItems.has(item.id)}
              onCheckedChange={(isChecked: boolean) =>
                handleCheckboxChange(item.id, isChecked)
              }
            />
            <Label
              htmlFor={item.id}
              className={`${
                selectedItems.has(item.id) ? "text-[var(--base)]" : "text-black"
              } text-md font-normal`}
            >
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
