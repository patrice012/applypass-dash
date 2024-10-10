import { Separator } from "@/components/ui/separator";
import { MoveLeft, Pencil } from "lucide-react";
import { SettingEditModal } from "@/components/dialogs/setting-edit";
import { DeleteAccount } from "@/components/dialogs/unsubscribe";

export default function Security({
  setClick,
  click,
}: {
  setClick: (value: boolean) => void;
  click: boolean;
}) {
  return (
    <div className="w-full flex flex-col gap-[20px] mb-[100px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex gap-[10px] items-center">
          {click ? (
            <MoveLeft
              className="flex md:hidden"
              onClick={() => setClick(false)}
              size={18}
            />
          ) : (
            ""
          )}{" "}
          <span className="font-bold text-lg md:text-2xl">
            Login and security
          </span>
        </div>
        <span className="text-[#757F87] text-sm md:text-base">
          Manage your log in and account security details below
        </span>
      </div>
      <Separator />
      <div className="flex flex-col gap-[15px] ">
        <div className="md:grid col-span-3 grid-cols-3 gap-[10px] md:gap-0 flex flex-col md:grid-cols-3 ">
          <div className="col-span-1 flex w-full justify-between">
            <span className="text-[#0E1E2F] text-[15px] font-bold">Email</span>
            <SettingEditModal title="Email">
              <Pencil size={18} className="cursor-pointer flex md:hidden" />
            </SettingEditModal>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F] justify-between">
              <span>raj@email.com</span>
              <SettingEditModal title="Email">
                <Pencil size={18} className="cursor-pointer hidden md:flex" />
              </SettingEditModal>
            </div>
          </div>
        </div>
        <Separator />
        <div className="md:grid col-span-3 grid-cols-3 gap-[10px] md:gap-0 flex flex-col md:grid-cols-3 ">
          <div className="col-span-1 flex w-full justify-between">
            <span className="text-[#0E1E2F] text-[15px] font-bold">
              Password
            </span>
            <SettingEditModal title="Password">
              <Pencil size={18} className="cursor-pointer flex md:hidden" />
            </SettingEditModal>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F] justify-between">
              <span>●●●●●●●●●●●●</span>
              <SettingEditModal title="Password">
                <Pencil size={18} className="cursor-pointer hidden md:flex" />
              </SettingEditModal>
            </div>
          </div>
        </div>
        <Separator />
        <div className="md:grid col-span-3 grid-cols-3 gap-[10px] md:gap-0 flex flex-col md:grid-cols-3 ">
          <div className="col-span-1 flex w-full justify-between">
            <span className="text-[#0E1E2F] text-[15px] font-bold">
              Two-factor authentication
            </span>
            <Pencil
              size={18}
              className="shrink-0 cursor-pointer flex md:hidden"
            />
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F] gap-2 justify-between">
              <span>Disabled</span>
              <Pencil
                size={18}
                className="shrink-0 cursor-pointer hidden  md:flex"
              />
            </div>
          </div>
        </div>
        <Separator />
        <div className="md:grid col-span-3 grid-cols-3 md:items-center gap-[10px] md:gap-0 flex flex-col md:grid-cols-3  ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[15px] font-bold">
              Security
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F]  justify-normal md:justify-end">
              <button className=" w-full md:max-w-max border font-semibold border-[#EBEEF1] px-[15px] py-[10px] rounded-[5px]">
                Log out from other device
              </button>
            </div>
          </div>
        </div>
        <Separator />
        <div className="md:grid col-span-3 grid-cols-3 md:items-center gap-[10px] md:gap-0 flex flex-col md:grid-cols-3  ">
          <div className="col-span-1">
            <span className="text-[#0E1E2F] text-[15px] font-bold">
              Delete Account
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex w-full text-[#0E1E2F]  md:justify-end">
              <DeleteAccount>
                <button className="bg-[#F9E2E2] w-full md:max-w-max font-semibold transition ease-in-out duration-300 hover:bg-transparent text-[#F83E3E] border px-[15px] py-[10px] border-[#F83E3E] rounded-[5px]">
                  Delete Account
                </button>
              </DeleteAccount>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
