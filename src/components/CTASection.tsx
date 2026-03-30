import { useTranslations } from "next-intl";
import { ContactForm } from "./ui/ContactForm";
import { Reveal } from "./ui/Reveal";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-forest py-16 sm:py-20 md:py-28 lg:py-36"
    >
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-24 bg-gold/40" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-gold/70">
            {t("label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-4 md:mb-6 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream leading-tight">
            {t("title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-8 md:mb-10 lg:mb-14 font-body text-sm md:text-base lg:text-lg text-cream/50 leading-relaxed max-w-xl mx-auto">
            {t("description")}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-24 bg-gold/40" />
    </section>
  );
}
