"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Bell, CreditCard, Key, User } from "lucide-react";
import Account from "@/components/app/settings/account";
import Security from "@/components/app/settings/security";
import Plan from "@/components/app/settings/plan";
import Notif from "@/components/app/settings/notif";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("account");

  const renderSection = () => {
    switch (activeSection) {
      case "account":
        return <Account />;
      case "security":
        return <Security />;
      case "plan":
        return <Plan />;
      case "notifications":
        return <Notif />;
      default:
        return <Account />;
    }
  };

  return (
    <div className="main-content">
      <div className="flex flex-col gap-[16px]">
        <span className="font-bold text-2xl">Settings</span>
        <Tabs defaultValue={activeSection} className="flex md:hidden">
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
        </Tabs>
      </div>

      <Separator />
      <div className="flex gap-[20px] xl:gap-[60px] lg:gap-[40px] items-start">
        <div className="bg-[#fff] sticky top-[0px] p-[30px] text-[#757F87] hidden md:flex flex-col  rounded-[10px] w-full max-w-[300px] gap-[10px] border shadow-md">
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "account"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => setActiveSection("account")}>
            <User size={18} className="text-inherit" />
            <span>Profile</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "security"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => setActiveSection("security")}>
            <Key size={18} className="text-inherit" />
            <span>Login and Security</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "plan"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => setActiveSection("plan")}>
            <CreditCard size={18} className="text-inherit" />
            <span>Plan</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${
              activeSection === "notifications"
                ? "bg-[#EDF3FC] text-[#1165EF] font-semibold"
                : " hover:text-[#1165EF] hover:font-semibold"
            }`}
            onClick={() => setActiveSection("notifications")}>
            <Bell size={18} className="text-inherit" />
            <span>Notifications</span>
          </div>
        </div>
        <div className="w-full">{renderSection()}</div>
      </div>
    </div>
  );
};

export default SettingsPage;
