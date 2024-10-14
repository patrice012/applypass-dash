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
import { Checkbox } from "@/components/ui/checkbox";
import { Info, X } from "lucide-react";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { SelectItemsList } from "@/components/onboarding/selectItemsList";

// Define the items as a readonly array to ensure immutability.
const workLocations = [
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

const countries = [
  { id: "AF", label: "Afghanistan" },
  { id: "AL", label: "Albania" },
  { id: "DZ", label: "Algeria" },
  { id: "AS", label: "American Samoa" },
  { id: "AD", label: "Andorra" },
  { id: "AO", label: "Angola" },
  { id: "AI", label: "Anguilla" },
  { id: "AQ", label: "Antarctica" },
  { id: "AG", label: "Antigua and Barbuda" },
  { id: "AR", label: "Argentina" },
  { id: "AM", label: "Armenia" },
  { id: "AW", label: "Aruba" },
  { id: "AU", label: "Australia" },
  { id: "AT", label: "Austria" },
  { id: "AZ", label: "Azerbaijan" },
  { id: "BS", label: "Bahamas" },
  { id: "BH", label: "Bahrain" },
  { id: "BD", label: "Bangladesh" },
  { id: "BB", label: "Barbados" },
  { id: "BY", label: "Belarus" },
  { id: "BE", label: "Belgium" },
  { id: "BZ", label: "Belize" },
  { id: "BJ", label: "Benin" },
  { id: "BM", label: "Bermuda" },
  { id: "BT", label: "Bhutan" },
  { id: "BO", label: "Bolivia" },
  { id: "BA", label: "Bosnia and Herzegovina" },
  { id: "BW", label: "Botswana" },
  { id: "BR", label: "Brazil" },
  { id: "IO", label: "British Indian Ocean Territory" },
  { id: "BN", label: "Brunei" },
  { id: "BG", label: "Bulgaria" },
  { id: "BF", label: "Burkina Faso" },
  { id: "BI", label: "Burundi" },
  { id: "CV", label: "Cabo Verde" },
  { id: "KH", label: "Cambodia" },
  { id: "CM", label: "Cameroon" },
  { id: "CA", label: "Canada" },
  { id: "KY", label: "Cayman Islands" },
  { id: "CF", label: "Central African Republic" },
  { id: "TD", label: "Chad" },
  { id: "CL", label: "Chile" },
  { id: "CN", label: "China" },
  { id: "CO", label: "Colombia" },
  { id: "KM", label: "Comoros" },
  { id: "CG", label: "Congo (Brazzaville)" },
  { id: "CD", label: "Congo (Kinshasa)" },
  { id: "CR", label: "Costa Rica" },
  { id: "CI", label: "Côte d’Ivoire" },
  { id: "HR", label: "Croatia" },
  { id: "CU", label: "Cuba" },
  { id: "CW", label: "Curaçao" },
  { id: "CY", label: "Cyprus" },
  { id: "CZ", label: "Czech Republic" },
  { id: "DK", label: "Denmark" },
  { id: "DJ", label: "Djibouti" },
  { id: "DM", label: "Dominica" },
  { id: "DO", label: "Dominican Republic" },
  { id: "EC", label: "Ecuador" },
  { id: "EG", label: "Egypt" },
  { id: "SV", label: "El Salvador" },
  { id: "GQ", label: "Equatorial Guinea" },
  { id: "ER", label: "Eritrea" },
  { id: "EE", label: "Estonia" },
  { id: "SZ", label: "Eswatini" },
  { id: "ET", label: "Ethiopia" },
  { id: "FJ", label: "Fiji" },
  { id: "FI", label: "Finland" },
  { id: "FR", label: "France" },
  { id: "GA", label: "Gabon" },
  { id: "GM", label: "Gambia" },
  { id: "GE", label: "Georgia" },
  { id: "DE", label: "Germany" },
  { id: "GH", label: "Ghana" },
  { id: "GR", label: "Greece" },
  { id: "GD", label: "Grenada" },
  { id: "GU", label: "Guam" },
  { id: "GT", label: "Guatemala" },
  { id: "GN", label: "Guinea" },
  { id: "GW", label: "Guinea-Bissau" },
  { id: "GY", label: "Guyana" },
  { id: "HT", label: "Haiti" },
  { id: "HN", label: "Honduras" },
  { id: "HU", label: "Hungary" },
  { id: "IS", label: "Iceland" },
  { id: "IN", label: "India" },
  { id: "ID", label: "Indonesia" },
  { id: "IR", label: "Iran" },
  { id: "IQ", label: "Iraq" },
  { id: "IE", label: "Ireland" },
  { id: "IL", label: "Israel" },
  { id: "IT", label: "Italy" },
  { id: "JM", label: "Jamaica" },
  { id: "JP", label: "Japan" },
  { id: "JO", label: "Jordan" },
  { id: "KZ", label: "Kazakhstan" },
  { id: "KE", label: "Kenya" },
  { id: "KI", label: "Kiribati" },
  { id: "KP", label: "Korea (North)" },
  { id: "KR", label: "Korea (South)" },
  { id: "KW", label: "Kuwait" },
  { id: "KG", label: "Kyrgyzstan" },
  { id: "LA", label: "Laos" },
  { id: "LV", label: "Latvia" },
  { id: "LB", label: "Lebanon" },
  { id: "LS", label: "Lesotho" },
  { id: "LR", label: "Liberia" },
  { id: "LY", label: "Libya" },
  { id: "LI", label: "Liechtenstein" },
  { id: "LT", label: "Lithuania" },
  { id: "LU", label: "Luxembourg" },
  { id: "MG", label: "Madagascar" },
  { id: "MW", label: "Malawi" },
  { id: "MY", label: "Malaysia" },
  { id: "MV", label: "Maldives" },
  { id: "ML", label: "Mali" },
  { id: "MT", label: "Malta" },
  { id: "MH", label: "Marshall Islands" },
  { id: "MR", label: "Mauritania" },
  { id: "MU", label: "Mauritius" },
  { id: "MX", label: "Mexico" },
  { id: "FM", label: "Micronesia" },
  { id: "MD", label: "Moldova" },
  { id: "MC", label: "Monaco" },
  { id: "MN", label: "Mongolia" },
  { id: "ME", label: "Montenegro" },
  { id: "MA", label: "Morocco" },
  { id: "MZ", label: "Mozambique" },
  { id: "MM", label: "Myanmar" },
  { id: "NA", label: "Namibia" },
  { id: "NR", label: "Nauru" },
  { id: "NP", label: "Nepal" },
  { id: "NL", label: "Netherlands" },
  { id: "NZ", label: "New Zealand" },
  { id: "NI", label: "Nicaragua" },
  { id: "NE", label: "Niger" },
  { id: "NG", label: "Nigeria" },
  { id: "MK", label: "North Macedonia" },
  { id: "NO", label: "Norway" },
  { id: "OM", label: "Oman" },
  { id: "PK", label: "Pakistan" },
  { id: "PW", label: "Palau" },
  { id: "PA", label: "Panama" },
  { id: "PG", label: "Papua New Guinea" },
  { id: "PY", label: "Paraguay" },
  { id: "PE", label: "Peru" },
  { id: "PH", label: "Philippines" },
  { id: "PL", label: "Poland" },
  { id: "PT", label: "Portugal" },
  { id: "QA", label: "Qatar" },
  { id: "RO", label: "Romania" },
  { id: "RU", label: "Russia" },
  { id: "RW", label: "Rwanda" },
  { id: "KN", label: "Saint Kitts and Nevis" },
  { id: "LC", label: "Saint Lucia" },
  { id: "VC", label: "Saint Vincent and the Grenadines" },
  { id: "WS", label: "Samoa" },
  { id: "SM", label: "San Marino" },
  { id: "ST", label: "São Tomé and Príncipe" },
  { id: "SA", label: "Saudi Arabia" },
  { id: "SN", label: "Senegal" },
  { id: "RS", label: "Serbia" },
  { id: "SC", label: "Seychelles" },
  { id: "SL", label: "Sierra Leone" },
  { id: "SG", label: "Singapore" },
  { id: "SK", label: "Slovakia" },
  { id: "SI", label: "Slovenia" },
  { id: "SB", label: "Solomon Islands" },
  { id: "SO", label: "Somalia" },
  { id: "ZA", label: "South Africa" },
  { id: "SS", label: "South Sudan" },
  { id: "ES", label: "Spain" },
  { id: "LK", label: "Sri Lanka" },
  { id: "SD", label: "Sudan" },
  { id: "SR", label: "Suriname" },
  { id: "SE", label: "Sweden" },
  { id: "CH", label: "Switzerland" },
  { id: "SY", label: "Syria" },
  { id: "TW", label: "Taiwan" },
  { id: "TJ", label: "Tajikistan" },
  { id: "TZ", label: "Tanzania" },
  { id: "TH", label: "Thailand" },
  { id: "TL", label: "Timor-Leste" },
  { id: "TG", label: "Togo" },
  { id: "TO", label: "Tonga" },
  { id: "TT", label: "Trinidad and Tobago" },
  { id: "TN", label: "Tunisia" },
  { id: "TR", label: "Turkey" },
  { id: "TM", label: "Turkmenistan" },
  { id: "TV", label: "Tuvalu" },
  { id: "UG", label: "Uganda" },
  { id: "UA", label: "Ukraine" },
  { id: "AE", label: "United Arab Emirates" },
  { id: "GB", label: "United Kingdom" },
  { id: "US", label: "United States" },
  { id: "UY", label: "Uruguay" },
  { id: "UZ", label: "Uzbekistan" },
  { id: "VU", label: "Vanuatu" },
  { id: "VE", label: "Venezuela" },
  { id: "VN", label: "Vietnam" },
  { id: "YE", label: "Yemen" },
  { id: "ZM", label: "Zambia" },
  { id: "ZW", label: "Zimbabwe" },
];

const officePreferences = {
  question: "What is your office preference?",
  options: {
    label: "",
    fields: [
      { id: "hybrid", label: "Hybrid" },
      { id: "remote", label: "Remote" },
      { id: "on-site", label: "On-site" },
    ],
  },
};

export default function SelectLocationCheckList() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(24);
  const [itemsList, setItemsList] = useState([
    {
      id: "",
      label: "",
    },
  ]);

  const [selectList, setSelectList] = useState<{ id: string; label: string }[]>(
    []
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [isRelocation, setIsRelocation] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    router.push("/onboarding/sponsorship");
    toast({
      title: "Your data have been recorded",
    });
  }

  useEffect(() => {
    if (!searchTerm) {
      setItemsList(workLocations);
    } else {
      const matchesList = workLocations.filter((item) =>
        item.label
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase().trim())
      );

      setSelectList(matchesList);
      setItemsList(matchesList);
    }
  }, [searchTerm]);

  const [targetOfficePreference, setTargetOfficePreference] = useState("");
  const [currentCountrySelection, setCurrentCountrySelection] = useState<
    Set<string>
  >(new Set());

  const setCountries = (value: string | null, remove = false) => {
    setCurrentCountrySelection((prevSelectedItems) => {
      const updatedSet = new Set(prevSelectedItems);
      if (remove && value) {
        updatedSet.delete(value);
        return updatedSet;
      }
      if (!value) return updatedSet;

      return updatedSet.add(value);
    });
  };

  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <CardTitle className="text-center leading-8 tracking-normal">
            Select your Location
          </CardTitle>
          <CardDescription className="text-center text-[1rem] text-dark">
            Finalize your details to see your matches and earn more interviews
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 h-auto rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-2">
              <p>Which countries are you currently job searching in?</p>
            </div>
            <div className="relative w-full mb-4">
              <div className="absolute top-0 w-full px-3 py-2  min-h-14 rounded-md flex items-center text-md bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0">
                {Array.from(currentCountrySelection).length ? (
                  <div className="flex items-center justify-start flex-wrap gap-4">
                    {Array.from(currentCountrySelection).map((country, idx) => (
                      <Button
                        key={idx}
                        variant={"outline"}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCountries(country, true);
                        }}
                        className="z-40 relative border px-6 py-0 h-10 outline-none bg-transparent  flex items-center justify-between w-min"
                      >
                        <span>
                          {
                            countries?.find((data) => data?.id === country)
                              ?.label
                          }
                        </span>
                        <X
                          size={16}
                          className="absolute top-[2px] right-[2px]"
                        />
                      </Button>
                    ))}
                  </div>
                ) : (
                  <span className="text-[1rem] text-neutral-500 text-semibold">
                    Select countries...
                  </span>
                )}
              </div>
              <div className="opacity-0 h-full w-full">
                <SelectItemsList
                  selectList={countries}
                  setCurrentSelection={(value) => setCountries(value)}
                  placeholder="Select countries..."
                  currentSelection={Array.from(currentCountrySelection)?.at(0)}
                />
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <Info className="text-neutral-600 sm:block hidden" />
              <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                We only support US and Canada currently
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <p>{officePreferences.question}</p>
            </div>

            <div className="flex items-center justify-between sm:flex-row flex-col sm:gap-10 gap-3">
              {officePreferences.options.fields.map((field, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setTargetOfficePreference(field.id);
                    }}
                    className={` ${
                      targetOfficePreference === field.id
                        ? "border-[var(--base)]"
                        : "border"
                    } flex flex-1 items-center  justify-start gap-2 border bg-[#FBFAF8] py-3 px-2 rounded-md sm:w-auto w-full`}
                  >
                    <Checkbox
                      className=""
                      id={field.id}
                      checked={targetOfficePreference === field.id}
                    />
                    <Label
                      htmlFor={field.id}
                      className={`${
                        targetOfficePreference === field.id
                          ? "text-[var(--base)]"
                          : "text-black"
                      } text-[.95rem] font-normal`}
                    >
                      {field.label}
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
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
                setSelectList={setSelectList}
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
                <Info className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  We’re adding job matching based on location soon. For now,
                  you’ll still receive job applications in locations you did not
                  select.
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
            {selectList?.length &&
            targetOfficePreference &&
            !!currentCountrySelection.size ? (
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
