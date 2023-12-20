import { useEffect, useRef, useState } from "react";
import YoutubeButton from "./YoutubeButton";
import { ArrowLeft, Mic, Search } from "lucide-react";

interface PageHeaderRightIconsProps {
  showFullWidthSearch: boolean;
  setShowFullWidthSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageHeaderSearchForm = ({
  showFullWidthSearch,
  setShowFullWidthSearch,
}: PageHeaderRightIconsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isScreenLargerThanMedium, setIsScreenLargerThanMedium] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) =>
        setIsScreenLargerThanMedium(e.matches)
      );
    if (showFullWidthSearch) {
      searchInputRef.current?.focus();
    }
    if (isScreenLargerThanMedium) {
      setShowFullWidthSearch(false);
    }
  }, [showFullWidthSearch, isScreenLargerThanMedium, setShowFullWidthSearch]);

  const searchYoutubeVideos = (e: React.SyntheticEvent) => {
    e.preventDefault();
    window.location.href = `https://www.youtube.com/results?search_query=${searchQuery}`;
  };

  return (
    <form
      onSubmit={searchYoutubeVideos}
      className={`${
        showFullWidthSearch ? "flex" : "md:flex hidden"
      } gap-4 items-center justify-center flex-grow`}
    >
      {showFullWidthSearch && (
        <YoutubeButton
          variant="ghost"
          size="icon"
          onClick={() => setShowFullWidthSearch(false)}
        >
          <ArrowLeft strokeWidth={1} />
        </YoutubeButton>
      )}
      <div className="flex flex-grow max-w-[37.5rem] items-stretch">
        <div
          className={`flex items-center rounded-full rounded-r-none border border-secondary-border shadow-inner shadow-secondary w-full  ${
            isSearchFocused ? "border-blue-700" : ""
          } outline-none ${isSearchFocused ? "" : "ml-6"}`}
        >
          <Search
            strokeWidth={1}
            className={`-translate-x-2 ${
              isSearchFocused ? "ml-6" : "opacity-0"
            }`}
          />
          <input
            ref={searchInputRef}
            type="text"
            name="search"
            placeholder="Search"
            className={`outline-none flex-auto bg-transparent`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
        <YoutubeButton
          size="icon"
          className={`rounded-l-none border border-secondary-border border-l-0 h-auto ${
            isSearchFocused ? "w-[4.7533rem]" : "w-[5rem]"
          }`}
          type="submit"
        >
          <Search strokeWidth={1} />
        </YoutubeButton>
      </div>
      <YoutubeButton size="icon">
        <Mic strokeWidth={1} />
      </YoutubeButton>
    </form>
  );
};

export default PageHeaderSearchForm;
