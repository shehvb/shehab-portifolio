import { useState } from "react";
import { LanguageSwitcher } from "components/ui/LanguageSwitcher";
import { ThemeToggle } from "components/ui/ThemeToggle";
import { NavLinks } from "components/navigation/NavLinks";
import { HiCode } from "react-icons/hi";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { MobileNav } from "components/navigation/MobileNav";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 transition-colors duration-500">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="group flex items-center gap-2 transition-all duration-300 select-none hover:opacity-90"
        >
          <div className="flex h-7 w-8 sm:h-8 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-500 via-purple-800 to-indigo-950 dark:from-brand-500 dark:via-purple-800 dark:to-indigo-950 text-white shadow-md shadow-brand-500/20 ">
            <HiCode className="text-lg sm:text-xl" />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-purple-600 to-indigo-600 dark:from-brand-400 dark:via-purple-400 dark:to-indigo-600  uppercase">
            S.A
          </span>
        </a>
        
        {/* Desktop Nav */}
        <NavLinks />

        {/* Right side controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiOutlineXMark className="text-2xl" />
            ) : (
              <HiOutlineBars3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
