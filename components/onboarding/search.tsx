import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

export function SearchInputWithLabel({
  setSearchTerm,
  placeholderText,
  children,
}: {
  setSearchTerm: (value: string) => void;
  placeholderText: string;
  children: ReactNode;
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
      {children}
      <div className="relative">
        <Input
          type="text"
          id="domain"
          placeholder={placeholderText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-[1rem] pl-10 w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
        />
        <Search size={17} className="absolute top-4 left-3 text-[#8f8f8f]" />
      </div>
    </div>
  );
}
