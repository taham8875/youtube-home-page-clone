import { ChevronLeft, ChevronRight } from "lucide-react";
import YoutubeButton from "./YoutubeButton";

interface ChevronButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ChevronButton = ({ direction, onClick }: ChevronButtonProps) => {
  const classNameLeft =
    "absolute top-1/2 bottom-0 left-0 -translate-y-1/2 w-10 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full flex ";
  const classNameRight =
    "absolute top-1/2 bottom-0 right-0 -translate-y-1/2 w-10 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end";

  return (
    <div className={direction === "left" ? classNameLeft : classNameRight}>
      <YoutubeButton size="icon" variant="ghost" onClick={onClick}>
        {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
      </YoutubeButton>
    </div>
  );
};

export default ChevronButton;
