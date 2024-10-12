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
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { AutoCompleteInput } from "@/components/onboarding/autocompleteInput";
import { SearchInputForm } from "@/components/onboarding/formSearchInput";

const blacklistCompanies = [
  {
    id: "apple-inc",
    label: "Apple Inc.",
  },
  {
    id: "microsoft",
    label: "Microsoft",
  },
  {
    id: "google",
    label: "Google",
  },
  {
    id: "amazon",
    label: "Amazon",
  },
  {
    id: "meta",
    label: "Meta (Facebook)",
  },
  {
    id: "tesla",
    label: "Tesla",
  },
  {
    id: "ibm",
    label: "IBM",
  },
  {
    id: "intel",
    label: "Intel",
  },
  {
    id: "netflix",
    label: "Netflix",
  },
  {
    id: "salesforce",
    label: "Salesforce",
  },
];

export default function BlackListCompanies() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(60);

  const [otherBlackListCompany, setOtherBlackListCompany] = useState<
    Set<string>
  >(new Set());
  const [blackListCompany, setBlackListCompany] = useState<Set<string>>(
    new Set()
  );
  const [isValidForm, setIsValidForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [autoCompleteItems, setAutoCompleteItems] = useState<
    { id: string; label: string }[]
  >([]);

  function updateCompanyList(
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    value: string,
    remove = false
  ) {
    setter((prevSet) => {
      const updatedSet = new Set(prevSet);
      if (remove) updatedSet.delete(value);
      else updatedSet.add(value);
      return updatedSet;
    });
  }

  function addOtherCompany(value: string, remove = false) {
    updateCompanyList(setOtherBlackListCompany, value, remove);
  }

  function addBlackListCompany(value: string, remove = false) {
    console.log(value, "value");
    updateCompanyList(setBlackListCompany, value, remove);
  }

  useEffect(() => {
    const filterData = Array.from(blacklistCompanies).filter(
      (item: { id: string; label: string }) => item.id.includes(searchTerm)
    );
    setAutoCompleteItems(filterData);
  }, [searchTerm]);

  useEffect(() => {
    setIsValidForm(otherBlackListCompany.size > 0 || blackListCompany.size > 0);
  }, [otherBlackListCompany, blackListCompany]);

  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    if (isValidForm) {
      router.push("/onboarding/update-skills");
      toast({
        title: "Your data has been recorded",
      });
    } else {
      toast({
        title: "Please complete the form",
      });
    }
  }


  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <CardTitle className="text-center leading-8 tracking-normal">
            Update Your Blacklist
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark"></CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-start gap-3 text-[#c20f0f]">
                <Info size={25} />
                <h5 className="font-semibold text-xl">
                  This step is important!
                </h5>
              </div>
              <p className="">
                Don&apos;t forget to blacklist companies you would prefer to
                apply to custom or manually, as well as companies you&apos;d
                like to never apply to at all.
              </p>

              <div className="space-y-3">
                <h6>We suggest you consider blacklisting companies like:</h6>
                <ul className="list-disc ml-5">
                  <li>Past and Current Employers</li>
                  <li>Admired or Precious Companies to You</li>
                  <li>
                    Companies You&apos;d Prefer to Apply to Custom and/or with a
                    Referral
                  </li>
                  <li>Companies You Find Offensive</li>
                  <li>Companies You Disagree with Morally or Ethically</li>
                  <li>
                    Companies You Strongly Dislike or Refuse to Interview with
                  </li>
                </ul>
              </div>
              <p>
                We cannot be held responsible to block you from applying to
                companies that you don&apos;t notify us about here. Please be
                thoughtful and thorough!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card
        className={cn(
          "sm:w-[680px] h-auto border-none shadow-none bg-[#E5E7EB]"
        )}
      >
        <CardContent className="grid gap-0 h-auto rounded-[15px] space-y-5 bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-3">
            <div className="space-y-3 relative">
              <div className="space-y-2">
                <Label className="text-[1rem]">
                  What companies do you want to exclude from your job search?
                </Label>
                <div className="flex items-center justify-start flex-wrap gap-3">
                  {Array.from(blackListCompany).map((company, idx) => {
                    return (
                      <Button
                        key={idx}
                        variant={"outline"}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addBlackListCompany(company, true);
                        }}
                        className="z-40 relative border px-6 py-0 h-10 outline-none bg-transparent  flex items-center justify-between w-min"
                      >
                        <span>{company}</span>
                        <X
                          size={16}
                          className="absolute top-[2px] right-[2px]"
                        />
                      </Button>
                    );
                  })}
                </div>
              </div>
              <AutoCompleteInput
                items={autoCompleteItems}
                placeholder={"Search company"}
                setSearchTerm={setSearchTerm}
                setInputValue={(value: string) => addBlackListCompany(value)}
                className={`${searchTerm.length > 0 ? "block" : "hidden"}`}
                setDefault={false}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-start flex-wrap gap-3">
              {Array.from(otherBlackListCompany).map((company, idx) => {
                return (
                  <Button
                    key={idx}
                    variant={"outline"}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addOtherCompany(company, true);
                    }}
                    className="z-40 relative border px-6 py-0 h-10 outline-none bg-transparent  flex items-center justify-between w-min"
                  >
                    <span>{company}</span>
                    <X size={16} className="absolute top-[2px] right-[2px]" />
                  </Button>
                );
              })}
            </div>

            <SearchInputForm
              onSubmit={(value: string) => addOtherCompany(value)}
            />
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
