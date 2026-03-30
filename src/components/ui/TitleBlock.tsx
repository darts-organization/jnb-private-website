type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function TitleBlock({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: Props) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const labelColor = light ? "text-cream/60" : "text-forest/50";
  const subtitleColor = light ? "text-cream/70" : "text-forest/70";

  return (
    <div className={`${alignClass} mb-8 md:mb-12 lg:mb-16 max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {label && (
        <p
          className={`mb-4 font-body text-xs font-medium uppercase tracking-[0.25em] ${labelColor}`}
        >
          {label}
        </p>
      )}
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 md:mt-6 font-body text-base md:text-lg lg:text-xl leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
