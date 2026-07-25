import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { SectionContainer } from "components/shared/SectionContainer";
import { 
  SiReact, 
  // SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiTailwindcss, 
  // SiFramer, 
  SiGit, 
  // SiVite, 
  // SiNpm,
  SiNextdotjs,
  SiRedux,
  SiCplusplus,
  SiPython,
  // SiJira,
  SiSlack
} from "react-icons/si";
import { 
  HiCommandLine, 
  // HiDevicePhoneMobile, 
  HiGlobeAlt, 
  HiCubeTransparent,
  HiCpuChip,
  HiMiniUserGroup,
  HiMiniCalendarDays,
  HiMiniAcademicCap,
  HiMiniArrowsUpDown,
  HiMiniFolderOpen,
  HiSparkles,
  HiCursorArrowRays,
  HiBolt
} from "react-icons/hi2";

// Animation Variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const categoryContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const categoryCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: { en: string; ar: string };
  description: { en: string; ar: string };
  glowClass: string; // Tailwind glow class on hover
  iconColor: string; // Tailwind icon color class
}

// Sub-component: individual skill badge with 2-second hover tooltip
const SkillBadge = ({ skill, locale }: { skill: SkillItem; locale: "en" | "ar" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    timerRef.current = setTimeout(() => setShowTooltip(true), 2000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    setShowTooltip(false);
  }, []);

  const SkillIcon = skill.icon;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group/badge relative flex items-center justify-between p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/5 cursor-default transition-all duration-300 ${skill.glowClass}`}
    >
      <div className="flex items-center gap-2">
        <SkillIcon className={`text-lg sm:text-xl transition-transform duration-500 group-hover/badge:rotate-[360deg] ${skill.iconColor}`} />
        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
          {skill.name}
        </span>
      </div>

      {/* Level Pill */}
      <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-blue-500/10 dark:bg-white/5 text-blue-600 dark:text-slate-400 border border-blue-500/20 dark:border-white/10 shrink-0">
        {skill.level[locale]}
      </span>

      {/* Floating Tooltip (appears after 2s hover) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mt-2 z-50 p-3 rounded-xl bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20"
          >
            <div className="flex items-start gap-2">
              <SkillIcon className={`text-sm mt-0.5 shrink-0 ${skill.iconColor}`} />
              <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300">
                {skill.description[locale]}
              </p>
            </div>
            {/* Arrow */}
            <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45 bg-slate-800/95 dark:bg-slate-900/95 border-l border-t border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface SkillCategory {
  title: { en: string; ar: string };
  subtext: { en: string; ar: string };
  icon: React.ComponentType<{ className?: string }>;
  colSpan: string; // Tailwind grid layout column span
  skills: SkillItem[];
}

export const SkillsSection = () => {
  const { locale } = useLocaleContext();

  const categories: SkillCategory[] = [
    {
      title: { en: "Frontend Development", ar: "تطوير الواجهات الأمامية" },
      subtext: { 
        en: "Building responsive, state-driven interfaces and modern single-page applications.", 
        ar: "بناء واجهات متجاوبة تعتمد على البيانات وتطبيقات الصفحة الواحدة الحديثة." 
      },
      icon: HiCpuChip,
      colSpan: "lg:col-span-7",
      skills: [
        { 
          name: "React.js", 
          icon: SiReact, 
          level: { en: "Core Library", ar: "مكتبة أساسية" }, 
          description: { en: "Building dynamic SPAs with component-driven architecture, hooks, context API, and performance-optimized rendering.", ar: "بناء تطبيقات ديناميكية بهندسة المكونات، والـ hooks، وواجهة السياق، وتحسين الأداء." },
          glowClass: "hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:border-sky-500/40",
          iconColor: "text-sky-500"
        },
        { 
          name: "TypeScript & JavaScript", 
          icon: SiTypescript, 
          level: { en: "Core Languages", ar: "لغات أساسية" }, 
          description: { en: "Strong typing with TypeScript for scalable codebases, alongside advanced ES6+ patterns including async/await and destructuring.", ar: "كتابة كود مُنظّم بـ TypeScript لمشاريع قابلة للتوسع، مع أنماط ES6+ المتقدمة." },
          glowClass: "hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:border-blue-500/40",
          iconColor: "text-blue-500"
        },
        { 
          name: "Next.js", 
          icon: SiNextdotjs, 
          level: { en: "Framework", ar: "إطار عمل" }, 
          description: { en: "Server-side rendering, static generation, API routes, and file-based routing for production-grade React applications.", ar: "عرض من جهة الخادم، توليد ثابت، ومسارات API لتطبيقات React جاهزة للإنتاج." },
          glowClass: "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-slate-400/40",
          iconColor: "text-slate-800 dark:text-white"
        },
        { 
          name: "Redux", 
          icon: SiRedux, 
          level: { en: "State Management", ar: "إدارة الحالة" }, 
          description: { en: "Centralized state management with Redux Toolkit, slices, thunks, and middleware for complex application state.", ar: "إدارة حالة مركزية باستخدام Redux Toolkit والـ slices والـ thunks للتطبيقات المعقدة." },
          glowClass: "hover:shadow-[0_0_20px_rgba(118,74,188,0.25)] hover:border-purple-500/40",
          iconColor: "text-purple-500"
        },
        { 
          name: "Tailwind CSS / CSS3", 
          icon: SiTailwindcss, 
          level: { en: "Styling", ar: "تنسيق متميز" }, 
          description: { en: "Utility-first CSS framework for rapid UI development, custom themes, responsive design, and dark mode support.", ar: "إطار CSS لتصميم سريع وبناء واجهات متجاوبة مع دعم الوضع الداكن والسمات المخصصة." },
          glowClass: "hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-500/40",
          iconColor: "text-cyan-500"
        },
        { 
          name: "HTML5", 
          icon: SiHtml5, 
          level: { en: "Markup", ar: "هيكلية الويب" }, 
          description: { en: "Semantic markup, accessibility best practices, SEO-optimized structure, and modern HTML5 APIs.", ar: "ترميز دلالي، أفضل ممارسات إمكانية الوصول، وهيكلة محسّنة لمحركات البحث." },
          glowClass: "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:border-orange-500/40",
          iconColor: "text-orange-500"
        },
      ]
    },
    {
      title: { en: "Computer Science & Languages", ar: "علوم الحاسب ولغات البرمجة" },
      subtext: { 
        en: "Algorithmic problem-solving and software engineering principles.", 
        ar: "حل المشكلات الخوارزمية ومبادئ هندسة البرمجيات." 
      },
      icon: HiCubeTransparent,
      colSpan: "lg:col-span-5",
      skills: [
        { 
          name: "C++", 
          icon: SiCplusplus, 
          level: { en: "Programming", ar: "لغة برمجة" }, 
          description: { en: "Systems-level programming, memory management, STL containers, and competitive programming foundations.", ar: "برمجة على مستوى النظام، إدارة الذاكرة، حاويات STL، وأسس البرمجة التنافسية." },
          glowClass: "hover:shadow-[0_0_20px_rgba(0,89,156,0.25)] hover:border-blue-600/40",
          iconColor: "text-blue-600"
        },
        { 
          name: "Python", 
          icon: SiPython, 
          level: { en: "Programming", ar: "لغة برمجة" }, 
          description: { en: "Scripting, automation, data processing, and rapid prototyping with Python's rich ecosystem.", ar: "كتابة سكربتات، أتمتة، معالجة بيانات، ونمذجة سريعة مع نظام Python الغني." },
          glowClass: "hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:border-yellow-500/40",
          iconColor: "text-yellow-500"
        },
        { 
          name: "Data Structures & Algorithms", 
          icon: HiCpuChip, 
          level: { en: "CS Core", ar: "أساس خوارزمي" }, 
          description: { en: "Proficient in arrays, trees, graphs, sorting, searching, and complexity analysis for optimal solutions.", ar: "إتقان المصفوفات والأشجار والرسوم البيانية والترتيب والبحث وتحليل التعقيد." },
          glowClass: "hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-500/40",
          iconColor: "text-emerald-500"
        },
        { 
          name: "OOP", 
          icon: HiCubeTransparent, 
          level: { en: "Design Paradigm", ar: "نموذج برمجي" }, 
          description: { en: "Object-oriented design with encapsulation, inheritance, polymorphism, and SOLID principles.", ar: "تصميم كائني التوجه مع التغليف والوراثة وتعدد الأشكال ومبادئ SOLID." },
          glowClass: "hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:border-indigo-500/40",
          iconColor: "text-indigo-500"
        },
        { 
          name: "Problem Solving", 
          icon: HiCommandLine, 
          level: { en: "Analytical", ar: "تحليلي" }, 
          description: { en: "Breaking down complex challenges into algorithmic steps, debugging, and systematic troubleshooting.", ar: "تحليل التحديات المعقدة إلى خطوات خوارزمية، وتصحيح الأخطاء بمنهجية." },
          glowClass: "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:border-sky-500/40",
          iconColor: "text-sky-500"
        },
      ]
    },
    {
      title: { en: "Tools, APIs & Web Architecture", ar: "الأدوات، الواجهات وبنية الويب" },
      subtext: { 
        en: "Backend integration, version control, and Agile team workflows.", 
        ar: "الربط مع الخدمات الخلفية، وإدارة الإصدارات، ومنهجية العمل المرنة للفرق." 
      },
      icon: HiGlobeAlt,
      colSpan: "lg:col-span-7",
      skills: [
        { 
          name: "RESTful APIs & Fetching", 
          icon: HiGlobeAlt, 
          level: { en: "Async", ar: "غير متزامن" }, 
          description: { en: "Consuming and integrating REST APIs with fetch/axios, handling async flows, error states, and data caching.", ar: "استهلاك ودمج واجهات REST مع fetch/axios، ومعالجة التدفقات غير المتزامنة والتخزين المؤقت." },
          glowClass: "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:border-sky-500/40",
          iconColor: "text-sky-500"
        },
        { 
          name: "Git & GitHub", 
          icon: SiGit, 
          level: { en: "Version Control", ar: "إدارة الكود" }, 
          description: { en: "Branching strategies, pull requests, code reviews, merge conflict resolution, and collaborative workflows.", ar: "استراتيجيات الفروع، طلبات السحب، مراجعات الكود، وحل التعارضات في العمل الجماعي." },
          glowClass: "hover:shadow-[0_0_20px_rgba(240,80,50,0.25)] hover:border-orange-600/40",
          iconColor: "text-orange-600"
        },
        { 
          name: "Jira & Slack", 
          icon: SiSlack, 
          level: { en: "Agile Workflow", ar: "منهجية العمل المرنة" }, 
          description: { en: "Sprint planning, ticket management, daily standups, and team communication in Agile/Scrum environments.", ar: "تخطيط السبرنت، إدارة التذاكر، الاجتماعات اليومية، والتواصل الفعّال ضمن فرق Agile." },
          glowClass: "hover:shadow-[0_0_20px_rgba(74,21,75,0.25)] hover:border-purple-600/40",
          iconColor: "text-[#4a154b] dark:text-[#ecb22e]"
        },
        { 
          name: "CRUD & LocalStorage", 
          icon: HiMiniFolderOpen, 
          level: { en: "State Persistence", ar: "حفظ البيانات" }, 
          description: { en: "Full CRUD operations, browser storage APIs, data serialization, and offline-capable state persistence.", ar: "عمليات CRUD كاملة، واجهات تخزين المتصفح، وتسلسل البيانات للعمل بدون اتصال." },
          glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:border-amber-500/40",
          iconColor: "text-amber-500"
        },
        { 
          name: "Color Theory & UI Design", 
          icon: HiSparkles, 
          level: { en: "Creative", ar: "تصميم إبداعي" }, 
          description: { en: "Applying color psychology, contrast ratios, visual hierarchy, and modern design trends to craft polished interfaces.", ar: "تطبيق علم نفس الألوان ونسب التباين والتسلسل البصري لتصميم واجهات احترافية." },
          glowClass: "hover:shadow-[0_0_20px_rgba(236,72,153,0.25)] hover:border-pink-500/40",
          iconColor: "text-pink-500"
        },
        { 
          name: "DOM Manipulation", 
          icon: HiCursorArrowRays, 
          level: { en: "Interactive", ar: "تفاعلي" }, 
          description: { en: "Direct DOM access, event delegation, dynamic element creation, and vanilla JS interactivity patterns.", ar: "الوصول المباشر للـ DOM، تفويض الأحداث، إنشاء عناصر ديناميكية، وأنماط التفاعل." },
          glowClass: "hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:border-teal-500/40",
          iconColor: "text-teal-500"
        },
        { 
          name: "AI-Assisted Workflows (Spec-Kit / SuperPowers )", 
          icon: HiBolt, 
          level: { en: "Velocity", ar: "سرعة التنفيذ" }, 
          description: { en: "Leveraging AI-powered dev tools for spec generation, code scaffolding, and accelerated development cycles.", ar: "استخدام أدوات تطوير مدعومة بالذكاء الاصطناعي لتوليد المواصفات وتسريع دورات التطوير." },
          glowClass: "hover:shadow-[0_0_20px_rgba(250,204,21,0.25)] hover:border-yellow-400/40",
          iconColor: "text-yellow-400"
        },
      ]
    },
    {
      title: { en: "Leadership & Mentorship", ar: "القيادة التقنية والتوجيه" },
      subtext: { 
        en: "Proven track record in leading development tracks and guiding developers.", 
        ar: "سجل حافل في قيادة مسارات التطوير وتوجيه المطورين." 
      },
      icon: HiMiniUserGroup,
      colSpan: "lg:col-span-5",
      skills: [
        { 
          name: "Technical Leadership", 
          icon: HiMiniUserGroup, 
          level: { en: "Lead", ar: "قيادة" }, 
          description: { en: "Leading frontend development tracks, setting technical direction, and driving architectural decisions.", ar: "قيادة مسارات تطوير الواجهات الأمامية، وتحديد التوجه التقني، واتخاذ القرارات المعمارية." },
          glowClass: "hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:border-indigo-500/40",
          iconColor: "text-indigo-500"
        },
        { 
          name: "Project Timeline Ownership", 
          icon: HiMiniCalendarDays, 
          level: { en: "Ownership", ar: "ملكية مسار" }, 
          description: { en: "Managing delivery timelines, setting milestones, and ensuring on-time feature releases across sprints.", ar: "إدارة جداول التسليم، وتحديد المراحل الرئيسية، وضمان إطلاق الميزات في الوقت المحدد." },
          glowClass: "hover:shadow-[0_0_20px_rgba(244,63,94,0.25)] hover:border-rose-500/40",
          iconColor: "text-rose-500"
        },
        { 
          name: "Team Mentorship & Guidance", 
          icon: HiMiniAcademicCap, 
          level: { en: "Mentoring", ar: "توجيه وإرشاد" }, 
          description: { en: "Mentoring junior developers through code reviews, pair programming, and knowledge-sharing sessions.", ar: "توجيه المطورين المبتدئين من خلال مراجعة الكود والبرمجة الثنائية وجلسات تبادل المعرفة." },
          glowClass: "hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-500/40",
          iconColor: "text-emerald-500"
        },
        { 
          name: "Collaborative Workflow", 
          icon: HiMiniArrowsUpDown, 
          level: { en: "Collab", ar: "تعاوني" }, 
          description: { en: "Cross-functional collaboration with designers, PMs, and backend teams to ship cohesive product features.", ar: "التعاون بين الفرق المختلفة مع المصممين ومديري المنتج وفرق الخلفية لتقديم ميزات متكاملة." },
          glowClass: "hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-violet-500/40",
          iconColor: "text-violet-500"
        },
      ]
    }
  ];

  return (
    <SectionContainer id="skills" className="relative overflow-hidden py-10 sm:py-14">
      {/* Background Visuals: Ambient Radial Glow Accents */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-3xl mx-auto mb-8 relative z-10"
      >
        <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 mb-3">
          <HiCommandLine className="text-sm text-blue-500 dark:text-blue-400" />
          {locale === "en" ? "MY TECH STACK" : "تقنياتي التقنية"}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {locale === "en" ? "Skills & " : "المهارات و "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
            {locale === "en" ? "Capabilities" : "القدرات"}
          </span>
        </h2>
      </motion.div>

      {/* Bento Grid Layout (12 Columns Desktop) */}
      <motion.div 
        variants={categoryContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10 max-w-screen-2xl mx-auto"
      >
        {categories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={category.title.en}
              variants={categoryCardVariants}
              className={`${category.colSpan} group/card rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl p-4 sm:p-5 shadow-xl dark:shadow-2xl hover:border-blue-500/30 transition-all duration-300 flex flex-col`}
            >
              <div>
                {/* Category Header */}
                <div className="flex flex-col mb-3 pb-2.5 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-white/5 text-blue-600 dark:text-blue-400 shrink-0">
                      <CategoryIcon className="text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                      {category.title[locale]}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                    {category.subtext[locale]}
                  </p>
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} locale={locale} />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
};

