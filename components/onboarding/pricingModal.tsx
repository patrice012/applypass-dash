"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

import { Button } from "../ui/button";
import { useToast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";

export function PricingModal({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const router = useRouter();

  function goToNext() {
    router.push("/dashboard");
    toast({
      title: "Your data have been recorded",
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-5xl py-[3rem] space-y-4 overflow-y-auto max-h-screen">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-[clamp(1.5rem,3cqw,2rem)]  mt-6 sm:max-w-[80%] mx-auto text-center">
            Get job interviews and land offers with our supportive plans
          </DialogTitle>
          <DialogDescription className="sm:max-w-[70%] mx-auto text-center text-lg text-black ">
            Simple, transparent pricing that grows with you. Get more interviews
            with less effort with ApplyPass
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between gap-8 md:flex-row flex-col">
          <MomentumCard />
          <PremiumCard />
        </div>
        <Button
          onClick={goToNext}
          className="w-full max-w-[640px] mx-auto  p-6 text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
        >
          Maybe later
        </Button>
      </DialogContent>
    </Dialog>
  );
}

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

function MomentumCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader className="space-y-3">
        <CardTitle className="text-center">Momentum</CardTitle>
        <CardDescription className="text-center text-black text-md">
          $99 / month
        </CardDescription>
        <Button variant={"outline"} className="w-full rounded-full py-6">
          Get started
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-3">
          <h6>Everything in Basic and...</h6>
          <ul className="list-disc ml-5 space-y-3">
            <li>Up to 100 job applications per week</li>
            <li>Engineer-specialized resume overhaul</li>
            <li>ATS keyword enhancements</li>
            <li>ATS & recruiter readability optimized</li>
            <li>Data-trained bullet-point generation</li>
            <li>Visa requirement matching*</li>
            <li>H1B/visa resume optimization*</li>
            <li>Option to blacklist companies</li>
            <li>Class: Optimize your LinkedIn for traction</li>
          </ul>
        </div>
        <p className="mt-3 text-neutral-700 text-sm">
          * Varies depending upon your background & target job
        </p>
      </CardContent>
    </Card>
  );
}

function PremiumCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader className="space-y-3">
        <CardTitle className="text-center">Premium</CardTitle>
        <CardDescription className="text-center text-black text-md">
          $199 / month
        </CardDescription>
        <Button
          variant={"outline"}
          className="w-full text-white rounded-full py-6 hover:text-white bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
        >
          Try 2 days free
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-3">
          <h6>Everything in Momentum and...</h6>
          <ul className="list-disc ml-5 space-y-3">
            <li>Up to 400 job applications per week*</li>
            <li className="space-y-3">
              <li>Premium resume optimization including:</li>
              <ul className="list-disc ml-5 space-y-3">
                <li>In-depth human review and visual cleanup</li>
                <li>H1B/Visa-Optimization Call with a Career Coach</li>
                <li>H1B/Visa-optimized resume</li>
              </ul>
            </li>
            <li>Access fresh postings within 24 hours</li>
            <li>Premium job listings*</li>
            <li>Advanced matching algorithm</li>
            <li>Priority applications*</li>
            <li>Premium Class Assets: Negotiating your best offer</li>
            <li>
              VIP Community with exclusive events and networking opportunities.
            </li>
            <li>Video courses*</li>
          </ul>
        </div>
        <p className="mt-3 text-neutral-700 text-sm">
          * Varies depending upon your background & target job
        </p>
      </CardContent>
    </Card>
  );
}
