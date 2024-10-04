import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Check, Dot } from "lucide-react";
import Link from "next/link";
import register from "@/action/user";
import { useSession, signIn, signOut } from "next-auth/react";

const RegisterPage = () => {
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
          action={register}
          className="p-5 mx-auto w-full md:p-7 md:w-[600px] ">
          <h1 className="text-center text-[25px] font-semibold">
            Moments away From Seeing Your Matches
          </h1>

          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="email"
                className="text-start text-sm font-semibold">
                Email address
              </label>
              <Input
                placeholder="Enter your email"
                id="email"
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
                placeholder="Enter your password"
                id="password"
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
            <div className="flex flex-col gap-3">
              <Separator className="my-3" />
              <Button className="py-6 w-full rounded-[90px] bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/10">
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
          </div>
        </form>
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
