import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { StaggerChildren } from "./ui/StaggerChildren";

export function Leadership() {
  const t = useTranslations("leadership");

  const team = [
    {
      initials: "JG",
      name: t("jennifer.name"),
      role: t("jennifer.role"),
      description: t("jennifer.description"),
    },
    {
      initials: "YB",
      name: t("yves.name"),
      role: t("yves.role"),
      description: t("yves.description"),
    },
  ];

  return (
    <SectionWrapper id="leadership" bg="forest" padding="large">
      <Reveal>
        <TitleBlock
          label={t("label")}
          title={t("title")}
          align="center"
          light
        />
      </Reveal>
      <StaggerChildren className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:gap-16 lg:gap-20" stagger={0.15}>
        {team.map((member) => (
          <Reveal key={member.initials} className="group text-center">
            <div className="leadership-glow mx-auto mb-8 flex h-28 w-28 items-center justify-center border border-cream/20 transition-all duration-500 group-hover:border-investment/40">
              <span className="font-display text-3xl text-cream/80">
                {member.initials}
              </span>
            </div>
            <h3 className="mb-2 font-display text-2xl text-cream">
              {member.name}
            </h3>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.25em] text-cream/40">
              {member.role}
            </p>
            <div className="mx-auto mb-6 h-px w-10 bg-cream/15 transition-all duration-500 group-hover:w-16 group-hover:bg-cream/30" />
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              {member.description}
            </p>
          </Reveal>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
