import React from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";

const buttonVariants = cva("px-4 py-2 rounded font-semibold", {
  variants: {
    color: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      small: "text-sm py-1 px-3",
      medium: "text-base py-2 px-4",
      large: "text-lg py-3 px-5",
    },
    disabled: {
      true: "bg-gray-300 text-gray-700 cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  size,
  isDisabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        buttonVariants({
          color,
          size,
          disabled: isDisabled ? "true" : undefined,
        }),
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};
