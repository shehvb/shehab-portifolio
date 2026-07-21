import React from "react";
import { cn } from "lib/cn";

export const SectionContainer = ({
  id,
  children,
  className,
  showTopFade = true,
  showBottomFade = true,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  showTopFade?: boolean;
  showBottomFade?: boolean;
}) => (
  <section id={id} className={cn("relative mx-auto w-full max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 min-h-[100dvh] flex flex-col justify-center snap-start", className)}>
    {showTopFade && (
      <div 
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-[#070913] dark:via-[#070913]/50 dark:to-transparent z-0" 
        aria-hidden="true" 
      />
    )}
    {showBottomFade && (
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#070913] dark:via-[#070913]/50 dark:to-transparent z-0" 
        aria-hidden="true" 
      />
    )}
    <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
      {children}
    </div>
  </section>
);
