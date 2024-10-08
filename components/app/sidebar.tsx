import { SideContent } from "./drawer";

const Sidebar = () => {
  return (
    <aside className="bg-[#231232] text-white sticky top-0 h-screen inset-y-0 left-0 z-10 hidden flex-col lg:flex px-4 py-[22px] max-w-[250px]">
      <SideContent />
    </aside>
  );
};

export default Sidebar;
