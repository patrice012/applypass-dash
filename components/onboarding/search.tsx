import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export function SearchInputWithLabel({
  setSearchTerm,
}: {
  setSearchTerm: (value: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearchTerm]);

  return (
    <div className="grid w-full items-center gap-5">
      <Label htmlFor="domain" className="text-[1rem]">
        What are your domains?
      </Label>
      <div className="relative">
        <Input
          type="text"
          id="domain"
          placeholder="Search Domain"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-[1rem] pl-12 w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
        />
        <Search className="absolute top-3 left-3" />
      </div>
    </div>
  );
}
