import YoutubeButton from "./YoutubeButton";
import { Bell, Mic, Search, Upload, User } from "lucide-react";

interface PageHeaderRightIconsProps {
  showFullWidthSearch: boolean;
  setShowFullWidthSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageHeaderRightIcons = ({
  showFullWidthSearch,
  setShowFullWidthSearch,
}: PageHeaderRightIconsProps) => {
  return (
    <div
      className={`${
        showFullWidthSearch ? "hidden" : "flex"
      } flex gap-3 md:gap-2 items-center flex-shrink-0`}
    >
      <YoutubeButton
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => {
          setShowFullWidthSearch(true);
        }}
      >
        <Search strokeWidth={1} />
      </YoutubeButton>
      <YoutubeButton variant="ghost" size="icon" className="hidden sm:flex md:hidden">
        <Mic strokeWidth={1} />
      </YoutubeButton>
      <YoutubeButton variant="ghost" size="icon" className="hidden sm:flex">
        <Upload strokeWidth={1} />
      </YoutubeButton>
      <YoutubeButton variant="ghost" size="icon">
        <Bell strokeWidth={1} />
      </YoutubeButton>
      <YoutubeButton variant="ghost" size="icon">
        <User strokeWidth={1} />
      </YoutubeButton>
    </div>
  );
};

export default PageHeaderRightIcons;
