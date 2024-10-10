"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Bell, CreditCard, Key, User } from "lucide-react";
import Account from "@/components/app/settings/account";
import Security from "@/components/app/settings/security";
import Plan from "@/components/app/settings/plan";
import Notif from "@/components/app/settings/notif";

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("account");
  const [click, setClick] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "account":
        return <Account setClick={setClick} click={click} />;
      case "security":
        return <Security setClick={setClick} click={click} />;
      case "plan":
        return <Plan setClick={setClick} click={click} />;
      case "notifications":
        return <Notif setClick={setClick} click={click} />;
      default:
        return <Account setClick={setClick} click={click} />;
    }
  };

  return (
    <div className="main-content gap-5 bg-[#fff]">
      <div className="flex flex-col gap-[16px]">
        <span className="font-bold text-2xl">Settings</span>
        {/*  <Tabs defaultValue={activeSection} className="flex md:hidden">
          <TabsList className="sm:justify-between gap-[24px] justify-start w-full md:gap-[20px] md:justify-start overflow-x-auto scrollbar-hide ">
            <TabsTrigger
              value="account"
              onClick={() => setActiveSection("account")}>
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="security"
              onClick={() => setActiveSection("security")}>
              Security
            </TabsTrigger>
            <TabsTrigger value="plan" onClick={() => setActiveSection("plan")}>
              Plan
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              onClick={() => setActiveSection("notifications")}>
              Notifications
            </TabsTrigger>
          </TabsList>
        </Tabs> */}
      </div>

      <Separator />
      <div className="flex gap-[20px] xl:gap-[60px] lg:gap-[40px] items-start">
        <div
          className={`bg-[#fff] sticky top-[0px] p-[30px] text-[#757F87] md:flex flex-col  rounded-[10px] w-full md:max-w-[300px] gap-[10px] border shadow-md ${
            click ? "hidden" : "flex"
          } `}
        >
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "account"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => {
              setActiveSection("account");
              setClick(true);
            }}
          >
            <User size={18} className="text-inherit" />
            <span>Profile</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "security"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => {
              setActiveSection("security");
              setClick(true);
            }}
          >
            <Key size={18} className="text-inherit" />
            <span>Login and Security</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "plan"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => {
              setActiveSection("plan");
              setClick(true);
            }}
          >
            <CreditCard size={18} className="text-inherit" />
            <span>Plan</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "notifications"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => {
              setActiveSection("notifications");
              setClick(true);
            }}
          >
            <Bell size={18} className="text-inherit" />
            <span>Notifications</span>
          </div>
        </div>
        <div className={`" w-full md:flex " ${click ? "flex" : "hidden"}`}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
