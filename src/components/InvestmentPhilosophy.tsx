import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { StaggerChildren } from "./ui/StaggerChildren";
import { AnimatedSquare } from "./ui/AnimatedSquare";
import Image from "next/image";

export function InvestmentPhilosophy() {
  const t = useTranslations("investment");

  const pillars = [
    { title: t("longTerm.title"), description: t("longTerm.description") },
    { title: t("analysis.title"), description: t("analysis.description") },
    { title: t("governance.title"), description: t("governance.description") },
    { title: t("alignment.title"), description: t("alignment.description") },
  ];

  return (
    <SectionWrapper bg="cream" padding="large">
      <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20 items-start">
        {/* Content */}
        <div>
          <Reveal>
            <Image
              src="/images/JnB_cuts_Investments.png"
              alt="JNB Investments"
              width={200}
              height={200}
              className="mb-8 h-16 md:h-20 w-auto"
            />
          </Reveal>
          <Reveal>
            <TitleBlock
              label={t("label")}
              title={t("title")}
              subtitle={t("description")}
            />
          </Reveal>
          <StaggerChildren className="grid gap-8 sm:grid-cols-2 -mt-4" stagger={0.1}>
            {pillars.map((pillar) => (
              <Reveal key={pillar.title} className="group">
                <div className="mb-4 h-1 w-8 bg-investment transition-all duration-300 group-hover:w-14" />
                <h3 className="mb-2 font-display text-lg md:text-xl">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-forest/60 leading-relaxed">
                  {pillar.description}
                </p>
              </Reveal>
            ))}
          </StaggerChildren>
        </div>

        {/* Visual */}
        <div className="relative">
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/photos/asset-mgmt.jpg"
                alt="Asset management"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-forest/25" />
            </div>
          </Reveal>
          <AnimatedSquare position="top-right" color="#D1BA6F" delay={0.6} />
          <AnimatedSquare position="bottom-left" color="#D1BA6F" delay={0.8} />
        </div>
      </div>
    </SectionWrapper>
  );
}
