"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

export default function Register() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const res = await register({
      email: formData.get("email"),
      password: formData.get("password"),
      name: "Username",
    });
    ref.current?.reset();
    if (res?.error) {
      setError(res.error);
      alert(error);
      return;
    } else {
      return router.push("/login");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full px-5 py-6  border-b">
        <Link href="/">
          <h1 className="font-bold text-2xl">applypass</h1>
        </Link>
      </div>
      <div className="p-5 mx-auto w-full md:p-7 md:w-[600px] shadow-xl rounded-xl">
        <h1 className="text-center text-[25px] font-semibold">Sign up</h1>

        <form ref={ref} action={handleSubmit}>
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="username"
                className="text-start text-sm font-semibold"
              >
                Email address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                className="col-span-3 py-6"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label
                htmlFor="username"
                className="text-start text-sm font-semibold"
              >
                Password
              </label>
              <Input
                type="password"
                name="password"
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
                  className=" peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-semibold"
                >
                  Remember me
                </label>
              </div>
              <Link href="/reset">
                <div className="text-sm font-semibold cursor-pointer">
                  Forgot password ?
                </div>
              </Link>
            </div>

            <Button className="py-6 w-full text-sm font-semibold rounded-[90px] bg-[#6805DA] hover:bg-[#6805DA]/60">
              Sign Up
            </Button>
            <div className="flex flex-col gap-3">
              <Separator className="my-3" />
              <Button className="py-6 w-full rounded-[90px] bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/10">
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <img className="size-7" src="/google.png" alt="" />
                  Sign in with Google
                </div>
              </Button>
              <Button className="py-6 w-full text-sm font-semibold rounded-[90px] bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/10">
                Sign in with Magic Link
              </Button>
            </div>
            <div className="text-center">
              Don’t have an account?{" "}
              <span className="text-[#1165ef] cursor-pointer">Sign up</span>
            </div>
          </div>
        </form>
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
}
