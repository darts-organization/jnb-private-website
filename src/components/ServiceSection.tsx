import { useTranslations } from "next-intl";
import { SectionWrapper } from "./ui/SectionWrapper";
import { TitleBlock } from "./ui/TitleBlock";
import { Reveal } from "./ui/Reveal";
import { StaggerChildren } from "./ui/StaggerChildren";
import { AnimatedSquare } from "./ui/AnimatedSquare";
import Image from "next/image";

type Variant = "realEstate" | "aviation" | "yacht" | "assetManagement";
type AccentColor = "real-estate" | "aviation" | "yacht" | "asset-mgmt";

type Props = {
  variant: Variant;
  accentColor: AccentColor;
};

const PHOTO_MAP: Partial<Record<Variant, string>> = {
  aviation: "/images/photos/jet_interior.png",
  yacht: "/images/photos/yacht_interior.jpg",
};

const COLOR_HEX: Record<AccentColor, string> = {
  "real-estate": "#A05A53",
  aviation: "#929B97",
  yacht: "#123A5B",
  "asset-mgmt": "#497C70",
};

const BG_MAP: Record<Variant, "cream" | "forest" | "white"> = {
  realEstate: "cream",
  aviation: "forest",
  yacht: "cream",
  assetManagement: "forest",
};

const LOGO_MAP: Record<Variant, string> = {
  realEstate: "/images/JnB_cuts_Living.png",
  aviation: "/images/JnB_cuts_Air.png",
  yacht: "/images/JnB_cuts_Sea.png",
  assetManagement: "/images/JnB_cuts_Services & management.png",
};

const ALT_MAP: Record<Variant, string> = {
  realEstate: "Luxury real estate",
  aviation: "Private aviation",
  yacht: "Luxury yacht",
  assetManagement: "Asset management",
};

function SectionVisual({
  photo,
  alt,
  hex,
  isForest = false,
}: {
  photo: string;
  alt: string;
  hex: string;
  isForest?: boolean;
}) {
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={photo}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className={`absolute inset-0 ${isForest ? "bg-forest/30" : "bg-forest/20"}`} />
      </div>
      <AnimatedSquare position="top-right" color={hex} delay={0.5} />
      <AnimatedSquare position="bottom-left" color={hex} delay={0.7} />
    </div>
  );
}

export function ServiceSection({ variant, accentColor }: Props) {
  const t = useTranslations(variant);
  const isForest = BG_MAP[variant] === "forest";
  const hex = COLOR_HEX[accentColor];
  const logo = LOGO_MAP[variant];
  const alt = ALT_MAP[variant];

  if (variant === "realEstate") {
    return (
      <RealEstateSection
        t={t}
        hex={hex}
      />
    );
  }

  if (variant === "assetManagement") {
    return (
      <AssetManagementSection
        t={t}
        hex={hex}
        isForest={isForest}
        logo={logo}
      />
    );
  }

  return (
    <ListServiceSection
      t={t}
      variant={variant}
      hex={hex}
      isForest={isForest}
      photo={PHOTO_MAP[variant]!}
      logo={logo}
      alt={alt}
    />
  );
}

