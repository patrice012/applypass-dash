"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useStepSlider } from "@/components/hooks/useStepSlider";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import { PhoneNumberInput } from "@/components/onboarding/phoneNumberInput";
import { Label } from "@/components/ui/label";
import { AutoCompleteInput } from "@/components/onboarding/autocompleteInput";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Link as LinkSVG, Info } from "lucide-react";
import { z } from "zod";

const cities = [
  { id: "new-york-us", label: "New York, US" },
  { id: "los-angeles-us", label: "Los Angeles, US" },
  { id: "chicago-us", label: "Chicago, US" },
  { id: "houston-us", label: "Houston, US" },
  { id: "london-uk", label: "London, UK" },
  { id: "manchester-uk", label: "Manchester, UK" },
  { id: "birmingham-uk", label: "Birmingham, UK" },
  { id: "toronto-ca", label: "Toronto, CA" },
  { id: "vancouver-ca", label: "Vancouver, CA" },
  { id: "montreal-ca", label: "Montreal, CA" },
  { id: "sydney-au", label: "Sydney, AU" },
  { id: "melbourne-au", label: "Melbourne, AU" },
  { id: "brisbane-au", label: "Brisbane, AU" },
  { id: "paris-fr", label: "Paris, France" },
  { id: "lyon-fr", label: "Lyon, France" },
  { id: "marseille-fr", label: "Marseille, France" },
  { id: "berlin-de", label: "Berlin, Germany" },
  { id: "munich-de", label: "Munich, Germany" },
  { id: "hamburg-de", label: "Hamburg, Germany" },
  { id: "tokyo-jp", label: "Tokyo, Japan" },
  { id: "osaka-jp", label: "Osaka, Japan" },
  { id: "nagoya-jp", label: "Nagoya, Japan" },
  { id: "mumbai-in", label: "Mumbai, India" },
  { id: "delhi-in", label: "Delhi, India" },
  { id: "bengaluru-in", label: "Bengaluru, India" },
  { id: "beijing-cn", label: "Beijing, China" },
  { id: "shanghai-cn", label: "Shanghai, China" },
  { id: "guangzhou-cn", label: "Guangzhou, China" },
  { id: "madrid-es", label: "Madrid, Spain" },
  { id: "barcelona-es", label: "Barcelona, Spain" },
  { id: "seville-es", label: "Seville, Spain" },
  { id: "rome-it", label: "Rome, Italy" },
  { id: "milan-it", label: "Milan, Italy" },
  { id: "naples-it", label: "Naples, Italy" },
  { id: "moscow-ru", label: "Moscow, Russia" },
  { id: "saint-petersburg-ru", label: "Saint Petersburg, Russia" },
  { id: "sochi-ru", label: "Sochi, Russia" },
  { id: "dubai-ae", label: "Dubai, UAE" },
  { id: "abu-dhabi-ae", label: "Abu Dhabi, UAE" },
  { id: "sharjah-ae", label: "Sharjah, UAE" },
  { id: "mexico-city-mx", label: "Mexico City, Mexico" },
  { id: "guadalajara-mx", label: "Guadalajara, Mexico" },
  { id: "monterrey-mx", label: "Monterrey, Mexico" },
  { id: "buenos-aires-ar", label: "Buenos Aires, Argentina" },
  { id: "cordoba-ar", label: "Cordoba, Argentina" },
  { id: "rosario-ar", label: "Rosario, Argentina" },
  { id: "sao-paulo-br", label: "Sao Paulo, Brazil" },
  { id: "rio-de-janeiro-br", label: "Rio de Janeiro, Brazil" },
  { id: "salvador-br", label: "Salvador, Brazil" },
];

const validationSchema = z.object({
  phone: z.string().min(1, "Phone number is required."),
  address: z.string().min(1, "Address is required."),
  github: z
    .string()
    .url("Please enter a valid GitHub URL.")
    .refine((value) => {
      const githubUrlPrefix = "https://github.com/";
      return (
        value.startsWith(githubUrlPrefix) &&
        value.length > githubUrlPrefix.length
      );
    }, "Invalid GitHub URL format."),
  portfolio: z.string().url("Please enter a valid portfolio URL.").optional(),
  linkedin: z
    .string()
    .url("Please enter a valid LinkedIn URL.")
    .refine((value) => {
      const linkedInUrlPrefix = "https://www.linkedin.com/in/";
      return (
        value.startsWith(linkedInUrlPrefix) &&
        value.length > linkedInUrlPrefix.length
      );
    }, "Invalid LinkedIn URL format."),
});

type FormData = z.infer<typeof validationSchema>;

interface ValidationErrors {
  phone?: string[];
  address?: string[];
  github?: string[];
  portfolio?: string[];
  linkedin?: string[];
}

