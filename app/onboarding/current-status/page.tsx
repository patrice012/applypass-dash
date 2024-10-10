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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SelectItemsList } from "@/components/onboarding/selectItemsList";
import { Input } from "@/components/ui/input";
import { RadioGroupsMultipe } from "@/components/onboarding/radioGroups";

// inputMappings
const jobsMotivation = {
  question: "What is your motivation for your current job search?",
  options: {
    label: "Choose all that apply",
    fields: [
      {
        id: "return-to-past-career-same-level",
        label:
          "I want to return to my past career path and position at the same level",
      },
      {
        id: "explore-change-career-path",
        label: "I want to explore or change my career path to something new",
      },
      {
        id: "advance-seniority-compensation",
        label:
          "I want to advance in seniority and/or compensation in my current career path",
      },
      {
        id: "better-company-culture-product-manager",
        label: "I want a better company, culture, product and/or manager",
      },
    ],
  },
};

const employmentStatus = {
  question: "Are you currently employed?",
  options: {
    label: "",
    fields: [
      {
        id: "employed-yes",
        label: "Yes",
      },
      {
        id: "employed-no",
        label: "No",
      },
    ],
  },
  yesFields: {
    currentCompanyName: "What’s your current company?",
    roleInTargetJobSearch: {
      question:
        "Are you currently employed in the primary or alternate role you’re targeting in this job search?",
      options: {
        label: "",
        fields: [
          {
            id: "role-target-yes",
            label: "Yes",
          },
          {
            id: "role-target-no",
            label: "No",
          },
        ],
      },
      yesFields: {
        question:
          "Have you already tried to negotiate a raise or promotion in your current role?",
        options: {
          label: "",
          fields: [
            {
              id: "raise-negotiation-yes",
              label: "Yes",
            },
            {
              id: "raise-negotiation-no",
              label: "No",
            },
          ],
        },
      },
    },
  },
  noFields: {
    unemploymentDuration: "How long have you been unemployed?",
    unemploymentReason: {
      question: "What was the reason or source of your unemployment?",
      options: {
        label: "Choose all that apply",
        fields: [
          {
            id: "laid-off",
            label: "I was laid off from my previous position",
          },
          {
            id: "fired",
            label: "I was fired from my previous position",
          },
          {
            id: "disability-injury-illness",
            label: "I was on disability, injured or ill",
          },
          {
            id: "left-job-by-choice-no-new-job",
            label: "I left my previous position by choice without a new job",
          },
        ],
      },
    },
  },
};

const salaryDetails = {
  recentSalary: "What’s your current or most recent salary?",
  desiredNextSalary: "What’s your desired next salary?",
};

type TTargetEmployementStatus = {
  option: string;
  yesFields: {
    company: string;
    roleInTargetJobSearch: string;
    roleInTargetJobSearchOption: string;
  };
  noFields: {
    unemploymentDuration: number;
    unemploymentReason: { id: string; label: string }[];
  };
};

