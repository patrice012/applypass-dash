"use client";

import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  console.log(error, "error");

  if (session) {
    return router.push("/");
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"));
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      setError(res.error as string);
      alert(res.error);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full px-5 py-6  border-b">
        <Link href="/">
          {/* <h1 className="font-bold text-2xl">applypass</h1> */}
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="p-5 mx-auto w-full md:p-7 md:w-[600px] border my-6 shadow-md rounded-xl">
        <h1 className="text-center text-[25px] font-semibold">Sign in</h1>

        <div className="flex flex-col mt-8">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
              <Link href="/auth/reset">
                <div className="text-sm font-semibold cursor-pointer">
                  Forgot password ?
                </div>
              </Link>
            </div>

            <Button
              type="submit"
              className="py-6 w-full text-sm font-semibold rounded-[90px] bg-[#6805DA] hover:bg-[#6805DA]/60"
            >
              Sign in now
            </Button>
          </form>
          <div className="flex flex-col gap-3">
            <Separator className="my-3" />
            <Button
              onClick={() => signIn("google")}
              className="py-6 w-full rounded-[90px] bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/10"
            >
              <div className="flex items-center gap-3 text-sm font-semibold">
                <img className="size-7" src="/google.png" alt="" />
                Sign in with Google
              </div>
            </Button>
            <Link href="/auth/magic">
              <Button className="py-6 w-full text-sm font-semibold rounded-[90px] bg-transparent text-[#6805DA] border border-[#6805DA] hover:bg-[#6805DA]/10">
                Sign in with Magic Link
              </Button>
            </Link>
          </div>
          <Link href="/auth/register" className="text-center mt-4">
            Don’t have an account?
            <span className="text-[#1165ef] cursor-pointer">Sign up</span>
          </Link>
        </div>
      </div>
      <div className="border w-full gap-3 py-3 flex flex-col md:flex-row items-center justify-self-end self-end justify-between bg-white px-8">
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

export default LoginPage;
