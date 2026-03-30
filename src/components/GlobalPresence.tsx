import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { StaggerChildren } from "./ui/StaggerChildren";

export function GlobalPresence() {
  const t = useTranslations("presence");

  const offices = [
    {
      city: t("florence.city"),
      address: t("florence.address"),
      detail: t("florence.detail"),
      country: t("florence.country"),
    },
    {
      city: t("london.city"),
      address: t("london.address"),
      detail: t("london.detail"),
      country: t("london.country"),
    },
    {
      city: t("newYork.city"),
      address: t("newYork.address"),
      detail: t("newYork.detail"),
      country: t("newYork.country"),
    },
  ];

  return (
    <SectionWrapper bg="cream" padding="large">
      <Reveal>
        <TitleBlock label={t("label")} title={t("title")} align="center" />
      </Reveal>
      <StaggerChildren className="mx-auto grid max-w-5xl gap-px bg-forest/10 md:grid-cols-3" stagger={0.1}>
        {offices.map((office) => (
          <Reveal
            key={office.city}
            className="group bg-cream p-10 text-center transition-colors duration-300 hover:bg-forest/[0.03]"
          >
            <h3 className="mb-4 font-display text-2xl md:text-3xl uppercase tracking-wider">
              {office.city}
            </h3>
            <div className="mx-auto mb-4 h-px w-8 bg-forest/10 transition-all duration-500 group-hover:w-14 group-hover:bg-forest/25" />
            <div className="space-y-1 font-body text-sm text-forest/60">
              <p>{office.address}</p>
              <p>{office.detail}</p>
              <p>{office.country}</p>
            </div>
          </Reveal>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
