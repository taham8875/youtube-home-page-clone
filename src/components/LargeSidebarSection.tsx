import { Children, useState } from "react";
import YoutubeButton from "./YoutubeButton";
import { ChevronDown, ChevronUp } from "lucide-react";

type LargeSidebarSectionProps = {
  children: React.ReactNode;
  title?: string;
  numberOfVisibleItems?: number;
};

const LargeSidebarSection = ({
  children,
  title,
  numberOfVisibleItems = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, numberOfVisibleItems);

  const showExpandButton = childrenArray.length > numberOfVisibleItems;
  const ExpandButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <>
      {title && <div className="text-lg font-bold  px-4 py-2">{title}</div>}

      <div className="flex flex-col gap-2 px-4">{visibleChildren}</div>
      {showExpandButton && (
        <YoutubeButton
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          className="rounded-xl flex items-center gap-6 py-3 px-4 mx-4"
        >
          <ExpandButtonIcon size={24} />
          <div>{isExpanded ? "Show less" : "Show more"}</div>
        </YoutubeButton>
      )}
    </>
  );
};

export default LargeSidebarSection;
