import { useSidebarContext } from "../contexts/sidebarContext";
import SmallSidebar from "../components/smallSidebar";
import LargeSidebar from "../components/LargeSidebar";

const Sidebar = () => {
  const { isSidebarOpenInSmallScreen, closeSidebar } = useSidebarContext();
  return (
    <>
      {isSidebarOpenInSmallScreen && (
        <div
          onClick={closeSidebar}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-[998]"
        ></div>
      )}
      <SmallSidebar />
      <LargeSidebar />
    </>
  );
};

export default Sidebar;
