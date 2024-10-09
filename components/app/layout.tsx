"use client";

import { useWindowSize } from "@/components/hooks/useWindowSize";
import Header from "./header";
import { PropsWithChildren, useEffect, useState } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  //
  const [width] = useWindowSize();
  const [isOpened, setIsOpened] = useState(width > 1024);

  useEffect(() => {
    setIsOpened(width > 1024);
  }, [width]);

  return (
    <div className="flex w-full  bg-muted/40">
      <div
        className={`${
          isOpened ? "lg:ml-[250px]" : ""
        } flex grow flex-col h-screen w-full`}
      >
        <Header
          handleOpenDrawer={() => setIsOpened(!isOpened)}
          isDrawerOpen={isOpened}
        />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
