import { useLocaleContext } from "app/providers/LocaleProvider";
import { InputField } from "components/forms/InputField";
import { TextAreaField } from "components/forms/TextAreaField";
import { SectionContainer } from "components/shared/SectionContainer";
import { SectionHeading } from "components/shared/SectionHeading";
import { Button } from "components/ui/Button";
import { useContactForm } from "hooks/useContactForm";

export const ContactSection = () => {
  const { t } = useLocaleContext();
  const { form, status, errorMessage, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <SectionContainer id="contact">
      <SectionHeading title={t("contact.title")} />
      <form className="max-w-2xl rounded-xl border border-slate-200 p-6 dark:border-slate-700" onSubmit={onSubmit}>
        <InputField label={t("form.name")} {...register("name")} error={errors.name?.message} />
        <InputField label={t("form.email")} type="email" {...register("email")} error={errors.email?.message} />
        <TextAreaField label={t("form.message")} {...register("message")} error={errors.message?.message} />
        <div className="mt-4 flex items-center gap-3">
          <Button type="submit" loading={status === "submitting"}>
            {status === "submitting" ? t("feedback.loading") : t("contact.submit")}
          </Button>
          {status === "success" && <p className="text-sm text-emerald-600">{t("feedback.success")}</p>}
          {status === "error" && (
            <p className="text-sm text-red-600">{errorMessage === "submit_failed" ? t("feedback.error") : errorMessage}</p>
          )}
        </div>
      </form>
    </SectionContainer>
  );
};
