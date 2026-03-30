"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as "en" | "it")) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/") || "/");
  }

  return (
    <div className="flex items-center gap-1 font-body text-xs uppercase tracking-[0.15em]">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="mx-1.5 opacity-30">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`transition-opacity duration-200 ${
              locale === loc
                ? "opacity-100 font-medium"
                : "opacity-40 hover:opacity-70"
            }`}
            aria-label={`Switch to ${loc === "en" ? "English" : "Italiano"}`}
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
