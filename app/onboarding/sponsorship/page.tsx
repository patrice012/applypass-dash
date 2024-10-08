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
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";

type CardProps = React.ComponentProps<typeof Card>;

// Define the items as a readonly array to ensure immutability.
const items = [
  { id: "outside-us-canada", label: "Outside of US - Canada" },
  { id: "outside-us-other", label: "Outside of US - Other" },
  { id: "alabama", label: "Alabama" },
  { id: "alaska", label: "Alaska" },
  { id: "arizona", label: "Arizona" },
  { id: "arkansas", label: "Arkansas" },
  { id: "california", label: "California" },
  { id: "colorado", label: "Colorado" },
  { id: "connecticut", label: "Connecticut" },
  { id: "delaware", label: "Delaware" },
  { id: "district-of-columbia", label: "District of Columbia" },
  { id: "florida", label: "Florida" },
  { id: "georgia", label: "Georgia" },
  { id: "hawaii", label: "Hawaii" },
  { id: "idaho", label: "Idaho" },
  { id: "illinois", label: "Illinois" },
  { id: "indiana", label: "Indiana" },
  { id: "iowa", label: "Iowa" },
  { id: "kansas", label: "Kansas" },
  { id: "kentucky", label: "Kentucky" },
  { id: "louisiana", label: "Louisiana" },
  { id: "maine", label: "Maine" },
  { id: "maryland", label: "Maryland" },
  { id: "massachusetts", label: "Massachusetts" },
  { id: "michigan", label: "Michigan" },
  { id: "minnesota", label: "Minnesota" },
  { id: "mississippi", label: "Mississippi" },
  { id: "missouri", label: "Missouri" },
  { id: "montana", label: "Montana" },
  { id: "nebraska", label: "Nebraska" },
  { id: "nevada", label: "Nevada" },
  { id: "new-hampshire", label: "New Hampshire" },
  { id: "new-jersey", label: "New Jersey" },
  { id: "new-mexico", label: "New Mexico" },
  { id: "new-york", label: "New York" },
  { id: "north-carolina", label: "North Carolina" },
  { id: "north-dakota", label: "North Dakota" },
  { id: "ohio", label: "Ohio" },
  { id: "oklahoma", label: "Oklahoma" },
  { id: "oregon", label: "Oregon" },
  { id: "pennsylvania", label: "Pennsylvania" },
  { id: "puerto-rico", label: "Puerto Rico" },
  { id: "rhode-island", label: "Rhode Island" },
  { id: "south-carolina", label: "South Carolina" },
  { id: "south-dakota", label: "South Dakota" },
  { id: "tennessee", label: "Tennessee" },
  { id: "texas", label: "Texas" },
  { id: "utah", label: "Utah" },
  { id: "vermont", label: "Vermont" },
  { id: "virginia", label: "Virginia" },
  { id: "washington", label: "Washington" },
  { id: "west-virginia", label: "West Virginia" },
  { id: "wisconsin", label: "Wisconsin" },
  { id: "wyoming", label: "Wyoming" },
  { id: "american-samoa", label: "American Samoa" },
  { id: "guam", label: "Guam" },
  { id: "northern-mariana-islands", label: "Northern Mariana Islands" },
  { id: "us-virgin-islands", label: "U.S. Virgin Islands" },
];

export default function SelectSponsorshipAndSalaryCheckList({
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
  const [isRelocation, setIsRelocation] = useState(false);

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
          Sponsorship & Salary
        </CardTitle>
        <CardDescription className="text-center text-[1rem] text-dark">
          Finalize your details to see your matches and earn more interviews
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
        <div className="space-y-5">
          <SearchInputWithLabel
            setSearchTerm={setSearchTerm}
            placeholderText={"Search location"}
          >
            <Label htmlFor="domain" className="text-[1rem]">
              Where do you want to work?
            </Label>
          </SearchInputWithLabel>
          <div>
            <CheckboxFormMultiple
              items={itemsList}
              setSelectCount={setSelectCount}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    className=""
                    id="relocation"
                    checked={isRelocation}
                    onCheckedChange={(isChecked: boolean) =>
                      setIsRelocation(isChecked)
                    }
                  />
                  <Label
                    htmlFor="relocation"
                    className={`${
                      isRelocation ? "text-[var(--base)]" : "text-black"
                    } text-md font-normal`}
                  >
                    I&apos;m willing to relocate anywhere
                  </Label>
                </div>
                <p>Select all that apply</p>
              </div>
            </CheckboxFormMultiple>
            <div className="mt-4 flex items-start gap-3">
              <Info className="text-neutral-600" />
              <p className="text-[0.85rem] font-light">
                We’re adding job matching based on location soon. For now,
                you’ll still receive job applications in locations you did not
                select.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4 w-full">
          <Link
            href={"/onboarding/technology"}
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
              href={"/onboarding/finish"}
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
