"use client";

import { Label } from "@/components/ui/label";
import { JobCollapsible } from "@/components/dashboard/jobCollapsible";
import { ContinueOnboarding } from "@/components/dashboard/continueOnboarding";

const jobs = [
  {
    title: "Web Developer | Canonicaljobs",
    location: "Outside of US - Other | Mid-Level",
  },
  {
    title:
      "Observability - Management UX - Software Engineer II (JavaScript) | Referralsuseonly",
    location: "Outside of US - Other | Mid-Level",
  },
  {
    title: "Fullstack Developer (Integration Team) / hybrid | Livechatinc",
    location: "Mid-Level",
  },
  {
    title: "Web Developer | Canonicaljobs",
    location: "Outside of US - Other | Mid-Level",
  },
  {
    title:
      "Observability - Management UX - Software Engineer II (JavaScript) | Referralsuseonly",
    location: "Outside of US - Other | Mid-Level",
  },
  {
    title: "Fullstack Developer (Integration Team) / hybrid | Livechatinc",
    location: "Mid-Level",
  },
  {
    title: "Web Developer | Canonicaljobs",
    location: "Outside of US - Other | Mid-Level",
  },
];

export default function JobsList() {
  return (
    <>
      <main className="flex-grow flex flex-col w-full px-4 py-[24px] md:p-[32px] gap-[24px] overflow-y-auto scrollbar scrollbar-thumb-[#d4d4d4] scrollbar-w-[7px] scrollbar-thumb-rounded-full">
        <div className="w-full space-y-4">
          <div className="space-y-1">
            <Label className="text-[clamp(1.35rem,3cqw,1.4rem)]">
              Job queue preview
            </Label>
            <p>
              Update your information or complete onboarding to refine your job
              matches.
            </p>
          </div>
          <div className="space-y-3">
            {jobs.map((job, idx) => (
              <JobCollapsible
                key={idx}
                title={job.title}
                location={job.location}
              />
            ))}
          </div>
        </div>
      </main>
      <div className="relative">
        <ContinueOnboarding />
      </div>
    </>
  );
}
