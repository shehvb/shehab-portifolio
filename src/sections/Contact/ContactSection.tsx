import React from "react";
import { motion, Variants } from "framer-motion";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { SectionContainer } from "components/shared/SectionContainer";
import { ContactTerminal } from "components/forms/ContactTerminal";
import { HiEnvelope } from "react-icons/hi2";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const ContactSection = () => {
  const { locale } = useLocaleContext();

  return (
    <SectionContainer id="contact" className="relative overflow-hidden py-12 sm:py-16">
      {/* Background Visuals: Soft Ambient Radial Blur Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-3xl mx-auto mb-10 relative z-10"
      >
        <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 mb-4">
          <HiEnvelope className="text-sm text-blue-500 dark:text-blue-400" />
          {locale === "en" ? "GET IN TOUCH" : "تواصل معي"}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {locale === "en" ? "Contact " : "تواصل "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-400">
            {locale === "en" ? "Me" : "معي"}
          </span>
        </h2>
      </motion.div>

      {/* Terminal Contact Window Container */}
      <div className="relative z-10">
        <ContactTerminal />
      </div>
    </SectionContainer>
  );
};
