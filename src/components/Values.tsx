import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { StaggerChildren } from "./ui/StaggerChildren";

export function Values() {
  const t = useTranslations("values");

  const values = [
    { title: t("discretion.title"), description: t("discretion.description") },
    { title: t("vision.title"), description: t("vision.description") },
    { title: t("growth.title"), description: t("growth.description") },
  ];

  return (
    <SectionWrapper bg="forest" padding="large">
      <Reveal>
        <TitleBlock
          label={t("label")}
          title={t("title")}
          subtitle={t("description")}
          align="center"
          light
        />
      </Reveal>
      <StaggerChildren className="grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-14" stagger={0.12}>
        {values.map((value, i) => (
          <Reveal key={value.title} className="group text-center">
            <span className="mb-4 md:mb-6 block font-display text-4xl md:text-5xl lg:text-6xl text-cream/10">
              0{i + 1}
            </span>
            <div className="mx-auto mb-6 h-px w-10 bg-cream/15 transition-all duration-500 group-hover:w-16 group-hover:bg-cream/30" />
            <h3 className="mb-4 font-display text-2xl text-cream">
              {value.title}
            </h3>
            <p className="font-body text-sm md:text-base text-cream/60 leading-relaxed">
              {value.description}
            </p>
          </Reveal>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
