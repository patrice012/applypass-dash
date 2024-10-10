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
import { Label } from "@/components/ui/label";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SelectItemsList } from "@/components/onboarding/selectItemsList";

// Define the items as a readonly array to ensure immutability.
const items = [
  { id: "android", label: "Android Software Engineer" },
  { id: "bi-analyst", label: "BI Developer/Analyst" },
  { id: "cloud-engineer", label: "Cloud Engineer" },
  { id: "data-analyst", label: "Data Analyst" },
  { id: "data-scientist", label: "Data Scientist" },
  { id: "frontend", label: "Frontend Software Engineer" },
  { id: "game-dev", label: "Game Developer" },
  { id: "ios", label: "iOS Software Engineer" },
  { id: "mobile", label: "Mobile Software Engineer" },
  { id: "sales-engineer", label: "Sales Engineer" },
  { id: "security-engineer", label: "Security Engineer" },
  { id: "solutions-architect", label: "Solutions Architect" },
  { id: "tpm", label: "Technical Program Manager" },
  { id: "backend", label: "Backend Software Engineer" },
  { id: "cloud-architect", label: "Cloud Architect" },
  { id: "customer-success", label: "Customer Success Engineer" },
  { id: "data-engineer", label: "Data Engineer" },
  { id: "embedded", label: "Embedded Software Engineer" },
  { id: "fullstack", label: "Fullstack Software Engineer" },
  { id: "hardware", label: "Hardware Engineer" },
  { id: "ml-engineer", label: "Machine Learning Engineer" },
  { id: "product-manager", label: "Product Manager" },
  {
    id: "sdet",
    label:
      "SDET (Software Development Engineer in Test) / QA Automation Engineer (Quality Assurance)",
  },
  {
    id: "sre-devops",
    label: "Site Reliability Engineer (SRE) / DevOps Engineer",
  },
  { id: "support-engineer", label: "Support Engineer" },
  { id: "tech-project-manager", label: "Technical Project Manager" },
];

export default function SelectDomainsCheckList() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(16);
  const [itemsList, setItemsList] = useState([
    {
      id: "",
      label: "",
    },
  ]);
  const { toast } = useToast();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

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
    router.push("/onboarding/seniority");
    toast({
      title: "Your data have been recorded",
    });
  }

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

      setSelectList(matchesList);
      setItemsList(matchesList);
    }
  }, [searchTerm]);

  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <CardTitle className="text-center leading-8 tracking-normal">
            Welcome, start by selecting the types of roles you are targeting so
            we can show your matches!
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark">
            You’re minutes away from more matches and more interviews
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <SearchInputWithLabel
              setSearchTerm={setSearchTerm}
              placeholderText={"Search Domain"}
            >
              <Label htmlFor="domain" className="text-[1rem]">
                What are your domains?
              </Label>
            </SearchInputWithLabel>
            <div>
              <CheckboxFormMultiple
                items={itemsList}
                setSelectList={setSelectList}
              >
                <span>Select all that apply (select min. 2 domains)</span>
              </CheckboxFormMultiple>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="domain" className="text-[1rem]">
                Primary role
              </Label>
              <p>
                Of the roles you’ve selected, which one is the primary role you
                are targeting in this job search?
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
        <CardFooter>
          {selectList?.length && currentSelection ? (
            <Button
              onClick={goToNext}
              className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
            >
              Continue
            </Button>
          ) : (
            <Button disabled className="w-full py-6 text-[1rem] rounded-full">
              Select two domains to continue
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
