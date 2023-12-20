import { ElementType } from "react";
import { youtubeButtonStyle } from "./YoutubeButton";
import { twMerge } from "tailwind-merge";

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        youtubeButtonStyle({ variant: "ghost" }),
        "rounded-lg flex flex-col items-center gap-1 py-4 px-2"
      )}
    >
      <Icon size={24} />
      <div className="text-xs">{title}</div>
    </a>
  );
};

export default SmallSidebarItem;
