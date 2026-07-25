import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { SectionContainer } from "components/shared/SectionContainer";
import { 
  HiOutlineXMark, 
  HiGlobeAlt, 
  HiCheckCircle, 
  HiSparkles,
  HiArrowRight
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

// Import project screenshots relative to the component location
import growScreenshot from "../../assets/grow edu.png";
import commerceScreenshot from "../../assets/e-commerce.png";
import crudScreenshot from "../../assets/Crud-maniplation_.png";
import pharmacyScreenshot from "../../assets/filter app.png";
import githubAnalyticsScreenshot from "../../assets/git hub analitics.png";

// Interface for localized projects
interface LocalizedProject {
  id: number;
  title: { en: string; ar: string };
  badge: { en: string; ar: string };
  image: string;
  domain: string;
  description: { en: string; ar: string };
  tech: string[];
  liveLink: string;
  gitLink: string;
  features: { en: string[]; ar: string[] };
}

// English and Arabic localized projects data
const projectsData: LocalizedProject[] = [
  {
    id: 1,
    title: {
      en: "Grow Educational Platform",
      ar: "منصة غرو التعليمية"
    },
    badge: {
      en: "AI-Powered SaaS",
      ar: "منصة ساس بالذكاء الاصطناعي"
    },
    image: growScreenshot,
    domain: "grow-edu.online",
    description: {
      en: "Modern AI educational system with courses, quizzes, XP gamification, and real-time parent analytics dashboard.",
      ar: "نظام تعليمي حديث بالذكاء الاصطناعي يحتوي على دورات، اختبارات، ألعاب بالنقاط (XP)، ولوحة تحكم تحليلية فورية لأولياء الأمور."
    },
    tech: ["React", "Tailwind CSS", "Framer Motion", "REST API"],
    liveLink: "https://grow-frontend-sepia.vercel.app/",
    gitLink: "https://github.com/shehvb/Grow-frontend",
    features: {
      en: [
        "AI-driven learning paths and automated course recommendations",
        "Interactive quizzes and XP gamification elements to boost retention",
        "Real-time progress analytics dashboard for parents and teachers",
        "Fully responsive layout supporting all device form factors"
      ],
      ar: [
        "مسارات تعليمية مدعومة بالذكاء الاصطناعي واقتراحات دورات مؤتمتة",
        "اختبارات تفاعلية وعناصر ألعاب بالنقاط لتعزيز الاستيعاب والاهتمام",
        "لوحة تحكم تحليلية فورية لتقدم الطلاب مخصصة لأولياء الأمور والمعلمين",
        "تصميم متجاوب بالكامل يدعم جميع الأجهزة وأنظمة التشغيل"
      ]
    }
  },
  {
    id: 2,
    title: {
      en: "Web Commerce React",
      ar: "متجر الويب بريأكت"
    },
    badge: {
      en: "E-Commerce",
      ar: "تجارة إلكترونية"
    },
    image: commerceScreenshot,
    domain: "react-commerce.shop",
    description: {
      en: "Dynamic storefront practicing asynchronous state fetching, product manipulation, and REST API integration.",
      ar: "متجر ديناميكي يطبق جلب الحالات غير المتزامنة، التحكم في المنتجات، والربط الكامل مع واجهات REST API."
    },
    tech: ["React", "JavaScript", "RESTful APIs", "CSS3"],
    liveLink: "",
    gitLink: "https://github.com/shehvb/E-commerce-app",
    features: {
      en: [
        "Asynchronous product data fetching with search query parameters",
        "Dynamic cart calculations, inventory checks, and checkout flow",
        "Full support for product manipulation (add, edit, and delete items)",
        "Premium visual feedback on state updates with CSS Grid layout"
      ],
      ar: [
        "جلب منتجات غير متزامن مع معالجة عوامل البحث وتصفية الفئات فورياً",
        "عمليات سلة شراء ديناميكية وإدارة حالة المخزون وإتمام الطلب",
        "تحكم كامل بالمنتجات (إضافة وتعديل وحذف عناصر مخزن المنتجات)",
        "تأثيرات مرئية متميزة عند تحديث الحالات بتنسيق CSS Grid متقدم"
      ]
    }
  },
  {
    id: 3,
    title: {
      en: "Vanilla JS CRUD Engine",
      ar: "محرك CRUD بجافاسكريبت البسيطة"
    },
    badge: {
      en: "Web App Engine",
      ar: "محرك تطبيقات ويب"
    },
    image: crudScreenshot,
    domain: "crud-engine.local",
    description: {
      en: "LocalStorage-backed web application for product inventory management featuring real-time image uploads and dynamic search filtering.",
      ar: "تطبيق ويب مدعوم بالتخزين المحلي (LocalStorage) لإدارة مخزن المنتجات يتميز برفع الصور الفوري وتصفية البحث الديناميكية."
    },
    tech: ["Vanilla JavaScript", "HTML5", "CSS3", "LocalStorage"],
    liveLink: "",
    gitLink: "https://github.com/shehvb/Crud-maniplation",
    features: {
      en: [
        "Zero-dependency implementation using pure vanilla JavaScript",
        "Robust LocalStorage synchronization to preserve data across sessions",
        "Real-time image upload and base64 string conversion for previews",
        "Dynamic tabular sorting, search filters, and total value statistics"
      ],
      ar: [
        "تنفيذ بجافاسكريبت البسيطة بدون أي مكتبات أو أطر عمل خارجية",
        "مزامنة قوية وموثوقة مع التخزين المحلي LocalStorage لحفظ البيانات",
        "رفع صور فوري ومعاينتها باستخدام ترميز Base64 التلقائي",
        "فرز جداول ديناميكي وفلاتر بحث فورية وإحصائيات القيمة الكلية للمنتجات"
      ]
    }
  },
  {
    id: 4,
    title: {
      en: "E-Pharmacy Platform",
      ar: "منصة الصيدلية الإلكترونية"
    },
    badge: {
      en: "UI/UX Storefront",
      ar: "واجهة UI/UX متكاملة"
    },
    image: pharmacyScreenshot,
    domain: "e-pharmacy.ae",
    description: {
      en: "Responsive e-pharmacy web storefront showcasing modern layout systems and custom color theory gradients.",
      ar: "واجهة متجر صيدلية إلكترونية متجاوبة بالكامل تعرض أنظمة التخطيط الحديثة وتدرجات الألوان المخصصة."
    },
    tech: ["HTML5", "CSS3", "Responsive Design"],
    liveLink: "",
    gitLink: "https://github.com/shehvb/Filter-APP",
    features: {
      en: [
        "Crafted with modern CSS Grid and Flexbox responsive architectures",
        "Advanced palette leveraging professional color theory and visual contrast",
        "Intuitive product category navigation and visual hierarchy",
        "Highly optimized performance and lightweight asset loading"
      ],
      ar: [
        "تصميم مبني على أنظمة تخطيط CSS الحديثة (Grid و Flexbox)",
        "لوحة ألوان متقدمة تعتمد على علم نفس الألوان الاحترافي والتباين البصري",
        "تصفح تصنيفات بديهي وسهل للمنتجات مع تسلسل هرمي مرئي مريح",
        "أداء مُحسن للغاية وتنزيل خفيف وسريع لعناصر الصفحة"
      ]
    }
  },
  {
    id: 5,
    title: {
      en: "GitHub Analytics",
      ar: "تحليلات جيتهاب"
    },
    badge: {
      en: "API Dashboard",
      ar: "لوحة تحكم برمجية"
    },
    image: githubAnalyticsScreenshot,
    domain: "github-analytics.net",
    description: {
      en: "Analytical dashboard integrating GitHub API to track user repositories, commit statistics, language distributions, and contribution graphs.",
      ar: "لوحة تحكم تحليلية تدمج واجهة برمجة تطبيقات جيتهاب (GitHub API) لتتبع مستودعات المستخدم، إحصائيات الالتزامات (commits)، توزيع اللغات، ورسوم المساهمات البيانية."
    },
    tech: ["React", "JavaScript", "GitHub API", "Chart.js", "CSS3"],
    liveLink: "",
    gitLink: "https://github.com/shehvb/SHR4_SWD2_S1_PROJECT4/tree/main/GithubAnalytics",
    features: {
      en: [
        "Dynamic GitHub profile lookup and search interface",
        "Interactive data visualizations for repository language breakdown",
        "Detailed graphs tracking repository stars and contribution stats",
        "Optimized async fetching states and error handling layouts"
      ],
      ar: [
        "واجهة بحث تفاعلية للملفات الشخصية على جيتهاب مع عرض البيانات",
        "تحليل تفصيلي لتوزيع لغات البرمجة باستخدام الرسوم البيانية التفاعلية",
        "رسوم بيانية مخصصة لتتبع النجوم والالتزامات والمساهمات الخاصة بالمشاريع",
        "أداء محسن لحالات التحميل غير المتزامنة وتنسيقات معالجة الأخطاء"
      ]
    }
  }
];

// Header animation variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const ProjectsSection = () => {
  const { locale } = useLocaleContext();
  const [selectedProject, setSelectedProject] = useState<LocalizedProject | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resizing to toggle fanned cards view dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px matches Tailwind 'md' breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll on body and html (document.documentElement) when details modal is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (selectedProject) {
      body.classList.add("overflow-hidden");
      html.classList.add("overflow-hidden");
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.classList.remove("overflow-hidden");
      html.classList.remove("overflow-hidden");
      body.style.overflow = "";
      html.style.overflow = "";
    }
    return () => {
      body.classList.remove("overflow-hidden");
      html.classList.remove("overflow-hidden");
      body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [selectedProject]);

  // Rotations for 5 fanned cards in LTR and RTL directions
  const getRotation = (id: number) => {
    const isRtl = locale === "ar";
    switch (id) {
      case 1:
        return isRtl ? 12 : -12;
      case 2:
        return isRtl ? 6 : -6;
      case 3:
        return 0;
      case 4:
        return isRtl ? -6 : 6;
      case 5:
        return isRtl ? -12 : 12;
      default:
        return 0;
    }
  };

  // Y translations for curved 5-card fanned layout
  const getYOffset = (id: number) => {
    switch (id) {
      case 1:
      case 5:
        return 25;
      case 2:
      case 4:
        return 8;
      case 3:
      default:
        return 0;
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 dark:bg-[#070913] dark:text-slate-100 relative overflow-hidden transition-colors duration-500 snap-start">
      {/* Background glow visual accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <SectionContainer id="projects" showTopFade={false} showBottomFade={false} className="py-20 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 mb-4">
            <HiSparkles className="text-sm text-indigo-500 dark:text-indigo-400" />
            {locale === "en" ? "FEATURED WORK" : "أعمال مميزة"}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {locale === "en" ? "Selected " : "مشاريع "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400">
              {locale === "en" ? "Projects" : "مختارة"}
            </span>
          </h2>
        </motion.div>

        {/* Projects Layout */}
        <div className="w-full flex justify-center items-center relative z-20 min-h-[500px]">
          {isMobile ? (
            /* Mobile Layout: Simple Grid Stack */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4 justify-items-center">
              {projectsData.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-3xl p-5 w-full max-w-[330px] sm:max-w-[350px] shadow-xl dark:shadow-2xl flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div>
                    {/* Badge & Title */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                        {project.badge[locale]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-1">
                      {project.title[locale]}
                    </h3>

                    {/* Image Mockup Frame */}
                    <div className="bg-slate-100 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-inner mb-4">
                      <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-200/80 dark:bg-slate-900 border-b border-slate-300/70 dark:border-white/5">
                        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                        <div className="mx-auto bg-slate-300/60 dark:bg-slate-800/40 rounded text-[9px] text-slate-600 dark:text-slate-500 px-3 py-0.5 max-w-[100px] truncate text-center font-mono">
                          {project.domain}
                        </div>
                      </div>
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img
                          src={project.image}
                          alt={project.title[locale]}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 min-h-[60px] content-start">
                      {project.tech.map((tag) => (
                        <span key={tag} className="text-[10px] bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-white/5 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-white transition-all hover:border-indigo-500/30 dark:hover:border-cyan-500/30 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>{locale === "en" ? "View Details" : "عرض التفاصيل"}</span>
                    <HiArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180" />
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Desktop Layout: Fanned Overlapping Cards (Adjusted overlap for 5 cards) */
            <div className="flex items-center justify-center -space-x-16 lg:-space-x-20 py-10 relative">
              {projectsData.map((project) => {
                const rotationVal = getRotation(project.id);
                const yVal = getYOffset(project.id);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, rotate: rotationVal * 1.5, y: yVal + 50 }}
                    whileInView={{ opacity: 1, rotate: rotationVal, y: yVal }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    whileHover={{ 
                      rotate: 0, 
                      y: -30, 
                      scale: 1.05, 
                      zIndex: 50,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                    }}
                    onClick={() => setSelectedProject(project)}
                    className="bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-3xl p-5 w-[330px] lg:w-[350px] shadow-xl dark:shadow-2xl flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300 z-10 group cursor-pointer relative"
                  >
                    <div>
                      {/* Badge & Title */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                          {project.badge[locale]}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-1">
                        {project.title[locale]}
                      </h3>

                      {/* Image Mockup Frame */}
                      <div className="bg-slate-100 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-inner mb-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200/80 dark:bg-slate-900 border-b border-slate-300/70 dark:border-white/5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          <div className="mx-auto bg-slate-300/60 dark:bg-slate-800/40 rounded text-[9px] text-slate-600 dark:text-slate-500 px-3 py-0.5 max-w-[120px] truncate text-center font-mono">
                            {project.domain}
                          </div>
                        </div>
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={project.image}
                            alt={project.title[locale]}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5 min-h-[60px] content-start">
                        {project.tech.map((tag) => (
                          <span key={tag} className="text-[10px] bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-white/5 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-white transition-all hover:border-indigo-500/30 dark:hover:border-cyan-500/30 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>{locale === "en" ? "View Details" : "عرض التفاصيل"}</span>
                      <HiArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:rotate-180" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md cursor-zoom-out"
            />
            
            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="w-full max-w-5xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] overscroll-contain"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <HiOutlineXMark className="text-xl sm:text-2xl" />
              </button>

              {/* Modal Left - Image Preview */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center justify-center bg-slate-100/70 dark:bg-slate-950/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/5 overflow-y-auto overscroll-contain">
                <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl w-full">
                  {/* Browser Header Mockup in Modal */}
                  <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-200/90 dark:bg-slate-900/90 border-b border-slate-300/70 dark:border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <div className="mx-auto bg-slate-300/60 dark:bg-slate-800/50 rounded text-xs text-slate-700 dark:text-slate-400 px-4 py-0.5 max-w-[200px] truncate text-center font-mono">
                      {selectedProject.domain}
                    </div>
                  </div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title[locale]}
                    className="w-full h-auto max-h-[300px] md:max-h-[450px] object-contain bg-white dark:bg-slate-950"
                  />
                </div>
              </div>

              {/* Modal Right - Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto overscroll-contain">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                      {selectedProject.badge[locale]}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                    {selectedProject.title[locale]}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {selectedProject.description[locale]}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      {locale === "en" ? "Key Features" : "الميزات الرئيسية"}
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features[locale].map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <HiCheckCircle className="text-indigo-600 dark:text-indigo-400 text-sm mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      {locale === "en" ? "Technologies Used" : "التقنيات المستخدمة"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-xl border border-indigo-500/20 dark:border-indigo-500/10 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-white/5 justify-end">
                  <a
                    href={selectedProject.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-white transition-all cursor-pointer"
                  >
                    <FaGithub className="text-sm sm:text-base" />
                    <span>{locale === "en" ? "GitHub / Code" : "كود المشروع"}</span>
                  </a>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-500 dark:to-indigo-500 hover:from-blue-500 hover:to-indigo-500 dark:hover:from-cyan-400 dark:hover:to-indigo-400 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all cursor-pointer"
                    >
                      <HiGlobeAlt className="text-sm sm:text-base" />
                      <span>{locale === "en" ? "Live Demo" : "عرض مباشر"}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
