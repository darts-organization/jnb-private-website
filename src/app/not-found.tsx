import Image from "next/image";
import "./globals.css";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest px-6 text-center">
          {/* Large decorative 404 in background */}
          <span className="pointer-events-none absolute select-none font-display text-[12rem] sm:text-[18rem] md:text-[24rem] text-cream/2 leading-none animate-fade-in">
            404
          </span>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center animate-fade-up">
            {/* Brandmark */}
            <Image
              src="/images/Brandmark_cream.svg"
              alt=""
              width={80}
              height={80}
              className="mb-10 h-14 w-14 opacity-15"
              aria-hidden="true"
            />

            {/* Label */}
            <p className="mb-6 font-body text-[10px] font-medium uppercase tracking-[0.4em] text-cream/30">
              Page Not Found
            </p>

            {/* Headline */}
            <h1 className="mb-4 font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-tight">
              Nothing here
            </h1>

            {/* Divider */}
            <div className="mb-8 h-px w-16 bg-cream/15" />

            {/* Description */}
            <p className="mb-12 max-w-sm font-body text-sm sm:text-base text-cream/40 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            {/* CTA */}
            <a
              href="/"
              className="shimmer-btn inline-block ring-[1.5px] ring-inset ring-cream bg-transparent px-10 py-4 font-body text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-cream hover:text-forest"
            >
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
