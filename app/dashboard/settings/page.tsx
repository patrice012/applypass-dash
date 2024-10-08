"use client"
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Bell, CreditCard, Key, User } from "lucide-react";
import Account from "@/components/app/settings/account";
import Security from "@/components/app/settings/security";
import Plan from "@/components/app/settings/plan";
import Notif from "@/components/app/settings/notif";

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
    <div className="px-[48px] bg-[#fff] h-full py-[32px] gap-[36px] flex flex-col w-full ">
      <span className="font-bold text-2xl">Settings</span>
      <Separator />
      <div className="flex gap-[60px] items-start">
        <div className="bg-[#fff] p-[30px] text-[#757F87] rounded-[10px] w-full max-w-[300px] gap-[10px] shadow-md">
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${activeSection === "account" ? "bg-[#EDF3FC] text-[#1165EF] font-semibold" : " hover:text-[#1165EF] hover:font-semibold"}`}
            onClick={() => setActiveSection("account")}
          >
            <User size={18} className="text-inherit" />
            <span>Account Settings</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${activeSection === "security" ? "bg-[#EDF3FC] text-[#1165EF] font-semibold" : " hover:text-[#1165EF] hover:font-semibold"}`}
            onClick={() => setActiveSection("security")}
          >
            <Key size={18} className="text-inherit" />
            <span>Login and Security</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${activeSection === "plan" ? "bg-[#EDF3FC] text-[#1165EF] font-semibold" : " hover:text-[#1165EF] hover:font-semibold"}`}
            onClick={() => setActiveSection("plan")}
          >
            <CreditCard size={18} className="text-inherit" />
            <span>Plan</span>
          </div>
          <div
            className={`rounded-[5px] flex gap-[12px] p-[20px] items-center cursor-pointer ${activeSection === "notifications" ? "bg-[#EDF3FC] text-[#1165EF] font-semibold" : " hover:text-[#1165EF] hover:font-semibold"}`}
            onClick={() => setActiveSection("notifications")}
          >
            <Bell size={18} className="text-inherit" />
            <span>Notifications</span>
          </div>
        </div>
        <div className="w-full">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
