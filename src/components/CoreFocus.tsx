import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { StaggerChildren } from "./ui/StaggerChildren";
import { AnimatedSquare } from "./ui/AnimatedSquare";
import Image from "next/image";

export function CoreFocus() {
  const t = useTranslations("coreFocus");

  const services = [
    t("services.tracking"),
    t("services.scouting"),
    t("services.postSale"),
    t("services.partners"),
  ];

  return (
    <SectionWrapper bg="forest" padding="large">
      <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Visual — Photo + sub-brand logo */}
        <div className="relative order-2 lg:order-1">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/photos/house_interior.png"
                alt="Luxury real estate advisory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-forest/30" />
            </div>
          </Reveal>
          <AnimatedSquare position="top-right" color="#A05A53" delay={0.5} />
          <AnimatedSquare position="bottom-left" color="#A05A53" delay={0.7} />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Image
              src="/images/JnB_cuts_Living.png"
              alt="JNB Living"
              width={200}
              height={200}
              className="mb-8 h-16 md:h-20 w-auto brightness-0 invert"
            />
          </Reveal>
          <Reveal>
            <TitleBlock
              label={t("label")}
              title={t("title")}
              subtitle={t("subtitle")}
              light
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-10 font-body text-base md:text-lg text-cream/65 leading-relaxed -mt-8">
              {t("description")}
            </p>
          </Reveal>
          <StaggerChildren className="space-y-4" stagger={0.06}>
            {services.map((service) => (
              <Reveal key={service} as="li" className="flex items-start gap-4 font-body text-sm md:text-base text-cream/80 list-none">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-real-estate" />
                {service}
              </Reveal>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </SectionWrapper>
  );
}
