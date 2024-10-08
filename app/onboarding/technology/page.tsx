"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchInputWithLabel } from "@/components/onboarding/search";
import { CheckboxFormMultiple } from "@/components/onboarding/checkboxesList";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";

type CardProps = React.ComponentProps<typeof Card>;

// Define the items as a readonly array to ensure immutability.
const items = [
  { id: "dart", label: "Dart" },
  { id: "elm", label: "Elm" },
  { id: "java", label: "Java" },
  { id: "kotlin", label: "Kotlin" },
  { id: "php", label: "PHP" },
  { id: "r", label: "R" },
  { id: "rust", label: "Rust" },
  { id: "swift", label: "Swift" },
  { id: "elixir", label: "Elixir" },
  { id: "go", label: "Go" },
  { id: "javascript", label: "JavaScript" },
  { id: "objective-c", label: "Objective-C" },
  { id: "python", label: "Python" },
  { id: "ruby", label: "Ruby" },
  { id: "scala", label: "Scala" },
  { id: "typescript", label: "TypeScript" },
];

export default function SelectTechnologyCheckList({
  className,
  ...props
}: CardProps) {
  const [itemsList, setItemsList] = useState([
    {
      id: "",
      label: "",
    },
  ]);

  const [selectCount, setSelectCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      setItemsList(items);
    } else {
      const matchesList = items.filter((item) =>
        item.label
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase().trim())
      );

      setSelectCount(matchesList.length);
      setItemsList(matchesList);
    }
  }, [searchTerm]);

  return (
    <Card
      className={cn(
        "w-[630px] border-none shadow-none bg-[#E5E7EB]",
        className
      )}
      {...props}
    >
      <CardHeader className="flex flex-col gap-[1rem]">
        <CardTitle className="text-center leading-8 tracking-normal">
          Select your Technology
        </CardTitle>
        <CardDescription className="text-center text-[1rem] text-dark">
          You&apos;re nearly there! Just a few more steps to see 1000s of job
          matches.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
        <div className="space-y-5">
          <SearchInputWithLabel
            setSearchTerm={setSearchTerm}
            placeholderText={"Search skills"}
          >
            <Label htmlFor="domain" className="text-[1rem]">
              What are your skills?
            </Label>
          </SearchInputWithLabel>
          <div>
            <CheckboxFormMultiple
              items={itemsList}
              setSelectCount={setSelectCount}
            >
              <span>Select all that apply</span>
            </CheckboxFormMultiple>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4 w-full">
          <Link
            href={"/onboarding/seniority"}
            className="w-full py-3 text-center text-[1rem] rounded-full text-[var(--base-hover)] bg-white hover:bg-white/60 border border-[var(--base-hover)] hover:border-[var(--base-hover)] transition-all"
          >
            Go back
          </Link>
          {selectCount < 1 ? (
            <Button disabled className="w-full py-6 text-[1rem] rounded-full">
              Continue
            </Button>
          ) : (
            <Link
              href={"/onboarding/location"}
              className="w-full py-3 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
            >
              Continue
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
