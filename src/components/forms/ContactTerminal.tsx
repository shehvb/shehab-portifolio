import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { HiPaperAirplane, HiCheckCircle, HiExclamationCircle, HiCommandLine } from "react-icons/hi2";

// Configure your Formspree ID here
export const FORMSPREE_ID = "xeevvlro";

export const ContactTerminal = () => {
  const { locale } = useLocaleContext();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [logMessage, setLogMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setLogMessage(locale === "en" ? "> [LOG] Dispatching POST request to Formspree endpoint..." : "> [LOG] جاري إرسال الطلب إلى خادم Formspree...");

    try {
      const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setLogMessage(
          locale === "en"
            ? "> [SUCCESS] 200 OK: Payload delivered! I'll reply within 24 hours."
            : "> [SUCCESS] 200 OK: تم تسليم الرسالة بنجاح! سأقوم بالرد خلال 24 ساعة."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Formspree request failed");
      }
    } catch {
      setStatus("error");
      setLogMessage(
        locale === "en"
          ? "> [ERROR] Failed to execute send(). Please retry or email directly."
          : "> [ERROR] فشل في تنفيذ دالة الإرسال. يرجى المحاولة مرة أخرى أو المراسلة مباشرة."
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group rounded-3xl bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden max-w-3xl mx-auto hover:border-blue-500/40 transition-all duration-300"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-slate-200/90 dark:bg-slate-950/70 border-b border-slate-300/80 dark:border-white/5">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
          </div>
          <span className="ml-1 sm:ml-2 text-xs font-mono text-slate-700 dark:text-slate-400 tracking-wide font-medium flex items-center gap-1.5">
            <HiCommandLine className="text-blue-500 text-sm" />
            contact_form.sh
          </span>
        </div>

        {/* Live Formspree Pulse Status Indicator */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">FORMSPREE ONLINE</span>
          <span className="sm:hidden">ONLINE</span>
        </div>
      </div>

      {/* Terminal Body & Form */}
      <form onSubmit={handleSubmit} className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-4">
        {/* CLI Comment Header */}
        <div className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm leading-relaxed">
          {"// Run send() to dispatch a direct email to my inbox"}
        </div>

        {/* Name Input Variable */}
        <div className="space-y-1.5">
          <label htmlFor="terminal-name" className="block text-slate-700 dark:text-slate-300">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{" "}
            <span className="text-blue-600 dark:text-blue-300 font-medium">sender</span>{" "}
            <span className="text-slate-500 dark:text-slate-400">=</span>
          </label>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 focus-within:border-blue-500/50 transition-colors">
            <span className="text-emerald-600 dark:text-green-400 font-bold">"</span>
            <input
              id="terminal-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={locale === "en" ? "John Doe" : "اسمك الكريِم"}
              className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm"
            />
            <span className="text-emerald-600 dark:text-green-400 font-bold">"</span>
            <span className="text-slate-500 dark:text-slate-400">;</span>
          </div>
        </div>

        {/* Email Input Variable */}
        <div className="space-y-1.5">
          <label htmlFor="terminal-email" className="block text-slate-700 dark:text-slate-300">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{" "}
            <span className="text-blue-600 dark:text-blue-300 font-medium">replyTo</span>{" "}
            <span className="text-slate-500 dark:text-slate-400">=</span>
          </label>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 focus-within:border-blue-500/50 transition-colors">
            <span className="text-emerald-600 dark:text-green-400 font-bold">"</span>
            <input
              id="terminal-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm"
            />
            <span className="text-emerald-600 dark:text-green-400 font-bold">"</span>
            <span className="text-slate-500 dark:text-slate-400">;</span>
          </div>
        </div>

        {/* Message Textarea Variable */}
        <div className="space-y-1.5">
          <label htmlFor="terminal-message" className="block text-slate-700 dark:text-slate-300">
            <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{" "}
            <span className="text-blue-600 dark:text-blue-300 font-medium">message</span>{" "}
            <span className="text-slate-500 dark:text-slate-400">=</span>
          </label>
          <div className="bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl p-4 focus-within:border-blue-500/50 transition-colors">
            <div className="text-emerald-600 dark:text-green-400 font-bold mb-1">`</div>
            <textarea
              id="terminal-message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={
                locale === "en"
                  ? "Hello Shehab, I'd like to discuss a project..."
                  : "مرحباً شهاب، أود مناقشة مشروع جديد..."
              }
              className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm resize-none"
            />
            <div className="text-emerald-600 dark:text-green-400 font-bold mt-1">`;</div>
          </div>
        </div>

        {/* Interactive Submit Button */}
        <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-mono font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 transition-all"
          >
            {status === "submitting" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Executing send()...</span>
              </>
            ) : (
              <>
                <HiPaperAirplane className="text-sm rotate-45" />
                <span>$ ./send_message.sh</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Live Execution Logs */}
        {logMessage && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-xl font-mono text-xs leading-relaxed border flex items-start gap-2 ${
              status === "submitting"
                ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-300"
                : status === "success"
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
            }`}
          >
            {status === "submitting" && <HiCommandLine className="text-base shrink-0 mt-0.5 animate-pulse" />}
            {status === "success" && <HiCheckCircle className="text-base shrink-0 mt-0.5" />}
            {status === "error" && <HiExclamationCircle className="text-base shrink-0 mt-0.5" />}
            <span>{logMessage}</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};
