"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function ContactForm() {
  const t = useTranslations("cta");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
    const data = {
      name: `${firstName} ${lastName}`,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-transparent border-b border-cream/20 px-0 py-3.5 font-body text-sm text-cream placeholder:text-cream/30 focus:border-gold/60 focus:outline-none transition-colors duration-300";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-8">
      {/* First name / Last name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstName"
          required
          placeholder={t("firstNamePlaceholder")}
          className={inputClasses}
        />
        <input
          type="text"
          name="lastName"
          required
          placeholder={t("lastNamePlaceholder")}
          className={inputClasses}
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          required
          placeholder={t("emailPlaceholder")}
          className={inputClasses}
        />
      </div>

      <div>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={t("messagePlaceholder")}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="pt-4">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          className="shimmer-btn inline-block ring-[1.5px] ring-inset ring-cream/60 bg-transparent text-cream hover:bg-cream hover:text-forest hover:shadow-[0_4px_24px_rgba(245,237,223,0.12)] px-10 py-4 font-body text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          whileHover={status !== "sending" ? { scale: 1.03 } : {}}
          whileTap={status !== "sending" ? { scale: 0.97 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {status === "sending" ? t("sending") : t("submit")}
        </motion.button>
      </div>

      {status === "success" && (
        <p className="font-body text-sm text-gold/80">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="font-body text-sm text-terracotta/80">{t("error")}</p>
      )}
    </form>
  );
}
