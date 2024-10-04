import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dot } from "lucide-react";
import Link from "next/link";

const ResetPage = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full px-5 py-6  border-b">
        <Link href="/">
          <h1 className="font-bold text-2xl">applypass</h1>
        </Link>
      </div>
      <div className="h-screen items-center flex">
        <div className="p-5 mx-auto w-full md:p-7 md:w-[600px] border  shadow-xl  rounded-xl">
          <h1 className="text-center text-[25px] font-semibold">
            Forgot Password?
          </h1>

          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="username"
                className="text-start text-sm font-semibold"
              >
                Email address
              </label>
              <Input
                placeholder="Enter your email"
                id="username"
                className="col-span-3 py-6"
              />
            </div>

            <Link className="text-white" href="/dashboard">
              <Button className="py-6 w-full text-sm font-semibold rounded-[90px] bg-[#6805DA] hover:bg-[#6805DA]/60">
                Reset Password
              </Button>
            </Link>

            <div className="text-center">
              <Link href="/">
                <span className="text-[#1165ef] cursor-pointer font-semibold">
                  Back to login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full gap-3 flex flex-col md:flex-row items-center justify-between bg-white px-8">
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
  );
};

export default ResetPage;
