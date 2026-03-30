import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "cream" | "forest" | "white";
  padding?: "default" | "large";
};

export function SectionWrapper({
  children,
  id,
  className = "",
  bg = "cream",
  padding = "default",
}: Props) {
  const bgClasses = {
    cream: "bg-cream text-forest",
    forest: "bg-forest text-cream",
    white: "bg-white text-forest",
  };

  const paddingClasses = {
    default: "py-12 sm:py-16 md:py-20 lg:py-28",
    large: "py-14 sm:py-20 md:py-24 lg:py-36",
  };

  return (
    <section
      id={id}
      className={`${bgClasses[bg]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">{children}</div>
    </section>
  );
}
