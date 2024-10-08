"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const RootPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="text-[#888] text-sm mt-7">Loading...</span>;
  }

  if (!session) {
    return router.push("/auth/login");
  }

  return router.push("/dashboard");
};

export default RootPage;
