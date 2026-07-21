import React from "react";
import { cn } from "lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
}

export const Button = ({ variant = "primary", loading, className, children, ...props }: ButtonProps) => {
  const hasCustomPadding = className && (className.includes("p-") || className.includes("px-") || className.includes("py-"));
  const hasCustomTextSize = className && className.includes("text-");
  const hasCustomFontWeight = className && className.includes("font-");

  return (
    <button
      className={cn(
        "rounded-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-60 flex items-center justify-center border border-transparent",
        !hasCustomPadding && "px-4 py-2",
        !hasCustomTextSize && "text-sm",
        !hasCustomFontWeight && "font-medium",
        variant === "primary" && "bg-brand-600 text-white hover:bg-brand-500",
        variant === "secondary" &&
          "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600",
        variant === "ghost" && "bg-transparent text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800",
        className
      )}
      {...props}
    >
      {loading ? "..." : children}
    </button>
  );
};
