import { skills } from "data/skills";
import { useLocaleContext } from "app/providers/LocaleProvider";
import { SectionContainer } from "components/shared/SectionContainer";
import { SectionHeading } from "components/shared/SectionHeading";
import { SkillBadge } from "components/shared/SkillBadge";

export const SkillsSection = () => {
  const { locale, t } = useLocaleContext();
  return (
    <SectionContainer id="skills">
      <SectionHeading title={t("skills.title")} />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((category) => (
          <article key={category.id} className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
            <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">{category.title[locale]}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <SkillBadge key={item.name} label={item.name} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
};
