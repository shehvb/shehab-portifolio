interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const InputField = ({ label, error, ...props }: InputFieldProps) => (
  <label className="mb-3 flex w-full flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
    <span>{label}</span>
    <input
      {...props}
      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
    />
    {error && <span className="text-xs text-red-600">{error}</span>}
  </label>
);
