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

  const [targetCitizenshipStatus, setTargetCitizenshiptatus] =
    useState<TTargetStatusType>({
      option: "",
      choice: "",
    });

  const [targetSecurityClearanceStatus, setTargetSecurityClearancetatus] =
    useState<TTargetStatusType>({
      option: "",
      choice: "",
    });

  const [date, setDate] = useState<Date>();

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    // Set the form's validity
    setIsValidForm(
      !!targetCitizenshipStatus.choice && !!targetSecurityClearanceStatus.choice
    );
  }, [targetCitizenshipStatus, targetSecurityClearanceStatus]);

  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    if (isValidForm) {
      router.push("/dashboard");
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
                  setTargetCitizenshiptatus((prev: TTargetStatusType) => ({
                    ...prev,
                    choice: data?.at(0)?.id || "",
                  }))
                }
                display={"flex flex-col gap-3"}
              >
                <div className="space-y-3">
                  <h5 className="font-semibold">{workStatus.question}</h5>
                  <h6 className="text-[.9rem]">{workStatus.options.label}</h6>
                </div>
              </RadioGroupsMultipe>
              <div className="space-y-4">
                <div className="space-y-4">
                  <h5 className="font-semibold">
                    If you do not hold citizenship or permanent residency,
                    what’s your current visa status?
                  </h5>

                  <div>
                    <SelectItemsList
                      selectList={[{ id: "text", label: "lorem" }]}
                      setCurrentSelection={(data) => {
                        console.log(data, "data");
                        // setTargetEmploymentStatus(
                        //   (prev: TTargetEmployementStatus) => ({
                        //     ...prev,
                        //     yesFields: {
                        //       ...prev.yesFields,
                        //       company: data || "",
                        //     },
                        //   })
                        // );
                      }}
                      placeholder={"Select visa status"}
                      // currentSelection={
                      //   targetEmploymentStatus.yesFields?.company
                      // }
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-semibold">
                    When does your current work visa expire?
                  </h5>
                  <DatePicker getDate={setDate}>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border bg-[#FBFAF8] py-6 px-2 rounded-md",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </DatePicker>
                </div>
              </div>
            </div>
            <div>
              <RadioGroupsMultipe
                items={securityClearance.options.fields}
                setSelectList={(data) =>
                  setTargetSecurityClearancetatus(
                    (prev: TTargetStatusType) => ({
                      ...prev,
                      choice: data?.at(0)?.id || "",
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
