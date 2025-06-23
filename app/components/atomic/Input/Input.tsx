import * as React from "react";
import { cn } from "../../../lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startIcon, endIcon, containerClassName, ...props },
    ref,
  ) => {
    return (
      <div className={cn(containerClassName, "relative flex items-center")}>
        {startIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "w-full appearance-none outline-0 text-gray-800 dark:text-white",
            "disabled:!opacity-25 disabled:cursor-not-allowed",
            "transition-all duration-300 ease-in-out",
            "border-2 border-gray-200 dark:border-zinc-800",
            "bg-white dark:bg-zinc-800",
            "hover:border-gray-300 dark:hover:border-white",
            "disabled:!border-gray-300",
            "dark:focus:border-zinc-800",
            "focus:bg-white dark:focus:bg-transparent",
            "px-3 py-2 text-sm rounded-xl shadow-sm",
            startIcon && "pl-10",
            endIcon && "pr-10",
            className,
          )}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400">
            {endIcon}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };