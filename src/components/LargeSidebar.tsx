import {
  Home,
  Repeat,
  Clapperboard,
  Library,
  PlaySquare,
  Clock,
  ListVideo,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
  Settings,
  Flag,
  HelpCircle,
  Info,
  History,
} from "lucide-react";
import { playlists } from "../data/playlists";
import { sidebarFooterLinks } from "../data/sidebarFooterLinks";
import { subscriptions } from "../data/subscriptions";
import LargeSidebarItem from "./LargeSidebarItem";
import LargeSidebarSection from "./LargeSidebarSection";
import PageHeaderMenuIconAndLogo from "./PageHeaderMenuIconAndLogo";
import { useSidebarContext } from "../contexts/sidebarContext";

const LargeSidebar = () => {
  const { isSidebarOpenInSmallScreen, isSidebarOpenInLargeScreen } =
    useSidebarContext();

  return (
    <aside
      className={`w-64 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden flex-col gap-2 mr-12
  ${isSidebarOpenInLargeScreen ? "lg:flex" : "lg:hidden"}
  ${
    isSidebarOpenInSmallScreen ? "flex z-[999] bg-white max-h-screen" : "hidden"
  }
  `}
    >
      <div className="lg:hidden px-4 pt-1 pb-4 sticky top-0 bg-white z-[999]">
        <PageHeaderMenuIconAndLogo showFullWidthSearch={false} />
      </div>
      <LargeSidebarSection>
        <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
        <LargeSidebarItem IconOrImgUrl={Repeat} title="Shorts" url="/" />
        <LargeSidebarItem
          IconOrImgUrl={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
      </LargeSidebarSection>
      <hr />
      <LargeSidebarSection numberOfVisibleItems={7}>
        <LargeSidebarItem
          IconOrImgUrl={Library}
          title="Library"
          url="/library"
        />
        <LargeSidebarItem
          IconOrImgUrl={History}
          title="History"
          url="/history"
        />
        <LargeSidebarItem
          IconOrImgUrl={PlaySquare}
          title="Your Videos"
          url="/your-videos"
        />
        <LargeSidebarItem
          IconOrImgUrl={Clock}
          title="Watch Later"
          url="/playlist?list=WL"
        />
        {playlists.map((playlist) => (
          <LargeSidebarItem
            key={playlist.id}
            IconOrImgUrl={ListVideo}
            title={playlist.name}
            url={`/playlist?list=${playlist.id}`}
          />
        ))}
      </LargeSidebarSection>
      <hr />
      <LargeSidebarSection title="Subscriptions" numberOfVisibleItems={5}>
        {subscriptions.map((subscription) => (
          <LargeSidebarItem
            key={subscription.id}
            IconOrImgUrl={subscription.imgUrl}
            title={subscription.channelName}
            url={`/channel/${subscription.id}`}
          />
        ))}
      </LargeSidebarSection>
      <hr />
      <LargeSidebarSection title="Explore">
        <LargeSidebarItem
          IconOrImgUrl={Flame}
          title="Trending"
          url="/trending"
        />
        <LargeSidebarItem
          IconOrImgUrl={ShoppingBag}
          title="Shopping"
          url="/shopping"
        />
        <LargeSidebarItem IconOrImgUrl={Music2} title="Music" url="/music" />
        <LargeSidebarItem
          IconOrImgUrl={Film}
          title="Movies & TV"
          url="/movies-tv"
        />
        <LargeSidebarItem IconOrImgUrl={Radio} title="Live" url="/live" />
        <LargeSidebarItem
          IconOrImgUrl={Gamepad2}
          title="Gaming"
          url="/gaming"
        />
        <LargeSidebarItem IconOrImgUrl={Newspaper} title="News" url="/news" />
        <LargeSidebarItem IconOrImgUrl={Trophy} title="Sports" url="/sports" />
        <LargeSidebarItem
          IconOrImgUrl={Lightbulb}
          title="Learning"
          url="/learning"
        />
        <LargeSidebarItem
          IconOrImgUrl={Shirt}
          title="Fashion & Beauty"
          url="/fashion-beauty"
        />
        <LargeSidebarItem
          IconOrImgUrl={Podcast}
          title="Podcasts"
          url="/podcasts"
        />
      </LargeSidebarSection>
      <hr />
      <LargeSidebarSection>
        <LargeSidebarItem
          IconOrImgUrl={Settings}
          title="Setting"
          url="/setting"
        />
        <LargeSidebarItem
          IconOrImgUrl={Flag}
          title="Report History"
          url="/reporthistory"
        />
        <LargeSidebarItem IconOrImgUrl={HelpCircle} title="Help" url="/help" />
        <LargeSidebarItem
          IconOrImgUrl={Info}
          title="Send Feedback"
          url="/send-feedback"
        />
      </LargeSidebarSection>
      <hr />
      <footer className="py-2 px-4 flex gap-2 flex-wrap">
        {sidebarFooterLinks.map((link) => (
          <a key={link.title} href={link.url} className="text-sm text-gray-800">
            {link.title}
          </a>
        ))}
        <div className="text-xs text-gray-400 mt-3">© 2023 Google LLC</div>
      </footer>
    </aside>
  );
};

export default LargeSidebar;
