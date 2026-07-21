import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { profile } from "data/profile";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { useGlitch } from "hooks/useGlitch";
import { Button } from "components/ui/Button";
import { SectionContainer } from "components/shared/SectionContainer";
import { PixelParticles } from "components/ui/PixelParticles";
import profilePhoto from "../../assets/photo.jpg";

const TypingText = ({ text, delay = 60, isGlitched, getScrambledText }: { text: string; delay?: number; isGlitched?: boolean; getScrambledText?: (t: string, r?: number) => string }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  const displayText = isGlitched && getScrambledText ? getScrambledText(currentText, 0.25) : currentText;

  return (
    <span className={`inline-flex items-center ${isGlitched ? "animate-micro-glitch text-cyan-400 dark:text-cyan-300" : ""}`}>
      <span>{displayText}</span>
      <span className="ml-1 w-[2px] h-[1em] bg-brand-600 dark:bg-brand-400 animate-pulse" />
    </span>
  );
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.3 } 
  },
};

export const HeroSection = () => {
  const { locale } = useLocaleContext();
  const { isGlitched, getScrambledText } = useGlitch(3000, 5000, 300);
  
  const displayName = locale === "en" ? profile.fullName : "شهاب عبد الرحمن";
  const displayRole = locale === "en" ? profile.roleTitle : "مطور واجهات أمامية | متخصص ريأكت";
  
  return (
    <SectionContainer id="hero" showTopFade={false} className={`relative overflow-hidden ${isGlitched ? "animate-hero-page-glitch" : ""}`}>
      {/* Background Visuals: Grid Pattern, Floating Pixel Dust & Soft Radial Glows */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" 
        style={{ 
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)', 
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' 
        }} 
      />
      <PixelParticles />
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full bg-brand-500/10 dark:bg-brand-500/5 blur-[80px] md:blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] md:blur-[120px] pointer-events-none" />
 
      {/* Fleeting Background Glitch Static Overlay */}
      {isGlitched && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
          <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline" />
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scanline" />
          <div className="absolute top-1/2 left-10 w-32 h-6 bg-cyan-500/20 blur-sm animate-pulse" />
          <div className="absolute bottom-1/3 right-12 w-48 h-4 bg-purple-500/20 blur-sm animate-pulse" />
        </div>
      )}
 
      <motion.div layout className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
        <motion.div 
          layout
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="flex-1 space-y-5 sm:space-y-6 md:space-y-8 text-center lg:text-start"
        >
          <motion.div layout variants={itemVariants}>
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 min-h-[1.5em]">
              <TypingText text={displayRole} isGlitched={isGlitched} getScrambledText={getScrambledText} />
            </p>
          </motion.div>
          
          <motion.div layout variants={itemVariants}>
            <h1 className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight py-1 select-none">
              <span className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600 dark:from-brand-400 dark:via-purple-400 dark:to-indigo-400 chromatic-aberration ${isGlitched ? "animate-glitch-intense" : ""}`}>
                {isGlitched ? getScrambledText(displayName, 0.4) : displayName}
              </span>

              {/* Data line overlay during glitch */}
              {isGlitched && (
                <span className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center lg:justify-start">
                  <span className="w-full h-[2px] bg-cyan-400 opacity-80 blur-[0.5px]" />
                </span>
              )}
            </h1>
          </motion.div>
          
          <motion.div layout variants={itemVariants}>
            <p className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-medium">
              {profile.heroHeadline[locale]}
            </p>
          </motion.div>
          
          <motion.div layout variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto lg:mx-0">
              {profile.heroSubheadline[locale]}
            </p>
          </motion.div>
          
          <motion.div layout variants={itemVariants} className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5">
            <Button 
              className="w-full sm:w-auto shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white transition-all duration-300 hover:-translate-y-1 px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              {profile.ctaLabel[locale]}
            </Button>
            <Button 
              variant="secondary"
              className="w-full sm:w-auto bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-xl border border-white/15 dark:border-white/[0.07] ring-1 ring-inset ring-white/[0.05] text-slate-900 dark:text-white hover:bg-white/10 dark:hover:bg-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] transition-all duration-300 hover:-translate-y-1 px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {locale === 'en' ? 'Contact Me' : 'تواصل معي'}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          layout
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center lg:justify-end relative w-full max-w-lg mx-auto lg:max-w-none"
        >
          <div className="relative group">
            {/* Dynamic Headshot: Spinning glowing ring backdrop */}
            <div className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500 via-purple-500 to-indigo-600 blur-sm transition duration-500 animate-spin-slow ${isGlitched ? "opacity-100 scale-105" : "opacity-75 group-hover:opacity-100"}`} />
            <div className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500 via-purple-500 to-indigo-600 blur-sm transition duration-500 ${isGlitched ? "opacity-90 animate-pulse" : "opacity-50 group-hover:opacity-85 animate-pulse-glow"}`} />
            
            {/* Main Image Container (Static & Stable) */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden border-4 border-white dark:border-slate-950 bg-white dark:bg-slate-900 shadow-2xl">
              <img 
                src={profilePhoto} 
                alt={profile.fullName} 
                className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(profile.fullName) + "&size=512&background=random";
                }}
              />
            </div>

            {/* Active Status Badge (Static & Stable) */}
            <div className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 md:bottom-2 md:right-2 lg:bottom-3 lg:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 shadow-xl rounded-full px-2.5 py-1 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2.5 z-10 transition duration-300 group-hover:scale-105">
              <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                {locale === 'en' ? 'Available for work' : 'متاح للعمل'}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
