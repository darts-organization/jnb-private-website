import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { AnimatedSquare } from "./ui/AnimatedSquare";
import Image from "next/image";

export function About() {
  const t = useTranslations("about");

  return (
    <SectionWrapper id="about" bg="cream" padding="large">
      <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <Reveal>
            <TitleBlock label={t("label")} title={t("title")} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 font-body text-base md:text-lg text-forest/75 leading-relaxed -mt-8">
              <p>{t("description")}</p>
              <p>{t("description2")}</p>
              <p>{t("description3")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12">
              <div className="h-px w-16 bg-forest/25 mb-8" />
              <p className="font-body text-sm uppercase tracking-[0.2em] text-forest/50">
                {t("description4")}
              </p>
              <p className="mt-3 font-display text-2xl md:text-3xl text-forest tracking-tight">
                {t("description5")}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="relative">
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/photos/about.jpg"
                alt="Florence, Italy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-forest/20" />
            </div>
          </Reveal>
          <AnimatedSquare position="top-right" color="#19281A" delay={0.6} />
          <AnimatedSquare position="bottom-left" color="#19281A" delay={0.8} />
        </div>
      </div>
    </SectionWrapper>
  );
}
