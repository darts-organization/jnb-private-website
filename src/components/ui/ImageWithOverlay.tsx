import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  accentColor: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export function ImageWithOverlay({
  src,
  alt,
  accentColor,
  width = 800,
  height = 600,
  className = "",
  priority = false,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        priority={priority}
      />
      {/* Top-right overlay square */}
      <div
        className="absolute top-0 right-0 h-16 w-16 md:h-20 md:w-20"
        style={{ backgroundColor: accentColor }}
      />
      {/* Bottom-left overlay square */}
      <div
        className="absolute bottom-0 left-0 h-16 w-16 md:h-20 md:w-20"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
