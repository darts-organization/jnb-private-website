import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-forest-dark py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-5 text-center">
          {/* Signature logo */}
          <Image
            src="/images/Signature_cream.svg"
            alt="JNB Private — Discretion. Vision. Growth."
            width={612}
            height={584}
            className="h-16 sm:h-20 w-auto opacity-20"
          />

          {/* Legal + Privacy on one line */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body text-[11px] text-cream/25">
            <span>{t("legal")}</span>
            <span className="hidden sm:inline text-cream/10">|</span>
            <a
              href={`/${locale}/privacy-policy`}
              className="underline underline-offset-2 hover:text-cream/45 transition-colors"
            >
              {t("privacy")}
            </a>
          </div>

          <p className="font-body text-[10px] text-cream/15" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} JNB Private. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
