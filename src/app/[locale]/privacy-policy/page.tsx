import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://jnb-private.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: `${t("title")} — JNB Private`,
    description: t("intro").slice(0, 160),
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy-policy`,
      languages: {
        en: `${baseUrl}/en/privacy-policy`,
        it: `${baseUrl}/it/privacy-policy`,
        "x-default": `${baseUrl}/en/privacy-policy`,
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyContent />;
}

function PrivacyContent() {
  const t = useTranslations("privacy");

  const sections = [
    { title: t("controller.title"), content: t("controller.content") },
    { title: t("dataCollected.title"), content: t("dataCollected.content") },
    { title: t("purpose.title"), content: t("purpose.content") },
    { title: t("cookies.title"), content: t("cookies.content") },
    { title: t("thirdParty.title"), content: t("thirdParty.content") },
    { title: t("retention.title"), content: t("retention.content") },
    { title: t("rights.title"), content: t("rights.content") },
    { title: t("changes.title"), content: t("changes.content") },
    { title: t("contact.title"), content: t("contact.content") },
  ];

  return (
    <section className="bg-cream pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        {/* Header */}
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-forest/50">
          {t("label")}
        </p>
        <h1 className="mb-4 font-display text-3xl sm:text-4xl md:text-5xl text-forest leading-tight">
          {t("title")}
        </h1>
        <p className="mb-16 font-body text-sm text-forest/40">
          {t("lastUpdated")}
        </p>

        {/* Intro */}
        <p className="mb-16 font-body text-base md:text-lg text-forest/70 leading-relaxed">
          {t("intro")}
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-4 font-display text-xl md:text-2xl text-forest">
                {section.title}
              </h2>
              <div className="font-body text-sm md:text-base text-forest/65 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
