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
import { CheckboxFormMultiple } from "@/components/onboarding/checkboxesList";
import { useEffect, useState } from "react";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

// Define the items as a readonly array to ensure immutability.
const items = [
  { id: "intern-apprentice", label: "Intern, Apprentice" },
  { id: "mid-level", label: "Mid-Level" },
  { id: "staff-principal", label: "Staff, Principal" },
  { id: "director-vp", label: "Director, VP" },
  { id: "junior-entry", label: "Junior, Entry Level" },
  { id: "senior", label: "Senior" },
  { id: "manager-senior-manager", label: "Manager, Senior Manager" },
  { id: "president-c-level", label: "President, C-Level" },
];

export default function SelectSeniorityCheckList({
  className,
  ...props
}: CardProps) {
  const [itemsList, setItemsList] = useState([
    {
      id: "",
      label: "",
    },
  ]);

  useEffect(() => {
    setItemsList([...items]);
  }, []);

  const [selectCount, setSelectCount] = useState(0);

  return (
    <Card
      className={cn(
        "sm:w-[630px] border-none shadow-none bg-[#E5E7EB]",
        className
      )}
      {...props}
    >
      <CardHeader className="flex flex-col gap-[1rem]">
        <CardTitle className="text-center leading-8 tracking-normal">
          Select your Seniority
        </CardTitle>
        <CardDescription className="text-center text-[1rem] text-dark">
          Just a few more steps to see your matches and get more interviews
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
        <div className="space-y-5">
          <div>
            <CheckboxFormMultiple
              items={itemsList}
              setSelectCount={setSelectCount}
            >
              <div className="space-y-3">
                <h5 className="font-semibold">Select your seniority</h5>
                <h6 className="text-[.9rem]">Select all that apply</h6>
              </div>
            </CheckboxFormMultiple>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center sm:flex-row  flex-col gap-4 w-full">
          <Link
            href={"/onboarding/"}
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
              href={"/onboarding/technology"}
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