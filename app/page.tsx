"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RootPage = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    console.log("Session status:", status);
    if (status === "authenticated") {
      router.push("/dashboard");
    } else if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <span className="text-[#888] text-sm mt-7">Loading...</span>;
  }

  return null;
};

export default RootPage;
