interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextAreaField = ({ label, error, ...props }: TextAreaFieldProps) => (
  <label className="mb-3 flex w-full flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
    <span>{label}</span>
    <textarea
      {...props}
      className="min-h-[120px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
    />
    {error && <span className="text-xs text-red-600">{error}</span>}
  </label>
);
