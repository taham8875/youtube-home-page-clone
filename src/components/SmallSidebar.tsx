import { Home, Repeat, Clapperboard, Library } from "lucide-react";
import SmallSidebarItem from "./SmallSidebarItem";
import { useSidebarContext } from "../contexts/sidebarContext";

const SmallSidebar = () => {
  const { isSidebarOpenInLargeScreen } = useSidebarContext();
  return (
    <aside
      className={`sticky top-0 overflow-y-auto scrollbar-hidden ml-1 flex-col
  ${isSidebarOpenInLargeScreen ? "hidden" : "flex"} 
  `}
    >
      <SmallSidebarItem Icon={Home} title="Home" url="/" />
      <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
      <SmallSidebarItem
        Icon={Clapperboard}
        title="Subscriptions"
        url="/subscriptions"
      />
      <SmallSidebarItem Icon={Library} title="Library" url="/library" />
    </aside>
  );
};

export default SmallSidebar;