export default function UpdateProfile() {
  const { setSliderRange } = useStepSlider();
  setSliderRange(88);
  const { toast } = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    phone: "",
    address: "",
    github: "https://github.com/",
    portfolio: "",
    linkedin: "https://www.linkedin.com/in/",
  });

  const [formErrors, setFormErrors] = useState<ValidationErrors>({});
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    const { success, error } = validationSchema.safeParse(formData);
    if (!success) {
      //   setFormErrors(error.formErrors.fieldErrors);
      console.log(error, "forms errors");
    } else {
      setFormErrors({});
      setIsValidForm(true);
    }
  }, [formData]);

  function handleSubmit() {
    try {
      const { success, error } = validationSchema.safeParse(formData);
      if (!success) {
        setFormErrors(error.formErrors.fieldErrors);
      } else {
        goToNext();
      }
    } catch (err) {
      console.log(err, "error handleSubmit");
    }
  }

  function goToNext() {
    router.push("/onboarding/get-started");
    toast({
      title: "Your data have been recorded",
    });
  }

  console.log(formData, "formdata");
  return (
    <div>
      <Card className={cn("sm:w-[680px] border-none shadow-none bg-[#E5E7EB]")}>
        <CardHeader className="sm:w-[90%] flex flex-col gap-[1rem]">
          <CardTitle className="text-center leading-8 tracking-normal">
            Update Your Profile
          </CardTitle>
          {/* <CardDescription className="text-center text-[1rem] text-dark"></CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-4 rounded-[15px] bg-[#FFFFFF] pt-[1.3rem] mb-8">
          <div className="space-y-5">
            <div className="space-y-3">
              <Label className="text-[1rem]">Phone Number</Label>
              <PhoneNumberInput
                getPhoneNumber={(value: string) =>
                  setFormData((prev) => ({ ...prev, phone: value }))
                }
              />
              {formErrors.phone && (
                <p className="text-red-500">{formErrors.phone[0]}</p>
              )}
            </div>

            <div className="space-y-3 relative">
              <Label className="text-[1rem]">Address</Label>
              <AutoCompleteInput
                items={Array.from(cities).filter((item) =>
                  item.id.includes(formData.address)
                )}
                setDefault={true}
                placeholder={"Enter or search location..."}
                setSearchTerm={(value) =>
                  setFormData((prev) => ({ ...prev, address: value }))
                }
                setInputValue={(value) =>
                  setFormData((prev) => ({ ...prev, address: value }))
                }
                className={`${formData.address ? "block" : "hidden"}`}
              />
              {formErrors.address && (
                <p className="text-red-500">{formErrors.address[0]}</p>
              )}
              <div className="mt-4 flex items-start gap-3">
                <Info className="text-neutral-600 sm:block hidden" />
                <p className="sm:text-[0.85rem] text-[.9rem]  font-light">
                  Why do we need this?: This will help us better match you to
                  opportunities. We never share this information with employers!
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-[1rem] flex items-center gap-2">
                GitHub
              </Label>
              <div className="relative w-full">
                <Input
                  type="url"
                  placeholder="Enter url"
                  value={formData.github}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      github: e.target.value,
                    }))
                  }
                  className="text-[1rem] w-full pl-10 bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                />
                <Github
                  size={17}
                  className="absolute top-4 left-3 text-[#8f8f8f]"
                />
              </div>
              {formErrors.github && (
                <p className="text-red-500">{formErrors.github[0]}</p>
              )}
            </div>
            <div className="space-y-3">
              <Label className="text-[1rem]">Portfolio</Label>
              <div className="relative w-full">
                <Input
                  type="url"
                  placeholder="Enter url"
                  value={formData.portfolio}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      portfolio: e.target.value,
                    }))
                  }
                  className="text-[1rem] w-full pl-10 bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                />
                <LinkSVG
                  size={17}
                  className="absolute top-4 left-3 text-[#8f8f8f]"
                />
              </div>
              {formErrors.portfolio && (
                <p className="text-red-500">{formErrors.portfolio[0]}</p>
              )}
            </div>
            <div className="space-y-3">
              <Label className="text-[1rem]">LinkedIn</Label>
              <div className="relative w-full">
                <Input
                  type="url"
                  placeholder="Enter url"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      linkedin: e.target.value,
                    }))
                  }
                  className="text-[1rem] w-full pl-10 bg-[#FBFAF8] outline-none border border-solid border-neutral-300 focus:border-neutral-300 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-neutral-300 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0"
                />
                <Linkedin
                  size={17}
                  className="absolute top-4 left-3 text-[#8f8f8f]"
                />
              </div>
              {formErrors.linkedin && (
                <p className="text-red-500">{formErrors.linkedin[0]}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center sm:flex-row flex-col gap-4 w-full">
            <Button
              onClick={() => {
                router.back();
              }}
              className="w-full py-6 text-center text-[1rem] rounded-full text-[var(--base-hover)] bg-white hover:bg-white/60 border border-[var(--base-hover)] hover:border-[var(--base-hover)] transition-all"
            >
              Go back
            </Button>
            {/* <Button
              onClick={handleSubmit}
              className="w-full py-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
              disabled={Object.keys(formErrors).length > 0}
            >
              Continue
            </Button> */}
            {isValidForm ? (
              <Button
                onClick={handleSubmit}
                disabled={Object.keys(formErrors).length > 0}
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
