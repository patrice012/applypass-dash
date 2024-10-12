"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SelectItemsList } from "@/components/onboarding/selectItemsList";
import { RadioGroupsMultipe } from "@/components/onboarding/radioGroups";
import { DatePicker } from "@/components/onboarding/datePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// inputMappings
const workStatus = {
  question: "Do you hold United States and/or Canadian citizenship?",
  options: {
    label: "",
    fields: [
      {
        id: "us-citizen",
        label: "I am a United States citizen.",
      },
      {
        id: "canadian-citizen",
        label: "I am a Canadian citizen.",
      },
      {
        id: "non-us-canadian-citizen",
        label: "I do not hold United States or Canadian citizenship.",
      },
      {
        id: "dual-us-canadian-citizen",
        label: "I am both a United States citizen and a Canadian citizen.",
      },
    ],
  },
};

const visaStatus = {
  question:
    "If you do not hold citizenship or permanent residency, what’s your current visa status?",
  options: {
    label: "",
    fields: [
      {
        id: "select-visa-status",
        label: "Select visa status",
      },
      {
        id: "us-permanent-resident",
        label: "US Permanent Resident (Green Card)",
      },
      {
        id: "us-h1b",
        label: "US H1B",
      },
      {
        id: "us-h1b1",
        label: "US H1B1",
      },
      {
        id: "us-f1-opt",
        label: "US F1 OPT",
      },
      {
        id: "us-tn",
        label: "US TN",
      },
      {
        id: "canadian-permanent-resident",
        label: "Canadian Permanent Resident",
      },
      {
        id: "no-us-canadian-visa",
        label: "Do not have a US or Canadian Work Visa",
      },
      {
        id: "other-us-visa",
        label: "Other US Work Visa",
      },
      {
        id: "other-canadian-visa",
        label: "Other Canadian Work Visa",
      },
    ],
  },
  expireDate: "When does your current work visa expire?",
  jobSeeking: {
    question:
      "Are you currently job seeking in a country where you do not hold a valid work visa?",
    options: {
      label: "",
      fields: [
        {
          id: "job-seeking-yes",
          label: "Yes",
        },
        {
          id: "job-seeking-no",
          label: "No",
        },
      ],
    },
  },
};

const securityClearance = {
  question: "Do you hold any relevant security clearance?",
  options: {
    label: "",
    fields: [
      {
        id: "confidential-clearance",
        label: "Confidential",
      },
      {
        id: "secret-clearance",
        label: "Secret",
      },
      {
        id: "top-secret-clearance",
        label: "Top Secret",
      },
      {
        id: "top-secret-sci-clearance",
        label: "Top Secret/SCI",
      },
      {
        id: "top-secret-sci-polygraph-clearance",
        label: "Top Secret/SCI with Polygraph",
      },
      {
        id: "no-clearance",
        label: "Not Applicable",
      },
      {
        id: "expired-clearance",
        label: "Expired Clearance",
      },
    ],
  },
};

type TTargetStatusType = {
  option: string;
  choice: string;
};

