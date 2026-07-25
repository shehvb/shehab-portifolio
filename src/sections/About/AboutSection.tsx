import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { profile } from "data/profile";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { SectionContainer } from "components/shared/SectionContainer";
import {
  HiSquare3Stack3D,
  HiSparkles,
  HiCheckCircle,
  HiCommandLine,
  HiClipboardDocument,
  HiCheck
} from "react-icons/hi2";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
  },
};

const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
  },
};

const terminalVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.25 }
  },
};

const metricVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.4 + i * 0.1, ease: "easeOut" },
  }),
};

const developerData = {
  name: "Shehab AbdElRahman",
  role: "Frontend Developer",
  core: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind", "BootStrap", "Framer Motion", "Git"],
  status: "Building high-quality UI ;)  "
};

const codeSnippet = `const developer = ${JSON.stringify(developerData, null, 2)};`;

export const AboutSection = () => {
  const { locale } = useLocaleContext();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const metrics = [
    { label: locale === "en" ? "React" : "ريأكت", sub: locale === "en" ? "Core Tech" : "التقنية الأساسية", color: "from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400" },
    { label: locale === "en" ? "Tailwind" : "تايلوند", sub: locale === "en" ? "Styling Engine" : "محرك التنسيق", color: "from-teal-600 to-cyan-600 dark:from-cyan-400 dark:to-teal-400" },
    { label: locale === "en" ? "Next.js" : "نيكست", sub: locale === "en" ? "Secondary Tech" : "التقنية الثانوية", color: "from-slate-800 to-slate-600 dark:from-slate-300 dark:to-slate-100" },
    { label: locale === "en" ? "TypeScript" : "تايب سكريبت", sub: locale === "en" ? "Programming Language" : "لغة برمجة", color: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500" },
    { label: locale === "en" ? "JavaScript" : "جافاسكريبت", sub: locale === "en" ? "Programming Language" : "لغة برمجة", color: "from-amber-600 to-yellow-500 dark:from-yellow-400 dark:to-amber-500" },
    { label: "100%", sub: locale === "en" ? "Responsive Design" : "تصميم متجاوب", color: "from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500" },
  ];

  const philosophyPills = [
    { label: locale === "en" ? "⚡ Performance-First" : "⚡ أداء متميز أولاً" },
    { label: locale === "en" ? "🎨 Clean Architecture" : "🎨 بنية كود نظيفة" },
    { label: locale === "en" ? "📱 Responsive UI" : "📱 تصميم متجاوب تماماً" },
  ];

  const highlights = [
    {
      icon: HiSquare3Stack3D,
      title: locale === "en" ? "UI Architecture & Performance" : "بنية واجهة المستخدم والأداء",
      description: locale === "en"
        ? "Building modular, scalable React component systems designed for optimal rendering and high performance."
        : "بناء أنظمة مكونات ريأكت قابلة للتوسع والتعديل ومصممة للحصول على أفضل أداء.",
      iconGradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: HiSparkles,
      title: locale === "en" ? "Fluid Animations & FX" : "الحركات والتأثيرات التفاعلية",
      description: locale === "en"
        ? "Creating micro-interactions and smooth user interface transitions powered by Framer Motion."
        : "إنشاء تفاعلات دقيقة وانتقالات سلسة للواجهة باستخدام فريمر موشن.",
      iconGradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <SectionContainer id="about" className="relative overflow-hidden py-20">
      {/* Background Visuals: Soft Ambient Radial Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 mb-4">
          <HiCommandLine className="text-sm text-blue-500 dark:text-blue-400" />
          {locale === "en" ? "GET TO KNOW ME" : "تعرف علي"}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {locale === "en" ? "About " : "عن "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-400">
            {locale === "en" ? "Me" : "شهاب"}
          </span>
        </h2>
      </motion.div>

      {/* Bento Grid Layout (12 Columns Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 max-w-screen-2xl mx-auto">

        {/* Main Bio Card (7 Columns) */}
        <motion.div
          variants={cardLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 group relative rounded-3xl bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Top Accent Line */}
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:w-full transition-all duration-300" />

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
              {locale === "en"
                ? "Frontend Developer specializing in React & Modern UI Architecture"
                : "مطور واجهات أمامية متخصص في ريأكت وبنية الواجهات الحديثة"}
            </h3>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                {profile.aboutSummary[locale]}
              </p>
              <p>
                {locale === "en"
                  ? "Driven by a passion for clean component structure, robust state management, and modern aesthetics, I turn complex web application ideas into high-performance, accessible digital experiences."
                  : "شغوف بكتابة كود نظيف وبنية مكونات متماسكة مع إعطاء الأولوية للتصميم الأنيق والأداء العالي في جميع التطبيقات."}
              </p>
            </div>

            {/* Core Philosophy Tag Row */}
            <div className="flex flex-wrap gap-2.5 pt-6">
              {philosophyPills.map((pill) => (
                <span
                  key={pill.label}
                  className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500/40 transition-colors"
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Inner Glass Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 mt-8 border-t border-slate-200 dark:border-white/10">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                custom={i}
                variants={metricVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl bg-slate-100/80 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 p-3 sm:p-4 text-center hover:border-blue-500/40 transition-all duration-300 group/metric hover:-translate-y-0.5"
              >
                <span className={`block text-lg sm:text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${m.color}`}>
                  {m.label}
                </span>
                <span className="block text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                  {m.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Developer Terminal + Highlight Cards (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Developer Terminal Window */}
          <motion.div
            variants={terminalVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group rounded-2xl bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
          >
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-200/80 dark:bg-slate-950/60 border-b border-slate-300/70 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27c93f' }} />
                </div>
                <span className="ml-2 text-xs text-slate-600 dark:text-slate-400 font-mono tracking-wide">shehab.config.js</span>
              </div>

              {/* Copy Code Icon Button */}
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-300/60 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 border border-slate-300/80 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
                title="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <HiCheck className="text-emerald-600 dark:text-green-400 text-sm" />
                    <span className="text-emerald-600 dark:text-green-400 text-[11px] font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <HiClipboardDocument className="text-sm" />
                    <span className="text-[11px] font-mono hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200">
              <div className="text-slate-400 dark:text-slate-500">{'// developer profile'}</div>
              <div className="mt-2">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
                <span className="text-blue-600 dark:text-blue-300">developer</span>{' '}
                <span className="text-slate-500 dark:text-slate-400">=</span>{' '}
                <span className="text-amber-600 dark:text-yellow-300">{'{'}</span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-cyan-700 dark:text-cyan-300 font-medium">name</span>
                <span className="text-slate-500 dark:text-slate-400">: </span>
                <span className="text-emerald-600 dark:text-green-400">"{developerData.name}"</span>
                <span className="text-slate-500 dark:text-slate-400">,</span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-cyan-700 dark:text-cyan-300 font-medium">role</span>
                <span className="text-slate-500 dark:text-slate-400">: </span>
                <span className="text-emerald-600 dark:text-green-400">"{developerData.role}"</span>
                <span className="text-slate-500 dark:text-slate-400">,</span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-cyan-700 dark:text-cyan-300 font-medium">core</span>
                <span className="text-slate-500 dark:text-slate-400">: [</span>
                {developerData.core.map((item, idx) => (
                  <React.Fragment key={item}>
                    <span className="text-emerald-600 dark:text-green-400">"{item}"</span>
                    {idx < developerData.core.length - 1 && (
                      <span className="text-slate-500 dark:text-slate-400">, </span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-slate-500 dark:text-slate-400">],</span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-cyan-700 dark:text-cyan-300 font-medium">status</span>
                <span className="text-slate-500 dark:text-slate-400">: </span>
                <span className="text-emerald-600 dark:text-green-400">"{developerData.status}"</span>
              </div>
              <div>
                <span className="text-amber-600 dark:text-yellow-300">{'}'}</span>
                <span className="text-slate-500 dark:text-slate-400">;</span>
              </div>
              {/* Blinking cursor */}
              <div className="mt-3 flex items-center gap-1">
                <span className="text-emerald-600 dark:text-green-400">❯</span>
                <span className="w-2 h-4 bg-blue-600 dark:bg-blue-400 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* 2 Highlight Feature Cards */}
          <motion.div
            variants={cardRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-5"
          >
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative rounded-3xl bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl p-6 sm:p-7 shadow-xl dark:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex items-start gap-4 sm:gap-5"
                >
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.iconGradient} text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                      {item.title}
                      <HiCheckCircle className="text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </SectionContainer>
  );
};
