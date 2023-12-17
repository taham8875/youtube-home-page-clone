import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const youtubeButtonStyle = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-white",
      ],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "p-2",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type YoutubeButtonProps = VariantProps<typeof youtubeButtonStyle> &
  ComponentProps<"button">;

const YoutubeButton = ({
  variant,
  size,
  className,
  ...props
}: YoutubeButtonProps) => {
  const youtubeButtonClasses = youtubeButtonStyle({ variant, size });
  return (
    <button {...props} className={twMerge(youtubeButtonClasses, className)} />
  );
};

export default YoutubeButton;
