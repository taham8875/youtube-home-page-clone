import { ChevronLeft, ChevronRight } from "lucide-react";
import YoutubeButton from "./YoutubeButton";

interface ChevronButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ChevronButton = ({ direction, onClick }: ChevronButtonProps) => {
  const gradientDirection = direction === "left" ? "to-r" : "to-l";
  const justifyDirection =
    direction === "left" ? "justify-start" : "justify-end";

  return (
    <div
      className={`absolute ${direction}-0 top-1/2 -translate-y-1/2 bg-gradient-${gradientDirection} from-white from-50% to-transparent w-24 h-full flex ${justifyDirection}`}
    >
      <YoutubeButton size="icon" variant="ghost" onClick={onClick}>
        {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
      </YoutubeButton>
    </div>
  );
};

export default ChevronButton;
