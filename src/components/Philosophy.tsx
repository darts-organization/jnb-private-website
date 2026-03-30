import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { StaggerChildren } from "./ui/StaggerChildren";

export function Philosophy() {
  const t = useTranslations("philosophy");

  const principles = [
    { title: t("independence.title"), description: t("independence.description") },
    { title: t("enduring.title"), description: t("enduring.description") },
    { title: t("focus.title"), description: t("focus.description") },
    { title: t("alignment.title"), description: t("alignment.description") },
    { title: t("institutional.title"), description: t("institutional.description") },
  ];

  return (
    <SectionWrapper bg="cream" padding="large">
      <Reveal>
        <TitleBlock
          label={t("label")}
          title={t("title")}
          align="center"
        />
      </Reveal>
      <StaggerChildren className="flex flex-wrap justify-center gap-px bg-forest/10" stagger={0.08}>
        {principles.map((p) => (
          <Reveal
            key={p.title}
            className="group bg-cream p-8 text-center transition-colors duration-300 hover:bg-forest/[0.03] w-full sm:w-[calc(50%-1px)] lg:w-[calc(20%-1px)]"
          >
            <div className="mx-auto mb-4 h-px w-8 bg-forest/10 transition-all duration-500 group-hover:w-12 group-hover:bg-forest/30" />
            <h3 className="mb-3 font-display text-lg md:text-xl">{p.title}</h3>
            <p className="font-body text-sm text-forest/55 leading-relaxed">
              {p.description}
            </p>
          </Reveal>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
