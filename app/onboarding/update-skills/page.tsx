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
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SelectItemsList } from "@/components/onboarding/selectItemsList";
import { Info, X } from "lucide-react";

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

const programmingLanguages = [
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

type CheckboxRef = {
  updateSelectedItems: (newSelectedItems: Set<string>) => void;
  getSelectedItems: () => string[];
  deselectItem: (itemId: string) => void;
};

export default function UpdateSkills() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(16);
  const { toast } = useToast();
  const router = useRouter();

  const [isValidForm, setIsValidForm] = useState(false);
  // Proficient States
  const [proficientList, setProficientList] = useState([
    {
      id: "",
      label: "",
    },
  ]);
  const [searchProficientTerm, setSearchProficientTerm] = useState("");
  const [selectProficientList, setSelectProficientList] = useState<
    { id: string; label: string }[]
  >([]);
  const proficientListCheckboxRef = useRef<CheckboxRef | null>(null);

  // Exposure States
  const [exposureList, setExposureList] = useState([
    {
      id: "",
      label: "",
    },
  ]);
  const [searchExposureTerm, setSearchExposureTerm] = useState("");
  const [selectExposureList, setSelectExposureList] = useState<
    { id: string; label: string }[]
  >([]);
  const exposureListCheckboxRef = useRef<CheckboxRef | null>(null);

  // Update Proficient List based on search term
  useEffect(() => {
    if (!searchProficientTerm) {
      setProficientList([...items]);
    } else {
      const matchesList = [...items].filter((item) =>
        item.label
          .toLowerCase()
          .trim()
          .includes(searchProficientTerm.toLowerCase().trim())
      );
      setProficientList(matchesList);
    }
  }, [searchProficientTerm]);

  // Update Exposure List based on search term
  useEffect(() => {
    if (!searchExposureTerm) {
      setExposureList([...items]);
    } else {
      const matchesList = [...items].filter((item) =>
        item.label
          .toLowerCase()
          .trim()
          .includes(searchExposureTerm.toLowerCase().trim())
      );
      setExposureList(matchesList);
    }
  }, [searchExposureTerm]);

  // Function to update Proficient List
  function updateProficientList(id: string, remove = false) {
    if (remove) {
      proficientListCheckboxRef?.current?.deselectItem(id);
    }
  }

  // Function to update Exposure List
  function updateExposureList(id: string, remove = false) {
    if (remove) {
      exposureListCheckboxRef?.current?.deselectItem(id);
    }
  }

  // select programming language
  const [currentProgrammingLanguage, setCurrentProgrammingLanguage] = useState<
    string | null
  >(null);

  const [optionalProgrammingLanguage, setOptionalProgrammingLanguage] =
    useState<string | null>(null);

  useEffect(() => {
    setIsValidForm(
      selectExposureList.length > 2 &&
        selectProficientList.length > 2 &&
        !!currentProgrammingLanguage
    );
  }, [selectExposureList, selectProficientList, currentProgrammingLanguage]);

  function goToNext() {
    router.push("/onboarding/update-education");
    toast({
      title: "Your data have been recorded",
    });
  }

  console.log(selectExposureList, selectProficientList);

  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <CardTitle className="text-center leading-8 tracking-normal">
            Update Your Skills
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark">
            Let us know your technical skills your best with so we can improve
            your job application quality
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="flex items-center justify-start flex-wrap gap-3">
              {Array.from(selectProficientList).map((item, idx) => {
                return (
                  <Button
                    key={idx}
                    variant={"outline"}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      updateProficientList(item.id, true);
                    }}
                    className="z-40 relative border px-6 py-0 h-10 outline-none bg-transparent  flex items-center justify-between w-min"
                  >
                    <span>{item.label}</span>
                    <X size={16} className="absolute top-[2px] right-[2px]" />
                  </Button>
                );
              })}
            </div>
            <SearchInputWithLabel
              setSearchTerm={setSearchProficientTerm}
              placeholderText={"Search technology"}
            >
              <Label htmlFor="proficient" className="text-[1rem]">
                Proficient
              </Label>
            </SearchInputWithLabel>
            <div>
              <CheckboxFormMultiple
                ref={proficientListCheckboxRef}
                items={proficientList}
                setSelectList={setSelectProficientList}
              >
                <div className="space-y-2">
                  <div className="mt-4 flex items-start gap-3">
                    <Info
                      size={40}
                      className="text-neutral-600 sm:block hidden"
                    />
                    <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                      At ApplyPass, we define proficiency as a skill where you
                      could do an interview to prove your capability on demand.
                      You are comfortable and confident without any advance
                      notice or preparation.
                    </p>
                  </div>
                  <span className="text-neutral-600 text-sm">
                    Select minimum 3 skills.
                  </span>
                </div>
              </CheckboxFormMultiple>
            </div>
          </div>
        </CardContent>

        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="flex items-center justify-start flex-wrap gap-3">
              {Array.from(selectExposureList).map((item, idx) => {
                return (
                  <Button
                    key={idx}
                    variant={"outline"}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      updateExposureList(item.id, true);
                    }}
                    className="z-40 relative border px-6 py-0 h-10 outline-none bg-transparent  flex items-center justify-between w-min"
                  >
                    <span>{item.label}</span>
                    <X size={16} className="absolute top-[2px] right-[2px]" />
                  </Button>
                );
              })}
            </div>
            <SearchInputWithLabel
              setSearchTerm={setSearchExposureTerm}
              placeholderText={"Search technology"}
            >
              <Label htmlFor="exposure" className="text-[1rem]">
                Exposure
              </Label>
            </SearchInputWithLabel>
            <div>
              <CheckboxFormMultiple
                ref={exposureListCheckboxRef}
                items={exposureList}
                setSelectList={setSelectExposureList}
              >
                <div className="space-y-2">
                  <div className="mt-4 flex items-start gap-3">
                    <Info
                      size={40}
                      className="text-neutral-600 sm:block hidden"
                    />
                    <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                      At ApplyPass, we define exposure as having enough
                      familiarity with a skill to understand its basic concepts
                      and functionalities. While you might not be ready to
                      perform it under interview conditions without preparation,
                      you can engage with it and continue learning through
                      experience.
                    </p>
                  </div>
                  <span className="text-neutral-600 text-sm">
                    Select minimum 3 skills.
                  </span>
                </div>
              </CheckboxFormMultiple>
            </div>
          </div>
        </CardContent>

        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>What is your primary programming language?</p>
            </div>
            <div>
              <SelectItemsList
                selectList={programmingLanguages}
                setCurrentSelection={setCurrentProgrammingLanguage}
                placeholder="Choose an option..."
                currentSelection={currentProgrammingLanguage}
              />
              <div className="mt-4 flex items-start gap-3">
                <Info size={40} className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  This means the programming language for which you are
                  strongest and most experienced for your next job. This is the
                  programming language you would likely interview in and the
                  language you would most like to work in next. This is how we
                  will match you to jobs.
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>What is your alternate programming language? (optional)</p>
            </div>
            <div>
              <SelectItemsList
                selectList={programmingLanguages}
                setCurrentSelection={setOptionalProgrammingLanguage}
                placeholder="Choose an option..."
                currentSelection={optionalProgrammingLanguage}
              />
              <div className="mt-4 flex items-start gap-3">
                <Info size={40} className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  This means the programming language you might enjoy working in
                  for your next job. We will use these programming languages to
                  match you to additional jobs.
                </p>
              </div>
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
            {isValidForm ? (
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
