"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Check, Dot } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

const RegisterPage = () => {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const { data: session } = useSession();

  if (session) {
    return router.push("/");
  }

  const handleSubmit = async (formData: FormData) => {
    const res = await register({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
    ref.current?.reset();
    if (res?.error) {
      setError(res.error);
      alert(res.error);
      return;
    } else {
      return router.push("/login");
    }
  };

  return (
    <div className="grid col-span-2 grid-cols-2">
      <div className="bg-[#6805DA] gap-[24px] flex flex-col items-start p-[100px]">
        <Link href="/">
          <h1 className="font-bold text-[#fff] text-3xl">applypass</h1>
        </Link>
        <span className="text-[#fff] font-bold text-[24px]">
          With the ApplyPass, you will get the benefits of:
        </span>

        <div className="flex flex-col gap-[12px]">
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">
              Increase your reach with up to 400 job applications per week*
            </span>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">
              Access Fresh Postings within 24 hours
            </span>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">Premium Resume Optimization</span>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">
              Job Application Optimization Call with a Career Coach
            </span>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">
              Premium Class Access: Negotiating your best offer
            </span>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">
              VIP Community with Exclusive Events and Networking Opportunities.
            </span>
          </div>

          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">
              Increase your reach with up to 400 job applications per week*
            </span>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#fff] rounded-full size-5 flex justify-center items-center">
              <Check strokeWidth={5} size={15} color="#6805DA" />
            </div>
            <span className="text-[#fff]">
              Increase your reach with up to 400 job applications per week*
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#e5e7eb] flex flex-col items-center py-[100px] p-[10px] ">
        <form
          ref={ref}
          action={handleSubmit}
          className="p-5 mx-auto w-full md:p-7 md:w-[600px] ">
          <h1 className="text-center text-[25px] font-semibold">
            Moments away From Seeing Your Matches
          </h1>

          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="username"
                className="text-start text-sm font-semibold">
                Username
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="col-span-3 py-6"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="email"
                className="text-start text-sm font-semibold">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="col-span-3 py-6"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="password"
                className="text-start text-sm font-semibold">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="col-span-3 py-6"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" className="" />
                <label
                  htmlFor="terms"
                  className=" peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-semibold">
                  I want to receive product updates info and special offers
                </label>
              </div>
            </div>

            <Link className="text-white" href="/">
              <Button
                type="submit"
                className="py-6 w-full text-sm font-semibold rounded-[90px] bg-[#6805DA] hover:bg-[#6805DA]/60">
                Register for Free
              </Button>
            </Link>
          </div>
        </form>
        <div className="flex w-full md:w-[600px] px-8 flex-col mb-[16px] gap-3">
          <Button
            onClick={() => signIn("google")}
            className="py-6 w-full rounded-[90px] bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/10">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <img className="size-7" src="/google.png" alt="" />
              Continue with Google
            </div>
          </Button>
        </div>
        <div className="text-center">
          Already have an account?{" "}
          <Link href="/auth/login">
            <span className="text-[#1165ef] cursor-pointer">Sign in</span>
          </Link>
        </div>
        <div className="w-full gap-3 flex flex-col md:flex-row items-center justify-between px-4 ">
          <div className="text-center">
            Copyright © ApplyPass 2024. All rights reserved.
          </div>
          <div className="flex items-center">
            <a href="" className="underline">
              <div>Privacy</div>
            </a>
            <Dot size={38} className="my-2" />
            <a href="" className="underline">
              <div>Terms of Service</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
