"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";
import { SelectItemsList } from "./selectItemsList";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { DatePicker } from "./datePicker";
import { Checkbox } from "../ui/checkbox";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ButtonLoading } from "../ui/loadingButton";

const degrees = [
  {
    id: "coursework",
    label: "Coursework",
  },
  {
    id: "diploma",
    label: "Diploma",
  },
  {
    id: "associate-of-arts",
    label: "Associate of Arts",
  },
  {
    id: "associate-of-science",
    label: "Associate of Science",
  },
  {
    id: "bachelor-of-arts",
    label: "Bachelor of Arts",
  },
  {
    id: "bachelor-of-science",
    label: "Bachelor of Science",
  },
  {
    id: "master-of-arts",
    label: "Master of Arts",
  },
  {
    id: "master-of-science",
    label: "Master of Science",
  },
  {
    id: "doctorate",
    label: "Doctorate",
  },
];

// Define your schema with Zod
const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required."),
  college: z.string().min(1, "College is required."),
  major: z.string().min(1, "Major is required."),
  enrollmentDate: z.date({ required_error: "Enrollment date is required." }),
  graduationDate: z.date({ required_error: "Graduation date is required." }),
  stillEnrolled: z.boolean().default(false),
});

// Define your form data type
type EducationFormData = z.infer<typeof educationSchema>;

export function AddEducationModal({ children }: { children: ReactNode }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    setValue,
    trigger,
    reset,
    // watch,
  } = useForm<EducationFormData>({
    resolver: zodResolver(educationSchema),
  });

  // Add this line to see if there are any validation errors
  console.log(errors, "errors");

  const [degree, setDegree] = useState<string | null>(null);
  const [enrollmentDate, setEnrollmentDate] = useState<Date>();
  const [graduationDate, setGraduationDate] = useState<Date>();
  const [stillEnrolled, setStillEnrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  type FieldType =
    | "degree"
    | "college"
    | "major"
    | "enrollmentDate"
    | "graduationDate"
    | "stillEnrolled";

  const handleFieldChange = (
    selectedValue: string | Date | boolean,
    type: FieldType,
    callBack: (value: string | Date | boolean) => void
  ) => {
    callBack(selectedValue);
    setValue(type, selectedValue);
    trigger(type);
  };

  const handleFormSubmit = (data: FieldValues) => {
    console.log("Form Submitted:", data);
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 5000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setDegree("");
      setEnrollmentDate(undefined);
      setGraduationDate(undefined);
      setStillEnrolled(false);
      setOpen(false);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:w-[680px] sm:max-w-[760px]">
        <DialogHeader>
          <DialogTitle>Create degree</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="degree" className="text-[1rem]">
                Degree
              </Label>
              <SelectItemsList
                selectList={degrees}
                setCurrentSelection={(value: string | null) =>
                  handleFieldChange(value || "", "degree", (val) =>
                    setDegree(val as string)
                  )
                }
                placeholder="Choose degree..."
                currentSelection={degree}
              />
              {isSubmitted && errors.degree?.message && (
                <p className="text-red-500">{errors.degree.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="college" className="text-[1rem]">
                College / Institution
              </Label>
              <Input
                type="text"
                id="college"
                placeholder="Enter college"
                {...register("college")}
                className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
              />
              {errors.college?.message && (
                <p className="text-red-500">{errors.college.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="major" className="text-[1rem]">
                Major
              </Label>
              <Input
                type="text"
                id="major"
                placeholder="Enter major"
                {...register("major")}
                className="text-[1rem] w-full bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
              />
              {errors.major?.message && (
                <p className="text-red-500">{errors.major.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between w-full sm:flex-row flex-col gap-6">
              <div className="space-y-2 w-full">
                <Label className="text-[1rem]">Enrollment Date</Label>
                <DatePicker
                  getDate={(date) => {
                    handleFieldChange(
                      date as string | boolean | Date,
                      "enrollmentDate",
                      (val) => setEnrollmentDate(val as Date | undefined)
                    );
                  }}
                >
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full flex justify-start items-center text-left font-normal border bg-[#FBFAF8] py-6 px-2 rounded-md",
                      !enrollmentDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {enrollmentDate ? (
                      format(enrollmentDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </DatePicker>
                {isSubmitted && errors.enrollmentDate?.message && (
                  <p className="text-red-500">
                    {errors.enrollmentDate.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 w-full">
                <Label className="text-[1rem]">Graduation Date</Label>
                <DatePicker
                  getDate={(date) => {
                    handleFieldChange(
                      date as string | boolean | Date,
                      "graduationDate",
                      (val) => setGraduationDate(val as Date | undefined)
                    );
                  }}
                >
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full flex justify-start items-center text-left font-normal border bg-[#FBFAF8] py-6 px-2 rounded-md",
                      !graduationDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {graduationDate ? (
                      format(graduationDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </DatePicker>

                {isSubmitted && errors.graduationDate?.message && (
                  <p className="text-red-500">
                    {errors.graduationDate.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                className=""
                id="stillEnrolled"
                checked={stillEnrolled}
                onCheckedChange={(isChecked: boolean) =>
                  handleFieldChange(isChecked, "stillEnrolled", (val) =>
                    setStillEnrolled(val as boolean)
                  )
                }
              />
              <Label
                htmlFor="stillEnrolled"
                className={`text-md font-normal text-black`}
              >
                I&apos;m still enrolled here
              </Label>
            </div>
          </div>
          <DialogFooter className="mt-6">
            {isLoading ? (
              <ButtonLoading className="w-full " />
            ) : (
              <Button
                type="submit"
                className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
              >
                Create
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
