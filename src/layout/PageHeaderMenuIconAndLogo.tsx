import YoutubeButton from "../components/YoutubeButton";
import { Menu } from "lucide-react";
import logo from "../assets/youtube-logo.png";

interface PageHeaderRightIconsProps {
  showFullWidthSearch: boolean;
}

const PageHeaderMenuIconAndLogo = ({
  showFullWidthSearch,
}: PageHeaderRightIconsProps) => {
  return (
    <div
      className={`${
        showFullWidthSearch ? "hidden" : "flex"
      } gap-3 items-center flex-shrink-0`}
    >
      <YoutubeButton variant="ghost" size="icon">
        <Menu strokeWidth={1} />
      </YoutubeButton>
      <img src={logo} alt="youtube-logo" className="h-14"/>
    </div>
  );
};

export default PageHeaderMenuIconAndLogo;