function RealEstateSection({
  t,
  hex,
}: {
  t: ReturnType<typeof useTranslations>;
  hex: string;
}) {
  const cards = [
    { title: t("residential.title"), description: t("residential.description") },
    { title: t("lifestyle.title"), description: t("lifestyle.description") },
    { title: t("discreet.title"), description: t("discreet.description") },
  ];

  return (
    <SectionWrapper bg="cream">
      <Reveal>
        <Image
          src="/images/JnB_cuts_Living.png"
          alt="JNB Living"
          width={200}
          height={200}
          className="mb-8 h-16 md:h-20 w-auto"
        />
      </Reveal>
      <Reveal>
        <TitleBlock label={t("label")} title={t("title")} subtitle={t("description")} />
      </Reveal>
      <StaggerChildren className="grid gap-8 md:grid-cols-3" stagger={0.1}>
        {cards.map((card) => (
          <Reveal key={card.title} className="group">
            <div
              className="mb-6 h-1 w-10 transition-all duration-300 group-hover:w-16"
              style={{ backgroundColor: hex }}
            />
            <h3 className="mb-4 font-display text-xl md:text-2xl">{card.title}</h3>
            <p className="font-body text-sm md:text-base text-forest/65 leading-relaxed">
              {card.description}
            </p>
          </Reveal>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}

function AssetManagementSection({
  t,
  hex,
  isForest,
  logo,
}: {
  t: ReturnType<typeof useTranslations>;
  hex: string;
  isForest: boolean;
  logo: string;
}) {
  const cards = [
    { title: t("acquisition.title"), description: t("acquisition.description") },
    { title: t("repositioning.title"), description: t("repositioning.description") },
    { title: t("legacy.title"), description: t("legacy.description") },
    { title: t("postAcquisition.title"), description: t("postAcquisition.description") },
  ];

  return (
    <SectionWrapper bg={isForest ? "forest" : "cream"}>
      <Reveal>
        <Image
          src={logo}
          alt=""
          width={200}
          height={200}
          className={`mb-8 h-16 md:h-20 w-auto ${isForest ? "brightness-0 invert" : ""}`}
        />
      </Reveal>
      <Reveal>
        <TitleBlock
          label={t("label")}
          title={t("title")}
          subtitle={t("description")}
          light={isForest}
        />
      </Reveal>
      <StaggerChildren className="grid gap-8 md:grid-cols-2" stagger={0.1}>
        {cards.map((card) => (
          <Reveal
            key={card.title}
            className="group border-l-2 pl-8 py-2"
            style={{ borderLeftColor: hex }}
          >
            <h3
              className={`mb-3 font-display text-xl md:text-2xl ${
                isForest ? "text-cream" : "text-forest"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`font-body text-sm md:text-base leading-relaxed ${
                isForest ? "text-cream/60" : "text-forest/60"
              }`}
            >
              {card.description}
            </p>
          </Reveal>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}

function ListServiceSection({
  t,
  variant,
  hex,
  isForest,
  photo,
  logo,
  alt,
}: {
  t: ReturnType<typeof useTranslations>;
  variant: Variant;
  hex: string;
  isForest: boolean;
  photo: string;
  logo: string;
  alt: string;
}) {
  const serviceKeys =
    variant === "aviation"
      ? ["acquisition", "intelligence", "offMarket", "strategy", "oversight"]
      : ["acquisition", "intelligence", "offMarket", "strategy", "management"];

  const services = serviceKeys.map((key) => t(`services.${key}`));
  const imageOnRight = variant === "yacht";

  return (
    <SectionWrapper bg={isForest ? "forest" : "cream"}>
      <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <Reveal
          className={`relative order-2 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
        >
          <SectionVisual photo={photo} alt={alt} hex={hex} isForest={isForest} />
        </Reveal>

        <div className={`order-1 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
          <Reveal>
            <Image
              src={logo}
              alt=""
              width={200}
              height={200}
              className={`mb-8 h-16 md:h-20 w-auto ${isForest ? "brightness-0 invert" : ""}`}
            />
          </Reveal>
          <Reveal>
            <TitleBlock
              label={t("label")}
              title={t("title")}
              light={isForest}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className={`mb-10 font-body text-base md:text-lg leading-relaxed -mt-8 ${
                isForest ? "text-cream/65" : "text-forest/65"
              }`}
            >
              {t("description")}
            </p>
          </Reveal>
          <StaggerChildren className="space-y-4" stagger={0.06}>
            {services.map((service) => (
              <Reveal
                key={service}
                as="li"
                className={`flex items-start gap-4 font-body text-sm md:text-base list-none ${
                  isForest ? "text-cream/80" : "text-forest/80"
                }`}
              >
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0"
                  style={{ backgroundColor: hex }}
                />
                {service}
              </Reveal>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </SectionWrapper>
  );
}
