"use client";

import { useWindowSize } from "@/components/hooks/useWindowSize";
import Header from "./header";
import { PropsWithChildren, useEffect, useState } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  const [width] = useWindowSize();
  const [isOpened, setIsOpened] = useState(width > 1024);
  const [DrawerOpen, setDrawerOpen] = useState(true);

  useEffect(() => {
    setIsOpened(width > 1024);
  }, [width]);

  return (
    <div className="flex h-screen w-full bg-muted/40">
      <div
        className={`${
          DrawerOpen ? "lg:ml-[250px]" : "lg:ml-[100px]"
        } flex grow flex-col h-screen w-full`}>
        <Header
          isSmall={DrawerOpen}
          setSmall={() => setDrawerOpen(!DrawerOpen)}
          handleOpenDrawer={() => setIsOpened(!isOpened)}
          isDrawerOpen={isOpened}
        />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