export default function SelectLocationCheckList() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(60);

  const [targetJobsMotivation, setTargetJobsMotivation] =
    useState<{ id: string; label: string }[]>();

  const [targetEmploymentStatus, setTargetEmploymentStatus] =
    useState<TTargetEmployementStatus>({
      option: "",
      yesFields: {
        company: "",
        roleInTargetJobSearch: "",
        roleInTargetJobSearchOption: "",
      },
      noFields: {
        unemploymentDuration: 0,
        unemploymentReason: [{ id: "", label: "" }],
      },
    });

  const [targetSalaryDetails, setTargetSalaryDetails] = useState({
    recentSalary: 0,
    desiredNextSalary: 0,
  });

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    // Check if the user has selected job motivation
    const selectJobsMotivation = !!targetJobsMotivation?.length;

    // Check if the user has filled out salary details (allow 0 as valid)
    const selectSalaryDetails =
      targetSalaryDetails.recentSalary !== 0 &&
      targetSalaryDetails.desiredNextSalary !== 0;

    let selectEmploymentStatus = false;

    // Corrected comparison for employment status
    if (targetEmploymentStatus.option === "employed-yes") {
      selectEmploymentStatus =
        !!targetEmploymentStatus.yesFields.company &&
        !!targetEmploymentStatus.yesFields.roleInTargetJobSearch &&
        !!targetEmploymentStatus.yesFields.roleInTargetJobSearchOption;
    } else if (targetEmploymentStatus.option === "employed-no") {
      selectEmploymentStatus =
        targetEmploymentStatus.noFields.unemploymentDuration > 0 &&
        targetEmploymentStatus.noFields.unemploymentReason.length > 0;
    }

    // Set the form's validity
    setIsValidForm(
      selectJobsMotivation && selectSalaryDetails && selectEmploymentStatus
    );
  }, [targetJobsMotivation, targetEmploymentStatus, targetSalaryDetails]);

  console.log(
    targetJobsMotivation,
    targetEmploymentStatus,
    targetSalaryDetails,
    "target jobs"
  );

  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    if (isValidForm) {
      router.push("/onboarding/sponsorship");
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
            Update Your Current Status
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark">
            Share a bit of information on your current employment status which
            will help us apply to jobs for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div>
              <CheckboxFormMultiple
                items={jobsMotivation.options.fields}
                setSelectList={setTargetJobsMotivation}
                display={"flex flex-col gap-3"}
              >
                <div className="space-y-3">
                  <h5 className="font-semibold">{jobsMotivation.question}</h5>
                  <h6 className="text-[.9rem]">
                    {jobsMotivation.options.label}
                  </h6>
                </div>
              </CheckboxFormMultiple>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-4">
              <Label className="text-[1rem]">{employmentStatus.question}</Label>
              {employmentStatus.options.label ? (
                <h6 className="text-[.9rem]">
                  {employmentStatus.options.label}
                </h6>
              ) : null}
              <div className="flex items-center justify-between sm:flex-row flex-col sm:gap-10 gap-3">
                {employmentStatus.options.fields.map((field, idx) => (
                  <Button
                    variant={"outline"}
                    key={idx}
                    onClick={() => {
                      setTargetEmploymentStatus(
                        (prev: TTargetEmployementStatus) => ({
                          ...prev,
                          option: field.id,
                        })
                      );
                    }}
                    className={` ${
                      targetEmploymentStatus.option === field.id
                        ? "border-[var(--base)]"
                        : "border"
                    } flex flex-1 items-center  justify-start gap-2 border bg-[#FBFAF8] py-6 px-2 rounded-md sm:w-auto w-full`}
                  >
                    <Checkbox
                      className=""
                      id={field.id}
                      checked={targetEmploymentStatus.option === field.id}
                    />
                    <Label
                      htmlFor={field.id}
                      className={`${
                        targetEmploymentStatus.option === field.id
                          ? "text-[var(--base)]"
                          : "text-black"
                      } text-[.95rem] font-normal`}
                    >
                      {field.label}
                    </Label>
                  </Button>
                ))}
              </div>
            </div>

            {targetEmploymentStatus.option === "employed-yes" ? (
              <>
                <div className="space-y-4">
                  <p>{employmentStatus.yesFields.currentCompanyName}</p>

                  <div>
                    <SelectItemsList
                      selectList={[{ id: "text", label: "lorem" }]}
                      setCurrentSelection={(data) => {
                        setTargetEmploymentStatus(
                          (prev: TTargetEmployementStatus) => ({
                            ...prev,
                            yesFields: {
                              ...prev.yesFields,
                              company: data || "",
                            },
                          })
                        );
                      }}
                      placeholder="Choose an option..."
                      currentSelection={
                        targetEmploymentStatus.yesFields?.company
                      }
                    />
                  </div>
                  <div>
                    <Input
                      id="otherComapny"
                      type="text"
                      placeholder="Other company (enter if not found in above list)"
                      value={targetEmploymentStatus.yesFields?.company}
                      onChange={(e) => {
                        setTargetEmploymentStatus(
                          (prev: TTargetEmployementStatus) => ({
                            ...prev,
                            yesFields: {
                              ...prev.yesFields,
                              company: e.target.value,
                            },
                          })
                        );
                      }}
                      className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="text-[1rem]">
                    {employmentStatus.yesFields.roleInTargetJobSearch.question}
                  </Label>
                  {employmentStatus.yesFields.roleInTargetJobSearch.options
                    .label ? (
                    <h6 className="text-[.9rem]">
                      {
                        employmentStatus.yesFields.roleInTargetJobSearch.options
                          .label
                      }
                    </h6>
                  ) : null}
                  <div className="flex items-center justify-between sm:flex-row flex-col sm:gap-10 gap-3">
                    {employmentStatus.yesFields.roleInTargetJobSearch.options.fields.map(
                      (field, idx) => (
                        <Button
                          variant={"outline"}
                          key={idx}
                          onClick={() => {
                            setTargetEmploymentStatus(
                              (prev: TTargetEmployementStatus) => ({
                                ...prev,
                                yesFields: {
                                  ...prev.yesFields,
                                  roleInTargetJobSearch: field.id,
                                },
                              })
                            );
                          }}
                          className={` ${
                            targetEmploymentStatus.yesFields
                              ?.roleInTargetJobSearch === field.id
                              ? "border-[var(--base)]"
                              : "border"
                          } flex flex-1 items-center  justify-start gap-2 border bg-[#FBFAF8] py-6 px-2 rounded-md sm:w-auto w-full`}
                        >
                          <Checkbox
                            className=""
                            id={field.id}
                            checked={
                              targetEmploymentStatus.yesFields
                                ?.roleInTargetJobSearch === field.id
                            }
                          />
                          <Label
                            htmlFor={field.id}
                            className={`${
                              targetEmploymentStatus.yesFields
                                ?.roleInTargetJobSearch === field.id
                                ? "text-[var(--base)]"
                                : "text-black"
                            } text-[.95rem] font-normal`}
                          >
                            {field.label}
                          </Label>
                        </Button>
                      )
                    )}
                  </div>
                </div>

                {targetEmploymentStatus.yesFields?.roleInTargetJobSearch ===
                "role-target-yes" ? (
                  <>
                    <div className="space-y-4">
                      <Label className="text-[1rem]">
                        {
                          employmentStatus.yesFields.roleInTargetJobSearch
                            .yesFields.question
                        }
                      </Label>
                      {employmentStatus.yesFields.roleInTargetJobSearch
                        .yesFields.options.label ? (
                        <h6 className="text-[.9rem]">
                          {
                            employmentStatus.yesFields.roleInTargetJobSearch
                              .yesFields.options.label
                          }
                        </h6>
                      ) : null}

                      <div className="flex items-center justify-between sm:flex-row flex-col sm:gap-10 gap-3 ">
                        {employmentStatus.yesFields.roleInTargetJobSearch.yesFields.options.fields.map(
                          (field, idx) => (
                            <Button
                              variant={"outline"}
                              key={idx}
                              onClick={() => {
                                setTargetEmploymentStatus(
                                  (prev: TTargetEmployementStatus) => ({
                                    ...prev,
                                    yesFields: {
                                      ...prev.yesFields,
                                      roleInTargetJobSearchOption: field.id,
                                    },
                                  })
                                );
                              }}
                              className={` ${
                                targetEmploymentStatus.yesFields
                                  ?.roleInTargetJobSearchOption === field.id
                                  ? "border-[var(--base)]"
                                  : "border"
                              } flex flex-1 items-center  justify-start gap-2 border bg-[#FBFAF8] py-6 px-2 rounded-md sm:w-auto w-full`}
                            >
                              <Checkbox
                                className=""
                                id={field.id}
                                checked={
                                  targetEmploymentStatus.yesFields
                                    ?.roleInTargetJobSearchOption === field.id
                                }
                              />
                              <Label
                                htmlFor={field.id}
                                className={`${
                                  targetEmploymentStatus.yesFields
                                    ?.roleInTargetJobSearchOption === field.id
                                    ? "text-[var(--base)]"
                                    : "text-black"
                                } text-[.95rem] font-normal`}
                              >
                                {field.label}
                              </Label>
                            </Button>
                          )
                        )}
                      </div>
                    </div>
                  </>
                ) : null}
              </>
            ) : null}

            {targetEmploymentStatus.option === "employed-no" ? (
              <>
                <div className="space-y-4">
                  <p>{employmentStatus.noFields.unemploymentDuration}</p>
                  <div>
                    <Input
                      id="unemploymentDuration"
                      type="text"
                      inputMode="numeric"
                      pattern="\d*"
                      placeholder="Enter number of months (numbers only)"
                      value={
                        targetEmploymentStatus.noFields?.unemploymentDuration
                      }
                      onChange={(e) => {
                        setTargetEmploymentStatus(
                          (prev: TTargetEmployementStatus) => ({
                            ...prev,
                            noFields: {
                              ...prev.noFields,
                              unemploymentDuration: +e.target.value,
                            },
                          })
                        );
                      }}
                      className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <RadioGroupsMultipe
                    items={
                      employmentStatus.noFields.unemploymentReason.options
                        .fields
                    }
                    setSelectList={(data) =>
                      setTargetEmploymentStatus(
                        (prev: TTargetEmployementStatus) => ({
                          ...prev,
                          noFields: {
                            ...prev.noFields,
                            unemploymentReason: data,
                          },
                        })
                      )
                    }
                    display={"flex flex-col gap-3"}
                  >
                    <div className="space-y-3">
                      <h5 className="font-semibold">
                        {employmentStatus.noFields.unemploymentReason.question}
                      </h5>
                      <h6 className="text-[.9rem]">
                        {
                          employmentStatus.noFields.unemploymentReason.options
                            .label
                        }
                      </h6>
                    </div>
                  </RadioGroupsMultipe>
                  <div className="mt-4 flex items-start gap-3">
                    <Info className="text-neutral-600 sm:block hidden" />
                    <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                      <strong>Why do we need this?: </strong>This will help us
                      better match you to opportunities. We never share this
                      information with employers!
                    </p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </CardContent>
      </Card>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>{salaryDetails.recentSalary}</p>
              <div>
                <Input
                  id="recentSalary"
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  placeholder="Enter your current salary (numbers only)"
                  value={+targetSalaryDetails.recentSalary}
                  onChange={(e) =>
                    setTargetSalaryDetails((prev) => ({
                      ...prev,
                      recentSalary: +e.target.value,
                    }))
                  }
                  className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                />
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Info className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  <strong>Why do we need this?: </strong>This will help us
                  better match you to opportunities. We never share this
                  information with employers!
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p>{salaryDetails.desiredNextSalary}</p>
              <div>
                <Input
                  id="desiredNextSalary"
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  placeholder="Enter your desired salary (numbers only)"
                  value={+targetSalaryDetails.desiredNextSalary}
                  onChange={(e) =>
                    setTargetSalaryDetails((prev) => ({
                      ...prev,
                      desiredNextSalary: +e.target.value,
                    }))
                  }
                  className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                />
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Info className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  <strong>Why do we need this?: </strong>This will help us
                  better match you to opportunities. We never share this
                  information with employers!
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
