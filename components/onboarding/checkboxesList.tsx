"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import { useState } from "react";

export function CheckboxFormMultiple({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  // Initialize a Set in useState for managing the selected items.
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
      return updatedSet;
    });
  };

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