export default function WorkStatus() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(60);

  const [targetCitizenshipStatus, setTargetCitizenshipStatus] =
    useState<TTargetStatusType>({
      option: "",
      choice: "",
    });

  const [targetSecurityClearanceStatus, setTargetSecurityClearanceStatus] =
    useState<TTargetStatusType>({
      option: "",
      choice: "",
    });

  type TVisaStatus = TTargetStatusType & {
    expireDate: Date | undefined;
    jobSeeking: { option: string; choice: string };
  };
  const [targetVisaStatus, setTargetVisaStatus] = useState<TVisaStatus>({
    option: "",
    choice: "",
    expireDate: undefined,
    jobSeeking: {
      option: "",
      choice: "",
    },
  });

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    // Set the form's validity
    const selectInput =
      !!targetCitizenshipStatus.choice &&
      !!targetSecurityClearanceStatus.choice;

    const checkVisa =
      targetCitizenshipStatus.choice === "non-us-canadian-citizen"
        ? !!targetVisaStatus.choice &&
          !!(targetVisaStatus.choice != "no-us-canadian-visa"
            ? targetVisaStatus.expireDate
            : true) &&
          !!targetVisaStatus.jobSeeking.choice
        : true;
    setIsValidForm(selectInput && checkVisa);
  }, [
    targetCitizenshipStatus,
    targetSecurityClearanceStatus,
    targetVisaStatus,
  ]);

  console.log(
    targetCitizenshipStatus,
    targetSecurityClearanceStatus,
    targetVisaStatus
  );

  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    if (isValidForm) {
      router.push("/onboarding/blacklist-companies");
      toast({
        title: "Your data have been recorded",
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
            Update Your Work Status
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark">
            Let us know your citizenship and visa status so that we can better
            match you to the jobs
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-4">
              <RadioGroupsMultipe
                items={workStatus.options.fields}
                setSelectList={(data) =>
                  setTargetCitizenshipStatus((prev: TTargetStatusType) => ({
                    ...prev,
                    choice: data?.at(0)?.id || "",
                    option: workStatus.question,
                  }))
                }
                display={"flex flex-col gap-3"}
              >
                <div className="space-y-3">
                  <h5 className="font-semibold">{workStatus.question}</h5>
                  <h6 className="text-[.9rem]">{workStatus.options.label}</h6>
                </div>
              </RadioGroupsMultipe>
              {targetCitizenshipStatus.choice === "non-us-canadian-citizen" ? (
                <div className="space-y-4">
                  <div className="space-y-4">
                    <h5 className="font-semibold">{visaStatus.question}</h5>

                    <div>
                      <SelectItemsList
                        selectList={visaStatus.options.fields}
                        setCurrentSelection={(data) => {
                          setTargetVisaStatus((prev: TVisaStatus) => ({
                            ...prev,
                            choice: data || "",
                            option: visaStatus.question,
                          }));
                        }}
                        placeholder={"Select visa status"}
                        currentSelection={targetVisaStatus.choice}
                      />
                    </div>
                  </div>

                  {targetVisaStatus.choice != "no-us-canadian-visa" ? (
                    <div className="space-y-4">
                      <h5 className="font-semibold">{visaStatus.expireDate}</h5>
                      <DatePicker
                        getDate={(date) => {
                          setTargetVisaStatus((prev: TVisaStatus) => ({
                            ...prev,
                            expireDate: date,
                          }));
                        }}
                      >
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full flex justify-start items-center text-left font-normal border bg-[#FBFAF8] py-6 px-2 rounded-md",
                            !targetVisaStatus.expireDate &&
                              "text-muted-foreground"
                          )}
                        >
                          <CalendarDays className="mr-2 h-4 w-4" />
                          {targetVisaStatus.expireDate ? (
                            format(targetVisaStatus.expireDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </DatePicker>
                    </div>
                  ) : null}

                  <div className="space-y-4">
                    <h5 className="font-semibold">{visaStatus.question}</h5>

                    <div className="flex items-center justify-between sm:flex-row flex-col sm:gap-10 gap-3">
                      {visaStatus.jobSeeking.options.fields.map(
                        (field, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setTargetVisaStatus((prev: TVisaStatus) => ({
                                ...prev,
                                jobSeeking: {
                                  ...prev.jobSeeking,
                                  choice: field.id,
                                  option: visaStatus.jobSeeking.question,
                                },
                              }));
                            }}
                            className={` ${
                              targetVisaStatus.jobSeeking.choice === field.id
                                ? "border-[var(--base)]"
                                : "border"
                            } flex flex-1 items-center  justify-start gap-2 border bg-[#FBFAF8] py-3 px-2 rounded-md sm:w-auto w-full`}
                          >
                            <Checkbox
                              className=""
                              id={field.id}
                              checked={
                                targetVisaStatus.jobSeeking.choice === field.id
                              }
                            />
                            <Label
                              htmlFor={field.id}
                              className={`${
                                targetVisaStatus.jobSeeking.choice === field.id
                                  ? "text-[var(--base)]"
                                  : "text-black"
                              } text-[.95rem] font-normal`}
                            >
                              {field.label}
                            </Label>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              <RadioGroupsMultipe
                items={securityClearance.options.fields}
                setSelectList={(data) =>
                  setTargetSecurityClearanceStatus(
                    (prev: TTargetStatusType) => ({
                      ...prev,
                      choice: data?.at(0)?.id || "",
                      option: securityClearance.question,
                    })
                  )
                }
                display={"flex flex-col gap-3"}
              >
                <div className="space-y-3">
                  <h5 className="font-semibold">
                    {securityClearance.question}
                  </h5>
                  <h6 className="text-[.9rem]">
                    {securityClearance.options.label}
                  </h6>
                </div>
              </RadioGroupsMultipe>
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
