import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { youtubeButtonStyle } from "./YoutubeButton";

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

const LargeSidebarItem = ({
  IconOrImgUrl,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        youtubeButtonStyle({ variant: "ghost" }),
        `rounded-xl flex items-center gap-6 py-3 px-4 ${
          isActive ? "bg-secondary-light hover:bg-secondary-hover-2" : ""
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} alt={title} className="rounded-full h-6 w-6 " />
      ) : (
        <IconOrImgUrl size={24} />
      )}
      <div
        className={`whitespace-nowrap overflow-hidden text-ellipsis ${
          isActive ? "font-bold" : ""
        }
    `}
      >
        {title}
      </div>
    </a>
  );
};

export default LargeSidebarItem;
