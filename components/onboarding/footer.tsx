import { Dot } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-red-700">
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
    </footer>
  );
}
