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
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SelectItemsList } from "@/components/onboarding/selectItemsList";
import { Input } from "@/components/ui/input";

// Define the items as a readonly array to ensure immutability.
const seniorities = [
  { id: "intern-apprentice", label: "Intern, Apprentice" },
  { id: "mid-level", label: "Mid-Level" },
  { id: "staff-principal", label: "Staff, Principal" },
  { id: "director-vp", label: "Director, VP" },
  { id: "junior-entry", label: "Junior, Entry Level" },
  { id: "senior", label: "Senior" },
  { id: "manager-senior-manager", label: "Manager, Senior Manager" },
  { id: "president-c-level", label: "President, C-Level" },
];

export default function SelectSeniorityCheckList() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(8);
  const [itemsList, setItemsList] = useState([
    {
      id: "",
      label: "",
    },
  ]);

  const { toast } = useToast();
  const router = useRouter();

  const [currentRoleYear, setCurrentRoleYear] = useState<number>();
  const [currentPrimaryRoleYear, setCurrentPrimaryRoleYear] =
    useState<number>();
  const [selectList, setSelectList] = useState<{ id: string; label: string }[]>(
    []
  );
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);

  // useEffect to handle automatic selection
  useEffect(() => {
    if (selectList.length === 1) {
      setCurrentSelection(selectList[0].id);
    } else {
      setCurrentSelection(null);
    }
  }, [selectList]);

  function goToNext() {
    router.push("/onboarding/technology");
    toast({
      title: "Your data have been recorded",
    });
  }
  useEffect(() => {
    setItemsList([...seniorities]);
  }, []);

  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
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
                setSelectList={setSelectList}
              >
                <div className="space-y-3">
                  <h5 className="font-semibold">Select your seniority</h5>
                  <h6 className="text-[.9rem]">Select all that apply</h6>
                </div>
              </CheckboxFormMultiple>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>
                Of the experience level you&apos;ve selected, which one best
                represents the types of roles you&apos;re targeting in your job
                search?
              </p>
            </div>
            <div>
              <SelectItemsList
                selectList={selectList}
                setCurrentSelection={setCurrentSelection}
                placeholder="Choose an option..."
                currentSelection={currentSelection}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>
                How many years of full time work experience do you have in
                total?
              </p>
            </div>
            <div>
              <Input
                id="primaryYear"
                type="text"
                inputMode="numeric"
                pattern="\d*"
                placeholder="Enter years of experience (numbers only)"
                value={currentRoleYear}
                onChange={(e) => setCurrentRoleYear(+e.target.value)}
                className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>
                How many years of work experience do you in the primary role
                you&apos;re targeting, as a Frontend Software Engineer in this job
                search?
              </p>
            </div>
            <div>
              <Input
                id="primaryRoleYear"
                type="text"
                inputMode="numeric"
                pattern="\d*"
                placeholder="Enter experience (numbers only)"
                value={currentPrimaryRoleYear}
                onChange={(e) => setCurrentPrimaryRoleYear(+e.target.value)}
                className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center sm:flex-row  flex-col gap-4 w-full">
            <Button
              onClick={() => {
                router.back();
              }}
              className="w-full py-6 text-center text-[1rem] rounded-full text-[var(--base-hover)] bg-white hover:bg-white/60 border border-[var(--base-hover)] hover:border-[var(--base-hover)] transition-all"
            >
              Go back
            </Button>
            {selectList?.length &&
            currentSelection &&
            currentRoleYear &&
            currentPrimaryRoleYear ? (
              <Button
                onClick={goToNext}
                className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
              >
                Continue
              </Button>
            ) : (
              <Button disabled className="w-full py-6 text-[1rem] rounded-full">
                Continue
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
